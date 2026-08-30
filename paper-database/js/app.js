// The Melissodes Project — search & filter UI
// Browse mode (no query) filters the small public catalog.json client-side.
// Search mode (query present) hands off to Pagefind, which holds the full
// OCR text privately in its compressed index and returns only short
// highlighted excerpts — never the full text.

const state = {
  query: "",
  species: new Set(),
  topics: new Set(),
  decades: new Set(),
  sources: new Set(),
};

// Must match the marker string build.py writes immediately before the OCR
// text in each record page. Pagefind's item.content is the page's full
// plain text -- metadata terms, overview, abstract, AND the OCR body all
// concatenated together -- so without this marker there'd be no reliable
// way to tell where the real paper text starts. Everything after the
// marker is the actual OCR; everything before it is curated metadata that
// must never be shown to the person as if it were quoted paper text.
const OCR_MARKER = "OCRFULLTEXTSTARTMARKER8f3c1";

let catalog = [];
let catalogById = new Map();
let topicsMeta = [];
let topicById = new Map();
let speciesMeta = [];
let speciesColor = new Map();
let pagefind = null;
let pagefindReady = false;
let searchToken = 0; // guards against out-of-order async results when queries overlap

const SOURCE_LABELS = {
  publisher: "Publisher",
  BHL: "Biodiversity Heritage Library",
  JSTOR: "JSTOR",
  "author-provided": "Author-provided",
  other: "Other",
};

async function init() {
  const [catalogRes, topicsRes, speciesRes] = await Promise.all([
    fetch("paper-database/data/catalog.json").then(r => r.json()),
    fetch("paper-database/data/topics.json").then(r => r.json()),
    fetch("paper-database/data/species.json").then(r => r.json()),
  ]);

  catalog = catalogRes;
  catalog.forEach(p => catalogById.set(p.id, p));
  topicsMeta = topicsRes;
  topicsMeta.forEach(t => topicById.set(t.id, t));
  speciesMeta = speciesRes;
  speciesMeta.forEach(s => speciesColor.set(s.name, s.color));

  buildTopicFilters();
  buildSpeciesFilters();
  setupDecadeControls();
  buildSourceFilters();

  setupDropdown("topic-dropdown-toggle", "topic-dropdown-panel");
  setupDropdown("species-chevron", "species-filters");
  document.getElementById("species-search").addEventListener("input", (e) => {
    filterSpeciesRows(e.target.value);
    const panel = document.getElementById("species-filters");
    if (panel.hidden) {
      closeAllDropdowns();
      openDropdown(document.getElementById("species-chevron"), panel);
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown") && !e.target.closest(".combo")) closeAllDropdowns();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllDropdowns();
  });

  document.getElementById("q").addEventListener("input", debounce(onQueryChange, 250));
  document.getElementById("clear-filters").addEventListener("click", clearAllFilters);

  // Relative import (not "/pagefind/...") so this still resolves correctly
  // when the site is served from a subpath, e.g. GitHub Pages project
  // sites at https://username.github.io/repo-name/.
  try {
    pagefind = await import("../pagefind/pagefind.js");
    await pagefind.options({ excerptLength: 24 });
    pagefindReady = true;
  } catch (e) {
    pagefindReady = false;
    console.warn("Pagefind index not available yet — full-text search is disabled until the site is built.", e);
  }

  render();
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

// ---------- Filter UI construction ----------

function buildTopicFilters() {
  const panel = document.getElementById("topic-dropdown-panel");
  panel.innerHTML = "";
  topicsMeta.forEach(t => {
    const row = document.createElement("label");
    row.className = "dropdown-option";
    row.setAttribute("role", "option");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = t.id;
    cb.addEventListener("change", () => {
      if (cb.checked) state.topics.add(t.id); else state.topics.delete(t.id);
      updateTopicDropdownLabel();
      render();
    });

    row.appendChild(cb);
    row.appendChild(document.createTextNode(t.label));
    panel.appendChild(row);
  });
  updateTopicDropdownLabel();
}

function updateTopicDropdownLabel() {
  const label = document.getElementById("topic-dropdown-label");
  if (!state.topics.size) { label.textContent = "All topics"; return; }
  if (state.topics.size === 1) {
    const t = topicById.get([...state.topics][0]);
    label.textContent = t ? t.label : "1 topic selected";
    return;
  }
  label.textContent = `${state.topics.size} topics selected`;
}

function buildSpeciesFilters() {
  const el = document.getElementById("species-filters");
  el.innerHTML = "";
  speciesMeta.forEach(s => {
    const row = document.createElement("label");
    row.className = "species-row";
    row.setAttribute("role", "option");
    row.dataset.name = s.name.toLowerCase();

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = s.name;
    cb.addEventListener("change", () => {
      if (cb.checked) state.species.add(s.name); else state.species.delete(s.name);
      render();
    });

    const dot = document.createElement("span");
    dot.className = "species-dot";
    dot.style.background = s.color;

    row.appendChild(cb);
    row.appendChild(dot);
    row.appendChild(document.createTextNode(s.name));
    el.appendChild(row);
  });

  // Built once alongside the real rows and toggled by filterSpeciesRows --
  // shown only when a typed query hides every species row, so the dropdown
  // never just goes blank with no explanation.
  const noMatch = document.createElement("p");
  noMatch.id = "species-no-match";
  noMatch.className = "species-no-match";
  noMatch.textContent = "No species found.";
  noMatch.hidden = true;
  el.appendChild(noMatch);
}

function filterSpeciesRows(query) {
  const q = query.trim().toLowerCase();
  let anyVisible = false;
  document.querySelectorAll("#species-filters .species-row").forEach(row => {
    const visible = !q || row.dataset.name.includes(q);
    row.style.display = visible ? "" : "none";
    if (visible) anyVisible = true;
  });
  const noMatch = document.getElementById("species-no-match");
  if (noMatch) noMatch.hidden = anyVisible;
}

// ---------- Generic dropdown open/close (topic dropdown + species combo) ----------

function setupDropdown(toggleId, panelId) {
  const toggleBtn = document.getElementById(toggleId);
  const panel = document.getElementById(panelId);
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const wasOpen = !panel.hidden;
    closeAllDropdowns();
    if (!wasOpen) openDropdown(toggleBtn, panel);
  });
}

function openDropdown(toggleBtn, panel) {
  panel.hidden = false;
  toggleBtn.setAttribute("aria-expanded", "true");
}

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-panel").forEach(p => { p.hidden = true; });
  document.querySelectorAll('.dropdown-toggle[aria-expanded="true"], .combo-chevron[aria-expanded="true"]')
    .forEach(b => b.setAttribute("aria-expanded", "false"));
}

// ---------- Decade: typed value, optionally as a from/to range ----------
//
// Internally this still fills state.decades with "YYYYs" bucket strings —
// exactly what matchesFilters() and the Pagefind decade:XXXXs filter
// already expect — so a range just expands to every decade bucket it spans
// and everything downstream (browse filtering, search filters, the active
// filter chips) works unmodified.

function setupDecadeControls() {
  const rangeToggle = document.getElementById("decade-range-toggle");
  const singleWrap = document.getElementById("decade-inputs-single");
  const rangeWrap = document.getElementById("decade-inputs-range");
  const singleInput = document.getElementById("decade-single");
  const fromInput = document.getElementById("decade-from");
  const toInput = document.getElementById("decade-to");

  const knownDecades = new Set();
  catalog.forEach(p => { if (p.year) knownDecades.add(Math.floor(p.year / 10) * 10); });
  if (knownDecades.size) {
    const minD = Math.min(...knownDecades);
    const maxD = Math.max(...knownDecades);
    [singleInput, fromInput, toInput].forEach(inp => { inp.min = minD; inp.max = maxD + 9; });
    singleInput.placeholder = `e.g. ${maxD}`;
    fromInput.placeholder = String(minD);
    toInput.placeholder = String(maxD + 9);
  }

  function applyDecadeInputs() {
    state.decades.clear();
    if (rangeToggle.checked) {
      const from = parseInt(fromInput.value, 10);
      const to = parseInt(toInput.value, 10);
      if (!isNaN(from) && !isNaN(to)) {
        const lo = Math.floor(Math.min(from, to) / 10) * 10;
        const hi = Math.floor(Math.max(from, to) / 10) * 10;
        for (let d = lo; d <= hi; d += 10) state.decades.add(`${d}s`);
      }
    } else {
      const val = parseInt(singleInput.value, 10);
      if (!isNaN(val)) state.decades.add(`${Math.floor(val / 10) * 10}s`);
    }
    render();
  }

  const heading = document.getElementById("decade-heading");

  rangeToggle.addEventListener("change", () => {
    singleWrap.hidden = rangeToggle.checked;
    rangeWrap.hidden = !rangeToggle.checked;
    heading.textContent = rangeToggle.checked ? "Years" : "Year";
    applyDecadeInputs();
  });
  singleInput.addEventListener("input", debounce(applyDecadeInputs, 300));
  fromInput.addEventListener("input", debounce(applyDecadeInputs, 300));
  toInput.addEventListener("input", debounce(applyDecadeInputs, 300));
}

function resetDecadeInputs() {
  const rangeToggle = document.getElementById("decade-range-toggle");
  rangeToggle.checked = false;
  document.getElementById("decade-inputs-single").hidden = false;
  document.getElementById("decade-inputs-range").hidden = true;
  document.getElementById("decade-heading").textContent = "Year";
  document.getElementById("decade-single").value = "";
  document.getElementById("decade-from").value = "";
  document.getElementById("decade-to").value = "";
}

function buildSourceFilters() {
  const sources = new Set();
  catalog.forEach(p => { if (p.source_type) sources.add(p.source_type); });
  const el = document.getElementById("source-filters");
  el.innerHTML = "";
  [...sources].sort().forEach(s => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.type = "button";
    btn.textContent = SOURCE_LABELS[s] || s;
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => toggle(state.sources, s, btn, render));
    el.appendChild(btn);
  });
}

function toggle(set, value, btn, after) {
  if (set.has(value)) { set.delete(value); btn.setAttribute("aria-pressed", "false"); }
  else { set.add(value); btn.setAttribute("aria-pressed", "true"); }
  after();
}

function clearAllFilters() {
  state.species.clear(); state.topics.clear(); state.decades.clear(); state.sources.clear();
  document.querySelectorAll('[aria-pressed="true"]').forEach(el => el.setAttribute("aria-pressed", "false"));
  document.querySelectorAll("#species-filters input, #topic-dropdown-panel input").forEach(cb => { cb.checked = false; });
  updateTopicDropdownLabel();
  document.getElementById("species-search").value = "";
  filterSpeciesRows("");
  resetDecadeInputs();
  closeAllDropdowns();
  render();
}

function onQueryChange(e) {
  state.query = e.target.value.trim();
  render();
}

// ---------- Rendering ----------

async function render() {
  renderActiveFilters();
  if (state.query && pagefindReady) {
    await renderSearchResults();
  } else if (state.query && !pagefindReady) {
    renderMessage("Full-text search index isn't built yet in this environment. Run the build script, then `npx pagefind --site dist`, and serve the dist/ folder.");
  } else {
    renderBrowseResults();
  }
}

function renderActiveFilters() {
  const el = document.getElementById("active-filters");
  el.innerHTML = "";
  const groups = [
    ["species", state.species], ["topic", state.topics],
    ["decade", state.decades], ["source", state.sources],
  ];
  groups.forEach(([label, set]) => {
    set.forEach(value => {
      const chip = document.createElement("span");
      chip.className = "active-filter";
      const display = label === "topic" ? (topicById.get(value)?.label || value)
        : label === "source" ? (SOURCE_LABELS[value] || value) : value;
      chip.innerHTML = `<span>${escapeHtml(display)}</span>`;
      const x = document.createElement("button");
      x.type = "button";
      x.setAttribute("aria-label", `Remove filter ${display}`);
      x.textContent = "×";
      x.addEventListener("click", () => {
        set.delete(value);
        syncFilterButtons();
        render();
      });
      chip.appendChild(x);
      el.appendChild(chip);
    });
  });
}

function syncFilterButtons() {
  document.querySelectorAll("#species-filters .species-row input").forEach(cb => {
    cb.checked = state.species.has(cb.value);
  });
  document.querySelectorAll("#topic-dropdown-panel input").forEach(cb => {
    cb.checked = state.topics.has(cb.value);
  });
  updateTopicDropdownLabel();
  // Decade is a typed value/range rather than a toggle list, so removing a
  // decade chip from the active-filters row can't be mapped back onto a
  // single input — just clear the typed fields so they don't imply a
  // selection that's no longer fully active.
  if (!state.decades.size) resetDecadeInputs();
  document.querySelectorAll("#source-filters .chip").forEach(btn => {
    const key = Object.keys(SOURCE_LABELS).find(k => SOURCE_LABELS[k] === btn.textContent) || btn.textContent;
    btn.setAttribute("aria-pressed", state.sources.has(key) ? "true" : "false");
  });
}

function matchesFilters(p) {
  if (state.species.size && ![...state.species].some(s => p.species.includes(s))) return false;
  if (state.topics.size && ![...state.topics].some(t => p.topics.includes(t))) return false;
  if (state.decades.size) {
    const d = p.year ? `${Math.floor(p.year / 10) * 10}s` : null;
    if (!d || !state.decades.has(d)) return false;
  }
  if (state.sources.size && !state.sources.has(p.source_type)) return false;
  return true;
}

function renderBrowseResults() {
  const filtered = catalog.filter(matchesFilters);
  setCount(filtered.length, catalog.length);
  const list = document.getElementById("results-list");
  list.innerHTML = "";
  document.getElementById("empty-state").hidden = filtered.length > 0;
  filtered.forEach(p => list.appendChild(renderCard(p)));
}

// ---------- Query syntax: "term + term" (AND), "term / term" (OR) ----------
//
// "Melissodes + Triepeolus"   -> one AND group: both words must appear in
//                                the same paper (Pagefind's own default
//                                behaviour for whitespace-separated terms,
//                                spelled out explicitly with "+").
// "Melissodes / Triepeolus"   -> two OR groups, each searched separately;
//                                a paper matching either one is included.
// "Melissodes + Triepeolus / Bombus" -> "/" splits first (lower precedence),
//                                so this reads as (Melissodes AND Triepeolus)
//                                OR (Bombus).
//
// A query with no "+" or "/" behaves exactly as before: a single call to
// Pagefind, letting it use its own (already-AND) multi-word matching.

function splitTopLevel(str, sep) {
  return str.split(sep).map(s => s.trim()).filter(Boolean);
}

// Returns an array of Pagefind query strings, one per OR-group.
function parseBooleanQuery(raw) {
  const orGroups = splitTopLevel(raw, "/");
  return orGroups.map(group => splitTopLevel(group, "+").join(" "));
}

// ---------- Relevance guard ----------
//
// Pagefind's own index does fuzzy/partial-word matching internally, and
// with a long, specific query word (e.g. "Nomadinae") that fuzziness can
// surface pages that only contain a short, unrelated word sharing the
// same first couple of letters (e.g. "no") -- not a real near-miss of
// the actual query. We don't want to lose legitimate typo tolerance
// (e.g. "Nomadinae" still matching "Nomadinaee"), just the very loose
// short-fragment matches. So every result Pagefind returns is re-checked
// here against the page's real indexed text using a length-scaled edit
// distance -- generous for small typos, but requiring near-equal length,
// which rules out a 9-letter query "matching" a 2-letter word.
//
// That length requirement, though, also blocks the legitimate case of
// someone mid-typing a long word -- "Nomadi" while typing "Nomadinae" is
// 3 letters shorter than the real word, which is well outside the edit
// distance allowed for a 6-letter query. hasCloseMatch() handles this
// with a separate, explicitly length-gated prefix check (see
// PREFIX_MIN_LENGTH below) rather than by loosening the edit distance
// itself, so the two cases -- "reject short unrelated fragments" and
// "accept a long word's genuine, still-being-typed prefix" -- stay
// governed by independent thresholds instead of fighting over one knob.

// Longer words tolerate more edits; short words tolerate none, so a
// query like "no" still only matches "no" exactly.
function allowedEditDistance(word) {
  if (word.length <= 3) return 0;
  if (word.length <= 7) return 1;
  return 2;
}

// Standard iterative Levenshtein distance.
function editDistance(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  let prev = new Array(n + 1);
  let curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(
        prev[j] + 1,      // deletion
        curr[j - 1] + 1,  // insertion
        prev[j - 1] + cost // substitution
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

function tokenizeWords(text) {
  return text.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
}

// Query words this short are exact-match only (see allowedEditDistance's
// 0 case) rather than eligible for prefix matching below -- otherwise a
// short real word like "no" would match every longer word that happens
// to start with it (e.g. "Nomadinae"), which is exactly the false-match
// problem this guard exists to prevent.
const PREFIX_MIN_LENGTH = 4;

// True if `word` genuinely occurs among the words actually present in
// the page -- exactly, within its length-scaled edit distance, OR as a
// genuine prefix (word.length >= PREFIX_MIN_LENGTH and the page word
// starts with it). The prefix case is what lets someone typing
// "Nomadinae" get a match as soon as they've typed "Nomad" instead of
// only once the full word is complete -- the edit-distance check alone
// can't do this, since a partially-typed word is *shorter* than the real
// word by however many letters are left to type, and that gap quickly
// exceeds the allowed edit distance for longer words. Gating the prefix
// case on PREFIX_MIN_LENGTH keeps short words exact-match-only, so this
// doesn't reopen the "no" -> "Nomadinae" fragment-match problem.
function hasCloseMatch(word, contentWordSet, contentWordList) {
  const w = word.toLowerCase();
  if (contentWordSet.has(w)) return true;
  const prefixEligible = w.length >= PREFIX_MIN_LENGTH;
  const maxDist = allowedEditDistance(w);
  if (!prefixEligible && maxDist === 0) return false;
  for (const token of contentWordList) {
    if (prefixEligible && token.length > w.length && token.startsWith(w)) return true;
    if (maxDist === 0) continue;
    // Cheap length check before the O(n*m) Levenshtein call.
    if (Math.abs(token.length - w.length) > maxDist) continue;
    if (editDistance(w, token) <= maxDist) return true;
  }
  return false;
}

// Every query word from the raw search box, lowercased, ignoring the
// "+"/"/" boolean operators -- used both for the relevance guard and for
// picking the right <mark> out of Pagefind's excerpt (see
// extractMatchedTerm).
function getQueryWords(rawQuery) {
  return rawQuery
    .split(/[+/]/)
    .join(" ")
    .split(/\s+/)
    .map(w => w.trim())
    .filter(Boolean);
}

// A result is kept only if at least one OR-group has ALL of its words
// genuinely present (per hasCloseMatch) in the page's indexed content --
// mirrors the AND-within-OR-groups semantics of parseBooleanQuery.
function resultIsRelevant(content, wordGroups) {
  if (!wordGroups.length) return true;
  const contentWordList = tokenizeWords(content || "");
  const contentWordSet = new Set(contentWordList);
  return wordGroups.some(group =>
    group.every(word => hasCloseMatch(word, contentWordSet, contentWordList))
  );
}

async function renderSearchResults() {
  const filters = {};
  if (state.species.size) filters.species = [...state.species];
  if (state.topics.size) filters.topic = [...state.topics];
  if (state.decades.size) filters.decade = [...state.decades];
  if (state.sources.size) filters.source_type = [...state.sources];

  const myToken = ++searchToken;
  const groups = parseBooleanQuery(state.query);

  let mergedResults; // array of { id, data() } — deduped, sorted by score desc

  if (groups.length <= 1) {
    // Fast path: identical to previous single-query behaviour, including
    // Pagefind's own built-in debounce/cancellation.
    const search = await pagefind.debouncedSearch(groups[0] ?? state.query, { filters });
    if (search === null || myToken !== searchToken) return; // superseded
    mergedResults = search.results;
  } else {
    // OR across groups: run each AND-group as its own search, then union
    // the results by paper id, keeping the best score per paper.
    const searches = await Promise.all(
      groups.map(g => pagefind.search(g, { filters }))
    );
    if (myToken !== searchToken) return; // a newer keystroke superseded us

    const byId = new Map();
    searches.forEach(search => {
      search.results.forEach(r => {
        const existing = byId.get(r.id);
        if (!existing || r.score > existing.score) byId.set(r.id, r);
      });
    });
    mergedResults = [...byId.values()].sort((a, b) => b.score - a.score);
  }

  const list = document.getElementById("results-list");
  list.innerHTML = "";

  const items = await Promise.all(mergedResults.slice(0, 60).map(r => r.data()));
  if (myToken !== searchToken) return; // superseded while fetching result data

  // wordGroups mirrors `groups` (one array of words per OR-group) for the
  // relevance guard above.
  const wordGroups = groups.map(g => g.split(/\s+/).filter(Boolean));
  const queryWords = getQueryWords(state.query);

  const relevantItems = items.filter(item => resultIsRelevant(item.content, wordGroups));

  setCount(relevantItems.length, catalog.length);
  document.getElementById("empty-state").hidden = relevantItems.length > 0;

  relevantItems.forEach(item => {
    const id = item.meta && item.meta.paper_id;
    const p = catalogById.get(id);
    if (!p) return;
    list.appendChild(renderCard(p, { excerpt: item.excerpt, content: item.content, queryWords }));
  });
}

function renderMessage(msg) {
  const list = document.getElementById("results-list");
  list.innerHTML = "";
  document.getElementById("result-count").textContent = "";
  document.getElementById("empty-state").hidden = false;
  document.getElementById("empty-state").textContent = msg;
}

function setCount(n, total) {
  const el = document.getElementById("result-count");
  el.textContent = state.query || state.species.size || state.topics.size || state.decades.size || state.sources.size
    ? `${n} of ${total} records`
    : `${total} records`;
}

function renderCard(p, { excerpt, abstract, content, queryWords } = {}) {
  const card = document.createElement("article");
  card.className = "card";

  const top = document.createElement("div");
  top.className = "card-top";
  const h3 = document.createElement("h3");
  h3.textContent = p.title;
  top.appendChild(h3);

  const hasDetails = (p.keywords && p.keywords.length) || p.abstract
    || (p.associated_organisms && p.associated_organisms.length)
    || (p.species && p.species.length)
    || p.volume || p.pages || p.source_type || p.added_date;

  card.appendChild(top);

  const byline = document.createElement("p");
  byline.className = "card-byline";
  byline.textContent = `${(p.authors || []).join(", ")} (${p.year || "n.d."}) — ${p.journal || ""}`;
  card.appendChild(byline);

  // Topic badges only on the compact card. Species badges are pushed into
  // the "⋯" details panel instead (see buildDetailsPanel) -- with dozens
  // of papers on screen at once, a row of italic species names in front
  // of every card added visual noise before a reader had even read the
  // title/abstract, and species is available as a sidebar filter anyway.
  // Keywords are curated search tags, not filters, and also live in the
  // details panel, never on the compact card.
  if (p.topics && p.topics.length) {
    const row = document.createElement("div");
    row.className = "badge-row";
    p.topics.forEach(tid => {
      const t = topicById.get(tid);
      if (!t) return;
      const b = document.createElement("span");
      b.className = "topic-chip";
      b.textContent = t.label;
      row.appendChild(b);
    });
    card.appendChild(row);
  }

  // One-sentence teaser, from the paper's own published abstract only.
  // overview is an AI-generated summary -- it's indexed for search (see
  // build.py) but never shown in the UI, so it's excluded here.
  const summarySource = p.abstract || "";
  const summary = firstSentence(summarySource);
  let sumEl = null;
  if (summary) {
    sumEl = document.createElement("p");
    sumEl.className = "card-summary";
    sumEl.textContent = summary;
    card.appendChild(sumEl);
  }

  if (excerpt) {
    const term = extractMatchedTerm(excerpt, queryWords);
    const ocrText = extractOcrText(content);
    // Always search for the match INSIDE the real OCR text, never trust
    // Pagefind's own excerpt HTML -- that excerpt is built from the page's
    // full mixed content and can center on a keyword/topic/species tag
    // instead of the actual paper text.
    const shortCtx = buildContextWindow(term, ocrText, 10);

    if (shortCtx) {
      const wrap = document.createElement("div");
      wrap.className = "card-excerpt-block";

      const ex = document.createElement("p");
      ex.className = "card-excerpt";
      ex.appendChild(renderKwic(shortCtx));
      wrap.appendChild(ex);

      // Every place the matched term occurs in this paper's real OCR
      // text -- lets "More context" step through all of them, not just
      // the one Pagefind happened to excerpt.
      const allMatches = findAllMatchIndices(term, ocrText);

      const controlsRow = document.createElement("div");
      controlsRow.className = "context-controls";

      const toggleBtn = document.createElement("button");
      toggleBtn.type = "button";
      toggleBtn.className = "context-toggle";
      toggleBtn.textContent = "More context";
      controlsRow.appendChild(toggleBtn);

      let navRow = null;
      let matchLabel = null;
      let prevBtn = null;
      let nextBtn = null;

      if (allMatches.length > 1) {
        navRow = document.createElement("div");
        navRow.className = "context-nav";
        navRow.hidden = true;

        prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.className = "context-nav-btn";
        prevBtn.textContent = "‹";
        prevBtn.setAttribute("aria-label", "Previous match in this paper");

        matchLabel = document.createElement("span");
        matchLabel.className = "context-nav-label";

        nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "context-nav-btn";
        nextBtn.textContent = "›";
        nextBtn.setAttribute("aria-label", "Next match in this paper");

        navRow.append(prevBtn, matchLabel, nextBtn);
        controlsRow.appendChild(navRow);
      }

      let expanded = false;
      let contextEl = null;
      let matchIdx = 0;

      function showMatch(i) {
        matchIdx = i;
        const charIdx = allMatches[matchIdx];
        const longCtx = buildContextAt(ocrText, charIdx, term.length, 45);
        contextEl.innerHTML = "";
        contextEl.appendChild(renderKwic(longCtx));
        if (matchLabel) matchLabel.textContent = `Match ${matchIdx + 1} of ${allMatches.length}`;
      }

      toggleBtn.addEventListener("click", () => {
        if (!expanded) {
          if (!allMatches.length) return;
          ex.hidden = true;
          contextEl = document.createElement("div");
          contextEl.className = "context-window";
          wrap.insertBefore(contextEl, controlsRow);
          showMatch(0);
          card.classList.add("expanded");
          toggleBtn.textContent = "Less context";
          if (navRow) navRow.hidden = false;
          expanded = true;
        } else {
          if (contextEl) { contextEl.remove(); contextEl = null; }
          ex.hidden = false;
          card.classList.remove("expanded");
          toggleBtn.textContent = "More context";
          if (navRow) navRow.hidden = true;
          expanded = false;
        }
      });

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          if (!expanded) return;
          showMatch((matchIdx - 1 + allMatches.length) % allMatches.length);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          if (!expanded) return;
          showMatch((matchIdx + 1) % allMatches.length);
        });
      }

      wrap.appendChild(controlsRow);
      card.appendChild(wrap);
    }
  }

  const links = document.createElement("div");
  links.className = "card-links";
  if (p.legal_url) {
    const a = document.createElement("a");
    a.href = p.legal_url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "View source ↗";
    links.appendChild(a);
  }
  if (p.doi) {
    const a = document.createElement("a");
    a.href = `https://doi.org/${p.doi}`;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "DOI";
    links.appendChild(a);
  }
  card.appendChild(links);

  // Everything else -- keywords, the full abstract, and minor
  // bibliographic fields -- is real data (and already searchable via the
  // Pagefind index built in build.py) but stays out of the compact card.
  // The "⋯" button reveals it inline, in place, without navigating away.
  // (overview is indexed for search too, but is AI-generated and never
  // rendered anywhere in the UI.)
  if (hasDetails) {
    const detailsToggle = document.createElement("button");
    detailsToggle.type = "button";
    detailsToggle.className = "details-toggle";
    detailsToggle.setAttribute("aria-label", "Show more details");
    detailsToggle.setAttribute("aria-expanded", "false");
    detailsToggle.textContent = "⋯";
    top.appendChild(detailsToggle);

    const panel = buildDetailsPanel(p, summary);
    panel.hidden = true;
    card.insertBefore(panel, links);

    detailsToggle.addEventListener("click", () => {
      const willShow = panel.hidden;
      panel.hidden = !willShow;
      detailsToggle.setAttribute("aria-expanded", String(willShow));
      detailsToggle.textContent = willShow ? "✕" : "⋯";
      detailsToggle.setAttribute("aria-label", willShow ? "Hide details" : "Show more details");
      // The compact-card teaser is a fragment of the same abstract shown
      // in full inside the details panel -- once the panel is open,
      // showing both is redundant, so hide the fragment while it's open.
      if (sumEl) sumEl.hidden = willShow;
    });
  }

  return card;
}

function buildDetailsPanel(p, shownSummary) {
  const panel = document.createElement("div");
  panel.className = "card-details";

  // Melissodes species discussed in this paper. Moved here from the
  // compact card front -- see renderCard -- so species still surface as
  // real, styled data (same colored chips as the sidebar filter) without
  // crowding every card in the results list.
  if (p.species && p.species.length) {
    const section = document.createElement("div");
    section.className = "details-section";
    const h4 = document.createElement("h4");
    h4.textContent = "Species";
    section.appendChild(h4);
    const row = document.createElement("div");
    row.className = "badge-row";
    p.species.forEach(sp => {
      const b = document.createElement("span");
      b.className = "species-badge";
      b.style.background = speciesColor.get(sp) || "#556B4A";
      b.textContent = sp;
      row.appendChild(b);
    });
    section.appendChild(row);
    panel.appendChild(section);
  }

  if (p.keywords && p.keywords.length) {
    const section = document.createElement("div");
    section.className = "details-section";
    const h4 = document.createElement("h4");
    h4.textContent = "Keywords";
    section.appendChild(h4);
    const row = document.createElement("div");
    row.className = "badge-row";
    p.keywords.forEach(kw => {
      const b = document.createElement("span");
      b.className = "keyword-chip";
      b.textContent = kw;
      row.appendChild(b);
    });
    section.appendChild(row);
    panel.appendChild(section);
  }

  // Non-Melissodes organisms directly tied to a Melissodes species in this
  // paper (host/forage plants they were recorded on, parasites,
  // parasitoids, cleptoparasites, predators, pathogens, competitors) --
  // curated separately from "species" (Melissodes-only) in build.py.
  if (p.associated_organisms && p.associated_organisms.length) {
    const section = document.createElement("div");
    section.className = "details-section";
    const h4 = document.createElement("h4");
    h4.textContent = "Associated organisms";
    section.appendChild(h4);
    const row = document.createElement("div");
    row.className = "badge-row";
    p.associated_organisms.forEach(org => {
      const b = document.createElement("span");
      b.className = "organism-chip";
      const name = document.createElement("em");
      name.textContent = org.name || "";
      b.appendChild(name);
      if (org.relationship) {
        b.appendChild(document.createTextNode(` — ${org.relationship}`));
      }
      row.appendChild(b);
    });
    section.appendChild(row);
    panel.appendChild(section);
  }

  // overview is an AI-generated summary used only to power search (see
  // build.py) -- it's intentionally never rendered here, only abstract
  // (the paper's own published text) is.
  if (p.abstract && p.abstract.trim() !== shownSummary.trim()) {
    const section = document.createElement("div");
    section.className = "details-section";
    const h4 = document.createElement("h4");
    h4.textContent = "Abstract";
    const para = document.createElement("p");
    para.textContent = p.abstract;
    section.append(h4, para);
    panel.appendChild(section);
  }

  const metaBits = [];
  if (p.volume) metaBits.push(`Vol. ${p.volume}`);
  if (p.pages) metaBits.push(`pp. ${p.pages}`);
  if (p.source_type) metaBits.push(SOURCE_LABELS[p.source_type] || p.source_type);
  if (p.added_date) metaBits.push(`Added ${p.added_date}`);
  if (metaBits.length) {
    const meta = document.createElement("p");
    meta.className = "details-meta";
    meta.textContent = metaBits.join(" · ");
    panel.appendChild(meta);
  }

  return panel;
}

// ---------- "More context" (keyword-in-context) helpers ----------
//
// Pagefind's item.data() result gives us two relevant fields:
//   - excerpt: a short snippet with the matched term(s) wrapped in <mark>
//   - content: the FULL page content (metadata + overview + abstract +
//     OCR, all concatenated), as plain sanitized text with no <mark> tags
// Pagefind's own excerpt can legitimately highlight a species/topic/
// keyword tag rather than the paper's actual text, since those all live
// in the same indexed body for search-matching purposes. To guarantee the
// person only ever sees real quoted paper text, we pull just the matched
// term out of `excerpt`, isolate the OCR-only portion of `content` via
// the OCR_MARKER build.py writes ahead of it, and then locate the term
// *inside that OCR-only slice*. If the term never occurs in the real OCR
// text (i.e. it only matched via metadata), we deliberately show nothing
// rather than fabricate an excerpt from non-paper text.

function extractMatchedTerm(excerptHtml, queryWords) {
  if (!excerptHtml) return "";
  const container = document.createElement("div");
  container.innerHTML = excerptHtml;
  const marks = [...container.querySelectorAll("mark")].map(m => m.textContent.trim()).filter(Boolean);
  if (!marks.length) return "";
  if (!queryWords || !queryWords.length) return marks[0];

  // Pagefind's excerpt can highlight more than one matched word, and with
  // fuzzy matching the first one isn't always the word the person
  // actually typed (see the relevance guard above). Prefer whichever
  // <mark> is the closest match to something they typed: an exact
  // case-insensitive match first, then the longest shared prefix, then
  // just the longest mark as a last resort.
  let best = marks[0];
  let bestScore = -1;
  for (const markText of marks) {
    const lower = markText.toLowerCase();
    let score = markText.length; // fallback tiebreaker: longer marks are less likely to be noise
    for (const qw of queryWords) {
      const qLower = qw.toLowerCase();
      if (lower === qLower) score = Math.max(score, 10000);
      else if (lower.startsWith(qLower) || qLower.startsWith(lower)) {
        score = Math.max(score, 1000 + Math.min(lower.length, qLower.length));
      }
    }
    if (score > bestScore) { bestScore = score; best = markText; }
  }
  return best;
}

function extractOcrText(contentText) {
  if (!contentText) return "";
  const idx = contentText.indexOf(OCR_MARKER);
  return idx === -1 ? "" : contentText.slice(idx + OCR_MARKER.length);
}

// Every character index in ocrText where `term` occurs (case-insensitive,
// non-overlapping). Used to let the "More context" view step through
// *every* place the matched term shows up in a paper, not just the first.
function findAllMatchIndices(term, ocrText) {
  if (!term || !ocrText) return [];
  const lowerText = ocrText.toLowerCase();
  const lowerTerm = term.toLowerCase();
  const indices = [];
  let from = 0;
  while (true) {
    const idx = lowerText.indexOf(lowerTerm, from);
    if (idx === -1) break;
    indices.push(idx);
    from = idx + lowerTerm.length;
  }
  return indices;
}

// Returns the suffix of `text` keeping up to `wordWindow` trailing
// whitespace-delimited runs, cutting only at the START of a run -- never
// mid-run -- so a truncated "before" slice is always safe to prefix with
// an ellipsis without ever cutting into a word.
function trimToLastWords(text, wordWindow) {
  const runs = [...text.matchAll(/\S+/g)];
  if (runs.length <= wordWindow) return { text, truncated: false };
  const cut = runs[runs.length - wordWindow];
  return { text: text.slice(cut.index), truncated: true };
}

// Mirror of trimToLastWords for the "after" side: keeps up to
// `wordWindow` leading runs, cutting only at the END of a run.
function trimToFirstWords(text, wordWindow) {
  const runs = [...text.matchAll(/\S+/g)];
  if (runs.length <= wordWindow) return { text, truncated: false };
  const cut = runs[wordWindow - 1];
  return { text: text.slice(0, cut.index + cut[0].length), truncated: true };
}

function buildContextAt(ocrText, charIdx, termLen, wordWindow = 45) {
  const matched = ocrText.slice(charIdx, charIdx + termLen);

  // Slice straight from the original text on both sides of the match --
  // never rebuild it by splitting into words and rejoining with " ", which
  // silently inserts a space at the seam even when none existed in the
  // source. ocrText.slice(0, charIdx) already ends at the exact character
  // immediately before the match (including a real space there if one
  // exists), and ocrText.slice(charIdx + termLen) already starts at the
  // exact character immediately after it -- so as long as we only trim
  // the FAR ends of these slices (well away from the match, at a safe
  // whitespace boundary), the text right next to the match is preserved
  // byte-for-byte. This matters most when the matched span lands inside a
  // longer word (a short fuzzy/typo match, or a rare mid-word artifact in
  // the OCR itself): the old word-split/rejoin approach would tear a word
  // like "Hymenoptera" into "Hyme no ptera" by forcing spaces around
  // whatever got highlighted, even though the source text had none there.
  const beforeTrim = trimToLastWords(ocrText.slice(0, charIdx), wordWindow);
  const afterTrim = trimToFirstWords(ocrText.slice(charIdx + termLen), wordWindow);

  return {
    before: beforeTrim.text,
    beforeTruncated: beforeTrim.truncated,
    matched,
    after: afterTrim.text,
    afterTruncated: afterTrim.truncated,
  };
}

// First-occurrence convenience wrapper -- still used for the compact
// card's short preview excerpt, where only one instance is ever shown.
function buildContextWindow(term, ocrText, wordWindow = 45) {
  if (!term || !ocrText) return null;
  const idx = ocrText.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return null; // match wasn't in the real paper text -- don't fabricate one
  return buildContextAt(ocrText, idx, term.length, wordWindow);
}

// Shared before/mark/after fragment, used both for the compact excerpt
// and the expanded "More context" window -- both always sourced from
// buildContextWindow's OCR-only lookup above.
function renderKwic(ctx) {
  const frag = document.createDocumentFragment();

  const before = document.createElement("span");
  before.className = "context-before";
  // No forced space before the mark: ctx.before already ends at the exact
  // character that precedes the match in the source text (a real space if
  // one was there, nothing if it wasn't), so adding one here would
  // duplicate -- or wrongly insert -- a space at that seam.
  before.textContent = (ctx.beforeTruncated ? "… " : "") + ctx.before;
  frag.appendChild(before);

  const mark = document.createElement("mark");
  mark.className = "context-target";
  mark.textContent = ctx.matched;
  frag.appendChild(mark);

  const after = document.createElement("span");
  after.className = "context-after";
  after.textContent = ctx.after + (ctx.afterTruncated ? " …" : "");
  frag.appendChild(after);

  return frag;
}


function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

// Short one-sentence teaser for the compact card view, drawn from the
// paper's own published abstract (never the AI-generated overview, which
// is indexed for search only and never rendered). The rest of the
// abstract, plus keywords, stays available in the card's details panel.
// This is always a FRAGMENT of the real abstract, never the whole thing
// (even when the abstract happens to be one short sentence), so it always
// ends in an ellipsis -- that's the visual cue that there's more to read
// in "⋯" rather than implying the sentence shown is the complete abstract.
function firstSentence(text, maxLen = 220) {
  if (!text) return "";
  const trimmed = text.trim();
  const match = trimmed.match(/^.*?[.!?](?=\s|$)/);
  let sentence = match ? match[0] : trimmed;
  if (sentence.length > maxLen) {
    sentence = sentence.slice(0, maxLen).replace(/\s+\S*$/, "");
  }
  sentence = sentence.replace(/[.!?…]+$/, "").replace(/\s+$/, "");
  return sentence + "…";
}

init();