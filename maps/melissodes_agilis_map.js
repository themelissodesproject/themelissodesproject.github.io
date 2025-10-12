// 🗺️ Load CSV dynamically and plot features
document.addEventListener("DOMContentLoaded", function () {
  fetch("data/melissodes_agilis_full_records_fixed.csv")
    .then((response) => response.text())
    .then((csvText) => {
      const rows = csvText.split("\n").slice(1);
      const features = [];

      for (const row of rows) {
        if (!row.trim()) continue;
        const cols = row.split(",");

        const [
          name,
          latitude,
          longitude,
          foundBy,
          dateFound,
          determinedBy,
          lifeStage,
          sex,
          notes,
        ] = cols.map((v) => v.trim().replace(/^"|"$/g, ""));

        // Skip if no coordinates
        if (!latitude || !longitude) continue;

        features.push({
          type: "Feature",
          properties: {
            name,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            foundBy: foundBy || "",
            dateFound: dateFound || "",
            determinedBy: determinedBy || "",
            lifeStage: lifeStage || "",
            sex: sex || "",
            notes: notes || "",
          },
          geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
        });
      }

      const melissodesData = { type: "FeatureCollection", features };

      // Initialize map
      const map = L.map("map").setView([39, -98], 4);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 14,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Add points
      const pointLayer = L.geoJSON(melissodesData, {
        pointToLayer: (feature, latlng) => {
          const marker = L.circleMarker(latlng, {
            radius: 5,
            color: "#ff6600",
            fillColor: "#ff6600",
            fillOpacity: 0.9,
          });

          const p = feature.properties;
          const popup = `
            <b>${p.name}</b><br>
            <b>Coordinates:</b> ${p.latitude.toFixed(4)}, ${p.longitude.toFixed(4)}<br>
            <b>Recorded By:</b> ${p.foundBy || "Unknown"}<br>
            <b>Date Found:</b> ${p.dateFound || "Unknown"}<br>
            <b>Determined By:</b> ${p.determinedBy || "Unknown"}<br>
            <b>Life Stage:</b> ${p.lifeStage || "Unknown"}<br>
            <b>Sex:</b> ${p.sex || "Unknown"}<br>
            <b>Notes:</b> ${p.notes || "None"}
          `;
          marker.bindPopup(popup);
          return marker;
        },
      }).addTo(map);

      map.fitBounds(pointLayer.getBounds());

      // Optional: generate convex hull (range)
      let hull = turf.convex(melissodesData);
      if (hull) {
        const buffered = turf.buffer(hull, 100, { units: "kilometers" });
        const smoothed = turf.simplify(buffered, { tolerance: 0.1, highQuality: true });
        L.geoJSON(smoothed, {
          style: {
            color: "#3366ff",
            weight: 2,
            fillColor: "#6699ff",
            fillOpacity: 0.25,
          },
          interactive: false,
        }).addTo(map);
      }

      // Resize handler
      setTimeout(() => map.invalidateSize(), 700);
      window.addEventListener("resize", () => {
        setTimeout(() => map.invalidateSize(), 500);
      });
    })
    .catch((err) => console.error("Error loading CSV:", err));
});
