// =========================
// Melissodes microstictus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_microstictus"; // Your species-specific placeholder
const MAP_ID = "oregon_microstictus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes microstictus	42.3789	-122.2111	VanDyke, E	1934-07-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658313107		Klamath, Oregon, US
Melissodes microstictus	45.7044	-121.5069	Nottingham, J	1931-07-17	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658244056		Hood River, Oregon, US
Melissodes microstictus	43.7692	-121.3142	Schuh, Grey	1939-08-08	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657805291		Deschutes, Oregon, US
Melissodes microstictus	45.7044	-121.5069	Nottingham, J	1931-07-17	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657754739		Hood River, Oregon, US
Melissodes microstictus	45.7044	-121.5069	Nottingham, J	1931-07-17	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657629279		Hood River, Oregon, US
Melissodes microstictus	44.931	-123.065	Briana Lindh	2019-06-18	Briana C Lindh	Adult					https://www.gbif.org/occurrence/4916420789		Oregon, US
Melissodes microstictus	44.6343	-123.7347	H.A. Scullen	1964-09-04		Adult					https://www.gbif.org/occurrence/3801852838		Lincoln, Oregon, US
Melissodes microstictus	45.1778	-118.083	P.F. Torchio	1960-07-05		Adult					https://www.gbif.org/occurrence/3801380872		Union, Oregon, US
Melissodes microstictus	44.4316	-120.5615	W.P. Stephen	1954-07-26		Adult					https://www.gbif.org/occurrence/3801376832		Crook, Oregon, US
Melissodes microstictus	44.597	-123.52	H.A. Scullen	1964-07-21		Adult					https://www.gbif.org/occurrence/3801340843		Benton, Oregon, US
Melissodes microstictus	42.4612	-119.6234	R.F. Denno, D.R. Miller	1968-08-03		Adult					https://www.gbif.org/occurrence/3801338843		Lake, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822506		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822502		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822501		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822392		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822381		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-31	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822364		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-31	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499822359		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822211		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822207		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822202		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822201		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822136		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-20	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499822135		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-06-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499821837		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-05	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821832		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-03	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499821801		Josephine, Oregon, US
Melissodes microstictus	42	-123	Phylis McIntosh	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821077		Jackson, Oregon, US
Melissodes microstictus	42	-123	Phylis McIntosh	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499821074		Jackson, Oregon, US
Melissodes microstictus	42	-123	Phylis McIntosh	2019-08-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499820959		Josephine, Oregon, US
Melissodes microstictus	43	-123	Phylis McIntosh	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499820734		Jackson, Oregon, US
Melissodes microstictus	43	-123	Phylis McIntosh	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499820731		Jackson, Oregon, US
Melissodes microstictus	43	-123	Phylis McIntosh	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499820730		Jackson, Oregon, US
Melissodes microstictus	43	-123	Phylis McIntosh	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499820728		Jackson, Oregon, US
Melissodes microstictus	42	-123	Phylis McIntosh	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499820707		Josephine, Oregon, US
Melissodes microstictus	42	-123	Phylis McIntosh	2019-07-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499820700		Josephine, Oregon, US
Melissodes microstictus	46	-123	Jessica Hird	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819913		Columbia, Oregon, US
Melissodes microstictus	46	-123	Jessica Hird	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499819809		Columbia, Oregon, US
Melissodes microstictus	46	-123	Natalie Lozano	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499819593		Multnomah, Oregon, US
Melissodes microstictus	44	-122	Ellen Watrous	2019-08-09	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818841		Lane, Oregon, US
Melissodes microstictus	44	-122	Ellen Watrous	2019-08-09	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818840		Lane, Oregon, US
Melissodes microstictus	44	-122	Ellen Watrous	2019-08-09	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818835		Lane, Oregon, US
Melissodes microstictus	44	-122	Ellen Watrous	2019-08-09	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499818834		Lane, Oregon, US
Melissodes microstictus	45	-123	Michael O'Loughlin	2019-07-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818653		Yamhill, Oregon, US
Melissodes microstictus	45	-123	Michael O'Loughlin	2019-07-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818620		Yamhill, Oregon, US
Melissodes microstictus	45	-124	Martin Stein	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818303		Lincoln, Oregon, US
Melissodes microstictus	45	-124	Martin Stein	2019-08-04	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818302		Lincoln, Oregon, US
Melissodes microstictus	45	-124	Martin Stein	2019-07-07	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499818073		Lincoln, Oregon, US
Melissodes microstictus	46	-122	Pam Arion	2019-08-06	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817843		Multnomah, Oregon, US
Melissodes microstictus	46	-122	Pam Arion	2019-08-06	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817841		Multnomah, Oregon, US
Melissodes microstictus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817643		Marion, Oregon, US
Melissodes microstictus	45	-123	Carol Horning	2019-08-03	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499817514		Marion, Oregon, US
Melissodes microstictus	45	-123	Carol Horning	2019-07-26	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817421		Marion, Oregon, US
Melissodes microstictus	45	-123	Carol Horning	2019-07-26	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499817418		Marion, Oregon, US
Melissodes microstictus	45	-123	Laure Bordelon	2019-07-28	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816383		Marion, Oregon, US
Melissodes microstictus	42	-122	Steve Sheehy; Sarah Malaby	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499816092		Klamath, Oregon, US
Melissodes microstictus	43	-121	Steve Sheehy; Sarah Malaby	2019-07-31	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815952		Klamath, Oregon, US
Melissodes microstictus	43	-123	Steve Sheehy; Sarah Malaby	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815826		Klamath, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815497		Deschutes, Oregon, US
Melissodes microstictus	44	-121	Gretchen Pederson	2019-07-19	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815490		Deschutes, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815060		Josephine, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815033		Jackson, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815024		Jackson, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815023		Jackson, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815022		Jackson, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815021		Jackson, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499815018		Jackson, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499815012		Jackson, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814617		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814611		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814610		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814609		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814588		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814585		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814582		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814580		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814577		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814573		Crook, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814570		Crook, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814515		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814511		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814510		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814195		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814194		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499814190		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499814108		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813975		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813967		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813966		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813965		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813963		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499813959		Deschutes, Oregon, US
Melissodes microstictus	45	-119	Shannon Mayfield	2019-08-14	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812771		Umatilla, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812409		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812407		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812406		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499812352		Josephine, Oregon, US
Melissodes microstictus	44	-122	Robert Pederson	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811623		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Robert Pederson	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811621		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Robert Pederson	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811620		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Robert Pederson	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811618		Deschutes, Oregon, US
Melissodes microstictus	44	-121	Lisa Sanco	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499811419		Deschutes, Oregon, US
Melissodes microstictus	46	-123	Mark Gorman	2019-06-26	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499811151		Washington, Oregon, US
Melissodes microstictus	46	-122	Robert Pederson	2019-08-28	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809750		Hood River, Oregon, US
Melissodes microstictus	46	-123	Martha Richards	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809573		Multnomah, Oregon, US
Melissodes microstictus	44	-121	Robert Pederson	2019-08-22	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809492		Deschutes, Oregon, US
Melissodes microstictus	46	-122	Gretchen Pederson	2019-08-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809426		Hood River, Oregon, US
Melissodes microstictus	45	-122	Robert Pederson	2019-08-27	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499809416		Hood River, Oregon, US
Melissodes microstictus	44	-121	Rocky Bessette	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809085		Deschutes, Oregon, US
Melissodes microstictus	44	-121	Rocky Bessette	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499809068		Deschutes, Oregon, US
Melissodes microstictus	45	-124	Martin Stein	2019-08-18	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499808355		Lincoln, Oregon, US
Melissodes microstictus	44	-118	Lori Humphreys	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499808265		Grant, Oregon, US
Melissodes microstictus	44	-118	Lori Humphreys	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499808264		Grant, Oregon, US
Melissodes microstictus	44	-118	Lori Humphreys	2019-08-01	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499808261		Grant, Oregon, US
Melissodes microstictus	43	-123	Randy Costello	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499808226		Jackson, Oregon, US
Melissodes microstictus	43	-122	Lori Humphreys	2019-08-11	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499808161		Douglas, Oregon, US
Melissodes microstictus	45	-119	Sarah Gardner	2019-08-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499807472		Umatilla, Oregon, US
Melissodes microstictus	45	-119	Sarah Gardner	2019-08-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499807471		Umatilla, Oregon, US
Melissodes microstictus	45	-119	Sarah Gardner	2019-08-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499807270		Umatilla, Oregon, US
Melissodes microstictus	43	-122	Lori Humphreys	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499807181		Douglas, Oregon, US
Melissodes microstictus	46	-122	Joe Engler	2019-07-31	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499807157		Multnomah, Oregon, US
Melissodes microstictus	46	-122	Joe Engler	2019-07-31	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499807156		Multnomah, Oregon, US
Melissodes microstictus	43	-122	Lori Humphreys	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499807155		Douglas, Oregon, US
Melissodes microstictus	46	-119	Jane Pope	2019-04-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806971		Umatilla, Oregon, US
Melissodes microstictus	44	-122	Robert Pederson	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806575		Deschutes, Oregon, US
Melissodes microstictus	44	-122	Robert Pederson	2019-08-08	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499806527		Deschutes, Oregon, US
Melissodes microstictus	45	-123	Michael O'Loughlin	2019-06-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806416		Yamhill, Oregon, US
Melissodes microstictus	45	-123	Michael O'Loughlin	2019-06-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806351		Yamhill, Oregon, US
Melissodes microstictus	45	-123	Michael O'Loughlin	2019-06-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806349		Yamhill, Oregon, US
Melissodes microstictus	45	-123	Michael O'Loughlin	2019-06-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806342		Yamhill, Oregon, US
Melissodes microstictus	43	-122	Lori Humphreys	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806340		Douglas, Oregon, US
Melissodes microstictus	44	-120	Robert Pederson	2019-08-16	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499806310		Crook, Oregon, US
Melissodes microstictus	44	-122	Ellen Watrous	2019-08-02	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805328		Linn, Oregon, US
Melissodes microstictus	44	-122	Ellen Watrous	2019-08-02	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499805326		Linn, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499805281		Josephine, Oregon, US
Melissodes microstictus	43	-123	Judith Maxwell	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499805272		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499805264		Josephine, Oregon, US
Melissodes microstictus	45	-123	Julie Biddle	2019-07-30	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804669		Marion, Oregon, US
Melissodes microstictus	43	-123	Heidi Ashworth	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804664		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judi Maxwell	2019-09-25	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804635		Josephine, Oregon, US
Melissodes microstictus	42	-123	Judi Maxwell	2019-09-13	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499804437		Josephine, Oregon, US
Melissodes microstictus	45	-123	Stephanie Hazen	2019-07-25	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804058		Marion, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499804052		Jackson, Oregon, US
Melissodes microstictus	42	-124	Judith Maxwell	2019-08-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803994		Josephine, Oregon, US
Melissodes microstictus	42	-124	Judith Maxwell	2019-08-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803993		Josephine, Oregon, US
Melissodes microstictus	42	-124	Judith Maxwell	2019-08-13	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803990		Josephine, Oregon, US
Melissodes microstictus	43	-124	Judith Maxwell	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803959		Curry, Oregon, US
Melissodes microstictus	46	-123	Max Havlik	2019-07-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803528		Columbia, Oregon, US
Melissodes microstictus	46	-123	Max Havlik	2019-07-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803527		Columbia, Oregon, US
Melissodes microstictus	46	-123	Max Havlik	2019-06-19	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499803129		Columbia, Oregon, US
Melissodes microstictus	46	-123	Max Havlik	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802991		Columbia, Oregon, US
Melissodes microstictus	46	-123	Max Havlik	2019-07-21	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802980		Columbia, Oregon, US
Melissodes microstictus	43	-123	Vetta Steel	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499802979		Josephine, Oregon, US
Melissodes microstictus	46	-123	Max Havlik	2019-07-21	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802976		Columbia, Oregon, US
Melissodes microstictus	44	-121	Lisa Sanco	2019-07-11	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499802397		Deschutes, Oregon, US
Melissodes microstictus	45	-123	Missy Martin	2019-06-10	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499801976		Washington, Oregon, US
Melissodes microstictus	44	-121	Toni Stephan	2019-08-23	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499801640		Deschutes, Oregon, US
Melissodes microstictus	42	-123	Vetta Steel	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3499801589		Jackson, Oregon, US
Melissodes microstictus	42	-123	Vetta Steel	2019-08-29	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3499801560		Jackson, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-07-03	Briana C. Lindh					Oregon State University	https://www.gbif.org/occurrence/3499801468		Josephine, Oregon, US
Melissodes microstictus	46	-123	Martha Richards	2019-07-30	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769894		Multnomah, Oregon, US
Melissodes microstictus	44	-121	Toni Stephan	2019-09-12	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769893		Deschutes, Oregon, US
Melissodes microstictus	43	-122	Lori Humphreys	2019-08-11	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769890		Douglas, Oregon, US
Melissodes microstictus	43	-124	Judith Maxwell	2019-08-08	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769889		Curry, Oregon, US
Melissodes microstictus	43	-123	Vetta Steel	2019-07-15	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769887		Jackson, Oregon, US
Melissodes microstictus	45	-119	Shannon Mayfield	2019-08-14	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769885		Umatilla, Oregon, US
Melissodes microstictus	45	-122	Dan O'Loughlin	2019-07-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769882		Clackamas, Oregon, US
Melissodes microstictus	45	-123	Mark Gorman	2019-08-05	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769876		Washington, Oregon, US
Melissodes microstictus	45	-124	Martin Stein	2019-09-04	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769873		Lincoln, Oregon, US
Melissodes microstictus	46	-122	Robert Pederson	2019-08-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769865		Hood River, Oregon, US
Melissodes microstictus	43	-119	Julie Biddle	2019-08-07	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769863		Harney, Oregon, US
Melissodes microstictus	45	-123	Michael O'Loughlin	2019-06-28	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769860		Yamhill, Oregon, US
Melissodes microstictus	45	-119	Shannon Mayfield	2019-08-14	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769851		Umatilla, Oregon, US
Melissodes microstictus	46	-123	Natalie Lozano	2019-07-21	Briana C. Lindh		Male			Oregon State University	https://www.gbif.org/occurrence/3467769848		Multnomah, Oregon, US
Melissodes microstictus	44	-120	Gretchen Pederson	2019-08-16	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769616		Crook, Oregon, US
Melissodes microstictus	44	-118	Lori Humphreys	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769602		Baker, Oregon, US
Melissodes microstictus	43	-119	Dan O'Loughlin	2019-07-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769598		Harney, Oregon, US
Melissodes microstictus	44	-122	Gretchen Pederson	2019-07-21	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769595		Deschutes, Oregon, US
Melissodes microstictus	43	-122	Lori Humphreys	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769592		Douglas, Oregon, US
Melissodes microstictus	42	-124	Maarten Van Otterloo	2019-09-14	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769591		Curry, Oregon, US
Melissodes microstictus	44	-118	Lori Humphreys	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769590		Grant, Oregon, US
Melissodes microstictus	46	-123	Jessica Hird	2019-08-01	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769589		Columbia, Oregon, US
Melissodes microstictus	44	-122	Ellen Watrous	2019-08-09	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769586		Lane, Oregon, US
Melissodes microstictus	46	-122	Robert Pederson	2019-08-28	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769579		Hood River, Oregon, US
Melissodes microstictus	45	-124	Martin Stein	2019-08-29	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769578		Lincoln, Oregon, US
Melissodes microstictus	43	-122	Steve Sheehy; Sarah Malaby	2019-08-07	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769577		Klamath, Oregon, US
Melissodes microstictus	42	-123	Judith Maxwell	2019-08-15	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769575		Jackson, Oregon, US
Melissodes microstictus	42	-120	Gretchen Pederson	2019-09-14	Briana C. Lindh		Female			Oregon State University	https://www.gbif.org/occurrence/3467769574		Lake, Oregon, US
Melissodes microstictus	44.812	-117.727	J. Rebholz	2012-06-28	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421546269		Baker, Oregon, US
Melissodes microstictus	44.812	-117.727	J. Rebholz	2012-06-28	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421546252		Baker, Oregon, US
Melissodes microstictus	42.428278	-120.881167	J. Schuh & E. Hansen				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804763208		Klamath Co., Oregon, US
Melissodes microstictus	42.645	-122.068056	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804755001		Klamath Co., Oregon, US
Melissodes microstictus	42.521111	-122.085	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804755000		Klamath Co., Oregon, US
Melissodes microstictus	42.341667	-121.803333	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804628381		Klamath Co., Oregon, US
Melissodes microstictus	42.341667	-121.803333	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804628380		Klamath Co., Oregon, US
Melissodes microstictus	42.655556	-122.071667	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804627368		Klamath Co., Oregon, US
Melissodes microstictus	42.521111	-122.085	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804627367		Klamath Co., Oregon, US
Melissodes microstictus	42.645	-122.068056	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804626304		Klamath Co., Oregon, US
Melissodes microstictus	42.655556	-122.071667	J. Schuh				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804617284		Klamath Co., Oregon, US
Melissodes microstictus	43.615833	-122.0875	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804617273		Lane Co., Oregon, US
Melissodes microstictus	42.645	-122.068056	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804617271		Klamath Co., Oregon, US
Melissodes microstictus	42.645	-122.068056	J. Schuh				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804616148		Klamath Co., Oregon, US
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
