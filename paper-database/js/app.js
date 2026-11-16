const state = {
  query: "",
  species: new Set(),
  topics: new Set(),

  year: null,
  paper: null,      // id of a single paper to show (from ?paper=<id>); null = normal browse/search
  paperSig: "",
};

// NOTE: This app never stores, indexes, or displays any part of a paper's
// original text — no OCR full text, no verbatim abstract. The only
// searchable material is bibliographic metadata and the project's own
// original "overview"/"search_keywords" writeups (see build.py). The
// only path to a paper's actual text is the outbound "legal_url" link
// to its legitimate external host.
//
// MATCHING STRATEGY: whether a record counts as "a match" for the current
// query is decided entirely by our own fuzzy word/edit-distance matcher
// (findMatchingGroup / hasCloseMatch, below) running directly over every
// record's own metadata+overview text (catalogSearchText, loaded from
// search-index.json). This is what lets a near-miss query like
// "Melissodes abundance" find a record whose search_keywords say
// "...most abundant wild bee". There's no separate full-text search
// engine layered on top, and no per-record excerpt/snippet is built or
// shown — a record either matches or it doesn't, and the card just
// displays its own overview text as normal.

let catalog = [];
let catalogById = new Map();
let catalogSearchText = new Map();
let topicsMeta = [];
let topicById = new Map();
let speciesMeta = [];
let speciesColor = new Map();
let searchToken = 0;

const SOURCE_LABELS = {
  publisher: "Publisher",
  BHL: "Biodiversity Heritage Library",
  JSTOR: "JSTOR",
  "author-provided": "Author-provided",
  other: "Other",
};

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

// Every step stays dark enough that flat white text reads clearly
// against it (all above 4.5:1 contrast, up to 17:1 at the darkest
// end). Steps are spaced ~13 apart, evenly, from near-black down to
// #767676 — #767676 is close to the darkest gray where white text
// still clears a solid 4.5:1, so the range stops there rather than
// drifting into the lighter tones that stopped supporting white text
// well (that was the earlier light-background attempt's problem,
// just mirrored).
const TOPIC_SHADE_SCALE = ["#1a1a1a", "#272727", "#343434", "#424242", "#4f4f4f", "#5c5c5c", "#696969", "#767676"];

function shadeForRank(i) {
  return TOPIC_SHADE_SCALE[Math.min(i, TOPIC_SHADE_SCALE.length - 1)];
}

// Used for species badges, whose background colors are arbitrary
// per-species data (not the fixed, always-light TOPIC_SHADE_SCALE
// above), so a computed check — rather than a hand-tuned lookup — is
// what fits: picks whichever of pure black or pure white has the
// higher WCAG contrast ratio against the given background.
function relativeLuminance(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const num = parseInt(h, 16);
  const channels = [(num >> 16) & 0xff, (num >> 8) & 0xff, num & 0xff].map(c => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(lumA, lumB) {
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}

function textColorForBackground(hex) {
  const lum = relativeLuminance(hex);
  const whiteContrast = contrastRatio(lum, 1);
  const blackContrast = contrastRatio(lum, 0);
  return whiteContrast >= blackContrast ? "#ffffff" : "#000000";
}

// Lucide "external-link" icon (box with an arrow) — the same icon the species
// index uses next to authority links. Marks a link that opens in a new tab.
const EXT_ICON = '<svg class="ext-icon" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';

// A topic's rank is its position in the paper's full topics array (sorted
// percent descending), not its position in whatever subset is currently
// being rendered — this is what keeps a topic's color consistent between
// the card's (possibly reordered/truncated) chip row and the
// modal's chip row, all for the same paper.
function topicRankMap(p) {
  const map = new Map();
  (p.topics || []).forEach((t, i) => map.set(t.id, i));
  return map;
}

function styleTopicChip(el, pt, rank) {
  // No percentages are stored or shown anywhere; a chip's shade comes only
  // from its rank (position in the paper's topic list, most central first).
  const shade = shadeForRank(rank || 0);
  el.className = "topic-chip";
  el.style.background = shade;
  el.style.borderColor = shade;
  el.style.color = "#ffffff";
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
  // Metadata+overview text per paper, loaded as plain JSON so our own
  // fuzzy matcher (below) can run directly against it, per-record, as
  // the sole decider of what counts as a match.
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

  // Deep link: paper-database.html?paper=<id> shows just that one paper.
  const wanted = new URLSearchParams(location.search).get("paper");
  if (wanted) {
    state.paper = wanted;
    state.paperSig = filterSig();
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

// A query shorter than this can't really match anything yet (see
// PREFIX_MIN_LENGTH below — a 1-2 char word only matches an identical
// 1-2 char content word). Rather than run the search and show a
// misleading "nothing matches" while the person is still mid-word, we
// just hold off on searching at all until there's enough to go on, and
// show the plain browse list (still honoring species/topic/year filters)
// in the meantime.
const MIN_QUERY_LENGTH = 3;

function isQueryActive() {
  return state.query.length >= MIN_QUERY_LENGTH;
}

// Snapshot of the search box and filters, used to leave single-paper view
// as soon as the person changes any of them.
function filterSig() {
  return JSON.stringify([state.query, [...state.species], [...state.topics], state.year]);
}

function exitPaperView() {
  state.paper = null;
  const note = document.getElementById("paper-view-note");
  if (note) note.remove();
  try {
    const u = new URL(location.href);
    u.searchParams.delete("paper");
    history.replaceState(null, "", u);
  } catch (e) { /* leave the address as is */ }
}

// Shows exactly one paper: the one whose catalog id equals state.paper.
// Search and filters are ignored while this view is active.
function renderSinglePaper() {
  const list = document.getElementById("results-list");
  list.innerHTML = "";
  document.getElementById("empty-state").hidden = true;
  document.getElementById("empty-state").textContent = "No records match this search and filter combination. Try clearing a filter or broadening the search term.";

  let note = document.getElementById("paper-view-note");
  if (!note) {
    note = document.createElement("p");
    note.id = "paper-view-note";
    note.className = "paper-view-note";
    list.parentNode.insertBefore(note, list);
  }
  const p = catalogById.get(state.paper);
  note.textContent = "";
  const msg = document.createElement("span");
  msg.textContent = p ? "Showing one paper. " : `No paper with the id "${state.paper}" is in the database. `;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "clear-btn";
  btn.textContent = "Show all papers";
  btn.addEventListener("click", () => { exitPaperView(); render(); });
  note.appendChild(msg);
  note.appendChild(btn);

  document.getElementById("result-count").textContent = p ? "1 of " + catalog.length + " records" : "";
  if (p) list.appendChild(renderCard(p));
}

function render() {
  if (state.paper && filterSig() !== state.paperSig) exitPaperView();
  renderActiveFilters();
  if (state.paper) {
    renderSinglePaper();
    return;
  }
  if (isQueryActive()) {
    renderSearchResults();
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

// A query word of at least this length can prefix-match a longer content
// word (so "mel" finds "Melissodes"). Below this, a short query like "a"
// or "of" would prefix-match half the dictionary, so it's held to an
// exact match instead. Note this is intentionally one-directional: the
// content word must be LONGER than and start with the query word, never
// the reverse, so a query for the full word "Melissodes" never turns
// around and matches an unrelated short content word like "mel".
const PREFIX_MIN_LENGTH = 3;

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

// Counts how many content words satisfy each word in a matched AND-group
// (exact, prefix, or close-edit-distance — same rules as hasCloseMatch).
// Used only to rank results with more/closer hits above thinner matches;
// no location tracking is needed since matches are no longer highlighted.
function countMatches(contentWordList, group) {
  let count = 0;
  group.forEach(rawWord => {
    const w = rawWord.toLowerCase();
    const prefixEligible = w.length >= PREFIX_MIN_LENGTH;
    const maxDist = allowedEditDistance(w);
    contentWordList.forEach(token => {
      const isHit = token === w
        || (prefixEligible && token.length > w.length && token.startsWith(w))
        || (maxDist > 0 && Math.abs(token.length - w.length) <= maxDist && editDistance(w, token) <= maxDist);
      if (isHit) count++;
    });
  });
  return count;
}

function renderSearchResults() {
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
    const hitCount = countMatches(tokenizeWords(content), wordGroups[groupIdx]);
    matched.push({ p, hitCount });
  });
  matched.sort((a, b) => b.hitCount - a.hitCount);

  const list = document.getElementById("results-list");
  list.innerHTML = "";

  const shown = matched.slice(0, 60);
  setCount(matched.length, catalog.length);
  document.getElementById("empty-state").hidden = matched.length > 0;

  shown.forEach(({ p }) => {
    list.appendChild(renderCard(p));
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
  el.textContent = isQueryActive() || state.species.size || state.topics.size || state.year
    ? `${n} of ${total} records`
    : `${total} records`;
}

function renderCard(p) {
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
    const rankMap = topicRankMap(p);
    cardTopics(p).forEach(pt => {
      const t = topicById.get(pt.id);
      if (!t) return;
      const b = document.createElement("span");
      styleTopicChip(b, pt, rankMap.get(pt.id));
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

  const links = document.createElement("div");
  links.className = "card-links";
  if (p.legal_url) {
    const a = document.createElement("a");
    a.href = p.legal_url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = "View paper" + EXT_ICON;
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

  // The whole card opens the full record pop-up (complete overview, species, real keywords, associated
  // organisms, citation), which keeps heavily-tagged records from bloating the results list. Clicks on
  // the "View paper" / "DOI" links (or any other link or button in the card) keep their own behavior.
  card.classList.add("card-clickable");
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-haspopup", "dialog");
  card.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    const sel = window.getSelection && window.getSelection();
    if (sel && sel.toString().trim()) return;   // the reader is selecting text, not opening the card
    openRecordModal(p);
  });
  card.addEventListener("keydown", (e) => {
    if (e.target !== card) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openRecordModal(p); }
  });

  return card;
}

let modalReturnFocus = null;
let recordResizeHandler = null;

// The pop-up follows the same layout as the species index pop-up: title, overview, topics, a label/value
// grid, the citation box, and a bottom row with View paper / DOI next to the dark Close button.
function openRecordModal(p) {
  closeRecordModal();
  modalReturnFocus = document.activeElement;

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
  modal.setAttribute("aria-labelledby", "record-modal-title");
  modal.appendChild(buildModalContent(p));

  const bottom = document.createElement("div");
  bottom.className = "m-actions m-actions-bottom";
  if (p.legal_url) {
    const a = document.createElement("a");
    a.className = "m-btn";
    a.href = p.legal_url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = "View paper" + EXT_ICON;
    bottom.appendChild(a);
  }
  if (p.doi) {
    const a = document.createElement("a");
    a.className = "m-btn";
    a.href = `https://doi.org/${p.doi}`;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = "DOI" + EXT_ICON;
    bottom.appendChild(a);
  }
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "modal-close";
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", closeRecordModal);
  bottom.appendChild(closeBtn);
  modal.appendChild(bottom);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
  closeBtn.focus({ preventScroll: true });
  modal.scrollTop = 0;

  // Phones / touch screens: while the pop-up is taller than the screen, its bottom edge fades to white
  // with a small down arrow (same as the species index). The hint is dropped once the reader reaches
  // the bottom and stays gone until the pop-up is opened again.
  const hint = document.createElement("div");
  hint.className = "m-scroll-hint";
  hint.hidden = true;
  hint.setAttribute("aria-hidden", "true");
  hint.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  overlay.appendChild(hint);
  let hintDone = false;
  const isMobile = () => window.innerWidth <= 700 || (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
  const updateHint = () => {
    if (hintDone || !isMobile() || modal.scrollHeight <= modal.clientHeight + 4) { hint.hidden = true; return; }
    if (modal.scrollTop + modal.clientHeight >= modal.scrollHeight - 4) { hintDone = true; hint.hidden = true; return; }
    const r = modal.getBoundingClientRect();
    hint.style.left = r.left + "px";
    hint.style.width = modal.clientWidth + "px";
    hint.style.top = (r.bottom - 64) + "px";
    hint.hidden = false;
  };
  modal.addEventListener("scroll", updateHint, { passive: true });
  modal.addEventListener("toggle", updateHint, true);   // expanding Species / Organisms makes it taller

  recordResizeHandler = () => { fitRecordModal(modal); updateHint(); };
  window.addEventListener("resize", recordResizeHandler);
  recordResizeHandler();

  document.addEventListener("keydown", onModalKeydown);
}

// Computer view: size the pop-up to its content. It starts narrow and widens until everything fits
// without scrolling (up to a cap), so short records get a slim pop-up and long ones a wider one.
// Species / Associated organisms start collapsed, so opening them afterwards can make it scroll.
// On phones the width is left to the CSS (full width, single column).
function fitRecordModal(modal) {
  if (window.innerWidth <= 700) { modal.style.width = ""; modal.style.maxWidth = ""; return; }
  const MIN = 460, STEP = 20;
  const max = Math.min(1000, window.innerWidth - 32);
  let w = Math.min(MIN, max);
  modal.style.maxWidth = "none";
  modal.style.width = w + "px";
  while (w < max && modal.scrollHeight > modal.clientHeight + 1) {
    w = Math.min(w + STEP, max);
    modal.style.width = w + "px";
  }
}

function closeRecordModal() {
  const overlay = document.getElementById("record-modal-overlay");
  if (!overlay) return;
  overlay.remove();
  document.body.style.overflow = "";
  document.removeEventListener("keydown", onModalKeydown);
  if (recordResizeHandler) { window.removeEventListener("resize", recordResizeHandler); recordResizeHandler = null; }
  if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus({ preventScroll: true });
  modalReturnFocus = null;
}

function onModalKeydown(e) {
  if (e.key === "Escape") closeRecordModal();
}

// Plain-text citation for a paper, built only from the bibliographic facts in its record
// (authors as printed, year, title as printed, journal, volume, pages, DOI or hosting link).
function citationParts(p) {
  const au = (p.authors || []).filter(Boolean);
  const authors = au.length <= 1 ? (au[0] || "")
    : au.length === 2 ? `${au[0]} & ${au[1]}`
    : `${au.slice(0, -1).join(", ")}, & ${au[au.length - 1]}`;
  let title = (p.title || "").trim();
  if (title && !/[.!?]$/.test(title)) title += ".";
  const pages = (p.pages || "").replace(/(\d)\s*-\s*(\d)/g, "$1–$2");
  const url = p.doi ? `https://doi.org/${p.doi}` : (p.legal_url || "");
  return { authors, year: p.year || "n.d.", title, journal: p.journal || "", volume: p.volume || "", pages, url };
}

function citationText(p) {
  // The citation comes from papers.json (via catalog.json). The assembled version below is only
  // a fallback for a record that has no "citation" field.
  if (p.citation && p.citation.trim()) return p.citation.trim();
  const c = citationParts(p);
  const src = [c.journal, c.volume, c.pages].filter(Boolean).join(", ");
  return [
    c.authors ? `${c.authors} (${c.year}).` : `(${c.year}).`,
    c.title,
    src ? `${src}.` : "",
    c.url,
  ].filter(Boolean).join(" ");
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { /* fall through */ }
    ta.remove();
    ok ? resolve() : reject(new Error("copy failed"));
  });
}

// A closed-by-default dropdown for long lists (species, associated organisms).
function modalCollapsible(summaryText, content) {
  const d = document.createElement("details");
  d.className = "m-collapsible";
  const sum = document.createElement("summary");
  sum.textContent = summaryText;
  d.appendChild(sum);
  d.appendChild(content);
  return d;
}

// Citation box: shows the full citation. Hovering blurs the box and reveals "Copy" over it;
// clicking copies the citation and the label changes to "Copied".
function modalCitationBox(p) {
  const text = citationText(p);
  const box = document.createElement("div");
  box.className = "m-cite";

  const label = document.createElement("div");
  label.className = "m-label";
  label.textContent = "Citation";

  const wrap = document.createElement("div");
  wrap.className = "m-cite-box";
  wrap.tabIndex = 0;
  wrap.setAttribute("role", "button");
  wrap.setAttribute("aria-label", "Copy citation");
  const body = document.createElement("div");
  body.className = "m-cite-text";
  body.textContent = text;
  const overlay = document.createElement("div");
  overlay.className = "m-cite-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.textContent = "Copy";
  wrap.appendChild(body);
  wrap.appendChild(overlay);
  box.appendChild(label);
  box.appendChild(wrap);

  let timer = null;
  const doCopy = () => {
    copyText(text).then(() => {
      overlay.textContent = "Copied";
    }).catch(() => {
      overlay.textContent = "Copy failed";
    }).finally(() => {
      wrap.classList.add("is-active");
      clearTimeout(timer);
      timer = setTimeout(() => {
        wrap.classList.remove("is-active");
        overlay.textContent = "Copy";
      }, 1800);
    });
  };
  wrap.addEventListener("click", doCopy);
  wrap.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doCopy(); }
  });
  return box;
}

// Short source names, so the Source cell never runs longer than a journal name.
const SOURCE_SHORT = { publisher: "Publisher", BHL: "BHL", JSTOR: "JSTOR", "author-provided": "Author", other: "Other" };

// One cell of the details grid: small label above, value below (muted dash when the paper has none).
function modalField(label, value) {
  const d = document.createElement("div");
  d.className = "m-field";
  const l = document.createElement("div");
  l.className = "m-label";
  l.textContent = label;
  const v = document.createElement("div");
  v.className = "m-value";
  if (value instanceof Node) v.appendChild(value);
  else if (value) v.textContent = value;
  else { v.classList.add("m-none"); v.textContent = "—"; }
  d.appendChild(l);
  d.appendChild(v);
  return d;
}

function buildModalContent(p) {
  const frag = document.createDocumentFragment();

  const h2 = document.createElement("h2");
  h2.className = "modal-title";
  h2.id = "record-modal-title";
  h2.textContent = p.title;
  frag.appendChild(h2);

  // Overview sits above the details grid.
  if (p.overview) {
    const ov = document.createElement("div");
    ov.className = "m-overview";
    const l = document.createElement("div");
    l.className = "m-label";
    l.textContent = "Overview";
    const para = document.createElement("p");
    para.textContent = p.overview;
    ov.appendChild(l);
    ov.appendChild(para);
    frag.appendChild(ov);
  }

  // Topics: every topic the paper is tagged with, all in one color, centered under the overview.
  const topicWrap = document.createElement("div");
  topicWrap.className = "m-topics";
  (p.topics || []).forEach(pt => {
    const t = topicById.get(pt.id);
    if (!t) return;
    const b = document.createElement("span");
    b.className = "m-topic";
    b.textContent = t.label;
    topicWrap.appendChild(b);
  });
  if (topicWrap.childNodes.length) frag.appendChild(topicWrap);

  // Details grid: two columns on a computer (column 1: author, year, journal; column 2: page range,
  // volume, source), one column on a phone. The cells are in that reading order.
  const c = citationParts(p);
  const grid = document.createElement("div");
  grid.className = "m-grid";
  const au = p.authors || [];
  grid.appendChild(modalField(au.length > 1 ? "Authors" : "Author", au.join("; ")));
  grid.appendChild(modalField("Year", p.year ? String(p.year) : ""));
  grid.appendChild(modalField("Journal", c.journal));
  grid.appendChild(modalField("Page range", c.pages));
  grid.appendChild(modalField("Volume", c.volume));
  grid.appendChild(modalField("Source", p.source_type ? (SOURCE_SHORT[p.source_type] || p.source_type) : ""));
  frag.appendChild(grid);

  // Below the grid: free-form sections (no table, no divider lines) that use the full width of the pop-up.
  const sections = document.createElement("div");
  sections.className = "m-sections";

  if (p.species && p.species.length) {
    const row = document.createElement("div");
    row.className = "badge-row";
    p.species.forEach(sp => {
      const b = document.createElement("span");
      b.className = "species-badge";
      const spColor = speciesColor.get(sp) || "#556B4A";
      b.style.background = spColor;
      b.style.color = textColorForBackground(spColor);
      b.textContent = sp;
      row.appendChild(b);
    });
    sections.appendChild(modalCollapsible(`Species (${p.species.length})`, row));
  }

  // Only the paper's own printed keyword list is ever shown; the internal search-matching terms
  // ("search_keywords") are never displayed (see build.py / catalog.json).
  if (p.author_keywords && p.author_keywords.length) {
    const row = document.createElement("div");
    row.className = "badge-row";
    p.author_keywords.forEach(kw => {
      const b = document.createElement("span");
      b.className = "keyword-chip";
      b.textContent = kw;
      row.appendChild(b);
    });
    const kw = document.createElement("div");
    kw.className = "m-section";
    const kl = document.createElement("div");
    kl.className = "m-section-label";
    kl.textContent = "Keywords";
    kw.appendChild(kl);
    kw.appendChild(row);
    sections.appendChild(kw);
  }

  if (p.associated_organisms && p.associated_organisms.length) {
    const row = document.createElement("div");
    row.className = "badge-row";
    p.associated_organisms.forEach(org => {
      const b = document.createElement("span");
      b.className = "organism-chip";
      const name = document.createElement("em");
      name.textContent = org.name || "";
      b.appendChild(name);
      if (org.relationship) b.appendChild(document.createTextNode(` — ${org.relationship}`));
      row.appendChild(b);
    });
    const n = p.associated_organisms.length;
    sections.appendChild(modalCollapsible(`Associated organisms (${n})`, row));
  }

  if (sections.childNodes.length) frag.appendChild(sections);

  const metaBits = [];
  if (p.added_date) metaBits.push(`Added ${p.added_date}`);
  if (metaBits.length) {
    const meta = document.createElement("p");
    meta.className = "m-meta";
    meta.textContent = metaBits.join(" · ");
    frag.appendChild(meta);
  }

  // Citation sits at the very bottom, directly above the View paper / Close buttons.
  frag.appendChild(modalCitationBox(p));

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