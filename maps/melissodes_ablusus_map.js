const newLocal = { "type": "Feature", "properties": { "name": "Melissodes ablusus", "foundBy": "Edwin C. Van Dyke", "dateFound": "1912-09-02", "determinedBy": "", "lifeStage": "Adult", "sex": "", "notes": "" }, "geometry": { "type": "Point", "coordinates": [-122.38611, 37.59861] } };
// 🐝 Species data
const melissodesData = {
  "type": "FeatureCollection",
  "features": [
    {"type": "Feature","properties": {"name": "Melissodes ablusus","latitude": 38.18038,"longitude": -111.18147,"foundBy": "T.H. Ogden et al.","dateFound": "2014-08-21", "determinedBy": "T. Griswold", "lifeStage": "Adult", "sex": "", "notes": ""}, "geometry": { "type": "Point", "coordinates": [-111.18147, 38.18038] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","latitude": 36.0714,"longitude": -121.3028,"foundBy": "P.F. Torchio","dateFound": "1955-06-22", "determinedBy": "LaBerge, Walley", "lifeStage": "Adult", "sex": "", "notes": ""}, "geometry": { "type": "Point", "coordinates": [-121.3028, 36.0714] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","latitude": 37.42605,"longitude": -121.97523,"foundBy": "P.F. Torchio","dateFound": "1955-06-22", "determinedBy": "", "lifeStage": "", "sex": "", "notes": "2 specimens"}, "geometry": { "type": "Point", "coordinates": [-121.97523, 37.42605] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","latitude": 36.07,"longitude": -121.3,"foundBy": "P.F. Torchio","dateFound": "1955-06-22", "determinedBy": "", "lifeStage": "", "sex": "", "notes": "4 specimens"}, "geometry": { "type": "Point", "coordinates": [-121.3, 36.07] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","latitude": 37.42833,"longitude": -121.90556,"foundBy": "P.F. Torchio","dateFound": "1955-06-22", "determinedBy": "", "lifeStage": "", "sex": "", "notes": "2 specimens"}, "geometry": { "type": "Point", "coordinates": [-121.90556, 37.42833] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","latitude": 37.5986,"longitude":	-122.3861,"foundBy": "Edwin C. Van Dyke","dateFound": "1912-09-01", "determinedBy": "LaBerge, Walley", "lifeStage": "Adult", "sex": "", "notes": "Inferred date, possibly 1912-09-02"}, "geometry": { "type": "Point", "coordinates": [-122.3861, 37.5986] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","foundBy": "Edwin C. Van Dyke","dateFound": "1912-09-01", "determinedBy": "", "lifeStage": "Adult", "sex": "Female", "notes": "holotype. Coordinates missing, but locality given"}, "geometry": { "type": "Point", "coordinates": [-122.38719, 37.59855] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","latitude": 37.428333,"longitude":	-121.905556,"foundBy": "P. F. Torchio","dateFound": "1955-06-22", "determinedBy": "", "lifeStage": "", "sex": "Female", "notes": ""}, "geometry": { "type": "Point", "coordinates": [-121.905556, 37.428333] }},
    {"type": "Feature","properties": {"name": "Melissodes ablusus","foundBy": "","dateFound": "", "determinedBy": "", "lifeStage": "", "sex": "", "notes": "Coordinates missing, but locality given"}, "geometry": { "type": "Point", "coordinates": [-116.97882066736636, 45.54762068206883] }},
  ]
};

// 🌍 Embedded North America land polygon
const landMask = { /* paste the full GeoJSON here from ne_110m_land.geojson */ };

// 🗺️ Initialize map
const map = L.map('map').setView([39, -98], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 14,
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
      <b>Recorded By:</b> ${props.foundBy || "Unknown"}<br>
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
let hull = turf.convex(melissodesData, { maxEdge: 5});
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

window.addEventListener('resize', () => {
  setTimeout(() => {
    map.invalidateSize();
  }, 500);
});

// Also trigger once after page load for mobile layout
setTimeout(() => {
  map.invalidateSize();
}, 700);
