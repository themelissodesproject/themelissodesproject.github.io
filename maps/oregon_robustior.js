// =========================
// Melissodes robustior Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_robustior"; // Your species-specific placeholder
const MAP_ID = "oregon_robustior";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes robustior	43.74	-117.07	P.F. Torchio	1959-09-06							https://www.gbif.org/occurrence/658948053		Malheur, Oregon, US
Melissodes robustior	44.5647	-123.2608	Scullen, H	1921-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658340264		Benton, Oregon, US
Melissodes robustior	44.4617	-123.1092	Scullen, H	1924-08-05	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658316599		Linn, Oregon, US
Melissodes robustior	44.5647	-123.2608	Scullen, H	1924-07-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658235024		Benton, Oregon, US
Melissodes robustior	44.5647	-123.2608	Scullen, H	1921-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658217803		Benton, Oregon, US
Melissodes robustior			Schuh, Grey		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658136728		Washington, Oregon, US
Melissodes robustior	44.5647	-123.2608	Scullen, H	1921-09-05	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657846783		Benton, Oregon, US
Melissodes robustior	44.5647	-123.2608	Scullen, H	1925-08-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657829674		Benton, Oregon, US
Melissodes robustior	44.5647	-123.2608	Scullen, H	1921-08-19	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657815344		Benton, Oregon, US
Melissodes robustior	44.935	-123.029	Briana Lindh	2019-08-27	Briana C Lindh	Adult					https://www.gbif.org/occurrence/4913073385		Oregon, US
Melissodes robustior	44.415	-117.225	J.E. Davis	1948-08-18		Adult					https://www.gbif.org/occurrence/3801854820		Baker, Oregon, US
Melissodes robustior	44	-121	Heike Williams	2019-09-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822941		Deschutes, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-09-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499821487		Washington, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-09-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499821483		Washington, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-09-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821482		Washington, Oregon, US
Melissodes robustior	44	-121	Dan O'Loughlin	2019-07-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819890		Deschutes, Oregon, US
Melissodes robustior	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819748		Lane, Oregon, US
Melissodes robustior	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819746		Lane, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-08-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819682		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-08-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819681		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-08-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819651		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-08-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819621		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-08-19	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818894		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-08-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818891		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-08-19	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818877		Multnomah, Oregon, US
Melissodes robustior	45	-123	Ellen Watrous	2019-08-11	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818754		Benton, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-06-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818354		Marion, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-09-06	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818125		Marion, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-08-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817817		Marion, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-07-19	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817344		Marion, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-07-19	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817343		Marion, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817222		Marion, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-06-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817028		Marion, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-08-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499816880		Washington, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-08-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816860		Washington, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-08-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816858		Washington, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-08-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499816857		Washington, Oregon, US
Melissodes robustior	45	-123	Carol Horning	2019-08-26	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816320		Marion, Oregon, US
Melissodes robustior	45	-123	Laure Bordelon	2019-09-06	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815331		Marion, Oregon, US
Melissodes robustior	45	-123	Laure Bordelon	2019-09-06	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815326		Marion, Oregon, US
Melissodes robustior	45	-123	Laure Bordelon	2019-09-06	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815325		Marion, Oregon, US
Melissodes robustior	43	-122	Steve Sheehy; Sarah Malaby	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814918		Klamath, Oregon, US
Melissodes robustior	43	-122	Steve Sheehy; Sarah Malaby	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814917		Klamath, Oregon, US
Melissodes robustior	43	-122	Steve Sheehy; Sarah Malaby	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814912		Klamath, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-07-22	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813857		Washington, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-07-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813654		Washington, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-07-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813653		Washington, Oregon, US
Melissodes robustior	44	-121	Gretchen Pederson	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499812303		Deschutes, Oregon, US
Melissodes robustior	44	-121	Gretchen Pederson	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499812298		Deschutes, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-06-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811125		Washington, Oregon, US
Melissodes robustior	45	-123	Jerry Paul	2019-08-11	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810159		Benton, Oregon, US
Melissodes robustior	46	-123	Martha Richards	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809572		Multnomah, Oregon, US
Melissodes robustior	45	-123	Maureen Beezhold	2019-08-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809211		Benton, Oregon, US
Melissodes robustior	44	-121	Rocky Bessette	2019-08-22	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809121		Deschutes, Oregon, US
Melissodes robustior	44	-121	Rocky Bessette	2019-08-22	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809102		Deschutes, Oregon, US
Melissodes robustior	44	-121	Michele Sims	2019-08-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499808503		Deschutes, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-09-02	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807551		Multnomah, Oregon, US
Melissodes robustior	44	-121	Robert Pederson	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807494		Deschutes, Oregon, US
Melissodes robustior	44	-121	Robert Pederson	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807492		Deschutes, Oregon, US
Melissodes robustior	44	-121	Robert Pederson	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807490		Deschutes, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-09-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807487		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-09-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807482		Multnomah, Oregon, US
Melissodes robustior	46	-123	Natalie Lozano	2019-09-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807479		Multnomah, Oregon, US
Melissodes robustior	46	-123	Cara Logan	2019-08-02	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499805571		Washington, Oregon, US
Melissodes robustior	45	-123	Maureen Beezhold	2019-07-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802358		Benton, Oregon, US
Melissodes robustior	43	-118	Julie Biddle	2019-05-31	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802278		Harney, Oregon, US
Melissodes robustior	46	-123	Mark Gorman	2019-06-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770085		Washington, Oregon, US
Melissodes robustior	43	-119	Dan O'Loughlin	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770063		Harney, Oregon, US
Melissodes robustior	45	-123	Tom Robertson	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770039		Marion, Oregon, US
Melissodes robustior	46	-119	John Baldwin	2019-07-23	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770032		Umatilla, Oregon, US
Melissodes robustior	45	-123	Roberta Packard	2019-07-31	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770028		Yamhill, Oregon, US
Melissodes robustior	46	-123	Martha Richards	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770027		Multnomah, Oregon, US
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
