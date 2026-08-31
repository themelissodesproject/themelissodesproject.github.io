const state = {
  query: "",
  species: new Set(),
  topics: new Set(),

  year: null,
};

const OCR_MARKER = "OCRFULLTEXTSTARTMARKER8f3c1";

let catalog = [];
let catalogById = new Map();
let topicsMeta = [];
let topicById = new Map();
let speciesMeta = [];
let speciesColor = new Map();
let pagefind = null;
let pagefindReady = false;
let searchToken = 0;

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
  if (state.topics.size && ![...state.topics].some(t => p.topics.includes(t))) return false;
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

function getQueryWords(rawQuery) {
  return rawQuery
    .split(/[+/]/)
    .join(" ")
    .split(/\s+/)
    .map(w => w.trim())
    .filter(Boolean);
}

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
  if (state.year) {
    const years = [];
    for (let y = state.year.from; y <= state.year.to; y++) years.push(String(y));
    filters.year = years;
  }

  const myToken = ++searchToken;
  const groups = parseBooleanQuery(state.query);

  let mergedResults;

  if (groups.length <= 1) {

    const search = await pagefind.debouncedSearch(groups[0] ?? state.query, { filters });
    if (search === null || myToken !== searchToken) return;
    mergedResults = search.results;
  } else {

    const searches = await Promise.all(
      groups.map(g => pagefind.search(g, { filters }))
    );
    if (myToken !== searchToken) return;

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
  if (myToken !== searchToken) return;

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
  el.textContent = state.query || state.species.size || state.topics.size || state.year
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

    const shortCtx = buildContextWindow(term, ocrText, 10);

    if (shortCtx) {
      const wrap = document.createElement("div");
      wrap.className = "card-excerpt-block";

      const ex = document.createElement("p");
      ex.className = "card-excerpt";
      ex.appendChild(renderKwic(shortCtx));
      wrap.appendChild(ex);

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

      if (sumEl) sumEl.hidden = willShow;
    });
  }

  return card;
}

function buildDetailsPanel(p, shownSummary) {
  const panel = document.createElement("div");
  panel.className = "card-details";

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

function extractMatchedTerm(excerptHtml, queryWords) {
  if (!excerptHtml) return "";
  const container = document.createElement("div");
  container.innerHTML = excerptHtml;
  const marks = [...container.querySelectorAll("mark")].map(m => m.textContent.trim()).filter(Boolean);
  if (!marks.length) return "";
  if (!queryWords || !queryWords.length) return marks[0];

  let best = marks[0];
  let bestScore = -1;
  for (const markText of marks) {
    const lower = markText.toLowerCase();
    let score = markText.length;
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

function trimToLastWords(text, wordWindow) {
  const runs = [...text.matchAll(/\S+/g)];
  if (runs.length <= wordWindow) return { text, truncated: false };
  const cut = runs[runs.length - wordWindow];
  return { text: text.slice(cut.index), truncated: true };
}

function trimToFirstWords(text, wordWindow) {
  const runs = [...text.matchAll(/\S+/g)];
  if (runs.length <= wordWindow) return { text, truncated: false };
  const cut = runs[wordWindow - 1];
  return { text: text.slice(0, cut.index + cut[0].length), truncated: true };
}

function buildContextAt(ocrText, charIdx, termLen, wordWindow = 45) {
  const matched = ocrText.slice(charIdx, charIdx + termLen);

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

function buildContextWindow(term, ocrText, wordWindow = 45) {
  if (!term || !ocrText) return null;
  const idx = ocrText.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return null;
  return buildContextAt(ocrText, idx, term.length, wordWindow);
}

function renderKwic(ctx) {
  const frag = document.createDocumentFragment();

  const before = document.createElement("span");
  before.className = "context-before";

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