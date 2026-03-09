// =========================
// Melissodes lupinus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_lupinus"; // Your species-specific placeholder
const MAP_ID = "oregon_lupinus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes lupinus	43.65	-117.06	P.F. Torchio	1961-07-27							https://www.gbif.org/occurrence/658944593		Malheur, Oregon, US
Melissodes lupinus	42.3787	-122.2123	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944590		Klamath, Oregon, US
Melissodes lupinus	42.3787	-122.2123	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944589		Klamath, Oregon, US
Melissodes lupinus	42.404	-120.2912	P.F. Torchio	1959-08-06							https://www.gbif.org/occurrence/658944587		Klamath, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658944538		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658944537		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658944536		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658944535		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-09-21							https://www.gbif.org/occurrence/658944534		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-09-07							https://www.gbif.org/occurrence/658944533		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-09-07							https://www.gbif.org/occurrence/658944532		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-31							https://www.gbif.org/occurrence/658944531		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-31							https://www.gbif.org/occurrence/658944530		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-17							https://www.gbif.org/occurrence/658944529		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-17							https://www.gbif.org/occurrence/658944528		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-17							https://www.gbif.org/occurrence/658944527		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-04							https://www.gbif.org/occurrence/658944526		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-04							https://www.gbif.org/occurrence/658944525		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-04							https://www.gbif.org/occurrence/658944524		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-10							https://www.gbif.org/occurrence/658944523		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	V.J. Tepedino	1997-08-10							https://www.gbif.org/occurrence/658944522		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944456		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944455		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944454		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944453		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944452		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944451		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944450		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944449		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944448		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944447		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944446		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944445		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944444		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944443		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944442		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944441		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-06-23							https://www.gbif.org/occurrence/658944440		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-06-23							https://www.gbif.org/occurrence/658944439		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658944438		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658944437		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658944436		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658944435		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658944434		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658944433		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658944432		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-28							https://www.gbif.org/occurrence/658944431		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-21							https://www.gbif.org/occurrence/658944430		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-14							https://www.gbif.org/occurrence/658944429		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-07-14							https://www.gbif.org/occurrence/658944428		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944427		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944426		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944425		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944424		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944423		Umatilla, Oregon, US
Melissodes lupinus	45.639	-118.6849	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944422		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944421		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944420		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944419		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944418		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-05-26							https://www.gbif.org/occurrence/658944417		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-05-17							https://www.gbif.org/occurrence/658944416		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-06-23							https://www.gbif.org/occurrence/658944415		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-06-23							https://www.gbif.org/occurrence/658944414		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-06-23							https://www.gbif.org/occurrence/658944413		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658944412		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658944411		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-06-16							https://www.gbif.org/occurrence/658944410		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-07-21							https://www.gbif.org/occurrence/658944409		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-07-14							https://www.gbif.org/occurrence/658944408		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-07-14							https://www.gbif.org/occurrence/658944407		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-07-14							https://www.gbif.org/occurrence/658944406		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944405		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944404		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944403		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944402		Umatilla, Oregon, US
Melissodes lupinus	45.6704	-118.6836	J.E. Harrison	1998-08-04							https://www.gbif.org/occurrence/658944401		Umatilla, Oregon, US
Melissodes lupinus	44.35127	-117.26656	G.A. Hackwell	1959-07-15							https://www.gbif.org/occurrence/658944399		Baker, Oregon, US
Melissodes lupinus	44.46697	-123.50376	R.K. Eppley	1956-07-24							https://www.gbif.org/occurrence/658944357		Benton, Oregon, US
Melissodes lupinus	44.46697	-123.50376	R.K. Eppley	1956-07-24							https://www.gbif.org/occurrence/658944356		Benton, Oregon, US
Melissodes lupinus	44.46697	-123.50376	R.K. Eppley	1956-07-24							https://www.gbif.org/occurrence/658944355		Benton, Oregon, US
Melissodes lupinus	44.46697	-123.50376	R.K. Eppley	1956-07-24							https://www.gbif.org/occurrence/658944354		Benton, Oregon, US
Melissodes lupinus	44.925	-123.071	Briana Lindh	2019-07-24	Briana C Lindh	Adult					https://www.gbif.org/occurrence/4913112320		Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-12		Adult					https://www.gbif.org/occurrence/3801942139		Malheur, Oregon, US
Melissodes lupinus	42.37889	-122.21111	P.F. Torchio	1959-08-06		Adult					https://www.gbif.org/occurrence/3801940616		Klamath, Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-12		Adult					https://www.gbif.org/occurrence/3801939623		Malheur, Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-12		Adult					https://www.gbif.org/occurrence/3801938649		Malheur, Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-12		Adult					https://www.gbif.org/occurrence/3801936642		Malheur, Oregon, US
Melissodes lupinus	43.98222	-117.23722	W.P. Stephen	1954-08-10		Adult					https://www.gbif.org/occurrence/3801936638		Malheur, Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-12		Adult					https://www.gbif.org/occurrence/3801854641		Malheur, Oregon, US
Melissodes lupinus	42.118	-122.366	J. Schuh	1957-08-09		Adult					https://www.gbif.org/occurrence/3801853131		Jackson, Oregon, US
Melissodes lupinus	42.3563	-122.4083	L.L. Dunning	1967-09-18		Adult					https://www.gbif.org/occurrence/3801381165		Jackson, Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-12		Adult					https://www.gbif.org/occurrence/3801380669		Malheur, Oregon, US
Melissodes lupinus	43.3886	-117.4247	R.B. Roberts	1968-07-10		Adult					https://www.gbif.org/occurrence/3801377126		Malheur, Oregon, US
Melissodes lupinus	43.3886	-117.4247	R.B. Roberts	1968-07-10		Adult					https://www.gbif.org/occurrence/3801376133		Malheur, Oregon, US
Melissodes lupinus	43.3886	-117.4247	R.B. Roberts	1968-07-10		Adult					https://www.gbif.org/occurrence/3801339147		Malheur, Oregon, US
Melissodes lupinus	42.2633	-122.5789	R.W. Thorp	1967-09-18		Adult					https://www.gbif.org/occurrence/3801339143		Jackson, Oregon, US
Melissodes lupinus	43.3886	-117.4247	R.B. Roberts	1968-07-10		Adult					https://www.gbif.org/occurrence/3801338144		Malheur, Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-30		Adult					https://www.gbif.org/occurrence/3801337640		Malheur, Oregon, US
Melissodes lupinus	44.027	-116.963	R.B. Roberts	1968-08-12		Adult					https://www.gbif.org/occurrence/3801336650		Malheur, Oregon, US
Melissodes lupinus	45	-123	Patti Wittrup	2019-08-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822969		Benton, Oregon, US
Melissodes lupinus	45	-123	Rich Wittrup	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822810		Marion, Oregon, US
Melissodes lupinus	45	-123	Rich Wittrup	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822809		Marion, Oregon, US
Melissodes lupinus	45	-123	Rich Wittrup	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822808		Marion, Oregon, US
Melissodes lupinus	45	-123	Rich Wittrup	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822804		Marion, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821935		Benton, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821933		Benton, Oregon, US
Melissodes lupinus	42	-123	Judith Maxwell	2019-07-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821820		Josephine, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821205		Benton, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821203		Benton, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821202		Benton, Oregon, US
Melissodes lupinus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821198		Josephine, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821180		Benton, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-07-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821178		Benton, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821177		Benton, Oregon, US
Melissodes lupinus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821170		Josephine, Oregon, US
Melissodes lupinus	45	-123	Cynthia Middlebrooks	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821090		Linn, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-06-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499821071		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-06-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499821070		Yamhill, Oregon, US
Melissodes lupinus	42	-120	Gretchen Pederson	2019-09-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499820992		Lake, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499820635		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499820624		Benton, Oregon, US
Melissodes lupinus	42	-120	Gretchen Pederson	2019-09-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499820460		Lake, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819801		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819799		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819796		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819795		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819792		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819791		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819778		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-24	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819611		Lane, Oregon, US
Melissodes lupinus	45	-123	Dan O'Loughlin	2019-06-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819514		Yamhill, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819406		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819402		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819378		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819376		Lane, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818978		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-11	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818778		Benton, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818774		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818768		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-11	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818756		Benton, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818714		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818712		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818710		Benton, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818709		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818703		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818702		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818687		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818685		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818684		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818680		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818679		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818676		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818675		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818674		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818673		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818672		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818659		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818654		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818643		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818639		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818638		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818627		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818624		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818621		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818619		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818617		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818616		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818614		Benton, Oregon, US
Melissodes lupinus	45	-123	Tom Robertson	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818501		Polk, Oregon, US
Melissodes lupinus	45	-123	Tom Robertson	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818499		Polk, Oregon, US
Melissodes lupinus	45	-123	Tom Robertson	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818481		Marion, Oregon, US
Melissodes lupinus	45	-123	Tom Robertson	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818462		Marion, Oregon, US
Melissodes lupinus	45	-123	Tom Robertson	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818458		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817640		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817601		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817589		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817511		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817507		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817495		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817464		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817454		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817451		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817383		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817376		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817375		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817342		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817339		Marion, Oregon, US
Melissodes lupinus	45	-123	Tom Robertson	2019-08-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817328		Marion, Oregon, US
Melissodes lupinus	45	-123	Tom Robertson	2019-08-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817327		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817100		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817070		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817052		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817049		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817044		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817043		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817007		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817001		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816998		Marion, Oregon, US
Melissodes lupinus	45	-123	Carol Horning	2019-07-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499816995		Marion, Oregon, US
Melissodes lupinus	42	-122	Steve Sheehy; Sarah Malaby	2019-07-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816876		Klamath, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-28	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815535		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815415		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-28	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815321		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-28	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815320		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815319		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815318		Benton, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-02	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815106		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-02	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814891		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-02	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814888		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-02	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814887		Lane, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814498		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814496		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814485		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814483		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814482		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814481		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814480		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814477		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-07-31	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812620		Benton, Oregon, US
Melissodes lupinus	42	-120	Robert Pederson	2019-09-12	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812288		Lake, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812043		Benton, Oregon, US
Melissodes lupinus	42	-123	Paul Moschetti	2019-06-28	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499811930		Josephine, Oregon, US
Melissodes lupinus	45	-123	Steve Walters	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499811556		Benton, Oregon, US
Melissodes lupinus	45	-123	Steve Walters	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499811551		Benton, Oregon, US
Melissodes lupinus	45	-123	Steve Walters	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499811550		Benton, Oregon, US
Melissodes lupinus	45	-123	Mary Jo Mosby	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811262		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Mary Jo Mosby	2019-06-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499811247		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Tom Canales	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499810761		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Tom Canales	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499810750		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Tom Canales	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499810732		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Tom Canales	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499810730		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Tom Canales	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499810728		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Roberta Packard	2019-07-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810234		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Roberta Packard	2019-07-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810233		Yamhill, Oregon, US
Melissodes lupinus	44	-123	Karen Richards	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810224		Lane, Oregon, US
Melissodes lupinus	44	-123	Karen Richards	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810223		Lane, Oregon, US
Melissodes lupinus	44	-123	Karen Richards	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810222		Lane, Oregon, US
Melissodes lupinus	44	-123	Karen Richards	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810221		Lane, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499810021		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-08-03	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499810015		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809993		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809970		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809969		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809965		Yamhill, Oregon, US
Melissodes lupinus	46	-123	Francis Opila	2019-07-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809951		Washington, Oregon, US
Melissodes lupinus	45	-123	Jeanie Taylor	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809507		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Jeanie Taylor	2019-07-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809503		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Jeanie Taylor	2019-07-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809501		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Jeanie Taylor	2019-07-20	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809500		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499808949		Benton, Oregon, US
Melissodes lupinus	45	-123	Tom Canales	2019-08-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499808921		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Pat Wheeler	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499808506		Benton, Oregon, US
Melissodes lupinus	43	-119	Ellen Watrous	2019-08-24	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807809		Harney, Oregon, US
Melissodes lupinus	43	-119	Ellen Watrous	2019-08-23	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807777		Harney, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806742		Washington, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806740		Washington, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806738		Washington, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806728		Washington, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806727		Washington, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806724		Washington, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806614		Washington, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806592		Washington, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-06-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806412		Benton, Oregon, US
Melissodes lupinus	45	-123	Michael O'Loughlin	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806123		Yamhill, Oregon, US
Melissodes lupinus	43	-124	Maarten Van Otterloo	2019-07-27	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805831		Curry, Oregon, US
Melissodes lupinus	42	-124	Maarten Van Otterloo	2019-07-17	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805789		Curry, Oregon, US
Melissodes lupinus	45	-123	Pat Wheeler	2019-07-17	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499805419		Benton, Oregon, US
Melissodes lupinus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805255		Josephine, Oregon, US
Melissodes lupinus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805252		Josephine, Oregon, US
Melissodes lupinus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805249		Josephine, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805096		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805075		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805072		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805062		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805059		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805058		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805056		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805026		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499805025		Benton, Oregon, US
Melissodes lupinus	45	-123	Ellen Watrous	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499805024		Benton, Oregon, US
Melissodes lupinus	45	-123	Pat Wheeler	2019-07-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804911		Benton, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804758		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804751		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804729		Polk, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804725		Polk, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804722		Polk, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804697		Polk, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804696		Polk, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804685		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804673		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804670		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804668		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804667		Marion, Oregon, US
Melissodes lupinus	46	-123	Molly Hayes	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804465		Washington, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804162		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804057		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804051		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804039		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804011		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804010		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804007		Marion, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804004		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-08-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803709		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-08-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803703		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-08-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803684		Marion, Oregon, US
Melissodes lupinus	42	-123	Judith Maxwell	2019-07-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803630		Josephine, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803505		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803502		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803500		Marion, Oregon, US
Melissodes lupinus	45	-123	Julie Biddle	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803496		Marion, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803358		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499803352		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803350		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803343		Lane, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803312		Lane, Oregon, US
Melissodes lupinus	45	-123	Roberta Packard	2019-07-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802753		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Roberta Packard	2019-07-31	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802747		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Roberta Packard	2019-07-14	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802744		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Roberta Packard	2019-07-14	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802741		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802685		Benton, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802681		Benton, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-07-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802574		Benton, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802506		Benton, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802501		Benton, Oregon, US
Melissodes lupinus	46	-123	Rachel Phariss	2019-08-10	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802384		Washington, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-07-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802339		Benton, Oregon, US
Melissodes lupinus	45	-123	Jeanie Taylor	2019-07-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802106		Yamhill, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-06-23	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802067		Benton, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-06-23	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802060		Benton, Oregon, US
Melissodes lupinus	45	-123	Maureen Beezhold	2019-06-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499801988		Benton, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499801892		Lane, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-08-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499801394		Benton, Oregon, US
Melissodes lupinus	42	-123	Sayaka Lean	2019-07-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467770112		Josephine, Oregon, US
Melissodes lupinus	42	-120	Robert Pederson	2019-09-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467770009		Lake, Oregon, US
Melissodes lupinus	45	-124	Martin Stein	2019-09-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467770008		Lincoln, Oregon, US
Melissodes lupinus	43	-117	Ellen Watrous	2019-07-07	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769993		Malheur, Oregon, US
Melissodes lupinus	42	-120	Robert Pederson	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769987		Lake, Oregon, US
Melissodes lupinus	44	-121	Lisa Sanco	2019-09-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769984		Deschutes, Oregon, US
Melissodes lupinus	46	-123	Martha Richards	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769980		Washington, Oregon, US
Melissodes lupinus	44	-119	Mark Gorman	2019-07-18	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769978		Grant, Oregon, US
Melissodes lupinus	45	-123	Pat Wheeler	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769972		Benton, Oregon, US
Melissodes lupinus	44	-123	Lori Humphreys	2019-07-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769966		Lane, Oregon, US
Melissodes lupinus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769960		Josephine, Oregon, US
Melissodes lupinus	43	-119	Ellen Watrous	2019-08-24	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769958		Harney, Oregon, US
Melissodes lupinus	43	-117	Ellen Watrous	2019-07-06	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769957		Malheur, Oregon, US
Melissodes lupinus	45	-123	Stephanie Hazen	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769954		Marion, Oregon, US
Melissodes lupinus	46	-123	Michael O'Loughlin	2019-06-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769953		Washington, Oregon, US
Melissodes lupinus	45	-123	Dan O'Loughlin	2019-07-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769952		Linn, Oregon, US
Melissodes lupinus	45	-123	Pat Wheeler	2019-08-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769950		Polk, Oregon, US
Melissodes lupinus	45	-123	Dan O'Loughlin	2019-06-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769948		Yamhill, Oregon, US
Melissodes lupinus	43	-124	Maarten Van Otterloo	2019-07-27	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769861		Curry, Oregon, US
Melissodes lupinus	46	-123	Jessica Hird	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769852		Columbia, Oregon, US
Melissodes lupinus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769847		Crook, Oregon, US
Melissodes lupinus	45	-123	Jerry Paul	2019-07-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769846		Benton, Oregon, US
Melissodes lupinus	44.812	-117.727	J. Rebholz	2011-07-20	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421542238		Baker, Oregon, US
Melissodes lupinus	44.812	-117.727	J. Rebholz	2011-08-05	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421537773		Baker, Oregon, US
Melissodes lupinus	42.341667	-121.803333	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804763320		Klamath Co., Oregon, US
Melissodes lupinus	42.444722	-121.868333	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804624308		Klamath Co., Oregon, US
Melissodes lupinus	42.3267	-122.8744	McClay, A	1950-09-05	LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899932035		Jackson, Oregon, US
Melissodes lupinus	42.7383	-122.4958	Brooks, Robert	1982-06-24	Wright, Karen	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899932034		Jackson, Oregon, US
Melissodes lupinus	42.7383	-122.4958	Brooks, Robert	1982-06-24	Wright, Karen	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931995		Jackson, Oregon, US
Melissodes lupinus	42.7383	-122.4958	Brooks, Robert	1982-06-24	Wright, Karen	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931994		Jackson, Oregon, US
Melissodes lupinus	42.7383	-122.4958	Brooks, Robert	1982-06-24	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931976		Jackson, Oregon, US
Melissodes lupinus	45.5333	-117.9667	Shivelbine, B	2003-07-02	Michener, Charles	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1502553713		Union, Oregon, US
Melissodes lupinus			Scullen, H	1929-08-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837041		Grant, Oregon, US
Melissodes lupinus	44.5647	-123.2608	Wilbur, D	1925-07-22		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837040		Benton, Oregon, US
Melissodes lupinus			Scullen, H	1929-08-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837027		Grant, Oregon, US
Melissodes lupinus			Scullen, H	1929-08-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837007		Grant, Oregon, US
Melissodes lupinus			Scullen, H	1926-08-19		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837004		Oregon, US
Melissodes lupinus			Scullen, H	1926-08-10		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836973		Lane, Oregon, US
Melissodes lupinus	42.3267	-122.8744	McClay, A	1953-09-07		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836971		Jackson, Oregon, US
Melissodes lupinus	42.3267	-122.8744	McClay, A	1953-09-11		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836950		Jackson, Oregon, US
Melissodes lupinus			Fox, C	1924-06-08		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836861		Klamath, Oregon, US
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
