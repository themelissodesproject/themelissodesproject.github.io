import json
import hashlib
import re
import sys
from pathlib import Path

PKG = Path(__file__).resolve().parent.parent
DATA = PKG / "data"

# The Melissodes Project taxonomy (single source of truth for names).
# Adjust if species.js lives somewhere else in the repo.
SPECIES_JS_CANDIDATES = [
    PKG.parent / "api" / "species.js",
    PKG / "api" / "species.js",
    PKG.parent / "species.js",
]

# TAXON IDS (how papers refer to species)
# ---------------------------------------
# papers.json never stores a species NAME. Each entry in a paper's "species"
# list is the id of a record in species.js ("names"), exactly the name as the
# paper used it, e.g. "melissodes-aurigenia" (a synonym) or "melissodes-agilis".
# At build time every id is resolved through species.js (valid_id, followed to
# the end of the chain) to the currently accepted taxon, and ONLY the accepted
# name is written to catalog.json / species.json / search-index.json. When the
# taxonomy changes, edit species.js and re-run this script: no paper changes.
# Names that cannot be resolved to an accepted name (unknown id, nomen dubium,
# nomen nudum, unplaced, broken chain) are left out of the display and listed
# in the build report; "python build.py --strict" turns them into an error.

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


def load_taxa():
    """Read api/species.js (window.SPECIES_DATA = {...};) -> {id: record}."""
    path = next((p for p in SPECIES_JS_CANDIDATES if p.exists()), None)
    if path is None:
        raise SystemExit("species.js not found; looked in: "
                         + ", ".join(str(p) for p in SPECIES_JS_CANDIDATES))
    text = path.read_text(encoding="utf-8")
    start, end = text.index("{"), text.rindex("}") + 1
    data = json.loads(text[start:end])
    taxa = {}
    for rec in data["names"]:
        if rec["id"] in taxa:
            raise SystemExit(f"Duplicate taxon id in species.js: {rec['id']}")
        taxa[rec["id"]] = rec
    return taxa


def resolve_taxon(tid, taxa):
    """Follow valid_id links to the accepted taxon.
    Returns (accepted_record, None) or (None, reason)."""
    seen = []
    cur = tid
    while True:
        rec = taxa.get(cur)
        if rec is None:
            return None, ("unknown taxon id (not in species.js)" if not seen
                          else f"valid_id points to missing id {cur}")
        if rec["status"] == "valid":
            return rec, None
        if cur in seen:
            return None, "valid_id loop"
        seen.append(cur)
        if not rec.get("valid_id"):
            return None, f"status '{rec['status']}' has no accepted name"
        cur = rec["valid_id"]
        if len(seen) > 10:
            return None, "valid_id chain too long"


def build():
    strict = "--strict" in sys.argv
    taxa = load_taxa()
    unresolved = {}   # taxon id -> (reason, [paper ids])
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

        if not p.get("citation"):
            print(f"  warning: {pid} has no \"citation\" in papers.json")

        # Resolve every stored taxon id to its currently accepted taxon.
        accepted = []        # accepted records, in paper order, de-duplicated
        as_published = []    # names exactly as the paper used them (search only)
        for tid in p.get("species", []):
            rec, why = resolve_taxon(tid, taxa)
            if rec is None:
                unresolved.setdefault(tid, (why, []))[1].append(pid)
                continue
            if taxa[tid]["name"] != rec["name"]:
                as_published.append(taxa[tid]["name"])
            if all(a["id"] != rec["id"] for a in accepted):
                accepted.append(rec)
                all_species[rec["id"]] = {"id": rec["id"], "name": rec["name"],
                                          "color": species_color(rec["id"])}
        species_names = [r["name"] for r in accepted]
        species_ids = [r["id"] for r in accepted]

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
            # Full formatted citation, written in papers.json (the single
            # source of truth). The front end displays/copies this string
            # verbatim; it only falls back to assembling one from the
            # fields above if a record has no "citation".
            "citation": p.get("citation", ""),
            "legal_url": p.get("legal_url", ""),
            "source_type": p.get("source_type", ""),
            "topics": sorted(
                (t for t in normalize_topics(p.get("topics", [])) if t["id"] in topic_by_id),
                key=lambda t: -t["percent"],
            ),
            # Accepted names only (resolved via species.js), never synonyms.
            "species": species_names,
            "taxon_ids": species_ids,
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
        metadata_terms = species_names + as_published + topic_labels + search_keywords + author_keywords + organism_terms
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
        json.dumps(sorted(all_species.values(), key=lambda s: s["name"]), indent=2),
        encoding="utf-8")
    (DATA / "search-index.json").write_text(
        json.dumps(search_index, indent=2, ensure_ascii=False), encoding="utf-8")

    if unresolved:
        print(f"\n  {len(unresolved)} taxon id(s) could not be resolved to an accepted name "
              "and were left out of the display:")
        for tid, (why, pids) in sorted(unresolved.items()):
            print(f"    {tid}: {why}  [{', '.join(pids)}]")
        print()
        if strict:
            raise SystemExit("Unresolved taxa (--strict).")

    print(f"Built {len(papers)} records, {len(all_species)} species, {len(topics)} topics.")


if __name__ == "__main__":
    build()