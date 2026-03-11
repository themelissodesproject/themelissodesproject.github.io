// =========================
// Melissodes rivalis Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_rivalis"; // Your species-specific placeholder
const MAP_ID = "oregon_rivalis";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes rivalis	44	-117	Michael O'Loughlin	2019-05-22	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769938		Baker, Oregon, US
Melissodes rivalis	44.389	-117.245	Michael O'Loughlin	2019-05-22	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158894235		Baker, Oregon, US
Melissodes rivalis	44.935	-123.015	Briana Lindh	2019-06-19	Briana C Lindh	Adult					https://www.gbif.org/occurrence/2979597438		Oregon, US
Melissodes rivalis	45	-123	Scott Tienken	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770043		Yamhill, Oregon, US
Melissodes rivalis	45	-124	Martin Stein	2019-06-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770046		Lincoln, Oregon, US
Melissodes rivalis	45	-124	Martin Stein	2019-06-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818166		Lincoln, Oregon, US
Melissodes rivalis	45.173	-123.344	Scott Tienken	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158894402		Yamhill, Oregon, US
Melissodes rivalis	44.615	-124	Martin Stein	2019-06-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158894407		Lincoln, Oregon, US
Melissodes rivalis	44.615	-124	Martin Stein	2019-06-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158919145		Lincoln, Oregon, US
Melissodes rivalis	46	-123	Mark Gorman	2019-07-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816448		Washington, Oregon, US
Melissodes rivalis	45	-124	Martin Stein	2019-07-23	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818257		Lincoln, Oregon, US
Melissodes rivalis	43.327	-117.186	Ellen Watrous	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158894408		Malheur, Oregon, US
Melissodes rivalis	44.625	-124.006	Martin Stein	2019-07-23	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158919467		Lincoln, Oregon, US
Melissodes rivalis	45.521	-122.847	Mark Gorman	2019-07-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158947622		Washington, Oregon, US
Melissodes rivalis	45.602	-119.943	Mark Gorman	2019-07-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158947996		Morrow, Oregon, US
Melissodes rivalis	43	-119	Ellen Watrous	2019-08-23	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770068		Harney, Oregon, US
Melissodes rivalis	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806319		Crook, Oregon, US
Melissodes rivalis	44	-121	Lisa Sanco	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499808690		Deschutes, Oregon, US
Melissodes rivalis	43	-119	Tom Robertson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817088		Harney, Oregon, US
Melissodes rivalis	45	-123	Jerry Paul	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821934		Benton, Oregon, US
Melissodes rivalis	42.721	-118.623	Ellen Watrous	2019-08-23	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158894405		Harney, Oregon, US
Melissodes rivalis	45.57	-121.787	Gretchen Pederson	2019-08-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158894406		Hood River, Oregon, US
Melissodes rivalis	42.701	-118.593	Tom Robertson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158917929		Harney, Oregon, US
Melissodes rivalis	44.402	-120.134	Robert Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158933094		Crook, Oregon, US
Melissodes rivalis	44.264	-121.255	Lisa Sanco	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158936286		Deschutes, Oregon, US
Melissodes rivalis	44.606	-123.277	Jerry Paul	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158956453		Benton, Oregon, US
Melissodes rivalis	44	-121	Toni Stephan	2019-09-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499801609		Deschutes, Oregon, US
Melissodes rivalis	44	-123	Lori Humphreys	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499801895		Lane, Oregon, US
Melissodes rivalis	44	-123	Lori Humphreys	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499801896		Lane, Oregon, US
Melissodes rivalis	42	-120	Robert Pederson	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812116		Lake, Oregon, US
Melissodes rivalis	44	-121	Adrienne Smith	2019-09-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812487		Deschutes, Oregon, US
Melissodes rivalis	44	-121	Gretchen Pederson	2019-09-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812841		Deschutes, Oregon, US
Melissodes rivalis	43	-122	Robert Pederson	2019-09-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499813142		Klamath, Oregon, US
Melissodes rivalis	42	-120	Robert Pederson	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814678		Lake, Oregon, US
Melissodes rivalis	44	-121	Adrienne Smith	2019-09-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822011		Deschutes, Oregon, US
Melissodes rivalis	44.001	-123.141	Lori Humphreys	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158894519		Lane, Oregon, US
Melissodes rivalis	44.001	-123.141	Lori Humphreys	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158894521		Lane, Oregon, US
Melissodes rivalis	42.204	-120.019	Robert Pederson	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158911322		Lake, Oregon, US
Melissodes rivalis	44.146	-121.376	Gretchen Pederson	2019-09-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158912224		Deschutes, Oregon, US
Melissodes rivalis	42.896	-121.812	Robert Pederson	2019-09-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158912739		Klamath, Oregon, US
Melissodes rivalis	42.074	-119.963	Robert Pederson	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158915043		Lake, Oregon, US
Melissodes rivalis	44.263	-121.255	Toni Stephan	2019-09-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158926955		Deschutes, Oregon, US
Melissodes rivalis	44.262	-121.254	Adrienne Smith	2019-09-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158942020		Deschutes, Oregon, US
Melissodes rivalis	44.001	-121.249	Adrienne Smith	2019-09-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/6158956494		Deschutes, Oregon, US
Melissodes rivalis	44.812	-117.727	J. Rebholz	2012-06-06	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421560707		Baker, Oregon, US
Melissodes rivalis	44.812	-117.727	J. Rebholz	2012-06-06	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421561717		Baker, Oregon, US
Melissodes rivalis	45.6704	-118.6836	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658952308		Umatilla, Oregon, US
Melissodes rivalis	45.6704	-118.6836	J.E. Harrison	1998-07-21							https://www.gbif.org/occurrence/658952306		Umatilla, Oregon, US
Melissodes rivalis	45.6704	-118.6836	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658952307		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-10							https://www.gbif.org/occurrence/658952357		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-10							https://www.gbif.org/occurrence/658952358		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-10							https://www.gbif.org/occurrence/658952359		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-10							https://www.gbif.org/occurrence/658952360		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-10							https://www.gbif.org/occurrence/658952361		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-04							https://www.gbif.org/occurrence/658952362		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-04							https://www.gbif.org/occurrence/658952363		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-04							https://www.gbif.org/occurrence/658952364		Umatilla, Oregon, US
Melissodes rivalis	45.639	-118.6849	V.J. Tepedino	1997-08-17							https://www.gbif.org/occurrence/658952365		Umatilla, Oregon, US
Melissodes rivalis	42.468132	-122.070653	Eric E. Remington	1987-08-20	John S. Ascher		Male		Open Access, http://creativecommons.org/publicdomain/zero/1.0/; see Yale Peabody policies at: http://hdl.handle.net/10079/8931zqj	Yale Peabody Museum	https://www.gbif.org/occurrence/1039077288		Klamath County, Oregon, US
Melissodes rivalis	43.741	-117.072	R.B. Roberts	1968-07-20		Adult					https://www.gbif.org/occurrence/3801852795		Malheur, Oregon, US
Melissodes rivalis	42.17181	-121.63083	Denno & Miller	1968-08-01	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918207		Klamath, Oregon, US
Melissodes rivalis	42.32667	-122.87444	L.G. Gentner	1956-08-03		Adult					https://www.gbif.org/occurrence/3801339783		Jackson, Oregon, US
Melissodes rivalis	44.881	-117.115	W.P. Stephen	1954-08-06		Adult					https://www.gbif.org/occurrence/3801858795		Baker, Oregon, US
Melissodes rivalis	42.40733	-124.42177		1933-08-05							https://www.gbif.org/occurrence/658952282		Curry, Oregon, US
Melissodes rivalis	42.476944	-122.088056	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804616132		Klamath Co., Oregon, US
Melissodes rivalis	42.283194	-121.89225	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804727331		Klamath Co., Oregon, US
Melissodes rivalis	42.283194	-121.89225	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804768374		Klamath Co., Oregon, US
Melissodes rivalis			Scullen, H	1944-08-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658183173		Lane, Oregon, US
Melissodes rivalis			Schuh, Joe	1933-07-19	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657592252		Yamhill, Oregon, US
Melissodes rivalis			Chamberlain		20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4424932189		Crook, Oregon, US
Melissodes rivalis					20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4424932241		Clackamas, Oregon, US
Melissodes rivalis			Chamberlain		20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4424932940		Washington, Oregon, US
Melissodes rivalis					20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425434205		Clackamas, Oregon, US
Melissodes rivalis			Chamberlain		20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425439170		Crook, Oregon, US
Melissodes rivalis					20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425439171		Clackamas, Oregon, US
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
