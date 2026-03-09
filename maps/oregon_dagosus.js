// =========================
// Melissodes dagosus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_dagosus"; // Your species-specific placeholder
const MAP_ID = "oregon_dagosus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes dagosus	43.73	-117.17	P.F. Torchio	1960-06-12							https://www.gbif.org/occurrence/658953840		Malheur, Oregon, US
Melissodes dagosus	43.73	-117.17	P.F. Torchio	1960-06-12							https://www.gbif.org/occurrence/658953839		Malheur, Oregon, US
Melissodes dagosus	43.73	-117.17	P.F. Torchio	1960-06-12							https://www.gbif.org/occurrence/658953838		Malheur, Oregon, US
Melissodes dagosus	42.2212	-120.094	C.D. Michener	1950-06-23							https://www.gbif.org/occurrence/658953826		Lake, Oregon, US
Melissodes dagosus	43.74	-117.07	G.A. Hackwell	1960-06-18							https://www.gbif.org/occurrence/658953622		Malheur, Oregon, US
Melissodes dagosus	43.74	-117.07	G.A. Hackwell	1960-06-18							https://www.gbif.org/occurrence/658953621		Malheur, Oregon, US
Melissodes dagosus	43.74	-117.07	G.A. Hackwell	1960-06-18							https://www.gbif.org/occurrence/658953620		Malheur, Oregon, US
Melissodes dagosus	43.74	-117.07	G.A. Hackwell	1960-06-18							https://www.gbif.org/occurrence/658953619		Malheur, Oregon, US
Melissodes dagosus	43.81	-117.05	R.K. Eppley	1957-07-22							https://www.gbif.org/occurrence/658953614		Malheur, Oregon, US
Melissodes dagosus			VanDyke, E	1922-06-27	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658370524		Harney, Oregon, US
Melissodes dagosus			Melander, A	1921-06-21	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657627261		Umatilla, Oregon, US
Melissodes dagosus	43.264	-118.842	T.Coe	2011-07-29	Lincoln R. Best	Adult	Male				https://www.gbif.org/occurrence/5900032861		Oregon, US
Melissodes dagosus	43.278	-119.312	M.Kircus	2012-06-23	Lincoln R. Best	Adult	Male				https://www.gbif.org/occurrence/5900022663		Oregon, US
Melissodes dagosus	43.264	-118.842	T.Coe	2011-07-29	Lincoln R. Best	Adult	Male				https://www.gbif.org/occurrence/5899953618		Oregon, US
Melissodes dagosus	43.264	-118.842	T.Coe	2011-07-29	Lincoln R. Best	Adult	Male				https://www.gbif.org/occurrence/5899860482		Oregon, US
Melissodes dagosus	43.264	-118.842	T.Coe	2011-07-29	Lincoln R. Best	Adult	Female				https://www.gbif.org/occurrence/5899704350		Oregon, US
Melissodes dagosus	43.264	-118.842	T.Coe	2011-07-29	Lincoln R. Best	Adult	Female				https://www.gbif.org/occurrence/5899536547		Oregon, US
Melissodes dagosus	43.278	-119.312	M.Kircus	2012-06-23	Lincoln R. Best	Adult	Male				https://www.gbif.org/occurrence/5899492075		Oregon, US
Melissodes dagosus	43.264	-118.842	T.Coe	2012-08-10	Lincoln R. Best	Adult	Female				https://www.gbif.org/occurrence/5899477680		Oregon, US
Melissodes dagosus	43.278	-119.312	M.Kircus	2012-06-23	Lincoln R. Best	Adult	Female				https://www.gbif.org/occurrence/5899448185		Oregon, US
Melissodes dagosus	43.7864	-117.2468	R.B. Roberts	1968-06-09		Adult					https://www.gbif.org/occurrence/3801939505		Malheur, Oregon, US
Melissodes dagosus	44.027	-116.963	R.B. Roberts	1968-07-09		Adult					https://www.gbif.org/occurrence/3801936523		Malheur, Oregon, US
Melissodes dagosus	43.7382	-117.2333	P.F. Torchio	1960-06-12		Adult					https://www.gbif.org/occurrence/3801339521		Malheur, Oregon, US
Melissodes dagosus	43.7864	-117.2468	R.B. Roberts	1968-06-09		Adult					https://www.gbif.org/occurrence/3801339520		Malheur, Oregon, US
Melissodes dagosus				1960-06-19		Adult					https://www.gbif.org/occurrence/3801337540		Malheur, Oregon, US
Melissodes dagosus	43.2364	-118.8421	M. Kircus	2012-05-04	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421560829		Harney, Oregon, US
Melissodes dagosus	43.264	-118.8421	M. Kircus	2012-06-05	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421545387		Harney, Oregon, US
Melissodes dagosus	43.264	-118.8421	M. Kircus	2012-06-05	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421545374		Harney, Oregon, US
Melissodes dagosus	43.264	-118.8421	M. Kircus	2012-06-05	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421545367		Harney, Oregon, US
Melissodes dagosus	43.264	-118.8421	M. Kircus	2012-06-05	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421545360		Harney, Oregon, US
Melissodes dagosus	43.264	-118.8421	M. Kircus	2012-06-05	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421545357		Harney, Oregon, US
Melissodes dagosus	43.264	-118.8421	M. Kircus	2012-06-05	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421545354		Harney, Oregon, US
`;

// =========================
// TSV → GeoJSON conversion
// =========================
function tsvToGeoJSON(tsv) {
  const lines = tsv.trim().split(/\r?\n/);
  const headers = lines[0].split("\t").map(h => h.trim());
  const features = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cols = lines[i].split("\t");
    if (cols.length < headers.length) continue;

    const obj = {};
    headers.forEach((h, j) => obj[h] = cols[j] ? cols[j].trim() : "");

    const lat = parseFloat(obj["latitude"]);
    const lon = parseFloat(obj["longitude"]);
    if (isNaN(lat) || isNaN(lon)) continue;

    features.push({
      type: "Feature",
      properties: {
        name: obj["speciesname"] || "",
        latitude: lat,
        longitude: lon,
        foundBy: obj["recordedby"] || "",
        dateFound: obj["datefound"] || "",
        determinedBy: obj["determinedby"] || "",
        lifeStage: obj["lifestage"] || "",
        sex: obj["sex"] || "",
        notes: obj["notes"] || "",
        rights: obj["rights"] || "",
        rightsHolder: obj["rightsholder"] || "",
        sourceLink: obj["sourcelink"] || "",
        gbif_link: obj["gbif_link"] || "",
        locality: obj["locality"] || "",
      },
      geometry: { type: "Point", coordinates: [lon, lat] },
    });
  }

  return { type: "FeatureCollection", features };
}

const melissodesData = tsvToGeoJSON(tsvText);

// =========================
// Helper to check visible element
// =========================
function isVisible(el) {
  return el && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

// =========================
// Move map element into correct placeholder
// =========================
const allPlaceholders = document.querySelectorAll(`.${SPECIES_PLACEHOLDER}`);
let target = null;
allPlaceholders.forEach((el) => {
  if (isVisible(el)) target = el;
});

// If #map doesn't exist, create it dynamically
let mapEl = document.getElementById(MAP_ID);
if (!mapEl) {
  mapEl = document.createElement("div");
  mapEl.id = MAP_ID;
  mapEl.style.height = "450px"; // default height
  if (target) target.appendChild(mapEl);
}

if (target && mapEl) {
  target.appendChild(mapEl);
  console.log("🗺️ Moved map into:", target.className);
}

// Optional land mask placeholder
const landMask = { /* insert land polygon if available */ };

// =========================
// Create Leaflet map
// =========================
const map = L.map(MAP_ID).setView([39, -98], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 14,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// =========================
// Add points
// =========================
const pointLayer = L.geoJSON(melissodesData, {
  pointToLayer: (feature, latlng) => {
    const marker = L.circleMarker(latlng, {
      radius: 5,
      color: "#ff6600",
      fillColor: "#ff6600",
      fillOpacity: 0.9,
    });

    const p = feature.properties;
    const popupParts = [
      `<b>${p.name}</b>`,
      `<b>Coordinates:</b> ${p.latitude.toFixed(4)}, ${p.longitude.toFixed(4)}`
    ];

    if (p.locality && p.locality.trim() !== "")
      popupParts.push(`<b>Locality:</b> ${p.locality}`);

    popupParts.push(
      `<b>Recorded By:</b> ${p.foundBy || "Unknown"}`,
      `<b>Date Found:</b> ${p.dateFound || "Unknown"}`,
      `<b>Determined By:</b> ${p.determinedBy || "Unknown"}`,
      `<b>Life Stage:</b> ${p.lifeStage || "Unknown"}`,
      `<b>Sex:</b> ${p.sex || "Unknown"}`,
      `<b>Notes:</b> ${p.notes || "None"}`
    );

    if (p.rights) popupParts.push(`<b>Rights:</b> ${p.rights}`);
    if (p.rightsHolder) popupParts.push(`<b>Rights Holder:</b> ${p.rightsHolder}`);

    if (p.gbif_link) {
      popupParts.push(
        `<b>Source:</b> <a href="${p.gbif_link}" target="_blank" rel="noopener noreferrer">View GBIF Record</a>`
      );
      if (p.sourceLink && /^https?:\/\//i.test(p.sourceLink)) {
        popupParts.push(
          `<b>Discover Life Link:</b> <a href="${p.sourceLink}" target="_blank" rel="noopener noreferrer">View Discover Life Record</a>`
        );
      }
    } else if (p.sourceLink) {
      const link = p.sourceLink.trim();
      if (/^https?:\/\//i.test(link)) {
        popupParts.push(`<b>Source:</b> <a href="${link}" target="_blank" rel="noopener noreferrer">View Record</a>`);
      } else {
        popupParts.push(`<b>Source:</b> ${link}`);
      }
    }

    marker.bindPopup(popupParts.join("<br>"));
    return marker;
  },
}).addTo(map);

// Fit map to points
if (melissodesData.features.length > 0) {
  map.fitBounds(pointLayer.getBounds(), {
    padding: [50, 50],
    maxZoom: 8
  });
} else {
  console.warn("⚠️ No valid points found in TSV data.");
}

// =========================
// Range polygon logic
// =========================
let hull = turf.convex(melissodesData, { maxEdge: 5 });
if (!hull) hull = turf.convex(melissodesData);

let buffered = null;
try {
  buffered = turf.buffer(hull, 100, { units: "kilometers" });
} catch {
  buffered = hull;
}

let clipped = null;
try {
  clipped = turf.intersect(buffered, landMask);
} catch {
  clipped = buffered;
}

let smoothed = null;
try {
  smoothed = turf.simplify(clipped || buffered, { tolerance: 0.1, highQuality: true });
} catch {
  smoothed = clipped || buffered;
}

if (smoothed) {
  L.geoJSON(smoothed, {
    style: {
      color: "#3366ff",
      weight: 2,
      fillColor: "#6699ff",
      fillOpacity: 0.25,
    },
    interactive: false,
  }).addTo(map);
} else {
  console.warn("No valid range polygon generated.");
}

// =========================
// Resize handling
// =========================
window.addEventListener("resize", () => {
  setTimeout(() => map.invalidateSize(), 500);
});

setTimeout(() => map.invalidateSize(), 700);

window.addEventListener("resize", () => {
  setTimeout(() => {
    const allPlaceholders = document.querySelectorAll(`.${SPECIES_PLACEHOLDER}`);
    const mapEl = document.getElementById(MAP_ID);
    let target = null;
    allPlaceholders.forEach((el) => {
      if (el.offsetParent !== null) target = el;
    });
    if (target && mapEl && target !== mapEl.parentElement) {
      target.appendChild(mapEl);
      console.log("🔄 Moved map to:", target.className);
      if (typeof map !== "undefined" && map.invalidateSize) map.invalidateSize();
    }
  }, 600);
});

})();   // <<< END IIFE — nothing leaks outside
