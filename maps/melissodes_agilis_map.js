// === Melissodes agilis map (offline TSV version) ===

// 🐝 Embedded TSV data (works with file://)
const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink
Melissodes agilis	46.87917	-102.78917	C. H. Waldron	1912-07-28	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237673
Melissodes agilis	40.07583	-102.22278		1919-08-19	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145105
Melissodes agilis	26.5	-101.3	C. D. Michener	1947-08-20	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145082
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145145
Melissodes agilis	31.71682	-108.82203	J. S. Ascher, J. G. Rozen, E. S. Wyman	2011-08-20	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00177367
Melissodes agilis	40.89083	-74.505		1935-08-24	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081701
Melissodes agilis	41.22306	-111.97306		1916-08-30	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237694
Melissodes agilis	27.0333	-105.21666	G. M. Bradt	1947-08-20	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081712
Melissodes agilis	45.562	-94.149	O. A. Stevens	1925-08-08	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237688
Melissodes agilis	35.04222	-117.66667	W. M. Wheeler	1917-08-19	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145073
Melissodes agilis	49.78594	-112.14833		1949-08-12	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081707
Melissodes agilis	37.36	-96.3036	A. R. Moldenke	1964-08-18	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035239
Melissodes agilis	31.18777	-89.19916	C. D. Michener	1944-10-03	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145175
Melissodes agilis	38.67722	-87.52861	M. M. Ellis	1913-06-11	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137750
Melissodes agilis	41.36866	-70.53	Amy Naughton, Aurora Naughton	2010-07-25	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145818
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31077
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31093
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31088
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31119
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31079
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31112
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31110
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31113
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31096
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31103
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31099
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31070
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31115
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31120
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31068
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31104
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31094
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31087
Melissodes agilis	37.21	-112.98	G.F. Knowlton	1950-06-24		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512445
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-08-17		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL249278
Melissodes agilis	35.6965	-117.383	G.E. Bohart	1965-09-22		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512681
Melissodes agilis	30.59642	-103.93442	W.J. Hanson	1967-08-24		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512418
Melissodes agilis	40.1105	-88.2072	E.R. Jaycox	1964-08-29		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512647
Melissodes agilis	43.74	-117.07	P.F. Torchio	1959-09-06		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL82271
Melissodes agilis	32.8492	-109.7586	E.J. Taylor	1948-09-16		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512615
Melissodes agilis	41.2604	-105.4602	V.J. Tepedino	1974-07-13		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512698
Melissodes agilis	34.6059	-86.9833	G.E. Bohart	1944-08-13		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512469
Melissodes agilis	38.97166	-95.23525	E.A. Cross	1952-09-16		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512676
Melissodes agilis	37.3057	-76.63717	G.E. & R.M. Bohart	1943-09-07		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512472
Melissodes agilis	25.8833	-103.6166	G.E. Bohart, A.S. Bohart	1966-10-05		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL758415
Melissodes agilis	37.648958	-75.676925		2018-07-16							https://www.discoverlife.org/mp/20l?id=B_CMC2674
Melissodes agilis	38.001	-79.575	S.M.Roble	2016-09-15		Unknown	Male	Calcareous prairie/fen			https://www.discoverlife.org/mp/20l?id=B_VDCR4590
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034157
Melissodes agilis					W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034079
Melissodes agilis	46.9233	-98.0028	P. W. Fattig	1917-08-17	Sandhouse	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034050
Melissodes agilis	29.01642	-97.00223	J. C. Bradley	1927-09-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034073
Melissodes agilis	46.8266	-100.8895	P. W. Fattig	1917-09-05	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034083
Melissodes agilis	35.37333	-119.01778	R. C. Shannon	1917-08-20	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034053
Melissodes agilis	37.73287	-105.51212	H. E. Evans, M. A. Evans	1954-07-21	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034071
Melissodes agilis	30.69317	-88.0431	H. P. L�ding	1908-11-01	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034068
Melissodes agilis	35.58355	-105.24433	E. J. Oslar	1902-07-26	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034075
Melissodes agilis	37.21528	-93.29806	H. H. Knight	1942-07-16	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034069
Melissodes agilis	39.27972	-89.88167		1893-10-02				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Hanson, W	1955-09-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9806	-101.7522	LaBerge, Walley	1952-08-30				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			O'Brien, Charles	1964-09-12				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.325	-112.67028		1959-08-27	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	34.1897	-118.1303	Michener, Charles	1934-06-29				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.45	-76.466		1960-08-24	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis				1982-08-15	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	47.1915	-95.177		1915-07-05	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	25.230689	-100.818022	Robert L. Minckley	1991-08-25	Douglas Yanega			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	46.87917	-102.78917		1912-07-28	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	45.742	-119.196		1904-05-15	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	25.90139	-97.49722		1910-11-21				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis				1958-09-05	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	30.443	-97.68		1911-12-02				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.72044526	-84.47350977	jgibbs	2016-09-21					© jgibbs some rights reserved	jgibbs	https://www.discoverlife.org/mp/20l?id=INAT4164972
Melissodes agilis	40.17157086	-105.2152061	Pam Piombino	2017-09-08				Mating on a Sunflower native, Helianthus annuus	© Pam Piombino some rights reserved	Pam Piombino	https://www.discoverlife.org/mp/20l?id=INAT7830838
Melissodes agilis	30.23556211	-97.64274645	Robby Deans	2017-05-19					© Robby Deans some rights reserved	Robby Deans	https://www.discoverlife.org/mp/20l?id=INAT4204185
Melissodes agilis				2025-10-20		Unknown	Male				https://www.discoverlife.org/mp/20l?id=I_JSA809
Melissodes agilis			John Baker		Leo Donovall 20090626			male			https://www.discoverlife.org/mp/20l?id=I_PDA21
Melissodes agilis				2010-01-12	beedude76@gmail.com	Unknown	Male				https://www.discoverlife.org/mp/20l?id=I_VEIT29
Melissodes agilis			Kevin C. Matteson	2004-08-12							https://www.discoverlife.org/mp/20l?id=KCM1086
Melissodes agilis	39.01256	-95.28763	Brooks, Robert	1979-09-18	Wright, Karen	Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM1575199
Melissodes agilis	40.6	-112.4636	Knowlton, George	1952-08-20		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487229
Melissodes agilis	43.56139	-101.4147	Michener, Charles	1969-09-02	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487857
Melissodes agilis	34.05222	-118.2428	Michener, Charles	1933-07-16		Adult					https://www.discoverlife.org/mp/20l?id=KSEM486910
Melissodes agilis	35.81389	-109.3094	Snow, Francis			Adult					https://www.discoverlife.org/mp/20l?id=KSEM513397
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516087
Melissodes agilis	35.08444	-106.6506	Michener, Charles	1935-09-01		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487663
Melissodes agilis	46.73139	-117.1786	Struck, D	1948-09-25		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487845
Melissodes agilis			Denning, D	1929-08-19		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487833
Melissodes agilis				1954-08-18		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487831
Melissodes agilis	33.9136	-98.4931	Segelquist, Karla	1994-10-08		Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM1575216
Melissodes agilis	24.4333333	-103.9888889	Minckley, Robert	1991-08-25		Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM315974
Melissodes agilis	49.85	-112.73	Michener, Charles	1978-08-06		Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM1575208
Melissodes agilis	41.0128	-81.6053	Lipovsky, Louis	1936-08-23		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487613
Melissodes agilis	31.3269	-89.2903	Michener, Charles	1944-09-15		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487884
Melissodes agilis			Mitchell, T	1932-07-06		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487841
Melissodes agilis			Baker, Donald	1961-09-30		Adult					https://www.discoverlife.org/mp/20l?id=KSEM941651
Melissodes agilis			LaBerge, Walley	1955-08-16	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487875
Melissodes agilis											https://www.discoverlife.org/mp/20l?id=MLSB__N16-1386
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43105
Melissodes agilis	39.883864	-75.254278	Rob Jean	2018-08-25	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ35749
Melissodes agilis	35.87696	-88.66159	R. Jean	2019-09-10		Unknown	Male	BVT9			https://www.discoverlife.org/mp/20l?id=RJ753
Melissodes agilis			K Toal	2000-08-08		Adult					https://www.discoverlife.org/mp/20l?id=RMY3743
Melissodes agilis	39.06	-78.06				Unknown	Male				https://www.discoverlife.org/mp/20l?id=TAI5281
Melissodes agilis	41.40806	-72.90167	K. Stoner	2005-08-18	S. Droege	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00042301
Melissodes agilis	40.01472	-105.27055	S. A. Rohwer	1907-08-30	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055479
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658614
Melissodes agilis	43.7712	-101.9213	Badlands Crew	2017-01-27	Jelle Devalez	Unknown	Male	NNE of cedar pass in badlands and grassland, south of NE entrance to the park. 10 y 10 b 10 w			https://www.discoverlife.org/mp/20l?id=USGS_DRO270568
Melissodes agilis	38.639	-75.528	Cathy Stragar	2017-01-27	Sam Droege	Unknown	Male	Watermelon			https://www.discoverlife.org/mp/20l?id=USGS_DRO102262
Melissodes agilis	46.6414	-96.4625	P. Pennarola	2021-07-18	Sam Droege	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO489574
Melissodes agilis	44.8676	-96.2836	Pennarola	2021-07-18	Sam Droege	Unknown	Male	10 yellow, 10 blue, 10 white			https://www.discoverlife.org/mp/20l?id=USGS_DRO464564
Melissodes agilis	31.71682	-108.82203	J. S. Ascher, C. Dong	2007-08-23	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00164700
Melissodes agilis	31.69028	-109.13167	J. G. Rozen, M. Favreau	1972-08-30	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067997
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145143
Melissodes agilis	37.985	-103.54333		1920-08-12	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145080
Melissodes agilis	42.80287	-103.88222	J. G. Rozen, B. L. Rozen, K. C. Rozen	1971-08-09	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067982
Melissodes agilis	31.46361	-100.43667	R. H. Painter	1921-09-13	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145112
Melissodes agilis	40.22778	-100.90352	J. G. Rozen, B. L. Rozen	1964-08-10	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035534
Melissodes agilis	41.05722	-74.14139		1918-08-21	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237699
Melissodes agilis	31.83528	-109.03056	K. C. Rozen, R. J. McGinley	1972-08-26	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035546
Melissodes agilis	39.06389	-108.55		1920-08-03	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137738
Melissodes agilis	39.55056	-107.32417		1919-07-29	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145078
Melissodes agilis	46.8266	-100.8895	O. A. Stevens	1920-09-11	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137745
Melissodes agilis	40.66816	-73.96403	N. Trigoboff	2002-08-17	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00103358
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145153
Melissodes agilis	40.66816	-73.96403	N. Trigoboff	2002-08-17	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00103356
Melissodes agilis	32.22167	-110.92583		1923-09-30	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145109
Melissodes agilis	48.36889	-99.9958	O. A. Stevens	1913-08-09	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137535
Melissodes agilis	37.23333	-108.47917		1919-07-07	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145092
Melissodes agilis	46.87917	-102.78917	C. H. Waldron	1912-07-28	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237674
Melissodes agilis	42.80287	-103.88222	J. G. Rozen, B. L. Rozen, K. C. Rozen	1971-08-09	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067979
Melissodes agilis	42.80287	-103.88222	J. G. Rozen, B. L. Rozen, K. C. Rozen	1971-08-09	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067973
Melissodes agilis	40.29957	-99.71136	J. G. Rozen, B. L. Rozen	1964-08-09	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145168
Melissodes agilis	41.22306	-111.97306		1916-08-30	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145108
Melissodes agilis	40.66816	-73.96403	J. S. Ascher	2009-07-25	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00103369
Melissodes agilis	31.46361	-100.43667	R. H. Painter	1921-09-13	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145074
Melissodes agilis	42.44472	-121.86833	J. Schuh	1963-08-14	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145164
Melissodes agilis	31.71682	-108.82203	J. S. Ascher, J. G. Rozen, E. S. Wyman	2011-08-20	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00177362
Melissodes agilis	42.78841	-103.88222	J. G. Rozen, B. L. Rozen	1962-08-13	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035540
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137540
Melissodes agilis	42.6678	-103.463	J. G. Rozen, K. C. Rozen, R. J. McGinley	1972-08-11	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00044306
Melissodes agilis	27.117	-105.113	R. F. Smith	1950-09-11	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081711
Melissodes agilis	38.94	-108.387	J. G. Rozen, R. J. McGinley	1972-08-13	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067994
Melissodes agilis	39.55056	-107.32417		1920-08-05	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145138
Melissodes agilis	34.249	-109.6253	J. G. Rozen, B. L. Rozen	1997-08-13	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081697
Melissodes agilis	39.55056	-107.32417		1920-08-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145132
Melissodes agilis	42.6678	-103.463	J. G. Rozen, K. C. Rozen, R. J. McGinley	1972-08-11	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00044304
Melissodes agilis	42.80287	-103.88222	J. G. Rozen, B. L. Rozen, K. C. Rozen	1971-08-09	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067981
Melissodes agilis	41.05722	-74.14139		1917-08-07	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237677
Melissodes agilis	40.76083	-111.89028		1920-07-28	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145126
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145159
Melissodes agilis	38.94	-108.387	J. G. Rozen, R. J. McGinley	1972-08-13	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067988
Melissodes agilis	31.83528	-109.03056	K. C. Rozen, R. J. McGinley	1972-08-26	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035542
Melissodes agilis	39.95333	-112.06806		1920-08-01	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145141
Melissodes agilis	41.05722	-74.14139		1917-08-17	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145096
Melissodes agilis	40.76083	-111.89028		1920-07-28	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145122
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145147
Melissodes agilis	27.117	-105.113	R. F. Smith	1950-09-11	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081710
Melissodes agilis	40.79194	-73.77611	G. Lenoir, T. Doleck	2009-08-27	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00131737
Melissodes agilis	40.66816	-73.96403	N. Trigoboff	2002-08-17	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00103359
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145157
Melissodes agilis	40.22778	-100.90352	J. G. Rozen, B. L. Rozen	1964-08-10	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035536
Melissodes agilis	31.519	-108.875	J. G. Rozen, J. S. Ascher	1994-08-24	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035234
Melissodes agilis	42.80287	-103.88222	J. G. Rozen, B. L. Rozen, K. C. Rozen	1971-08-09	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00067983
Melissodes agilis	40.22972	-100.83849	J. G. Rozen, B. L. Rozen	1964-08-10	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035236
Melissodes agilis	39.53472	-107.7825		1919-07-21	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145119
Melissodes agilis	35.19806	-111.65056	J. G. Rozen	1951-09-12	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137534
Melissodes agilis	40.01472	-105.27055		1919-08-12	T. D. A. Cockerell	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145093
Melissodes agilis	26.5	-101.3	C. D. Michener	1947-08-20	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081714
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145149
Melissodes agilis	40.86414	-73.89276	K. M. Cox		J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00069444
Melissodes agilis	42.78841	-103.88222	J. G. Rozen, B. L. Rozen	1962-08-13	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035539
Melissodes agilis	31.71682	-108.82203	J. S. Ascher, C. Dong	2007-08-23	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00164699
Melissodes agilis	40.76083	-111.89028		1920-07-28	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145123
Melissodes agilis	41.05722	-74.14139		1921-08-20	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237683
Melissodes agilis	47.85111	-104.05083	O. A. Stevens	1914-09-03	Stevens	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137536
Melissodes agilis	40.07583	-102.22278		1919-08-19	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145102
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145148
Melissodes agilis	42.19888	-121.40611	J. Schuh	1963-08-15	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145155
Melissodes agilis	40.76083	-111.89028		1920-07-28	P. H. Timberlake	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145128
Melissodes agilis	40.66816	-73.96403	J. S. Ascher	2009-07-18	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00103363
Melissodes agilis	42.4461	-73.7889	J. L. Zabriskie	1878-01-01	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237666
Melissodes agilis	39.55056	-107.32417		1920-08-05	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145137
Melissodes agilis	42.6678	-103.463	J. G. Rozen, B. L. Rozen, K. C. Rozen	1971-08-11	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035238
Melissodes agilis	39.1103	-108.3503		1919-07-18	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145115
Melissodes agilis	39.15889	-108.72833		1919-07-16	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145088
Melissodes agilis	40.60889	-74.063	W. T. Davis	1917-08-03	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00065613
Melissodes agilis	31.83528	-109.03056	K. C. Rozen, R. J. McGinley	1972-08-26	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00035544
Melissodes agilis	41.22306	-111.97306		1916-08-30	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237690
Melissodes agilis	37.73972	-121.42417	M. A. Cazier	1938-07-16	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145111
Melissodes agilis	46.815	-101.8294	O. A. Stevens	1912-09-13	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137746
Melissodes agilis	46.87722	-96.78944	O. A. Stevens	1911-08-04	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237684
Melissodes agilis	41.22306	-111.97306		1916-08-30	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237692
Melissodes agilis	39.1103	-108.3503		1919-07-18	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145113
Melissodes agilis	41.22306	-111.97306		1916-08-30	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00137742
Melissodes agilis	31.18777	-89.19916	C. D. Michener	1944-10-03	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00081693
Melissodes agilis	35.96056	-83.92083	G. G. Ainslie		J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00237682
Melissodes agilis	31.18777	-89.19916	C. D. Michener	1944-10-06	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=AMNH_BEE00145176
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31089
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31092
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31076
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31078
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31083
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31108
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31086
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31081
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31107
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31118
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31116
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31106
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31098
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31075
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31084
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31109
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31091
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31073
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31080
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31074
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31117
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31085
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31102
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31100
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31090
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31101
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31114
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31082
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31072
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31071
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31105
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31095
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31111
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31069
Melissodes agilis			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES31097
Melissodes agilis	41.73	-111.83		1908-08-26		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL116739
Melissodes agilis	41.61	-112.54	G.F. Knowlton	1949-08-26		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512401
Melissodes agilis	39.35	-112.57	G.E. Bohart, E.A. Cross	1953-08-06		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512402
Melissodes agilis	41.9922	-113.185	G.E. Knowlton	1969-09-15	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75467
Melissodes agilis	38.5661	-110.7057	W.P. Nye	1979-09-14		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10566
Melissodes agilis	38.5968	-110.6988	A.S. Menke, F.D. Parker	1980-08-25		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10463
Melissodes agilis	41.63561	-112.44277	G.F. Knowlton	1949-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512624
Melissodes agilis	38.64	-110.63	F.D. Parker	1985-08-26		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10510
Melissodes agilis	41.63561	-112.44277	G.F. Knowlton	1949-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512599
Melissodes agilis	38.3224	-110.6757	F.D. Parker	1985-08-28		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10472
Melissodes agilis	39.35222	-112.57639	G.E. Bohart	1947-08-07		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512436
Melissodes agilis	39.95	-111.9	G.F. Knowlton	1952-08-06		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512425
Melissodes agilis	37.21	-112.98	G.F. Knowlton	1950-06-24		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512444
Melissodes agilis	46.3238	-119.3196	V.J. Tepedino	1997-09-04		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL248989
Melissodes agilis	40.4436	-109.2533	R.W. Rust	1965-09-07		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512512
Melissodes agilis	46.3238	-119.3196	M.C. Connolly	1998-08-22		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL288196
Melissodes agilis	38.596	-110.5929	F.D. Parker, T.L. Griswold	1983-09-12		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10549
Melissodes agilis	38.3224	-110.6757	F.D. Parker	1985-08-28		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10480
Melissodes agilis	36.9455	-112.5258	G.F. Knowlton	1949-08-05		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512420
Melissodes agilis	41.8756	-112.143		1957-08-08		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512554
Melissodes agilis	46.0775	-118.3393	V.J. Tepedino	1997-08-16		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL248790
Melissodes agilis	41.9756	-111.9525		1959-08-05		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL116744
Melissodes agilis	40.5981	-112.4636	G.F. Knowlton	1952-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512634
Melissodes agilis	40.3916	-111.8508	G.F. Knowlton	1943-09-14		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512654
Melissodes agilis	46.0775	-118.3393	V.J. Tepedino	1997-08-30		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL251903
Melissodes agilis	40.4436	-109.2533	R.W. Rust	1965-09-07		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512513
Melissodes agilis	38	-112	O.J. Messinger		T.L. Griswold 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL461794
Melissodes agilis	39.35	-112.57	G.E. Bohart, E.A. Cross	1953-08-06		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512539
Melissodes agilis	37	-114	R. Andrus, O.J. Messinger, T.L. Griswold			Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL222666
Melissodes agilis	38.3224	-110.6757	T.L. Griswold	1985-08-28		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10494
Melissodes agilis	37	-112	H. Ikerd		H. Ikerd 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL489721
Melissodes agilis	40.4436	-109.2533	R.W. Rust	1965-09-07		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512519
Melissodes agilis	38.5876	-110.583	W.P. Nye	1982-09-04		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10558
Melissodes agilis	34.01223	-117.68894	E.S.G. Titus	1907-09-13		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512616
Melissodes agilis	40.1944	-110.0611	G.E. Bohart	1959-08-25		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512685
Melissodes agilis	38.5876	-110.583	W.P. Nye	1982-09-04		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10560
Melissodes agilis	38.3224	-110.6757	F.D. Parker	1985-08-28		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10487
Melissodes agilis	40	-113	J.S. Wilson			Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL494974
Melissodes agilis	39	-108	L. Wilson		T.L. Griswold 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL458107
Melissodes agilis	38.7725	-112.0833	G.E. Knowlton, S.L. Wood	1948-07-14		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL226257
Melissodes agilis	38.5961	-110.7028	F.D. Parker, D.F. Veirs	1979-09-16		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10540
Melissodes agilis	41.61	-112.54	G.F. Knowlton	1949-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512596
Melissodes agilis	40.6669	-111.8872	G.F. Knowlton	1950-09-13		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512608
Melissodes agilis	42.17464	-112.58719	G.E. Knowlton	1969-08-19	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75473
Melissodes agilis	41.63561	-112.44277	G.F. Knowlton	1949-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512603
Melissodes agilis	40.3916	-111.8508	G.F. Knowlton	1947-08-18		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512613
Melissodes agilis	46.3238	-119.3196	V.J. Tepedino	1997-08-28		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL251802
Melissodes agilis	39	-108	C.M. Davidson		T.L. Griswold 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL455625
Melissodes agilis	45.639	-118.6849	J.E. Harrison	1998-05-17		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL284319
Melissodes agilis	37	-112	S. Messinger		T.L. Griswold 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL446557
Melissodes agilis	46.3238	-119.3196	V.J. Tepedino	1997-08-21		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL251503
Melissodes agilis	42.1518	-108.8215	G.E. Knowlton	1969-08-26	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75488
Melissodes agilis	38.3224	-110.6757	F.D. Parker	1985-08-28		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10486
Melissodes agilis	37	-111	L. Wilson			Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL418339
Melissodes agilis	38	-111	S.M. Higbee		H. Ikerd 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL513878
Melissodes agilis	46.3238	-119.3196	V.J. Tepedino	1997-08-21		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL251509
Melissodes agilis	41.63561	-112.44277	G.F. Knowlton	1949-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512558
Melissodes agilis	39.35	-112.57	G.E. Bohart, E.A. Cross	1953-08-06		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512537
Melissodes agilis	41.7786	-112.654	G.E. Knowlton	1970-09-01	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75449
Melissodes agilis	38.5917	-110.5737	F.D. Parker, T.L. Griswold	1983-09-14		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10552
Melissodes agilis	39.99	-111.49	G.F. Knowlton	1947-08-12		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512459
Melissodes agilis	41.9922	-113.185	G.E. Knowlton	1972-09-07	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75468
Melissodes agilis	38.3379	-110.9747	T.L. Griswold	1992-08-16		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL31056
Melissodes agilis	40.4436	-109.2533	R.W. Rust	1965-09-07		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512516
Melissodes agilis	41.73	-111.83	S.L. Wood	1948-08-09		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL116716
Melissodes agilis	41.746	-113.106	G.E. Knowlton	1949-08-24	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL85706
Melissodes agilis	46.3238	-119.3196	V.J. Tepedino	1997-08-21		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL251518
Melissodes agilis	41.9636	-112.7089	G.E. Knowlton, J.H. Judd	1970-09-01	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75446
Melissodes agilis	42.17464	-112.58719	G.E. Knowlton	1969-09-02	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75480
Melissodes agilis	41.61	-112.54	G.F. Knowlton	1949-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512429
Melissodes agilis	41.63561	-112.44277	G.F. Knowlton	1949-08-20		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512600
Melissodes agilis	41.3181	-111.98926	G.F. Knowlton	1947-08-21		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512506
Melissodes agilis	38	-111	B. Bradley		H. Ikerd 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL513868
Melissodes agilis	39.44646	-112.57685	G.E. Bohart	1949-08-06		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512684
Melissodes agilis	41.2972	-112.027	L. Cutler	1932-09-14		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512451
Melissodes agilis	40.61	-112.3	G.F. Knowlton	1952-08-19		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512594
Melissodes agilis	46.6175	-118.3521	J.E. Harrison	1998-06-10		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL287742
Melissodes agilis	38	-112	S. Messinger		T.L. Griswold 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL458248
Melissodes agilis	41.9922	-113.185	G.E. Knowlton	1969-08-18	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75466
Melissodes agilis	40.7014	-112.2469	E.S.G. Titus	1909-07-18		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512588
Melissodes agilis	45.639	-118.6849	V.J. Tepedino	1997-09-21		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL255464
Melissodes agilis	37	-114	R. Andrus, O.J. Messinger, T.L. Griswold			Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL222664
Melissodes agilis	38	-112	S. Messinger		T.L. Griswold 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL458245
Melissodes agilis	34.01223	-117.68894	E.S.G. Titus	2025-08-06		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512466
Melissodes agilis	41.73	-111.83	G.E. Knowlton	1947-08-23		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL116718
Melissodes agilis	38.5961	-110.7028	F.D. Parker, T.L. Griswold	1983-09-13		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10577
Melissodes agilis	38	-111	B.S. Heath			Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL377433
Melissodes agilis	46.0775	-118.3393	V.J. Tepedino	1997-09-13		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL253115
Melissodes agilis	38	-111	B. Bradley		H. Ikerd 2005	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL513869
Melissodes agilis	38.5917	-110.5737	D.F. Veirs, T.L. Griswold, F.D. Parker	1981-08-25		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL10517
Melissodes agilis	41.7556	-111.7166	R.E. Nye	1936-07-30		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL116731
Melissodes agilis	42.1518	-108.8215	G.E. Knowlton	1969-08-26	T.L. Griswold 1994	Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL75487
Melissodes agilis	45.6704	-118.6836	J.E. Harrison	1998-07-14		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL286662
Melissodes agilis	41.8756	-112.143		1957-08-08		Unknown	Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed 2014-29-12)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.discoverlife.org/mp/20l?id=BBSL512560
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034152
Melissodes agilis	42.444	-74.498	J. Gibbs	2012-07-11	J. Gibbs	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00026827
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034156
Melissodes agilis	42.44056	-76.49694		1904-08-01	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034078
Melissodes agilis	42.44056	-76.49694		1904-08-01	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034081
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034164
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034095
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034168
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034159
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034114
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034146
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034109
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034141
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-06	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034127
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034178
Melissodes agilis	42.44056	-76.49694		1904-08-08	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034072
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-25	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034182
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034094
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-16	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034111
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034177
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-11	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034113
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034180
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034132
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-06	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034122
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034147
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034165
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034136
Melissodes agilis	42.44056	-76.49694		1904-07-26	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034112
Melissodes agilis	42.444	-74.498	J. Gibbs	2012-07-11	J. Gibbs	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00026825
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034106
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-07	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034172
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034179
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-11	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034102
Melissodes agilis	40.27361	-76.88472		1908-08-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034065
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034154
Melissodes agilis	42.44056	-76.49694		1894-07-27	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034067
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034093
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034098
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034163
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034139
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034116
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034175
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034160
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034151
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034149
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-16	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034130
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034121
Melissodes agilis	46.87722	-96.78944	P. W. Fattig	1917-08-17	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034058
Melissodes agilis	35.37333	-119.01778	R. C. Shannon	1917-08-20	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034054
Melissodes agilis	35.37333	-119.01778	R. C. Shannon	1917-08-20	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034051
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034105
Melissodes agilis	46.9233	-98.0028	P. W. Fattig	1917-08-17	Sandhouse	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034049
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034128
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-16	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034110
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-06	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034125
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034096
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-16	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034145
Melissodes agilis	42.44056	-76.49694		1904-08-07	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034088
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-16	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034124
Melissodes agilis	35.37333	-119.01778	R. C. Shannon	1917-08-20	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034090
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-07	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034169
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034176
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034181
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-07	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034174
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-05	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034126
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034135
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034119
Melissodes agilis	40.0149	-75.105			W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034062
Melissodes agilis	42.44056	-76.49694		1904-07-29	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034086
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034100
Melissodes agilis	42.44056	-76.49694		1904-07-26	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00029051
Melissodes agilis	42.44056	-76.49694		1904-08-04		Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034092
Melissodes agilis	42.444	-74.498	J. Gibbs	2012-07-11	J. Gibbs	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00026828
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034167
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-12	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034158
Melissodes agilis	35.68694	-105.93722	E. J. Oslar		W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034077
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034115
Melissodes agilis	35.37333	-119.01778	R. C. Shannon	1917-08-20	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034057
Melissodes agilis	35.37333	-119.01778	R. C. Shannon	1917-08-20	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034052
Melissodes agilis	37.73287	-105.51212	H. E. Evans, M. A. Evans	1954-07-21	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034082
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-24	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034097
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-09-08	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034185
Melissodes agilis	42.444	-74.498	J. Gibbs	2012-07-12	J. Gibbs	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00022504
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-25	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034183
Melissodes agilis	42.44056	-76.49694	A. M. Shaw	1886-07-20		Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034091
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034108
Melissodes agilis	41.13899	-72.30342	R. Latham		Krombein	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034085
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-11	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034140
Melissodes agilis				1908-08-07	W. E. LaBerge	Adult	Male				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034063
Melissodes agilis	42.43813	-76.46667	J. Ramdas	1960-08-17	W. E. LaBerge	Adult	Female				https://www.discoverlife.org/mp/20l?id=CUIC_ENT00034120
Melissodes agilis	38.0608	-97.9294	Michener & Beamer	1949-09-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Mathewson, J	1952-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.0608	-97.9294	Michener & Beamer	1949-09-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9117	-95.3903	Danforth, Bryan	1986-07-31				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	LaBerge, Walley	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Rettenmeyer, Carl	1955-07-27				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Rettenmeyer, Carl	1955-07-27				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			White, Jimmy	1950-09-19				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1909-11-30				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Cane, James	1980-08-12				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	LaBerge, Walley	1954-08-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.2653	-97.3714	Beer, Robert	1951-08-14				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Cane, James	1980-08-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.5982	-100.9067	LaBerge, Walley	1932-08-30				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Hanson, W	1955-09-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.2798	-111.5504	Michener, Charles	1950-07-19				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Mathewson, J	1953-08-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.775	-95.1861	LaBerge, Walley	1953-08-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.8814	-94.8189	Michener, Charles	1952-08-20				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.0619	-97.0381	Michener & LaBerge	1951-09-06				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1911-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamer, Raymond					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.0608	-97.9294	Michener & Beamer	1949-09-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1909-11-30				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.1806	-99.0983	Michener & Beamer	1949-09-09				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	LaBerge, Walley	1953-09-07				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.0322	-97.6067	Beer, Robert	1951-08-14				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9792	-94.9683	Mathewson, J	1952-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	33.7206	-116.2147	Michener, Charles	1950-07-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamer, Raymond					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1911-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	34.0687	-109.2086	Michener, Charles	1964-08-16				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamer, Raymond					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9117	-95.3903	Danforth, Bryan	1986-07-31				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1911-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			LaBerge, Walley	1953-09-01				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9399	-99.8931	Michener & Beamer	1949-09-05				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9399	-99.8931	Michener & Beamer	1949-09-05				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.6306	-98.905	Michener & Beamer	1949-09-06				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Michener, Charles	1951-07-13				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	34.0522	-118.2428	Michener, Charles	1933-07-16				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.5814	-101.3547	Shinn, Alvin	1956-08-28				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-09-09				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.2056	-100.7017	Michener & Beamer	1949-09-06				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	LaBerge, Walley	1954-08-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.1649	-101.7819	Michener & LaBerge	1951-09-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.2806	-95.2417	Michener & Beamer	1949-09-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.0608	-97.9294	Michener & Beamer	1949-09-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.5982	-100.9067	LaBerge, W	1932-08-30				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.1981	-111.6506	Beamer, Raymond	1933-08-05				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.1806	-99.0983	Michener & Beamer	1949-09-09				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9049	-100.8628	Shinn, Alvin	1956-08-26				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamer, Raymond					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.6633	-111.8336	Ordway, Ellen	1959-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			White, Jimmy	1950-09-19				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Rettenmeyer, Carl	1955-07-27				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1910				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9772	-100.8628	Menke, H					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	LaBerge, W	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.0608	-97.9294	Michener & Beamer	1949-09-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9792	-94.9683	Michener, Charles	1952-08-27				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1910				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	33.9925	-117.5156	Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-29				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.1472	-98.0833	LaBerge, W	1952-08-27				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9117	-95.3903	Danforth, Bryan	1986				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.1472	-98.0833	LaBerge, W	1952-08-27				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	LaBerge, W	1954-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	LaBerge, W	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	34.0522	-118.2428	Michener, Charles	1933-07-16				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1910				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1910				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1911-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9792	-94.9683	LaBerge, W	1952-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9717	-95.235	Michener, Charles	1948				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1911-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.6633	-111.8336	Ordway, Ellen	1959-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.8814	-94.8189	Michener, Charles	1952-08-20				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1911-08-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.355	-98.4414	Michener, Charles	1950-07-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9792	-94.9683	Michener, Charles	1952-08-27				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.6633	-111.8336	Ordway, Ellen	1959-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9483	-100.8628	Michener & LaBerge	1951-09-03				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.3644	-98.7644	Michener & Beamer	1949-09-09				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.775	-95.1861	LaBerge, W	1953-08-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-22				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1953-08-15				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			LaBerge, W	1952-08-19				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.8792	-99.3264	Collier, James	1950-07-10				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9049	-100.8628	Shinn, Alvin	1956-08-26				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.6803	-97.6042	Michener & LaBerge	1951-09-01				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1910				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Williams, Francis	1912-08-09				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.81389	-109.3094	Snow, Francis					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.9806	-101.7522	LaBerge, W	1952-08-30				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1952-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-08-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.8814	-94.8189	Michener, Charles	1952-08-20				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.0608	-97.9294	Michener & Beamer	1949-09-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.9792	-94.9683	Mathewson, J	1952-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			Michener & Beamer	1949-09-09				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.4947	-120.8456	Snelling, Roy	1951-07-17				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1893-07-14				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11639	-88.24333		1911-07-24	T.H.F.			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1893-04-04				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1904-10-05				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.53694	-89.3575		1968-08-16	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.3457	-88.8432		1966-08-19	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1892-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.6344	-112.3639		1959-08-18	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.6161	-88.3851		1966-08-19	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.45	-76.466		1960-07-23	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	43.17528	-90.06778		1967-07-30	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	37.62861	-118.995		1988-05-22	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11639	-88.24333		1915-07-25	T.H.F.			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.06	-103.68		1960-08-01	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1893-08-22				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.1106	-88.2072		1924-08-17	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.411	-89.866		1974-07-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.58694	-88.38111		1966-08-12	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1893-09-21				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.3457	-88.8432		1966-08-19	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.97556	-111.9525		1968-09-05	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.8747	-88.7756		1966-07-20	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167						This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.97167	-95.235		1963-08-24	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	31.0312	-103.8121		1970-09-15	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis				1982-08-15	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	31.169	-100.077		1956-08-28	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.53694	-89.3575		1968-08-16	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	43.17528	-90.06778		1967-07-30	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.04	-103.68		1959-07-25	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.3575	-100.44139		1966-08-26	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.1106	-88.2072		1924-08-24	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1908-10-13				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.28056	-95.24167		1949-09-24	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1894-07-19				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167						This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.83194	-119.35694		1963-08-14	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis				1982-07-30	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11639	-88.24333		1911-07-24	T.H.F.			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.411	-89.866		2023-07-23				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.21139	-96.62		1964-08-19				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.53694	-89.3575		1968-08-16	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.28	-89.882		1972-09-13	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.28	-89.882		1970-09-10	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.28	-89.882		1970-09-09	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.474	-109.182		1965-09-07	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11639	-88.24333		1915-08-08	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.53694	-89.3575		1968-08-16	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.6075	-103.58333		1955-08-10	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	36.67	-119.83		1963-10-02	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.53694	-89.3575		1968-08-16	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.1106	-88.2072		1906-07-31	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.35083	-101.70972		1950-08-20	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1892-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.06	-103.68		1960-08-01	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1898-10-03				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	47.1915	-95.177		1915-07-05	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.533	-89.55		1969-08-07	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.3003	-89.9046		1968-08-05	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.90333	-100.26861		1912-08-09	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.1106	-88.2072		1929-08-04	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.97167	-95.235		1954-08-28				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.04	-103.68		1959-07-25	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.46167	-88.16472		1968-08-23	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1892-07-25				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.28	-89.882		1970-09-09	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11056	-88.20722		1969-08-13	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11639	-88.24333		1911-07-13	T.H.F.			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.421	-90.015		1968-08-06	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	38.97167	-95.235		1963-08-24	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11639	-88.24333		1915-07-30				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis					W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1893-09-28				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.9849	-90.9362		1981-08-29				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	35.1354	-111.7297		1964-08-30	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.17	-101.05		1905-06-24	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.53694	-89.3575		1968-08-16	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.11639	-88.24333		1915-07-21	T.H.F.			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.98528	-104.82		1939-08-02	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1902-06-14				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1904-09-26				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.1137	-88.1157		1966-04-06	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.111	-88.207		1924-08-08	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1902-06-14				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1898-10-03				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.7123	-90.3096		1969-08-21	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	42.46167	-88.16472		1968-08-23	LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.421	-90.015		1968-08-06	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.83111	-90.55944		1917-08-22	W. E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	40.3875	-112.5618		1955-08-15	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.3457	-88.8432		1966-08-19	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1893-08-19				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167						This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.27972	-89.88167		1893-09-21				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.671	-89.936		1968-08-22	W.E. LaBerge			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	31.4383	-110.0972		1907-07-28				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			C. H. Kennedy	1926-08-18				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	39.9611	-82.9989	J. E. Gillaspy	1941-08-02				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.7356	-111.8336		1912-09-05				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.5103	-112.0147	G. F. Knowlton					This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			J. S. Hine	1907-07-28				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	31.4383	-110.0972		1907-07-28				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis			R. W. Strandtmann	1942-08-09				This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.4489	-82.7081						This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	43.81483	-79.97683						This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	43.81483	-79.97683						This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	25.230689	-100.818022	Ricardo Ayala	1991-08-25	Douglas Yanega			This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis								This data was accessed through the GBIF Data Portal			https://www.gbif.org/species/5040606
Melissodes agilis	41.21284504	-86.77430515	Martin R. Lucas	2017-10-16				ID'd by Dr. John Ascher on bugguide. I believe this is a male, but I'm not sure. http://bugguide.net/node/view/1410732	© Martin R. Lucas some rights reserved	Martin R. Lucas	https://www.discoverlife.org/mp/20l?id=INAT8425675
Melissodes agilis			John Baker		Leo Donovall 20090626			male			https://www.discoverlife.org/mp/20l?id=I_PDA22
Melissodes agilis			John Baker		Leo Donovall, 200918072009			female			https://www.discoverlife.org/mp/20l?id=I_PDA20
Melissodes agilis			Kevin C. Matteson	2005-08-11							https://www.discoverlife.org/mp/20l?id=KCM1085
Melissodes agilis			Kevin C. Matteson	2005-08-11							https://www.discoverlife.org/mp/20l?id=KCM1076
Melissodes agilis			Kevin C. Matteson	2005-08-11							https://www.discoverlife.org/mp/20l?id=KCM1093
Melissodes agilis			Kevin C. Matteson	2005-08-15							https://www.discoverlife.org/mp/20l?id=KCM1074
Melissodes agilis			Kevin C. Matteson	2005-08-15							https://www.discoverlife.org/mp/20l?id=KCM1073
Melissodes agilis			Kevin C. Matteson	2005-08-11							https://www.discoverlife.org/mp/20l?id=KCM1095
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1071
Melissodes agilis			Kevin C. Matteson	2005-09-07							https://www.discoverlife.org/mp/20l?id=KCM1069
Melissodes agilis			Kevin C. Matteson	2005-07-14							https://www.discoverlife.org/mp/20l?id=KCM1083
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1090
Melissodes agilis			Kevin C. Matteson	2006-08-19							https://www.discoverlife.org/mp/20l?id=KCM1092
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1067
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1082
Melissodes agilis			Kevin C. Matteson	2004-08-24							https://www.discoverlife.org/mp/20l?id=KCM1087
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1064
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1066
Melissodes agilis			Kevin C. Matteson	2005-08-11							https://www.discoverlife.org/mp/20l?id=KCM1077
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1081
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1079
Melissodes agilis			Kevin C. Matteson	2005-08-24							https://www.discoverlife.org/mp/20l?id=KCM1075
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1091
Melissodes agilis			Kevin C. Matteson	2005-07-15							https://www.discoverlife.org/mp/20l?id=KCM1070
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1065
Melissodes agilis			Kevin C. Matteson	2005-08-11							https://www.discoverlife.org/mp/20l?id=KCM1084
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1080
Melissodes agilis			Kevin C. Matteson	2003-07-31							https://www.discoverlife.org/mp/20l?id=KCM1078
Melissodes agilis			Kevin C. Matteson	2004-08-25							https://www.discoverlife.org/mp/20l?id=KCM1088
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1089
Melissodes agilis			Kevin C. Matteson	2005-08-11							https://www.discoverlife.org/mp/20l?id=KCM1094
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1068
Melissodes agilis			Kevin C. Matteson	2005-08-04							https://www.discoverlife.org/mp/20l?id=KCM1072
Melissodes agilis	39.01256	-95.28763	Brooks, Robert	1979-09-15	Wright, Karen	Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM1575179
Melissodes agilis	38.9717	-95.235	Michener, Charles	1951-07-14		Adult					https://www.discoverlife.org/mp/20l?id=KSEM512854
Melissodes agilis			Beamer, Raymond	1916-10-13		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513291
Melissodes agilis	38.36556	-105.7572	Michener, Charles	1964-08-11	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM486960
Melissodes agilis	32.02322	-109.0306	Michener, Charles	1964-08-16	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM486945
Melissodes agilis			Decelles, Paul	1977-08-13		Adult					https://www.discoverlife.org/mp/20l?id=KSEM512861
Melissodes agilis	37.10417	-113.5833	Knowlton, George	1954-09-09	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487254
Melissodes agilis			Knowlton, George	1949-08-20		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487245
Melissodes agilis			Michener & Beamer	1949-08-18		Adult					https://www.discoverlife.org/mp/20l?id=KSEM512778
Melissodes agilis			Martin, C	1923-07-16		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513349
Melissodes agilis			Williams, Francis	1910-10-13		Adult		dates interpreted from Hunter, S.J. 1914. Historical Account [of the Department of Entomology at the University of Kansas". The Kansas University Science Bulletin 8(1).			https://www.discoverlife.org/mp/20l?id=KSEM513034
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1952-07-25	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516165
Melissodes agilis	35.08444	-106.6506	Michener, Charles	1935-09-01		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487827
Melissodes agilis	35.3456	-101.38	Michener, Baker, Kamm	1970-09-18	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487466
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1951-07-17		Adult					https://www.discoverlife.org/mp/20l?id=KSEM486895
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516098
Melissodes agilis	38.13311	-97.92944	LaBerge, Walley	1952-08-26		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513144
Melissodes agilis			Bohart, George	1953-08-17		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487211
Melissodes agilis	39.80056	-97.79112	Williams, Francis	1911-08-23		Adult		1950 ft.			https://www.discoverlife.org/mp/20l?id=KSEM513004
Melissodes agilis	38.36556	-105.7572	Shinn, Alvin	1958-08-01		Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM1575207
Melissodes agilis	39.03	-95.235	Michener, Charles	1986-09-27	Wright, Karen, 2016	Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM1575884
Melissodes agilis	38.06083	-97.92944	Michener & Beamer	1949-09-04		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513125
Melissodes agilis	34.99095	-111.74254	Snow, Francis	1902-08-13		Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.			https://www.discoverlife.org/mp/20l?id=KSEM513457
Melissodes agilis	37.27528	-107.8794	Michener, Charles	1957-08-07	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487424
Melissodes agilis			Knowlton, George	1945-08-10		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487232
Melissodes agilis	39.02	-95.3	Michener, Charles	1980-09-04	Wright, Karen, 2016	Unknown	Male				https://www.discoverlife.org/mp/20l?id=KSEM1575880
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1952-07-25	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516189
Melissodes agilis	37.79889	-96.44611	Michener & Beamer	1949-09-07		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513294
Melissodes agilis	42.6075	-103.5833	LaBerge, Walley	1955-08-11	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487567
Melissodes agilis	37.97722	-100.8628	Michener, Charles	1950-07-22		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513114
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516094
Melissodes agilis	35.40667	-106.1519	Beamers, Liang, LaBerge	1952-07-18		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487650
Melissodes agilis	35.08444	-106.6506	Michener, Charles	1935-09-01		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487666
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516140
Melissodes agilis	30.9331	-103.8038	Michener, Baker, Kamm	1970-09-15	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487462
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1951-07-17		Adult					https://www.discoverlife.org/mp/20l?id=KSEM486889
Melissodes agilis			Williams, Francis	1910-10-13		Adult		dates interpreted from Hunter, S.J. 1914. Historical Account [of the Department of Entomology at the University of Kansas". The Kansas University Science Bulletin 8(1). "3150 ft."			https://www.discoverlife.org/mp/20l?id=KSEM513013
Melissodes agilis	38.915955	-101.763389	Snow, Francis			Adult					https://www.discoverlife.org/mp/20l?id=KSEM487614
Melissodes agilis	39.0997	-94.5783	Shinners, L	1957-09-13		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487931
Melissodes agilis	48.2638	-97.8128	LaBerge, Walley		LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487868
Melissodes agilis	41.7102	-103.66	LaBerge, Walley	1955-08-12	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487523
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15		Adult					https://www.discoverlife.org/mp/20l?id=KSEM516041
Melissodes agilis			Ordway, Ellen	1959-08-18	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487091
Melissodes agilis			Michener & Beamer	1949-08-25		Adult					https://www.discoverlife.org/mp/20l?id=KSEM512740
Melissodes agilis	38.36556	-105.7572	Michener, Charles	1964-08-11	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM486957
Melissodes agilis	38.18056	-99.09833	LaBerge, Walley	1952-08-28		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513151
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1951-07-17		Adult					https://www.discoverlife.org/mp/20l?id=KSEM486908
Melissodes agilis			Williams, Francis	1910-10-13		Adult		dates interpreted from Hunter, S.J. 1914. Historical Account [of the Department of Entomology at the University of Kansas". The Kansas University Science Bulletin 8(1).			https://www.discoverlife.org/mp/20l?id=KSEM513021
Melissodes agilis	30.9331	-103.8038	Michener, Baker, Kamm	1970-09-15	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487465
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15		Adult					https://www.discoverlife.org/mp/20l?id=KSEM516057
Melissodes agilis	35.08444	-106.6506	Snow, Francis	1894-08-13		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487627
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1952-07-25	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516170
Melissodes agilis	34.05222	-118.2428	Michener, Charles	1933-07-16		Adult					https://www.discoverlife.org/mp/20l?id=KSEM486911
Melissodes agilis			Michener & Beamer	1949-08-22		Adult					https://www.discoverlife.org/mp/20l?id=KSEM512800
Melissodes agilis			Ordway, Ellen	1959-08-18	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487083
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15		Adult					https://www.discoverlife.org/mp/20l?id=KSEM516059
Melissodes agilis	39.55861	-111.8611	Knowlton, George	1961-08-17	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487116
Melissodes agilis			Beamers, LaBerge, Liang, Weiner, Wolf	1952-06-25		Adult					https://www.discoverlife.org/mp/20l?id=KSEM486837
Melissodes agilis			Knowlton, George	1945-08-11		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487228
Melissodes agilis	38.96056	-112.3356	Knowlton, George	1962-08-28	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487120
Melissodes agilis	42.8294	-102.9009	LaBerge, Walley	1954-08-06	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487485
Melissodes agilis	37.06194	-97.03806	Michener & LaBerge	1951-09-06		Adult					https://www.discoverlife.org/mp/20l?id=KSEM485913
Melissodes agilis	35.08444	-106.6506	Michener, Charles	1935-09-01		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487828
Melissodes agilis	34.99095	-111.74254	Snow, Francis	1902-08-13		Adult		location and dates inferred from Snow, F.H. 1904. Lists of Coleoptera, Lepidoptera, Diptera and Hemiptera collected in Arizona by the entomological expeditions of the University of Kansas in 1902 and 1903. Kansas University Science Bulletin 2(12): 323-350.			https://www.discoverlife.org/mp/20l?id=KSEM513455
Melissodes agilis	41.66328	-111.8336	Ordway, Ellen	1959-08-18		Adult					https://www.discoverlife.org/mp/20l?id=KSEM486818
Melissodes agilis	38.18056	-99.09833	Michener & Beamer	1949-09-09		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513171
Melissodes agilis	40.9194	-100.4944	Rettenmeyer, Carl	1955-08-13	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487535
Melissodes agilis	39.55861	-111.8611	Knowlton, George	1961-08-17	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487114
Melissodes agilis	40.385	-101.2342	LaBerge, Walley	1954-07-08		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487548
Melissodes agilis	42.42	-103.7933	LaBerge, Walley	1955-08-12	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487540
Melissodes agilis	42.3276	-102.2028	LaBerge, Walley	1955-08-10	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487519
Melissodes agilis	40.385	-101.2342	LaBerge, Walley	1954-07-08		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487555
Melissodes agilis	38.97917	-94.96833	Michener, Charles	1952-08-27		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513085
Melissodes agilis	38.14722	-98.08333	LaBerge, Walley	1952-08-27		Adult					https://www.discoverlife.org/mp/20l?id=KSEM513334
Melissodes agilis			Titus, E	1990-08-02		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487127
Melissodes agilis	42.42	-103.7933	LaBerge, Walley	1955-08-12	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487546
Melissodes agilis	39.55861	-111.8611	Knowlton, George	1961-08-17	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487115
Melissodes agilis	38.36556	-105.7941	Shinn, A & Shinn, R	1958-08-03	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487434
Melissodes agilis			Knowlton, George	1945-08-11	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487100
Melissodes agilis	35.81389	-109.3094	Snow, Francis			Adult					https://www.discoverlife.org/mp/20l?id=KSEM513388
Melissodes agilis			Michener, Charles	1964-08-11	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM486964
Melissodes agilis	42.955	-115.3	Michener & McGee	1968-09-05	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM487925
Melissodes agilis	34.25639	-103.3483	Michener, Baker, Kamm	1970-09-17	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM486933
Melissodes agilis	35.81389	-109.3094	Snow, Francis			Adult					https://www.discoverlife.org/mp/20l?id=KSEM513450
Melissodes agilis	38.86667	-95.355	LaBerge, Walley	1953-09-12		Adult					https://www.discoverlife.org/mp/20l?id=KSEM512872
Melissodes agilis	37.49472	-120.8456	Snelling, Roy	1953-08-15	LaBerge, Walley	Adult					https://www.discoverlife.org/mp/20l?id=KSEM516116
Melissodes agilis	35.08444	-106.6506	Michener, Charles	1935-09-01		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487667
Melissodes agilis			Williams, Francis	1910-10-13		Adult		dates interpreted from Hunter, S.J. 1914. Historical Account [of the Department of Entomology at the University of Kansas". The Kansas University Science Bulletin 8(1). "3300 ft."			https://www.discoverlife.org/mp/20l?id=KSEM513039
Melissodes agilis			Porter, Wayne	2025-07-20		Adult					https://www.discoverlife.org/mp/20l?id=KSEM487654
Melissodes agilis	38.775	-95.18611	LaBerge, Walley	1953-08-17		Adult					https://www.discoverlife.org/mp/20l?id=KSEM512886
Melissodes agilis			Mumford R	1959-08-29	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43148
Melissodes agilis	41.622815	-87.191702	Grundel R	2004-07-13	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ13646
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43097
Melissodes agilis	40.120468	-85.4589	Rob Jean	2018-07-15	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ34246
Melissodes agilis				1959-09-20	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43149
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43093
Melissodes agilis			Johnson MD	1975-09-06		Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43156
Melissodes agilis	39.659841	-87.379222	Rob Jean	2018-08-28	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ10611
Melissodes agilis			Johnson MD	1977-08-01		Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43158
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43100
Melissodes agilis	39.832627	-86.679932	Rob Jean	2018-07-16	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ22726
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43099
Melissodes agilis	38.997709	-87.183355	Scott PE	2010-07-16	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ14006
Melissodes agilis	38.997709	-87.183355	Bordenkager T	2010-07-16	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ14004
Melissodes agilis			Montgom BE	1952-07-28	Krombein			labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43088
Melissodes agilis	40.659838	-87.055429	Cross Chandler	1958-08-13	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ16759
Melissodes agilis			Montgom BE	1952-07-28	Krombein			labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43086
Melissodes agilis	39.575352	-86.816148	Rob Jean	2018-07-11	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ22219
Melissodes agilis			Montgom BE	1952-07-28	Krombein			labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43082
Melissodes agilis				1958-07-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43116
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43126
Melissodes agilis			Montgom BE	1956-08-31	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43114
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43139
Melissodes agilis	38.997709	-87.183355	Scott PE	2010-07-17	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ14007
Melissodes agilis			Montgom BE	1952-07-28	Krombein			labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43084
Melissodes agilis	41.606225	-85.848624	Rice Jim	1971-08-02	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ33873
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43113
Melissodes agilis	41.473095	-87.061141		1949-09-01	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ16725
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43144
Melissodes agilis	41.10629	-87.440905	Jean RP	2003-07-30	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ7087
Melissodes agilis			Johnson MD	1979-08-31	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43160
Melissodes agilis				1962-08-08	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43152
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43117
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43106
Melissodes agilis			Montgom BE	1958-09-09	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43131
Melissodes agilis			Montgom BE	1952-07-28	Krombein			labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43083
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43125
Melissodes agilis	41.473095	-87.061141		1949-09-01	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ16726
Melissodes agilis			Montgom BE	1958-10-03							https://www.discoverlife.org/mp/20l?id=RJ43137
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43118
Melissodes agilis	39.575352	-86.816148	Rob Jean	2018-07-11	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ22217
Melissodes agilis			Montgom BE	1958-09-08	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43129
Melissodes agilis	41.599541	-87.446931	Rob Jean	2021-07-10	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ6143
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43096
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43091
Melissodes agilis	39.638675	-86.240547	Rob Jean	2025-08-26	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ28762
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43092
Melissodes agilis			Montgom BE	1958-09-09	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43134
Melissodes agilis			Chandler L	1958-09-16	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43135
Melissodes agilis	39.659841	-87.379222	Rob Jean	2018-08-28	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ10612
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43090
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43121
Melissodes agilis	39.832627	-86.679932	Rob Jean	2018-07-16	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ22725
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43140
Melissodes agilis				1959-09-20	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43150
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43142
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43098
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43145
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43112
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43146
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43124
Melissodes agilis			Chandler L	1958-09-16	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43136
Melissodes agilis			Montgom BE	1958-09-09	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43133
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43119
Melissodes agilis			Mumford R	1959-08-29	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43147
Melissodes agilis	40.659838	-87.055429	Cross Chandler	1958-08-13	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ16757
Melissodes agilis			Montgom BE	1954-07-13	LaBerge WE						https://www.discoverlife.org/mp/20l?id=RJ43089
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43138
Melissodes agilis			Milliken HE	1949-08-08	LaBerge WE						https://www.discoverlife.org/mp/20l?id=RJ43081
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43102
Melissodes agilis	39.658369	-87.473353		1960-08-14	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ4449
Melissodes agilis	40.659838	-87.055429	Cross Chandler	1958-08-13	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ16760
Melissodes agilis	39.658369	-87.473353		1960-08-14	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ4451
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43104
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43123
Melissodes agilis			Montgom BE	1952-07-28	Krombein			labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43085
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43107
Melissodes agilis			Montgom BE	1958-09-09	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43132
Melissodes agilis			Montgom BE	1957-09-08				labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43115
Melissodes agilis				1959-09-20	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43151
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43095
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43143
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43108
Melissodes agilis	40.659838	-87.055429	Cross Chandler	1958-08-13	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ16758
Melissodes agilis	41.174132	-87.100428	Jean RP	2003-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ14959
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43110
Melissodes agilis	39.575352	-86.816148	Rob Jean	2018-07-11	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ22218
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43094
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43122
Melissodes agilis	41.080595	-86.891963	Cross Chandler	1958-08-13	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ21913
Melissodes agilis			Montgom BE	1955-08-25	Mitchell TB						https://www.discoverlife.org/mp/20l?id=RJ43103
Melissodes agilis			Cross Chandler	1958-08-15	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43128
Melissodes agilis	41.10629	-87.440905	Jean RP	2001-07-08	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ7086
Melissodes agilis			Montgom BE	1952-07-28	Krombein			labeled Mel pennsylvanica			https://www.discoverlife.org/mp/20l?id=RJ43087
Melissodes agilis			Johnson MD	1979-08-07	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43159
Melissodes agilis	41.473095	-87.061141		1949-09-01	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ16724
Melissodes agilis				1958-10-03	Jean RP	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ43141
Melissodes agilis			RL Minckley	2001-08-10		Adult					https://www.discoverlife.org/mp/20l?id=RMY11023
Melissodes agilis			RL Minckley	2001-08-07		Adult					https://www.discoverlife.org/mp/20l?id=RMY11024
Melissodes agilis			RL Minckley	2001-08-25		Adult					https://www.discoverlife.org/mp/20l?id=RMY11021
Melissodes agilis			RL Minckley	2001-07-23		Adult					https://www.discoverlife.org/mp/20l?id=RMY11028
Melissodes agilis			RL Minckley	2001-08-03		Adult					https://www.discoverlife.org/mp/20l?id=RMY11026
Melissodes agilis			RL Minckley	2001-08-04		Adult					https://www.discoverlife.org/mp/20l?id=RMY11027
Melissodes agilis			RL Minckley	2001-08-03		Adult					https://www.discoverlife.org/mp/20l?id=RMY11025
Melissodes agilis			RL Minckley	2001-07-18		Adult					https://www.discoverlife.org/mp/20l?id=RMY11029
Melissodes agilis			RL Minckley	2000-08-15		Adult					https://www.discoverlife.org/mp/20l?id=RMY11031
Melissodes agilis			K Toal	2000-08-16		Adult					https://www.discoverlife.org/mp/20l?id=RMY3744
Melissodes agilis			RL Minckley	2001-08-10		Adult					https://www.discoverlife.org/mp/20l?id=RMY11022
Melissodes agilis			RL Minckley	2000-08-15		Adult					https://www.discoverlife.org/mp/20l?id=RMY11030
Melissodes agilis			A Romero	2001-08-27		Adult					https://www.discoverlife.org/mp/20l?id=RMY2402
Melissodes agilis	39.06	-78.06				Unknown	Male				https://www.discoverlife.org/mp/20l?id=TAI5280
Melissodes agilis	41.40806	-72.90167	K. Stoner	2005-08-10	S. Droege	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00042304
Melissodes agilis	41.32556	-72.72778	C. T. Maier	2009-08-01	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00039163
Melissodes agilis	44.38838	-73.81542	unknown, New York State Museum Collection	1888-08-21	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055475
Melissodes agilis	41.28166	-72.81083	H. W. Winkley	1904-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00031793
Melissodes agilis	41.33055	-72.97166	W. E. Britton	1905-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00030497
Melissodes agilis	41.40583	-72.90472	C. T. Maier	2009-08-06	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00039162
Melissodes agilis	41.40583	-72.90472	T. Zarrillo	2009-08-10	S. Droege	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00037208
Melissodes agilis	44.21611	-73.59027	unknown, New York State Museum Collection	1904-08-26	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055472
Melissodes agilis	41.28166	-72.81083	H. W. Winkley	1905-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00030502
Melissodes agilis	41.22222	-73.05638	Geo. Dimmock		J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00028387
Melissodes agilis	41.33055	-72.97166	W. E. Britton	1905-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00030500
Melissodes agilis	44.38838	-73.81542	unknown, New York State Museum Collection	1888-08-21	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055476
Melissodes agilis	41.86666	-72.44944	H. L. Viereck	1905-08-23	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00031795
Melissodes agilis	41.40806	-72.90167	K. Stoner	2005-08-10	S. Droege	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00042302
Melissodes agilis	41.95527	-72.82861	W. E. Britton	1924-09-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00030503
Melissodes agilis	41.33055	-72.97166	W. E. Britton	1905-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00030498
Melissodes agilis	41.33055	-72.97166	W. E. Britton	1905-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00030501
Melissodes agilis	44.38838	-73.81542	unknown, New York State Museum Collection	1888-08-21	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055474
Melissodes agilis	41.40806	-72.90167	K. Stoner	2005-08-10	S. Droege	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00042303
Melissodes agilis	41.47027	-72.87388	T. Zarrillo	2009-08-27	Tracy Zarrillo	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00039368
Melissodes agilis	41.33055	-72.97166	W. E. Britton	1905-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00030499
Melissodes agilis	44.38838	-73.81542	unknown, New York State Museum Collection	1888-08-18	J. S. Ascher	Adult	Female				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055473
Melissodes agilis	44.19888	-73.78194	unknown, New York State Museum Collection	1889-08-05	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055478
Melissodes agilis	41.28166	-72.81083	H. W. Winkley	1904-08-03	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00031792
Melissodes agilis	41.28166	-72.81083	H. W. Winkley	1904-08-11	J. S. Ascher		adult sex unknown				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00031794
Melissodes agilis	43.0529	-74.3437	unknown, New York State Museum Collection	1906-08-15	J. S. Ascher	Adult	Male				https://www.discoverlife.org/mp/20l?id=UCMS_ENT00055477
Melissodes agilis	43.3722	-84.029	Megan Houle, Maria Salem, Aaron Parsons	2023-11-29	Sam Droege	Unknown	Male	Silphium laciniatum, Ratibida pinnata, Lythrum salicaria, Vernonia gigantea, Physostegia virginiana, Silphium perfoliatum			https://www.discoverlife.org/mp/20l?id=USGS_DRO658334
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658652
Melissodes agilis	43.6617	-101.7683	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male	Along Craven Rd. to Wanblee. 10 w, 10y, 10bl			https://www.discoverlife.org/mp/20l?id=USGS_DRO266813
Melissodes agilis	43.7625	-101.9547	B Crew	2017-01-27	Jelle Devalez	Unknown	Male	Badlands and grassland along castle trail.  MELOFF, HELANN, LACSER. 10 y 10 b 10 w.			https://www.discoverlife.org/mp/20l?id=USGS_DRO270588
Melissodes agilis	38.6828	-76.1594	Sam W. Droege	2025-01-22	Sam Droege	Unknown	Male	walk around the paved circle of the oxford conservation park, pickerelweed, black eyed susan, daisy fleabane, yellow composites, bull thistle, white sweetclover			https://www.discoverlife.org/mp/20l?id=USGS_DRO788794
Melissodes agilis	43.8796	-102.2486	PR	2017-01-27	Sam Droege	Unknown	Male	Burn Curlew Control ;Treatment : Control			https://www.discoverlife.org/mp/20l?id=USGS_DRO331425
Melissodes agilis	46.5967	-90.9669	Megan Houle, Maria Salem, Destiney Elder-Hall	2023-11-29	Sam Droege	Unknown	Male	Pilosella aurantiaca, Pilosella caespitosa, Ranunculus acris, Lotus corniculatus, Achillea millefolium, Verbena hastata, Eutrochium maculatum, Cirsium arvense , Asclepias syriaca, Cicuta douglasii, Erigeron annuus			https://www.discoverlife.org/mp/20l?id=USGS_DRO656840
Melissodes agilis	46.4838	-96.3569	Pennarola&Leone	2018-10-31	Sam Droege	Unknown	Male	127			https://www.discoverlife.org/mp/20l?id=USGS_DRO516427
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO067017
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO067016
Melissodes agilis	43.7625	-101.9547	B Crew	2017-01-27	Jelle Devalez	Unknown	Male	Badlands and grassland along castle trail.  MELOFF, HELANN, LACSER. 10 y 10 b 10 w.			https://www.discoverlife.org/mp/20l?id=USGS_DRO270587
Melissodes agilis	43.8429	-102.1993	B Iberle & D Stillson	2017-01-27	Jelle Devalez	Unknown	Male	Used blue, yellow, white colored bowls.;Crazy storm in afternoon, hail, strong winds.			https://www.discoverlife.org/mp/20l?id=USGS_DRO189193
Melissodes agilis	38.9137	-76.1544	Sarah Claggett	2017-01-27	Karen Wright	Unknown	Male	32 bowls put out over 2 days in cornfield next to woods on Wye Education and Research Center;5w 5y 5b			https://www.discoverlife.org/mp/20l?id=USGS_DRO084098
Melissodes agilis	38.9275	-75.5347	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO074369
Melissodes agilis	38.6828	-76.1594	Sam W. Droege	2025-01-22	Sam Droege	Unknown	Male	walk around the paved circle of the oxford conservation park, pickerelweed, black eyed susan, daisy fleabane, yellow composites, bull thistle, white sweetclover			https://www.discoverlife.org/mp/20l?id=USGS_DRO788795
Melissodes agilis	38.8966	-76.1151	Cathy Stragar	2017-01-27	Sam Droege	Unknown	Male	yellow, blue and white pan traps, 15 on a 50 meter transect.;Weather: Cloudy on the 28th and clear on the 29th. mid 80's			https://www.discoverlife.org/mp/20l?id=USGS_DRO043725
Melissodes agilis	38.948	-77.0805	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Monarda and Zinnia			https://www.discoverlife.org/mp/20l?id=USGS_DRO106694
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO067023
Melissodes agilis	43.7605	-101.9314	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male	Along loop road, between Saddle Pass and Cliff Shelf Nature Trail. 10 w, 10y, 10bl			https://www.discoverlife.org/mp/20l?id=USGS_DRO266874
Melissodes agilis	43.7605	-101.9314	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male	Along loop road, between Saddle Pass and Cliff Shelf Nature Trail. 10 w, 10y, 10bl			https://www.discoverlife.org/mp/20l?id=USGS_DRO266898
Melissodes agilis	38.5904	-75.6384	Cathy Stragar	2017-01-27	Sam Droege	Unknown	Male	3 Springstar Blue Vane Traps spaced 25 meters apart on a 50 meter transect,with no pest strips. Suspended 1 meter.			https://www.discoverlife.org/mp/20l?id=USGS_DRO063326
Melissodes agilis	43.8429	-102.1993	B Iberle & D Stillson	2017-01-27	Jelle Devalez	Unknown	Male	Used blue, yellow, white colored bowls.;Crazy storm in afternoon, hail, strong winds.			https://www.discoverlife.org/mp/20l?id=USGS_DRO189180
Melissodes agilis	43.7189	-102.5773	B Iberle & D Stillson	2017-01-27	Jelle Devalez	Unknown	Male	Used blue, yellow, and white cups. Hot and sunny.			https://www.discoverlife.org/mp/20l?id=USGS_DRO189344
Melissodes agilis	40.032	-75.3904	Matthew J. Sarver	2022-12-20	Sam Droege	Unknown	Male	Netted on Helianthus annuus			https://www.discoverlife.org/mp/20l?id=USGS_DRO680519
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	Organic			https://www.discoverlife.org/mp/20l?id=USGS_DRO100789
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO067018
Melissodes agilis	43.7821	-102.015	B Crew	2017-01-27	Sam Droege	Unknown	Male	Grassland in badlands nearby Fossil Trail. 10 y 10 b 10 w			https://www.discoverlife.org/mp/20l?id=USGS_DRO258235
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658638
Melissodes agilis	47.082	-96.3382	P. Pennarola	2021-07-18	Sam Droege	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO489141
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164053
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO067019
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658647
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164052
Melissodes agilis	38.8778	-76.6695	Sam Droege	2017-01-27	Sam Droege	Unknown	Male	Milt's Sand Pit, Sunny low 80's, blooming composites and goldenrod predominate, late   afternoon collecting			https://www.discoverlife.org/mp/20l?id=USGS_DRO083677
Melissodes agilis	39.0164	-76.8515	Sam Droege and A. Farb	2017-01-27	Sam Droege	Unknown	Male	Sunny 90s hand collecting on plantings around buildings and in nearby fields			https://www.discoverlife.org/mp/20l?id=USGS_DRO178216
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164064
Melissodes agilis	42.0002	-76.5485	Sam Droege	2017-01-27	Sam Droege	Unknown	Male	About 15 minutes of collecting.  70's very cloudy.  Mostly non-native weeds by parking lot			https://www.discoverlife.org/mp/20l?id=USGS_DRO134187
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164044
Melissodes agilis	43.3722	-84.029	Megan Houle, Maria Salem, Aaron Parsons	2023-11-29	Sam Droege	Unknown	Male	Silphium laciniatum, Ratibida pinnata, Lythrum salicaria, Vernonia gigantea, Physostegia virginiana, Silphium perfoliatum			https://www.discoverlife.org/mp/20l?id=USGS_DRO658340
Melissodes agilis	43.7625	-101.9547	B Crew	2017-01-27	Jelle Devalez	Unknown	Male	Badlands and grassland along castle trail.  MELOFF, HELANN, LACSER. 10 y 10 b 10 w.			https://www.discoverlife.org/mp/20l?id=USGS_DRO270678
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164056
Melissodes agilis	39.2575	-76.5023	Sam Droege and Leo Shapiro	2017-01-27	Sam Droege	Unknown	Male	sunny 80's			https://www.discoverlife.org/mp/20l?id=USGS_DRO167869
Melissodes agilis	43.7484	-101.9454	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male	Along loop road, between Saddle Pass and Cliff Shelf Nature Trail. 10 w, 10y, 10bl			https://www.discoverlife.org/mp/20l?id=USGS_DRO266931
Melissodes agilis	40.0152	-76.2888	Sam Droege	2017-01-27	Sam Droege	Unknown	Male	Upper 80's sunny, under powerlines and in a community garden, low plant diversity in under the powerlines			https://www.discoverlife.org/mp/20l?id=USGS_DRO081645
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658656
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164063
Melissodes agilis	43.8429	-102.1993	B Iberle & D Stillson	2017-01-27	Jelle Devalez	Unknown	Male	Used blue, yellow, white colored bowls.;Crazy storm in afternoon, hail, strong winds.			https://www.discoverlife.org/mp/20l?id=USGS_DRO189118
Melissodes agilis	43.7578	-101.9757	Jelle Devalez, B. Iberle, D. Campbell	2017-01-27	Jelle Devalez	Unknown	Male	white, blue and yellow traps in burned area next to Saddle Pass parking lot. Sunny weather.			https://www.discoverlife.org/mp/20l?id=USGS_DRO188807
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	Organic			https://www.discoverlife.org/mp/20l?id=USGS_DRO092097
Melissodes agilis	42.6473	-85.3842	Megan Houle, Maria Salem	2023-11-29	Sam Droege	Unknown	Male	Achillea millefolium, Veronicastrum virginicum, Silphium perfoliatum, Silphium laciniatum, Cirsium arvense, Rudbeckia hirta, Tradescantia ohiensis, Euphorbia corollata, Liatris spicata, Dalea purpurea, Monarda fistulosa, Erigeron annuus, Echinacea angustifolia, Ratibida pinnata			https://www.discoverlife.org/mp/20l?id=USGS_DRO657131
Melissodes agilis	43.7154	-102.5446	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO165166
Melissodes agilis	40.0152	-76.2888	Sam Droege	2017-01-27	Sam Droege	Unknown	Male	Upper 80's sunny, under powerlines and in a community garden, low plant diversity in under the powerlines			https://www.discoverlife.org/mp/20l?id=USGS_DRO081643
Melissodes agilis	43.5784	-101.6937	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male	Along Craven Rd. to Wanblee. 10 w, 10y, 10bl			https://www.discoverlife.org/mp/20l?id=USGS_DRO266828
Melissodes agilis	46.6414	-96.4625	Pennarola&Leone	2021-07-18	Sam Droege	Unknown	Male	62			https://www.discoverlife.org/mp/20l?id=USGS_DRO517553
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO067013
Melissodes agilis	45.3449	-95.3201	Pennarola&Leone	2018-10-31	Sam Droege	Unknown	Male	35			https://www.discoverlife.org/mp/20l?id=USGS_DRO517225
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164074
Melissodes agilis	43.7447	-102.4912	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO165130
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164073
Melissodes agilis	38.8778	-76.6695	Sam Droege	2017-01-27	Sam Droege	Unknown	Male	Milt's Sand Pit, Sunny low 80's, blooming composites and goldenrod predominate, late   afternoon collecting			https://www.discoverlife.org/mp/20l?id=USGS_DRO083692
Melissodes agilis	38.639	-75.528	Cathy Stragar	2017-01-27	Sam Droege	Unknown	Male	Watermelon			https://www.discoverlife.org/mp/20l?id=USGS_DRO102265
Melissodes agilis	40.032	-75.3904	Matthew J. Sarver	2022-12-20	Sam Droege	Unknown	Male	Netted on Helianthus annuus			https://www.discoverlife.org/mp/20l?id=USGS_DRO680517
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164071
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO067015
Melissodes agilis	38.8778	-76.6695	Sam Droege	2017-01-27	Sam Droege	Unknown	Male	Milt's Sand Pit, Sunny low 80's, blooming composites and goldenrod predominate, late   afternoon collecting			https://www.discoverlife.org/mp/20l?id=USGS_DRO083695
Melissodes agilis	43.3722	-84.029	Megan Houle, Maria Salem, Aaron Parsons	2023-11-29	Sam Droege	Unknown	Male	Silphium laciniatum, Ratibida pinnata, Lythrum salicaria, Vernonia gigantea, Physostegia virginiana, Silphium perfoliatum			https://www.discoverlife.org/mp/20l?id=USGS_DRO658329
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164066
Melissodes agilis	43.7484	-101.9454	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male	Along loop road, between Saddle Pass and Cliff Shelf Nature Trail. 10 w, 10y, 10bl			https://www.discoverlife.org/mp/20l?id=USGS_DRO266930
Melissodes agilis	43.6491	-102.8607	B Crew	2017-01-27	Sam Droege	Unknown	Male	HELANN on sandy hilltop			https://www.discoverlife.org/mp/20l?id=USGS_DRO261958
Melissodes agilis	43.7475	-101.943	Badlands Crew	2017-01-27	Jelle Devalez	Unknown	Male	Near visitor center, sunny, 80's, 10bl,10w, 10y			https://www.discoverlife.org/mp/20l?id=USGS_DRO273080
Melissodes agilis	38.7321	-75.8101	Cathy Stragar	2017-01-27	Sam Droege	Unknown	Male	Cucumber			https://www.discoverlife.org/mp/20l?id=USGS_DRO102698
Melissodes agilis	40.0152	-76.2888	Sam Droege	2017-01-27	Sam Droege	Unknown	Male	Upper 80's sunny, under powerlines and in a community garden, low plant diversity in under the powerlines			https://www.discoverlife.org/mp/20l?id=USGS_DRO081640
Melissodes agilis	39.8032	-75.5233	Heather Harmon	2017-01-27	Karen Wright	Unknown	Male	springstar vane traps, blue, 3 per 50m			https://www.discoverlife.org/mp/20l?id=USGS_DRO070847
Melissodes agilis	43.3722	-84.029	Megan Houle, Maria Salem, Aaron Parsons	2023-11-29	Sam Droege	Unknown	Male	Silphium laciniatum, Ratibida pinnata, Lythrum salicaria, Vernonia gigantea, Physostegia virginiana, Silphium perfoliatum			https://www.discoverlife.org/mp/20l?id=USGS_DRO658335
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164049
Melissodes agilis	43.7475	-101.943	Jelle Devalez	2017-01-27	Sam Droege	Unknown	Male	Near visitor center, netted from Helianthus annuus, Solidago sp., Verbena stricta and Psoralea tenuiflora.			https://www.discoverlife.org/mp/20l?id=USGS_DRO261933
Melissodes agilis	43.8429	-102.1993	B Iberle & D Stillson	2017-01-27	Jelle Devalez	Unknown	Male	Used blue, yellow, white colored bowls.;Crazy storm in afternoon, hail, strong winds.			https://www.discoverlife.org/mp/20l?id=USGS_DRO189149
Melissodes agilis	43.3722	-84.029	Megan Houle, Maria Salem, Aaron Parsons	2023-11-29	Sam Droege	Unknown	Male	Silphium laciniatum, Ratibida pinnata, Lythrum salicaria, Vernonia gigantea, Physostegia virginiana, Silphium perfoliatum			https://www.discoverlife.org/mp/20l?id=USGS_DRO658332
Melissodes agilis	40.0307	-75.3926	Matthew J. Sarver	2025-01-10	Sam Droege	Unknown	Male	Netted on Cosmos sp (orange)			https://www.discoverlife.org/mp/20l?id=USGS_DRO747101
Melissodes agilis	43.7154	-102.5446	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO165147
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658635
Melissodes agilis	43.8796	-102.2486	CR	2017-01-27	Sam Droege	Unknown	Male	Burn Curlew Control ;Treatment : Control			https://www.discoverlife.org/mp/20l?id=USGS_DRO328335
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-11-29	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658650
Melissodes agilis	43.3722	-84.029	Meredith Holm, Megan Houle, Maria Salem	2023-11-29	Sam Droege	Unknown	Male	Solidago sp., Helianthus sp., Helenium autumnale, Physostegia virginiana, Symphyotrichum novae-angliae, Symphyotrichum lateriflorum, Silphium laciniatum, Vernonia gigantea			https://www.discoverlife.org/mp/20l?id=USGS_DRO658968
Melissodes agilis	43.8429	-102.1993	B Iberle & D Stillson	2017-01-27	Jelle Devalez	Unknown	Male	Used blue, yellow, white colored bowls.;Crazy storm in afternoon, hail, strong winds.			https://www.discoverlife.org/mp/20l?id=USGS_DRO189199
Melissodes agilis	45.3362	-96.3802	P. Pennarola	2018-10-31	Sam Droege	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO489187
Melissodes agilis	43.8429	-102.1993	B Iberle & D Stillson	2017-01-27	Jelle Devalez	Unknown	Male	Used blue, yellow, white colored bowls.;Crazy storm in afternoon, hail, strong winds.			https://www.discoverlife.org/mp/20l?id=USGS_DRO189245
Melissodes agilis	44.4032	-96.4448	Pennarola & Leone	2018-10-31	Sam Droege	Unknown	Male	204			https://www.discoverlife.org/mp/20l?id=USGS_DRO498995
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658637
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164059
Melissodes agilis	39.0772	-77.4016	Jane Whitaker	2017-01-27	Sam Droege	Unknown	Male	Netted on Teasel			https://www.discoverlife.org/mp/20l?id=USGS_DRO164047
Melissodes agilis	38.5538	-75.1364	Heather Harmon	2017-01-27	Sam Droege	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO074347
Melissodes agilis	43.7154	-102.5446	Jelle Devalez	2017-01-27	Jelle Devalez	Unknown	Male				https://www.discoverlife.org/mp/20l?id=USGS_DRO165157
Melissodes agilis	41.6107	-83.2387	Megan Houle, Maria Salem	2023-04-06	Sam Droege	Unknown	Male	Lythrum salicaria, Chamaecrista fasciculata, Calystegia sepium, Asclepias incarnata, Sagittaria sagittifolia, Persicaria bicornis, Desmodium paniculatum, Lycopus americanus			https://www.discoverlife.org/mp/20l?id=USGS_DRO658655
Melissodes agilis	43.6476	-102.6885	B Crew	2017-01-27	Jelle Devalez	Unknown	Male	10 y 10 b 10 w.  In abandoned prairie dog town and normal prairie			https://www.discoverlife.org/mp/20l?id=USGS_DRO261754
`; // <-- paste your tab-separated data here

// === Convert TSV to GeoJSON ===
function tsvToGeoJSON(tsv) {
  const lines = tsv.trim().split(/\r?\n/);
  const headers = lines[0].split("\t").map(h => h.trim());
  const features = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue; // skip empty lines
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
      },
      geometry: { type: "Point", coordinates: [lon, lat] },
    });
  }

  return { type: "FeatureCollection", features };
}

const melissodesData = tsvToGeoJSON(tsvText);

// === Map setup ===
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

// 🌍 Land mask placeholder (optional)
const landMask = { /* paste land GeoJSON if desired */ };

// 🗺️ Initialize Leaflet map
const map = L.map("map").setView([39, -98], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 14,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// 🧭 Add markers + popups
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
      `<b>Coordinates:</b> ${p.latitude.toFixed(4)}, ${p.longitude.toFixed(4)}`,
      `<b>Recorded By:</b> ${p.foundBy || "Unknown"}`,
      `<b>Date Found:</b> ${p.dateFound || "Unknown"}`,
      `<b>Determined By:</b> ${p.determinedBy || "Unknown"}`,
      `<b>Life Stage:</b> ${p.lifeStage || "Unknown"}`,
      `<b>Sex:</b> ${p.sex || "Unknown"}`,
      `<b>Notes:</b> ${p.notes || "None"}`
    ];

    // Only show Rights and Rights Holder if they exist
    if (p.rights) popupParts.push(`<b>Rights:</b> ${p.rights}`);
    if (p.rightsHolder) popupParts.push(`<b>Rights Holder:</b> ${p.rightsHolder}`);

    // Add a clickable Source link if available
    if (p.sourceLink) {
      popupParts.push(
        `<b>Source:</b> <a href="${p.sourceLink}" target="_blank" rel="noopener noreferrer">View Record</a>`
      );
    }

    const popupContent = popupParts.join("<br>");
    marker.bindPopup(popupContent);
    return marker;
  },
}).addTo(map);

if (melissodesData.features.length > 0) {
  map.fitBounds(pointLayer.getBounds());
} else {
  console.warn("⚠️ No valid points found in TSV data.");
}

// === Range polygon generation (convex hull + buffer) ===
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

// === Resize handling ===
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
