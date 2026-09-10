import json
import hashlib
import re
from pathlib import Path

PKG = Path(__file__).resolve().parent.parent
DATA = PKG / "data"

# NOTE: This build intentionally never reads or embeds any part of a
# paper's original text (no OCR, no verbatim abstract). Any personal OCR
# transcription Frank keeps for his own reference lives outside this repo
# entirely and is never read by this script. Every word that ends up in
# catalog.json/search-index.json comes from the papers.json metadata:
# either bare bibliographic facts (title, authors, journal, etc.), the
# paper's own printed keyword list ("author_keywords", copied as-is
# because it's a short factual index list, not prose), or the
# "overview"/"search_keywords" fields, which are original analysis
# written for this project, not copied from the source. The only
# connection to the actual paper text is the outbound "legal_url" link,
# which points to a legitimate external host (publisher, BHL, JSTOR,
# author page, etc.).
#
# "search_keywords" are fuzzy-search bait, not the paper's real keywords —
# they're indexed for matching (below) but deliberately left OUT of
# catalog.json so the front end never displays them as if they were
# genuine. "author_keywords" (the paper's own real keyword list, when one
# exists) IS included in catalog.json and displayed.
#
# search-index.json carries that same matching text (metadata terms +
# overview) out to the front end as plain JSON, keyed by paper id. It
# exists so app.js's OWN fuzzy word/edit-distance matcher (see app.js) is
# the sole decider of what counts as a match for every record. There's no
# separate full-text search engine or per-record excerpt/snippet — this
# JSON blob is the entire search surface. Like catalog.json, it never
# contains search_keywords labeled as if they were real keywords; it's
# read only by the matching code, never rendered as a field.


def normalize_topics(raw):
    """A paper's "topics" field is a list of {"id", "percent"} objects,
    where "percent" is roughly how much of the paper's content concerns
    that topic (ideally summing to ~100 across a paper's topics, though
    this isn't strictly enforced — see the sum-sanity warning in build()
    below). This is what lets the front end visually weight topic chips
    by actual significance instead of presenting every tag a paper
    touches on as equally important.

    For backward compatibility, a bare list of topic id strings (no
    percentages given) is accepted too and split evenly across the
    listed topics, and a numeric "percent" is coerced/clamped to 0-100.
    """
    out = []
    for t in raw:
        if isinstance(t, dict):
            tid = t.get("id")
            try:
                pct = float(t.get("percent", 0))
            except (TypeError, ValueError):
                pct = 0
            pct = max(0, min(100, pct))
        else:
            tid, pct = t, None  # filled in below once we know the count
        if tid:
            out.append({"id": tid, "percent": pct})

    missing = [t for t in out if t["percent"] is None]
    if missing:
        share = 100 / len(out)
        for t in missing:
            t["percent"] = round(share, 1)

    return out


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

        topic_labels = [topic_by_id[t["id"]]["label"] for t in normalize_topics(p.get("topics", [])) if t["id"] in topic_by_id]

        topic_pct_sum = sum(t["percent"] for t in normalize_topics(p.get("topics", [])))
        if topic_pct_sum and not (70 <= topic_pct_sum <= 130):
            print(f"  warning: {pid} topic percentages sum to {topic_pct_sum:.0f} (expected ~100)")

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
            "topics": sorted(
                (t for t in normalize_topics(p.get("topics", [])) if t["id"] in topic_by_id),
                key=lambda t: -t["percent"],
            ),
            "species": p.get("species", []),
            "associated_organisms": p.get("associated_organisms", []),
            "overview": p.get("overview", ""),
            # Real, paper-printed keywords only — shown to readers as-is.
            "author_keywords": p.get("author_keywords", []),
            # NOTE: "search_keywords" (fuzzy-search bait, not real
            # keywords) is intentionally NOT included here — see the
            # module docstring above. It's indexed into search_index
            # below instead, for search matching only.
            "added_date": p.get("added_date", ""),
        })

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

        # Exported as plain JSON so app.js's own fuzzy matcher can run
        # directly against it — this is the entire search surface, no
        # separate full-text index is built anywhere else. Everything
        # indexed here is either bare bibliographic fact or original
        # project-written analysis (overview/keywords); no OCR text and
        # no verbatim abstract are read or embedded.
        search_index[pid] = f"{metadata_search_text}. {overview}".strip()

    catalog.sort(key=lambda p: (-(p["year"] or 0), p["title"]))

    (DATA / "catalog.json").write_text(
        json.dumps(catalog, indent=2), encoding="utf-8")
    (DATA / "species.json").write_text(
        json.dumps([{"name": k, "color": v} for k, v in sorted(all_species.items())], indent=2),
        encoding="utf-8")
    (DATA / "search-index.json").write_text(
        json.dumps(search_index, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"Built {len(papers)} records, {len(all_species)} species, {len(topics)} topics.")


if __name__ == "__main__":
    build()