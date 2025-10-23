
const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink
Melissodes ablusus	36.07	-121.3	P.F. Torchio	1955-06-22							https://www.gbif.org/species/5040748
Melissodes ablusus	36.07	-121.3	P.F. Torchio	1955-06-23							https://www.gbif.org/species/5040748
Melissodes ablusus	36.07	-121.3	P.F. Torchio	1955-06-24							https://www.gbif.org/species/5040748
Melissodes ablusus	36.07	-121.3	P.F. Torchio	1955-06-25							https://www.gbif.org/species/5040748
Melissodes ablusus	37.4283	-121.9056	P. F. Torchio	1955-06-22			Female				https://www.gbif.org/species/5040748
Melissodes ablusus	37.426	-121.9752	P.F. Torchio	1955-06-21							https://www.gbif.org/species/5040748
Melissodes ablusus	37.426	-121.9752	P.F. Torchio	1955-06-22							https://www.gbif.org/species/5040748
Melissodes ablusus	36.0714	-121.3028	P.F. Torchio	1955-06-22	LaBerge, Walley	Adult					https://www.gbif.org/species/5040748
Melissodes ablusus	37.5986	-122.3861	Edwin C. Van Dyke	1912-09-01	LaBerge, Walley	Adult		Inferred date, possibly 1912-09-02			https://www.gbif.org/species/5040748
Melissodes ablusus	37.59855	-122.38719	Edwin C. Van Dyke	1912-09-01		Adult	Female	holotype. Precise coordinates missing, but locality given			https://www.gbif.org/species/5040748
Melissodes ablusus	37.59861	-122.38611	Edwin C. Van Dyke	1912-09-02		Adult					https://www.gbif.org/species/5040748
Melissodes ablusus	38.1804	-111.1815	T.H. Ogden et al.	2014-08-21	T. Griswold	Adult					https://www.gbif.org/species/5040748
Melissodes ablusus	45.63111	-116.97	DeBano, S.J. et al.					Precise coordinates missing, but locality given			DeBano, S.J. et al, (2024).
`;
function tsvToGeoJSON(tsv) {
  const lines = tsv.trim().split(/\r?\n/);
  const headers = lines[0].split("\t").map(h => h.trim());
  const features = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cols = lines[i].split("\t");
    if (cols.length < headers.length) continue;

    const obj = {};
    headers.forEach((h, j) => {
      obj[h] = cols[j] ? cols[j].trim() : "";
    });

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
      },
      geometry: { type: "Point", coordinates: [lon, lat] },
    });
  }

  return { type: "FeatureCollection", features };
}

const melissodesData = tsvToGeoJSON(tsvText);

function isVisible(el) {
  return el && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

const allPlaceholders = document.querySelectorAll(".map-placeholder");
let target = null;
allPlaceholders.forEach((el) => {
  if (isVisible(el)) target = el;
});

const mapEl = document.getElementById("map");
if (target && mapEl) {
  target.appendChild(mapEl);
  console.log("🗺️ Moved map into:", target.parentElement.className);
}

const landMask = { /* paste here */ };

const map = L.map("map").setView([39, -98], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 14,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

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
      `<b>Coordinates:</b> ${p.latitude.toFixed(4)}, ${p.longitude.toFixed(4)}`,
      `<b>Recorded By:</b> ${p.foundBy || "Unknown"}`,
      `<b>Date Found:</b> ${p.dateFound || "Unknown"}`,
      `<b>Determined By:</b> ${p.determinedBy || "Unknown"}`,
      `<b>Life Stage:</b> ${p.lifeStage || "Unknown"}`,
      `<b>Sex:</b> ${p.sex || "Unknown"}`,
      `<b>Notes:</b> ${p.notes || "None"}`
    ];

    if (p.rights) popupParts.push(`<b>Rights:</b> ${p.rights}`);
    if (p.rightsHolder) popupParts.push(`<b>Rights Holder:</b> ${p.rightsHolder}`);

    if (p.sourceLink) {
      popupParts.push(
        `<b>Source:</b> <a href="${p.sourceLink}" target="_blank" rel="noopener noreferrer">View Record</a>`
      );
    }

    const popupContent = popupParts.join("<br>");
    marker.bindPopup(popupContent);
    return marker;
  },
}).addTo(map);

if (melissodesData.features.length > 0) {
  map.fitBounds(pointLayer.getBounds());
} else {
  console.warn("⚠️ No valid points found in TSV data.");
}

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

window.addEventListener("resize", () => {
  setTimeout(() => map.invalidateSize(), 500);
});
setTimeout(() => map.invalidateSize(), 700);

window.addEventListener("resize", () => {
  setTimeout(() => {
    const allPlaceholders = document.querySelectorAll(".map-placeholder");
    const mapEl = document.getElementById("map");
    let target = null;
    allPlaceholders.forEach((el) => {
      if (el.offsetParent !== null) target = el;
    });
    if (target && mapEl && target !== mapEl.parentElement) {
      target.appendChild(mapEl);
      console.log("🔄 Moved map to:", target.parentElement.className);
      if (typeof map !== "undefined" && map.invalidateSize) map.invalidateSize();
    }
  }, 600);
});
