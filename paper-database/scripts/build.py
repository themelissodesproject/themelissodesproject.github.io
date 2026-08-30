#!/usr/bin/env python3
"""
Build script for The Melissodes Project paper database.

This page lives inside a larger site: the page itself is served from the
site root as `paper-database.html`, while everything that supports it
(source data, frontend script, this build script) lives alongside it in
the `paper-database/` directory. The build mirrors that same split in its
output so the page's relative references keep resolving the same way in
both places:
  - source: <site-root>/paper-database.html + <site-root>/paper-database/{js,data}/...
  - built:  dist/paper-database.html        + dist/paper-database/{js,data,records}/...

Reads paper-database/data/papers.json (which includes private OCR full
text) and produces a dist/ tree where:
  - dist/paper-database.html is a copy of the page itself.
  - dist/paper-database/js/app.js is a copy of the frontend script.
  - dist/paper-database/records/<id>.html holds the OCR text wrapped for
    Pagefind indexing only. These pages are never linked from the UI, are
    marked noindex, and render no reading-friendly layout -- they exist
    purely as index fodder.
  - dist/paper-database/data/catalog.json holds everything EXCEPT
    ocr_text, for the frontend to use when rendering cards, badges, and
    filters.

Per-paper fields in papers.json beyond the obvious bibliographic ones:
  - species / topics: also indexed as free-text search terms (not just as
    exact-match sidebar filters), so a query like "Melissodes rivalis
    biology" matches a paper tagged with that species and topic even if
    the OCR text never uses those words together.
  - associated_organisms: non-Melissodes organisms directly tied to a
    Melissodes species in the paper -- host/forage plants they were
    actually recorded on, and parasites, parasitoids, cleptoparasites,
    predators, pathogens, or competitors directly affecting them. NOT a
    general species list for the paper (no incidental co-occurring bees,
    no plants never visited by Melissodes). Each entry is
    {"name": ..., "relationship": ...}; indexed as free text alongside
    keywords/species/topics and shown on the paper's card.
  - keywords: a short list of relevance tags -- the intended workflow is
    to have an AI read the OCR text and answer "what does this paper say
    about Melissodes, and what is it about (taxonomy, biology, host/
    parasite relationships, etc.)?", then list those as keywords here.
    Also indexed as free text and shown on the paper's card.
  - overview: a short AI-written summary of what the paper covers,
    produced the same way. Shown on the card and indexed as free text
    (moderately weighted -- below keywords/species/topics, above the raw
    OCR body).

Run `npx pagefind --site dist/paper-database` after this script to build
the search index (scoped to dist/paper-database, not the whole dist/,
since that's the directory app.js's own relative pagefind import resolves
against -- see the note by pagefind import in app.js).
"""
import json
import hashlib
import shutil
import re
from pathlib import Path

PKG = Path(__file__).resolve().parent.parent      # .../paper-database
ROOT = PKG.parent                                 # site root
DATA = PKG / "data"
FULLTEXT = DATA / "fulltext"
JS_SRC = PKG / "js"
HTML_SRC = ROOT / "paper-database.html"
DIST = ROOT / "dist"
DIST_PKG = DIST / "paper-database"

# Written into the record HTML immediately before the OCR text, and used
# by app.js (OCR_MARKER there -- keep the two in sync) to find where the
# real paper text starts within Pagefind's plain-text `content` field.
# Everything before this marker is curated metadata (species/topic/keyword
# tags, overview, abstract); everything after it is the actual OCR. The
# frontend uses this split to guarantee the "matched text" box it shows a
# person is always quoted from the real paper, never from a metadata tag,
# even when the search match itself came from metadata.
OCR_MARKER = "OCRFULLTEXTSTARTMARKER8f3c1"


def species_color(name: str) -> str:
    """Deterministic, pleasant color per species name so badges stay stable
    across builds without hand-maintaining a color table."""
    h = int(hashlib.sha256(name.encode("utf-8")).hexdigest(), 16)
    hue = h % 360
    return f"hsl({hue}, 46%, 38%)"


def esc(s: str) -> str:
    return (s.replace("&", "&amp;").replace("<", "&lt;")
             .replace(">", "&gt;").replace('"', "&quot;"))


def slugify(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def build():
    papers = json.loads((DATA / "papers.json").read_text(encoding="utf-8"))
    topics = json.loads((DATA / "topics.json").read_text(encoding="utf-8"))
    topic_by_id = {t["id"]: t for t in topics}

    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)
    DIST_PKG.mkdir()
    (DIST_PKG / "records").mkdir()
    (DIST_PKG / "data").mkdir()

    # Copy the page itself to the dist root, and the frontend script into
    # dist/paper-database/js -- this mirrors the source layout so
    # paper-database.html's own reference to "paper-database/js/app.js",
    # and app.js's own relative fetch()/import calls, resolve exactly the
    # same way in dist/ as they do in the source tree.
    shutil.copy2(HTML_SRC, DIST / "paper-database.html")
    shutil.copytree(JS_SRC, DIST_PKG / "js")

    seen_ids = set()
    all_species = {}
    catalog = []

    for p in papers:
        pid = p["id"]
        if pid in seen_ids:
            raise SystemExit(f"Duplicate paper id: {pid}")
        seen_ids.add(pid)

        for sp in p.get("species", []):
            all_species[sp] = species_color(sp)

        topic_labels = [topic_by_id[t]["label"] for t in p.get("topics", []) if t in topic_by_id]

        # Public metadata (no ocr_text) for the frontend catalog.
        catalog.append({
            "id": pid,
            "title": p["title"],
            "authors": p.get("authors", []),
            "year": p.get("year"),
            "journal": p.get("journal", ""),
            "volume": p.get("volume", ""),
            "pages": p.get("pages", ""),
            "doi": p.get("doi", ""),
            "legal_url": p.get("legal_url", ""),
            "source_type": p.get("source_type", ""),
            "topics": p.get("topics", []),
            "species": p.get("species", []),
            "associated_organisms": p.get("associated_organisms", []),
            "abstract": p.get("abstract", ""),
            "overview": p.get("overview", ""),
            "keywords": p.get("keywords", []),
            "added_date": p.get("added_date", ""),
        })

        # Hidden index-only fragment. Not linked anywhere in the UI.
        # Full text lives in its own file, not inline in papers.json --
        # OCR for a long paper can run to a megabyte-plus of plain text,
        # and keeping that out of the metadata file keeps papers.json
        # small, diffable, and free of JSON-escaping headaches when you
        # paste raw OCR output in by hand.
        txt_path = FULLTEXT / f"{pid}.txt"
        if txt_path.exists():
            ocr = txt_path.read_text(encoding="utf-8")
        else:
            ocr = ""
            print(f"  [warn] no fulltext file for '{pid}' -- expected {txt_path.relative_to(ROOT)}")

        filter_pairs = [f"species:{esc(sp)}" for sp in p.get("species", [])]
        filter_pairs += [f"topic:{esc(t)}" for t in p.get("topics", [])]
        if p.get("year"):
            filter_pairs.append(f"year:{esc(str(int(p['year'])))}")
        filter_attr = ", ".join(filter_pairs)

        # Metadata as searchable TEXT, not just as exact-match filter values.
        # data-pagefind-filter only powers the sidebar's exact-match chips --
        # it never makes "Melissodes rivalis" or "biology" matchable as free
        # text. Repeating the same species/topic/keyword values here as
        # plain indexed words is what lets a query like "Melissodes rivalis
        # biology" surface a paper tagged with that species and topic, even
        # if the OCR text itself never uses those exact words together.
        # Weighted above the OCR body (1x, implicit) since these are
        # curated, high-confidence tags -- but below the title.
        species_names = p.get("species", [])
        keywords = p.get("keywords", [])
        # Each associated_organisms entry is {"name": ..., "relationship": ...}.
        # Index both parts as free text (e.g. "Triepeolus" and "cleptoparasite"
        # should each be independently matchable), same as species/topics/keywords.
        organism_terms = []
        for org in p.get("associated_organisms", []):
            if org.get("name"):
                organism_terms.append(org["name"])
            if org.get("relationship"):
                organism_terms.append(org["relationship"])
        metadata_terms = species_names + topic_labels + keywords + organism_terms
        metadata_search_text = ", ".join(metadata_terms)
        overview = p.get("overview", "")

        record_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>{esc(p['title'])}</title>
</head>
<body>
<!--
  Index-only fragment. This page exists so the static search index can
  match against full text; it is intentionally not linked from anywhere
  in the site UI and carries no reading layout. See legal_url for the
  actual publication.
-->
<article data-pagefind-body
  data-pagefind-filter="{filter_attr}"
  >
  <!--
    Two separate data-pagefind-meta attributes, not one comma-joined
    "title:..., paper_id:..." attribute -- Pagefind does not reliably
    split multiple key:value pairs out of a single attribute, and was
    observed folding paper_id into the tail of the title value instead
    of exposing it as its own meta field. One attribute per element
    sidesteps that entirely.
  -->
  <h1 data-pagefind-meta="title">{esc(p['title'])}</h1>
  <span data-pagefind-meta="paper_id:{esc(pid)}" hidden></span>
  <p>{esc(', '.join(p.get('authors', [])))} ({p.get('year', '')}). {esc(p.get('journal',''))}.</p>
  <div data-pagefind-weight="5">{esc(metadata_search_text)}</div>
  <div data-pagefind-weight="3">{esc(overview)}</div>
  <div data-pagefind-weight="0.3">{esc(p.get('abstract',''))}</div>
  <div>{OCR_MARKER} {esc(ocr)}</div>
</article>
</body>
</html>
"""
        (DIST_PKG / "records" / f"{pid}.html").write_text(record_html, encoding="utf-8")

    catalog.sort(key=lambda p: (-(p["year"] or 0), p["title"]))

    (DIST_PKG / "data" / "catalog.json").write_text(
        json.dumps(catalog, indent=2), encoding="utf-8")
    (DIST_PKG / "data" / "topics.json").write_text(
        json.dumps(topics, indent=2), encoding="utf-8")
    (DIST_PKG / "data" / "species.json").write_text(
        json.dumps([{"name": k, "color": v} for k, v in sorted(all_species.items())], indent=2),
        encoding="utf-8")

    print(f"Built {len(papers)} records, {len(all_species)} species, {len(topics)} topics.")
    print("Next: npx pagefind --site dist/paper-database")


if __name__ == "__main__":
    build()