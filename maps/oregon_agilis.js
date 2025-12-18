// =========================
// Melissodes Agilis Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_agilis"; // Your species-specific placeholder
const MAP_ID = "oregon_agilis";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality	label	institutionCode
Melissodes agilis	43.87	-116.99		1956-07-30							https://www.gbif.org/occurrence/658945939		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.87	-116.99		1956-07-30							https://www.gbif.org/occurrence/658945938		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.87	-116.99	P.F. Torchio	1960-08-20							https://www.gbif.org/occurrence/658945833		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.9815	-117.0247	P.F. Torchio	1961-08-17							https://www.gbif.org/occurrence/658945831		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.9815	-117.0247	P.F. Torchio	1961-08-17							https://www.gbif.org/occurrence/658945830		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.9815	-117.0247	P.F. Torchio	1961-08-21							https://www.gbif.org/occurrence/658945829		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1969-09-06							https://www.gbif.org/occurrence/658945827		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-09							https://www.gbif.org/occurrence/658945826		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-08							https://www.gbif.org/occurrence/658945825		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-06							https://www.gbif.org/occurrence/658945824		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-08							https://www.gbif.org/occurrence/658945823		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-09							https://www.gbif.org/occurrence/658945822		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-06							https://www.gbif.org/occurrence/658945821		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-08							https://www.gbif.org/occurrence/658945820		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-28							https://www.gbif.org/occurrence/658945737		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658945736		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658945735		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658945734		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658945733		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-07							https://www.gbif.org/occurrence/658945732		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-07							https://www.gbif.org/occurrence/658945731		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-08-31							https://www.gbif.org/occurrence/658945730		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-08-17							https://www.gbif.org/occurrence/658945729		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-08-17							https://www.gbif.org/occurrence/658945728		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658945248		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658945247		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658945246		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658945245		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658945244		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658945243		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658945242		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658945241		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658945240		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.6704	-118.6836	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658945239		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.6704	-118.6836	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658945238		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.6704	-118.6836	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658945237		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	45.6704	-118.6836	J.E. Harrison	1998-07-14							https://www.gbif.org/occurrence/658945236		Umatilla, Oregon, US		USDA-ARS
Melissodes agilis	44.35127	-117.26656	G.A. Hackwell	1959-07-15							https://www.gbif.org/occurrence/658945225		Baker, Oregon, US		USDA-ARS
Melissodes agilis	43.8	-117.05	R.K. Eppley	1958-08-18							https://www.gbif.org/occurrence/658945183		Malheur, Oregon, US		USDA-ARS
Melissodes agilis	44.881	-117.115	W.P. Stephen	1955-07-26		Adult					https://www.gbif.org/occurrence/3801381128		Baker, Oregon, US	Halfway, Oregon Baker County; July 26, 1955; on Helianthus; W.P. Stephen  Melissodes (Eumelissodes) agilis Cresson; det. W.E. LaBerge	INHS
Melissodes agilis	44.415	-117.225	J.E. Davis	1948-08-18		Adult					https://www.gbif.org/occurrence/3801375147		Baker, Oregon, US	Gypsum, Oregon; 18 VIII 1948; J.E. Davis coll  Melissodes (Eumelissodes) agilis Cresson; det. W.E. LaBerge	INHS
Melissodes agilis	45.742	-119.196	E.S.G. Titus	1904-05-15		Adult					https://www.gbif.org/occurrence/3801372155		Umatilla, Oregon, US	Echo Or; 15-5-04; ESG Titus Collector  Melissodes agilis Cresson; Det. W.E. LaBerge	INHS
Melissodes agilis	45.742	-119.196	E.S.G. Titus	1904-05-15		Adult					https://www.gbif.org/occurrence/3801339153		Umatilla, Oregon, US	Echo Or; 15-5-04; ESG Titus Collector  Melissodes agilis Cresson; Det. W.E. LaBerge	INHS
Melissodes agilis	45	-123	Steve Walters	2019-08-17	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811547		Benton, Oregon, US		OSAC
Melissodes agilis	45	-123	Steve Walters	2019-08-17	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811522		Benton, Oregon, US		OSAC
Melissodes agilis	44	-121	Gretchen Pederson	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769532		Deschutes, Oregon, US		OSAC
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804768318		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804768317		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.444722	-121.868333	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804766127		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804765782		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804763148		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804763147		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804760168		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804748121		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804748120		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804748119		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804748118		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.444722	-121.868333	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804747746		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804631444		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804626164		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804623185		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804623184		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804620290		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.444722	-121.868333	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804619189		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804618232		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.444722	-121.868333	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804617208		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804617206		Klamath Co., Oregon, US		AMNH
Melissodes agilis	42.198889	-121.406111	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804615298		Klamath Co., Oregon, US		AMNH
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
