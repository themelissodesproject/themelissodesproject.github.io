// 🐝 Species data
const melissodesData = {
  "type": "FeatureCollection",
  "features": [
    {"type": "Feature","properties": {"name": "Melissodes agilis","latitude": 49.1833300,"longitude": -119.5500000,"foundBy": "Raymond Beamer","dateFound": "1931-08-06","lifeStage": "Adult", "sex": "", "notes": ""},"geometry": { "type": "Point", "coordinates": [-119.5500000, 49.1833300] }}
  ]
};

// 🌍 Embedded North America land polygon
const landMask = { /* paste the full GeoJSON here from ne_110m_land.geojson */ };

// 🗺️ Initialize map
const map = L.map('map').setView([39, -98], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 10,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 🧭 Add the points with extended interactive popups
const pointLayer = L.geoJSON(melissodesData, {
  pointToLayer: (feature, latlng) => {
    const marker = L.circleMarker(latlng, {
      radius: 5,
      color: "#ff6600",
      fillColor: "#ff6600",
      fillOpacity: 0.9
    });

    // Bind popup with extended species info
    const props = feature.properties;
    const popupContent = `
      <b>${props.name}</b><br>
      <b>Coordinates:</b> ${props.latitude?.toFixed(4)}, ${props.longitude?.toFixed(4)}<br>
      <b>Found By:</b> ${props.foundBy || "Unknown"}<br>
      <b>Date Found:</b> ${props.dateFound || "Unknown"}<br>
      <b>Determined By:</b> ${props.determinedBy || "Unknown"}<br>
      <b>Life Stage:</b> ${props.lifeStage || "Unknown"}<br>
      <b>Sex:</b> ${props.sex || "Unknown"}<br>
      <b>Notes:</b> ${props.notes || "None"}
    `;
    marker.bindPopup(popupContent);

    return marker;
  }
}).addTo(map);
map.fitBounds(pointLayer.getBounds());

// 🧮 Create hull and buffer
let hull = turf.concave(melissodesData, { maxEdge: 5 });
if (!hull) hull = turf.convex(melissodesData);

let buffered = null;
try {
  buffered = turf.buffer(hull, 100, { units: "kilometers" });
} catch {
  buffered = hull;
}

// 🧮 Clip to land
let clipped = null;
try {
  clipped = turf.intersect(buffered, landMask);
} catch {
  clipped = buffered;
}

// 🧮 Simplify and smooth
let smoothed = null;
try {
  smoothed = turf.simplify(clipped || buffered, { tolerance: 0.1, highQuality: true });
} catch {
  smoothed = clipped || buffered;
}

// 🧩 Draw final polygon
if (smoothed) {
  L.geoJSON(smoothed, {
    style: {
      color: "#3366ff",
      weight: 2,
      fillColor: "#6699ff",
      fillOpacity: 0.25
    },
    interactive: false
  }).addTo(map);
} else {
  console.warn("No valid range polygon generated.");
}
