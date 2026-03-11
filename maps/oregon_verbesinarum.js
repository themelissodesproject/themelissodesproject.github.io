// =========================
// Melissodes verbesinarum Map Visualization
// =========================

(() => {   // <<< BEGIN IIFE — isolates everything

const SPECIES_PLACEHOLDER = "oregon_verbesinarum"; // Your species-specific placeholder
const MAP_ID = "oregon_verbesinarum";              // Unique ID for this map div

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes verbesinarum	33.02325	-114.61361	Horna Lowell, Eva; Deer, Ellie	2023-04-13							https://www.gbif.org/occurrence/5860514088		California, US
Melissodes verbesinarum	33.02325	-114.61361	Horna Lowell, Eva; Deer, Ellie	2023-04-13							https://www.gbif.org/occurrence/5860791641		California, US
Melissodes verbesinarum	33.02325	-114.61361	Horna Lowell, Eva; Allinghman, Rachel	2023-05-11							https://www.gbif.org/occurrence/5862763789		California, US
Melissodes verbesinarum	33.239216	-116.392624	Horna Lowell, Eva; Allinghman, Rachel	2023-05-10							https://www.gbif.org/occurrence/5863356283		California, US
Melissodes verbesinarum	32.749256	-115.84588	E. Horna Lowell, R. Allingham	2023-05-03							https://www.gbif.org/occurrence/5899885965		California, US
Melissodes verbesinarum	33.239216	-116.392624	E. Horna Lowell, R. Allingham	2023-05-01							https://www.gbif.org/occurrence/5900004172		California, US
Melissodes verbesinarum	33.02325	-114.61361	E. Horna Lowell, R. Allingham, S. Derkarabetian	2023-09-06							https://www.gbif.org/occurrence/5899927816		California, US
Melissodes verbesinarum	33.239	-116.393	Horna Lowell, Eva	2022-11-10							https://www.gbif.org/occurrence/5862381971		California, US
Melissodes verbesinarum	32.243	-111.168	Blake	2020-05-08	Buzz L. Hoffmann	Adult					https://www.gbif.org/occurrence/3441422546		Arizona, US
Melissodes verbesinarum	34.3325	-106.6328	J McLaughlin	2020-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276186		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	J McLaughlin	2020-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276187		Socorro, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	J McLaughlin	2020-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276188		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	J McLaughlin	2020-07	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276373		Socorro, New Mexico, US
Melissodes verbesinarum	46.8137	-117.016	Stephen Onayemi	2020-09-28	Joel D. Gardner	Adult	Male				https://www.gbif.org/occurrence/5141246792		Latah, Idaho, US
Melissodes verbesinarum	34.3431	-106.7417	J McLaughlin	2020-09	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276199		Socorro, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	J McLaughlin	2020-09	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276371		Socorro, New Mexico, US
Melissodes verbesinarum	35.443	-115.674	L. Packer	2019-06-10	Laurence Packer	Adult					https://www.gbif.org/occurrence/4916022073		California, US
Melissodes verbesinarum	35.443	-115.674	L. Packer	2019-06-10	Laurence Packer	Adult					https://www.gbif.org/occurrence/4918772565		California, US
Melissodes verbesinarum	34.335	-106.7219	KW Wright	2019-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276037		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2019-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276170		Socorro, New Mexico, US
Melissodes verbesinarum	34.335	-106.7219	KW Wright	2019-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276196		Socorro, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	J McLaughlin	2019-08	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276189		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	J McLaughlin	2019-09	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276043		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2018-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276194		Socorro, New Mexico, US
Melissodes verbesinarum	34.335	-106.7219	KW Wright	2018-10	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276049		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-07-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276033		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-07-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276041		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-07-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276056		Socorro, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	KW Wright	2016-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276146		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-07-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276192		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276207		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-07-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276214		Socorro, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	KW Wright	2016-07-24	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276215		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-07-01	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276217		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2016-10	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276358		Socorro, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	KW Wright	2015-06-27	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276375		Socorro, New Mexico, US
Melissodes verbesinarum	34.98	-105.0665	K Wright	2015-07-29	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276039		Guadalupe, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	KW Wright	2015-08	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276045		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2015-08	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276051		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2015-08-21	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276363		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2015-08-21	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276365		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2015-08	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276367		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2015-10	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276377		Socorro, New Mexico, US
Melissodes verbesinarum	40.0841	-102.40042	Carper, Adrian L.	2014-05-30		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283873008		Yuma County, Colorado, US
Melissodes verbesinarum	40.66829	-102.58486	Schwantes, Collin J.	2014-05-28		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283942043		Phillips County, Colorado, US
Melissodes verbesinarum	40.53903	-102.67283	A., A.|B., K.|Endriss, Stacy B.	2014-06-26		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283894588		Logan County, Colorado, US
Melissodes verbesinarum	34.3431	-106.7417	KW Wright	2014-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276162		Socorro, New Mexico, US
Melissodes verbesinarum	34.335	-106.7219	KW Wright	2014-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276164		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2014-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276168		Socorro, New Mexico, US
Melissodes verbesinarum	34.335	-106.7219	KW Wright	2014-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276200		Socorro, New Mexico, US
Melissodes verbesinarum	39.3138	-102.39315	Endriss, Stacy B.|L., B.	2014-08-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283836885		Kit Carson County, Colorado, US
Melissodes verbesinarum	40.55725	-102.8053	Abemayor, Michael D.|Carper, Adrian L.	2014-08-01		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283850444		Logan County, Colorado, US
Melissodes verbesinarum	40.55725	-102.8053	Abemayor, Michael D.|Carper, Adrian L.	2014-08-01		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283859833		Logan County, Colorado, US
Melissodes verbesinarum	40.49529	-102.61854	Abemayor, Michael D.|Carper, Adrian L.	2014-08-02		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283860409		Phillips County, Colorado, US
Melissodes verbesinarum	40.55725	-102.8053	Abemayor, Michael D.|Carper, Adrian L.	2014-08-01		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283877305		Logan County, Colorado, US
Melissodes verbesinarum	39.39427	-103.04741	Schwantes, Collin J.|J., M.|Bildahl, Travis	2014-08-01		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283887361		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.26453	-102.66809	Endriss, Stacy B.|L., B.	2014-08-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283893798		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.77224	-103.45949	Schwantes, Collin J.|Bildahl, Travis	2014-08-21		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283917638		Washington County, Colorado, US
Melissodes verbesinarum	40.55725	-102.8053	Abemayor, Michael D.|Carper, Adrian L.	2014-08-01		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283929608		Logan County, Colorado, US
Melissodes verbesinarum	32.24	-107.5499	K Wright	2014-08-28	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276078		Luna, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2014-08	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276174		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	KW Wright	2014-08	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276198		Socorro, New Mexico, US
Melissodes verbesinarum	39.39427	-103.04741	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283851925		Kit Carson County, Colorado, US
Melissodes verbesinarum	40.49529	-102.61854	C., B.|Endriss, Stacy B.|J., A.	2014-09-18		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283852048		Phillips County, Colorado, US
Melissodes verbesinarum	39.6599	-103.33291	Abemayor, Michael D.|Carper, Adrian L.	2014-09-19		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283861480		Washington County, Colorado, US
Melissodes verbesinarum	39.66435	-102.80456	Abemayor, Michael D.|Carper, Adrian L.	2014-09-19		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283862406		Washington County, Colorado, US
Melissodes verbesinarum	39.29973	-102.076	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283864318		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.39427	-103.04741	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283867014		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.2602	-102.77151	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283868282		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.82835	-103.38353	Abemayor, Michael D.|Carper, Adrian L.	2014-09-19		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283879062		Washington County, Colorado, US
Melissodes verbesinarum	39.47691	-102.59976	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283892893		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.47691	-102.59976	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283893811		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.29973	-102.076	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283901328		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.39427	-103.04741	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283907170		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.2602	-102.77151	Abemayor, Michael D.|Carper, Adrian L.	2014-09-25		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283915746		Kit Carson County, Colorado, US
Melissodes verbesinarum	33.05713	-116.4197	KJ Hung	2014-10-13	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276105		Anza-Borrego, California, US
Melissodes verbesinarum	33.365	-114.6835	M Miner	2013-04-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276085		La Paz, Arizona, US
Melissodes verbesinarum	33.3436	-114.6965	M Miner	2013-04-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276100		La Paz, Arizona, US
Melissodes verbesinarum	33.2948	-114.6965	M Miner	2013-04-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276109		La Paz, Arizona, US
Melissodes verbesinarum	33.3664	-114.6995	M Miner	2013-04-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276140		La Paz, Arizona, US
Melissodes verbesinarum	33.3664	-114.6995	M Miner	2013-04-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276148		La Paz, Arizona, US
Melissodes verbesinarum	34.894	-115.702	A. Ruttan	2013-05-01	Laurence Packer	Adult					https://www.gbif.org/occurrence/1414203281		California, US
Melissodes verbesinarum	34.894	-115.702	A. Ruttan	2013-05-02	Laurence Packer	Adult					https://www.gbif.org/occurrence/1414203309		California, US
Melissodes verbesinarum	34.894	-115.702	A. Ruttan	2013-05-02	Laurence Packer	Adult					https://www.gbif.org/occurrence/1414203319		California, US
Melissodes verbesinarum	34.894	-115.702	A. Ruttan	2013-05-01	Laurence Packer	Adult					https://www.gbif.org/occurrence/1414203328		California, US
Melissodes verbesinarum	40.55725	-102.8053	Schwantes, Collin J.	2013-08-20		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283869547		Logan County, Colorado, US
Melissodes verbesinarum	40.49529	-102.61854	Schwantes, Collin J.	2013-08-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283890441		Phillips County, Colorado, US
Melissodes verbesinarum	40.55725	-102.8053	Schwantes, Collin J.	2013-08-20		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283898162		Logan County, Colorado, US
Melissodes verbesinarum	40.55725	-102.8053	Schwantes, Collin J.	2013-08-20		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283921458		Logan County, Colorado, US
Melissodes verbesinarum	40.55725	-102.8053	Schwantes, Collin J.	2013-08-20		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283943448		Logan County, Colorado, US
Melissodes verbesinarum	39.6599	-103.33291	Carper, Adrian L.|Schwantes, Collin J.|Mead, Joshua	2013-09-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283833083		Washington County, Colorado, US
Melissodes verbesinarum	39.6599	-103.33291	Carper, Adrian L.|Schwantes, Collin J.|Mead, Joshua	2013-09-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283833690		Washington County, Colorado, US
Melissodes verbesinarum	40.08868	-102.46428	Schwantes, Collin J.|Carper, Adrian L.|Mead, Joshua	2013-09-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283866789		Yuma County, Colorado, US
Melissodes verbesinarum	39.77224	-103.45949	Schwantes, Collin J.|Carper, Adrian L.|Mead, Joshua	2013-09-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283888496		Washington County, Colorado, US
Melissodes verbesinarum	39.39427	-103.04741	Carper, Adrian L.	2013-09-24		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283898257		Kit Carson County, Colorado, US
Melissodes verbesinarum	40.0841	-102.40042	Schwantes, Collin J.|Carper, Adrian L.|Mead, Joshua	2013-09-21		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283909545		Yuma County, Colorado, US
Melissodes verbesinarum	40.56211	-102.47757	Nash, Theresa	2013-09-21		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283921712		Phillips County, Colorado, US
Melissodes verbesinarum	39.2602	-102.77151	Schwantes, Collin J.|Carper, Adrian L.|Mead, Joshua	2013-09-23		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283924192		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.30439	-102.71328	Carper, Adrian L.|Schwantes, Collin J.|Mead, Joshua	2013-09-23		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283928769		Kit Carson County, Colorado, US
Melissodes verbesinarum	39.6599	-103.33291	Carper, Adrian L.|Schwantes, Collin J.|Mead, Joshua	2013-09-22		Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283944930		Washington County, Colorado, US
Melissodes verbesinarum	36.6078	-117.1187	Drew Kaiser	2012-05-29	Karen Wright		Female	10flyl 10 white 10 flbl;out of 30 bowls, lost : 2 blue			https://www.gbif.org/occurrence/1456739961		Inyo, California, US
Melissodes verbesinarum	40.16226	-105.12621	Scott, Virginia Louise|Scott, Liu Zhi-Quan	2012-08-26	Wright, Karen	Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283897904		Boulder County, Colorado, US
Melissodes verbesinarum	40.16857	-105.14082	Scott, Virginia Louise|Scott, Chu Yong-Jiang	2012-09-01	Wright, Karen	Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283940811		Boulder County, Colorado, US
Melissodes verbesinarum	40.16271	-105.14409	Scott, Virginia Louise|Scott, Liu Zhi-Quan	2012-09-02	Wright, Karen	Adult	Female			University of Colorado	https://www.gbif.org/occurrence/5283944742		Boulder County, Colorado, US
Melissodes verbesinarum	34.4175	-106.8009	KW Wright	2012-09-05	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276161		Socorro, New Mexico, US
Melissodes verbesinarum	35.3539	-111.7306	Dave Smith	2011-08-09	Karen Wright	Adult	Female				https://www.gbif.org/occurrence/2512736513		Coconino, Arizona, US
Melissodes verbesinarum	32.5248	-106.9853	K Wetherill	2011-10-02	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276082		Dona Ana, New Mexico, US
Melissodes verbesinarum	34.269333	-106.695167	K Wetherill	2010-06-03	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276071		Socorro, New Mexico, US
Melissodes verbesinarum	33.8649	-106.8515	K Wetherill	2010-06	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276103		Socorro, New Mexico, US
Melissodes verbesinarum	34.269333	-106.695167	K Wetherill	2010-06-03	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276216		Socorro, New Mexico, US
Melissodes verbesinarum	32.778	-106.1584	K Wetherill	2010-08	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276072		Otero, New Mexico, US
Melissodes verbesinarum	35.0743	-109.7726	Rob Bowers	2010-09-01	Kimberly Huntzinger		Female	10flyl;10flbl;10white			https://www.gbif.org/occurrence/1456613730		Apache, Arizona, US
Melissodes verbesinarum	35.2931	-111.6973	Dave Smith	2010-09-16	Karen Wright	Adult	Female				https://www.gbif.org/occurrence/2512736637		Coconino, Arizona, US
Melissodes verbesinarum	35.0788	-109.7682	Rob Bowers	2010-10	Kimberly Huntzinger		Female	10flyl;10flbl;10white			https://www.gbif.org/occurrence/1456619417		Apache, Arizona, US
Melissodes verbesinarum	35.0788	-109.7682	Rob Bowers	2010-10	Kimberly Huntzinger		Female	10flyl;10flbl;10white			https://www.gbif.org/occurrence/1456619478		Apache, Arizona, US
Melissodes verbesinarum	33.7931	-106.8764	K Wetherill	2010-10	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276116		Socorro, New Mexico, US
Melissodes verbesinarum	34.335	-106.7219	K Wetherill	2009-05	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276209		Socorro, New Mexico, US
Melissodes verbesinarum	34.3431	-106.7417	K Wetherill	2009-06	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276208		Socorro, New Mexico, US
Melissodes verbesinarum	34.3325	-106.6328	K Wetherill	2009-06	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276379		Socorro, New Mexico, US
Melissodes verbesinarum	33.8649	-106.8515	K Wetherill	2009-08	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276076		Socorro, New Mexico, US
Melissodes verbesinarum			K Wetherill	2009-08-06	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276178		Socorro, New Mexico, US
Melissodes verbesinarum	34.410667	-106.6855	K Wetherill	2009-09-08	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276098		Socorro, New Mexico, US
Melissodes verbesinarum	35.151333	-106.6785	K Wetherill	2009-09-12	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276107		Bernalillo, New Mexico, US
Melissodes verbesinarum				2008-06-30	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276114		Socorro, New Mexico, US
Melissodes verbesinarum	34.335	-106.7219	K Wetherill	2008-09	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276190		Socorro, New Mexico, US
Melissodes verbesinarum	31.56596	-110.40554	Robert Delph	2008-09-14	KW Wright					University of New Mexico	https://www.gbif.org/occurrence/5918276369		Cochise, Arizona, US
Melissodes verbesinarum	31.32907	-109.26553	Robert L. Minckley	2007-05-18	K.W. Wright	Adult	Female				https://www.gbif.org/occurrence/2847315139		Municipio de Agua Prieta, Sonora, MX
Melissodes verbesinarum	37	-113	H. Ikerd	2007	T.L. Griswold 2009						https://www.gbif.org/occurrence/658952121		Washington, Utah, US
Melissodes verbesinarum	31.3259	-109.28802	Robert L. Minckley	2006-05-09	K.W. Wright	Adult	Female				https://www.gbif.org/occurrence/2847317147		Municipio de Agua Prieta, Sonora, MX
Melissodes verbesinarum	37	-113	F. Nicklen	2006	T.L. Griswold 2007						https://www.gbif.org/occurrence/658952147		Washington, Utah, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-09-25	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276054		Socorro, New Mexico, US
Melissodes verbesinarum	34.3524	-106.6891	J Betinelli	2005-09-25	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276074		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-09-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276080		Socorro, New Mexico, US
Melissodes verbesinarum	34.3524	-106.6891	J Betinelli	2005-09-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276087		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-09-25	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276102		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-09-25	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276134		Socorro, New Mexico, US
Melissodes verbesinarum	34.3538	-106.6842	J Betinelli	2005-09-25	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276136		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-09-26	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276150		Socorro, New Mexico, US
Melissodes verbesinarum	34.3538	-106.6842	J Betinelli	2005-09-25	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276172		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-10-03	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276069		Socorro, New Mexico, US
Melissodes verbesinarum	34.3538	-106.6842	J Bell	2005-10-02	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276118		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-10-02	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276129		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-10-17	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276130		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-10-03	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276143		Socorro, New Mexico, US
Melissodes verbesinarum	34.3579	-106.6895	J Betinelli	2005-10-02	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276166		Socorro, New Mexico, US
Melissodes verbesinarum	34.335	-106.633	K Wetherill	2005-10	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276176		Socorro, New Mexico, US
Melissodes verbesinarum	34.337	-106.633	K Wetherill	2005-10	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276356		Socorro, New Mexico, US
Melissodes verbesinarum	31.338611	-109.271944	RL Minckley	2004-05-13	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276177		Cochise, Arizona, US
Melissodes verbesinarum	31.33528	-109.25139	J. Arturo Romero	2004-07-30	K.W. Wright	Adult	Female				https://www.gbif.org/occurrence/2847268136		Cochise County, Arizona, US
Melissodes verbesinarum	31.33056	-109.21	Robert L. Minckley	2004-08-11	K.W. Wright	Adult	Female				https://www.gbif.org/occurrence/2847316141		Municipio de Agua Prieta, Sonora, MX
Melissodes verbesinarum			K Wetherill	2004-09-02	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276132		Socorro, New Mexico, US
Melissodes verbesinarum	34.339	-106.718	K Wetherill	2003-07	KW Wright		Male			University of New Mexico	https://www.gbif.org/occurrence/5918276047		Socorro, New Mexico, US
Melissodes verbesinarum	39.9818	-105.1499	Hinners, Sarah Jack	2003-08-12	Wright, Karen	Adult	Female			University of Colorado	https://www.gbif.org/occurrence/1101314212		Boulder County, Colorado, US
Melissodes verbesinarum	39.795	-105.147	Hinners, Sarah Jack	2003-08-20	Wright, Karen	Adult	Female			University of Colorado	https://www.gbif.org/occurrence/1101314216		Jefferson County, Colorado, US
Melissodes verbesinarum	39.795	-105.147	Hinners, Sarah Jack	2003-08-20	Wright, Karen	Adult	Female			University of Colorado	https://www.gbif.org/occurrence/1101314239		Jefferson County, Colorado, US
Melissodes verbesinarum	31.3187	-109.28023	J. Arturo Romero	2003-08-19	K.W. Wright	Adult	Female				https://www.gbif.org/occurrence/2847314150		Municipio de Agua Prieta, Sonora, MX
Melissodes verbesinarum	37.6091	-111.9806	S.M. Higbee	2003-08-22	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421466977		Garfield, Utah, US
Melissodes verbesinarum	37.4817	-111.2205	A. Johansen	2003-08-26	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421471709		Kane, Utah, US
Melissodes verbesinarum	37.4817	-111.2205	A. Johansen	2003-08-26	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421471723		Kane, Utah, US
Melissodes verbesinarum	37.4817	-111.2205	S.M. Higbee	2003-08-26	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421471845		Kane, Utah, US
Melissodes verbesinarum	37.6985	-111.6268	S.M. Higbee	2003-08-07	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421473045		Garfield, Utah, US
Melissodes verbesinarum	37.7318	-111.4461	B. Bradley	2003-08-08	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421490190		Garfield, Utah, US
Melissodes verbesinarum	37.85062	-111.35437	H. Ikerd	2003-08-12	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421507000		Garfield, Utah, US
Melissodes verbesinarum	37.6091	-111.9806	H. Ikerd	2003-08-22	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421513883		Garfield, Utah, US
Melissodes verbesinarum	37.6091	-111.9806	A. Johansen	2003-08-22	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421520292		Garfield, Utah, US
Melissodes verbesinarum	34.35	-106.88333	P.F. Torchio	2003-09-17	K. Wetherill 2009						https://www.gbif.org/occurrence/658952051		Socorro, New Mexico, US
Melissodes verbesinarum	34.35	-106.88333	P.F. Torchio	2003-09-17	K. Wetherill 2009						https://www.gbif.org/occurrence/658952052		Socorro, New Mexico, US
Melissodes verbesinarum	37.85062	-111.35437	S.M. Higbee	2003-09-01	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421445950		Garfield, Utah, US
Melissodes verbesinarum	37.5596	-111.3048	A. Johansen	2003-09-18	T.L. Griswold 2005		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421490642		Garfield, Utah, US
Melissodes verbesinarum	37.5544	-111.3793	A. Johansen	2003-09-16	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421520223		Garfield, Utah, US
Melissodes verbesinarum	37.3862	-111.8483	T.L. Griswold	2003-09-02	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421530041		Kane, Utah, US
Melissodes verbesinarum			PF Torchio	2003-09-15	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276111		Valencia, New Mexico, US
Melissodes verbesinarum			PF Torchio	2003-09-17	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276138		Socorro, New Mexico, US
Melissodes verbesinarum	37	-112	T.L. Griswold	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658951904		Kane, Utah, US
Melissodes verbesinarum	39	-108	H. Ikerd	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952122		Garfield, Utah, US
Melissodes verbesinarum	38	-112	H. Ikerd	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952123		Garfield, Utah, US
Melissodes verbesinarum	39	-108	S.M. Higbee	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952124		Garfield, Utah, US
Melissodes verbesinarum	37	-111	S.M. Higbee	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952125		Kane, Utah, US
Melissodes verbesinarum	38	-112	S.M. Higbee	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952128		Garfield, Utah, US
Melissodes verbesinarum	38	-112	S.M. Higbee	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952129		Garfield, Utah, US
Melissodes verbesinarum	38	-111	B. Bradley	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952141		Garfield, Utah, US
Melissodes verbesinarum	37	-111	A. Johansen	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952142		Kane, Utah, US
Melissodes verbesinarum	37	-111	A. Johansen	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952143		Kane, Utah, US
Melissodes verbesinarum	38	-112	A. Johansen	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952144		Garfield, Utah, US
Melissodes verbesinarum	38	-111	A. Johansen	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952145		Garfield, Utah, US
Melissodes verbesinarum	38	-111	A. Johansen	2003	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952146		Garfield, Utah, US
Melissodes verbesinarum	37.4048	-111.6497	J. Richmond	2002-08-21	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421470499		Kane, Utah, US
Melissodes verbesinarum	37.4693	-111.871	S. Messinger	2002-08-09	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421472655		Kane, Utah, US
Melissodes verbesinarum	37.4693	-111.871	S. Messinger	2002-08-09	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421472975		Kane, Utah, US
Melissodes verbesinarum	37.5903	-111.9328	J. Hawk	2002-08-28	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421523683		Garfield, Utah, US
Melissodes verbesinarum	37.5903	-111.9328	O.J. Messinger	2002-08-28	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421525423		Garfield, Utah, US
Melissodes verbesinarum	37.62	-111.8608	O.J. Messinger	2002-08-28	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421525480		Garfield, Utah, US
Melissodes verbesinarum	37.62	-111.8608	O.J. Messinger	2002-08-28	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421525483		Garfield, Utah, US
Melissodes verbesinarum	37.4693	-111.871	S.M. Higbee	2002-08-09	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421530072		Kane, Utah, US
Melissodes verbesinarum	37.4693	-111.871	S.M. Higbee	2002-08-09	T.L. Griswold 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421530088		Kane, Utah, US
Melissodes verbesinarum			PF Torchio	2002-10-07	KW Wright		Female			University of New Mexico	https://www.gbif.org/occurrence/5918276067		Bernalillo, New Mexico, US
Melissodes verbesinarum	38	-112	O.J. Messinger	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658951956		Garfield, Utah, US
Melissodes verbesinarum	38	-112	O.J. Messinger	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658951957		Garfield, Utah, US
Melissodes verbesinarum	38	-112	O.J. Messinger	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658951958		Garfield, Utah, US
Melissodes verbesinarum	37	-112	S. Messinger	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952108		Kane, Utah, US
Melissodes verbesinarum	37	-112	S. Messinger	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952109		Kane, Utah, US
Melissodes verbesinarum	37	-112	S.M. Higbee	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952126		Kane, Utah, US
Melissodes verbesinarum	37	-112	S.M. Higbee	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952127		Kane, Utah, US
Melissodes verbesinarum	37	-112	J. Richmond	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952139		Kane, Utah, US
Melissodes verbesinarum	38	-112	J. Hawk	2002	T.L. Griswold 2005						https://www.gbif.org/occurrence/658952140		Garfield, Utah, US
Melissodes verbesinarum	37.1303	-111.8848	K. Moredock	2001-06-06	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421528394		Kane, Utah, US
Melissodes verbesinarum	37.1303	-111.8848	K. Moredock	2001-06-06	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421528395		Kane, Utah, US
Melissodes verbesinarum	37.84737	-111.35395	K. Moredock	2001-08-14	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421447642		Garfield, Utah, US
Melissodes verbesinarum	37.8651	-111.317	K. Moredock	2001-08-28	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421449282		Garfield, Utah, US
Melissodes verbesinarum	37.3822	-111.0374	B. Morgan	2001-08-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421449470		Kane, Utah, US
Melissodes verbesinarum	37.3822	-111.0374	L. Wilson	2001-08-17	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421456710		Kane, Utah, US
Melissodes verbesinarum	37.4817	-111.2205	R. Andrus Nelson	2001-08-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421478165		Kane, Utah, US
Melissodes verbesinarum	37.4817	-111.2205	R. Andrus Nelson	2001-08-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421478169		Kane, Utah, US
Melissodes verbesinarum	37.84737	-111.35395	O.J. Messinger	2001-08-28	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421518687		Garfield, Utah, US
Melissodes verbesinarum	37.84737	-111.35395	O.J. Messinger	2001-08-28	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421518701		Garfield, Utah, US
Melissodes verbesinarum	37.84737	-111.35395	O.J. Messinger	2001-08-31	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421518868		Garfield, Utah, US
Melissodes verbesinarum	37.84737	-111.35395	O.J. Messinger	2001-08-31	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421518872		Garfield, Utah, US
Melissodes verbesinarum	37.8906	-101.4628	Brooks, Robert	2001-09-14	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657628277		Kearny, Kansas, US
Melissodes verbesinarum	37.1039	-101.9383	Brooks, Robert	2001-09-14	Wright, Karen	Adult		Sandy area, plant #   Gutierrezia sarothrae	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657661905		Morton, Kansas, US
Melissodes verbesinarum	37.8906	-101.4628	Brooks, Robert	2001-09-14	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657814740		Kearny, Kansas, US
Melissodes verbesinarum	37.3744	-111.0404	B. Morgan	2001-09-18	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421453445		Kane, Utah, US
Melissodes verbesinarum	37.3744	-111.0404	R. Andrus Nelson	2001-09-18	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421503252		Kane, Utah, US
Melissodes verbesinarum	37.3744	-111.0404	R. Andrus Nelson	2001-09-18	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421504430		Kane, Utah, US
Melissodes verbesinarum	39	-108	O.J. Messinger	2001							https://www.gbif.org/occurrence/658951950		Garfield, Utah, US
Melissodes verbesinarum	39	-108	O.J. Messinger	2001							https://www.gbif.org/occurrence/658951951		Garfield, Utah, US
Melissodes verbesinarum	39	-108	O.J. Messinger	2001							https://www.gbif.org/occurrence/658951952		Garfield, Utah, US
Melissodes verbesinarum	39	-108	O.J. Messinger	2001							https://www.gbif.org/occurrence/658951953		Garfield, Utah, US
Melissodes verbesinarum	37	-111	R. Andrus	2001							https://www.gbif.org/occurrence/658952110		Kane, Utah, US
Melissodes verbesinarum	37	-111	R. Andrus	2001							https://www.gbif.org/occurrence/658952111		Kane, Utah, US
Melissodes verbesinarum	37	-111	R. Andrus	2001							https://www.gbif.org/occurrence/658952112		Kane, Utah, US
Melissodes verbesinarum	37	-111	R. Andrus	2001							https://www.gbif.org/occurrence/658952113		Kane, Utah, US
Melissodes verbesinarum	37	-111	B. Morgan	2001							https://www.gbif.org/occurrence/658952132		Kane, Utah, US
Melissodes verbesinarum	37	-111	B. Morgan	2001							https://www.gbif.org/occurrence/658952133		Kane, Utah, US
Melissodes verbesinarum	38	-111	K. Moredock	2001							https://www.gbif.org/occurrence/658952134		Garfield, Utah, US
Melissodes verbesinarum	39	-108	K. Moredock	2001							https://www.gbif.org/occurrence/658952135		Garfield, Utah, US
Melissodes verbesinarum	37	-112	K. Moredock	2001							https://www.gbif.org/occurrence/658952136		Kane, Utah, US
Melissodes verbesinarum	37	-112	K. Moredock	2001							https://www.gbif.org/occurrence/658952137		Kane, Utah, US
Melissodes verbesinarum	37	-111	L. Wilson	2001							https://www.gbif.org/occurrence/658952138		Kane, Utah, US
Melissodes verbesinarum	37.4815	-111.2289	O.J. Messinger	2000-05-22	T.L. Griswold 2000		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421463119		Kane, Utah, US
Melissodes verbesinarum	37.4815	-111.2289	O.J. Messinger	2000-05-22	T.L. Griswold 2000		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421463163		Kane, Utah, US
Melissodes verbesinarum	31.32907	-109.26553	Robert L. Minckley	2000-07-26	K.W. Wright	Adult	Female				https://www.gbif.org/occurrence/2847276141		Municipio de Agua Prieta, Sonora, MX
Melissodes verbesinarum	37.6882	-111.6276	F.D. Parker	2000-07-28	T.L. Griswold 2000		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421456537		Garfield, Utah, US
Melissodes verbesinarum	37.6882	-111.6276	F.D. Parker	2000-07-28	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421500724		Garfield, Utah, US
Melissodes verbesinarum	37.9138	-111.2507	O.J. Messinger	2000-08-18	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421472764		Garfield, Utah, US
Melissodes verbesinarum	37.7645	-111.4046	M. Sunseri	2000-08-25	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421475707		Garfield, Utah, US
Melissodes verbesinarum	37.5608	-111.3236	O.J. Messinger	2000-08-28	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421507709		Garfield, Utah, US
Melissodes verbesinarum	37.84737	-111.35395	C.M. Davidson	2000-08-08	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421510939		Garfield, Utah, US
Melissodes verbesinarum	38	-111	O.J. Messinger	2000							https://www.gbif.org/occurrence/658951948		Garfield, Utah, US
Melissodes verbesinarum	38	-111	O.J. Messinger	2000							https://www.gbif.org/occurrence/658951949		Garfield, Utah, US
Melissodes verbesinarum	37	-111	O.J. Messinger	2000	T.L. Griswold 2000						https://www.gbif.org/occurrence/658951954		Kane, Utah, US
Melissodes verbesinarum	37	-111	O.J. Messinger	2000	T.L. Griswold 2000						https://www.gbif.org/occurrence/658951955		Kane, Utah, US
Melissodes verbesinarum	38	-112	F.D. Parker	2000	T.L. Griswold 2001						https://www.gbif.org/occurrence/658952038		Garfield, Utah, US
Melissodes verbesinarum	38	-112	F.D. Parker	2000	T.L. Griswold 2000						https://www.gbif.org/occurrence/658952039		Garfield, Utah, US
Melissodes verbesinarum	39	-108	C.M. Davidson	2000	T.L. Griswold 2001						https://www.gbif.org/occurrence/658952120		Garfield, Utah, US
Melissodes verbesinarum	38	-111	M. Sunseri	2000							https://www.gbif.org/occurrence/658952131		Garfield, Utah, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951664		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951665		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951666		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951667		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951668		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951669		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951670		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951671		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951672		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951673		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951674		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951675		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951676		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951677		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951678		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951679		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951680		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951681		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951682		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951683		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951684		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951685		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951686		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951687		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951688		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951689		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951690		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951691		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, K. Keen	1998							https://www.gbif.org/occurrence/658951692		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951693		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951694		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951695		Clark, Nevada, US
Melissodes verbesinarum	35	-115	M. Andres, K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951696		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951697		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951698		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951699		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951700		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951701		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951702		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951703		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951704		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951705		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951706		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951707		Clark, Nevada, US
Melissodes verbesinarum	37	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951708		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951709		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951710		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951711		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951712		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951713		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951714		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951715		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951716		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951717		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951718		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951719		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951720		Nye, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, K. Keen, K. Receveur, C. Schultz	1998							https://www.gbif.org/occurrence/658951721		Nye, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Receveur	1998							https://www.gbif.org/occurrence/658951722		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Receveur	1998							https://www.gbif.org/occurrence/658951723		Clark, Nevada, US
Melissodes verbesinarum	36	-114	M. Andres, K. Receveur	1998							https://www.gbif.org/occurrence/658951724		Clark, Nevada, US
Melissodes verbesinarum	37	-114	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951725		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951726		Clark, Nevada, US
Melissodes verbesinarum	36	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951727		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951728		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951729		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951730		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951731		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951732		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951733		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951734		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951735		Clark, Nevada, US
Melissodes verbesinarum	37	-115	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951736		Clark, Nevada, US
Melissodes verbesinarum	37	-114	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951737		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951738		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951739		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951740		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951741		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951742		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951743		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951744		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951745		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951746		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951747		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951748		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951749		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951750		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951751		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951752		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951753		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951754		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951755		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951756		Clark, Nevada, US
Melissodes verbesinarum	36	-116	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951757		Clark, Nevada, US
Melissodes verbesinarum	37	-114	M. Andres, C. Schultz	1998							https://www.gbif.org/occurrence/658951758		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951761		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951762		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951763		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951764		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951765		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951766		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951767		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951768		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951769		Clark, Nevada, US
Melissodes verbesinarum	36	-116	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951770		Clark, Nevada, US
Melissodes verbesinarum	36	-114	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951771		Clark, Nevada, US
Melissodes verbesinarum	36	-115	W.R. Bowlin	1998							https://www.gbif.org/occurrence/658951772		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951774		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951775		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951776		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951777		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951778		Clark, Nevada, US
Melissodes verbesinarum	35	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951779		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951780		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951781		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951782		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951783		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951784		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951785		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951786		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951787		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951788		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951789		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951790		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951791		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951792		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951793		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951794		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951795		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951796		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951797		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951798		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951799		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951800		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951801		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951802		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951803		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951804		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951805		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951806		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951807		Clark, Nevada, US
Melissodes verbesinarum	37	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951808		Clark, Nevada, US
Melissodes verbesinarum	37	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951809		Clark, Nevada, US
Melissodes verbesinarum	37	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951810		Clark, Nevada, US
Melissodes verbesinarum	37	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951811		Clark, Nevada, US
Melissodes verbesinarum	37	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951812		Clark, Nevada, US
Melissodes verbesinarum	37	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951813		Clark, Nevada, US
Melissodes verbesinarum	37	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951814		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951815		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951816		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951817		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951818		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951819		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951820		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951821		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951822		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951823		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951824		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951825		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951826		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951827		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951828		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951829		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951830		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951831		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951832		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951833		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951834		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951835		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951836		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951837		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951838		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951840		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951841		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951842		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951843		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951844		Clark, Nevada, US
Melissodes verbesinarum	36	-115	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951845		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951846		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951847		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951848		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951849		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951850		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951851		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951852		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951853		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951854		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951855		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951856		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951857		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951858		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951859		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951860		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951861		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951862		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951863		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951864		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951865		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951866		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951867		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951868		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951869		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951870		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951871		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951872		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951873		Clark, Nevada, US
Melissodes verbesinarum	36	-116	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951874		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951875		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951876		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951877		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951878		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951879		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951880		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951881		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951882		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951883		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951884		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951885		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951886		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951887		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951888		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951889		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951891		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951892		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951893		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951894		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951895		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951896		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951897		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951898		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951899		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951900		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951901		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951902		Clark, Nevada, US
Melissodes verbesinarum	37	-114	T.L. Griswold	1998							https://www.gbif.org/occurrence/658951903		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, F.D. Parker	1998							https://www.gbif.org/occurrence/658951905		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, F.D. Parker	1998							https://www.gbif.org/occurrence/658951906		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, F.D. Parker	1998							https://www.gbif.org/occurrence/658951907		Clark, Nevada, US
Melissodes verbesinarum	35	-115	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951908		Clark, Nevada, US
Melissodes verbesinarum	35	-115	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951909		Clark, Nevada, US
Melissodes verbesinarum	35	-115	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951910		Clark, Nevada, US
Melissodes verbesinarum	35	-115	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951911		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951912		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951913		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951914		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951915		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951916		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951917		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951918		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951919		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951920		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951921		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951922		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951923		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951924		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998							https://www.gbif.org/occurrence/658951925		Clark, Nevada, US
Melissodes verbesinarum	36	-114	T.L. Griswold, C. Schultz	1998	T.L. Griswold 2000						https://www.gbif.org/occurrence/658951926		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951927		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951928		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951929		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951930		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951931		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951932		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951933		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951934		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951935		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951936		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951937		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951938		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951939		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951940		Clark, Nevada, US
Melissodes verbesinarum	35	-115	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951941		Clark, Nevada, US
Melissodes verbesinarum	36	-114	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951942		Clark, Nevada, US
Melissodes verbesinarum	36	-114	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951943		Clark, Nevada, US
Melissodes verbesinarum	36	-114	K. Keen, K. Receveur	1998							https://www.gbif.org/occurrence/658951944		Clark, Nevada, US
Melissodes verbesinarum	36	-115	O.J. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951959		Clark, Nevada, US
Melissodes verbesinarum	36	-116	O.J. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951960		Clark, Nevada, US
Melissodes verbesinarum	36	-116	O.J. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951961		Clark, Nevada, US
Melissodes verbesinarum	36	-116	O.J. Messinger, C. Schultz	1998	T.L. Griswold 2000						https://www.gbif.org/occurrence/658951962		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951963		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951964		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951965		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951966		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951967		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951968		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951969		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951970		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951971		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951972		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951973		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951974		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951975		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951976		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951977		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951978		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951979		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951980		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951981		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951982		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951983		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951984		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951985		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951986		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951987		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951988		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951989		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951990		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951991		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951992		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951993		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951994		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951995		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951996		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951997		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951998		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658951999		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952000		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952001		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952002		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952003		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952004		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952005		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952006		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952007		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952008		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952009		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952010		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952011		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952012		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952013		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952014		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952015		Clark, Nevada, US
Melissodes verbesinarum	36	-114	O.J. Messinger, S. Messinger, C. Schultz	1998							https://www.gbif.org/occurrence/658952016		Clark, Nevada, US
Melissodes verbesinarum	35	-115	F.D. Parker	1998							https://www.gbif.org/occurrence/658952018		Clark, Nevada, US
Melissodes verbesinarum	36	-115	F.D. Parker	1998							https://www.gbif.org/occurrence/658952019		Clark, Nevada, US
Melissodes verbesinarum	36	-115	F.D. Parker	1998							https://www.gbif.org/occurrence/658952021		Clark, Nevada, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952022		Clark, Nevada, US
Melissodes verbesinarum	37	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952023		Clark, Nevada, US
Melissodes verbesinarum	37	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952024		Clark, Nevada, US
Melissodes verbesinarum	36	-116	F.D. Parker	1998							https://www.gbif.org/occurrence/658952026		SanBernardino, California, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952027		Clark, Nevada, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952028		Clark, Nevada, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952029		Clark, Nevada, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952030		Clark, Nevada, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952031		Clark, Nevada, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998							https://www.gbif.org/occurrence/658952032		Clark, Nevada, US
Melissodes verbesinarum	36	-116	F.D. Parker	1998							https://www.gbif.org/occurrence/658952033		Clark, Nevada, US
Melissodes verbesinarum	36	-116	F.D. Parker	1998							https://www.gbif.org/occurrence/658952034		Clark, Nevada, US
Melissodes verbesinarum	36	-116	F.D. Parker	1998							https://www.gbif.org/occurrence/658952035		Clark, Nevada, US
Melissodes verbesinarum	36	-116	F.D. Parker	1998							https://www.gbif.org/occurrence/658952036		Clark, Nevada, US
Melissodes verbesinarum	36	-114	F.D. Parker	1998	T.L. Griswold 2000						https://www.gbif.org/occurrence/658952037		Clark, Nevada, US
Melissodes verbesinarum	35	-115	C. Schultz	1998							https://www.gbif.org/occurrence/658952045		Clark, Nevada, US
Melissodes verbesinarum	36	-114	C. Schultz	1998							https://www.gbif.org/occurrence/658952046		Clark, Nevada, US
Melissodes verbesinarum	36	-114	C. Schultz	1998							https://www.gbif.org/occurrence/658952047		Clark, Nevada, US
Melissodes verbesinarum	36	-114	C. Schultz	1998							https://www.gbif.org/occurrence/658952048		Clark, Nevada, US
Melissodes verbesinarum	36	-114	C. Schultz	1998							https://www.gbif.org/occurrence/658952049		Clark, Nevada, US
Melissodes verbesinarum	36	-115	C. Schultz	1998							https://www.gbif.org/occurrence/658952050		Clark, Nevada, US
Melissodes verbesinarum	36	-116		1998							https://www.gbif.org/occurrence/658952119		Clark, Nevada, US
Melissodes verbesinarum	36	-115	R. Andrus, O.J. Messinger, T.L. Griswold	1997							https://www.gbif.org/occurrence/658952114		Clark, Nevada, US
Melissodes verbesinarum	37	-114	R. Andrus, O.J. Messinger, T.L. Griswold	1997							https://www.gbif.org/occurrence/658952115		Clark, Nevada, US
Melissodes verbesinarum	37	-114	R. Andrus, O.J. Messinger, T.L. Griswold	1997							https://www.gbif.org/occurrence/658952116		Clark, Nevada, US
Melissodes verbesinarum	37	-114	R. Andrus, O.J. Messinger, T.L. Griswold	1997							https://www.gbif.org/occurrence/658952117		Clark, Nevada, US
Melissodes verbesinarum	37	-114	R. Andrus, O.J. Messinger, T.L. Griswold	1997							https://www.gbif.org/occurrence/658952118		Clark, Nevada, US
Melissodes verbesinarum	33.55978	-107.09228	Minckley, R & Cox, H	1995-05-18	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657665300		Socorro, New Mexico, US
Melissodes verbesinarum	33.55978	-107.09228	Minckley, R & Cox, H	1995-05-18	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658190402		Socorro, New Mexico, US
Melissodes verbesinarum	33.55978	-107.09228	Minckley, Robert	1995-05-18	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658261619		Socorro, New Mexico, US
Melissodes verbesinarum	27.9025	-105.285	Minckley, Robert	1991-08-27		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657935025		Chihuahua, MX
Melissodes verbesinarum	31.1231	-107.9172	Minckley, Robert	1991-08-31		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657935026		Chihuahua, MX
Melissodes verbesinarum	31.35	-106.4667	Griswold, T	1991-08-30	LaBerge, Walley	Adult		PCAM 1-67A.2	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837981		Chihuahua, MX
Melissodes verbesinarum	26.7817	-104.5256	Griswold, T	1991-08-26	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837997		Chihuahua, MX
Melissodes verbesinarum			R. Ayala	1991-08-25		Adult					https://www.gbif.org/occurrence/3801121155		Coahuila, MX
Melissodes verbesinarum	25.816667	-103.85	T. Griswold	1991-08-22		Adult					https://www.gbif.org/occurrence/3801690136		Durango, MX
Melissodes verbesinarum	27.13333	-104.85611	J. L. Neff	1991-08-21	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168888147		Chihuahua, MX
Melissodes verbesinarum	26.68333	-103.6	J. L. Neff	1991-08-22	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168888148		Durango, MX
Melissodes verbesinarum	26.78167	-104.52556	Terry L. Griswold	1991-08-26	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168891302		Chihuahua, MX
Melissodes verbesinarum	29.56639	-104.73667	Jerome G. Rozen	1991-08-28	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168891303		Chihuahua, MX
Melissodes verbesinarum	25.23069	-100.81802	R. Ayala	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168895315		Coahuila de zaragoza, MX
Melissodes verbesinarum	25.23069	-100.81802	Robert L. Minckley	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168895316		Coahuila de zaragoza, MX
Melissodes verbesinarum	29.54889	-106.08333	Terry L. Griswold	1991-08-29	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168895317		Chihuahua, MX
Melissodes verbesinarum	26.68333	-103.6	Terry L. Griswold	1991-08-22	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168960199		Durango, MX
Melissodes verbesinarum	26.68333	-103.6	Terry L. Griswold	1991-08-22	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168960200		Durango, MX
Melissodes verbesinarum	25.23069	-100.81802	Terry L. Griswold	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169035900		Coahuila de zaragoza, MX
Melissodes verbesinarum	25.26754	-100.70852	Terry L. Griswold	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169035901		Coahuila de zaragoza, MX
Melissodes verbesinarum	26.87778	-104.63194	J. L. Neff	1991-08-26	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169035902		Chihuahua, MX
Melissodes verbesinarum	31.35	-106.46667	Terry L. Griswold	1991-08-30	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169035903		Chihuahua, MX
Melissodes verbesinarum	27.9025	-105.285	Robert L. Minckley	1991-08-27	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169042274		Chihuahua, MX
Melissodes verbesinarum	29.06	-105.59694	Terry L. Griswold	1991-08-27	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169042275		Chihuahua, MX
Melissodes verbesinarum	31.12306	-107.91722	Robert L. Minckley	1991-08-31	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169042276		Chihuahua, MX
Melissodes verbesinarum	29.56556	-104.95333	R. Ayala	1991-08-28	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169066337		Chihuahua, MX
Melissodes verbesinarum	26.68333	-103.6	Terry L. Griswold	1991-08-22	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169112162		Durango, MX
Melissodes verbesinarum	25.23069	-100.81802	R. Ayala	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169112163		Coahuila de zaragoza, MX
Melissodes verbesinarum	25.23069	-100.81802	R. Ayala	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169112164		Coahuila de zaragoza, MX
Melissodes verbesinarum	25.23069	-100.81802	Terry L. Griswold	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169112165		Coahuila de zaragoza, MX
Melissodes verbesinarum	25.23069	-100.81802	J. L. Neff	1991-08-25	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169112166		Coahuila de zaragoza, MX
Melissodes verbesinarum	27.9025	-105.285	Terry L. Griswold	1991-08-27	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4169112167		Chihuahua, MX
Melissodes verbesinarum	28.44056	-110.9575	Jerome G. Rozen	1991-09-02	Douglas Yanega					Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO)	https://www.gbif.org/occurrence/4168891304		Sonora, MX
Melissodes verbesinarum	36.1558	-113.3767	R. Fitts	1990-05-07							https://www.gbif.org/occurrence/658951773		Mohave, Arizona, US
Melissodes verbesinarum	29.6	-103.6042	T.L. Griswold	1986-04-16							https://www.gbif.org/occurrence/658951890		Brewster, Texas, US
Melissodes verbesinarum	30.19	-103.04	Danforth & Simons	1986-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918192		Brewster, Texas, US
Melissodes verbesinarum	38.6299	-110.568	F.D. Parker	1985-05-28							https://www.gbif.org/occurrence/658952020		Emery, Utah, US
Melissodes verbesinarum	38.04566	-110.58322	T.L. Griswold	1985-08-28							https://www.gbif.org/occurrence/658951839		Garfield, Utah, US
Melissodes verbesinarum	36.6617	-114.5721	F.D. & J.H. Parker	1983-05-11	W.E. LaBerge 2002						https://www.gbif.org/occurrence/658952017		Clark, Nevada, US
Melissodes verbesinarum	36.7361	-114.2197	F.D. Parker	1983-05-11							https://www.gbif.org/occurrence/658952025		Clark, Nevada, US
Melissodes verbesinarum	38.5961	-110.7028	F.D. Parker, T.L. Griswold	1983-07-26							https://www.gbif.org/occurrence/658952041		Emery, Utah, US
Melissodes verbesinarum	38.47755	-110.66443	F.D. Parker, T.L. Griswold	1982-07-27							https://www.gbif.org/occurrence/658952040		Wayne, Utah, US
Melissodes verbesinarum	38.58	-110.59	A.&K. Menke, F.D. Parker	1980-08-25							https://www.gbif.org/occurrence/658951947		Emery, Utah, US
Melissodes verbesinarum	49.7	-112.8333	Michener, Charles	1978-08-06	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918175		Alberta, CA
Melissodes verbesinarum			Brooks, R	1977-05-07	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918197		San Bernardino, California, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657774771		Hidalgo, New Mexico, US
Melissodes verbesinarum			Brooks, Robert	1977-08-27	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918184		Santa Cruz, Arizona, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918191		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918194		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918195		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918203		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918206		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918212		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918213		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918217		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918227		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918237		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.9489	-108.8067	Brooks, Robert	1977-08-30	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918259		Hidalgo, New Mexico, US
Melissodes verbesinarum	32.3122	-106.7778	Brooks, Robert	1977-09-16	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918198		Dona Ana, New Mexico, US
Melissodes verbesinarum	32.7831	-114.7964	Smith, Norman	1977-10-10	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918190		San Bernardino, California, US
Melissodes verbesinarum	31.9489	-108.8067	Rothschild, M	1976-07-28	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918179		Hidalgo, New Mexico, US
Melissodes verbesinarum			Chabot, M	1975-08-14	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918264		Cochise, Arizona, US
Melissodes verbesinarum	31.964	-111.599	J.L. Neff	1973-06-12		Adult		Topozone coordinates.			https://www.gbif.org/occurrence/3801375922		Pima, Arizona, US
Melissodes verbesinarum			J.L. Neff, A.R. Moldenke	1973-06-08		Adult					https://www.gbif.org/occurrence/3801940888		Cochise, Arizona, US
Melissodes verbesinarum	33.033	-116.801	A.R. Moldenke	1972-06-28		Adult		San Diego County			https://www.gbif.org/occurrence/3801337936		San Diego, California, US
Melissodes verbesinarum	33.033	-116.801	A.R. Moldenke	1972-06-28		Adult		San Diego County			https://www.gbif.org/occurrence/3801940907		San Diego, California, US
Melissodes verbesinarum	32	-108.93	Brothers, D	1970-08-30	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657732500		Cochise, Arizona, US
Melissodes verbesinarum	34.2564	-103.3483	Michener, Baker, Kamm	1970-09-17	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657613788		Roosevelt, New Mexico, US
Melissodes verbesinarum	29.2186	-98.2767	Michener, Baker, Kamm	1970-09-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657620707		Jeff Davis, Texas, US
Melissodes verbesinarum	34.1861	-103.3339	Michener, Baker, Kamm	1970-09-17	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657822544		Roosevelt, New Mexico, US
Melissodes verbesinarum	30.69	-102.61	Michener, Baker, Kamm	1970-09-14	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837931		Pecos, Texas, US
Melissodes verbesinarum	30.69	-102.61	Michener, Baker, Kamm	1970-09-14	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837948		Pecos, Texas, US
Melissodes verbesinarum	30.69	-102.61	Michener, Baker, Kamm	1970-09-14	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837959		Pecos, Texas, US
Melissodes verbesinarum	30.69	-102.61	Michener, Baker, Kamm	1970-09-14	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837969		Pecos, Texas, US
Melissodes verbesinarum	34.18611	-103.33389	C.D. Michener, R.L. Fisher	1970-09-17		Adult					https://www.gbif.org/occurrence/3801941922		Roosevelt, New Mexico, US
Melissodes verbesinarum	30.1334	-103.3269	Michener, Brothers, Krueger	1969-05-22	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657821572		Brewster, Texas, US
Melissodes verbesinarum	30.1334	-103.3269	Michener, Brothers, Krueger	1969-05-22	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657826846		Brewster, Texas, US
Melissodes verbesinarum	32.4206	-104.2283	Michener, Brothers, Krueger	1969-05-20	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837915		Eddy, New Mexico, US
Melissodes verbesinarum	32.4206	-104.2283	Michener, Brothers, Krueger	1969-05-20	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837979		Eddy, New Mexico, US
Melissodes verbesinarum	33.46078	-114.229946	R.M. Bohart	1968-03-31		Adult		BioGeomancer			https://www.gbif.org/occurrence/3801376919		Yuma, Arizona, US
Melissodes verbesinarum	33.3044	-112.0761	D.R. Miller, J.E. Lauck	1968-09-03		Adult					https://www.gbif.org/occurrence/3801940908		Maricopa, Arizona, US
Melissodes verbesinarum	33.9686	-112.7289	P.F. Torchio, N. Youssef	1967-04-21							https://www.gbif.org/occurrence/658952060		Maricopa, Arizona, US
Melissodes verbesinarum	34.259	-112.9021	P.F. Torchio, G.E. Bohart	1967-04-21							https://www.gbif.org/occurrence/658952082		Yavapai, Arizona, US
Melissodes verbesinarum	34.259	-112.9021	P.F. Torchio, G.E. Bohart	1967-04-21							https://www.gbif.org/occurrence/658952083		Yavapai, Arizona, US
Melissodes verbesinarum	34.259	-112.9021	P.F. Torchio, G.E. Bohart	1967-04-21							https://www.gbif.org/occurrence/658952084		Yavapai, Arizona, US
Melissodes verbesinarum	34.259	-112.9021	P.F. Torchio, G.E. Bohart	1967-04-21							https://www.gbif.org/occurrence/658952085		Yavapai, Arizona, US
Melissodes verbesinarum	33.96861	-112.72889	P.F. Torchio, N.N. Youssef	1967-04-21		Adult					https://www.gbif.org/occurrence/3801340923		Maricopa, Arizona, US
Melissodes verbesinarum	34.330326	-112.756527	G.E. Bohart, P.F. Torchio	1967-04-21		Adult		BioGeomancer			https://www.gbif.org/occurrence/3801374983		Yavapai, Arizona, US
Melissodes verbesinarum	33.9338	-113.2083	P.F. Torchio, Y. Maeta	1967-05-05							https://www.gbif.org/occurrence/658952053		Maricopa, Arizona, US
Melissodes verbesinarum	33.9338	-113.2083	P.F. Torchio, Y. Maeta	1967-05-05							https://www.gbif.org/occurrence/658952054		Maricopa, Arizona, US
Melissodes verbesinarum	33.9338	-113.2083	P.F. Torchio, Y. Maeta	1967-05-05							https://www.gbif.org/occurrence/658952055		Maricopa, Arizona, US
Melissodes verbesinarum	33.9338	-113.2083	P.F. Torchio, Y. Maeta	1967-05-05							https://www.gbif.org/occurrence/658952056		Maricopa, Arizona, US
Melissodes verbesinarum	33.9338	-113.2083	P.F. Torchio, Y. Maeta	1967-05-05							https://www.gbif.org/occurrence/658952057		Maricopa, Arizona, US
Melissodes verbesinarum	33.9338	-113.2083	P.F. Torchio, Y. Maeta	1967-05-05							https://www.gbif.org/occurrence/658952058		Maricopa, Arizona, US
Melissodes verbesinarum	33.9338	-113.2083	P.F. Torchio, Y. Maeta	1967-05-05							https://www.gbif.org/occurrence/658952059		Maricopa, Arizona, US
Melissodes verbesinarum	31.915	-109.1764	R.R. Snelling	1967-08-14		Adult					https://www.gbif.org/occurrence/3801851971		Cochise, Arizona, US
Melissodes verbesinarum			R.M. Bohart	1967-08-14		Adult					https://www.gbif.org/occurrence/3801940900		New Mexico, US
Melissodes verbesinarum	32.9975	-115.07111	R.M. Bohart	1967-10-13		Adult					https://www.gbif.org/occurrence/3801938919		Imperial, California, US
Melissodes verbesinarum	32.9972	-114.8305	D.S. Horning, Jr.	1967-10-13		Adult					https://www.gbif.org/occurrence/3801939902		Imperial, California, US
Melissodes verbesinarum	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658952042		Luna, New Mexico, US
Melissodes verbesinarum	32.2429	-107.4752	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-17							https://www.gbif.org/occurrence/658952043		Luna, New Mexico, US
Melissodes verbesinarum	32.36854	-106.74448	R.W. Rust, P.F. Torchio, G.R. Wood	1966-09-16							https://www.gbif.org/occurrence/658952044		DonaAna, New Mexico, US
Melissodes verbesinarum			R.B. Roberts	1966-09-13		Adult					https://www.gbif.org/occurrence/3801340934		Hidalgo, New Mexico, US
Melissodes verbesinarum	32.27592	-106.76667	G.E. Bohart	1965-09-23							https://www.gbif.org/occurrence/658952091		DonaAna, New Mexico, US
Melissodes verbesinarum	32.27592	-106.76667	G.E. Bohart	1965-09-23							https://www.gbif.org/occurrence/658952092		DonaAna, New Mexico, US
Melissodes verbesinarum	32.28798	-106.71777	G.E. Bohart	1965-09-23							https://www.gbif.org/occurrence/658952093		DonaAna, New Mexico, US
Melissodes verbesinarum	32.29988	-106.65432	G.E. Bohart	1965-09-23							https://www.gbif.org/occurrence/658952094		DonaAna, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952096		Socorro, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952097		Socorro, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952098		Socorro, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952099		Socorro, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952100		Socorro, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952101		Socorro, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952102		Socorro, New Mexico, US
Melissodes verbesinarum	33.7648	-106.9126	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952103		Socorro, New Mexico, US
Melissodes verbesinarum	31.0577	-104.563	G.E. Bohart	1965-09-24							https://www.gbif.org/occurrence/658952104		Culberson, Texas, US
Melissodes verbesinarum	35.6965	-117.383	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952106		SanBernardino, California, US
Melissodes verbesinarum	35.6965	-117.383	G.E. Bohart	1965-09-22							https://www.gbif.org/occurrence/658952107		SanBernardino, California, US
Melissodes verbesinarum			R.W. Thorp	1965-09-22		Adult					https://www.gbif.org/occurrence/3801851969		Socorro, New Mexico, US
Melissodes verbesinarum			G.E. Bohart	1965-09-22		Adult					https://www.gbif.org/occurrence/3801854932		Socorro, New Mexico, US
Melissodes verbesinarum	24.1333	-104.5905	G.& A.S. Bohart	1965-10-21	W.E. LaBerge 2002						https://www.gbif.org/occurrence/658951759		Durango, MX
Melissodes verbesinarum	38.47255	-109.45561	G.E. Bohart	1965-10-03							https://www.gbif.org/occurrence/658952089		San Juan, Utah, US
Melissodes verbesinarum	33.6097	-114.9161	F.D. Parker	1965-10-16		Adult					https://www.gbif.org/occurrence/3801856949		Riverside, California, US
Melissodes verbesinarum			G.E. Bohart, A.S. Bohart	1965-11-02		Adult					https://www.gbif.org/occurrence/3801380968		Chihuahua, MX
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952061		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952062		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952063		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952064		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952065		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952066		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952067		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952068		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952069		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952070		Clark, Nevada, US
Melissodes verbesinarum	35.53555	-114.91666	P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952071		Clark, Nevada, US
Melissodes verbesinarum			P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952072		SanBernardino, California, US
Melissodes verbesinarum			P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952073		SanBernardino, California, US
Melissodes verbesinarum			P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952074		SanBernardino, California, US
Melissodes verbesinarum			P.F. Torchio, G.E. Bohart	1964-05-03							https://www.gbif.org/occurrence/658952075		SanBernardino, California, US
Melissodes verbesinarum	33.9427	-112.9834	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952076		Maricopa, Arizona, US
Melissodes verbesinarum	33.9427	-112.9834	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952077		Maricopa, Arizona, US
Melissodes verbesinarum	34.1542	-112.9932	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952078		Yavapai, Arizona, US
Melissodes verbesinarum	34.1542	-112.9932	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952079		Yavapai, Arizona, US
Melissodes verbesinarum	34.1542	-112.9932	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952080		Yavapai, Arizona, US
Melissodes verbesinarum	34.1542	-112.9932	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952081		Yavapai, Arizona, US
Melissodes verbesinarum	33.9425	-112.6999	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952086		Maricopa, Arizona, US
Melissodes verbesinarum	33.919	-112.6773	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952087		Maricopa, Arizona, US
Melissodes verbesinarum	33.919	-112.6773	P.F. Torchio, G.E. Bohart	1964-05-05							https://www.gbif.org/occurrence/658952088		Maricopa, Arizona, US
Melissodes verbesinarum			G.E. Bohart, P.F. Torchio	1964-05-03		Adult					https://www.gbif.org/occurrence/3801336940		San Bernardino, California, US
Melissodes verbesinarum	35.47	-114.92	G.E. Bohart, P.F. Torchio	1964-05-03		Adult					https://www.gbif.org/occurrence/3801338936		Clark, Nevada, US
Melissodes verbesinarum	35.47	-114.92	G.E. Bohart, P.F. Torchio	1964-05-03		Adult					https://www.gbif.org/occurrence/3801340931		Clark, Nevada, US
Melissodes verbesinarum	33.96861	-112.72889	G.E. Bohart, P.F. Torchio	1964-05-05		Adult					https://www.gbif.org/occurrence/3801371942		Maricopa, Arizona, US
Melissodes verbesinarum			J.A. Powell	1964-07-16		Adult					https://www.gbif.org/occurrence/3801374976		Durango, MX
Melissodes verbesinarum	32.02322	-109.0306	Michener, Charles	1964-08-18	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657666034		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.8353	-109.0306	Michener, Charles	1964-08-18	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657672723		Hidalgo, New Mexico, US
Melissodes verbesinarum	32.0232	-109.0306	Michener, Charles	1964-08-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657762130		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.8353	-109.0306	Michener, Charles	1964-08-18	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658242296		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.8353	-109.0306	Michener, Charles	1964-08-22	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658277219		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.3956	-109.4848	Michener, Charles	1964-08-23	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658298825		Cochise, Arizona, US
Melissodes verbesinarum	34.4175	-112.7114	Michener, C & Michener D.	1964-08-31	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658300285		Yavapai, Arizona, US
Melissodes verbesinarum	32.02322	-109.0306	Michener, Charles	1964-08-18	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658372325		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.3444	-109.5447	Michener, Charles	1964-08-26	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837933		Cochise, Arizona, US
Melissodes verbesinarum	31.8353	-109.0306	Michener, Charles	1964-08-26	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837956		Hidalgo, New Mexico, US
Melissodes verbesinarum			C.D. Michener	1964-08-18		Adult					https://www.gbif.org/occurrence/3801337938		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.83528	-109.03056	C.D. Michener	1964-08-18		Adult					https://www.gbif.org/occurrence/3801940897		Hidalgo, New Mexico, US
Melissodes verbesinarum			Naumann & Willis	1963-08-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657594903		Durango, MX
Melissodes verbesinarum	25.8982	-101.1464	Byers, George	1963-08-17	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657747396		Coahuila, MX
Melissodes verbesinarum			H.A. Scullen	1962-08-21		Adult					https://www.gbif.org/occurrence/3801941935		Dona Ana, New Mexico, US
Melissodes verbesinarum			H.A. Scullen	1962-09-09		Adult					https://www.gbif.org/occurrence/3801851973		Otero, New Mexico, US
Melissodes verbesinarum	34.121489	-112.900104	P.D. Hurd	1961-09-15		Adult		BioGeomancer			https://www.gbif.org/occurrence/3801375932		Yavapai, Arizona, US
Melissodes verbesinarum	31.9697	-110.2989	G.E. Bohart	1960-09-27							https://www.gbif.org/occurrence/658952090		Cochise, Arizona, US
Melissodes verbesinarum	38.4799	-109.2968	G.E. Bohart	1960-09-30							https://www.gbif.org/occurrence/658952105		Grand, Utah, US
Melissodes verbesinarum	35.2169	-109.3693	G.I. Stage	1959-09-10		Adult					https://www.gbif.org/occurrence/3801374985		Apache, Arizona, US
Melissodes verbesinarum	32.07955	-108.98605	J.H. McNally	1958-08-25							https://www.gbif.org/occurrence/658951946		Hidalgo, New Mexico, US
Melissodes verbesinarum	31.83528	-109.03056	R.M. Bohart	1958-08-21		Adult					https://www.gbif.org/occurrence/3801854913		Hidalgo, New Mexico, US
Melissodes verbesinarum			Butler, G	1956-09-23	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657629108		Maricopa, Arizona, US
Melissodes verbesinarum			Butler, G	1956-09-23	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657678420		Arizona, US
Melissodes verbesinarum			Butler, G	1956-09-24	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837944		Arizona, US
Melissodes verbesinarum	31.8968	-109.0642	G.E. Bohart	1955-09-16							https://www.gbif.org/occurrence/658952095		Cochise, Arizona, US
Melissodes verbesinarum	32.7517	-113.9883	Tuttle, D	1955-10-06	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837914		Arizona, US
Melissodes verbesinarum	32.3122	-106.7778	Beamer, Lucy	1954-04-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837958		Dona Ana, New Mexico, US
Melissodes verbesinarum	41.91	-121.68	G. Ferguson	1954-08-21							https://www.gbif.org/occurrence/658952130		Siskiyou, California, US
Melissodes verbesinarum	32.6536	-111.6756	Haig, T	1953-05-21	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837964		Pinal, Arizona, US
Melissodes verbesinarum	32.6536	-111.6756	Haig, T	1953-05-21	Wright, Karen	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918187		Pinal, Arizona, US
Melissodes verbesinarum			Univ. of Kans. Mex. Exped.	1953-07-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837939		Durango, MX
Melissodes verbesinarum			Univ. of Kans. Mex. Exped.	1953-07-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837947		Durango, MX
Melissodes verbesinarum			Univ. of Kans. Mex. Exped.	1953-07-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837954		Durango, MX
Melissodes verbesinarum			Univ. of Kans. Mex. Exped.	1953-07-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837975		Durango, MX
Melissodes verbesinarum			Univ. of Kans. Mex. Exped.	1953-07-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837976		Durango, MX
Melissodes verbesinarum			Univ. of Kans. Mex. Exped.	1953-07-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837984		Durango, MX
Melissodes verbesinarum			Univ. of Kans. Mex. Exped.	1953-07-25	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837985		Durango, MX
Melissodes verbesinarum	33.6122	-114.9947	Marsh, G	1952-04-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657737616		Riverside, California, US
Melissodes verbesinarum	32.2678	-109.2269	Beamers, Liang, LaBerge	1952-07-12	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837907		Cochise, Arizona, US
Melissodes verbesinarum	32.2678	-109.2269	Beamers, Liang, LaBerge	1952-07-12	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837923		Cochise, Arizona, US
Melissodes verbesinarum	31.9678	-110.3791	Beamers, Liang, LaBerge	1952-07-12	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837942		Cochise, Arizona, US
Melissodes verbesinarum	34.6286	-103.565	Beamer, LaBerge, Liang	1952-07-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837945		New Mexico, US
Melissodes verbesinarum	31.9678	-110.2939	Beamers, Liang, LaBerge	1952-07-12	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837960		Cochise, Arizona, US
Melissodes verbesinarum	34.6286	-103.565	Beamer, LaBerge, Liang	1952-07-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837966		New Mexico, US
Melissodes verbesinarum	34.6286	-103.565	Beamer, LaBerge, Liang	1952-07-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837973		New Mexico, US
Melissodes verbesinarum	34.6286	-103.565	Beamer, LaBerge, Liang	1952-07-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837974		New Mexico, US
Melissodes verbesinarum	32.3122	-106.7778	Beamers, Liang, LaBerge	1952-07-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837978		Dona Ana, New Mexico, US
Melissodes verbesinarum	34.6286	-103.565	Beamer, LaBerge, Liang	1952-07-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837980		New Mexico, US
Melissodes verbesinarum	32.3122	-106.7778	Beamers, Liang, LaBerge	1952-07-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837983		Dona Ana, New Mexico, US
Melissodes verbesinarum	34.6286	-103.565	Beamer, LaBerge, Liang	1952-07-16	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837989		New Mexico, US
Melissodes verbesinarum	32.3122	-106.7778	Beamers, Liang, LaBerge	1952-07-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092838020		Dona Ana, New Mexico, US
Melissodes verbesinarum			Evans, H	1951-08-07	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657678388		Durango, MX
Melissodes verbesinarum			Evans, H	1951-08-12	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657748021		Chihuahua, MX
Melissodes verbesinarum	35.0367	-107.3822	McClay, M	1951-09-08		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837995		Cibola, New Mexico, US
Melissodes verbesinarum			Smith, Robert	1951-10-17	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837951		San Bernardino, California, US
Melissodes verbesinarum			Mac Neill, C	1950-05-28	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657750177		San Bernardino, California, US
Melissodes verbesinarum	35.1717	-103.7244	Cook, Paul	1950-06-08	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658379463		Quay, New Mexico, US
Melissodes verbesinarum	36.9455	-112.5258	G.F. Knowlton, G.E. Bohart	1950-06-22							https://www.gbif.org/occurrence/658951945		Coconino, Arizona, US
Melissodes verbesinarum	34.7575	-112.4531	Cook, Paul	1950-07-03	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837950		Yavapai, Arizona, US
Melissodes verbesinarum	33.9925	-117.4939	Linsley, E	1947-02-09	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837932		Riverside, California, US
Melissodes verbesinarum			Rockefeller, D	1947-07-15	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837941		Chihuahua, MX
Melissodes verbesinarum			C.D. Michener	1947-07-15		Adult					https://www.gbif.org/occurrence/3801938939		Chihuahua, MX
Melissodes verbesinarum			VanDyke, E	1941-06-06	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837924		Clark, Nevada, US
Melissodes verbesinarum	33.5703	-116.4981	Michener, Charles	1940-05-21	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837920		Riverside, California, US
Melissodes verbesinarum	32.72	-114.62	R.M. Bohart	1939-05-06							https://www.gbif.org/occurrence/658951760		Yuma, Arizona, US
Melissodes verbesinarum	33.9686	-112.7289	Sperry & Sperry	1938-04-30	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837943		Maricopa, Arizona, US
Melissodes verbesinarum			Russell, Jean	1935-08-21	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657659415		Cochise, Arizona, US
Melissodes verbesinarum	34.5989	-117.3333	Michener, Charles	1935-09-14	LaBerge, Walley	Adult		Isocoma veneta	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837953		San Bernardino, California, US
Melissodes verbesinarum	34.5989	-117.3333	Michener, Charles	1935-09-14	LaBerge, Walley	Adult		Isocoma veneta	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837955		San Bernardino, California, US
Melissodes verbesinarum	34.5989	-117.3333	Michener, Charles	1935-09-14	LaBerge, Walley	Adult		Isocoma veneta	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837961		San Bernardino, California, US
Melissodes verbesinarum	34.5989	-117.3333	Michener, Charles	1935-09-14	LaBerge, Walley	Adult		Isocoma veneta	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837968		San Bernardino, California, US
Melissodes verbesinarum	34.5989	-117.3333	Michener, Charles	1935-09-14	LaBerge, Walley	Adult		Isocoma veneta	http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092837988		San Bernardino, California, US
Melissodes verbesinarum	32.31222	-106.77778	R.H. Beamer, L.D. Beamer, W.E. LaBerge, C. Liang	1912-07-15		Adult					https://www.gbif.org/occurrence/3801380962		Dona Ana, New Mexico, US
Melissodes verbesinarum											https://www.gbif.org/occurrence/1322026128		
Melissodes verbesinarum											https://www.gbif.org/occurrence/2238759160		
Melissodes verbesinarum	36.402	-114.093	Griswold, Terry		Terry L. Griswold	Adult	Female				https://www.gbif.org/occurrence/2248750423		Nevada, US
Melissodes verbesinarum	35.471	-114.879	Andres,  --Keen,		Terry L. Griswold	Adult	Female				https://www.gbif.org/occurrence/2248751567		Nevada, US
Melissodes verbesinarum	27.883333	-108.8	C. D. Michener				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804619248		Chihuahua, MX
Melissodes verbesinarum	31.908056	-109.116667	W. J. Gertsch				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804623229		Cochise Co., Arizona, US
Melissodes verbesinarum	27.461083	-105.398556	C. D. Michener				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804623230		Chihuahua, MX
Melissodes verbesinarum	32.025	-104.056944	R. F. Smith				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804628347		Eddy Co., New Mexico, US
Melissodes verbesinarum	27.234444	-105.653611	C. D. Michener				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804743572		Chihuahua, MX
Melissodes verbesinarum	26.95	-105.421944	M. A. Cazier				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804748163		Hidalgo del Parral, Chihuahua, MX
Melissodes verbesinarum	27.461083	-105.398556	C. D. Michener				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804748640		Chihuahua, MX
Melissodes verbesinarum	27.234444	-105.653611	C. D. Michener				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804754969		Chihuahua, MX
Melissodes verbesinarum	32.350278	-108.708056	M. A. Cazier, W. J. Gertsch & R. Schrammel				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804763200		Hidalgo Co., New Mexico, US
Melissodes verbesinarum	35.391389	-105.173056	J. G. Rozen				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804766171		San Miguel Co., New Mexico, US
Melissodes verbesinarum	27.461083	-105.398556	C. D. Michener				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804768376		Chihuahua, MX
Melissodes verbesinarum	26.801944	-105.818889	C. D. Michener				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804770323		Chihuahua, MX
Melissodes verbesinarum											https://www.gbif.org/occurrence/3442342173		
Melissodes verbesinarum	32.85278	-116.615	A.R. Moldenke			Adult					https://www.gbif.org/occurrence/3801375928		San Diego, California, US
Melissodes verbesinarum			P.H. Timberlake			Adult					https://www.gbif.org/occurrence/3801375930		
Melissodes verbesinarum			Schaffner		15650				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4424818048		Culberson, Texas, US
Melissodes verbesinarum			Burke		15650				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4424827568		Jeff Davis, Texas, US
Melissodes verbesinarum					15650				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4424827575		Eddy, New Mexico, US
Melissodes verbesinarum			Schaffner		15650				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425335076		Culberson, Texas, US
Melissodes verbesinarum			Chamberlain		20506				Not-for-profit use only	Texas A&M University	https://www.gbif.org/occurrence/4425455151		Pinal, Arizona, US
Melissodes verbesinarum					NA		Indeterminate		2026-01-22 16:05:02	L.A. Irwin	https://www.gbif.org/occurrence/4540148554		United States, Na, NA
Melissodes verbesinarum					NA		Indeterminate		2025-03-13 12:26:28	Katherine Morgan	https://www.gbif.org/occurrence/4540168722		United States, Na, NA
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159354		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159395		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159485		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159490		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159597		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159599		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159640		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159770		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159869		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159932		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160130		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160252		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160258		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160350		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160358		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160415		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160426		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160462		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160484		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160500		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160562		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160617		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160624		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160733		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160840		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160854		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160894		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160941		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161071		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161092		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161150		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161175		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161233		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161364		
Melissodes verbesinarum									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161573		
Melissodes verbesinarum	34.135	-112.932	Paul D. Hurd		Karen W. Wright	Adult	Male				https://www.gbif.org/occurrence/5141252479		Yavapai, Arizona, US
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
