// =========================
// Melissodes nigracauda Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_nigracauda"; // Your species-specific placeholder
const MAP_ID = "oregon_nigracauda";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes nigracauda	47.772	-120.422	Autumn Maust	2023-08	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5931810801		Chelan, Washington, US
Melissodes nigracauda	47.88	-120.26	Autumn Maust	2022	Karen W. Wright	Adult	Male				https://www.gbif.org/occurrence/5931815910		Chelan, Washington, US
Melissodes nigracauda	47.772	-120.422	Autumn Maust	2021-08-03	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5931818386		Chelan, Washington, US
Melissodes nigracauda	47.772	-120.422	Autumn Maust	2021-08-03	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5931818387		Chelan, Washington, US
Melissodes nigracauda	47.88	-120.26	Autumn Maust	2021	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5931818011		Chelan, Washington, US
Melissodes nigracauda	47.88	-120.26	Autumn Maust	2021	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5931818016		Chelan, Washington, US
Melissodes nigracauda	36	-121	O.J. Messinger	1998							https://www.gbif.org/occurrence/658944919		SanBenito, California, US
Melissodes nigracauda	33.0434	-116.8681	J.A. Halstead	1982-07-14	J.S. Ascher 2006						https://www.gbif.org/occurrence/658944918		SanDiego, California, US
Melissodes nigracauda	38.35139	-119.52056	D.Q. Cavagnaro	1960-08-11		Adult					https://www.gbif.org/occurrence/3801337732		Mono, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-08-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657721738		Los Angeles, California, US
Melissodes nigracauda	34.18972	-118.13118	C.D. Michener	1935-08-19	W.E. LaBerge 1959						https://www.gbif.org/occurrence/658944920		LosAngeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657642463		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657653011		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657660309		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657664747		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657718085		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657849506		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658127158		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658149152		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658230376		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658249695		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658271922		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658360143		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1024623032		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1935-09-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1024623070		Los Angeles, California, US
Melissodes nigracauda	34.18972	-118.13028	C.D. Michener	1935-09-28		Adult	Male				https://www.gbif.org/occurrence/3801371745		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-08-02	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658218291		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657596558		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657599971		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657631422		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657645453		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657681039		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657682378		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657711214		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657774944		Los Angeles, California, US
Melissodes nigracauda	34.1478	-118.1436	Michener, Charles	1934-09-11	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657800320		Los Angeles, California, US
Melissodes nigracauda	34.1478	-118.1436	Michener, Charles	1934-09-11	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657801007		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658231462		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658323216		Los Angeles, California, US
Melissodes nigracauda	34.1478	-118.1436	Michener, Charles	1934-09-11	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658327344		Los Angeles, California, US
Melissodes nigracauda	39.2067	-120.8103	Michener, Charles	1934-09-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658375760		Los Angeles, California, US
Melissodes nigracauda	34.11611	-118.15034	C.D. Michener	1934-09-13	W.E. LaBerge 1959						https://www.gbif.org/occurrence/658944921		LosAngeles, California, US
Melissodes nigracauda	34.18972	-118.13028	C.D. Michener	1934-09-30		Adult	Female				https://www.gbif.org/occurrence/3801851760		Los Angeles, California, US
Melissodes nigracauda	25.9014	-97.4972	Snow, Francis	1905-06-06	LaBerge, Walley	Adult		labels read "June", but expedition lasted until July 6 (I think)	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658162002		Cameron, Texas, US
Melissodes nigracauda											https://www.gbif.org/occurrence/1318893021		
Melissodes nigracauda					20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425179193		Los Angeles, California, US
Melissodes nigracauda											https://www.gbif.org/occurrence/5861439085		
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
