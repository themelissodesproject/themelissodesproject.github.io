// =========================
// Melissodes Map Visualization
// =========================

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes appressus	38.57884	-121.49803	J.G. Hall	1951-09-13							https://www.gbif.org/occurrence/658946047		Sacramento, California, US
Melissodes appressus	35.6965	-117.383	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658946046		SanBernardino, California, US
Melissodes appressus	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658946045		Socorro, New Mexico, US
Melissodes appressus	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658946044		Socorro, New Mexico, US
Melissodes appressus	33.95	-117.39	P.H. Timberlake	1927-09-06							https://www.gbif.org/occurrence/658946043		Riverside, California, US
Melissodes appressus	38.5446	-121.7387	E.I. Schlinger	1953-07-16							https://www.gbif.org/occurrence/658946042		Yolo, California, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946041		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946040		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946039		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946038		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946037		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946036		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946035		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946034		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946033		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946032		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946031		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946030		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946029		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946028		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946027		Luna, New Mexico, US
Melissodes appressus	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658946026		Luna, New Mexico, US
Melissodes appressus			C.R. Nelson	1981-09-15							https://www.gbif.org/occurrence/658946025		Washington, Utah, US
Melissodes appressus	38.3224	-110.6757	T.L. Griswold	1985-08-28							https://www.gbif.org/occurrence/658946024		Wayne, Utah, US
Melissodes appressus	39.9126	-122.0763	Ordway, Ellen	1959-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658350509		Tehama, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658323679		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658313997		Stanislaus, California, US
Melissodes appressus	39.9126	-122.0763	Ordway, Ellen	1959-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658294353		Tehama, California, US
Melissodes appressus	33.9533	-117.3953	Timberlake, P		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658287001		Riverside, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658285545		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658273515		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658272515		Stanislaus, California, US
Melissodes appressus	38.545	-121.7394	Bechtel, R	1950-08-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658254872		Yolo, California, US
Melissodes appressus	33.9533	-117.3953	Timberlake, P		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658229907		Riverside, California, US
Melissodes appressus	33.9533	-117.3953	McCracken, I	1936-10-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658225289		Riverside, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658201187		Stanislaus, California, US
Melissodes appressus	39.9126	-122.0763	Ordway, Ellen	1959-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658187545		Tehama, California, US
Melissodes appressus	33.9533	-117.3953	Timberlake, P		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658184891		Riverside, California, US
Melissodes appressus	33.9533	-117.3953	Timberlake, P		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658174017		Riverside, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658167986		Stanislaus, California, US
Melissodes appressus	37.9781	-122.03	Opler, Paul	1955-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658157829		Contra Costa, California, US
Melissodes appressus	39.9126	-122.0763	Ordway, Ellen	1959-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658148778		Tehama, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658140511		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658130873		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658124002		Stanislaus, California, US
Melissodes appressus	33.1918	-104.5225	Michener, Baker, Kamm	1970-09-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657840237		Chaves, New Mexico, US
Melissodes appressus	39.2067	-120.8103	Michener, Charles	1934-09-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657834048		Los Angeles, California, US
Melissodes appressus	33.1918	-104.5225	Michener, Baker, Kamm	1970-09-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657828981		Chaves, New Mexico, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-08-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657817073		Stanislaus, California, US
Melissodes appressus	39.7103	-111.8356	Knowlton, George	1961-07-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657808556		Juab, Utah, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657783787		Stanislaus, California, US
Melissodes appressus	39.2067	-120.8103	Michener, Charles	1935-09-28	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657778422		Los Angeles, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-08-15	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657771845		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657760655		Stanislaus, California, US
Melissodes appressus	32	-108.93	Brothers, D	1970-08-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657758050		Cochise, Arizona, US
Melissodes appressus	33.1918	-104.5225	Michener, Baker, Kamm	1970-09-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657753482		Chaves, New Mexico, US
Melissodes appressus			Smith, Ray	1948-09-22	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657751017		Merced, California, US
Melissodes appressus	33.1918	-104.5225	Michener, Baker, Kamm	1970-09-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657749298		Chaves, New Mexico, US
Melissodes appressus	33.1918	-104.5225	Michener, Baker, Kamm	1970-09-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657734540		Chaves, New Mexico, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657726374		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657708376		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657700279		Stanislaus, California, US
Melissodes appressus			Schlinger, E	1951-09-22	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657680964		Tehama, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657673209		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657664568		Stanislaus, California, US
Melissodes appressus			Linsley, E	1957-09-09	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657642688		Sierra, California, US
Melissodes appressus	34.2564	-103.3483	Michener, Baker, Kamm	1970-09-17	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657635555		Roosevelt, New Mexico, US
Melissodes appressus	39.9126	-122.0763	Ordway, Ellen	1959-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657634037		Tehama, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657610339		Stanislaus, California, US
Melissodes appressus	37.4947	-120.8456	Snelling, Roy	1953-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657590751		Stanislaus, California, US
Melissodes appressus											https://www.gbif.org/occurrence/5861556379		
Melissodes appressus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160898		
Melissodes appressus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160242		
Melissodes appressus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159768		
Melissodes appressus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159630		
Melissodes appressus			C.D. Michener, Kamm, Baker	1970-09-16		Adult					https://www.gbif.org/occurrence/3801942272		Chaves, New Mexico, US
Melissodes appressus	37.42722	-122.16917	L.F. Jr.			Adult					https://www.gbif.org/occurrence/3801941250		Santa Clara, California, US
Melissodes appressus			R.W. Rust, P.F. Torchio, G. Wood, N. Yousef	1966-09-17		Adult					https://www.gbif.org/occurrence/3801941249		Luna, New Mexico, US
Melissodes appressus			R.W. Rust, P.F. Torchio, G. Wood, N. Yousef	1966-09-17		Adult					https://www.gbif.org/occurrence/3801939276		Luna, New Mexico, US
Melissodes appressus	38.005	-121.80472	Don Burdick	1955-10-25		Adult					https://www.gbif.org/occurrence/3801857299		Contra Costa, California, US
Melissodes appressus	33.95333	-117.39528		1925-09-22		Adult					https://www.gbif.org/occurrence/3801853278		Riverside, California, US
Melissodes appressus			G.E. Bohart	1965-09-22		Adult					https://www.gbif.org/occurrence/3801377263		Socorro, New Mexico, US
Melissodes appressus	39.5634	-122.1146	E. Ordway	1959-08-25		Adult					https://www.gbif.org/occurrence/3801341281		Tehama, California, US
Melissodes appressus	33.95333	-117.39528		1927-10-13		Adult	Male				https://www.gbif.org/occurrence/3801340270		Riverside, California, US
Melissodes appressus	39.5634	-122.1146	E. Ordway	1959-08-25		Adult					https://www.gbif.org/occurrence/3801339286		Tehama, California, US
Melissodes appressus	32.268333	-107.466389	R. W. Rust, P. Torchio, G. Wood & N. Yousef				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804701188		Luna Co., New Mexico, US
Melissodes appressus	33.612778	-106.948889	G. E. Bohart				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804698204		Socorro Co., New Mexico, US
Melissodes appressus											https://www.gbif.org/occurrence/2238758982		
Melissodes appressus	38.545	-121.7394	Bechtel, R	1950-08-20	LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931721		Yolo, California, US
Melissodes appressus	33.9533	-117.3953	McKenzie, H	1933-10-17	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931706		Riverside, California, US
Melissodes appressus											https://www.gbif.org/occurrence/1317419356		
Melissodes appressus			Timberlake, P	1927-10-09	LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837963		Riverside, California, US
Melissodes appressus			Timberlake, P	1931-09-20	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837952		Riverside, California, US
Melissodes appressus			Timberlake, P	1927-09-18	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837946		Riverside, California, US
Melissodes appressus			Timberlake, P	1926-10-19	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837938		Riverside, California, US
Melissodes appressus			Timberlake, P	1926-09-14	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837934		Riverside, California, US
Melissodes appressus			Timberlake, P	1925-09-09	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837930		Santa Clara, California, US
Melissodes appressus			Timberlake, P	1932-09-01	LaBerge, Walley	Adult		illegible data	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837926		US
Melissodes appressus			Timberlake, P	1924-05-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837916		Riverside, California, US
Melissodes appressus			Timberlake, P	1926-07-29	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837895		Riverside, California, US
Melissodes appressus			Timberlake, P		LaBerge, Walley	Adult		illegible data	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837891		US
Melissodes appressus	36.31571	-118.0253	P. D. Hurd	1956-09-09		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1061041835		Inyo County, California, US
Melissodes appressus	37.98206	-121.79463	P. D. Hurd	1954-09-22		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1061041778		Contra Costa County, California, US
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
