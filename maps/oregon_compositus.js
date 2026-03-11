// =========================
// Melissodes compositus Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_compositus"; // Your species-specific placeholder
const MAP_ID = "oregon_compositus";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes compositus	33.3241	-81.4893	Sabrie Breland	2016-09-25	Jason Gibbs		Female				https://www.gbif.org/occurrence/4540146273		Barnwell, South Carolina, US
Melissodes compositus	33.3204	-81.6127	S. McCann	2016-10-14	Jason Gibbs		Female				https://www.gbif.org/occurrence/4540093136		Aiken, South Carolina, US
Melissodes compositus	33.1797	-81.5465	Sabrie Breland	2016-10-03	Jason Gibbs		Female				https://www.gbif.org/occurrence/4540094010		Barnwell, South Carolina, US
Melissodes compositus	33.3758	-81.5278	S. McCann	2016-10-12	Jason Gibbs		Female				https://www.gbif.org/occurrence/4540255482		Aiken, South Carolina, US
Melissodes compositus	33.1797	-81.5465	Sabrie Breland	2016-10-03	Jason Gibbs		Female				https://www.gbif.org/occurrence/4540303899		Barnwell, South Carolina, US
Melissodes compositus	37.786498	-120.992509	C. Cumberland	2015-07-19	K.W. Wright	Adult	Male			University of New Mexico	https://www.gbif.org/occurrence/2344659794		San Joaquin, California, US
Melissodes compositus	47.6792	-111.3083	S.R. Dawes	2014-08-18	S.J. Burrows 2015		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421549556		Cascade, Montana, US
Melissodes compositus	47.6692	-111.3292	S.R. Dawes	2014-08-04	S.J. Burrows 2015		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421550267		Cascade, Montana, US
Melissodes compositus	47.6803	-111.3033	S.R. Dawes	2014-08-04	S.J. Burrows 2015		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421555525		Cascade, Montana, US
Melissodes compositus	47.6803	-111.3033	S.R. Dawes	2014-08-04	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421555527		Cascade, Montana, US
Melissodes compositus	35.09522	-106.3807	KW Wright	2012-08-18	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274035		Socorro, New Mexico, US
Melissodes compositus	35.09522	-106.3807	KW Wright	2012-08-18	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274042		Socorro, New Mexico, US
Melissodes compositus	35.09522	-106.3807	KW Wright	2012-08-18	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274043		Socorro, New Mexico, US
Melissodes compositus	35.2371	-112.1069	KW Wright	2012-09-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274021		Coconino, Arizona, US
Melissodes compositus	35.2371	-112.1069	KW Wright	2012-09-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274034		Coconino, Arizona, US
Melissodes compositus			ES Wyman	2012-09-02	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274040		Hidalgo, New Mexico, US
Melissodes compositus	35.2371	-112.1069	KW Wright	2012-09-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274041		Coconino, Arizona, US
Melissodes compositus	35.1255	-106.3326	KB Miller	2012-09	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918279146		Bernalillo, New Mexico, US
Melissodes compositus	35.151333	-106.6785	K Wetherill	2009-09-12	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274038		Bernalillo, New Mexico, US
Melissodes compositus			KB Miller	2007-08-14	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274037		Bernalillo, New Mexico, US
Melissodes compositus	37.9829	-111.1782	O.J. Messinger	2003-08-19	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421470735		Garfield, Utah, US
Melissodes compositus	38	-111	O.J. Messinger	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658943756		Garfield, Utah, US
Melissodes compositus			PF Torchio	2002-09-16	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918274039		Sandoval, New Mexico, US
Melissodes compositus	31.9039	-109.2117	Brooks, Robert	2000-08-27	Wright, Karen	Adult		white, yellow, blue pan traps colored pan traps	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658079448		Cochise, Arizona, US
Melissodes compositus	32.8328	-108.2331	Brooks, R & Michener, CD	1999-09-17	Wright, Karen	Adult		on Cosmos parviflorus	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658077853		Grant, New Mexico, US
Melissodes compositus	31.6619	-108.8378	Brooks, Robert	1999-09-22	Wright, Karen	Adult		on Heterotheca psammophila	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658079135		Hidalgo, New Mexico, US
Melissodes compositus	31.5922	-109.24	Shinn, Alvin	1985-09-14	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931878		Cochise, Arizona, US
Melissodes compositus	31.5922	-109.24	Shinn, Alvin	1985-09-14	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931900		Cochise, Arizona, US
Melissodes compositus			Shinn, Alvin	1985-09-13	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931922		Cochise, Arizona, US
Melissodes compositus	31.5922	-109.24	Shinn, Alvin	1985-09-14	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931935		Cochise, Arizona, US
Melissodes compositus	37.37	-112.85	C.R. Nelson	1981-09-02							https://www.gbif.org/occurrence/658943757		Kane, Utah, US
Melissodes compositus	31.9204	-109.7622	Michener & Anderson	1979-10-14	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931875		Cochise, Arizona, US
Melissodes compositus	45.0231	-104.4119	Michener, Charles	1978-08-10	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931904		Carter, Montana, US
Melissodes compositus			unknown	1977-08-31	Wright, Karen	Adult		SWRS	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931840		Cochise, Arizona, US
Melissodes compositus			Brooks, Robert	1977-08-27	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931869		Santa Cruz, Arizona, US
Melissodes compositus			Brooks, Robert	1977-08-27	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931916		Santa Cruz, Arizona, US
Melissodes compositus			Brooks, Robert	1977-08-27	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931957		Santa Cruz, Arizona, US
Melissodes compositus	31.9136	-109.0216	Brooks, Robert	1977-09-10	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931923		Cochise, Arizona, US
Melissodes compositus	31.94898	-108.80728	E. G. Linsley, J. M. Linsley	1974-08		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1061041866		Hidalgo County, New Mexico, US
Melissodes compositus	43.4417	-108.1725	Michener, Charles	1969-08-20	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836722		Fremont, Wyoming, US
Melissodes compositus	44.0169	-107.9547	Michener, Charles	1969-08-21	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836739		Washakie, Wyoming, US
Melissodes compositus	43.4417	-108.1725	Michener, Charles	1969-08-20	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836759		Fremont, Wyoming, US
Melissodes compositus	43.41722	-108.17694	C.D. Michener	1969-08-20		Adult					https://www.gbif.org/occurrence/3801940510		Fremont, Wyoming, US
Melissodes compositus	37.3489	-108.5307	Michener & McGee	1968-08-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836778		Montezuma, Colorado, US
Melissodes compositus			Thorp, R	1967-09-24	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931897		Nevada, California, US
Melissodes compositus	37.4883	-121.2058	Menke, A	1966-05-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931909		Stanislaus, California, US
Melissodes compositus	40.3916	-111.8508		1965-08-25							https://www.gbif.org/occurrence/658943750		Utah, Utah, US
Melissodes compositus	41.8375	-111.8261		1965-08-26							https://www.gbif.org/occurrence/658943779		Cache, Utah, US
Melissodes compositus	41.8375	-111.8261		1965-08-11							https://www.gbif.org/occurrence/658943780		Cache, Utah, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943760		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943761		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943762		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943763		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943764		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943765		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943766		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943767		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943768		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943769		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70592	G.E. Bohart	1965-09-21							https://www.gbif.org/occurrence/658943770		San Juan, New Mexico, US
Melissodes compositus	31.29087	-110.95523	A. E. Michelbacher	1965-09-28		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1061041804		Sonora, MX
Melissodes compositus	36.28472	-108.70528	G.E. Bohart	1965-09-21		Adult					https://www.gbif.org/occurrence/3801337534		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70528	G.E. Bohart	1965-09-21		Adult					https://www.gbif.org/occurrence/3801374567		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70528	G.E. Bohart	1965-09-21		Adult					https://www.gbif.org/occurrence/3801852518		San Juan, New Mexico, US
Melissodes compositus	36.28472	-108.70528	G.E. Bohart	1965-09-21		Adult					https://www.gbif.org/occurrence/3801856536		San Juan, New Mexico, US
Melissodes compositus	37.044	-107.8794	Michener, Charles	1964-08-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836727		La Plata, Colorado, US
Melissodes compositus	37.044	-107.8794	Michener, Charles	1964-08-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836728		La Plata, Colorado, US
Melissodes compositus	37.044	-107.8794	Michener, Charles	1964-08-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836732		La Plata, Colorado, US
Melissodes compositus	37.044	-107.8794	Michener, Charles	1964-08-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836734		La Plata, Colorado, US
Melissodes compositus	42.0988	-111.7346		1963-08-20							https://www.gbif.org/occurrence/658943748		Franklin, Idaho, US
Melissodes compositus	42.0988	-111.7346		1963-08-20							https://www.gbif.org/occurrence/658943749		Franklin, Idaho, US
Melissodes compositus	43.6529	-106.6241	G.E. Bohart, P.F. Torchio	1963-08-04							https://www.gbif.org/occurrence/658943772		Johnson, Wyoming, US
Melissodes compositus	43.6529	-106.6241	G.E. Bohart, P.F. Torchio	1963-08-04							https://www.gbif.org/occurrence/658943773		Johnson, Wyoming, US
Melissodes compositus	43.6529	-106.6241	G.E. Bohart, P.F. Torchio	1963-08-04							https://www.gbif.org/occurrence/658943774		Johnson, Wyoming, US
Melissodes compositus	43.6529	-106.6241	G.E. Bohart, P.F. Torchio	1963-08-04							https://www.gbif.org/occurrence/658943775		Johnson, Wyoming, US
Melissodes compositus	43.6529	-106.6241	G.E. Bohart, P.F. Torchio	1963-08-04							https://www.gbif.org/occurrence/658943776		Johnson, Wyoming, US
Melissodes compositus	43.6529	-106.6241	G.E. Bohart, P.F. Torchio	1963-08-04							https://www.gbif.org/occurrence/658943777		Johnson, Wyoming, US
Melissodes compositus	44.8614	-106.9911	G.E. Bohart, P.F. Torchio	1963-08-06							https://www.gbif.org/occurrence/658943778		Sheridan, Wyoming, US
Melissodes compositus			G.E. Bohart, P.F. Torchio	1963-08-04		Adult					https://www.gbif.org/occurrence/3801338547		Johnson, Wyoming, US
Melissodes compositus	35.14722	-107.85083		1963-08-20		Adult					https://www.gbif.org/occurrence/3801851565		Cibola, New Mexico, US
Melissodes compositus	36.71111	-107.98451	G.E. Bohart	1963-09-06							https://www.gbif.org/occurrence/658943759		San Juan, New Mexico, US
Melissodes compositus			G.E. Bohart	1963-09-06		Adult					https://www.gbif.org/occurrence/3801371539		New Mexico, US
Melissodes compositus			Knowlton, George	1962-08-11	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836700		Franklin, Idaho, US
Melissodes compositus			Knowlton, George	1962-08-11	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836736		Franklin, Idaho, US
Melissodes compositus	40.61	-116.2	T.R. Haig	1962-09-11		Adult					https://www.gbif.org/occurrence/3801376529		Eureka, Nevada, US
Melissodes compositus	30.81451	-85.23263	W.J. Hanson	1961-08-21							https://www.gbif.org/occurrence/658943753		Jackson, Florida, US
Melissodes compositus	43.5314	-116.2337	P.F. Torchio	1961-08-23							https://www.gbif.org/occurrence/658943758		Ada, Idaho, US
Melissodes compositus	38.8003	-112.0056	Knowlton, George	1961-08-17	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836716		Sevier, Utah, US
Melissodes compositus			Knowlton, George	1961-08-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836723		Cache, Utah, US
Melissodes compositus			A.S. Menke	1960-09-24		Adult					https://www.gbif.org/occurrence/3801340539		
Melissodes compositus	39.32	-119.81	A.S. Menke	1960-09-08		Adult					https://www.gbif.org/occurrence/3801938534		Washoe, Nevada, US
Melissodes compositus	38.3969	-113.01	Knowlton, George	1958-08-19	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836699		Beaver, Utah, US
Melissodes compositus	31.9144	-109.2259	P.D. Hurd	1958-08-31		Adult					https://www.gbif.org/occurrence/3801854533		Cochise, Arizona, US
Melissodes compositus	31.88401	-109.20606	E. G. Linsley	1958-09-09		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1061041871		Cochise County, Arizona, US
Melissodes compositus	31.8819	-109.2028	P.D. Hurd	1958-09-03		Adult					https://www.gbif.org/occurrence/3801339527		Cochise, Arizona, US
Melissodes compositus	31.8819	-109.2028	P.D. Hurd	1958-09-03		Adult					https://www.gbif.org/occurrence/3801375533		Cochise, Arizona, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836711		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836715		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836726		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836730		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836738		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836742		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836744		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836746		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836757		Montezuma, Colorado, US
Melissodes compositus	37.3489	-108.5853	Michener, Charles	1957-08-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836793		Montezuma, Colorado, US
Melissodes compositus	37.34889	-108.58528	C.D. Michener	1957-08-08		Adult					https://www.gbif.org/occurrence/3801375535		Montezuma, Colorado, US
Melissodes compositus	34.24389	-116.91056	Evert I. Schlinger	1957-08-24		Adult					https://www.gbif.org/occurrence/3801858535		San Bernardino, California, US
Melissodes compositus	35.28278	-120.65861	J.C. Hall	1956-09-09		Adult					https://www.gbif.org/occurrence/3801939514		San Luis Obispo, California, US
Melissodes compositus	32.3939	-109.77	GD Butler	1956-09-24							https://www.gbif.org/occurrence/4070491057		Graham, Arizona, US
Melissodes compositus	32.3939	-109.77	GD Butler	1956-09-24							https://www.gbif.org/occurrence/4070492065		Graham, Arizona, US
Melissodes compositus	32.3939	-109.77	GD Butler	1956-09-24							https://www.gbif.org/occurrence/4070494060		Graham, Arizona, US
Melissodes compositus	32.3939	-109.77	GD Butler	1956-09-24							https://www.gbif.org/occurrence/4070494061		Graham, Arizona, US
Melissodes compositus	32.3939	-109.77	GD Butler	1956-09-24							https://www.gbif.org/occurrence/4070495057		Graham, Arizona, US
Melissodes compositus	32.3939	-109.77	GD Butler	1956-09-24							https://www.gbif.org/occurrence/4070495058		Graham, Arizona, US
Melissodes compositus	31.93333	-109.26278	G.E. Bohart	1955-09-13							https://www.gbif.org/occurrence/658943771		Cochise, Arizona, US
Melissodes compositus	35.0941	-111.6788	GD Butler	1955-09-13							https://www.gbif.org/occurrence/4070489066		Coconino, Arizona, US
Melissodes compositus	34.9008	-111.7847	GD Butler	1955-09-14							https://www.gbif.org/occurrence/4070490056		Pinal, Arizona, US
Melissodes compositus	35.0941	-111.6788	GD Butler	1955-09-13							https://www.gbif.org/occurrence/4070491058		Coconino, Arizona, US
Melissodes compositus	35.0941	-111.6788	GD Butler	1955-09-13							https://www.gbif.org/occurrence/4070493063		Coconino, Arizona, US
Melissodes compositus	35.0941	-111.6788	GD Butler	1955-09-13							https://www.gbif.org/occurrence/4070493157		Coconino, Arizona, US
Melissodes compositus	35.0941	-111.6788	GD Butler	1955-09-13							https://www.gbif.org/occurrence/4070496061		Coconino, Arizona, US
Melissodes compositus			Knowlton, George	1954-08-19	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836692		Franklin, Idaho, US
Melissodes compositus	41.71	-111.9769	Knowlton, George	1954-08-25		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836697		Cache, Utah, US
Melissodes compositus			Knowlton & Collman	1954-08-28		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836701		Franklin, Idaho, US
Melissodes compositus			Knowlton, George	1954-08-19		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836702		Franklin, Idaho, US
Melissodes compositus			Knowlton, George	1954-08-19	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836704		Franklin, Idaho, US
Melissodes compositus			Knowlton, George	1954-08-19		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836706		Franklin, Idaho, US
Melissodes compositus	41.7356	-111.8336	Knowlton, George	1954-08-27		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836712		Cache, Utah, US
Melissodes compositus	42.136	-111.6989	Knowlton, George	1954-08-28		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836713		Franklin, Idaho, US
Melissodes compositus			Knowlton, George	1954-08-19		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836720		Franklin, Idaho, US
Melissodes compositus			Knowlton, George	1954-08-19		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836731		Franklin, Idaho, US
Melissodes compositus	41.7356	-111.8336	Knowlton, George	1954-08-27		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836737		Cache, Utah, US
Melissodes compositus			Knowlton, George	1954-08-19		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836740		Franklin, Idaho, US
Melissodes compositus	42.136	-111.6989	Knowlton, George	1954-08-28		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836753		Franklin, Idaho, US
Melissodes compositus	34.9068	-112.3309	GD Butler	1954-10-13							https://www.gbif.org/occurrence/4070495056		Yavapai, Arizona, US
Melissodes compositus	31.48899	-110.40814	Butler, G	1953-08-30	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836685		Cochise, Arizona, US
Melissodes compositus	41.7675	-111.7811	B.A. Baldwin	1952-07-27							https://www.gbif.org/occurrence/658943752		Cache, Utah, US
Melissodes compositus	41.9242	-112.0872	Baldwin, B	1952-07-27	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836721		Cache, Utah, US
Melissodes compositus	41.7675	-111.7811	B.A. Baldwin	1951-07-27							https://www.gbif.org/occurrence/658943751		Cache, Utah, US
Melissodes compositus	37.31	-112.59	G.F. Knowlton	1950-08-17							https://www.gbif.org/occurrence/658943754		Kane, Utah, US
Melissodes compositus			Knowlton, George	1949-08-24		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836718		Box Elder, Utah, US
Melissodes compositus	33.24531	-116.4239	G.F. Knowlton, D.R. Maddock	1943-08-04							https://www.gbif.org/occurrence/658943755		SanDiego, California, US
Melissodes compositus			Michener, Charles	1935-08-13	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836719		Bernalillo, New Mexico, US
Melissodes compositus	39.7492	-104.7228	Lutz, F	1934-08-23		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836724		Montezuma, Colorado, US
Melissodes compositus			Lutz, F	1934-08-21	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836733		McKinley, New Mexico, US
Melissodes compositus			Lutz, F	1934-08-21		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836756		McKinley, New Mexico, US
Melissodes compositus	35.52806	-108.74194	F.E. Lutz	1934-08-21		Adult					https://www.gbif.org/occurrence/3801336548		McKinley, New Mexico, US
Melissodes compositus	38.8339	-104.8208	Tucker, E			Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836749		El Paso, Colorado, US
Melissodes compositus	38.8339	-104.8208	Tucker, E			Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092836770		El Paso, Colorado, US
Melissodes compositus											https://www.gbif.org/occurrence/1318082285		
Melissodes compositus	38.8339	-104.821	E. Tucker				Male				https://www.gbif.org/occurrence/1321994783		Colorado, US
Melissodes compositus	31.795	-109.061111	J. S. Ascher				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804573582		Cochise Co., Arizona, US
Melissodes compositus	31.628889	-109.203889	J. S. Ascher				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804573583		Cochise Co., Arizona, US
Melissodes compositus	32.252778	-109.831389	J. G. Rozen, J. S. Ascher, R. L. Staff & R. E. Edwards				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804574529		Cochise Co., Arizona, US
Melissodes compositus	31.493056	-109.338056	J. G. Rozen & J. S. Ascher				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804575586		Cochise Co., Arizona, US
Melissodes compositus	37.236944	-108.461944	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804616176		Montezuma Co., Colorado, US
Melissodes compositus	37.260278	-108.468333	D. Rockefeller				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804623266		Montezuma Co., Colorado, US
Melissodes compositus	37.260278	-108.468333	D. Rockefeller				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804626260		Montezuma Co., Colorado, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804627381		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804627382		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804627383		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804631530		McKinley Co., New Mexico, US
Melissodes compositus	37.260278	-108.468333	D. Rockefeller				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804631531		Montezuma Co., Colorado, US
Melissodes compositus	31.628889	-109.203889	J. G. Rozen & J. S. Ascher				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804713577		Cochise Co., Arizona, US
Melissodes compositus	31.690278	-109.131667	M. A. Cazier				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804713578		Cochise Co., Arizona, US
Melissodes compositus	31.576944	-109.256111	M. Favreau				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804713579		Cochise Co., Arizona, US
Melissodes compositus	31.660528	-108.8435	J. S. Ascher & D. S. Wilson				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804714454		Hidalgo Co., New Mexico, US
Melissodes compositus	31.660528	-108.8435	J. S. Ascher & D. S. Wilson				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804714455		Hidalgo Co., New Mexico, US
Melissodes compositus	32.252778	-109.831389	J. G. Rozen, J. S. Ascher, R. L. Staff & R. E. Edwards				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804714456		Cochise Co., Arizona, US
Melissodes compositus	31.416944	-108.929167	J. G. Rozen & S. Budick				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804716550		Hidalgo Co., New Mexico, US
Melissodes compositus	31.86	-109.032917	Molly G. Rightmyer				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804718619		Hidalgo Co., New Mexico, US
Melissodes compositus	31.835278	-109.030556	M. Favreau				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804720690		Hidalgo Co., New Mexico, US
Melissodes compositus	31.660528	-108.8435	J. S. Ascher & D. S. Wilson				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804722547		Hidalgo Co., New Mexico, US
Melissodes compositus	31.8825	-109.206111	J. S. Ascher				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804722548		Cochise Co., Arizona, US
Melissodes compositus	31.628889	-109.203889	J. G. Rozen & J. S. Ascher				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804725608		Cochise Co., Arizona, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804755024		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804755025		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804763238		McKinley Co., New Mexico, US
Melissodes compositus	37.236944	-108.461944	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804763239		Montezuma Co., Colorado, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804766217		McKinley Co., New Mexico, US
Melissodes compositus	35.23825	-111.670917	T. Cohn, P. Boone & M. A. Cazier				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804766342		Coconino Co., Arizona, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804766343		McKinley Co., New Mexico, US
Melissodes compositus	33.986556	-109.856389	W. J. Gertsch & M. A. Cazier				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804766344		Apache Co., Arizona, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804768412		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804770362		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804770363		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804770364		McKinley Co., New Mexico, US
Melissodes compositus	35.528056	-108.7425	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804770365		McKinley Co., New Mexico, US
Melissodes compositus											https://www.gbif.org/occurrence/3442475316		
Melissodes compositus					15650				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4424818560		Routt, Colorado, US
Melissodes compositus					15650				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425316586		Routt, Colorado, US
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159521		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159774		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159971		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160317		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160887		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160950		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160996		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161151		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161387		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161679		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161810		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161903		
Melissodes compositus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854162013		
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
