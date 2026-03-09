// =========================
// Melissodes druriellus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_druriellus"; // Your species-specific placeholder
const MAP_ID = "oregon_druriellus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes druriellus	39.1564	-76.5122	Baker, Donald	1961-09-16		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Washington, D. C., US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus	39.1564	-76.5122	Baker, Donald	1961-09-16		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Washington, D. C., US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus	39.1564	-76.5122	Baker, Donald	1961-09-24		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Washington, D. C., US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus			Baker, Donald	1961-10-01		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sussex, Delaware, US
Melissodes druriellus			Baker, Donald	1961-09-30		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Delaware, US
Melissodes druriellus	39.1564	-76.5122	Baker, Donald	1961-09-24		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Washington, D. C., US
Melissodes druriellus	39.1564	-76.5122	Baker, Donald	1961-09-16		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Washington, D. C., US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	J. S. Ascher					President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.26919	-70.91778	Jessica Rykken	2008-10-08	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Norfolk, Massachusetts, US
Melissodes druriellus	42.26919	-70.91778	Jessica Rykken	2008-10-08	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Norfolk, Massachusetts, US
Melissodes druriellus	42.26944	-70.92056	Jessica Rykken	2008-09-11	J. S. Ascher	Adult	Female			President and Fellows of Harvard College			Norfolk, Massachusetts, US
Melissodes druriellus	42.32	-70.92806	Jessica Rykken	2007-08-29	Sam Droege	Adult	Male			President and Fellows of Harvard College			Suffolk, Massachusetts, US
Melissodes druriellus	42.32	-70.92806	Jessica Rykken	2007-08-29	Sam Droege	Adult	Male			President and Fellows of Harvard College			Suffolk, Massachusetts, US
Melissodes druriellus	42.34111	-70.89611	Jessica Rykken	2007-09-04	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.34111	-70.89611	Jessica Rykken	2007-09-04	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.34111	-70.89611	Jessica Rykken	2007-10-02	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.32072	-71.00256	A. Rothwell	2010-08-26	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Suffolk, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.29422	-70.93597	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33147	-70.98058	Sean M. Kent	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Sam Droege	Adult	Female			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	42.33308	-70.89567	L. Eddy	2010-08-27	Jessica Rykken	Adult	Male			President and Fellows of Harvard College			Plymouth, Massachusetts, US
Melissodes druriellus	35.6412	-83.6898	B. Fulton	2002-09-07	J.S. Ascher 2012								Blount, Tennessee, US
Melissodes druriellus	35.4633	-83.4327	P. Super	2002-09-12	J.S. Ascher 2012								Haywood, North Carolina, US
Melissodes druriellus	37	-111	C. Boyers		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	J. Tolliver		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	J. Tolliver		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	38	-112	A. Johansen		H. Ikerd 2005								Garfield, Utah, US
Melissodes druriellus	37	-111	A. Johansen		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	A. Johansen		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	A. Johansen		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	A. Johansen		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	A. Johansen		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	A. Johansen		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B. Bradley		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	38	-112	J. Richmond		T.L. Griswold 2005								Garfield, Utah, US
Melissodes druriellus	38	-112	J. Richmond		T.L. Griswold 2005								Garfield, Utah, US
Melissodes druriellus	38	-111	J.S. Wilson		T.L. Griswold 2005								Garfield, Utah, US
Melissodes druriellus	38	-111	J.S. Wilson		T.L. Griswold 2005								Garfield, Utah, US
Melissodes druriellus	37	-111	J.S. Wilson		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Arneson										Kane, Utah, US
Melissodes druriellus	37	-111	V. Bourguignon										Kane, Utah, US
Melissodes druriellus	37	-111	V. Bourguignon										Kane, Utah, US
Melissodes druriellus	37	-111	L. Wilson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Wilson										Kane, Utah, US
Melissodes druriellus	37	-111	L. Wilson										Kane, Utah, US
Melissodes druriellus	38	-111	L. Wilson										Garfield, Utah, US
Melissodes druriellus	37	-111	L. Wilson										Kane, Utah, US
Melissodes druriellus	38	-112	K. Moredock										Garfield, Utah, US
Melissodes druriellus	37	-111	K. Moredock										Kane, Utah, US
Melissodes druriellus	37	-111	K. Moredock										Kane, Utah, US
Melissodes druriellus	37	-111	K. Moredock										Kane, Utah, US
Melissodes druriellus	37	-111	K. Moredock										Kane, Utah, US
Melissodes druriellus	37	-111	K. Moredock										Kane, Utah, US
Melissodes druriellus	37	-111	K. Moredock										Kane, Utah, US
Melissodes druriellus	38	-112	B. Morgan										Garfield, Utah, US
Melissodes druriellus	37	-111	B. Morgan										Kane, Utah, US
Melissodes druriellus	37	-111	B. Morgan										Kane, Utah, US
Melissodes druriellus	37	-111	B. Morgan										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri		T.L. Griswold 2001								Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri		T.L. Griswold 2001								Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	M. Sunseri										Kane, Utah, US
Melissodes druriellus	37	-111	S. Jenkins		T.L. Griswold 2001								Kane, Utah, US
Melissodes druriellus	37	-111	S. Jenkins		T.L. Griswold 2001								Kane, Utah, US
Melissodes druriellus	38	-112	S.M. Higbee		H. Ikerd 2005								Garfield, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	38	-112	S.M. Higbee		T.L. Griswold 2005								Garfield, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S.M. Higbee		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	37	-111	B.S. Heath										Kane, Utah, US
Melissodes druriellus	38	-112	H. Ikerd		H. Ikerd 2005								Garfield, Utah, US
Melissodes druriellus	38	-112	H. Ikerd		H. Ikerd 2005								Garfield, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	H. Ikerd		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	38	-112	C.M. Davidson										Garfield, Utah, US
Melissodes druriellus	38	-112	C.M. Davidson										Garfield, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-111	C.M. Davidson										Kane, Utah, US
Melissodes druriellus	37	-112	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	R. Andrus										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	S. Messinger										Kane, Utah, US
Melissodes druriellus	38	-112	S. Messinger										Garfield, Utah, US
Melissodes druriellus	37	-111	S. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	32.95731	-105.74248	G.E. Bohart	1942-09-10									Otero, New Mexico, US
Melissodes druriellus	43.6132	-116.214	G.E. Bohart	1956-08-20									Ada, Idaho, US
Melissodes druriellus	34.75738	-77.40968	G.E. Bohart	1944-09-30									Onslow, North Carolina, US
Melissodes druriellus	34.75738	-77.40968	G.E. Bohart	1944-09-20									Onslow, North Carolina, US
Melissodes druriellus	33.0706	-109.3688	G. Trostle, D.F. Veirs	1997-06-04									Greenlee, Arizona, US
Melissodes druriellus	38	-112	F.D. Parker										Garfield, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2001								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2001								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2001								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	37	-111	O.J. Messinger										Kane, Utah, US
Melissodes druriellus	39.97	-111.49	G.F. Knowlton	1951-07-27									Utah, Utah, US
Melissodes druriellus	41.8261	-111.3132	G.F. Knowlton	1949-09-18									Rich, Utah, US
Melissodes druriellus	38.6008	-112.5801	G.F. Knowlton	1948-08-06									Millard, Utah, US
Melissodes druriellus	41.9355	-113.3755	G.F. Knowlton	1948-08-06									BoxElder, Utah, US
Melissodes druriellus	42.23491	-112.7947	G.E. Knowlton, W.J. Hanson	1972-07-27									Oneida, Idaho, US
Melissodes druriellus	42.23491	-112.7947	G.E. Knowlton, W.J. Hanson	1972-08-03	T.L. Griswold 1994								Oneida, Idaho, US
Melissodes druriellus	42.2638	-112.7647	G.E. Knowlton	1972-08-03									Oneida, Idaho, US
Melissodes druriellus	40.1105	-88.2072	E.R. Jaycox	1964-09-03									Champaign, Illinois, US
Melissodes druriellus	40.1105	-88.2072	E.R. Jaycox	1964-09-03									Champaign, Illinois, US
Melissodes druriellus	40.1105	-88.2072	E.R. Jaycox	1964-09-03									Champaign, Illinois, US
Melissodes druriellus	40.1105	-88.2072	E.R. Jaycox	1964-09-03									Champaign, Illinois, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		H. Ikerd 2005								Kane, Utah, US
Melissodes druriellus	37	-111	T.L. Griswold		T.L. Griswold 2005								Kane, Utah, US
Melissodes druriellus	40.0683	-74.2721	G.R. Ferguson	1955-08-21									Ocean, New Jersey, US
Melissodes druriellus	44.0878	-73.6762	G.R. Ferguson	1957-08-09									Essex, New York, US
Melissodes druriellus	44.05479	-70.71283	G.R. Ferguson	1957-08-05									Cumberland, Maine, US
Melissodes druriellus	41.2042	-73.6437	G.R. Ferguson	1957-09-01									Westchester, New York, US
Melissodes druriellus	41.2042	-73.6437	G.R. Ferguson	1957-09-15									Westchester, New York, US
Melissodes druriellus	41.2042	-73.6437	G.R. Ferguson	1957-09-15									Westchester, New York, US
Melissodes druriellus	34.9122	-111.7286	R.M. Bohart	1947-08-19									Coconino, Arizona, US
Melissodes druriellus	42.0988	-111.7346	R.M. Bohart										Franklin, Idaho, US
Melissodes druriellus	34.9122	-111.7286	R.M. Bohart	1947-08-19									Coconino, Arizona, US
Melissodes druriellus	38.72067	-77.05775	P.H. Arnaud, Jr.	1956-10-14									Fairfax, Virginia, US
Melissodes druriellus	42.0988	-111.7346	P.H. Arnaud, Jr.	1956-10-21									Franklin, Idaho, US
Melissodes druriellus	37.2707	-76.70745		1935-09-15									Virginia, US
Melissodes druriellus	44.02163	-92.46989		1956-08-30									Olmsted, Minnesota, US
Melissodes druriellus	44.02163	-92.46989		1956-08-30									Olmsted, Minnesota, US
Melissodes druriellus	44.02163	-92.46989		1956-08-30									Olmsted, Minnesota, US
Melissodes druriellus	37.84	-112.82		1918-07-24									Iron, Utah, US
Melissodes druriellus	42.0988	-111.7346											Franklin, Idaho, US
Melissodes druriellus	42.0988	-111.7346											Franklin, Idaho, US
Melissodes druriellus	37.2236	-107.3403	Michener, Charles	1957-08-06	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Archuleta, Colorado, US
Melissodes druriellus			Beamer, Raymond	1937-08-27	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Shawano, Wisconsin, US
Melissodes druriellus			Butler, G	1955-09-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	42.7344	-71.325	Bridwell, J	1905-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Hillsborough, New Hampshire, US
Melissodes druriellus	41.8239	-71.4133	unknown	1954-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Providence, Rhode Island, US
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus	38.9806	-77.1006	Crawford, J	1913-09-21	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Montgomery, Maryland, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.1981	-111.6506	Lutz, F	1934-08-18	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Shinners, L	1952-08-14	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cheboygan, Michigan, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Medler, J	1957-09-12	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Ivon, Wisconsin, US
Melissodes druriellus	45.5	-73.5833	LaBerge, Walley	1956-08-19	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Quebec, CA
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	49.7086	-99.0603	Bird, R	1925-08-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Manitoba, CA
Melissodes druriellus	40.9067	-96.8625	Oertel, C	1909-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lancaster, Nebraska, US
Melissodes druriellus	45.5811	-84.6969	Kennedy, C		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cheboygan, Michigan, US
Melissodes druriellus			unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Park, Colorado, US
Melissodes druriellus	42.4456	-76.4969	unknown	1922-08-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Tompkins, New York, US
Melissodes druriellus	47.1975	-95.2017	Dodge, H	1937-07-28	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Clearwater, Minnesota, US
Melissodes druriellus			Butler, G	1955-09-12	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.7719	-78.6389	Mitchell, T	1954-10-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Wake, North Carolina, US
Melissodes druriellus	47.7994	-103.1861	Stevens, O	1914-09-05	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				McKenzie, North Dakota, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	47.1975	-95.2017	Dodge, H	1937-07-28	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Clearwater, Minnesota, US
Melissodes druriellus	38.36556	-105.7572	Michener, Charles	1964-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Fremont, Colorado, US
Melissodes druriellus	38.8667	-95.355	LaBerge, Walley	1953-09-12	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Douglas, Kansas, US
Melissodes druriellus	47.1975	-95.2017	Dodge, H	1937-07-28	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Clearwater, Minnesota, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Jackson, L	1916-09-09	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Alexandria, Virginia, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Medler, J	1957-09-12	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Ivon, Wisconsin, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Danforth, Bryan	1987-05-22	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cochise, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.29328	-105.7572	Michener, Charles	1969-08-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Fremont, Colorado, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			unknown	1953-08-15	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Androscoggin, Maine, US
Melissodes druriellus	39.5536	-110.6594	Knowlton, George		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Garfield, Utah, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			unknown	1934-09-05	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Larimer, Colorado, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.4308	-83.4475	Crawford, J	1923-09-14	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Swain, North Carolina, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Bridwell, J	1902-10-01	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Fulton, Georgia, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Mitchell, T	1933-09-23	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				North Carolina, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	46.8772	-96.7894	Stevens, O	1917-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cass, North Dakota, US
Melissodes druriellus	35.4308	-83.4475	Crawford, J	1923-09-04	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Swain, North Carolina, US
Melissodes druriellus			Bell, E	1934-08-08	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Arizona, US
Melissodes druriellus	38.515	-119.4758	Michener, Charles	1937-06-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Mono, California, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	46.3725	-102.3267	Ainslie, C	1928-09-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Hettinger, North Dakota, US
Melissodes druriellus			Wiley, Grace	1921-09-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Utah, US
Melissodes druriellus	41.3583	-71.955	Eickwort, George	1964-09-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Suffolk, New York, US
Melissodes druriellus	42.2833	-71.2333	Mitchell, T	1957-09-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Norfolk, Massachusetts, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	44.7667	-110.2333	unknown	1930-08-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Wyoming, US
Melissodes druriellus	35.1981	-111.6506	Lutz, F	1934-08-18	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Medler, J	1957-09-12	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Ivon, Wisconsin, US
Melissodes druriellus			Mitchell, T	1945-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Yadkin, North Carolina, US
Melissodes druriellus			Gertsch, W	1947-08-08	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Durango, MX
Melissodes druriellus	39.1653	-86.5264	Windsor, Donald	1994-08-29	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Monroe, Indiana, US
Melissodes druriellus			Yanega, Douglas	1991-08-12	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lackawanna, Pennsylvania, US
Melissodes druriellus	35.7719	-78.6389	Mitchell, T	1954-10-15	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Wake, North Carolina, US
Melissodes druriellus	41.8239	-71.4133	unknown	1954-09-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Providence, Rhode Island, US
Melissodes druriellus			Swenk, M	1909-09-24	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cass, Nebraska, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Stevens, O	1915-08-15	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Williams, North Dakota, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	40.8	-96.6667	unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lancaster, Nebraska, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	41.85	-87.65	Stage, J	1953-09-07	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cook, Illinois, US
Melissodes druriellus	41.3583	-71.955	Eickwort, George	1964-09-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Suffolk, New York, US
Melissodes druriellus			Mitchell, T	1957-11-04	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sampson, North Carolina, US
Melissodes druriellus	35.1981	-111.6506	Lutz, F	1934-08-18	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Atwood, C	1931-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Nova Scotia, CA
Melissodes druriellus			Atwood, C	1931-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Nova Scotia, CA
Melissodes druriellus			Mitchell, T	1933-09-23	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				North Carolina, US
Melissodes druriellus			unknown	1919-09-01	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Bronx, New York, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Peters, Harold	1937-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Clearwater, Minnesota, US
Melissodes druriellus			Univ. of Kans. Mex. Exped.	1953-07-23	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Durango, MX
Melissodes druriellus	40.9972	-73.8833	Frommer, Saul	1915-10-01	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Westchester, New York, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	46.3725	-102.3267	Ainslie, C	1928-09-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Hettinger, North Dakota, US
Melissodes druriellus			Shinners, L	1920-08-17	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cheboygan, Michigan, US
Melissodes druriellus	49.7	-112.8333	Gray, H	1933-08-02	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Alberta, CA
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus	39.3914	-87.5253	Eickwort, George	1964-09-20	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Clark, Illinois, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	44.7667	-110.2333	unknown	1930-07-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Wyoming, US
Melissodes druriellus			unknown	1910-08-16	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Koochiching, Minnesota, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	42.9436	-101.4908	Cray, M	1901-08-07	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Antelope, Nebraska, US
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Stephen, William	1950-08-09	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Ontario, CA
Melissodes druriellus			Gehweiler, W	1951-09-12	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				North Carolina, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Shinners, L	1920-08-17	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cheboygan, Michigan, US
Melissodes druriellus	40.8	-96.6667	Zimmer, J	1909-09-18	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lancaster, Nebraska, US
Melissodes druriellus	35.7719	-78.6389	Mitchell, T	1954-10-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Wake, North Carolina, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	28.4333	-108.3833	Minckley, Robert	1991-08-18		Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Chihuahua, MX
Melissodes druriellus	28.4333	-108.3833	Minckley, Robert	1991-08-18		Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Chihuahua, MX
Melissodes druriellus	28.4333	-108.3833	Minckley, Robert	1991-08-18		Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Chihuahua, MX
Melissodes druriellus	40.8	-96.6667	unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lancaster, Nebraska, US
Melissodes druriellus	40.8928	-73.9731	Michener, Charles	1942-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Bergen, New Jersey, US
Melissodes druriellus			Gertsch, W	1949-08-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Salt Lake, Utah, US
Melissodes druriellus	39.0114	-76.3947	Eickwort & Eickwort	1964-09-06	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anne Arundel, Maryland, US
Melissodes druriellus			Scullen, H	1928-08-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Dakota, Minnesota, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Stage, J	1953-09-04	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cook, Illinois, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus	38.3969	-113.01	Knowlton, George	1958-08-19	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Beaver, Utah, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.9717	-95.235	Michener, Charles	1954-09-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Douglas, Kansas, US
Melissodes druriellus			Hanson, W	1955-07-21	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cheboygan, Michigan, US
Melissodes druriellus	41.9033	-100.2686	Zimmer, J	1912-08-29	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Thomas, Nebraska, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	41.8239	-71.4133	unknown	1954-09-07	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Providence, Rhode Island, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	30.4506	-91.1544	Anderson, C	1958-09-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				East Baton Rouge, Louisiana, US
Melissodes druriellus	35.7719	-78.6389	Mitchell, T	1954-10-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Wake, North Carolina, US
Melissodes druriellus			Bridwell, J		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Arlington, Virginia, US
Melissodes druriellus	38.29328	-105.7572	Michener, Charles	1969-08-13	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Fremont, Colorado, US
Melissodes druriellus	39.0114	-76.3947	Eickwort & Eickwort	1964-09-06	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anne Arundel, Maryland, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus	45.6469	-84.4744	Hanson, W	1955-07-22	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Cheboygan, Michigan, US
Melissodes druriellus	31.3269	-89.2903	Michener, Charles	1943-11-01	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lamar, Mississippi, US
Melissodes druriellus			unknown	1919-09-01	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Bronx, New York, US
Melissodes druriellus			Butler, G	1955-09-15	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Hutchings, C	1924-09-04	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Quebec, CA
Melissodes druriellus	38.80484	-77.04692	Mickel, C	1928-09-09	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Virginia, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.36556	-105.7572	Michener, Charles	1964-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Fremont, Colorado, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Mitchell, T	1957-11-04	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Sampson, North Carolina, US
Melissodes druriellus	41.8083	-72.25	Beamer, Raymond	1952-09-05	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Tolland, Connecticut, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	36.3436	-81.6142	unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Buncombe, North Carolina, US
Melissodes druriellus	40.8	-96.6667	unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lancaster, Nebraska, US
Melissodes druriellus	38.9717	-95.235	Michener, Charles		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Douglas, Kansas, US
Melissodes druriellus	38.6272	-90.1978	Shinners, L	1951-09-07	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				St Louis, Missouri, US
Melissodes druriellus			Gertsch, W	1947-08-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Durango, MX
Melissodes druriellus			Bridwell, J		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Montgomery, Maryland, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Gertsch, W	1949-08-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Salt Lake, Utah, US
Melissodes druriellus	38.36556	-105.7572	Michener, Charles	1964-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Fremont, Colorado, US
Melissodes druriellus	38.36556	-105.7572	Michener, Charles	1964-08-11	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Fremont, Colorado, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	41.2514	-95.9306	Williams, L	1914-08-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Douglas, Nebraska, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	38.6272	-90.1978	Shinners, L	1951-09-07	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				St Louis, Missouri, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	44.7636	-93.6256	Alfonsus, E	1929-09-01	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Carver, Minnesota, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	40.8	-96.6667	unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Lancaster, Nebraska, US
Melissodes druriellus	36.3436	-81.6142	unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Buncombe, North Carolina, US
Melissodes druriellus			Bridwell, J		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Arlington, Virginia, US
Melissodes druriellus	38.9705	-77.1763	Viereck, H	1916-09-10	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Montgomery, Maryland, US
Melissodes druriellus	38.2806	-95.2417	Michener & Beamer	1949-09-25	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Anderson, Kansas, US
Melissodes druriellus			LaBerge, Walley	1955-07-17	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Grand Forks, North Dakota, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			unknown		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Park, Colorado, US
Melissodes druriellus	37.9869	-79.4981	Michener, Charles	1948-09-04	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Rockbridge, Virginia, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	41.5511	-112.1094	Knowlton, George	1961-08-09	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Box Elder, Utah, US
Melissodes druriellus	41.8083	-72.25	Beamer, Raymond	1952-09-05	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Tolland, Connecticut, US
Melissodes druriellus	35.81389	-109.3094	Snow, Francis		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus			Gertsch, W	1949-08-03	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Salt Lake, Utah, US
Melissodes druriellus	35.1981	-111.6506	Lutz, F	1934-08-18	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	39.30452	-96.674655	Norton, J		unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Riley, Kansas, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	34.99095	-111.74254	Snow, Francis	1902-08-13	unknown	Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Coconino, Arizona, US
Melissodes druriellus	41.8083	-72.25	Beamer, Raymond	1952-09-05	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms				Tolland, Connecticut, US
Melissodes druriellus	44.797628	-92.823737	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			William A Riley	1936-08-15	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus			I.Lane	2017-08-29	Zach Portman		Female						Minnesota, US
Melissodes druriellus			HS Telford	1935-09-12	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus			AE Pritchard	1935-09-10	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus	46.746973	-93.46991	Nicole Gerjets	2021-08-25	Zach Portman		Female						Aitkin, Minnesota, US
Melissodes druriellus				1995-08-15		Adult	Male						Minnesota, US
Melissodes druriellus			Don Murray	1939-08-16	W. E. LaBerge	Adult	Male						Cass, Minnesota, US
Melissodes druriellus			T.Eicholz	2018-09-07	Zach Portman		Female						Minnesota, US
Melissodes druriellus	45.160398	-96.018069	Crystal Boyd	2013-09-10	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus	45.123705	-95.986023	Crystal Boyd	2013-08-29	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus			C Reed	1992-08-18	W. E. LaBerge	Adult	Male						Washington, Minnesota, US
Melissodes druriellus			J.Brokaw	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus	45.12189	-95.982897	Crystal Boyd	2013-09-23	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus				2002-08-16		Adult	Male						Minnesota, US
Melissodes druriellus	44.800805	-92.822868	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus				1995-08-15		Adult	Male						Minnesota, US
Melissodes druriellus	47.70353	-96.342445	Nicole Gerjets	2017-09-12	Zach Portman		Female						Polk, Minnesota, US
Melissodes druriellus	45.160703	-96.019809	Crystal Boyd	2013-09-10	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus			O. W. Oestlund	1937-10-02	W. E. LaBerge	Adult	Female						Ramsey, Minnesota, US
Melissodes druriellus			M. W. Wing	1942-10-04	W. E. LaBerge								Wake, North Carolina, US
Melissodes druriellus			CC Reed	1991-09-04		Adult	Female						Washington, Minnesota, US
Melissodes druriellus			HE Milliron	1938-09-25	W. E. LaBerge	Adult	Female						Pine, Minnesota, US
Melissodes druriellus			HE Milliron	1938-09-25	W. E. LaBerge	Adult	Female						Pine, Minnesota, US
Melissodes druriellus			R.Tucker	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus				1999-08-21	Joel Gardner	Adult	Male						Minnesota, US
Melissodes druriellus			Stanley Mickel	1935-10-01	W. E. LaBerge	Adult	Female						Ramsey, Minnesota, US
Melissodes druriellus			R.Tucker	2017-09-07	Zach Portman		Female						Pope, Minnesota, US
Melissodes druriellus	45.12189	-95.982897	Crystal Boyd	2013-09-23	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus	44.801107	-92.817746	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			AE Pritchard	1935-09-11	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus			RCB	1992-09-01	W. E. LaBerge	Adult	Female						Anoka, Minnesota, US
Melissodes druriellus			CC Reed	1991-09-04		Adult	Female						Washington, Minnesota, US
Melissodes druriellus	44.688939	-92.821026	Crystal Boyd	2013-09-04	Crystal Boyd		Female						Dakota, Minnesota, US
Melissodes druriellus				1910-09-09	W. E. LaBerge	Adult	Female						Beltrami, Minnesota, US
Melissodes druriellus			Erwin C Alfonsus	1929-09-08	W. E. LaBerge	Adult	Female						Carver, Minnesota, US
Melissodes druriellus			RCB	1992-09-15		Adult	Female						Anoka, Minnesota, US
Melissodes druriellus					W. E. LaBerge	Adult	Female						Hennepin, Minnesota, US
Melissodes druriellus					W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus			Erwin C Alfonsus	1929-08-31	W. E. LaBerge	Adult	Female						Carver, Minnesota, US
Melissodes druriellus	44.801107	-92.817746	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			R Namba	1950-08-13		Adult	Male						St. Louis, Minnesota, US
Melissodes druriellus			R.Tucker	2017-09-08	Zach Portman		Female						Minnesota, US
Melissodes druriellus			C. E. Mickel	1938-09-14	W. E. LaBerge	Adult	Female						Big Stone, Minnesota, US
Melissodes druriellus	45.3065	-96.2874	R.Tucker	2017-09-12	Zach Portman		Female						Bigstone, Minnesota, US
Melissodes druriellus			A.Waananen	2017-09-12	Zach Portman		Female						Minnesota, US
Melissodes druriellus				1995-08-14		Adult	Male						Isanti, Minnesota, US
Melissodes druriellus	44.801107	-92.817746	Crystal Boyd	2013-09-03	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			AE Pritchard	1935-09-12	Joel Gardner	Adult	Male						Minnesota, US
Melissodes druriellus			AE Pritchard	1935-09-11	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus	45.12261	-95.983954	Crystal Boyd	2013-09-23	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus	44.030055	-96.17076	Ashley Fulton	2015-09-09	Zach Portman		Female						Pipestone, Minnesota, US
Melissodes druriellus			Grace O. Wiley	1921-08-06	W. E. LaBerge								Carbon, Utah, US
Melissodes druriellus			CC Reed	1991-09-04		Adult	Female						Washington, Minnesota, US
Melissodes druriellus	44.138939	-92.489178	Crystal Boyd	2013-09-04	Crystal Boyd		Female						Olmsted, Minnesota, US
Melissodes druriellus			Erwin C Alfonsus	1929-08-31	W. E. LaBerge	Adult	Male						Carver, Minnesota, US
Melissodes druriellus	44.138445	-92.491595	Amy Arndorfer	2017-09-08	Zach Portman		Female						Olmsted, Minnesota, US
Melissodes druriellus			G.Pardee	2018-08-09	Zach Portman		Male						Minnesota, US
Melissodes druriellus				1994-08-16		Adult	Male						Isanti, Minnesota, US
Melissodes druriellus	43.792225	-92.21869	Amy Arndorfer	2017-09-08	Zach Portman		Female						Fillmore, Minnesota, US
Melissodes druriellus			D. G. Denning	1937-09-08	W. E. LaBerge	Adult	Female						Clay, Minnesota, US
Melissodes druriellus	44.138445	-92.491595	Amy Arndorfer	2017-09-08	Zach Portman		Female						Olmsted, Minnesota, US
Melissodes druriellus			R.Tucker	2017-09-12	Zach Portman		Female						Minnesota, US
Melissodes druriellus			HE Milliron	1938-09-25	W. E. LaBerge	Adult	Female						Pine, Minnesota, US
Melissodes druriellus				1990-08-15		Adult	Male						Isanti, Minnesota, US
Melissodes druriellus			CC Reed	1991-08-29		Adult	Female						Washington, Minnesota, US
Melissodes druriellus			R.Tucker	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus	45.160398	-96.018069	Crystal Boyd	2013-09-10	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus	48.37754	-96.53099	Crystal Boyd	2015-09-12	Zach Portman		Female						Marshall, Minnesota, US
Melissodes druriellus			I.Lane	2017-08-29	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus	44.797538	-92.823719	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus				1993-08-13		Adult	Female						Isanti, Minnesota, US
Melissodes druriellus				1910-08-06	W. E. LaBerge	Adult	Female						Koochiching, Minnesota, US
Melissodes druriellus			BA Haws	1952-08-20	Joel Gardner	Adult	Female						Minnesota, US
Melissodes druriellus			CC Reed	1991-08-29		Adult	Female						Washington, Minnesota, US
Melissodes druriellus	45.16245	-92.95038	Nicole Gerjets	2018-08-23	Zach Portman		Female						Washington, Minnesota, US
Melissodes druriellus				1999-09-16		Adult	Female						Minnesota, US
Melissodes druriellus			J Haarstad	1993-08-10	Joel Gardner		Male						Washington, Minnesota, US
Melissodes druriellus	45.3065	-96.2874	A.Waananen	2017-09-12	Zach Portman		Female						Bigstone, Minnesota, US
Melissodes druriellus	48.37754	-96.53099	Crystal Boyd	2015-08-25	Zach Portman		Female						Marshall, Minnesota, US
Melissodes druriellus			T. B. Mitchell	1945-10-07	W. E. LaBerge								Wake, North Carolina, US
Melissodes druriellus	48.611044	-95.18402	Gerda Nordquist	2015-08-08	Crystal Boyd		Female						Lake of the Woods, Minnesota, US
Melissodes druriellus	44.801107	-92.817746	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			H. H. Knight	1922-08-18	Joel Gardner	Adult	Male						Minnesota, US
Melissodes druriellus				1913-08-15	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus	45.160372	-96.018081	Crystal Boyd	2013-09-10	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus	44.02334	-93.03161	Amy Arndorfer	2017-09-08	Zach Portman		Female						Dodge, Minnesota, US
Melissodes druriellus			R.Tucker	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus	43.934414	-95.720285	Karin J. Jokela	2016-09-17	Zach Portman		Female						Murray, Minnesota, US
Melissodes druriellus	44.13862	-92.491319	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Olmsted, Minnesota, US
Melissodes druriellus	44.5261	-92.3428	Amy Arndorfer	2017-09-21	Zach Portman		Female						Goodhue, Minnesota, US
Melissodes druriellus	45.3065	-96.2874	J.Kochanski	2017-09-12	Zach Portman		Female						Bigstone, Minnesota, US
Melissodes druriellus				1994-08-11		Adult	Male						Isanti, Minnesota, US
Melissodes druriellus			R.Tucker	2017-09-11	Zach Portman		Female						Stevens, Minnesota, US
Melissodes druriellus			D. G. Denning	1935-08-06	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus			AT Hertig	1921-08-15	W. E. LaBerge	Adult	Male						Hennepin, Minnesota, US
Melissodes druriellus			R.Tucker	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus	48.05092	-96.46978	Nicole Gerjets	2017-09-12	Zach Portman		Female						Pennington, Minnesota, US
Melissodes druriellus			I.Lane	2018-09-07	Zach Portman		Female						Minnesota, US
Melissodes druriellus			RW Dawson	1925-09-19	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus	44.00382	-93.49792	Karin J. Jokela	2016-09-08	Crystal Boyd		Male						Waseca, Minnesota, US
Melissodes druriellus			HE Milliron	1938-09-25	W. E. LaBerge	Adult	Female						Pine, Minnesota, US
Melissodes druriellus	45.00564	-94.478355	Nicole Gerjets	2017-09-21	Zach Portman		Female						Meeker, Minnesota, US
Melissodes druriellus					W. E. LaBerge	Adult	Female						Ramsey, Minnesota, US
Melissodes druriellus	45.161474	-96.02285	Crystal Boyd	2013-09-23	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus				1930-08-05	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus				1996-07-11		Adult	Female						Minnesota, US
Melissodes druriellus			DR Spriestersbach	1931-08-13	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus	45.3065	-96.2874	A.Waananen	2017-09-12	Zach Portman		Female						Bigstone, Minnesota, US
Melissodes druriellus	47.70353	-96.342445	Amy Arndorfer	2017-08-23	Zach Portman		Female						Polk, Minnesota, US
Melissodes druriellus	44.994961	-92.778508	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	44.692931	-92.82049	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Dakota, Minnesota, US
Melissodes druriellus	46.13819	-92.80935	Deb D. Hudak	2017-10-02	Zach Portman		Female						Pine, Minnesota, US
Melissodes druriellus			C.Herron-Sweet	2017-08-30	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus				1995-08-15		Adult	Male						Minnesota, US
Melissodes druriellus				1996-08-14		Adult	Male						Minnesota, US
Melissodes druriellus	43.5733	-95.743755	Karin J. Jokela	2016-09-17	Zach Portman		Female						Nobles, Minnesota, US
Melissodes druriellus					W. E. LaBerge	Adult	Male						Hennepin, Minnesota, US
Melissodes druriellus	45.002987	-92.783571	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	43.934414	-95.720285	Karin J. Jokela	2016-09-17	Zach Portman		Female						Murray, Minnesota, US
Melissodes druriellus	48.45471	-96.19197	Karin J. Jokela	2016-09-19	Zach Portman		Female						Marshall, Minnesota, US
Melissodes druriellus			R.Tucker	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus	44.911255	-94.718185	Dustin Graham	2016-09-19	Zach Portman		Female						Meeker, Minnesota, US
Melissodes druriellus			J.Kochanski	2017-09-07	Zach Portman		Female						Pope, Minnesota, US
Melissodes druriellus			C. E. Mickel	1939-08-12	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus	44.26422	-95.695445	Karin J. Jokela	2016-09-17	Zach Portman		Female						Lyon, Minnesota, US
Melissodes druriellus			H. H. Knight	1923-09-11	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus			RH Daggy	1936-08-01	W. E. LaBerge	Adult	Male						Cass, Minnesota, US
Melissodes druriellus			J.Brokaw	2017-08-24	Zach Portman		Female						Wilkin, Minnesota, US
Melissodes druriellus			J Haarstad		Joel Gardner		Female						Pine, Minnesota, US
Melissodes druriellus			J Haarstad	1997-09-10	Joel Gardner		Female						Olmsted, Minnesota, US
Melissodes druriellus			LW Orr	1928-08-18	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus			J Haarstad		Joel Gardner		Female						Pine, Minnesota, US
Melissodes druriellus	45.160398	-96.018069	Crystal Boyd	2013-09-10	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus			HE Milliron	1938-09-25	W. E. LaBerge	Adult	Female						Pine, Minnesota, US
Melissodes druriellus			C. E. Mickel	1939-08-12	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus				2002-08-16		Adult	Male						Minnesota, US
Melissodes druriellus				1994-08-11		Adult	Male						Isanti, Minnesota, US
Melissodes druriellus			B Goecke	1977-08-22	Joel Gardner	Adult	Female						Pope, Minnesota, US
Melissodes druriellus				1940-09-30	W. E. LaBerge								Wake, North Carolina, US
Melissodes druriellus			DE Hansen	1999-08-28	Joel Gardner		Female						Aitkin, Minnesota, US
Melissodes druriellus			J.Kochanski	2017-09-12	Zach Portman		Female						Minnesota, US
Melissodes druriellus	46.2809	-92.987522	Nicole Gerjets	2021-09-08	Zach Portman		Female						Pine, Minnesota, US
Melissodes druriellus	45.005192	-92.78355	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	44.800805	-92.822868	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	48.37754	-96.53099	Crystal Boyd	2015-09-12	Zach Portman		Female						Marshall, Minnesota, US
Melissodes druriellus	46.53182	-95.97147	David Drons	2018-08-29	Zach Portman		Female						Otter Tail, Minnesota, US
Melissodes druriellus			J.Fitzgerald	2018-09-06	Zach Portman		Female						Minnesota, US
Melissodes druriellus	44.688939	-92.821026	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Dakota, Minnesota, US
Melissodes druriellus					W. E. LaBerge								
Melissodes druriellus			R. L. Parker	1938-08-25	W. E. LaBerge								Teton, Wyoming, US
Melissodes druriellus	45.002987	-92.783495	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	44.801107	-92.817746	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	44.801094	-92.817734	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			Marshall Hertig	1921-08-25	W. E. LaBerge	Adult	Female						Ramsey, Minnesota, US
Melissodes druriellus			I.Lane	2017-08-29	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus				1995-08-15		Adult	Male						Minnesota, US
Melissodes druriellus				1994-08-16		Adult	Male						Isanti, Minnesota, US
Melissodes druriellus			O. A. Stevens	1949-08-05	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus			C. E. Mickel	1928-09-16	W. E. LaBerge								Fairfax, Virginia, US
Melissodes druriellus			I.Lane	2017-08-23	Zach Portman		Female						Minnesota, US
Melissodes druriellus			Marshall Hertig	1921-08-25	W. E. LaBerge	Adult	Male						Ramsey, Minnesota, US
Melissodes druriellus	48.37754	-96.53099	Crystal Boyd	2015-09-12	Zach Portman		Female						Marshall, Minnesota, US
Melissodes druriellus	44.138445	-92.491595	Amy Arndorfer	2017-09-08	Zach Portman		Female						Olmsted, Minnesota, US
Melissodes druriellus				1994-08-15		Adult	Male						Minnesota, US
Melissodes druriellus				1913-08-28	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus	44.54404	-93.882795	Nicole Gerjets	2018-08-29	Zach Portman		Female						Scott, Minnesota, US
Melissodes druriellus			R.Tucker	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus			I.Lane	2017-08-29	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus			D. G. Denning	1935-08-06	W. E. LaBerge	Adult	Male						Minnesota, US
Melissodes druriellus			HE Milliron	1938-09-25	W. E. LaBerge	Adult	Female						Pine, Minnesota, US
Melissodes druriellus			DE Hansen	1999-08-28	Joel Gardner		Male						Aitkin, Minnesota, US
Melissodes druriellus					W. E. LaBerge	Adult	Male						Hennepin, Minnesota, US
Melissodes druriellus	45.3065	-96.2874	R.Tucker	2017-09-12	Zach Portman		Female						Bigstone, Minnesota, US
Melissodes druriellus			M. W. Wing	1942-10-04	W. E. LaBerge								Wake, North Carolina, US
Melissodes druriellus			Olson	1941-08-30	W. E. LaBerge								Buncombe, North Carolina, US
Melissodes druriellus	45.002987	-92.783571	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	44.994961	-92.778508	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			R.Tucker	2017-08-28	Zach Portman		Female						Clay, Minnesota, US
Melissodes druriellus			HE Milliron	1938-08-21	W. E. LaBerge	Adult	Female						Pine, Minnesota, US
Melissodes druriellus				1910-08-07	W. E. LaBerge	Adult	Male						Beltrami, Minnesota, US
Melissodes druriellus			T.Eicholz	2018-08-30	Zach Portman		Female						Minnesota, US
Melissodes druriellus	45.160372	-96.018081	Crystal Boyd	2013-09-10	Zach Portman		Female						Chippewa, Minnesota, US
Melissodes druriellus				1910-08-07	W. E. LaBerge	Adult	Male						Beltrami, Minnesota, US
Melissodes druriellus			I.Lane	2017-09-06	Zach Portman		Female						Kandiyohi, Minnesota, US
Melissodes druriellus	44.996051	-92.778853	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			Stanley Mickel	1935-10-01	W. E. LaBerge	Adult	Female						Ramsey, Minnesota, US
Melissodes druriellus				1910-08-07	W. E. LaBerge	Adult	Male						Beltrami, Minnesota, US
Melissodes druriellus	45.3065	-96.2874	J.Kochanski	2017-09-12	Zach Portman		Female						Bigstone, Minnesota, US
Melissodes druriellus			CC Reed	1992-09-11		Adult	Female						Washington, Minnesota, US
Melissodes druriellus			HS Telford	1935-09-12	W. E. LaBerge	Adult	Female						Minnesota, US
Melissodes druriellus			H. S. Telford	1935-08-28	W. E. LaBerge								Bonneville, Idaho, US
Melissodes druriellus			JD Gardner	2011-08-31			Female						Clearwater, Minnesota, US
Melissodes druriellus	45.00517	-92.783462	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus	44.994925	-92.778565	Crystal Boyd	2013-09-13	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus			Erwin C Alfonsus	1929-09-04	W. E. LaBerge	Adult	Male						Carver, Minnesota, US
Melissodes druriellus			T.Eicholz	2018-08-30	Zach Portman		Female						Minnesota, US
Melissodes druriellus			I.Lane	2017-08-20	Zach Portman		Female						Minnesota, US
Melissodes druriellus	44.801107	-92.817746	Crystal Boyd	2013-09-03	Crystal Boyd		Female						Washington, Minnesota, US
Melissodes druriellus				1993-09-15		Adult	Female						Isanti, Minnesota, US
Melissodes druriellus	48.37754	-96.53099	Crystal Boyd	2015-09-12	Zach Portman		Female						Marshall, Minnesota, US
Melissodes druriellus	44.911255	-94.718185	Dustin Graham	2016-09-19	Zach Portman		Female						Meeker, Minnesota, US
Melissodes druriellus			R.Tucker	2017-09-12	Zach Portman		Female						Minnesota, US
Melissodes druriellus	46.673164	-94.953667	David Simmons	2017-05-26	Zach Portman		Female						Wadena, Minnesota, US
Melissodes druriellus	37.9008	-87.5745	Ty'Celia Young;Grace York		Clare Maffei		Female	10 fl bl ; 10 fl y ; 10 wh ; high temp 80 deg ; low temp 63 ; wind light breeze ; cloud cover cloudy (some shadow cast)					Henderson, Kentucky, US
Melissodes druriellus	37.9008	-87.5745	Ty'Celia Young;Grace York		Clare Maffei		Female	10 fl bl ; 10 fl y ; 10 wh ; high temp 80 deg ; low temp 63 ; wind light breeze ; cloud cover cloudy (some shadow cast)					Henderson, Kentucky, US
Melissodes druriellus	37.9008	-87.5745	Ty'Celia Young;Grace York		Clare Maffei		Male	10 fl bl ; 10 fl y ; 10 wh ; high temp 80 deg ; low temp 63 ; wind light breeze ; cloud cover cloudy (some shadow cast)					Henderson, Kentucky, US
Melissodes druriellus	37.9008	-87.5745	Ty'Celia Young;Grace York		Clare Maffei		Female	10 fl bl ; 10 fl y ; 10 wh ; high temp 80 deg ; low temp 63 ; wind light breeze ; cloud cover cloudy (some shadow cast)					Henderson, Kentucky, US
Melissodes druriellus	37.9008	-87.5745	Ty'Celia Young;Grace York		Clare Maffei		Female	10 fl bl ; 10 fl y ; 10 wh ; high temp 80 deg ; low temp 63 ; wind light breeze ; cloud cover cloudy (some shadow cast)					Henderson, Kentucky, US
Melissodes druriellus	37.9008	-87.5745	Ty'Celia Young;Grace York		Clare Maffei		Female	10 fl bl ; 10 fl y ; 10 wh ; high temp 80 deg ; low temp 63 ; wind light breeze ; cloud cover cloudy (some shadow cast)					Henderson, Kentucky, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	44.3295	-68.1832	David Manski	2012-08-05	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	39.2299	-78.4629	Sam Droege	2010-08-20	Karen Wright		Male	Collected around camp, but especially in a big ironweed patch near the river;cloudy upper 80s					Hampshire, West Virginia, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	34.984	-80.449	Robert Jackowski		Karen Wright		Female	Taken during the fall but the original labels had gotten mixed up.					Union, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-10-09		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1914-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1914-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.8	-78.55	T.B. Mitchell	1957-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.8	-78.55	T.B. Mitchell	1958-09-26		Adult							Wake, North Carolina, US
Melissodes druriellus	35.8	-78.55	T.B. Mitchell	1958-09-26		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1961-10-25		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	R. L. Rabb	1944-10-14		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	C. S. Brimley	1924-10-16		Adult							Wake, North Carolina, US
Melissodes druriellus	35.8	-78.55	T.B. Mitchell	1958-09-26		Adult							Wake, North Carolina, US
Melissodes druriellus	35.8	-78.55	T.B. Mitchell	1957-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1956-10-07		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	J. E. Eckert	1917-10-01		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1921-09-09		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1921-09-05		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	C. S. Brimley	1924-10-16		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1922-09-19		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1929-09-13		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1929-09-10		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1929-09-13		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1929-09-16		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-09-10		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-09-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-10-09		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-18		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-18		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-09-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-09-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-09-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-10-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-10-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1929-10-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1921-09-09		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1922-09-19		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-10-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-10-01		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-10-01		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-10-01		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult	Male						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-10-01		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30		Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-30	W. E. LaBerge	Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1929-09-16		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-22		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-10-21		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15	W. E. LaBerge	Adult	Female						Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1940-10-13		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1940-10-07		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-18		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-09-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-09-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1948-10-17		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-18		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1944-05-05		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-18		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1944-10-18		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1937-10-08		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1942-10-31		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1937-10-12		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1937-10-08		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1941-10-07		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1941-10-07		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1932-10-14		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-10-09		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-09-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1921-09-09		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-10-21		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333		1937-05-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-10-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-10-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-10-23		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1949-10-09		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1934-10-11		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	TBM	1921-09-15		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1945-10-07		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1942-10-31		Adult							Wake, North Carolina, US
Melissodes druriellus	35.766667	-78.633333	T.B. Mitchell	1941-09-28		Adult							Wake, North Carolina, US
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-02	E. Hanuschuk		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	43.4675	-85.9265	Jason Gibbs	2016-09-18	Jason Gibbs		Female						Newaygo, Michigan, US
Melissodes druriellus	50.167	-99.276	R. Miller;M. Martini	2022-09-02			Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	42.692	-84.496	Jason Gibbs	2015-09-01	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Male						Clinton, Michigan, US
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.778	-99.689	Emily J. Hanuschuk	2019-07-10	Jason Gibbs		Female						RM Cornwallis, Manitoba, CA
Melissodes druriellus	49.716	-99.644	Emily J. Hanuschuk	2018-08-07	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-04-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-07-23	E. Hanuschuk		Male						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.012	-96.93	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-08-23			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-18	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.694	-95.93	Emily J. Hanuschuk	2018-08-13	E. Hanuschuk		Female						RM Reynolds, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-07-20			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.72833	-99.16639	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.995	-99.285	R. Miller	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	46.082	-85.958	T. Wood	2018-08-10	T. Wood		Male						Schoolcraft, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.959	-99.286	R. Miller;E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.238	-96.917	Emily J. Hanuschuk	2019-08-15	Jason Gibbs		Female						Emerson-Franklin, Manitoba, CA
Melissodes druriellus	50.959	-99.286	R. Miller;E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	49.411	-101.031	R. Miller;E. Freeth	2022-08-20			Female						Two Borders, Manitoba, CA
Melissodes druriellus	49.735	-99.19	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.80385	-99.51303	S. Patterson		C. Sheffield		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	43.661	-79.41	Jason Gibbs		Jason Gibbs		Female						Toronto, Ontario, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.67333	-99.14194	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	44.013	-85.12	BioBlitz crew	2016-09-15	Jason Gibbs		Female						Osceola, Michigan, US
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2005-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	44.233	-85.45	Jason Gibbs	2013-08-18	Jason Gibbs		Female						Wexford, Michigan, US
Melissodes druriellus	43.466	-84.419	T. Wood	2018-08-30	T. Wood		Male						Gratiot, Michigan, US
Melissodes druriellus	43.351	-83.814	T. Wood	2018-08-31	T. Wood		Male						Saginaw, Michigan, US
Melissodes druriellus	49.9003	-96.81919	A. Shaw	2018-08-16	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	51.127	-97.204	R. Miller;E. Freeth	2022-08-30			Female						Bifrost, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	42.721	-84.473	T. Wood	2017-09-01	T. Wood		Female						Ingham, Michigan, US
Melissodes druriellus	45.33	-84.508	T. Wood	2017-09-03	T. Wood		Female						Cheboygan, Michigan, US
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01781	-96.90053	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus			U.N. Lanham	1955-09-05	Jason Gibbs		Female						Washtenaw, Michigan, US
Melissodes druriellus	49.735	-99.27583	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.828	-99.689	Emily J. Hanuschuk	2019-08-21	Jason Gibbs		Female						RM Cornwallis, Manitoba, CA
Melissodes druriellus	42.2625	-86.2293	Jason Gibbs	2013-09-27	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-07-18			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.783	-98.572	R. Miller;M. Martini	2022-09-01			Female						Norfolk-Treherne, Manitoba, CA
Melissodes druriellus	49.1342	-96.741	R. Miller				Female						RM Stuartburn, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	43.36	-83.679	T. Wood	2018-08-31	T. Wood		Male						Tuscola, Michigan, US
Melissodes druriellus	50.959	-99.286	E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	50.01468	-96.91627	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	45.355	-84.322	T. Wood	2017-09-03	T. Wood		Female						Cheboygan, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-08-25	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.959	-99.286	R. Miller;E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	47.011	-88.756	T. Wood	2018-08-11	T. Wood		Female						Houghton, Michigan, US
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.239	-96.668	Emily J. Hanuschuk	2019-07-23	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	43.4675	-85.9265	Jason Gibbs	2016-09-18	Jason Gibbs		Female						Newaygo, Michigan, US
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.238	-96.917	Emily J. Hanuschuk	2019-08-15	Jason Gibbs		Female						Emerson-Franklin, Manitoba, CA
Melissodes druriellus	42.748	-84.488	Jason Gibbs	2016-09-03	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-03			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.76081	-99.50857	S. Patterson;C. Chernos		C. Sheffield		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	42.721	-84.473	T. Wood	2017-09-01	T. Wood		Female						Ingham, Michigan, US
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-02	E. Hanuschuk		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.825	-97.225	Emily J. Hanuschuk	2018-08-18	E. Hanuschuk		Female						Winnipeg, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.524	-99.381	R. Miller;M. Martini	2022-09-02			Male						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-21			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.444	-96.27	Jason Gibbs	2020-07-22	Jason Gibbs		Male						RM Reynolds, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01294	-96.85917	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01558	-96.90552	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.676	-95.898	K. Chhoker	2018-08-13	Jason Gibbs		Female						RM Reynolds, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.679	-99.6	Emily J. Hanuschuk	2018-08-22	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.00673	-96.90981	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01781	-96.90053	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.418442	-101.36038	M. Olynyk	2014-08-19	Jason Gibbs		Female						RM Ellice-Archie, Manitoba, CA
Melissodes druriellus	49.207	-96.872	Emily J. Hanuschuk	2019-08-15	Jason Gibbs		Female						Emerson-Franklin, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.67333	-99.14194	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	49.9142	-96.4327	Reid Miller;L. Sereacki	2020-07-12	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	42.727	-84.531	Jason Gibbs	2013-08-24	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	44.233	-85.45	Jason Gibbs	2013-08-18	Jason Gibbs		Female						Wexford, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.82	-97.225	Jason Gibbs	2018-07-28	Jason Gibbs		Female						Winnipeg, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-07-23	E. Hanuschuk		Male						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-14			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.0509	-95.9111	CC & AJ & KY		Jason Gibbs		Female						Piney, Manitoba, CA
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	50.959	-99.286	R. Miller;E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	42.748	-84.488	Jason Gibbs	2016-09-03	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-29			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	43.69	-79.42	Jason Gibbs;Yuko Nozoe	2008-08-30	Jason Gibbs		Female						Toronto, Ontario, CA
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.709	-99.264	Emily J. Hanuschuk	2018-08-09	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.735	-99.19	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-06-30	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-15			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-07-04			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	43.524	-84.678	T. Wood	2017-09-03	T. Wood		Female						Isabella, Michigan, US
Melissodes druriellus	43.333	-83.779	T. Wood	2018-08-31	T. Wood		Male						Saginaw, Michigan, US
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-29			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.70731	-95.89994	M. Martini	2019-07-31	Jason Gibbs		Male						Reynolds, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-15			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.795	-97.463	R. Miller;E. Freeth	2022-08-30			Female						Armstrong, Manitoba, CA
Melissodes druriellus	49.709	-99.603	Emily J. Hanuschuk	2018-08-22	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-07-23	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus			T. Wilson	1913-08-13			Female						British Columbia, CA
Melissodes druriellus	49.735	-99.19	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	41.967	-83.945	T. Wood	2018-09-01	T. Wood		Female						Lenawee, Michigan, US
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.551	-97.508	Emily J. Hanuschuk	2019-07-24	Jason Gibbs		Female						RM Armstrong, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	50.994	-99.285	R. Miller;E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-08-05	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-15			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	42.263	-86.229	Jason Gibbs	2014-08-28	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.812	-99.303	Emily J. Hanuschuk	2018-08-29	E. Hanuschuk		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-08-03			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.411	-101.031	R. Miller;E. Freeth	2022-08-20			Female						Two Borders, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	49.76081	-99.50857	S. Patterson;C. Chernos		C. Sheffield		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.01781	-96.90053	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.9142	-96.4327	Reid Miller;L. Sereacki	2020-07-12	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.901	-98.343	Emily J. Hanuschuk	2018-08-21	E. Hanuschuk		Female						RM Portage la Prairie, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.7528	-84.4923	Jason Gibbs	2016-09-03	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	42.768	-85.363	T. Wood	2017-09-10	T. Wood		Female						Barry, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.735	-99.19	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.707	-84.528	Jason Gibbs	2013-08-24	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.462	-100.689	R. Miller;E. Freeth	2022-08-19	Jason Gibbs		Female						Grassland, Manitoba, CA
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-18	E. Hanuschuk		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.59126	-98.45653	M. Martini	2019-07-23	Jason Gibbs		Male						Norfolk Treherne, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.916	-98.88	R. Miller;M. Martini	2022-09-01			Female						North Norfolk, Manitoba, CA
Melissodes druriellus	46.697	-89.162	T. Wood	2018-08-11	T. Wood		Male						Ontonagon, Michigan, US
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	49.411	-101.031	R. Miller;E. Freeth	2022-08-20			Female						Two Borders, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-15			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.01145	-96.90376	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.76081	-99.50857	S. Patterson;C. Chernos		C. Sheffield		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.087839	-96.75575	Sarah Semmler	2011-08-17	Jason Gibbs		Female						Manitoba, CA
Melissodes druriellus	49.1	-95.643	Sydney Shukla-Bergen	2019-08-14	Jason Gibbs		Female						RM Piney, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.566	-97.546	Emily J. Hanuschuk	2019-08-14	Jason Gibbs		Female						RM Armstrong, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-08-03			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	44.013	-85.12	BioBlitz crew	2016-09-15	Jason Gibbs		Female						Osceola, Michigan, US
Melissodes druriellus	50.959	-99.286	R. Miller	2022-08-26	Jason Gibbs		Female						Alonsa, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0559	-99.9341	D. Ostermann;K. Wolfe	2018-07-11	Jason Gibbs		Female						RM Elton, Manitoba, CA
Melissodes druriellus	49.41312	-101.0105	Michael Killewald	2021-07-29			Female						Two Borders, Manitoba, CA
Melissodes druriellus	49.444	-96.27	Jason Gibbs	2020-07-22	Jason Gibbs		Male						Reynolds, Manitoba, CA
Melissodes druriellus	49.9371	-97.5124	Manitoba Conservation Data Centre		A. Bass		Female						RM St. Francois Xavier, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-08-23			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.783	-98.572	R. Miller;M. Martini	2022-09-01			Female						Norfolk-Treherne, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.72833	-99.16639	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.665	-99.677	Emily J. Hanuschuk	2018-08-07	Jason Gibbs		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.935	-84.405	Jason Gibbs	2014-09-07	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-15			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	44.3275	-85.5822	BioBlitz crew	2016-09-15	Jason Gibbs		Female						Wexford, Michigan, US
Melissodes druriellus	49.647	-96.26	Jason Gibbs;Yuko Nozoe	2017-08-19	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	43.524	-84.678	T. Wood	2017-09-03	T. Wood		Female						Isabella, Michigan, US
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.83632	-99.58411	S. Patterson;C. Chernos		C. Sheffield		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.01468	-96.91627	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.087839	-96.75575	Sarah Semmler	2011-08-17	Jason Gibbs		Female						Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.676	-95.898	Emily J. Hanuschuk	2018-08-13	E. Hanuschuk		Female						RM Reynolds, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-08-25	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	50.4	-96.484	Sydney Shukla-Bergen	2019-08-08	Jason Gibbs		Female						RM St. Clements, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.01294	-96.85917	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.67015	-95.89592	M. Martini	2019-07-31	Jason Gibbs		Male						Reynolds, Manitoba, CA
Melissodes druriellus	49.089	-95.631	Sydney Shukla-Bergen	2019-08-14	Jason Gibbs		Female						RM Piney, Manitoba, CA
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01145	-96.90376	A. Shaw	2018-08-02	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.994	-99.285	R. Miller;E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	49.67333	-99.14194	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.012	-96.93	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.00673	-96.90981	A. Shaw	2018-07-26	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.959	-99.286	R. Miller	2022-08-26	Jason Gibbs		Female						Alonsa, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01781	-96.90053	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	45.996	-87.825	T. Wood	2018-08-12	T. Wood		Female						Dickinson, Michigan, US
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.16361	-96.67486	R. Miller		A. Bass		Female						RM Stuartburn, Manitoba, CA
Melissodes druriellus	49.67333	-99.14194	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.142	-97.184	Emily J. Hanuschuk	2019-08-19	Jason Gibbs		Female						RM Rockwood, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.2625	-86.2293	Jason Gibbs	2013-09-27	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	50.014	-96.917	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.74016	-100.5588	Michael Killewald	2021-07-28			Female						Sifton, Manitoba, CA
Melissodes druriellus	49.735	-99.27583	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.698	-84.528	Jason Gibbs	2013-08-24	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-15			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	43.44	-84.439	T. Wood	2018-08-30	T. Wood		Male						Gratiot, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01781	-96.90053	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	42.7528	-84.4923	Jason Gibbs	2016-09-03	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.9142	-96.4327	Reid Miller;L. Sereacki	2020-07-12	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-03			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	43.4675	-85.9265	Jason Gibbs	2016-09-18	Jason Gibbs		Female						Newaygo, Michigan, US
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-08-25	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.895	-96.43	Emily J. Hanuschuk	2019-07-16	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	43.466	-84.419	T. Wood	2018-08-30	T. Wood		Male						Gratiot, Michigan, US
Melissodes druriellus	42.935	-84.405	Jason Gibbs	2014-09-07	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	50.959	-99.286	R. Miller;E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	50.014	-96.917	Jason Gibbs	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.238	-96.917	Emily J. Hanuschuk	2019-08-15	Jason Gibbs		Female						Emerson-Franklin, Manitoba, CA
Melissodes druriellus	50.01294	-96.85917	A. Shaw	2018-07-26	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	51.126	-97.206	R. Miller;E. Freeth	2022-08-30			Female						Bifrost, Manitoba, CA
Melissodes druriellus	42.7528	-84.4923	Jason Gibbs	2016-09-03	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.735	-99.19	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-07-04			Male						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.00673	-96.90981	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	43.4675	-85.9265	Jason Gibbs	2016-09-18	Jason Gibbs		Female						Newaygo, Michigan, US
Melissodes druriellus	49.799	-98.217	Emily J. Hanuschuk	2019-07-05	E. Hanuschuk		Female						RM Portage la Prairie, Manitoba, CA
Melissodes druriellus	49.895	-96.43	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.012	-96.93	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.716	-99.644	Emily J. Hanuschuk	2018-08-22	Jason Gibbs		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	43.69	-79.42	Jason Gibbs;Yuko Nozoe	2008-08-30	Jason Gibbs		Female						Toronto, Ontario, CA
Melissodes druriellus	49.679	-99.6	Emily J. Hanuschuk	2018-08-22	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.014	-96.917	Jason Gibbs	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.15752	-96.65021	R. Miller				Female						RM Stuartburn, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.392	-97.529	E. Freeth	2022-08-22			Female						Armstrong, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	42.299	-85.837	Jason Gibbs	2013-09-09	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.80385	-99.51303	S. Patterson;C. Chernos		C. Sheffield		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	49.76081	-99.50857	S. Patterson;C. Chernos		C. Sheffield		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.411	-101.031	R. Miller;E. Freeth	2022-08-20			Female						Two Borders, Manitoba, CA
Melissodes druriellus	41.88	-83.685	T. Wood	2018-08-18	T. Wood		Female						Monroe, Michigan, US
Melissodes druriellus	49.76081	-99.50857	S. Patterson;C. Chernos		C. Sheffield		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.451	-76.469	Jason Gibbs	2012-08-19	Jason Gibbs		Female						Tompkins, New York, US
Melissodes druriellus	49.413	-101.034	R. Miller;E. Freeth	2022-08-20			Female						Two Borders, Manitoba, CA
Melissodes druriellus	50.0315	-96.8615	Jason Gibbs	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	42.753	-84.48	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.83632	-99.58411	S. Patterson;C. Chernos		C. Sheffield		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.207	-96.872	Emily J. Hanuschuk	2019-08-15	Jason Gibbs		Female						Emerson-Franklin, Manitoba, CA
Melissodes druriellus	49.207	-96.872	Emily J. Hanuschuk	2019-08-15	Jason Gibbs		Female						Emerson-Franklin, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-01			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.00673	-96.90981	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.653	-96.229	Jason Gibbs;Yuko Nozoe	2017-07-30	Jason Gibbs		Female						RM Reynolds, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.665	-99.677	Emily J. Hanuschuk	2018-08-22	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-02	E. Hanuschuk		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.67015	-95.89592	M. Martini	2019-07-31	Jason Gibbs		Male						Reynolds, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-08-25	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.17177	-96.67296	R. Miller										RM Stuartburn, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	50.014	-96.917	Jason Gibbs	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-18	E. Hanuschuk		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	43.401	-83.413	T. Wood	2017-08-18	T. Wood		Male						Tuscola, Michigan, US
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-22			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2005-09-11			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.167	-99.278	R. Miller;T. Hettiarachchi	2022-07-21	Jason Gibbs		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	50.4	-96.484	Sydney Shukla-Bergen	2019-08-08	Jason Gibbs		Female						RM St. Clements, Manitoba, CA
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.676	-95.898	K. Chhoker	2018-08-13	Jason Gibbs		Female						RM Reynolds, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	43.69	-79.42	Jason Gibbs;Yuko Nozoe	2008-08-30	Jason Gibbs		Female						Toronto, Ontario, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-03			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.0117	-96.913	Jason Gibbs	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.828	-99.689	Emily J. Hanuschuk	2019-08-21	Jason Gibbs		Female						RM Cornwallis, Manitoba, CA
Melissodes druriellus	49.089	-95.631	Sydney Shukla-Bergen	2019-08-14	Jason Gibbs		Female						RM Piney, Manitoba, CA
Melissodes druriellus	42.7528	-84.4923	Jason Gibbs	2016-09-03	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.0739	-96.754	Reid Miller;B. Sorokowski	2020-08-17	Jason Gibbs		Female						RM Stuartburn, Manitoba, CA
Melissodes druriellus	51.126	-97.206	R. Miller;E. Freeth	2022-08-30			Female						Bifrost, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.524	-99.381	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	44.013	-85.12	BioBlitz crew	2016-09-15	Jason Gibbs		Female						Osceola, Michigan, US
Melissodes druriellus	49.998	-96.869	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-07-25			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	46.697	-89.162	T. Wood	2018-08-11	T. Wood		Female						Ontonagon, Michigan, US
Melissodes druriellus	49.783	-98.572	R. Miller;M. Martini	2022-09-01			Female						Norfolk-Treherne, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01558	-96.90552	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	51.126	-97.206	R. Miller;E. Freeth	2022-08-30			Female						Bifrost, Manitoba, CA
Melissodes druriellus	50.175	-97.155	Jason Gibbs	2020-08-26	Jason Gibbs		Female						RM Rockwood, Manitoba, CA
Melissodes druriellus	49.665	-99.677	Emily J. Hanuschuk	2018-08-22	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01145	-96.90376	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.3824	-85.9147	Jason Gibbs	2014-08-18	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.675	-99.07194	A.M. Patenaude				Female						RM Victoria, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-13	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.16361	-96.67486	R. Miller										RM Stuartburn, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.12037	-96.65449	R. Miller										RM Stuartburn, Manitoba, CA
Melissodes druriellus	49.735	-99.19	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	51.127	-97.204	R. Miller;E. Freeth	2022-08-30			Female						Bifrost, Manitoba, CA
Melissodes druriellus	50.959	-99.286	R. Miller	2022-08-26	Jason Gibbs		Female						Alonsa, Manitoba, CA
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.709	-99.603	Emily J. Hanuschuk	2018-08-22	Jason Gibbs		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.1875	-97.59513	Michael Killewald	2021-07-30	Michael Killewald		Female						Rhineland, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	44.013	-85.12	BioBlitz crew	2016-09-15	Jason Gibbs		Female						Osceola, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	42.727	-84.531	Jason Gibbs	2013-08-24	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	49.16361	-96.67486	R. Miller				Female						RM Stuartburn, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Male						Clinton, Michigan, US
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2014-08-31	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	47.011	-88.756	T. Wood	2018-08-11	T. Wood		Female						Houghton, Michigan, US
Melissodes druriellus	43.5883	-79.6036	Jason Gibbs	2015-09-26	Jason Gibbs		Female						Peel, Ontario, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-07-11			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-01			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	42.341	-86.082	Jason Gibbs	2013-09-09	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs	2017-08-13	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.4497	-76.4711	Jason Gibbs	2012-08-19	Jason Gibbs		Male						Tompkins, New York, US
Melissodes druriellus	49.916	-98.88	R. Miller;M. Martini	2022-09-01			Female						North Norfolk, Manitoba, CA
Melissodes druriellus	44.233	-85.45	Jason Gibbs	2013-08-18	Jason Gibbs		Female						Wexford, Michigan, US
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-07-18			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	43.763	-84.657	T. Wood	2018-08-30	T. Wood		Male						Isabella, Michigan, US
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	43.763	-84.657	T. Wood	2018-08-30	T. Wood		Female						Isabella, Michigan, US
Melissodes druriellus	42.437	-84.517	Jason Gibbs	2014-09-07	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.783	-98.572	R. Miller;M. Martini	2022-09-01			Female						Norfolk-Treherne, Manitoba, CA
Melissodes druriellus	50.014	-96.917	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-09-11			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.014	-96.866	Sydney Shukla-Bergen	2019-07-31	Jason Gibbs		Male						Springfield, Manitoba, CA
Melissodes druriellus	44.067414	-89.552732	K. Prince	2015-07-30	Jason Gibbs		Female						Waushara, Wisconsin, US
Melissodes druriellus	49.665	-99.07	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-07-20			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01294	-96.85917	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	46.697	-89.162	T. Wood	2018-08-11	T. Wood		Male						Ontonagon, Michigan, US
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	46.082	-85.958	T. Wood	2018-08-10	T. Wood		Male						Schoolcraft, Michigan, US
Melissodes druriellus	50.01558	-96.90552	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-08-29			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.014	-96.917	Jason Gibbs	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-02	E. Hanuschuk		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-07-16	E. Hanuschuk		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-08	Jason Gibbs		Male						RM Springfield, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.011	-96.93	Emily J. Hanuschuk	2018-08-02	E. Hanuschuk		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.726	-99.22	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.735	-99.19	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.754	-84.486	Jason Gibbs	2013-09-02	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.887	-98.297	K. Chhoker	2018-06-27	Jason Gibbs		Male						RM Portage la Prairie, Manitoba, CA
Melissodes druriellus	49.665	-99.677	Emily J. Hanuschuk	2018-08-22	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.087839	-96.75575	Sarah Semmler	2011-08-17	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	50.01294	-96.85917	A. Shaw	2018-08-16	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.727	-84.531	Jason Gibbs	2013-08-24	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	49.916	-98.88	R. Miller;M. Martini	2022-09-01			Female						North Norfolk, Manitoba, CA
Melissodes druriellus	49.665	-99.677	Emily J. Hanuschuk	2018-08-07	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.411	-101.031	R. Miller;E. Freeth	2022-08-20			Female						Two Borders, Manitoba, CA
Melissodes druriellus	50.012	-96.93	Jason Gibbs;Yuko Nozoe	2017-09-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	42.935	-84.398	Jason Gibbs	2013-09-14	Jason Gibbs		Female						Clinton, Michigan, US
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-07-18			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.52	-99.377	R. Miller;M. Martini	2022-09-02			Female						Glenella-Lansdowne, Manitoba, CA
Melissodes druriellus	50.959	-99.286	R. Miller	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.72	-84.473	Jason Gibbs	2013-09-10	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	43.69	-79.42	Jason Gibbs;Yuko Nozoe	2008-08-30	Jason Gibbs		Female						Toronto, Ontario, CA
Melissodes druriellus	49.679	-99.6	Emily J. Hanuschuk	2018-08-22	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	53.99	-100.95	J. Watson & K. Bartel	2023-07-02	Jason Gibbs								Manitoba, CA
Melissodes druriellus	50.0559	-99.9341	D. Ostermann;K. Wolfe	2018-07-11	Jason Gibbs		Female						RM Elton, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	42.768	-85.363	T. Wood	2017-09-10	T. Wood		Female						Barry, Michigan, US
Melissodes druriellus	42.707	-84.528	Jason Gibbs	2013-08-24	Jason Gibbs		Female						Ingham, Michigan, US
Melissodes druriellus	49.735	-99.27583	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0315	-96.8615	Jason Gibbs	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.901	-98.343	Emily J. Hanuschuk	2018-08-21	E. Hanuschuk		Female						RM Portage la Prairie, Manitoba, CA
Melissodes druriellus	50.01781	-96.90053	A. Shaw	2018-08-02	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2005-08-03			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.41975	-98.40705	Michael Killewald	2020-09-02	Michael Killewald		Female						Thompson, Manitoba, CA
Melissodes druriellus	43.69	-79.42	Jason Gibbs;Yuko Nozoe	2008-08-30	Jason Gibbs		Female						Toronto, Ontario, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.727	-84.531	Jason Gibbs	2013-08-24	Jason Gibbs		Male						Ingham, Michigan, US
Melissodes druriellus	49.83632	-99.58411	S. Patterson;C. Chernos		C. Sheffield		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	50.014	-96.917	Jason Gibbs	2017-08-12	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.405	-101.031	R. Miller;E. Freeth	2022-08-20			Female						Two Borders, Manitoba, CA
Melissodes druriellus	50.01	-96.909	Jason Gibbs	2020-08-27	Jason Gibbs		Female						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.735	-99.27583	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	43.4675	-85.9265	Jason Gibbs	2016-09-18	Jason Gibbs		Female						Newaygo, Michigan, US
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2005-08-03			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-05	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	44.013	-85.12	BioBlitz crew	2016-09-15	Jason Gibbs		Female						Osceola, Michigan, US
Melissodes druriellus	49.68083	-99.55417	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.914	-96.433	Emily J. Hanuschuk	2019-08-20	Jason Gibbs		Female						RM Springfield, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2006-08-01			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.783	-98.572	R. Miller;M. Martini	2022-09-01			Female						Norfolk-Treherne, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2005-08-30			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	42.411	-86.087	Jason Gibbs	2013-08-15	Jason Gibbs		Female						Allegan, Michigan, US
Melissodes druriellus	49.665	-99.677	Emily J. Hanuschuk	2018-08-07	E. Hanuschuk		Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.0115	-96.9065	Jason Gibbs;Yuko Nozoe	2017-08-12	Jason Gibbs		Male						Birds Hill Provincial Park, Manitoba, CA
Melissodes druriellus	42.2625	-86.2293	Jason Gibbs	2013-09-27	Jason Gibbs		Female						Van Buren, Michigan, US
Melissodes druriellus	49.73	-99.3	A.M. Patenaude				Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.959	-99.286	E. Freeth	2022-08-26			Female						Alonsa, Manitoba, CA
Melissodes druriellus	49.68083	-99.55444	A.M. Patenaude	2006-08-09			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	49.69111	-99.57472	A.M. Patenaude	2005-08-16			Female						Glenboro-South Cypress, Manitoba, CA
Melissodes druriellus	50.266	-96.568	Emily J. Hanuschuk	2019-08-30	Jason Gibbs		Female						RM Brokenhead, Manitoba, CA
Melissodes druriellus	49.80385	-99.51303	S. Patterson;C. Chernos		C. Sheffield		Female						North Cypress-Langford, Manitoba, CA
Melissodes druriellus	42.7238	-73.8763	Amanda Dillon		Amanda Dillon		Female	8 fl yl ; 7 f bl ; 8 w ; Clear ; Light ; 88F ; Centaurea maculosa ; Melampyrum lineare ; Ceanothus americanus ; Solidago species ;					Albany, New York, US
Melissodes druriellus	42.7184	-73.8717	Amanda Dillon	2020-08-14	Amanda Dillon		Female	Most ; Light ; 75F ; Solidago species ; Centaurea maculosa ;					Albany, New York, US
Melissodes druriellus	43.2114	-71.4995	Cooper Kimball-Rhines		Clare Maffei		Female	8 fl b, 8 fl y, 8 w ;;Weather- 88F-90F, sky- 1, wind-2 ;;Blooms- Spreading dog bane, Cow wheat, Meadow sweet, Goldenrod					Merrimack, New Hampshire, US
Melissodes druriellus	39.4789	-77.7472	G. Avalos/S. Brown		Sarah Brown		Female	8 oz. yellow, blue, and white cups					Washington, Maryland, US
Melissodes druriellus	42.719	-73.8839	Amanda Dillon	2019-09-18	Amanda Dillon		Indeterminate	Most ; Light ; 63F ; Solidago species ; Anaphalis margaritacea ; Aster species ;					Albany, New York, US
Melissodes druriellus	42.719	-73.8839	Amanda Dillon	2019-09-18	Amanda Dillon		Indeterminate	Most ; Light ; 63F ; Solidago species ; Anaphalis margaritacea ; Aster species ;					Albany, New York, US
Melissodes druriellus	41.2903	-70.18	Sarah Bois		Joan Milam		Male	8 fl yl, 8 fl bl, 8 w ;;No treatment ; ;43.706 ha ;;Transect runs East to West ; ;72-80F					Nantucket, Massachusetts, US
Melissodes druriellus	43.404	-70.6255	J. Bailey	2020-07-26	Clare Maffei		Male	Blooms- Northern Blazing Star					York, Maine, US
Melissodes druriellus	43.382	-70.6371	J. Bailey		Clare Maffei		Female	8 fl bl, 8 fl y, 8 w ;sunny, 81F;-blooms- northern blazing star					York, Maine, US
Melissodes druriellus	43.404	-70.6255	J. Bailey		Clare Maffei		Female	8 fl y, 8 fl b, 8 w;hot, 95F, dry, sunny					York, Maine, US
Melissodes druriellus	41.2884	-70.1743	Sarah Bois		Clare Maffei		Female	8 fl y, 8 fl b, 8 w ;80F clear, sunny light wind;blooms- Pityopsis falcata, Euthamia sp., Clethra alnifolia, Sericocarpus asteroides					Nantucket, Massachusetts, US
Melissodes druriellus	41.2636	-70.1784	Karen C. Beattie		Clare Maffei		Female	8 fl yl, 8 fl bl, 8 w ;no recent rain, 73F clear wind @ @ 9mhp;-blooms- Adilliea millefolium, Pityopsis falcata, Sericocarpus asteroides, Solidago rugusa					Nantucket, Massachusetts, US
Melissodes druriellus	37.5209	-80.8134	Mark J. Hepner	2019-09-11	Sam Droege		Female	Partly cloudy, 85�F					Summers, West Virginia, US
Melissodes druriellus	37.4536	-80.8506	Mark J. Hepner	2019-09-11	Sam Droege		Female	Partly cloudy, 80�F					Summers, West Virginia, US
Melissodes druriellus	46.251	-84.106	Shawn Hall	2019-08-24	Sam Droege		Female	13 fl y, 13 fl b, 13 w					Chippewa, Michigan, US
Melissodes druriellus	37.5209	-80.8134	Mark J. Hepner	2019-09-11	Sam Droege		Female	Partly cloudy, 85�F					Summers, West Virginia, US
Melissodes druriellus	39.2532	-80.9274	Mark J. Hepner	2019-10-11	Sam Droege		Female	Partly cloudy, 80�F					Ritchie, West Virginia, US
Melissodes druriellus	39.5211	-80.059	Mark J. Hepner	2019-10-04	Sam Droege		Female	Partly cloudy, 68�F					Marion, West Virginia, US
Melissodes druriellus	38.9646	-80.3943	Mark J. Hepner	2019-09-01	Sam Droege		Female	Mostly cloudy, 80�F					Lewis, West Virginia, US
Melissodes druriellus	37.4536	-80.8506	Mark J. Hepner	2019-09-11	Sam Droege		Female	Partly cloudy, 80�F					Summers, West Virginia, US
Melissodes druriellus	37.4746	-80.8699	Mark J. Hepner	2019-09-11	Sam Droege		Female	Partly cloudy, 85�F					Summers, West Virginia, US
Melissodes druriellus	38.7942	-76.7206	M Fegler		Sam Droege		Female	FTE: Fresh Tidal Estuary;Western Branch Low Marsh;Yellow Base-Blue Top					Anne Arundel, Maryland, US
Melissodes druriellus	38.8014	-76.7033	M Fegler		Sam Droege		Female	FTE: Fresh Tidal Estuary;Chris Swarth Low Marsh;Yellow Base - Blue Top					Anne Arundel, Maryland, US
Melissodes druriellus	38.7942	-76.7206	M Fegler		Sam Droege		Female	FTE: Fresh Tidal Estuary;Western Branch Low Marsh;Yellow Base-Blue Top					Anne Arundel, Maryland, US
Melissodes druriellus	38.7942	-76.7206	M Fegler		Sam Droege		Female	FTE: Fresh Tidal Estuary;Western Branch Low Marsh;Yellow Base-Blue Top					Anne Arundel, Maryland, US
Melissodes druriellus	33.1365	-79.8146	Julie Arnold		Sam Droege		Female	10 flbl 10 flyl 10 white					Berkeley, South Carolina, US
Melissodes druriellus	38.81627	-88.79887	Brenna L. Decker	2016-08-16	Brenna L. Decker	Adult	Male						Marion, Illinois, US
Melissodes druriellus	38.93843	-88.64252	Brenna L. Decker	2016-08-11	Brenna L. Decker	Adult	Male						Effingham, Illinois, US
Melissodes druriellus						Adult	Female						
Melissodes druriellus						Adult	Female						
Melissodes druriellus	37.6175	-89.20889	E.S.G. Titus	1902-10-16		Adult							Jackson, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-08		Adult							Macoupin, Illinois, US
Melissodes druriellus			C.A. Frost	1916-09-03		Adult							Massachusetts, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-08		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult	Female						US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus			W.E. LaBerge	1955-08-17		Adult							Grand Forks, North Dakota, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-10-01		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-09		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1893-09-23		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	40.51417	-88.99056				Adult							McLean, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	34.9517	-111.6457	R.B. Roberts	1966-09-08		Adult							Coconino, Arizona, US
Melissodes druriellus	42.27917	-71.41667	C.A. Frost	1916-08-26		Adult							Middlesex, Massachusetts, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-08		Adult							Macoupin, Illinois, US
Melissodes druriellus	45.64694	-84.47444	Shinners	1952-08-17		Adult							Cheboygan, Michigan, US
Melissodes druriellus			W.E. LaBerge	1956-08-27		Adult							Pennsylvania, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	Charles Robertson	1893-09-14		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus			D.W. Ribble	1968-07-21		Adult							Laramie, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	42.27917	-71.41667	C.A. Frost	1916-09-02		Adult	Female						Middlesex, Massachusetts, US
Melissodes druriellus	37.14496	-88.73374	Charles Arthur Hart;Shigetsura Shiga	1891-08-17		Adult							Massac, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-08		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	38.28056	-95.24167	W.P. Stephen	1950-09-24		Adult							Anderson, Kansas, US
Melissodes druriellus	39.27972	-89.88167	Charles Robertson	1890-10-11		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	41.7075	-89.19084	J.K. Bouseman	1997-09-16	Laura Anchor	Adult							Lee, Illinois, US
Melissodes druriellus	41.7075	-89.19084	J.K. Bouseman	1997-09-15	Laura Anchor	Adult							Lee, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			S.L. Clement	1971-07-24		Adult							Teton, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-09		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			C.A. Frost	1916-09-03		Adult							Massachusetts, US
Melissodes druriellus	36.674	-111.741	I.McCrackers	1998-09-10		Adult		Topozone Houserock Valley					Coconino, Arizona, US
Melissodes druriellus			S.L. Clement	1971-07-31		Adult							Teton, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1902-09-29		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus			T.H. Frison			Adult							Wisconsin, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	40.046	-87.831	H.H. Ross	1930-10-05		Adult							Vermilion, Illinois, US
Melissodes druriellus	40.046	-87.831	H.H. Ross	1930-10-05		Adult							Vermilion, Illinois, US
Melissodes druriellus	37.14496	-88.73374	Charles Arthur Hart;Shigetsura Shiga	1891-08-17		Adult							Massac, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus			S.L. Clement	1971-07-31		Adult							Teton, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	40.468	-89.947	W.E. LaBerge	1966-05-13		Adult							Fulton, Illinois, US
Melissodes druriellus	44.41556	-110.57472	S.L. Clement	1970-08-08		Adult							Teton, Wyoming, US
Melissodes druriellus			S.L. Clement	1971-07-31		Adult							Teton, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus	40.11056	-88.20722	J.S. Terrill	1891-07-30		Adult							Champaign, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-09-25		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1895-09-21		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	41.7075	-89.19084	J.K. Bouseman	1996-08-26	Laura Anchor	Adult							Lee, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1896-08-21		Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167		1886-09-15		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	39.0587	-88.70937	Brenna L. Decker	2016-05-11	Brenna L. Decker	Adult	Male						Effingham, Illinois, US
Melissodes druriellus						Adult	Female						
Melissodes druriellus						Adult	Female						
Melissodes druriellus						Adult	Female						
Melissodes druriellus						Adult	Female						
Melissodes druriellus	38.8221	-88.78572	Brenna L. Decker	2016-08-12	Brenna L. Decker	Adult	Male						Marion, Illinois, US
Melissodes druriellus	38.81335	-88.79658	Brenna L. Decker	2016-08-16	Brenna L. Decker	Adult	Male						Marion, Illinois, US
Melissodes druriellus						Adult	Female						
Melissodes druriellus						Adult	Female						
Melissodes druriellus						Adult	Female						
Melissodes druriellus						Adult	Female						
Melissodes druriellus	40.1155	-90.2502	D. Smeyer	2002-08-21	Laura Anchor	Adult							Mason, Illinois, US
Melissodes druriellus	39.27972	-89.88167	W.E. LaBerge, J.C. Marlin	1970-09-09		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus			E.S.G. Titus	1901-09-22		Adult	Male						Cook, Illinois, US
Melissodes druriellus	42.366373	-87.871787	Selim H. Peabody			Adult							Lake, Illinois, US
Melissodes druriellus						Adult	Female						
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-10-01		Adult							Macoupin, Illinois, US
Melissodes druriellus	38.3059	-105.7562	C.D. Michener	1964-08-11		Adult							Fremont, Colorado, US
Melissodes druriellus	39.27972	-89.88167	John C. Marlin	1970-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus	33.899	-109.157	E.G. Linsley, J.M. Linsley	1966-08-26		Adult							Apache, Arizona, US
Melissodes druriellus	39.27972	-89.88167	Charles Robertson	1893-09-20		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	40.11056	-88.20722	Wavdworth	1898-09-12		Adult							Champaign, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1902-08-08		Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult	Female						US
Melissodes druriellus	39.27972	-89.88167	Charles Robertson	1893-10-02		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	40.11056	-88.20722		1907-10-04		Adult							Champaign, Illinois, US
Melissodes druriellus	40.11056	-88.20722	C.A. Hart	1891-08-30		Adult							Champaign, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1893-09-18		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	37.44583	-88.30501	Theodore Henry Frison	1924-09-05		Adult							Hardin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-10-03		Adult							Macoupin, Illinois, US
Melissodes druriellus	44.41556	-110.57472	S.L. Clement	1970-08-08		Adult							Teton, Wyoming, US
Melissodes druriellus	36.8653	-112.2178	H.A. Scullen	1955-09-07		Adult							Coconino, Arizona, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus	37.14496	-88.73374	Charles Arthur Hart;Shigetsura Shiga	1891-08-17		Adult							Massac, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	34.9517	-111.6457	R.B. Roberts	1966-09-08		Adult							Coconino, Arizona, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-09-25		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-10-03		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	John C. Marlin	1970-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus			S.L. Clement	1971-07-17		Adult							Teton, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	Charles Robertson	1896-10-09		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	45.17635	-92.76821	W.E. LaBerge	1992-09-07		Adult							Washington, Minnesota, US
Melissodes druriellus	37.6175	-89.20889	E.S.G. Titus	1902-10-16		Adult	Female						Jackson, Illinois, US
Melissodes druriellus			B.D. Noe	1964-07-03		Adult							Park, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-10		Adult							Macoupin, Illinois, US
Melissodes druriellus	40.046	-87.831	H.H. Ross	1930-10-05		Adult							Vermilion, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-10-04		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1908-09-17		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-10-04		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1893-09-23		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus				1961-07-27		Adult							
Melissodes druriellus			S.L. Clement	1971-08-08		Adult							Teton, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus			Patton			Adult	Female						
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult	Female						US
Melissodes druriellus			R.B. Roberts, M.G. Roberts	1964-09-24		Adult							Delaware, Pennsylvania, US
Melissodes druriellus	39.27972	-89.88167	Charles Robertson	1893-10-10		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	37.6175	-89.20889	E.S.G. Titus	1902-10-16		Adult							Jackson, Illinois, US
Melissodes druriellus	42.366373	-87.871787	Selim H. Peabody			Adult	Female						Lake, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1908-09-15		Adult							Macoupin, Illinois, US
Melissodes druriellus			T.B. Mitchell	1945-09-20		Adult							Yadkin, North Carolina, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-10-03		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-09-18		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	42.27917	-71.41667	C.A. Frost	1916-09-03		Adult							Middlesex, Massachusetts, US
Melissodes druriellus	40.11056	-88.20722	Wavdworth	1898-09-26		Adult							Champaign, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	42.366373	-87.871787	Selim H. Peabody			Adult	Female						Lake, Illinois, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus			Charles Robertson			Adult							US
Melissodes druriellus	39.27972	-89.88167	Charles Robertson	1893-10-02		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	37.44583	-88.30501	Theodore Henry Frison	1924-09-05		Adult							Hardin, Illinois, US
Melissodes druriellus			Donald Wayne Webb	1967-09-12		Adult							Ontario, CA
Melissodes druriellus			S.L. Clement	1971-08-06		Adult							Teton, Wyoming, US
Melissodes druriellus				1961-07-27		Adult							
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1908-09-15		Adult							Macoupin, Illinois, US
Melissodes druriellus						Adult		County level record.					Adams, Wisconsin, US
Melissodes druriellus	39.27972	-89.88167				Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1904-09-16		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-09-25		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	John C. Marlin	1970-10-02		Adult							Macoupin, Illinois, US
Melissodes druriellus			S.L. Clement	1971-08-26		Adult							Teton, Wyoming, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1895-08-31		Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1902-09-29		Adult	Female						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1895-08-12		Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1895-08-21		Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1971-09-13		Adult							Macoupin, Illinois, US
Melissodes druriellus	45.87108	-89.71083	T.H. Frison			Adult							Oneida, Wisconsin, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1895-08-21		Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-10-03		Adult							Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	C.A. Robertson	1895-08-16		Adult	Male						Macoupin, Illinois, US
Melissodes druriellus	39.27972	-89.88167	J.C. Marlin	1970-10-03		Adult							Macoupin, Illinois, US
Melissodes druriellus			S.L. Clement	1971-08-06		Adult							Teton, Wyoming, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1949-10-09	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Rabb, R.L.	1948-10-14	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-09-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-10-21	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1942-11-10	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386		1947-11-03	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1929-09-13	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Brimley, C.S.	1924-10-16	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-18	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1942-10-31	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-09-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1949-10-09	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-10-07	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-11-05	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1929-09-10	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1949-10-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386		1960-10-07	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1942-10-31	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386			LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386		1940-10-03	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-18	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1937-10-08	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26	Greene, J.F.	1959-10-05	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-10-21	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.79	-78.65	Mitchell, T. B.	1957-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1937-05-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Brimley, C.S.	1924-10-16	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Sherman, F.		LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1929-09-13	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Sherman, F.		LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1921-09-09	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1948-10-17	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1942-11-08	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Eckert, J.E.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1921-09-09	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1949-10-09	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1949-10-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1949-10-09	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1937-10-08	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.79	-78.65	Mitchell, T. B.	1958-09-26	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1922-09-19	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-22	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.79	-78.65	Self, L.;Mitchell, T. B.	1959-10-01	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1921-11-05	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.79	-78.65	Mitchell, T. B.	1958-09-26	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1922-09-19	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-18	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1941-10-07	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26	Greene, J.F.	1959-10-05	Ascher, John S.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-09-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26	Greene, J.F.	1959-10-05	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-18	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1937-10-12	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1956-10-07	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-18	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1921-09-09	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1920-10-23	Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-09-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.79	-78.65	Mitchell, T. B.	1958-09-26	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-09-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1941-09-28	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.79	-78.65	Mitchell, T. B.	1957-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1929-09-16	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1932-10-14	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1942-11-08	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1949-10-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-09-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-18	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386		1961-10-25	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386		1942-11-07	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-15	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1929-09-16	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1947-10-09	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-09-23	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386		1960-10-13	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1941-10-07	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1945-10-07	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.	1944-10-11	LaBerge, Wallace E.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	35.7	-79.26		1960-10-20	LaBerge, Wallace E.								Chatham, North Carolina, US
Melissodes druriellus	35.7721	-78.6386	Mitchell, T. B.		Mitchell, T. B.								Wake, North Carolina, US
Melissodes druriellus	46.4175	-119.5359	A. Hall-Mullen	2014-06-17	H. Ikerd 2016		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Benton, Washington, US
Melissodes druriellus	47.6692	-111.3292	S.R. Dawes	2015-06-30	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	47.6792	-111.3083	S.R. Dawes	2014-08-04	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	47.6692	-111.3292	S.R. Dawes	2014-08-04	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	47.6692	-111.3292	S.R. Dawes	2013-08-02	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	47.6692	-111.3292	S.R. Dawes	2013-08-02	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	47.6803	-111.3033	S.R. Dawes	2013-07-06	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	47.6692	-111.3292	S.R. Dawes	2013-07-20	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	47.6692	-111.3292	S.R. Dawes	2013-07-20	S.J. Burrows 2016		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Cascade, Montana, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	S.M. Higbee	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2982	-111.113	S. Messinger	2001-08-22	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2982	-111.113	S. Messinger	2001-08-22	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2982	-111.113	S. Messinger	2001-08-22	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.322	-111.1488	K. Moredock	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	J. Tolliver	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	J. Tolliver	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	38.0827	-110.7684	L. Wilson	2001-08-08	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-03	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B. Morgan	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B. Morgan	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2000-07-26	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2000-07-26	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2000-07-26	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.9196	-111.6737	C.M. Davidson	2001-06-27	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.9275	-111.6749	C.M. Davidson	2001-06-27	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.29953	-111.12777	M. Sunseri	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	M. Sunseri	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2929	-111.1231	B.S. Heath	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	38.0136	-111.3567	J.S. Wilson	2002-07-30	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	38.0126	-111.3754	J.S. Wilson	2002-07-30	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.2866	-111.121	C.M. Davidson	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	C.M. Davidson	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	C.M. Davidson	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	C.M. Davidson	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	C.M. Davidson	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	C.M. Davidson	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	C.M. Davidson	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S. Jenkins	2000-09-19	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	O.J. Messinger	2001-08-02	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2983	-111.1571	L.A. Horn	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2983	-111.1571	O.J. Messinger	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	O.J. Messinger	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	O.J. Messinger	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2001-08-03	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	O.J. Messinger	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	L.A. Horn	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.276	-111.1162	S. Messinger	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.6173	-111.8941	J. Richmond	2002-08-06	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.6173	-111.8941	J. Richmond	2002-08-06	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	O.J. Messinger	2001-07-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.9196	-111.6737	B. Morgan	2001-06-27	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.32292	-111.1573	C.M. Davidson	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2982	-111.113	C. Boyers	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.608	-111.9046	H. Ikerd	2003-08-22	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.29953	-111.12777	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-22	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	M. Sunseri	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	H. Ikerd	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	H. Ikerd	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	H. Ikerd	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	H. Ikerd	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	V. Bourguignon	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2866	-111.121	V. Bourguignon	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	H. Ikerd	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.608	-111.9046	H. Ikerd	2003-08-22	K.W. Wright 2013		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.3019	-111.1437	S. Messinger	2002-08-02	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2929	-111.1231	B.S. Heath	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	A. Johansen	2003-09-17	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	A. Johansen	2003-09-17	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	A. Johansen	2003-09-17	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	T.L. Griswold	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2983	-111.1571	S.M. Higbee	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.608	-111.9046	A. Johansen	2003-08-22	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.608	-111.9046	S.M. Higbee	2003-08-22	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.3066	-111.1437	S. Jenkins	2000-08-22	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2929	-111.1231	B.S. Heath	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	O.J. Messinger	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	A. Johansen	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	A. Johansen	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	A. Johansen	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	S.M. Higbee	2003-09-03	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.276	-111.1162	S. Messinger	2002-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-09-06	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3438	-111.2141	S. Messinger	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2982	-111.113	S. Messinger	2001-08-22	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3438	-111.2141	S. Messinger	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2982	-111.113	S. Messinger	2001-08-22	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3438	-111.2141	S. Messinger	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3438	-111.2141	S. Messinger	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.9196	-111.6737	S. Messinger	2001-06-27	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.3252	-111.155	C.M. Davidson	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B.S. Heath	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2001-07-19	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.6882	-111.6276	F.D. Parker	2000-07-28	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.3001	-111.13506	O.J. Messinger	2000-08-11	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	C.M. Davidson	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	L. Wilson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.322	-111.1488	K. Moredock	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-09-06	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	R. Andrus Nelson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2001-08-02	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2001-08-22	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2983	-111.1571	O.J. Messinger	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	S.M. Higbee	2003-08-15	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	K. Moredock	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	K. Moredock	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3066	-111.1437	K. Moredock	2001-08-02	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.29953	-111.12777	K. Moredock	2001-08-01	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2941	-111.1414	B. Bradley	2003-08-15	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.302	-111.1237	C.M. Davidson	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.6985	-111.6268	S.M. Higbee	2003-08-22	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.9281	-111.6841	K. Moredock	2001-06-27	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Garfield, Utah, US
Melissodes druriellus	37.29953	-111.12777	S.M. Higbee	2003-07-31	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3438	-111.2141	L. Wilson	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3438	-111.2141	L. Wilson	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3438	-111.2141	L. Wilson	2001-08-21	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3252	-111.155	J.S. Wilson	2002-06-20	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2983	-111.1571	L.A. Horn	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2983	-111.1571	O.J. Messinger	2000-08-10	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	C.M. Davidson	2002-09-05	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	B. Morgan	2001-07-19	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.2753	-112.3275	R. Andrus Nelson	2001-08-24	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	37.3019	-111.1437	O.J. Messinger	2001-07-20	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah			Kane, Utah, US
Melissodes druriellus	41.146667	-73.494722	M. Statham				Female			American Museum of Natural History			Fairfield Co., Connecticut, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	42.568611	-72.534083	J. Milam				Male			American Museum of Natural History			Franklin Co., Massachusetts, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.346944	-70.675667	T. S. Hodgson				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.356667	-70.679056	T. S. Hodgson				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.356667	-70.679056	T. S. Hodgson				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	37.553611	-77.460556					Female			American Museum of Natural History			Henrico Co., Virginia, US
Melissodes druriellus	42.446111	-73.788889	J. L. Zabriskie				Female			American Museum of Natural History			Greene Co., New York, US
Melissodes druriellus	41.915	-71.909444	A. B. Klots				Female			American Museum of Natural History			Windham Co., Connecticut, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.090556	-73.918333	J. L. Zabriskie				Female			American Museum of Natural History			Rockland Co., New York, US
Melissodes druriellus	41.090556	-73.918333	J. L. Zabriskie				Female			American Museum of Natural History			Rockland Co., New York, US
Melissodes druriellus	41.356667	-70.679056	T. S. Hodgson				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	40.748889	-74.261667	E. L. Dickerson				Male			American Museum of Natural History			Essex Co., New Jersey, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	35.793611	-82.256667					Male			American Museum of Natural History			Yancey Co., North Carolina, US
Melissodes druriellus	35.793611	-82.256667					Male			American Museum of Natural History			Yancey Co., North Carolina, US
Melissodes druriellus	44.226944	-71.748333					Female			American Museum of Natural History			Grafton Co., New Hampshire, US
Melissodes druriellus	39.711667	-75.108333					Female			American Museum of Natural History			Gloucester Co., New Jersey, US
Melissodes druriellus	46.894778	-98.705528	O. A. Stevens				Male			American Museum of Natural History			Stutsman Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Female			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	46.3725	-102.326667	J. R. Campbell				Male			American Museum of Natural History			Hettinger Co., North Dakota, US
Melissodes druriellus	35.430833	-83.4475	J. C. Crawford				Female			American Museum of Natural History			Swain Co., North Carolina, US
Melissodes druriellus	41.850556	-87.793611	G. I. Stage				Male			American Museum of Natural History			Cook Co., Illinois, US
Melissodes druriellus	42.500278	-96.393889	C. N. Ainslie				Female			American Museum of Natural History			Woodbury Co., Iowa, US
Melissodes druriellus	35.430833	-83.4475	J. C. Crawford				Male			American Museum of Natural History			Swain Co., North Carolina, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	41.989444	-73.096111	William M. Wheeler				Female			American Museum of Natural History			Litchfield Co., Connecticut, US
Melissodes druriellus	46.816944	-95.845	O. A. Stevens				Female			American Museum of Natural History			Becker Co., Minnesota, US
Melissodes druriellus	42.072222	-87.722778	G. I. Stage				Male			American Museum of Natural History			Cook Co., Illinois, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Male			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Male			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Male			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	38.980556	-77.100556	J. C. Crawford				Female			American Museum of Natural History			Montgomery Co., Maryland, US
Melissodes druriellus							Female			American Museum of Natural History			unknown, Pennsylvania, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Male			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	47.925278	-97.032778	O. A. Stevens				Male			American Museum of Natural History			Grand Forks Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	35.792278	-82.310111	W. Beutenmuller				Female			American Museum of Natural History			Yancey Co., North Carolina, US
Melissodes druriellus	40.583333	-74.15					Female			American Museum of Natural History			Richmond Co., New York, US
Melissodes druriellus	41.85	-87.65	G. I. Stage				Female			American Museum of Natural History			Cook Co., Illinois, US
Melissodes druriellus	41.057222	-74.141389					Male			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	48.368889	-99.995833	O. A. Stevens				Male			American Museum of Natural History			Pierce Co., North Dakota, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Male			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	41.850556	-87.793611	G. I. Stage				Female			American Museum of Natural History			Cook Co., Illinois, US
Melissodes druriellus	41.397556	-70.6775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.352111	-70.52775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.321944	-70.810611	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.352111	-70.52775	P. Z. Goldstein				Male			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	42.601111	-76.180833	N. Trigoboff				Male			American Museum of Natural History			Cortland Co., New York, US
Melissodes druriellus	40.911389	-73.782778	M. A. Cazier				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.441944	-70.571389	P. Z. Goldstein				Male			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.397556	-70.6775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.855278	-74.766667	N. Trigoboff				Male			American Museum of Natural History			Sullivan Co., New York, US
Melissodes druriellus	40.733639	-73.592639	N. Trigoboff				Male			American Museum of Natural History			Nassau Co., New York, US
Melissodes druriellus	40.911389	-73.782778					Male			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	40.733639	-73.592639	N. Trigoboff				Male			American Museum of Natural History			Nassau Co., New York, US
Melissodes druriellus	42.601111	-76.180833	N. Trigoboff				Male			American Museum of Natural History			Cortland Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Male			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	40.733639	-73.592639	N. Trigoboff				Male			American Museum of Natural History			Nassau Co., New York, US
Melissodes druriellus	40.733639	-73.592639	N. Trigoboff				Male			American Museum of Natural History			Nassau Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Female			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	40.083056	-74.068611					Female			American Museum of Natural History			Ocean Co., New Jersey, US
Melissodes druriellus	35.792278	-82.310111	W. Beutenmuller				Female			American Museum of Natural History			Yancey Co., North Carolina, US
Melissodes druriellus	40.973056	-73.961944	J. G. Rozen				Male			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	40.911389	-73.782778	C. de Funaro				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.003611	-76.455278					Female			American Museum of Natural History			Columbia Co., Pennsylvania, US
Melissodes druriellus	41.003611	-76.455278					Female			American Museum of Natural History			Columbia Co., Pennsylvania, US
Melissodes druriellus	41.021944	-73.947778	J. G. Rozen				Female			American Museum of Natural History			Rockland Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	35.792278	-82.310111	W. Beutenmuller				Female			American Museum of Natural History			Yancey Co., North Carolina, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	42.119444	-73.525556					Female			American Museum of Natural History			Columbia Co., New York, US
Melissodes druriellus	34.195417	-79.762556					Male			American Museum of Natural History			Florence Co., South Carolina, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	43.745278	-73.498889					Female			American Museum of Natural History			Warren Co., New York, US
Melissodes druriellus	40.911389	-73.782778					Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	44.286389	-68.696389	J. L. Zabriskie				Female			American Museum of Natural History			Hancock Co., Maine, US
Melissodes druriellus	40.825833	-74.209444	M. A. Cazier				Female			American Museum of Natural History			Essex Co., New Jersey, US
Melissodes druriellus	41.146667	-73.494722	M. Favreau				Male			American Museum of Natural History			Fairfield Co., Connecticut, US
Melissodes druriellus	41.003611	-76.455278					Male			American Museum of Natural History			Columbia Co., Pennsylvania, US
Melissodes druriellus	41.297778	-74.459722					Female			American Museum of Natural History			Orange Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	40.486111	-74.452222					Female			American Museum of Natural History			Middlesex Co., New Jersey, US
Melissodes druriellus	40.097778	-74.218056					Female			American Museum of Natural History			Ocean Co., New Jersey, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	42.119444	-73.525556	M. A. Cazier				Female			American Museum of Natural History			Columbia Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	41.003611	-76.455278					Female			American Museum of Natural History			Columbia Co., Pennsylvania, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.003611	-76.455278					Female			American Museum of Natural History			Columbia Co., Pennsylvania, US
Melissodes druriellus	41.003611	-76.455278					Female			American Museum of Natural History			Columbia Co., Pennsylvania, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	46.866667	-64.983333	S. K. Javorek				Male			American Museum of Natural History			New Brunswick, CA
Melissodes druriellus	41.238056	-73.523056	M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.057222	-74.141389	F. E. Lutz				Male			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.628611	-83.867778	M. Arduser				Male			American Museum of Natural History			Lucas Co., Ohio, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.146667	-73.494722	M. Statham				Male			American Museum of Natural History			Fairfield Co., Connecticut, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	44.574167	-88.556389	A. R. Moldenke				Male			American Museum of Natural History			Outagamie Co., Wisconsin, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	40.656111	-73.902778	J. Law				Male			American Museum of Natural History			Kings Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.090556	-73.918333	J. L. Zabriskie				Female			American Museum of Natural History			Rockland Co., New York, US
Melissodes druriellus	35.793611	-82.256667					Male			American Museum of Natural History			Yancey Co., North Carolina, US
Melissodes druriellus	35.430833	-83.4475	J. C. Crawford				Female			American Museum of Natural History			Swain Co., North Carolina, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	41.183333	-74.183333					Female			American Museum of Natural History			Orange Co., New York, US
Melissodes druriellus	41.850556	-87.793611	G. I. Stage				Male			American Museum of Natural History			Cook Co., Illinois, US
Melissodes druriellus	39.401611	-75.197833	J. S. Ascher				Male			American Museum of Natural History			Cumberland Co., New Jersey, US
Melissodes druriellus	40.647222	-73.957778					Male			American Museum of Natural History			Kings Co., New York, US
Melissodes druriellus	47.925278	-97.032778	O. A. Stevens				Male			American Museum of Natural History			Grand Forks Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Female			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	45.561944	-94.148889	O. A. Stevens				Female			American Museum of Natural History			Benton Co., Minnesota, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Male			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	38.980556	-77.100556	J. C. Crawford				Female			American Museum of Natural History			Montgomery Co., Maryland, US
Melissodes druriellus	48.112778	-98.864722	O. A. Stevens				Female			American Museum of Natural History			Ramsey Co., North Dakota, US
Melissodes druriellus	46.816944	-95.845	O. A. Stevens				Female			American Museum of Natural History			Becker Co., Minnesota, US
Melissodes druriellus	46.824167	-100.413333	O. A. Stevens				Male			American Museum of Natural History			McKenzie Co., North Dakota, US
Melissodes druriellus	30.815	-88.158056					Female			American Museum of Natural History			Mobile Co., Alabama, US
Melissodes druriellus	45.561944	-94.148889	O. A. Stevens				Female			American Museum of Natural History			Benton Co., Minnesota, US
Melissodes druriellus	41.850556	-87.793611	G. I. Stage				Female			American Museum of Natural History			Cook Co., Illinois, US
Melissodes druriellus	41.850556	-87.793611	G. I. Stage				Female			American Museum of Natural History			Cook Co., Illinois, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	35.430833	-83.4475	J. C. Crawford				Male			American Museum of Natural History			Swain Co., North Carolina, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	40.850833	-73.970556					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.413833	-70.647472	S. A. Britton				Male			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	46.389444	-100.593611	O. A. Stevens				Male			American Museum of Natural History			Sioux Co., North Dakota, US
Melissodes druriellus	47.819444	-103.540833	O. A. Stevens				Male			American Museum of Natural History			McKenzie Co., North Dakota, US
Melissodes druriellus	39.401611	-75.197833	J. S. Ascher				Male			American Museum of Natural History			Cumberland Co., New Jersey, US
Melissodes druriellus	40.583333	-74.15	M. A. Cazier, , , , , ,  &				Male			American Museum of Natural History			Richmond Co., New York, US
Melissodes druriellus	40.633611	-74.407778					Male			American Museum of Natural History			Union Co., New Jersey, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.877222	-96.789444	O. A. Stevens				Male			American Museum of Natural History			Cass Co., North Dakota, US
Melissodes druriellus	46.389444	-100.593611	O. A. Stevens				Male			American Museum of Natural History			Sioux Co., North Dakota, US
Melissodes druriellus	35.430833	-83.4475	J. C. Crawford				Female			American Museum of Natural History			Swain Co., North Carolina, US
Melissodes druriellus	35.771944	-78.638889	C. H. Waldron				Female			American Museum of Natural History			Wake Co., North Carolina, US
Melissodes druriellus	41.352111	-70.52775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.356667	-70.679056	T. S. Hodgson				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.352278	-70.63875	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.318611	-70.801389	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.352111	-70.52775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.352111	-70.52775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.397556	-70.6775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.318611	-70.801389	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.397556	-70.6775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	41.352111	-70.52775	P. Z. Goldstein				Female			American Museum of Natural History			Dukes Co., Massachusetts, US
Melissodes druriellus	40.633611	-74.407778					Male			American Museum of Natural History			Union Co., New Jersey, US
Melissodes druriellus	35.792278	-82.310111	W. Beutenmuller				Male			American Museum of Natural History			Yancey Co., North Carolina, US
Melissodes druriellus	40.903333	-73.859444					Male			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	42.119444	-73.525556					Male			American Museum of Natural History			Columbia Co., New York, US
Melissodes druriellus	41.057222	-74.141389	F. E. Lutz				Male			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.071944	-71.857222	T. Gidaspow				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	40.733639	-73.592639	N. Trigoboff				Male			American Museum of Natural History			Nassau Co., New York, US
Melissodes druriellus	40.733639	-73.592639	N. Trigoboff				Male			American Museum of Natural History			Nassau Co., New York, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.146667	-73.494722					Male			American Museum of Natural History			Fairfield Co., Connecticut, US
Melissodes druriellus	41.106667	-75.454722	A. R. Moldenke				Male			American Museum of Natural History			Monroe Co., Pennsylvania, US
Melissodes druriellus	42.119444	-73.525556					Male			American Museum of Natural History			Columbia Co., New York, US
Melissodes druriellus	42.119444	-73.525556					Male			American Museum of Natural History			Columbia Co., New York, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	41.021944	-73.947778	J. G. Rozen				Female			American Museum of Natural History			Rockland Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	40.511111	-74.249722	W. T. Davis				Female			American Museum of Natural History			Richmond Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	40.903333	-73.859444					Female			American Museum of Natural History			The Bronx Co., New York, US
Melissodes druriellus	40.840556	-72.581944	L. Lacey				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.021944	-73.947778	J. G. Rozen				Female			American Museum of Natural History			Rockland Co., New York, US
Melissodes druriellus	34.8525	-82.394167					Female			American Museum of Natural History			Greenville Co., South Carolina, US
Melissodes druriellus	41.297778	-74.459722					Female			American Museum of Natural History			Orange Co., New York, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	44.189722	-73.786389	H. Notman				Female			American Museum of Natural History			Essex Co., New York, US
Melissodes druriellus	41.057222	-74.141389					Female			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Female			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.106667	-75.454722	A. R. Moldenke				Male			American Museum of Natural History			Monroe Co., Pennsylvania, US
Melissodes druriellus	41.146667	-73.494722	M. Statham				Female			American Museum of Natural History			Fairfield Co., Connecticut, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.106667	-75.454722	A. R. Moldenke				Male			American Museum of Natural History			Monroe Co., Pennsylvania, US
Melissodes druriellus	41.146667	-73.494722	M. Favreau				Female			American Museum of Natural History			Fairfield Co., Connecticut, US
Melissodes druriellus	43.898333	-85.184722	A. R. Moldenke				Female			American Museum of Natural History			Osceola Co., Michigan, US
Melissodes druriellus	46.866667	-64.983333	S. K. Javorek				Female			American Museum of Natural History			New Brunswick, CA
Melissodes druriellus	41.238056	-73.523056	M. Favreau & T. M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.346389	-72.968056	B. Durden & C. Durden				Female			American Museum of Natural History			New Haven Co., Connecticut, US
Melissodes druriellus	41.057222	-74.141389	F. E. Lutz				Male			American Museum of Natural History			Bergen Co., New Jersey, US
Melissodes druriellus	41.106667	-75.454722	A. R. Moldenke				Female			American Museum of Natural History			Monroe Co., Pennsylvania, US
Melissodes druriellus	40.911389	-73.782778	M. A. Cazier				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	41.097778	-72.103889	R. G. Goelet				Male			American Museum of Natural History			Suffolk Co., New York, US
Melissodes druriellus	41.238056	-73.523056	M. Favreau				Female			American Museum of Natural History			Westchester Co., New York, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7548	-76.3801	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7548	-76.3801	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	39.5441	-80.1979	Mark J. Hepner	2018-09-11	Sam Droege		Female	90% cloud cover, 70�F;;Collected with Barrackville Boy Scout Troop 11					Marion, West Virginia, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Male	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	39.0891	-75.7711	Clare Maffei	2017-08-01	Sam Droege		Female						Caroline, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7548	-76.3801	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7713	-76.3803	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7548	-76.3801	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7675	-76.3831	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7675	-76.3831	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7548	-76.3801	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	38.7741	-76.3777	E. J. Scarpulla		Sam Droege		Female	3 blue, 3 yellow, 3 white					Talbot, Maryland, US
Melissodes druriellus	44.9178	-96.3261	Pennarola&Leone		Sam Droege		Male	10 w, 10 y, 10 b (29/30 recovered)					Lac Qui Parle, Minnesota, US
Melissodes druriellus	35.3366	-86.0564	S. Harrison D. Boles	2017-10-04	Sam Droege		Female	presumably out all day;10 flyl 10 flbl 10w;field					Franklin, Tennessee, US
Melissodes druriellus	38.7267	-75.9763	Clare Maffei		Sam Droege		Female	array of 12 oz beer cups. 3 yellow, 3 blue, 3 white. 10 m apart.					Caroline, Maryland, US
Melissodes druriellus	45.4398	-96.2415	P. Pennarola		Sam Droege		Male	10 white, 10 blue, 10 yellow					Big Stone, Minnesota, US
Melissodes druriellus	45.3612	-96.3119	P. Pennarola	2016-07-07	Sam Droege		Male						Big Stone, Minnesota, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	38.8879	-76.6653	Tim McMahon	2017-09-17	Sam Droege		Female	Heterotheca subaxillaris at Shooting range					Anne Arundel, Maryland, US
Melissodes druriellus	45.1151	-67.2783	Marilyn Kircus	2016-08-08	Sam Droege		Female	82 degrees F, Clear to partly cloudy;Bird vetch, little evening primrose, goldenrod, black-eyed Susan, spreading dogbane, mullein					Washington, Maine, US
Melissodes druriellus	43.0881	-70.6723	Rachel Carson		Sam Droege		Female	9 flbl 9 flyl 9w ;Goldenrod, buckthorn, willow, bittersweet					York, Maine, US
Melissodes druriellus	43.5719	-70.2761	Rachel Carson		Sam Droege		Female	9 flbl 9 flyl 9w ;Marsh; seaside goldenrod flowering					Cumberland, Maine, US
Melissodes druriellus	43.5719	-70.2761	Rachel Carson		Sam Droege		Female	9 flbl 9 flyl 9w ;Marsh; seaside goldenrod flowering					Cumberland, Maine, US
Melissodes druriellus	43.5719	-70.2761	Rachel Carson		Sam Droege		Female	9 flbl 9 flyl 9w ;Marsh; seaside goldenrod flowering					Cumberland, Maine, US
Melissodes druriellus	45.1151	-67.2783	Marilyn Kircus	2016-08-08	Sam Droege		Female	82 degrees F, Clear to partly cloudy;Bird vetch, little evening primrose, goldenrod, black-eyed Susan, spreading dogbane, mullein					Washington, Maine, US
Melissodes druriellus	43.5719	-70.2761	Rachel Carson		Sam Droege		Female	9 flbl 9 flyl 9w ;Marsh; seaside goldenrod flowering					Cumberland, Maine, US
Melissodes druriellus	43.5719	-70.2761	Rachel Carson		Sam Droege		Female	9 flbl 9 flyl 9w ;Marsh; seaside goldenrod flowering					Cumberland, Maine, US
Melissodes druriellus	43.5719	-70.2761	Rachel Carson		Sam Droege		Male	9 flbl 9 flyl 9w ;Marsh; seaside goldenrod flowering					Cumberland, Maine, US
Melissodes druriellus	26.9085	-82.3514	Anthony Abbate		Sam Droege		Female	10 w 10 flyl 10flbl;Temp:66/86					Charlotte, Florida, US
Melissodes druriellus	26.7175	-82.2614	Anthony Abbate		Sam Droege		Female	10 w 10 flyl 10flbl;Temp:66/86					Lee, Florida, US
Melissodes druriellus	39.1113	-76.8961	Kelly Graninger	2016-09-11	Sam Droege		Female	10flbl, 10flyl, 10 modified  flbl with 16 lines, 10 modified flyl with 16 lines, sunny 90s					Prince George's, Maryland, US
Melissodes druriellus	38.3994	-75.5703	Sam Droege	2016-08-04	Sam Droege		Female	80s Partially cloudy;rudbeckia planted in shopping mall					Wicomico, Maryland, US
Melissodes druriellus	44.3295	-68.1832	David Manski	2013-09-29	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	38.0383	-77.726	E. J. Scarpulla	2014-07-05	Eugene Scarpulla		Female	Netted opportunistically.  Dawn soap for collecting jar.					Spotsylvania, Virginia, US
Melissodes druriellus	39.4779	-74.4337	Maggie Swetkoff		Sam Droege		Female	Bowls placed out in 4 sites, but individual locations we were not able to determine which locations when with which bowls.  Lat long is a general location					Atlantic, New Jersey, US
Melissodes druriellus	38.1979	-76.9285	Rijk Morawe	2013-09-05	Karen Wright		Male	10 fl yl, 10 fl bl, 10 white;out of 30 bowls, lost : 0					Westmoreland, Virginia, US
Melissodes druriellus	44.3295	-68.1832	David Manski	2013-08-18	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	44.3295	-68.1832	David Manski	2013-08-07	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	40.4428	-111.7118	Ryan Whiteside	2012-08-20	Karen Wright		Female	10 fl bl;10 fl yl;10 white					Utah, Utah, US
Melissodes druriellus	44.9217	-110.4124	Ann Rodman		Karen Wright		Female	10fl bl, 10fl yl, 10white;Out of 30 bowls, lost : 0					Park, Wyoming, US
Melissodes druriellus	44.3555	-68.1851	David Manski	2012-08-05	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	44.3295	-68.1832	David Manski	2012-08-05	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	40.4302	-105.5076	Clinton Whitten	2011-08-18	Karen Wright		Male	Common site for the park;10y 10b 10w;0 missing;Horseshoe Park					Larimer, Colorado, US
Melissodes druriellus	40.4302	-105.5076	Clinton Whitten	2011-08-18	Karen Wright		Male	Common site for the park;10y 10b 10w;0 missing;Horseshoe Park					Larimer, Colorado, US
Melissodes druriellus	38.8785	-76.6722	Sam Droege and Jelle Devalez	2012-09-01	Karen Wright		Male	Netted in Milt's old sandpit, Lots of Dieunomia flying around, partially cloudy, 90, humid, Lespideza and Beggar's Tick and Maryland Goldenaster in abundance					Anne Arundel, Maryland, US
Melissodes druriellus	38.8785	-76.6722	Sam Droege and Jelle Devalez	2012-09-01	Karen Wright		Male	Netted in Milt's old sandpit, Lots of Dieunomia flying around, partially cloudy, 90, humid, Lespideza and Beggar's Tick and Maryland Goldenaster in abundance					Anne Arundel, Maryland, US
Melissodes druriellus	40.4302	-105.5076	Clinton Whitten		Karen Wright		Male	Common site for the park;10y 10b 10w;0 missing;Horseshoe Park					Larimer, Colorado, US
Melissodes druriellus	46.9478	-90.8869	Julie van Stappen		Sam Droege		Female	10flbl;10flyl;10white					Wisconsin, US
Melissodes druriellus	44.3295	-68.1832	David Manski	2011-08-15	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	44.3295	-68.1832	David Manski	2011-08-15	Sam Droege		Female	10 bl;10 yl;10 white					Hancock, Maine, US
Melissodes druriellus	43.0447	-78.1945	Dave Green	2011-08-04	Karen Wright		Male	joe pyeweed partially cloudy 80					Genesee, New York, US
Melissodes druriellus	42.8453	-78.1707	Dave Green	2011-08-07	Karen Wright		Male	near salt wells;vervain ;mid 80s sunny					Wyoming, New York, US
Melissodes druriellus	42.8453	-78.1707	Dave Green	2011-08-07	Karen Wright		Male	near salt wells;vervain ;mid 80s sunny					Wyoming, New York, US
Melissodes druriellus	42.8453	-78.1707	Dave Green	2011-08-07	Karen Wright		Male	near salt wells;vervain ;mid 80s sunny					Wyoming, New York, US
Melissodes druriellus	42.8453	-78.1707	Dave Green	2011-08-07	Karen Wright		Male	near salt wells;vervain ;mid 80s sunny					Wyoming, New York, US
Melissodes druriellus	42.8453	-78.1707	Dave Green	2011-08-07	Karen Wright		Male	near salt wells;vervain ;mid 80s sunny					Wyoming, New York, US
Melissodes druriellus	33.9243	-83.3093	Sam Droege	2011-10-08	Sam Droege		Male	netted in field with goldenrod and blooming camphor weed					Clarke, Georgia, US
Melissodes druriellus	38.9783	-76.6214	Leslie Gerlich	2011-09-10	Karen Wright		Male	10 fy 10 fb 10 w bowls set out 5m apart in powerline right of way;sunny					Anne Arundel, Maryland, US
Melissodes druriellus	39.3914	-81.4201	JANE WHITAKER		Sam Droege		Female	16 oz traps.6 white, 6 Fl. blue, 6 fl. yellow					Wood, West Virginia, US
Melissodes druriellus	44.879	-68.6528	Laura Kenefic		Michael Orr		Female	Forest Service Experimental Traps;Glycol traps;12 ounce cups , 3 white, 3 fl blue, 3 fl. yellow;located in their headquarters area					Penobscot, Maine, US
Melissodes druriellus	44.879	-68.6528	Laura Kenefic		Michael Orr		Female	Forest Service Experimental Traps;Glycol traps;12 ounce cups , 3 white, 3 fl blue, 3 fl. yellow;located in their headquarters area					Penobscot, Maine, US
Melissodes druriellus	42.3273	-70.9255	Jessica Rykken		Michael Orr		Female	10flyl;10flbl;10white					Suffolk, Massachusetts, US
Melissodes druriellus	42.328	-70.9271	Jessica Rykken		Michael Orr		Female	10flyl;10flbl;10white					Suffolk, Massachusetts, US
Melissodes druriellus	42.328	-70.9271	Jessica Rykken		Michael Orr		Female	10flyl;10flbl;10white					Suffolk, Massachusetts, US
Melissodes druriellus	38.8742	-76.7021	Sam Droege	2010-10-10	Sam Droege		Female	Asters in full bloom;80's sunny ;Lots of bees					Prince George's, Maryland, US
Melissodes druriellus	38.8742	-76.7021	Sam Droege	2010-10-10	Sam Droege		Female	Asters in full bloom;80's sunny ;Lots of bees					Prince George's, Maryland, US
Melissodes druriellus	38.8742	-76.7021	Sam Droege	2010-10-10	Sam Droege		Female	Asters in full bloom;80's sunny ;Lots of bees					Prince George's, Maryland, US
Melissodes druriellus	38.8742	-76.7021	Sam Droege	2010-10-10	Sam Droege		Female	Asters in full bloom;80's sunny ;Lots of bees					Prince George's, Maryland, US
Melissodes druriellus	39.5248	-79.4809	Jane Whitaker	2010-08-28	Sam Droege		Female	Netted on Goldenrod and Veronia					Garrett, Maryland, US
Melissodes druriellus	38.1542	-80.2553	Jane Whitaker	2010-09-05	Sam Droege		Female						Pocaho, West Virginia, US
Melissodes druriellus	39.0164	-76.8515	Sam Droege and Jelle Devalez	2010-10-01	Sam Droege		Female	Sunny low 80's asters in full bloom goldenrod on its way out					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8515	Sam Droege and Jelle Devalez	2010-10-01	Sam Droege		Female	Sunny low 80's asters in full bloom goldenrod on its way out					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8515	Sam Droege and Jelle Devalez	2010-10-01	Sam Droege		Male	Sunny low 80's asters in full bloom goldenrod on its way out					Prince George's, Maryland, US
Melissodes druriellus	38.8784	-76.6722	Sam Droege	2010-09-25	Sam Droege		Female	Milt's Gravel Pit					Anne Arundel, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Karen Wright		Male	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.0164	-76.8511	Sam Droege	2010-09-21	Sam Droege		Female	National RCS grounds and flower/plant trials;sunny 80s					Prince George's, Maryland, US
Melissodes druriellus	39.2299	-78.4629	Sam Droege	2010-08-20	Karen Wright		Male	Collected around camp, but especially in a big ironweed patch near the river;cloudy upper 80s					Hampshire, West Virginia, US
Melissodes druriellus	39.2299	-78.4629	Sam Droege	2010-08-20	Karen Wright		Male	Collected around camp, but especially in a big ironweed patch near the river;cloudy upper 80s					Hampshire, West Virginia, US
Melissodes druriellus	39.2299	-78.4629	Sam Droege	2010-08-20	Karen Wright		Male	Collected around camp, but especially in a big ironweed patch near the river;cloudy upper 80s					Hampshire, West Virginia, US
Melissodes druriellus	38.928	-76.6738	Sam Droege	2010-09-06	Sam Droege		Female	Golf Course - old gravel pit area.  Lots of lespediza, some maryland goldenaster and a variety of other things.					Anne Arundel, Maryland, US
Melissodes druriellus	38.928	-76.6738	Sam Droege	2010-09-06	Sam Droege		Female	Golf Course - old gravel pit area.  Lots of lespediza, some maryland goldenaster and a variety of other things.					Anne Arundel, Maryland, US
Melissodes druriellus	38.928	-76.6738	Sam Droege	2010-09-06	Sam Droege		Male	Golf Course - old gravel pit area.  Lots of lespediza, some maryland goldenaster and a variety of other things.					Anne Arundel, Maryland, US
Melissodes druriellus	38.928	-76.6738	Sam Droege	2010-09-06	Sam Droege		Female	Golf Course - old gravel pit area.  Lots of lespediza, some maryland goldenaster and a variety of other things.					Anne Arundel, Maryland, US
Melissodes druriellus	38.928	-76.6738	Sam Droege	2010-09-06	Sam Droege		Female	Golf Course - old gravel pit area.  Lots of lespediza, some maryland goldenaster and a variety of other things.					Anne Arundel, Maryland, US
Melissodes druriellus	38.8789	-76.6687	Sam Droege	2010-09-06	Sam Droege		Female	Milt's sand pit					Anne Arundel, Maryland, US
Melissodes druriellus	39.2243	-78.4578	Sam Droege		Karen Wright		Male	Narrow field with wingstem put out a series of 3.25 ounce bowls and filled them with prop. glycol, some spilled, many skippers in blue bowl traps, number of traps around 15 or so					Hampshire, West Virginia, US
Melissodes druriellus	39.2243	-78.4578	Elise and Molly Reeder	2010-08-21	Sam Droege		Male	fl. blue, fl. yellow, white bowls placed in lawn of Timber Ridge Camp, Sunny/partially cloudy, conditions very dry, # bowls not recorded					Hampshire, West Virginia, US
Melissodes druriellus	39.2243	-78.4578	Elise and Molly Reeder	2010-08-21	Sam Droege		Female	fl. blue, fl. yellow, white bowls placed in lawn of Timber Ridge Camp, Sunny/partially cloudy, conditions very dry, # bowls not recorded					Hampshire, West Virginia, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7531	-87.5474	Caroline Gottschalk-Druschke		Rob Jean		Male	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Rainbow Beach 3111 E. 77th St.;Collection Site Area = [blank];Weather = partly cloudy;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	41.7764	-87.5842	Caroline Gottschalk-Druschke	2009-10-19	Rob Jean		Female	Pan traps = (3) uv white, (3) uv yellow, (3) uv blue;Address = Jackson edible 6401 S. Stony Island Ave. Chicago, IL;Collection Site Area = [blank];Weather = sunny;Plants in yard = [blank];2m x 2m grid = Yes;Missing cups = No;Comments = [blank];Diagram = [blank]					Cook, Illinois, US
Melissodes druriellus	32.1392	-81.1395	Will Carver	2009-10-30	Sam Droege		Female	B2 - ;bowl color not noted;time in field varied but more than 24 hours					Chatham, Georgia, US
Melissodes druriellus	32.1392	-81.1395	Will Carver	2009-10-22	Sam Droege		Female	B2 - ;bowl color not noted;time in field varied but more than 24 hours					Chatham, Georgia, US
Melissodes druriellus	32.1392	-81.1395	Will Carver	2009-10-30	Sam Droege		Female	B2 - ;bowl color not noted;time in field varied but more than 24 hours					Chatham, Georgia, US
Melissodes druriellus	39.2775	-80.908	Jane Whitaker	2009-09-24	Sam Droege		Female	Netted on Goldenrod and Asters					Doddridge, West Virginia, US
Melissodes druriellus	39.2775	-80.908	Jane Whitaker	2009-09-24	Sam Droege		Female	Netted on Goldenrod and Asters					Doddridge, West Virginia, US
Melissodes druriellus	39.074833	-79.627667	Jane Whitaker	2009-09-11	Karen Wright		Male	Netted on Solidago					Tucker, West Virginia, US
Melissodes druriellus	39.045833	-79.606833	Jane Whitaker	2009-09-11	Karen Wright		Male	Captured on Solidago					Tucker, West Virginia, US
Melissodes druriellus	38.784	-75.544	J Kroon		Sam Droege		Female	5 yellow, 5 blue, 5 white bowls					Sussex, Delaware, US
Melissodes druriellus	41.5965	-79.9733	Adrianne Smith;Olivia Webb		Sam Droege		Male	0.19 acres; 2% woody;5 blue, 5 yellow, 5 white: 14 recovered;Partly cloudy					Pennsylvania, US
Melissodes druriellus	41.5965	-79.9733	Adrianne Smith;Olivia Webb		Sam Droege		Male	0.19 acres; 2% woody;5 blue, 5 yellow, 5 white: 14 recovered;Partly cloudy					Pennsylvania, US
Melissodes druriellus	43.5832	-70.2582	Elizabeth Wolff		Sam Droege		Female	Measured 2.53 acres; ~5% woody;;5 blue, 5 yellow, 5 white: all recovered;Sunny, 80s F, breezy;lots of butterflies					Maine, US
Melissodes druriellus	39.4786	-74.4356	Al Mortens;Debbie Conrad, Charles Barreca		Karen Wright		Female	30 acres;5% woody;5 blue, 5 yellow, 5 white: all recovered, but one overturned and empty;Partly cloudy, 76 F, winds N 3-5 mph					New Jersey, US
Melissodes druriellus	38.589	-82.222833	Jane Whitaker	2008-09-29	Karen Wright		Male	Bees on Starved Aster.  Sunny78F					Cabell, West Virginia, US
Melissodes druriellus	38.589333	-82.2285	Jane Whitaker	2008-09-29	Sam Droege		Male	Calico Aster and Wingstem. Sunny 78					Cabell, West Virginia, US
Melissodes druriellus	38.8778	-76.6695	Sam Droege	2007-09-02	Sam Droege		Female	Milt's Sand Pit, Sunny low 80's, blooming composites and goldenrod predominate, late   afternoon collecting					Anne Arundel, Maryland, US
Melissodes druriellus	38.2068	-75.1591	Sam Droege	2006-09-19	Sam Droege		Female	Stop 6;5w 5y 5b;0 missing;life in marsh parking lot in open area along road					Worcester, Maryland, US
Melissodes druriellus	34.6012	-80.2581	Laura Housh	2006-10-25	Sam Droege		Female	Honkers Lake Dam					Chesterfield, South Carolina, US
Melissodes druriellus	34.6012	-80.2581	Laura Housh	2006-10-25	Sam Droege		Female	Honkers Lake Dam					Chesterfield, South Carolina, US
Melissodes druriellus	38.2068	-75.1591	Sam Droege	2006-09-19	Sam Droege		Female	Stop 6;5w 5y 5b;0 missing;life in marsh parking lot in open area along road					Worcester, Maryland, US
Melissodes druriellus	34.5749	-80.2368	Laura Housh	2006-10-25	Sam Droege		Female	Lake Bee Dam					Chesterfield, South Carolina, US
Melissodes druriellus	38.2068	-75.1591	Sam Droege	2006-09-19	Sam Droege		Female	Stop 6;5w 5y 5b;0 missing;life in marsh parking lot in open area along road					Worcester, Maryland, US
Melissodes druriellus	38.2068	-75.1591	Sam Droege	2006-09-19	Sam Droege		Male	Stop 6;5w 5y 5b;0 missing;life in marsh parking lot in open area along road					Worcester, Maryland, US
Melissodes druriellus	38.2068	-75.1591	Sam Droege	2006-09-19	Sam Droege		Female	Stop 6;5w 5y 5b;0 missing;life in marsh parking lot in open area along road					Worcester, Maryland, US
Melissodes druriellus	38.8777	-76.6739	Sam Droege	2006-10-01	Sam Droege		Female	Milt's Gravel Pit;Sunny 70's  goldenrod the main plant bees found on.					Anne Arundel, Maryland, US
Melissodes druriellus	38.2034	-75.1542	Sam Droege	2006-09-19	Sam Droege		Female	Collected around the National Park lands on the island, 70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent					Worcester, Maryland, US
Melissodes druriellus	38.2034	-75.1542	Sam Droege	2006-09-19	Sam Droege		Male	Collected around the National Park lands on the island, 70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent					Worcester, Maryland, US
Melissodes druriellus	38.2496	-75.1582	Sam Droege	2006-09-19	Sam Droege		Male	Stop 2;5w 5y 5b;0 missing;70's edge of old field along park housing in mown grass					Worcester, Maryland, US
Melissodes druriellus	38.2034	-75.1542	Sam Droege	2006-09-19	Sam Droege		Female	Collected around the National Park lands on the island, 70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent					Worcester, Maryland, US
Melissodes druriellus	38.2034	-75.1542	Sam Droege	2006-09-19	Sam Droege		Male	Collected around the National Park lands on the island, 70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent					Worcester, Maryland, US
Melissodes druriellus	38.2034	-75.1542	Sam Droege	2006-09-19	Sam Droege		Male	Collected around the National Park lands on the island, 70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent					Worcester, Maryland, US
Melissodes druriellus	38.1616	-75.1704	Sam Droege	2006-09-20	Sam Droege		Male	Collected around the National Park lands on the island, 60-70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent, most of the collecting occured south of the paved roads					Worcester, Maryland, US
Melissodes druriellus	38.1616	-75.1704	Sam Droege	2006-09-20	Sam Droege		Male	Collected around the National Park lands on the island, 60-70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent, most of the collecting occured south of the paved roads					Worcester, Maryland, US
Melissodes druriellus	38.1616	-75.1704	Sam Droege	2006-09-20	Sam Droege		Male	Collected around the National Park lands on the island, 60-70's, sunny, collected off of some early goldenrod blooms, bacharris or iva shrub, thoroughwort, and gerardia, in general few bees apparent, most of the collecting occured south of the paved roads					Worcester, Maryland, US
Melissodes druriellus	38.9623	-76.7501	Katherine Hutson	2006-09-17	Sam Droege		Female	Sunny, 75 degrees;Fox Hill Park (1)- Bowie, MD;10 W;Missing- 0;1/3 teaspoon salt added to one gallon of water					Prince George's, Maryland, US
Melissodes druriellus	38.9623	-76.7501	Katherine Hutson	2006-09-17	Sam Droege		Female	Sunny, 75 degrees;Fox Hill Park (1)- Bowie, MD;10 W;Missing- 0;1/3 teaspoon salt added to one gallon of water					Prince George's, Maryland, US
Melissodes druriellus	38.5904	-75.6384	Cathy Stragar	2006-09-09	Sam Droege		Female						Sussex, Delaware, US
Melissodes druriellus	38.97	-76.7934	Zack Riegel		Sam Droege		Female	10w;1 missing;Honey;trial 9					Prince George's, Maryland, US
Melissodes druriellus	43.2856	-73.64	Eric Soderholm	2005-08-17	Sam Droege		Female	5 blue;road;0 missing					saratoga, New York, US
Melissodes druriellus	43.2856	-73.64	Eric Soderholm	2005-08-17	Sam Droege		Female	5 white;field;0 missing					Saratoga, New York, US
Melissodes druriellus	41.1531	-72.2457	Sam Droege	2005-09-08	Sam Droege		Female	sunny in the low 80's low wind;collected on large goldenrod patch near entrance gate.					Suffolk, New York, US
Melissodes druriellus	41.0371	-71.9248	Sam Droege	2005-09-07	Sam Droege		Female	sunny in the low 80's low wind;collected mostly along the top of the bluffs and a bit along the trails.  Mostly goldenrod in bloom.					Suffolk, New York, US
Melissodes druriellus	41.0371	-71.9248	Sam Droege	2005-09-07	Sam Droege		Male	sunny in the low 80's low wind;collected mostly along the top of the bluffs and a bit along the trails.  Mostly goldenrod in bloom.					Suffolk, New York, US
Melissodes druriellus	41.0371	-71.9248	Sam Droege	2005-09-07	Sam Droege		Female	sunny in the low 80's low wind;collected mostly along the top of the bluffs and a bit along the trails.  Mostly goldenrod in bloom.					Suffolk, New York, US
Melissodes druriellus	38.9138	-76.9403	S Rudy	2004-09-21	Sam Droege		Female	Kenilworth Aquatic Gardens (#30)					District of Columbia, District of Columbia, US
Melissodes druriellus	39.322	-78.4302	Sam Droege	2004-08-15	Sam Droege		Female	collecting throughout the county near buffalo gap					Hampshire, West Virginia, US
Melissodes druriellus	38.7839	-76.7014	Ben Hollister	2004-09-21	Sam Droege		Male	collected off of Solidago in meadows at v.center					Anne Arundel, Maryland, US
Melissodes druriellus			Sam Droege	2003-09-03	Sam Droege		Female	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus	34.984	-80.449	Robert Jackowski		Karen Wright		Female	Taken during the fall but the original labels had gotten mixed up.					Union, North Carolina, US
Melissodes druriellus			Sam Droege	2003-09-03	Karen Wright		Male	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus			Sam Droege	2003-09-03	Karen Wright		Male	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus			Sam Droege	2003-09-03	Sam Droege		Male	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus			Sam Droege	2003-09-03	Sam Droege		Male	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus			Sam Droege	2003-09-03	Sam Droege		Male	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus			Sam Droege	2003-09-03	Sam Droege		Male	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus			Sam Droege	2003-09-03	Sam Droege		Male	Timezone uncertain due to lack of spatial coordinates. Can be approximated as local time based on any other included spatial information (e.g. stateProvince) | These data were taken from a 24 hour period of collecting along a transect that  started in Garrett County and then went east to and ending point NW of Baltimore.   Bowls were put out regularly every few miles with what was I think a 9 bowl cluster with fl y b and regular white 3 of each.  Unfortunately the site locality lables were prematurely pulled and that information to location lost.  Weather was a bit cool and cloudy for part of the time and appeared to decrease the catch in far western MD					Maryland, US
Melissodes druriellus	38.4781	-75.812	Sam Droege	2001-08-11	Sam Droege		Male	along old road grade over the river, hibiscus and pickerel weed present					Wicomico, Maryland, US
Melissodes druriellus	38.9123	-76.755	HaramisArcher		Karen Wright		Female	web experiment;Sunny and clear					Prince George's, Maryland, US
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
