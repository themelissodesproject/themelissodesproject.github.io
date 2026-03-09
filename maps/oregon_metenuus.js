// =========================
// Melissodes metenuus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_metenuus"; // Your species-specific placeholder
const MAP_ID = "oregon_metenuus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes metenuus	42.05769	-122.6091	M.F. McClay	1951-07-09							https://www.gbif.org/occurrence/658944915		Jackson, Oregon, US
Melissodes metenuus	44.41	-122.672	J.C. Bridwell			Adult					https://www.gbif.org/occurrence/3801940751		Linn, Oregon, US
Melissodes metenuus	42.32667	-122.87444	A.T. McClay	1953-09-11		Adult					https://www.gbif.org/occurrence/3801936774		Jackson, Oregon, US
Melissodes metenuus	45	-119	Andony Melathopoulos	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822843		Grant, Oregon, US
Melissodes metenuus	45	-119	Andony Melathopoulos	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822842		Grant, Oregon, US
Melissodes metenuus	45	-119	Andony Melathopoulos	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822841		Grant, Oregon, US
Melissodes metenuus	45	-123	Jerry Paul	2019-07-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499821193		Benton, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819805		Lane, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819804		Lane, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819745		Lane, Oregon, US
Melissodes metenuus	45	-123	Ellen Watrous	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818942		Benton, Oregon, US
Melissodes metenuus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818814		Benton, Oregon, US
Melissodes metenuus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818682		Benton, Oregon, US
Melissodes metenuus	42	-122	Steve Sheehy; Sarah Malaby	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816100		Klamath, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814730		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814662		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814658		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814656		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814655		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814653		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814635		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814628		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814620		Crook, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814575		Crook, Oregon, US
Melissodes metenuus	46	-123	Mark Gorman	2019-07-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813529		Washington, Oregon, US
Melissodes metenuus	45	-123	Roberta Packard	2019-07-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810226		Yamhill, Oregon, US
Melissodes metenuus	45	-123	Pat Wheeler	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499808774		Benton, Oregon, US
Melissodes metenuus	44	-118	Lori Humphreys	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499808249		Baker, Oregon, US
Melissodes metenuus	44	-122	Lori Humphreys	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499808115		Lane, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806954		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806951		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806334		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806333		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806328		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806326		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806325		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806324		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806321		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806317		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806307		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806302		Crook, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806269		Crook, Oregon, US
Melissodes metenuus	43	-124	Maarten Van Otterloo	2019-07-27	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805693		Curry, Oregon, US
Melissodes metenuus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804693		Marion, Oregon, US
Melissodes metenuus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804001		Marion, Oregon, US
Melissodes metenuus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803971		Marion, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803354		Lane, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-09-02	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803217		Lane, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-09-02	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803213		Lane, Oregon, US
Melissodes metenuus	44	-118	Lori Humphreys	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769665		Baker, Oregon, US
Melissodes metenuus	42	-122	Steve Sheehy; Sarah Malaby	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769663		Klamath, Oregon, US
Melissodes metenuus	45	-123	Pat Wheeler	2019-08-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769656		Polk, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-07-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769645		Lane, Oregon, US
Melissodes metenuus	44	-119	Mark Gorman	2019-07-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769643		Grant, Oregon, US
Melissodes metenuus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769642		Crook, Oregon, US
Melissodes metenuus	43	-124	Maarten Van Otterloo	2019-07-27	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769641		Curry, Oregon, US
Melissodes metenuus	45	-123	Pat Wheeler	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769640		Benton, Oregon, US
Melissodes metenuus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769635		Crook, Oregon, US
Melissodes metenuus	45	-123	Stephanie Hazen	2019-06-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769626		Marion, Oregon, US
Melissodes metenuus	46	-123	Rachel Phariss	2019-08-10	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769625		Washington, Oregon, US
Melissodes metenuus	45	-123	Michael O'Loughlin	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769624		Yamhill, Oregon, US
Melissodes metenuus	45	-124	Martin Stein	2019-08-27	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769622		Lincoln, Oregon, US
Melissodes metenuus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769620		Josephine, Oregon, US
Melissodes metenuus	45	-123	Jo Noren	2019-06-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769618		Yamhill, Oregon, US
Melissodes metenuus	43	-118	Julie Biddle	2019-06-27	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769617		Harney, Oregon, US
Melissodes metenuus	44	-119	Mark Gorman	2019-07-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769614		Grant, Oregon, US
Melissodes metenuus	45	-123	Pat Wheeler	2019-07-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769611		Benton, Oregon, US
Melissodes metenuus	46	-123	Cara Logan	2019-06-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769603		Washington, Oregon, US
Melissodes metenuus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769594		Marion, Oregon, US
Melissodes metenuus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769593		Lane, Oregon, US
Melissodes metenuus	44.812	-117.727	J. Rebholz	2012-06-28	H. Ikerd 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421546265		Baker, Oregon, US
Melissodes metenuus	42.428278	-120.881167	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804755607		Klamath Co., Oregon, US
Melissodes metenuus	42.281111	-121.916667	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804620360		Klamath Co., Oregon, US
Melissodes metenuus	44.5647	-123.2608	unknown	1922-08-09	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931997		Benton, Oregon, US
Melissodes metenuus			Ferguson, G	1941-06-26	LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931964		Douglas, Oregon, US
Melissodes metenuus	44.4104	-122.67231	Bridwell, J		LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931920		Linn, Oregon, US
Melissodes metenuus	42.075	-122.6058	McClay, M	1951-07-09	LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931899		Jackson, Oregon, US
Melissodes metenuus	44.5647	-123.2608	Roaf, J		LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837154		Benton, Oregon, US
Melissodes metenuus	43.2167	-123.3406	Scullen, H	1925-06-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837151		Douglas, Oregon, US
Melissodes metenuus			Scullen, H	1945-07-29	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837145		Oregon, US
Melissodes metenuus			Bridwell, J	1907-07-10	LaBerge, Walley	Adult		Could not find locality Thomas, Or	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837120		Oregon, US
Melissodes metenuus	42.3267	-122.8744	McClay, A	1953-09-11	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837116		Jackson, Oregon, US
Melissodes metenuus			Scullen, H	1929-07-30	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837103		Baker, Oregon, US
Melissodes metenuus			Scullen, H	1945-07-29	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837097		Oregon, US
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
