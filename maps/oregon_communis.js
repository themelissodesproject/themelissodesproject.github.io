// =========================
// Melissodes communis Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_communis"; // Your species-specific placeholder
const MAP_ID = "oregon_communis";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes communis	45.639	-118.6849	J.E. Harrison	1998-06-30							https://www.gbif.org/occurrence/658952913		Umatilla, Oregon, US
Melissodes communis	45.6704	-118.6836	J.E. Harrison	1998-06-30							https://www.gbif.org/occurrence/658952912		Umatilla, Oregon, US
Melissodes communis			Scullen, H	1930-07-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658335938		Jackson, Oregon, US
Melissodes communis			Scullen, H		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658238201		Curry, Oregon, US
Melissodes communis			Scullen, H		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658216495		Curry, Oregon, US
Melissodes communis			Scullen, H		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658190106		Curry, Oregon, US
Melissodes communis			Scullen, H		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658166564		Curry, Oregon, US
Melissodes communis			Scullen, H		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658150686		Curry, Oregon, US
Melissodes communis			Scullen, H		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657729956		Curry, Oregon, US
Melissodes communis			McGinnis, G		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657682382		Curry, Oregon, US
Melissodes communis	42.533	-124.15	Laure Bordelon	2019-08-06	Briana C Lindh	Adult					https://www.gbif.org/occurrence/4916544504		Oregon, US
Melissodes communis	42.712	-124.378	Laure Bordelon	2019-07-02	Briana C Lindh	Adult					https://www.gbif.org/occurrence/4916337054		Oregon, US
Melissodes communis	45.331	-120.535	Laure Bordelon	2019-06-13	Briana C Lindh	Adult					https://www.gbif.org/occurrence/4913011707		Oregon, US
Melissodes communis	44	-121	Heike Williams	2019-09-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822950		Deschutes, Oregon, US
Melissodes communis	44	-121	Adrienne Smith	2019-09-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822003		Deschutes, Oregon, US
Melissodes communis	44	-121	Adrienne Smith	2019-09-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818159		Deschutes, Oregon, US
Melissodes communis	44	-121	Robert Pederson	2019-09-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499812602		Deschutes, Oregon, US
Melissodes communis	44	-121	Robert Pederson	2019-09-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499812600		Deschutes, Oregon, US
Melissodes communis	44	-121	Robert Pederson	2019-09-19	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499812545		Deschutes, Oregon, US
Melissodes communis	44	-121	Robert Pederson	2019-08-22	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769653		Deschutes, Oregon, US
Melissodes communis	46	-124	Patterson	2019-07-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769649		Clatsop, Oregon, US
Melissodes communis	45	-119	Sarah Gardner	2019-08-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769647		Umatilla, Oregon, US
Melissodes communis	44.812	-117.727	J. Rebholz	2012-06-28	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421546221		Baker, Oregon, US
Melissodes communis	44.812	-117.727	J. Rebholz	2011-07-20	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421542240		Baker, Oregon, US
Melissodes communis	44.812	-117.727	J. Rebholz	2011-08-05	K.W. Wright 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421537763		Baker, Oregon, US
Melissodes communis	42.428278	-120.881167	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804639931		Klamath Co., Oregon, US
Melissodes communis	45.46	-116.8	Kimoto C.	2007-07-12		Adult	Female				https://www.gbif.org/occurrence/1414209285		Oregon, US
Melissodes communis	45.46	-116.8	Kimoto C.	2007-07-11		Adult	Female				https://www.gbif.org/occurrence/1414209283		Oregon, US
Melissodes communis	45.46	-116.8	Kimoto C.	2007-07-12		Adult	Female				https://www.gbif.org/occurrence/1414209249		Oregon, US
Melissodes communis	44.252	-120.937	J. Gibbs & C. Sheffield	2007-06-28	Laurence Packer	Adult	Female				https://www.gbif.org/occurrence/1414136585		Oregon, US
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
