// =========================
// Melissodes lustrus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_lustrus"; // Your species-specific placeholder
const MAP_ID = "oregon_lustrus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944906		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944905		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944904		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944903		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944902		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944901		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944900		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944899		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944898		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944897		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944896		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944895		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944894		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944893		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944892		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944891		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944890		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944889		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944888		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944887		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944886		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944885		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944884		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944883		Klamath, Oregon, US
Melissodes lustrus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944882		Klamath, Oregon, US
Melissodes lustrus	42.407	-120.29	P.F. Torchio	1959-08-06		Adult		The coordinates are given for Chandler State Park in Lake Co.			https://www.gbif.org/occurrence/3801854634		Klamath, Oregon, US
Melissodes lustrus	45.5239	-117.9194	Bolinger, Jewett	1937-08-18		Adult					https://www.gbif.org/occurrence/3801339630		Union, Oregon, US
Melissodes lustrus	43	-119	Ellen Watrous	2019-08-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499807873		Harney, Oregon, US
Melissodes lustrus	42.45	-120.966667	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804770305		Klamath Co., Oregon, US
Melissodes lustrus	42.45	-120.966667	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804627326		Klamath Co., Oregon, US
Melissodes lustrus	42.45	-120.966667	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804620364		Klamath Co., Oregon, US
Melissodes lustrus	42.45	-120.966667	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804618271		Klamath Co., Oregon, US
Melissodes lustrus	42.45	-120.966667	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804609691		Klamath Co., Oregon, US
Melissodes lustrus	42.341667	-121.803333	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804609690		Klamath Co., Oregon, US
Melissodes lustrus	44.5647	-123.2608	Wilbur, D	1925-08-29		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837143		Benton, Oregon, US
Melissodes lustrus	44.5647	-123.2608	Wilbur, D	1925-08-29	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837132		Benton, Oregon, US
Melissodes lustrus			Scullen, H	1945-08-21		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837111		Oregon, US
Melissodes lustrus			Scullen, H	1929-08-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837095		Grant, Oregon, US
Melissodes lustrus	44.5647	-123.2608	Wilbur, D	1925-08-29		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837093		Benton, Oregon, US
Melissodes lustrus	42.3267	-122.8744	McClay, A	1950-09-04		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837090		Jackson, Oregon, US
Melissodes lustrus	42.3267	-122.8744	McClay, A	1950-09-04	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837089		Jackson, Oregon, US
Melissodes lustrus			Scullen, H	1929-08-10		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837084		Baker, Oregon, US
Melissodes lustrus			Davis, J	1932-08-20		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837074		Klamath, Oregon, US
Melissodes lustrus	44.2464	-117.5161	Michener, Charles	1968-09-05	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837044		Malheur, Oregon, US
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
