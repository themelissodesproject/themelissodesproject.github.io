import json
import hashlib
import re
from pathlib import Path

PKG = Path(__file__).resolve().parent.parent
DATA = PKG / "data"
RECORDS = PKG / "records"

# NOTE: This build intentionally never reads or embeds any part of a
# paper's original text (no OCR, no verbatim abstract). Any personal OCR
# transcription Frank keeps for his own reference lives outside this repo
# entirely and is never read by this script. Every word that ends up in a
# record's HTML/JSON comes from the papers.json metadata: either bare
# bibliographic facts (title, authors, journal, etc.), the paper's own
# printed keyword list ("author_keywords", copied as-is because it's a
# short factual index list, not prose), or the "overview"/"search_keywords"
# fields, which are original analysis written for this project, not copied
# from the source. The only connection to the actual paper text is the
# outbound "legal_url" link, which points to a legitimate external host
# (publisher, BHL, JSTOR, author page, etc.).
#
# "search_keywords" are fuzzy-search bait, not the paper's real keywords —
# they're indexed for matching (below) but deliberately left OUT of
# catalog.json so the front end never displays them as if they were
# genuine. "author_keywords" (the paper's own real keyword list, when one
# exists) IS included in catalog.json and displayed.
#
# search-index.json carries that same matching text (metadata terms +
# overview) out to the front end as plain JSON, keyed by paper id. It
# exists so app.js's OWN fuzzy word/edit-distance matcher (see app.js) can
# decide what counts as a match directly, for every record, rather than
# being limited to whatever a literal-text search engine like Pagefind
# would surface. Pagefind is still built and used, but only as an
# optional enhancement (nicer highlighted excerpts) — never as a gate on
# which records are considered matches. Like catalog.json, this file
# never contains search_keywords standing alone as if they were real
# keywords in the UI; it's read only by the matching/excerpt code, never
# rendered as a labeled field.


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
    search_index = {}

    for p in papers:
        pid = p["id"]
        if pid in seen_ids:
            raise SystemExit(f"Duplicate paper id: {pid}")
        seen_ids.add(pid)

        for sp in p.get("species", []):
            all_species[sp] = species_color(sp)

        topic_labels = [topic_by_id[t]["label"] for t in p.get("topics", []) if t in topic_by_id]

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
            "overview": p.get("overview", ""),
            # Real, paper-printed keywords only — shown to readers as-is.
            "author_keywords": p.get("author_keywords", []),
            # NOTE: "search_keywords" (fuzzy-search bait, not real
            # keywords) is intentionally NOT included here — see the
            # module docstring above. It's indexed into the record HTML
            # below instead, for search matching only.
            "added_date": p.get("added_date", ""),
        })

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

        species_names = p.get("species", [])
        search_keywords = p.get("search_keywords", [])
        author_keywords = p.get("author_keywords", [])
        organism_terms = []
        for org in p.get("associated_organisms", []):
            if org.get("name"):
                organism_terms.append(org["name"])
            if org.get("relationship"):
                organism_terms.append(org["relationship"])
        # search_keywords go into the index for matching but are never
        # exposed via catalog.json/the UI (see docstring above).
        metadata_terms = species_names + topic_labels + search_keywords + author_keywords + organism_terms
        metadata_search_text = ", ".join(metadata_terms)
        overview = p.get("overview", "")

        # Same text that gets indexed into the record HTML below, exported
        # as plain JSON so app.js's own fuzzy matcher can run directly
        # against it instead of depending on Pagefind's literal-match index.
        search_index[pid] = f"{metadata_search_text}. {overview}".strip()

        # Everything indexed below is either bare bibliographic fact or
        # original project-written analysis (overview/keywords). No
        # OCR text and no verbatim abstract are read or embedded here.
        record_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>{esc(p['title'])}</title>
</head>
<body>
<article data-pagefind-body>
  <h1 data-pagefind-meta="title">{esc(p['title'])}</h1>
  <span data-pagefind-meta="paper_id:{esc(pid)}" hidden></span>
  <p>{esc(', '.join(p.get('authors', [])))} ({p.get('year', '')}). {esc(p.get('journal',''))}.</p>{filter_spans}
  <div data-pagefind-weight="5">{esc(metadata_search_text)}</div>
  <div data-pagefind-weight="3">{esc(overview)}</div>
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
    (DATA / "search-index.json").write_text(
        json.dumps(search_index, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"Built {len(papers)} records, {len(all_species)} species, {len(topics)} topics.")
    print("Next (optional, for nicer excerpts only): npx pagefind --site paper-database")


if __name__ == "__main__":
    build()