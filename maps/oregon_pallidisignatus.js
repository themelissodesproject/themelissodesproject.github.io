// =========================
// Melissodes pallidisignatus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_pallidisignatus"; // Your species-specific placeholder
const MAP_ID = "oregon_pallidisignatus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes pallidisignatus	42.401757	-122.828387	M. Graham	2019-07-30	A. Moldenke		Female			Oregon State University	https://www.gbif.org/occurrence/3064158333		Jackson, Oregon, US
Melissodes pallidisignatus	42.401757	-122.828387	M. Graham	2019-08-14	A. Moldenke		Female			Oregon State University	https://www.gbif.org/occurrence/3064158360		Jackson, Oregon, US
Melissodes pallidisignatus	44	-121	Ellen Watrous	2019-10-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769941		Crook, Oregon, US
Melissodes pallidisignatus	44	-119	Ellen Watrous	2019-10-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769973		Harney, Oregon, US
Melissodes pallidisignatus	44	-121	Ellen Watrous	2019-10-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822418		Crook, Oregon, US
Melissodes pallidisignatus	44.303	-120.81	Ellen Watrous	2019-10-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158894233		Crook, Oregon, US
Melissodes pallidisignatus	43.992	-118.69	Ellen Watrous	2019-10-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158894234		Harney, Oregon, US
Melissodes pallidisignatus	44.303	-120.81	Ellen Watrous	2019-10-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158957077		Crook, Oregon, US
Melissodes pallidisignatus	42.85306	-122.00806	C.W. Rettenmeyer, M.E. Rettenmeyer	1962-09-01		Adult					https://www.gbif.org/occurrence/3801857006		Klamath, Oregon, US
Melissodes pallidisignatus	42.398	-121.1586	P.F. Torchio	1960-08-03		Adult					https://www.gbif.org/occurrence/3801372084		Klamath, Oregon, US
Melissodes pallidisignatus	43.74	-117.07	P.F. Torchio	1959-09-08							https://www.gbif.org/occurrence/658947710		Malheur, Oregon, US
Melissodes pallidisignatus	43.74	-117.07	P.F. Torchio	1959-09-08							https://www.gbif.org/occurrence/658947711		Malheur, Oregon, US
Melissodes pallidisignatus	43.74	-117.07	P.F. Torchio	1959-09-08							https://www.gbif.org/occurrence/658947712		Malheur, Oregon, US
Melissodes pallidisignatus	42.9175	-121.7843	H.A. Scullen	1952-08-20		Adult					https://www.gbif.org/occurrence/3801340989		Klamath, Oregon, US
Melissodes pallidisignatus	42.1777	-119.8788	E.E. Grissell, R.F. Denno	1949-09-13		Adult					https://www.gbif.org/occurrence/3801340062		Lake, Oregon, US
Melissodes pallidisignatus	43.7692	-121.3142	Schuh, Grey	1939-08-08	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658156850		Deschutes, Oregon, US
Melissodes pallidisignatus	44.94306	-123.03389		1932-09-04		Adult					https://www.gbif.org/occurrence/3801339978		Marion, Oregon, US
Melissodes pallidisignatus	42.9386	-122.1408	F.L. Wynd	1930-08-28		Adult					https://www.gbif.org/occurrence/3801938985		Klamath, Oregon, US
Melissodes pallidisignatus	42.341667	-121.803333	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804610841		Klamath Co., Oregon, US
Melissodes pallidisignatus			Scullen, H	1955-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658328100		Klamath, Oregon, US
Melissodes pallidisignatus			unknown	1932-09-04	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658384627		Oregon, US
Melissodes pallidisignatus			Scullen, H	1930-07-28	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658322480		Oregon, US
Melissodes pallidisignatus			Scullen, H	1930-08-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657613385		Klamath, Oregon, US
Melissodes pallidisignatus			Scullen, H	1930-08-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657784553		Klamath, Oregon, US
Melissodes pallidisignatus			Scullen, H	1930-08-14	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657849189		Klamath, Oregon, US
Melissodes pallidisignatus			Scullen, H	1930-08-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658334068		Klamath, Oregon, US
Melissodes pallidisignatus			Scullen, H	1930-09-02	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657749492		Klamath, Oregon, US
Melissodes pallidisignatus			unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658213997		Deschutes, Oregon, US
Melissodes pallidisignatus			unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658253824		Deschutes, Oregon, US
Melissodes pallidisignatus					20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425663201		Deschutes, Oregon, US
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
