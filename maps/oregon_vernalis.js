// =========================
// Melissodes vernalis Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_vernalis"; // Your species-specific placeholder
const MAP_ID = "oregon_vernalis";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes vernalis	46.3368	-120.4806	Courtney Grula	2014-06-04	Karen W. Wright	Adult	Female		http://creativecommons.org/licenses/by-nc/4.0/legalcode		https://www.gbif.org/occurrence/5141281258		Yakima, Washington, US
Melissodes vernalis	31.34	-109.295556	A Payne; HG Hall, JG Rozen	2012-05-05	KW Wright		Female		http://creativecommons.org/licenses/by-nc/4.0/legalcode	University of New Mexico	https://www.gbif.org/occurrence/5918276348		Cochise, Arizona, US
Melissodes vernalis	41.8704	-110.7772	Philip Knecht|Cecile Bossi	2012-07	Karen Wright		Male	10 fl yl;10 fl bl;10 white;out of 30 bowls, lost 0	http://creativecommons.org/publicdomain/zero/1.0/legalcode		https://www.gbif.org/occurrence/1456725510		Lincoln, Wyoming, US
Melissodes vernalis	37.2033	-112.9876	Cheryl Decker	2011-06-23	Karen Wright		Female	10fl yl;10fl bl;10 white	http://creativecommons.org/publicdomain/zero/1.0/legalcode		https://www.gbif.org/occurrence/1456650310		Utah, US
Melissodes vernalis	37.6053	-112.1871	Joseph Flower	2011-08	Karen Wright		Male	10 fl yl 10 flbl 10 white	http://creativecommons.org/publicdomain/zero/1.0/legalcode		https://www.gbif.org/occurrence/1456717815		Garfield, Utah, US
Melissodes vernalis	37.6425	-112.1623	Joseph Flower	2011-08	Karen Wright		Male	10 flyl 10 flbl 10 white	http://creativecommons.org/publicdomain/zero/1.0/legalcode		https://www.gbif.org/occurrence/1456718872		Garfield, Utah, US
Melissodes vernalis			PF Torchio	2005-05-14	KW Wright		Female		http://creativecommons.org/licenses/by-nc/4.0/legalcode	University of New Mexico	https://www.gbif.org/occurrence/5918276346		Luna, New Mexico, US
Melissodes vernalis	36.4091	-114.5494	M. Andres	1998-05-21	R. Andrus 1999				http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952154		Clark, Nevada, US
Melissodes vernalis	36.4091	-114.5494	M. Andres	1998-05-21	R. Andrus 1999				http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952155		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952151		Clark, Nevada, US
Melissodes vernalis	37	-115	M. Andres	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952152		Clark, Nevada, US
Melissodes vernalis	37	-115	M. Andres	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952153		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, K. Keen	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952156		Clark, Nevada, US
Melissodes vernalis	37	-115	M. Andres, K. Keen	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952157		Clark, Nevada, US
Melissodes vernalis	37	-115	M. Andres, K. Keen	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952158		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, K. Keen, K. Receveur	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952159		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, K. Keen, K. Receveur	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952160		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952161		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952162		Clark, Nevada, US
Melissodes vernalis	35	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952163		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952164		Clark, Nevada, US
Melissodes vernalis	37	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952165		Clark, Nevada, US
Melissodes vernalis	37	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952166		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952167		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952168		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952169		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952170		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952171		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952172		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952173		Clark, Nevada, US
Melissodes vernalis	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952174		Clark, Nevada, US
Melissodes vernalis	37	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952175		Clark, Nevada, US
Melissodes vernalis	35	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952176		Clark, Nevada, US
Melissodes vernalis	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952177		Clark, Nevada, US
Melissodes vernalis	37	-116	M. Andres, K. Receveur	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952178		Clark, Nevada, US
Melissodes vernalis	35	-115	M. Andres, K. Receveur	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952179		Clark, Nevada, US
Melissodes vernalis	35	-115	M. Andres, K. Receveur	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952180		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952181		Clark, Nevada, US
Melissodes vernalis	36	-115	M. Andres, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952182		Clark, Nevada, US
Melissodes vernalis	36	-114	M. Andres, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952183		Clark, Nevada, US
Melissodes vernalis	37	-114	M. Andres, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952184		Clark, Nevada, US
Melissodes vernalis	37	-114	M. Andres, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952185		Clark, Nevada, US
Melissodes vernalis	37	-114	M. Andres, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952186		Clark, Nevada, US
Melissodes vernalis	37	-114	M. Andres, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952187		Clark, Nevada, US
Melissodes vernalis	37	-115	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952194		Clark, Nevada, US
Melissodes vernalis	37	-115	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952195		Clark, Nevada, US
Melissodes vernalis	36	-115	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952196		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952197		Clark, Nevada, US
Melissodes vernalis	36	-115	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952198		Clark, Nevada, US
Melissodes vernalis	36	-115	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952199		Clark, Nevada, US
Melissodes vernalis	36	-115	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952200		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952201		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952202		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952203		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952204		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952205		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952206		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952207		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952208		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952209		Clark, Nevada, US
Melissodes vernalis	36	-116	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952210		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952211		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952212		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952213		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952214		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952215		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952216		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952217		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952218		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952219		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952220		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952221		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952222		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952223		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952224		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952225		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952226		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952227		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952228		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952229		Clark, Nevada, US
Melissodes vernalis	37	-114	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952230		Clark, Nevada, US
Melissodes vernalis	36	-115	T.L. Griswold	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952231		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold, F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952232		Clark, Nevada, US
Melissodes vernalis	36	-114	T.L. Griswold, F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952233		Clark, Nevada, US
Melissodes vernalis	37	-114	K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952234		Clark, Nevada, US
Melissodes vernalis	37	-114	K. Keen, K. Receveur, C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952235		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952241		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952242		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952243		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952244		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952245		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952246		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952247		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952248		Clark, Nevada, US
Melissodes vernalis	36	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952249		Clark, Nevada, US
Melissodes vernalis	36	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952250		Clark, Nevada, US
Melissodes vernalis	36	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952251		Clark, Nevada, US
Melissodes vernalis	36	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952252		Clark, Nevada, US
Melissodes vernalis	36	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952253		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952255		Clark, Nevada, US
Melissodes vernalis	36	-115	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952256		Clark, Nevada, US
Melissodes vernalis	37	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952257		Clark, Nevada, US
Melissodes vernalis	37	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952258		Clark, Nevada, US
Melissodes vernalis	37	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952259		Clark, Nevada, US
Melissodes vernalis	37	-114	F.D. Parker	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952260		Clark, Nevada, US
Melissodes vernalis	36	-115	K. Receveur	1998	T.L. Griswold 1999				http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952262		Clark, Nevada, US
Melissodes vernalis	36	-114	C. Schultz	1998					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952263		Clark, Nevada, US
Melissodes vernalis	36.7354	-114.29983	F.D. Parker	1997-05-01					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952254		Clark, Nevada, US
Melissodes vernalis	36.7354	-114.29983	F.D. Parker	1997-05-01	R. Andrus 1999				http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952261		Clark, Nevada, US
Melissodes vernalis	36	-114	F.D. & J.H. Parker, V.J. Tepedino	1997					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952237		Clark, Nevada, US
Melissodes vernalis	36	-114	F.D. & J.H. Parker, V.J. Tepedino	1997					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952238		Clark, Nevada, US
Melissodes vernalis	37	-115	F.D. & J.H. Parker, V.J. Tepedino	1997					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952239		Clark, Nevada, US
Melissodes vernalis	37	-115	F.D. & J.H. Parker, V.J. Tepedino	1997					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952240		Clark, Nevada, US
Melissodes vernalis	33.9533	-117.3953	Yoshimoto, C	1982-10-08	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918130		Riverside, California, US
Melissodes vernalis	33.9533	-117.3953	Yoshimoto, C	1982-10-08	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918133		Riverside, California, US
Melissodes vernalis	33.9533	-117.3953	Yoshimoto, C	1982-10-08	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918137		Riverside, California, US
Melissodes vernalis	33.9533	-117.3953	Yoshimoto, C	1982-10-08	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918149		Riverside, California, US
Melissodes vernalis	33.9533	-117.3953	Yoshimoto, C	1982-10-08	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918152		Riverside, California, US
Melissodes vernalis	33.9533	-117.3953	Yoshimoto, C	1982-10-08	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918174		Riverside, California, US
Melissodes vernalis	33.033	-116.801	A.R. Moldenke	1972-06-28		Adult		San Diego County	http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/3801940915		San Diego, California, US
Melissodes vernalis	37.25	-113.36	G.E. Bohart	1961-05-09					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952264		Washington, Utah, US
Melissodes vernalis	33.76224	-116.53696	Hall, J	1959-04-24	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918158		Riverside, California, US
Melissodes vernalis	32.72	-114.62	R.M. Bohart	1959-05-06					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952191		Yuma, Arizona, US
Melissodes vernalis	33.76224	-116.53696	Hall, J	1959-05-04	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1913918171		Riverside, California, US
Melissodes vernalis	33.0097	-116.4558	Marsh, G	1952-04-26	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657644977		San Diego, California, US
Melissodes vernalis	39.5297	-119.2692	Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-12	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657646629		Washoe, Nevada, US
Melissodes vernalis	39.5297	-119.2692	Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-12	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658197060		Washoe, Nevada, US
Melissodes vernalis	34.905	-116.8194	Linsley, MacSwain, Smith	1949-04-28	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658253864		San Bernardino, California, US
Melissodes vernalis	33.832	-116.5453		1945-05-24					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952265		Riverside, California, US
Melissodes vernalis			Timberlake, P	1944-05-11	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657757983		California, US
Melissodes vernalis	36.2772	-115.2632	Timberlake, P	1941-02-03	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657737282		Clark, Nevada, US
Melissodes vernalis	36.2772	-115.2632	Timberlake, P	1941-02-03	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658137753		Clark, Nevada, US
Melissodes vernalis	36.2947	-115.4444	VanDyke, E	1941-06-04	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658277471		Clark, Nevada, US
Melissodes vernalis			E.G. Linsley	1941-06-07					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952236		Nevada, US
Melissodes vernalis	33.76224	-116.5369	R.M. Bohart	1940-04-07					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952192		Riverside, California, US
Melissodes vernalis	33.832	-116.5453	R.M. Bohart	1939-04-16					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952190		Riverside, California, US
Melissodes vernalis	33.2211	-116.3333	R.M. Bohart	1939-04-08					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952193		SanDiego, California, US
Melissodes vernalis	32.7253	-114.6236	Bohart, George	1939-05-06	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657784152		Yuma, Arizona, US
Melissodes vernalis	36.16667	-118	R.M. Bohart	1939-06-05					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952188		Inyo, California, US
Melissodes vernalis	36.16667	-118	R.M. Bohart	1939-06-05	W.E. LaBerge 1960				http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952189		Inyo, California, US
Melissodes vernalis	36.1183	-117.0944	VanDyke, E	1937-05-30	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657746089		Inyo, California, US
Melissodes vernalis	36.2681	-117.5908	Michener, Charles	1937-05-30	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657750986		Inyo, California, US
Melissodes vernalis	36.4463	-117.8222	Michener, Charles	1937-05-22	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657764505		Inyo, California, US
Melissodes vernalis	36.2681	-117.5908	VanDyke, E	1937-05-22	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658264580		Inyo, California, US
Melissodes vernalis	36.60611	-118.06194	E.C. VanDyke	1937-05-19		Adult	Male		http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/3801940912		Inyo, California, US
Melissodes vernalis	36.2928	-117.1764	Michener, Charles	1937-06-01	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657648008		Inyo, California, US
Melissodes vernalis	37.30028	-118.15306		1937-06-15	W.E. LaBerge 1960				http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952149		Inyo, California, US
Melissodes vernalis	37.30028	-118.15306		1937-06-15	W.E. LaBerge 1960				http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952150		Inyo, California, US
Melissodes vernalis	36.2928	-117.1764	Michener, Charles	1937-06-01	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1024623134		Inyo, California, US
Melissodes vernalis	36.2928	-117.1764	Michener, Charles	1937-06-01	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/1024623140		Inyo, California, US
Melissodes vernalis	33.7206	-116.3016	Linsley, E	1936-04-09	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658236931		Riverside, California, US
Melissodes vernalis				1935-04-20					http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658952148		Imperial, California, US
Melissodes vernalis	33.8303	-116.5444	Timberlake, P	1933-04-23	LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/657724692		Riverside, California, US
Melissodes vernalis	35.81389	-109.3094	Snow, Francis		LaBerge, Walley	Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/658214557		Coconino, Arizona, US
Melissodes vernalis	36.833611	-118.086389	N. W. Frazier				Female		http://creativecommons.org/licenses/by/4.0/legalcode	American Museum of Natural History	https://www.gbif.org/occurrence/2804760185		Inyo Co., California, US
Melissodes vernalis	37.487722	-117.915639	M. A. Cazier				Female		http://creativecommons.org/licenses/by/4.0/legalcode	American Museum of Natural History	https://www.gbif.org/occurrence/2804768348		Mono Co., California, US
Melissodes vernalis	32.85278	-116.615	A.R. Moldenke			Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/3801338947		San Diego, California, US
Melissodes vernalis	32.85278	-116.615	A.R. Moldenke			Adult			http://creativecommons.org/licenses/by/4.0/legalcode		https://www.gbif.org/occurrence/3801376927		San Diego, California, US
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
