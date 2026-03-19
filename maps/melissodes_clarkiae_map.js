// =========================
// Melissodes Map Visualization
// =========================

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes clarkiae	43	-119	Julie Biddle	2019-06-24	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769536		Harney, Oregon, US
Melissodes clarkiae	43.257	-118.958	Julie Biddle	2019-06-24	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158893535		Harney, Oregon, US
Melissodes clarkiae	44.791	-123.016	Briana Lindh	2019-07-19	Briana C Lindh	Adult					https://www.gbif.org/occurrence/2979443408		Oregon, US
Melissodes clarkiae	44.791	-123.016	Briana Lindh	2019-07-19	Briana C Lindh	Adult					https://www.gbif.org/occurrence/2979445429		Oregon, US
Melissodes clarkiae	44.791	-123.016	Briana Lindh	2019-07-19	Briana C Lindh	Adult					https://www.gbif.org/occurrence/2979631471		Oregon, US
Melissodes clarkiae	44.788	-123.017	Briana Lindh	2019-07-19	Briana C Lindh	Adult					https://www.gbif.org/occurrence/2979632421		Oregon, US
Melissodes clarkiae	45	-123	Ellen Watrous	2019-07-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769541		Benton, Oregon, US
Melissodes clarkiae	45	-123	Ellen Watrous	2019-07-31	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804977		Benton, Oregon, US
Melissodes clarkiae	44.599	-123.315	Ellen Watrous	2019-07-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158893529		Benton, Oregon, US
Melissodes clarkiae	44.599	-123.316	Ellen Watrous	2019-07-31	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/6158899981		Benton, Oregon, US
Melissodes clarkiae	36	-121	J.M Meiners, T. Lamperty	2011	T.L. Griswold 2013						https://www.gbif.org/occurrence/659145003		SanBenito, California, US
Melissodes clarkiae	36	-121	T. Lamperty	2011	T.L. Griswold 2013						https://www.gbif.org/occurrence/768705563		SanBenito, California, US
Melissodes clarkiae	36	-121	O.J. Messinger	1997							https://www.gbif.org/occurrence/658943740		SanBenito, California, US
Melissodes clarkiae	36	-121	O.J. Messinger	1997							https://www.gbif.org/occurrence/658943741		SanBenito, California, US
Melissodes clarkiae			unknown	1981-05-28	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657691189		Fresno, California, US
Melissodes clarkiae			unknown	1981-05-28	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657850976		Fresno, California, US
Melissodes clarkiae	35.39	-120.502	William J. Turner	1966-06-14	Karen W. Wright	Adult	Male				https://www.gbif.org/occurrence/5141270595		San Luis Obispo, California, US
Melissodes clarkiae	35.39	-120.502	William J. Turner	1966-06-14	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5141270599		San Luis Obispo, California, US
Melissodes clarkiae	35.39	-120.502	William J. Turner	1966-06-14	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5141270620		San Luis Obispo, California, US
Melissodes clarkiae	35.39	-120.502	William J. Turner	1966-06-14	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5141270621		San Luis Obispo, California, US
Melissodes clarkiae	35.39	-120.502	William J. Turner	1966-06-14	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5141270622		San Luis Obispo, California, US
Melissodes clarkiae	35.39	-120.502	William J. Turner	1966-06-14	Karen W. Wright	Adult	Female				https://www.gbif.org/occurrence/5141270623		San Luis Obispo, California, US
Melissodes clarkiae	37.65712	-120.14609	R. W. Thorp	1963-06-19		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1061005155		Mariposa County, California, US
Melissodes clarkiae	38.51139	-122.92667		1961-07-04		Adult		originally entered “Haclenda”			https://www.gbif.org/occurrence/3801338606		Sonoma, California, US
Melissodes clarkiae	38.97795	-122.83944	Fidel, S	1959-06-20	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918224		Lake, California, US
Melissodes clarkiae			Bohart, Richard	1959-06-21	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918267		Santa Barbara, California, US
Melissodes clarkiae	35.4342	-120.5351	E.G. Linsley	1958-06-22							https://www.gbif.org/occurrence/658943739		SanLuisObispo, California, US
Melissodes clarkiae	35.4894	-120.6697	Linsley, E	1956-07-03	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657735302		San Luis Obispo, California, US
Melissodes clarkiae	35.48941	-120.67072	E.G. Linsley	1956-07-03							https://www.gbif.org/occurrence/658943738		SanLuisObispo, California, US
Melissodes clarkiae	35.50302	-120.75965	E. Gorton Linsley	1956-07-03		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1060896597		San Luis Obispo County, California, US
Melissodes clarkiae			E.G. Linsley	1956-07-03	W.E. LaBerge		Male			University of Nebraska	https://www.gbif.org/occurrence/6177196905		San Luis Obispo, California, US
Melissodes clarkiae	37.3996	-121.7997	P.F. Torchio	1954-05-18							https://www.gbif.org/occurrence/658943742		SantaClara, California, US
Melissodes clarkiae	42.4392	-123.3272	Russell, Jean	1935-07-12	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658188322		Josephine, Oregon, US
Melissodes clarkiae											https://www.gbif.org/occurrence/2238767793		
Melissodes clarkiae	34.203611	-117.761056	W. C. Bentinck				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804763317		Los Angeles Co., California, US
Melissodes clarkiae									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159756		
Melissodes clarkiae									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159925		
Melissodes clarkiae									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160084		
Melissodes clarkiae									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160957		
Melissodes clarkiae											https://www.gbif.org/occurrence/5862268094		
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
        gbif_link: obj["gbif_link"] || "",
        locality: obj["locality"] || "",
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

// Optional land mask placeholder
const landMask = { /* insert land polygon if available */ };

// Create map
const map = L.map("map").setView([39, -98], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 14,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Points
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

    // --- Source & Discover Life logic ---
    if (p.gbif_link) {
      popupParts.push(
        `<b>Source:</b> <a href="${p.gbif_link}" target="_blank" rel="noopener noreferrer">View GBIF Record</a>`
      );

      if (p.sourceLink) {
        const link = p.sourceLink.trim();
        if (/^https?:\/\//i.test(link)) {
          popupParts.push(
            `<b>Discover Life Link:</b> <a href="${link}" target="_blank" rel="noopener noreferrer">View Discover Life Record</a>`
          );
        } else {
          popupParts.push(`<b>Discover Life Link:</b> ${link}`);
        }
      }
    } else if (p.sourceLink) {
      const link = p.sourceLink.trim();
      const isURL = /^https?:\/\//i.test(link);
      const isDOI = /^10\.\d{4,9}\/[-._;()/:A-Z0-9]+$/i.test(link);

      if (isURL) {
        popupParts.push(
          `<b>Source:</b> <a href="${link}" target="_blank" rel="noopener noreferrer">View Record</a>`
        );
      } else if (isDOI) {
        popupParts.push(
          `<b>Source:</b> <a href="https://doi.org/${link}" target="_blank" rel="noopener noreferrer">${link}</a>`
        );
      } else {
        popupParts.push(`<b>Source:</b> ${link}`);
      }
    }

    marker.bindPopup(popupParts.join("<br>"));
    return marker;
  },
}).addTo(map);

if (melissodesData.features.length > 0) {
  map.fitBounds(pointLayer.getBounds());
} else {
  console.warn("⚠️ No valid points found in TSV data.");
}

// ===== Range polygon section =====
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

// Resize handlers
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
