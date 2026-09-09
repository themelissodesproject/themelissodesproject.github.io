const state = {
  query: "",
  species: new Set(),
  topics: new Set(),

  year: null,
};

// NOTE: This app never stores, indexes, or displays any part of a paper's
// original text — no OCR full text, no verbatim abstract. The only
// searchable material is bibliographic metadata and the project's own
// original "overview"/"search_keywords" writeups (see build.py). Search
// excerpts below are built from that same content, never from the paper
// itself. The only path to a paper's actual text is the outbound
// "legal_url" link to its legitimate external host.
//
// MATCHING STRATEGY: whether a record counts as "a match" for the current
// query is decided entirely by our own fuzzy word/edit-distance matcher
// (findMatchingGroup / hasCloseMatch, below) running directly over every
// record's own metadata+overview text (catalogSearchText, loaded from
// search-index.json). This is what lets a near-miss query like
// "Melissodes abundance" find a record whose search_keywords say
// "...most abundant wild bee" — the match isn't gated behind a literal
// full-text search engine at all, so there's nothing that could veto it.
// Once a record matches, findHitSpans/clusterHitSpans locate the actual
// word(s) that satisfied the query inside that same text so we can show
// a highlighted excerpt with "more context" navigation.

let catalog = [];
let catalogById = new Map();
let catalogSearchText = new Map();
let topicsMeta = [];
let topicById = new Map();
let speciesMeta = [];
let speciesColor = new Map();
let searchToken = 0;
let pagefind = null;
let pagefindReady = false;

const SOURCE_LABELS = {
  publisher: "Publisher",
  BHL: "Biodiversity Heritage Library",
  JSTOR: "JSTOR",
  "author-provided": "Author-provided",
  other: "Other",
};

// Topic chips are weighted by "percent" — roughly how much of the paper's
// content concerns that topic (see build.py's normalize_topics). At or
// above this share a chip gets the bold "dominant" look; below it, the
// chip fades proportionally.
const DOMINANT_TOPIC_THRESHOLD = 25;
// The card itself only ever shows a paper's 6 most significant topics
// (catalog.json already lists each paper's topics sorted by percent
// descending) so a broadly-tagged paper doesn't clutter the results
// list — the full-record modal always lists every topic. If a topic
// filter is active and the paper matched on a topic outside that top 6,
// cardTopics() appends it at the end so it's still visible for why the
// paper matched, without displacing the paper's normal top 6.
const CARD_TOPIC_LIMIT = 6;

function cardTopics(p) {
  const sorted = p.topics || [];
  const top = sorted.slice(0, CARD_TOPIC_LIMIT);
  if (!state.topics.size) return top;
  const topIds = new Set(top.map(t => t.id));
  const filterMatches = sorted.filter(t => state.topics.has(t.id) && !topIds.has(t.id));
  return filterMatches.length ? [...top, ...filterMatches] : top;
}

function styleTopicChip(el, pt) {
  const pct = typeof pt.percent === "number" ? pt.percent : 0;
  const color = colorForTopic(pt.id);
  // The percent itself is never shown as text anywhere in the UI — it
  // only drives how saturated/solid the chip looks (and is available on
  // hover for anyone who wants the exact figure).
  el.title = `${Math.round(pct)}% of paper`;
  el.style.borderColor = color;
  if (pct >= DOMINANT_TOPIC_THRESHOLD) {
    el.className = "topic-chip topic-chip--dominant";
    el.style.background = color;
  } else {
    el.className = "topic-chip";
    const strength = Math.max(15, Math.min(85, (pct / DOMINANT_TOPIC_THRESHOLD) * 85));
    el.style.background = `color-mix(in srgb, ${color} ${strength}%, white)`;
  }
}

// A topic's color comes from topics.json (curated per-topic there) so the
// same hue is used everywhere that topic appears — its chip on the card,
// its chip in the modal, and its pie slice. Falls back to a deterministic
// hash-based color only if a topic is somehow missing one.
function colorForTopic(id) {
  const meta = topicById.get(id);
  if (meta && meta.color) return meta.color;
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0;
  }
  return `hsl(${Math.abs(hash) % 360}, 46%, 42%)`;
}

// No separate legend: the chip row immediately below the pie already
// names every topic in the same colors as its slice, so a second
// color-key/label list would just repeat the same information.
function buildTopicPieChart(topics) {
  const total = topics.reduce((sum, t) => sum + (t.percent || 0), 0);
  if (!total) return null;

  const pie = document.createElement("div");
  pie.className = "topic-pie";
  pie.setAttribute("role", "img");
  pie.setAttribute("aria-label", "Proportion of the paper devoted to each topic");
  let cursor = 0;
  const stops = topics.map(t => {
    const share = (t.percent || 0) / total * 100;
    const slice = `${colorForTopic(t.id)} ${cursor}% ${cursor + share}%`;
    cursor += share;
    return slice;
  });
  pie.style.background = `conic-gradient(${stops.join(", ")})`;

  return pie;
}

async function init() {
  const [catalogRes, topicsRes, speciesRes, searchIndexRes] = await Promise.all([
    fetch("paper-database/data/catalog.json").then(r => r.json()),
    fetch("paper-database/data/topics.json").then(r => r.json()),
    fetch("paper-database/data/species.json").then(r => r.json()),
    fetch("paper-database/data/search-index.json").then(r => r.json()),
  ]);

  catalog = catalogRes;
  catalog.forEach(p => catalogById.set(p.id, p));
  topicsMeta = topicsRes;
  topicsMeta.forEach(t => topicById.set(t.id, t));
  speciesMeta = speciesRes;
  speciesMeta.forEach(s => speciesColor.set(s.name, s.color));
  // This is the same metadata+overview text build.py indexes into each
  // record's HTML — loaded here as plain JSON so our own fuzzy matcher
  // (below) can run directly against it, per-record, as the actual
  // decider of what counts as a match. Pagefind is used later only to
  // fetch nicer pre-highlighted excerpts when it's available; it never
  // gates which records are considered matches.
  catalogSearchText = new Map(Object.entries(searchIndexRes));

  buildTopicFilters();
  buildSpeciesFilters();
  setupYearControls();

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

function setupYearControls() {
  const rangeToggle = document.getElementById("year-range-toggle");
  const singleWrap = document.getElementById("year-inputs-single");
  const rangeWrap = document.getElementById("year-inputs-range");
  const singleInput = document.getElementById("year-single");
  const fromInput = document.getElementById("year-from");
  const toInput = document.getElementById("year-to");

  const knownYears = [];
  catalog.forEach(p => { if (p.year) knownYears.push(p.year); });
  if (knownYears.length) {
    const minY = Math.min(...knownYears);
    const maxY = Math.max(...knownYears);
    [singleInput, fromInput, toInput].forEach(inp => { inp.min = minY; inp.max = maxY; });
    singleInput.placeholder = `e.g. ${maxY}`;
    fromInput.placeholder = String(minY);
    toInput.placeholder = String(maxY);
  }

  function applyYearInputs() {
    if (rangeToggle.checked) {
      const from = parseInt(fromInput.value, 10);
      const to = parseInt(toInput.value, 10);
      state.year = (!isNaN(from) && !isNaN(to))
        ? { from: Math.min(from, to), to: Math.max(from, to) }
        : null;
    } else {
      const val = parseInt(singleInput.value, 10);
      state.year = !isNaN(val) ? { from: val, to: val } : null;
    }
    render();
  }

  const heading = document.getElementById("year-heading");

  rangeToggle.addEventListener("change", () => {
    singleWrap.hidden = rangeToggle.checked;
    rangeWrap.hidden = !rangeToggle.checked;
    heading.textContent = rangeToggle.checked ? "Years" : "Year";
    applyYearInputs();
  });
  singleInput.addEventListener("input", debounce(applyYearInputs, 300));
  fromInput.addEventListener("input", debounce(applyYearInputs, 300));
  toInput.addEventListener("input", debounce(applyYearInputs, 300));
}

function resetYearInputs() {
  const rangeToggle = document.getElementById("year-range-toggle");
  rangeToggle.checked = false;
  document.getElementById("year-inputs-single").hidden = false;
  document.getElementById("year-inputs-range").hidden = true;
  document.getElementById("year-heading").textContent = "Year";
  document.getElementById("year-single").value = "";
  document.getElementById("year-from").value = "";
  document.getElementById("year-to").value = "";
}

function clearAllFilters() {
  state.species.clear(); state.topics.clear(); state.year = null;
  document.querySelectorAll("#species-filters input, #topic-dropdown-panel input").forEach(cb => { cb.checked = false; });
  updateTopicDropdownLabel();
  document.getElementById("species-search").value = "";
  filterSpeciesRows("");
  resetYearInputs();
  closeAllDropdowns();
  render();
}

function onQueryChange(e) {
  state.query = e.target.value.trim();
  render();
}

async function render() {
  renderActiveFilters();
  if (state.query) {
    await renderSearchResults();
  } else {
    renderBrowseResults();
  }
}

function renderActiveFilters() {
  const el = document.getElementById("active-filters");
  el.innerHTML = "";
  const groups = [
    ["species", state.species], ["topic", state.topics],
  ];
  groups.forEach(([label, set]) => {
    set.forEach(value => {
      const chip = document.createElement("span");
      chip.className = "active-filter";
      const display = label === "topic" ? (topicById.get(value)?.label || value) : value;
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

  if (state.year) {
    const display = state.year.from === state.year.to
      ? String(state.year.from)
      : `${state.year.from}–${state.year.to}`;
    const chip = document.createElement("span");
    chip.className = "active-filter";
    chip.innerHTML = `<span>${escapeHtml(display)}</span>`;
    const x = document.createElement("button");
    x.type = "button";
    x.setAttribute("aria-label", `Remove filter ${display}`);
    x.textContent = "×";
    x.addEventListener("click", () => {
      state.year = null;
      resetYearInputs();
      render();
    });
    chip.appendChild(x);
    el.appendChild(chip);
  }
}

function syncFilterButtons() {
  document.querySelectorAll("#species-filters .species-row input").forEach(cb => {
    cb.checked = state.species.has(cb.value);
  });
  document.querySelectorAll("#topic-dropdown-panel input").forEach(cb => {
    cb.checked = state.topics.has(cb.value);
  });
  updateTopicDropdownLabel();

  if (!state.year) resetYearInputs();
}

function matchesFilters(p) {
  if (state.species.size && ![...state.species].some(s => p.species.includes(s))) return false;
  if (state.topics.size && ![...state.topics].some(t => p.topics.some(pt => pt.id === t))) return false;
  if (state.year) {
    if (!p.year || p.year < state.year.from || p.year > state.year.to) return false;
  }
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

function splitTopLevel(str, sep) {
  return str.split(sep).map(s => s.trim()).filter(Boolean);
}

function parseBooleanQuery(raw) {
  const orGroups = splitTopLevel(raw, "/");
  return orGroups.map(group => splitTopLevel(group, "+").join(" "));
}

function allowedEditDistance(word) {
  if (word.length <= 3) return 0;
  if (word.length <= 7) return 1;
  return 2;
}

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
        prev[j] + 1,
        curr[j - 1] + 1,
        prev[j - 1] + cost
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

function tokenizeWords(text) {
  return text.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
}

const PREFIX_MIN_LENGTH = 4;

function hasCloseMatch(word, contentWordSet, contentWordList) {
  const w = word.toLowerCase();
  if (contentWordSet.has(w)) return true;
  const prefixEligible = w.length >= PREFIX_MIN_LENGTH;
  const maxDist = allowedEditDistance(w);
  if (!prefixEligible && maxDist === 0) return false;
  for (const token of contentWordList) {
    if (prefixEligible && token.length > w.length && token.startsWith(w)) return true;
    if (maxDist === 0) continue;

    if (Math.abs(token.length - w.length) > maxDist) continue;
    if (editDistance(w, token) <= maxDist) return true;
  }
  return false;
}

// Returns the index of the first OR-group (in query order) whose every
// word has a close match somewhere in `content`, or -1 if none do. This
// is the actual match decision for a record — nothing upstream of this
// (Pagefind included) gets to veto it.
function findMatchingGroup(content, wordGroups) {
  const contentWordList = tokenizeWords(content || "");
  const contentWordSet = new Set(contentWordList);
  for (let i = 0; i < wordGroups.length; i++) {
    const group = wordGroups[i];
    if (group.length && group.every(w => hasCloseMatch(w, contentWordSet, contentWordList))) {
      return i;
    }
  }
  return -1;
}

// Same word tokenizer as tokenizeWords, but keeps each token's character
// offsets so hit locations can be sliced back out of the original text.
function tokenizeWordsWithPositions(text) {
  const out = [];
  const re = /[\p{L}\p{N}]+/gu;
  let m;
  while ((m = re.exec(text)) !== null) {
    out.push({ word: m[0], start: m.index, end: m.index + m[0].length });
  }
  return out;
}

// Locates every token in `content` that satisfies one of the words in a
// matched AND-group (exact, prefix, or close-edit-distance — same rules
// as hasCloseMatch), so the excerpt can highlight the words that actually
// caused the match rather than an arbitrary snippet.
function findHitSpans(content, group) {
  const tokens = tokenizeWordsWithPositions(content);
  const spans = [];
  group.forEach(rawWord => {
    const w = rawWord.toLowerCase();
    const prefixEligible = w.length >= PREFIX_MIN_LENGTH;
    const maxDist = allowedEditDistance(w);
    tokens.forEach(tok => {
      const t = tok.word.toLowerCase();
      const isHit = t === w
        || (prefixEligible && t.length > w.length && t.startsWith(w))
        || (maxDist > 0 && Math.abs(t.length - w.length) <= maxDist && editDistance(w, t) <= maxDist);
      if (isHit) spans.push(tok);
    });
  });
  spans.sort((a, b) => a.start - b.start);
  return spans;
}

// Groups nearby hit spans into clusters (so several hits close together
// become one excerpt instead of one per word), best cluster first — most
// distinct matched words, then most hits, then earliest in the text.
const CLUSTER_GAP = 80;

function clusterHitSpans(spans) {
  if (!spans.length) return [];
  const clusters = [];
  let current = [spans[0]];
  for (let i = 1; i < spans.length; i++) {
    const prev = current[current.length - 1];
    if (spans[i].start - prev.end <= CLUSTER_GAP) {
      current.push(spans[i]);
    } else {
      clusters.push(current);
      current = [spans[i]];
    }
  }
  clusters.push(current);
  clusters.sort((a, b) => {
    const da = new Set(a.map(s => s.word.toLowerCase())).size;
    const db = new Set(b.map(s => s.word.toLowerCase())).size;
    if (db !== da) return db - da;
    if (b.length !== a.length) return b.length - a.length;
    return a[0].start - b[0].start;
  });
  return clusters;
}

function snapToWordBoundary(content, start, end) {
  while (start > 0 && /\S/.test(content[start - 1])) start--;
  while (end < content.length && /\S/.test(content[end])) end++;
  return [start, end];
}

// Compact snippet shown directly on the card — plain <mark> highlights.
function compactExcerptHtml(cluster, content, radius = 70) {
  const first = cluster[0], last = cluster[cluster.length - 1];
  let [start, end] = snapToWordBoundary(content, Math.max(0, first.start - radius), Math.min(content.length, last.end + radius));
  let out = "";
  let cursor = start;
  cluster.forEach(span => {
    out += escapeHtml(content.slice(cursor, span.start));
    out += `<mark>${escapeHtml(content.slice(span.start, span.end))}</mark>`;
    cursor = span.end;
  });
  out += escapeHtml(content.slice(cursor, end));
  return (start > 0 ? "…" : "") + out + (end < content.length ? "…" : "");
}

// Larger "more context" window — muted surrounding text, bold target hits.
function windowExcerptHtml(cluster, content, radius = 240) {
  const first = cluster[0], last = cluster[cluster.length - 1];
  let [start, end] = snapToWordBoundary(content, Math.max(0, first.start - radius), Math.min(content.length, last.end + radius));
  const before = (start > 0 ? "…" : "") + escapeHtml(content.slice(start, first.start));
  let middle = "";
  let cursor = first.start;
  cluster.forEach(span => {
    middle += escapeHtml(content.slice(cursor, span.start));
    middle += `<mark class="context-target">${escapeHtml(content.slice(span.start, span.end))}</mark>`;
    cursor = span.end;
  });
  const after = escapeHtml(content.slice(cursor, end)) + (end < content.length ? "…" : "");
  return `<span class="context-before">${before}</span>${middle}<span class="context-after">${after}</span>`;
}

// Builds the per-record excerpt data used when Pagefind doesn't already
// have a nicer one: one {compact, window} pair per hit cluster, best
// cluster first, for the card excerpt + "more context" nav to page through.
function buildExcerptData(content, group) {
  const spans = findHitSpans(content, group);
  const clusters = clusterHitSpans(spans);
  if (!clusters.length) return null;
  return clusters.map(cluster => ({
    compact: compactExcerptHtml(cluster, content),
    window: windowExcerptHtml(cluster, content),
  }));
}

async function renderSearchResults() {
  const myToken = ++searchToken;
  const groups = parseBooleanQuery(state.query);
  const wordGroups = groups.map(g => g.split(/\s+/).filter(Boolean));

  // The fuzzy word/edit-distance matcher (findMatchingGroup) is the sole
  // gate on what counts as a match — it runs directly over each record's
  // own metadata+overview text (catalogSearchText), so a near-miss query
  // like "Melissodes abundance" finds a record whose search_keywords say
  // "...most abundant wild bee" with nothing upstream able to veto it.
  const matched = [];
  catalog.filter(matchesFilters).forEach(p => {
    const content = catalogSearchText.get(p.id) || "";
    const groupIdx = findMatchingGroup(content, wordGroups);
    if (groupIdx === -1) return;
    const excerptData = buildExcerptData(content, wordGroups[groupIdx]);
    const hitCount = findHitSpans(content, wordGroups[groupIdx]).length;
    matched.push({ p, excerptData, hitCount });
  });
  matched.sort((a, b) => b.hitCount - a.hitCount);

  // Pagefind, if it built successfully, is asked for its own excerpts on
  // the same query purely so already-matched records can show a nicer
  // pre-highlighted snippet where it agrees — it never adds or removes a
  // record from `matched` above, and failures here are silently ignored.
  const pagefindExcerpts = new Map();
  if (pagefindReady && matched.length) {
    try {
      const filters = {};
      if (state.species.size) filters.species = [...state.species];
      if (state.topics.size) filters.topic = [...state.topics];
      if (state.year) {
        const years = [];
        for (let y = state.year.from; y <= state.year.to; y++) years.push(String(y));
        filters.year = years;
      }
      const matchedIds = new Set(matched.map(m => m.p.id));
      const searches = await Promise.all(groups.map(g => pagefind.search(g, { filters })));
      if (myToken !== searchToken) return;
      const items = await Promise.all(searches.flatMap(s => s.results).map(r => r.data()));
      items.forEach(item => {
        const id = item.meta && item.meta.paper_id;
        if (id && matchedIds.has(id) && item.excerpt) pagefindExcerpts.set(id, item.excerpt);
      });
    } catch (e) {
      // Nicer excerpts are a bonus only — fall back to our own below.
    }
  }
  if (myToken !== searchToken) return;

  const list = document.getElementById("results-list");
  list.innerHTML = "";

  const shown = matched.slice(0, 60);
  setCount(matched.length, catalog.length);
  document.getElementById("empty-state").hidden = matched.length > 0;

  shown.forEach(({ p, excerptData }) => {
    const excerpt = pagefindExcerpts.get(p.id) || (excerptData && excerptData[0].compact);
    list.appendChild(renderCard(p, { excerpt }));
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
  el.textContent = state.query || state.species.size || state.topics.size || state.year
    ? `${n} of ${total} records`
    : `${total} records`;
}

function renderCard(p, { excerpt } = {}) {
  const card = document.createElement("article");
  card.className = "card";

  const top = document.createElement("div");
  top.className = "card-top";
  const h3 = document.createElement("h3");
  h3.textContent = p.title;
  top.appendChild(h3);

  card.appendChild(top);

  const byline = document.createElement("p");
  byline.className = "card-byline";
  byline.textContent = `${(p.authors || []).join(", ")} (${p.year || "n.d."}) — ${p.journal || ""}`;
  card.appendChild(byline);

  if (p.topics && p.topics.length) {
    const row = document.createElement("div");
    row.className = "badge-row";
    cardTopics(p).forEach(pt => {
      const t = topicById.get(pt.id);
      if (!t) return;
      const b = document.createElement("span");
      styleTopicChip(b, pt);
      b.textContent = t.label;
      row.appendChild(b);
    });
    card.appendChild(row);
  }

  // The card's summary line is always the project's own "overview" text
  // (original analysis), never the paper's own abstract — this database
  // doesn't store the paper's abstract at all.
  const summary = firstSentence(p.overview || "");
  let sumEl = null;
  if (summary) {
    sumEl = document.createElement("p");
    sumEl.className = "card-summary";
    sumEl.textContent = summary;
    card.appendChild(sumEl);
  }

  // `excerpt` is pagefind's own highlighted snippet, built only from the
  // metadata/overview text we indexed in build.py (never from the paper's
  // original text), so it's safe to render as-is.
  if (excerpt) {
    const wrap = document.createElement("div");
    wrap.className = "card-excerpt-block";
    const ex = document.createElement("p");
    ex.className = "card-excerpt";
    ex.innerHTML = excerpt;
    wrap.appendChild(ex);
    card.appendChild(wrap);
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

  // A "Show more" button opens a full modal window with the complete
  // overview, species, real keywords, and every associated organism —
  // kept out of the card itself so a heavily-tagged record (e.g. a broad
  // taxonomic revision with 100+ associated organisms) never bloats the
  // results list. The modal scrolls internally, so nothing in it needs
  // its own separate truncation.
  const hasMore = (p.author_keywords && p.author_keywords.length)
    || (p.associated_organisms && p.associated_organisms.length)
    || (p.species && p.species.length)
    || p.volume || p.pages || p.source_type || p.added_date
    || (p.overview && p.overview.trim().length > summary.length);

  if (hasMore) {
    const moreBtn = document.createElement("button");
    moreBtn.type = "button";
    moreBtn.className = "show-more-btn";
    moreBtn.textContent = "Show more";
    moreBtn.addEventListener("click", () => openRecordModal(p));
    card.appendChild(moreBtn);
  }

  return card;
}

function openRecordModal(p) {
  closeRecordModal();

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "record-modal-overlay";
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeRecordModal();
  });

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", p.title);

  const header = document.createElement("div");
  header.className = "modal-header";
  const h2 = document.createElement("h2");
  h2.className = "modal-title";
  h2.textContent = p.title;
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "modal-close";
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.textContent = "✕";
  closeBtn.addEventListener("click", closeRecordModal);
  header.appendChild(h2);
  header.appendChild(closeBtn);

  const body = document.createElement("div");
  body.className = "modal-body";
  body.appendChild(buildModalBody(p));

  modal.appendChild(header);
  modal.appendChild(body);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  document.addEventListener("keydown", onModalKeydown);
}

function closeRecordModal() {
  const overlay = document.getElementById("record-modal-overlay");
  if (overlay) overlay.remove();
  document.removeEventListener("keydown", onModalKeydown);
}

function onModalKeydown(e) {
  if (e.key === "Escape") closeRecordModal();
}

function buildModalBody(p) {
  const frag = document.createDocumentFragment();

  const byline = document.createElement("p");
  byline.className = "card-byline";
  byline.textContent = `${(p.authors || []).join(", ")} (${p.year || "n.d."}) — ${p.journal || ""}`;
  frag.appendChild(byline);

  // Full "overview" text (the project's own original analysis, never the
  // paper's abstract or any OCR'd text) — the card itself only shows the
  // first sentence as a teaser.
  if (p.overview) {
    const section = document.createElement("div");
    section.className = "details-section";
    const h4 = document.createElement("h4");
    h4.textContent = "Overview";
    const para = document.createElement("p");
    para.textContent = p.overview;
    section.appendChild(h4);
    section.appendChild(para);
    frag.appendChild(section);
  }

  // Every topic the paper is tagged with is listed here (unlike the card
  // itself, which only shows the top few) — the pie chart makes the
  // relative proportions legible at a glance, and the chip row below it
  // still fades minor topics via styleTopicChip.
  const allTopics = p.topics || [];
  if (allTopics.length) {
    const section = document.createElement("div");
    section.className = "details-section";
    const h4 = document.createElement("h4");
    h4.textContent = "Topics";
    section.appendChild(h4);

    const pie = buildTopicPieChart(allTopics);
    if (pie) section.appendChild(pie);

    const row = document.createElement("div");
    row.className = "badge-row";
    allTopics.forEach(pt => {
      const t = topicById.get(pt.id);
      if (!t) return;
      const b = document.createElement("span");
      styleTopicChip(b, pt);
      b.textContent = t.label;
      row.appendChild(b);
    });
    section.appendChild(row);
    frag.appendChild(section);
  }

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
    frag.appendChild(section);
  }

  // Only the paper's own real, printed keyword list is ever shown here.
  // The database's internal search-matching terms ("search_keywords")
  // are never displayed — they're not real keywords, just fuzzy-search
  // bait, and showing them as if they were the paper's own would be
  // misleading. See build.py / catalog.json.
  if (p.author_keywords && p.author_keywords.length) {
    const section = document.createElement("div");
    section.className = "details-section";
    const h4 = document.createElement("h4");
    h4.textContent = "Keywords";
    section.appendChild(h4);
    const row = document.createElement("div");
    row.className = "badge-row";
    p.author_keywords.forEach(kw => {
      const b = document.createElement("span");
      b.className = "keyword-chip";
      b.textContent = kw;
      row.appendChild(b);
    });
    section.appendChild(row);
    frag.appendChild(section);
  }

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
    frag.appendChild(section);
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
    frag.appendChild(meta);
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
  if (links.childNodes.length) frag.appendChild(links);

  return frag;
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

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