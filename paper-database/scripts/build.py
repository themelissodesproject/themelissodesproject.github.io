#!/usr/bin/env python3
"""
Build script for The Melissodes Project paper database.

This runs IN PLACE, only ever touching files under paper-database/. It
does not build, copy, or know anything about the rest of the site --
your other pages, images, and any large media folders are never read,
copied, or rebuilt. The wider site keeps deploying exactly however it
already does (e.g. GitHub Pages "Deploy from a branch" straight off this
repo) with zero involvement from this script.

Reads paper-database/data/papers.json (metadata only -- the private OCR
full text lives separately, one .txt per paper, in
paper-database/data/fulltext/) and writes, in place:
  - paper-database/records/<id>.html -- the OCR text wrapped for Pagefind
    indexing only. These pages are never linked from the UI, are marked
    noindex, and render no reading-friendly layout -- they exist purely
    as index fodder. See the README's privacy-model section for the
    honest caveat about what "hidden" does and doesn't guarantee on a
    plain static host.
  - paper-database/data/catalog.json -- papers.json's fields, sorted and
    defaulted, for the frontend to render cards/badges/filters from.
    (papers.json itself never contains OCR text, so this step is about
    consistent sorting/defaults, not stripping anything private.)
  - paper-database/data/species.json -- a stable color per species name.
  paper-database/data/topics.json is NOT regenerated -- the frontend
  fetches your hand-maintained source file directly, since in-place means
  there's nowhere else for it to live.

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

Run `npx pagefind --site paper-database` after this script to build the
search index in place (paper-database/pagefind/) -- scoped to
paper-database/, not the whole repo, since that's the directory app.js's
own relative pagefind import resolves against -- see the note by the
pagefind import in app.js. The CI workflow (.github/workflows/*.yml) runs
both steps and commits the generated files back to the branch; you don't
need to run this by hand unless you're testing locally.
"""
import json
import hashlib
import re
from pathlib import Path

PKG = Path(__file__).resolve().parent.parent      # .../paper-database
DATA = PKG / "data"
FULLTEXT = DATA / "fulltext"
RECORDS = PKG / "records"

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

    RECORDS.mkdir(parents=True, exist_ok=True)

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
            print(f"  [warn] no fulltext file for '{pid}' -- expected {txt_path.relative_to(PKG.parent)}")

        # One data-pagefind-filter attribute per value, not one comma-joined
        # "species:X, topic:Y, year:Z" attribute -- same issue as the
        # data-pagefind-meta split above. Pagefind's inline "key:value" filter
        # form captures everything up to the end of the attribute, and only
        # the LAST item in a comma list may use that inline form; every
        # earlier "key:value" segment gets swallowed into the tail of the
        # filter before it instead of becoming its own filter/value. Giving
        # each value (each species, each topic, and the year) its own
        # single-item attribute sidesteps that entirely -- each one is
        # trivially "the last item" in its own one-item list.
        filter_spans = "".join(
            f'\n  <span data-pagefind-filter="species:{esc(sp)}" hidden></span>'
            for sp in p.get("species", [])
        )
        filter_spans += "".join(
            f'\n  <span data-pagefind-filter="topic:{esc(t)}" hidden></span>'
            for t in p.get("topics", [])
        )
        if p.get("year"):
            filter_spans += f'\n  <span data-pagefind-filter="year:{esc(str(int(p["year"])))}" hidden></span>'

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
<article data-pagefind-body>
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
  <p>{esc(', '.join(p.get('authors', [])))} ({p.get('year', '')}). {esc(p.get('journal',''))}.</p>{filter_spans}
  <div data-pagefind-weight="5">{esc(metadata_search_text)}</div>
  <div data-pagefind-weight="3">{esc(overview)}</div>
  <div data-pagefind-weight="0.3">{esc(p.get('abstract',''))}</div>
  <div>{OCR_MARKER} {esc(ocr)}</div>
</article>
</body>
</html>
"""
        (RECORDS / f"{pid}.html").write_text(record_html, encoding="utf-8")

    catalog.sort(key=lambda p: (-(p["year"] or 0), p["title"]))

    (DATA / "catalog.json").write_text(
        json.dumps(catalog, indent=2), encoding="utf-8")
    (DATA / "species.json").write_text(
        json.dumps([{"name": k, "color": v} for k, v in sorted(all_species.items())], indent=2),
        encoding="utf-8")
    # topics.json is intentionally NOT rewritten here -- see module
    # docstring: it's your hand-maintained source file, and the frontend
    # fetches it directly, so there's nothing to regenerate.

    print(f"Built {len(papers)} records, {len(all_species)} species, {len(topics)} topics.")
    print("Next: npx pagefind --site paper-database")


if __name__ == "__main__":
    build()