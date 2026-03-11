// =========================
// Melissodes minusculus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_minusculus"; // Your species-specific placeholder
const MAP_ID = "oregon_minusculus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes minusculus	38.67852	-121.7733	unknown	1985-08-19	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931939		Yolo, California, US
Melissodes minusculus			Denno, R	1969-08-21	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931947		Solano, California, US
Melissodes minusculus	38.15139	-121.97167	R.F. Denno	1969-08-21		Adult					https://www.gbif.org/occurrence/3801339836		Solano, California, US
Melissodes minusculus	38.28556	-121.81556	R.F. Denno	1969-08-21		Adult					https://www.gbif.org/occurrence/3801380879		Solano, California, US
Melissodes minusculus	36.70248	-120.71366	P.F. Torchio	1962-06-25							https://www.gbif.org/occurrence/658943722		Fresno, California, US
Melissodes minusculus	36.70248	-120.71366	P.F. Torchio	1962-06-25							https://www.gbif.org/occurrence/658943723		Fresno, California, US
Melissodes minusculus			P.F. Torchio	1962-06-25		Adult					https://www.gbif.org/occurrence/3801371858		Fresno, California, US
Melissodes minusculus	40.2056	-80.5567	D.J. Burdick	1962-07-26							https://www.gbif.org/occurrence/658943716		Brooke, West Virginia, US
Melissodes minusculus	40.2056	-80.5567	D.J. Burdick	1962-07-26							https://www.gbif.org/occurrence/658943717		Brooke, West Virginia, US
Melissodes minusculus	36.71939	-120.3321	P.F. Torchio	1962-07-08							https://www.gbif.org/occurrence/658943718		Fresno, California, US
Melissodes minusculus	36.71939	-120.3321	P.F. Torchio	1962-07-08							https://www.gbif.org/occurrence/658943719		Fresno, California, US
Melissodes minusculus	36.71939	-120.3321	P.F. Torchio	1962-07-08							https://www.gbif.org/occurrence/658943720		Fresno, California, US
Melissodes minusculus	36.71939	-120.3321	P.F. Torchio	1962-07-08							https://www.gbif.org/occurrence/658943721		Fresno, California, US
Melissodes minusculus	29.25	-103.25	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943724		Brewster, Texas, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943725		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943726		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943727		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943728		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943729		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943730		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943731		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943732		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943733		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943734		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943735		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943736		Nez Perce, Idaho, US
Melissodes minusculus	46.4526	-116.6568	P.F. Torchio	1962-07							https://www.gbif.org/occurrence/658943737		Nez Perce, Idaho, US
Melissodes minusculus			D.J. Burdick	1962-07-26		Adult					https://www.gbif.org/occurrence/3801375843		Fresno, California, US
Melissodes minusculus	36.78417	-120.36861	P.F. Torchio	1962-07-08		Adult					https://www.gbif.org/occurrence/3801851884		Fresno, California, US
Melissodes minusculus	36.78417	-120.36861	P.F. Torchio	1962-07-08		Adult					https://www.gbif.org/occurrence/3801854846		Fresno, California, US
Melissodes minusculus	36.48281	-120.00372	S.M. Fullerton	1960-08-31	R.R. Snelling						https://www.gbif.org/occurrence/5918932879		Fresno, California, US
Melissodes minusculus	35.40056	-119.46861	P.A. Opler	1957-07-21		Adult					https://www.gbif.org/occurrence/3801936849		Kern, California, US
Melissodes minusculus	37.4053	-120.9995	R.R. Snelling	1953-07-28		Adult	Female				https://www.gbif.org/occurrence/3801858855		Stanislaus, California, US
Melissodes minusculus	37.404	-120.9943	Snelling, Roy	1952-07-31	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657686921		Stanislaus, California, US
Melissodes minusculus	37.404	-120.9943	Snelling, Roy	1951-08-06	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658282416		Stanislaus, California, US
Melissodes minusculus	37.1267	-121.3071	Snelling, Roy	1951-08-06	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658386062		Stanislaus, California, US
Melissodes minusculus	35.2224	-119.0107	Beamer, Raymond	1929-07-24	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658146511		Kern, California, US
Melissodes minusculus											https://www.gbif.org/occurrence/2238766727		
Melissodes minusculus	36.786028	-120.774167	P. F. Torchio				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804609705		Fresno Co., California, US
Melissodes minusculus	36.75	-120.85	D. J. Burdick				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804613473		Fresno Co., California, US
Melissodes minusculus	37.388056	-120.983333	R. R. Snelling				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804617238		Stanislaus Co., California, US
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159351		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159465		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159466		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159520		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159666		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159672		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159986		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160170		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160174		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160190		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160197		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160393		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160412		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160610		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160699		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160837		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160896		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160964		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161265		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161296		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161635		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161837		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161853		
Melissodes minusculus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854162002		
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
