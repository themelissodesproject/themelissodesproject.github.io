import json
import hashlib
import re
from pathlib import Path

PKG = Path(__file__).resolve().parent.parent
DATA = PKG / "data"
FULLTEXT = DATA / "fulltext"
RECORDS = PKG / "records"

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

        txt_path = FULLTEXT / f"{pid}.txt"
        if txt_path.exists():
            ocr = txt_path.read_text(encoding="utf-8")
        else:
            ocr = ""
            print(f"  [warn] no fulltext file for '{pid}' -- expected {txt_path.relative_to(PKG.parent)}")

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
        keywords = p.get("keywords", [])
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
<article data-pagefind-body>
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

    print(f"Built {len(papers)} records, {len(all_species)} species, {len(topics)} topics.")
    print("Next: npx pagefind --site paper-database")


if __name__ == "__main__":
    build()