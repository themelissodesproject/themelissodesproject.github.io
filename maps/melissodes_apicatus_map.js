const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30942		Florida, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30941		Georgia, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30940		North Carolina, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30944		Missouri, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30933		Illinois, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30931		Wisconsin, United States
Melissodes apicatus	44.037958	-89.276915	Rob Jean	2021-07-11	Rob Jean	Unknown	Male				https://www.discoverlife.org/mp/20l?id=RJ105		Waushara, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30932		Michigan, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30935		New Jersey, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30938		Delaware, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30939		District Of Columbia, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30937		Maryland, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30934		New York, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30936		Pennsylvania, United States
Melissodes apicatus	38.5614	-75.6706	Jason Davis		Clare Maffei	Unknown	Male	8 fl b, 8 fl y, 8 w ;80F start/ 88F retrieved ;wind:0 sky:0 ;-blooms- Lupinus perennis, Rubus species			https://www.discoverlife.org/mp/20l?id=USGS_DRO613173		Sussex, USA
Melissodes apicatus	39.0233	-75.7883	Nicola Seitz		Sam Droege	Unknown	Male	sunny to partly cloudy, 28-29 �C, wind: 18 km/h; Nicola Seitz Sand Mine Study			https://www.discoverlife.org/mp/20l?id=USGS_DRO492078		Caroline, USA
Melissodes apicatus	38.7842	-76.7025	M Fegler		Sam Droege	Unknown	Male	FTE: Fresh Tidal Estuary;Yellow Base-Blue Top			https://www.discoverlife.org/mp/20l?id=USGS_DRO567125		Anne Arundel, USA
Melissodes apicatus	38.8377	-77.5137	C. Davies		Sam Droege	Unknown	Male	3 yellow, 3 blue, 3 white bowls;additional cup color randomly chosen at each transect;37.5C, 15% cloud, 3.3 km/hr			https://www.discoverlife.org/mp/20l?id=USGS_DRO692173		Fairfax, USA
Melissodes apicatus	38.5614	-75.6706	Jason Davis		Clare Maffei	Unknown	Male	Weather- wind 1, sky 1, 87F ;;Blooms- Asclepia amplexicaulis, Nuttallanthus canadensis, Melampyrum lineare			https://www.discoverlife.org/mp/20l?id=USGS_DRO644236		Sussex, USA
Melissodes apicatus	38.5614	-75.6706	Jason Davis		Clare Maffei	Unknown	Male	Weather- wind 1, sky 1, 87F ;;Blooms- Asclepia amplexicaulis, Nuttallanthus canadensis, Melampyrum lineare			https://www.discoverlife.org/mp/20l?id=USGS_DRO644235		Sussex, USA
Melissodes apicatus	38.2381	-75.3658	Sam Droege		Sam Droege	Unknown	Male	collected along the Pocomoke river at various locations			https://www.discoverlife.org/mp/20l?id=USGS_DRO030124		Worcester, USA
Melissodes apicatus	38.8336	-75.9149	Sam W. Droege		Sam Droege	Unknown	Male	netted from canoe on Tuckahoe river, sunny near 90, light wind, humid, river wetlands of pickerelweed, wild rice, and several other plants			https://www.discoverlife.org/mp/20l?id=USGS_DRO610906		Talbot, USA
Melissodes apicatus	38.2381	-75.3658	Sam Droege		Sam Droege	Unknown	Male	collected along the Pocomoke river at various locations			https://www.discoverlife.org/mp/20l?id=USGS_DRO030125		Worcester, USA
Melissodes apicatus	38.5614	-75.6706	Jason Davis		Clare Maffei	Unknown	Male	Weather- wind 1, sky 1, 87F ;;Blooms- Asclepia amplexicaulis, Nuttallanthus canadensis, Melampyrum lineare			https://www.discoverlife.org/mp/20l?id=USGS_DRO644234		Sussex, USA
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30930		Connecticut, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30928		Vermont, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30927		New Hampshire, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30929		Massachusetts, United States
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30926		Maine, United States
Melissodes apicatus	42.4111	-71.4546	Stephanie Koch		Sam Droege	Unknown	Male	Fish and Wildlife Service Project			https://www.discoverlife.org/mp/20l?id=USGS_DRO420256		Middlesex, USA
Melissodes apicatus	44.879	-68.6528	Laura Kenefic		Sam Droege	Unknown	Male	Forest Service Experimental Traps;Glycol traps;12 ounce cups , 3 white, 3 fl blue, 3 fl. yellow;located in their headquarters area			https://www.discoverlife.org/mp/20l?id=USGS_DRO161915		Penobscot, USA
Melissodes apicatus	42.4111	-71.4546	Stephanie Koch		Sam Droege	Unknown	Male	Fish and Wildlife Service Project			https://www.discoverlife.org/mp/20l?id=USGS_DRO420257		Middlesex, USA
Melissodes apicatus			John Ascher								https://www.discoverlife.org/mp/20l?id=AMNH_BEES30943		Minnesota, United States
Melissodes apicatus			W.P. Henderson	1961-04-07							https://www.gbif.org/occurrence/658943707		Madera, California, US
Melissodes apicatus	32.1046	-83.0645	P.W. Fattig	1949-04-28							https://www.gbif.org/occurrence/658943706		Dodge, Georgia, US
Melissodes apicatus	46.5	-76	Payette, A	2001-07-24	Michener, Charles	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657753982		Quebec, CA
Melissodes apicatus	44.536096	-73.276568	Bernie Paquette	2025-06-27	Spencer Hardy					Bernie Paquette	https://www.gbif.org/occurrence/5867906310		Vermont, US
Melissodes apicatus	44.536096	-73.276568	Bernie Paquette	2025-06-27	Spencer Hardy					Bernie Paquette	https://www.gbif.org/occurrence/5867794885		Vermont, US
Melissodes apicatus	43.145865	-71.184462	Steven Lamonde	2025-07-18	Max McCarthy	Adult				Steven Lamonde	https://www.gbif.org/occurrence/5761161506		New Hampshire, US
Melissodes apicatus	44.536096	-73.276568	Bernie Paquette	2025-06-27	Bernie Paquette		Male			Bernie Paquette	https://www.gbif.org/occurrence/5217544824		Vermont, US
Melissodes apicatus	44.536096	-73.276568	Bernie Paquette	2025-06-27	Bernie Paquette		Male			Bernie Paquette	https://www.gbif.org/occurrence/5217534778		Vermont, US
Melissodes apicatus	44.536457	-73.277359	Spencer Hardy	2025-06-27	Spencer Hardy		Male			Spencer Hardy	https://www.gbif.org/occurrence/5217212680		Vermont, US
Melissodes apicatus	44.536456	-73.277347	Spencer Hardy	2025-06-27	Spencer Hardy					Spencer Hardy	https://www.gbif.org/occurrence/5216835696		Vermont, US
Melissodes apicatus			Raul Ferreira	2011-04-08	T.A. Zarrillo					Connecticut Agricultural Experiment Station	https://www.gbif.org/occurrence/5172018301		New London, Connecticut, US
Melissodes apicatus	38.8377	-77.5137	C. Davies		Sam Droege		Female	3 yellow, 3 blue, 3 white bowls;additional cup color randomly chosen at each transect;37.5C, 15% cloud, 3.3 km/hr			https://www.gbif.org/occurrence/5067252456		Fairfax, Virginia, US
Melissodes apicatus	38.5614	-75.6706	Jason Davis	2021-06-08	Clare Maffei		Male	Weather- wind 1, sky 1, 87F ;;Blooms- Asclepia amplexicaulis, Nuttallanthus canadensis, Melampyrum lineare			https://www.gbif.org/occurrence/5067234747		Sussex, Delaware, US
Melissodes apicatus	38.5614	-75.6706	Jason Davis	2021-06-08	Clare Maffei		Male	Weather- wind 1, sky 1, 87F ;;Blooms- Asclepia amplexicaulis, Nuttallanthus canadensis, Melampyrum lineare			https://www.gbif.org/occurrence/5067232903		Sussex, Delaware, US
Melissodes apicatus	38.5614	-75.6706	Jason Davis	2021-06-08	Clare Maffei		Male	Weather- wind 1, sky 1, 87F ;;Blooms- Asclepia amplexicaulis, Nuttallanthus canadensis, Melampyrum lineare			https://www.gbif.org/occurrence/5067228898		Sussex, Delaware, US
Melissodes apicatus	42.45168	-84.00695	O'Brien, M. F.		Gibbs, J.	Adult				The Regents of the University of Michigan	https://www.gbif.org/occurrence/5058314209		Livingston, Michigan, US
Melissodes apicatus	42.772592	-70.923364	wanderingeden	2024-06-13	Spencer Hardy	Adult	Male			wanderingeden	https://www.gbif.org/occurrence/5008218941		Massachusetts, US
Melissodes apicatus	43.100653	-71.286238	Colleen Prieto	2023-07-15	Spencer Hardy	Adult	Male			Colleen Prieto	https://www.gbif.org/occurrence/5006725975		New Hampshire, US
Melissodes apicatus	42	-71	R. A. Morse	1957-07-02	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998699810		Middlesex County, US
Melissodes apicatus	43.55722	-76.20444	J. S. Ascher	2000-08-25	J. S. Ascher	Adult	Female	Netting			https://www.gbif.org/occurrence/4998695514		Oswego County, US
Melissodes apicatus	29.69375	-82.33187	P. W. Fattig	1919-05-10	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998690530		Alachua County, US
Melissodes apicatus	43.614	-71.529	R. A. Morse	1959-07-05	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998679985		Belknap County, US
Melissodes apicatus	27.47138	-81.54138	H. V. Weems Jr	1956-03-31	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998679898		Highlands County, US
Melissodes apicatus	43	-76.196	G. C. Eickwort	1980-07-24	G. C. Eickwort	Adult	Male	Netting			https://www.gbif.org/occurrence/4998673759		Oswego County, US
Melissodes apicatus	43.63527	-71.50472	R. A. Morse	1960-07-15	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998672628		Belknap County, US
Melissodes apicatus	43	-76.196	G. C. Eickwort	1980-07-24	G. C. Eickwort	Adult	Male	Netting			https://www.gbif.org/occurrence/4998664087		Oswego County, US
Melissodes apicatus	43	-76.196	G. C. Eickwort	1980-07-24	G. C. Eickwort	Adult	Female	Netting			https://www.gbif.org/occurrence/4998662292		Oswego County, US
Melissodes apicatus	27.47138	-81.54138	H. V. Weems Jr	1956-03-31	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998661430		Highlands County, US
Melissodes apicatus	29.39136	-81.63869	H. E. Evans, M. A. Evans	1955-04-30	W. E. LaBerge	Adult	Female	Unknown			https://www.gbif.org/occurrence/4998659776		Putnam County, US
Melissodes apicatus	41.10333	-72.35972	R. Latham	1953-01-01	Krombein	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998659589		Suffolk County, US
Melissodes apicatus	43.63527	-71.50472	R. A. Morse	1960-07-16	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998659020		Belknap County, US
Melissodes apicatus	42.00617	-73.00428	L. L. Pechuman	1982-07-08		Adult	Male	Unknown			https://www.gbif.org/occurrence/4998656657		Berkshire County, US
Melissodes apicatus	43.32	-73.43	R. A. Morse	1960-07-18	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998655259		Washington County, US
Melissodes apicatus	42.46027	-71.34888	unknown		W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998649598		Middlesex County, US
Melissodes apicatus	27.47138	-81.54138	H. V. Weems Jr	1956-03-31	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998639226		Highlands County, US
Melissodes apicatus	29.69375	-82.33187	P. W. Fattig	1919-05-10	W. E. LaBerge	Adult	Female	Unknown			https://www.gbif.org/occurrence/4998636847		Alachua County, US
Melissodes apicatus	43	-76.196	G. C. Eickwort	1980-07-24	G. C. Eickwort	Adult	Female	Netting			https://www.gbif.org/occurrence/4998636281		Oswego County, US
Melissodes apicatus	27.47138	-81.54138	H. V. Weems Jr	1956-03-31	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998635416		Highlands County, US
Melissodes apicatus	27.47138	-81.54138	H. V. Weems Jr	1956-03-31	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998627048		Highlands County, US
Melissodes apicatus	27.44722	-82.54639	W. W. Boyle	1954-03-26	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998624029		Manatee County, US
Melissodes apicatus	42.68333	-73.28333	G. C.  Eickwort	1971-06-20	J. S. Ascher	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998622702		Rensselaer County, US
Melissodes apicatus	39.48523	-75.07339	unknown		T. B. Mitchell	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998617675		Cumberland County, US
Melissodes apicatus	42	-71	R. A. Morse	1957-07-01	W. E. LaBerge	Adult	Male	Unknown			https://www.gbif.org/occurrence/4998617488		Middlesex County, US
Melissodes apicatus	43.720317	-71.366211	bec325	2024-07-19	Max McCarthy		Male			bec325	https://www.gbif.org/occurrence/4980492117		New Hampshire, US
Melissodes apicatus	44.28595	-69.853706	David Jeffrey Ringer	2024-07-25	Spencer Hardy					David Jeffrey Ringer	https://www.gbif.org/occurrence/4950113150		Maine, US
Melissodes apicatus	40.986473	-79.617399	Kay John	2022-08-12	D. Biddinger	Adult	Female			PSU-LUL	https://www.gbif.org/occurrence/4930168467		Clarion, Pennsylvania, US
Melissodes apicatus	42.067821	-79.905785	Kevin Thomas	2022-09-16	D. Biddinger	Adult	Female			PSU-LUL	https://www.gbif.org/occurrence/4930168463		Erie, Pennsylvania, US
Melissodes apicatus	40.5952	-75.454	Consuelo Almodovar	2022-08-09	D. Biddinger	Adult	Female			PSU-LUL	https://www.gbif.org/occurrence/4930168459		Lehigh, Pennsylvania, US
Melissodes apicatus	42.357776	-76.511776	M. Kammerer	2019-07-08			Female				https://www.gbif.org/occurrence/4925801103		New York, US
Melissodes apicatus	42.388037	-76.400782	M. Kammerer	2019-07-09			Female				https://www.gbif.org/occurrence/4925801099		New York, US
Melissodes apicatus	42.388037	-76.400782	M. Kammerer	2018-07-09			Female				https://www.gbif.org/occurrence/4925742791		New York, US
Melissodes apicatus	42.308866	-76.521164	M. Kammerer	2019-07-10			Female				https://www.gbif.org/occurrence/4925740446		New York, US
Melissodes apicatus	42.388037	-76.400782	M. Kammerer	2019-07-09			Female				https://www.gbif.org/occurrence/4925740445		New York, US
Melissodes apicatus	42.388037	-76.400782	M. Kammerer	2019-07-09			Female				https://www.gbif.org/occurrence/4925680659		New York, US
Melissodes apicatus	42.536386	-76.418753	M. Kammerer	2018-07-09			Female				https://www.gbif.org/occurrence/4925680655		New York, US
Melissodes apicatus	42.373799	-71.141238	ddentzer	2024-07-04	Max McCarthy					ddentzer	https://www.gbif.org/occurrence/4908771379		Massachusetts, US
Melissodes apicatus	43.058869	-71.740918	surfman	2024-07-01	Max McCarthy		Male			surfman	https://www.gbif.org/occurrence/4908233012		New Hampshire, US
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605044747		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605044407		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605043566		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605042765		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605042699		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605042649		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605041717		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605041605		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605041336		
Melissodes apicatus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4605040659		
Melissodes apicatus	43.72703	-70.808714	wanderingeden	2023-07-03	wanderingeden	Adult				wanderingeden	https://www.gbif.org/occurrence/4596850548		Maine, US
Melissodes apicatus	44.2328	-85.4496	Jason Gibbs	2014-07-27	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540282883		Wexford, Michigan, US
Melissodes apicatus	44.354	-85.254	Jason Gibbs	2016-07-02	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540258171		Missaukee, Michigan, US
Melissodes apicatus	44.3616	-85.2528	Jason Gibbs	2016-07-02	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540246593		Missaukee, Michigan, US
Melissodes apicatus	44.354	-85.254	Jason Gibbs	2016-07-02	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540174846		Missaukee, Michigan, US
Melissodes apicatus	44.2328	-85.4496	Jason Gibbs	2014-07-27	Jason Gibbs		Female				https://www.gbif.org/occurrence/4540163195		Wexford, Michigan, US
Melissodes apicatus	44.354	-85.254	Jason Gibbs	2016-07-02	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540142919		Missaukee, Michigan, US
Melissodes apicatus	44.354	-85.254	Jason Gibbs	2016-07-02	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540133506		Missaukee, Michigan, US
Melissodes apicatus	44.354	-85.254	Jason Gibbs	2016-07-02	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540123503		Missaukee, Michigan, US
Melissodes apicatus	44.2328	-85.4496	Jason Gibbs	2014-07-27	Jason Gibbs		Female				https://www.gbif.org/occurrence/4540027439		Wexford, Michigan, US
Melissodes apicatus	44.2328	-85.4496	Jason Gibbs	2014-07-26	Jason Gibbs		Male				https://www.gbif.org/occurrence/4540015960		Wexford, Michigan, US
Melissodes apicatus	28.373523	-82.532447	Steven IGAS Landseadel	2021-04-09	David Mantack					Steven IGAS Landseadel	https://www.gbif.org/occurrence/4522478437		Florida, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male			State of Vermont Forest Biology Lab	https://www.gbif.org/occurrence/4515972952		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male			State of Vermont Forest Biology Lab	https://www.gbif.org/occurrence/4515972852		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male			State of Vermont Forest Biology Lab	https://www.gbif.org/occurrence/4515972686		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male			State of Vermont Forest Biology Lab	https://www.gbif.org/occurrence/4515972622		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male			State of Vermont Forest Biology Lab	https://www.gbif.org/occurrence/4515972614		Chittenden, Vermont, US
Melissodes apicatus	42.738479	-71.621798	Molly Jacobson	2023-07-24	Molly Jacobson	Adult	Female			Molly Jacobson	https://www.gbif.org/occurrence/4165697372		New Hampshire, US
Melissodes apicatus	44.654199	-77.886662	Riley Walsh	2023-06-28	Riley Walsh					Riley Walsh	https://www.gbif.org/occurrence/4145421142		Ontario, CA
Melissodes apicatus	42.738425	-71.621586	Steven Lamonde	2023-07-01	Steven Lamonde		Female			Steven Lamonde	https://www.gbif.org/occurrence/4145293854		New Hampshire, US
Melissodes apicatus	44.654501	-77.88684	Owen Strickland	2023-06-29	Owen Strickland					Owen Strickland	https://www.gbif.org/occurrence/4145181290		Ontario, CA
Melissodes apicatus	41.61833	-71.86638	C. T. Maier	2009-07-10	T. Zarrillo		Female			Connecticut Agricultural Experiment Station	https://www.gbif.org/occurrence/4078853197		New London, Connecticut, US
Melissodes apicatus	41.56333	-71.87722	R. Durgy	2012-06-12	M. Veit		Male			Connecticut Agricultural Experiment Station	https://www.gbif.org/occurrence/4078853195		New London, Connecticut, US
Melissodes apicatus	41.61833	-71.86638	C. T. Maier	2009-07-10	J. S. Ascher		Female			Connecticut Agricultural Experiment Station	https://www.gbif.org/occurrence/4078853191		New London, Connecticut, US
Melissodes apicatus	42.698	-71.6352	M.F. Veit	2020-07-04	M.F. Veit			Quite common.			https://www.gbif.org/occurrence/4068311677		Middlesex, Massachusetts, US
Melissodes apicatus	42.7052	-71.9277	M.F. Veit	2020-07-18	M.F. Veit			Female entering nest hole.			https://www.gbif.org/occurrence/4068311313		Worcester, Massachusetts, US
Melissodes apicatus	42.723	-71.623	M.F. Veit	2022-07-09	M.F. Veit			on Pontideria			https://www.gbif.org/occurrence/4068310291		Hillsborough, New Hampshire, US
Melissodes apicatus	42.7052	-71.9277	M.F. Veit	2014-08-09	M.F. Veit			at nesting site where T.  obliteratus were actively entering nest openings and hovering/landing nearby.			https://www.gbif.org/occurrence/4068310151		Worcester, Massachusetts, US
Melissodes apicatus	42.472	-71.652	M.F. Veit	2019-07-05	M.F. Veit						https://www.gbif.org/occurrence/4068308231		Worcester, Massachusetts, US
Melissodes apicatus	42.7033	-71.3051	M.F. Veit	2009-07-30	M.F. Veit						https://www.gbif.org/occurrence/4068307045		Hillsborough, New Hampshire, US
Melissodes apicatus	43.0105	-71.3326	M.F. Veit	2009-08-01	M.F. Veit						https://www.gbif.org/occurrence/4068307007		Rockingham, New Hampshire, US
Melissodes apicatus	42.681	-71.746	M.F. Veit	2009-07-12	M.F. Veit			at nest hole in sandy, relatively open area, old sandpit			https://www.gbif.org/occurrence/4068306778		Middlesex, Massachusetts, US
Melissodes apicatus	42.686	-71.88	M.F. Veit	2009-07-19	M.F. Veit						https://www.gbif.org/occurrence/4068306743		Worcester, Massachusetts, US
Melissodes apicatus	42.472	-71.652	M.F. Veit	2019-06-26	M.F. Veit						https://www.gbif.org/occurrence/4068304149		Worcester, Massachusetts, US
Melissodes apicatus	42.4583	-71.3914	M.F. Veit	2008-07-26	M.F. Veit			on Pontideria			https://www.gbif.org/occurrence/4068303415		Middlesex, Massachusetts, US
Melissodes apicatus	42.6712	-71.6339	M.F. Veit	2008-07-16	M.F. Veit			on Pontideria			https://www.gbif.org/occurrence/4068303121		Middlesex, Massachusetts, US
Melissodes apicatus	42.8851	-71.554	M.F. Veit	2018-07-08	M.F. Veit						https://www.gbif.org/occurrence/4068299386		Middlesex, Massachusetts, US
Melissodes apicatus	42.7035	-71.6273	M.F. Veit	2016-07-12	M.F. Veit			on Cephalanthus			https://www.gbif.org/occurrence/4068299262		Middlesex, Massachusetts, US
Melissodes apicatus	42.472	-71.652	M.F. Veit	2012-06-29	M.F. Veit						https://www.gbif.org/occurrence/4068298694		Worcester, Massachusetts, US
Melissodes apicatus	42.648	-71.671	M.F. Veit	2013-07-14	M.F. Veit			Captured as she entered ground next openning.  Nearest pond w/ Pontaderia about 1/4 mi. NW.			https://www.gbif.org/occurrence/4068298116		Middlesex, Massachusetts, US
Melissodes apicatus	42.7052	-71.9277	M.F. Veit	2015-08-06	M.F. Veit			Numerous entering/leaving nest holes in bare spots among low vegetation.  T. obliteratus numerous flying and searching nesting area.			https://www.gbif.org/occurrence/4068297923		Worcester, Massachusetts, US
Melissodes apicatus	43.571387	-73.372923	Laura Shappell	2022-07-13	Max McCarthy					Laura Shappell	https://www.gbif.org/occurrence/4063119738		New York, US
Melissodes apicatus	38.8336	-75.9149	Sam W. Droege	2020-07-12	Sam Droege		Female	netted from canoe on Tuckahoe river, sunny near 90, light wind, humid, river wetlands of pickerelweed, wild rice, and several other plants			https://www.gbif.org/occurrence/4023791502		Talbot, Maryland, US
Melissodes apicatus	38.5614	-75.6706	Jason Davis		Clare Maffei		Male	8 fl b, 8 fl y, 8 w ;80F start/ 88F retrieved ;wind:0 sky:0 ;-blooms- Lupinus perennis, Rubus species			https://www.gbif.org/occurrence/4023787826		Sussex, Delaware, US
Melissodes apicatus	38.7842	-76.7025	M Fegler		Sam Droege		Male	FTE: Fresh Tidal Estuary;Yellow Base-Blue Top			https://www.gbif.org/occurrence/4023756542		Anne Arundel, Maryland, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801952237		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801951217		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801950223		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801949243		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801948240		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1917-04-23		Adult					https://www.gbif.org/occurrence/3801942271		Citrus, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801942175		Iroquois, Illinois, US
Melissodes apicatus	40.776611	-87.73639	J.K. Bouseman	1988-07-07	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801941274		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1917-04-23		Adult					https://www.gbif.org/occurrence/3801941248		Citrus, Florida, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1918-11-14		Adult					https://www.gbif.org/occurrence/3801940252		Citrus, Florida, US
Melissodes apicatus			L.R. Davis, Jr.	1975-05-13		Adult					https://www.gbif.org/occurrence/3801940249		Levy, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801940153		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1918-11-14		Adult					https://www.gbif.org/occurrence/3801939275		Citrus, Florida, US
Melissodes apicatus			T.B. Mitchell	1955-04-12		Adult					https://www.gbif.org/occurrence/3801939272		Alachua, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801937172		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801868244		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801866260		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801865245		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801863238		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801863237		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801862277		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801862273		Iroquois, Illinois, US
Melissodes apicatus			R.A. Morse	1955-04-13		Adult					https://www.gbif.org/occurrence/3801861312		Alachua, Florida, US
Melissodes apicatus			L.R. Davis, Jr.	1975-05-13		Adult					https://www.gbif.org/occurrence/3801861305		Levy, Florida, US
Melissodes apicatus			L.R. Davis, Jr.	1975-05-13		Adult					https://www.gbif.org/occurrence/3801859268		Levy, Florida, US
Melissodes apicatus			H.V. Weems, Jr.	1956-04-17		Adult					https://www.gbif.org/occurrence/3801857295		Alachua, Florida, US
Melissodes apicatus			L.R. Davis, Jr.	1975-05-13		Adult					https://www.gbif.org/occurrence/3801857288		Levy, Florida, US
Melissodes apicatus	28.83556	-82.33056	Charles Robertson	1917-04-25		Adult					https://www.gbif.org/occurrence/3801855276		Citrus, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801852218		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801391261		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	Charles Robertson	1917-04-25		Adult					https://www.gbif.org/occurrence/3801390308		Citrus, Florida, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801387228		Iroquois, Illinois, US
Melissodes apicatus	41.7075	-89.19084	J.K. Bouseman	1997-09-15	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801386289		Lee, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801386231		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801385283		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801385282		Iroquois, Illinois, US
Melissodes apicatus	40.978892	-87.503183	John K. Bouseman	1987-07-09	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801384504		Newton, Indiana, US
Melissodes apicatus			L.R. Davis, Jr.	1975-05-13		Adult					https://www.gbif.org/occurrence/3801384319		Levy, Florida, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801382240		Iroquois, Illinois, US
Melissodes apicatus	27.47111	-81.54167	John Waters	1964-04-10		Adult					https://www.gbif.org/occurrence/3801381300		Highlands, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801381211		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1917-04-23		Adult					https://www.gbif.org/occurrence/3801377262		Citrus, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801377164		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1918-11-14		Adult					https://www.gbif.org/occurrence/3801376269		Citrus, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801376171		Iroquois, Illinois, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801372188		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801351236		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801350226		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801350225		Iroquois, Illinois, US
Melissodes apicatus	40.978892	-87.503183	John K. Bouseman	1987-07-09	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801349449		Newton, Indiana, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801349243		Iroquois, Illinois, US
Melissodes apicatus			J.K. Bouseman	1986-07-01	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801346243		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1917-04-07		Adult					https://www.gbif.org/occurrence/3801341280		Citrus, Florida, US
Melissodes apicatus	29.47889	-81.67167	L.R. Davis, Jr.	1975-05-11		Adult					https://www.gbif.org/occurrence/3801341272		Putnam, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801341182		Iroquois, Illinois, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801341181		Iroquois, Illinois, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801340169		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1918-11-14		Adult					https://www.gbif.org/occurrence/3801339285		Citrus, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801339187		Iroquois, Illinois, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801339186		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1918-11-14		Adult					https://www.gbif.org/occurrence/3801338278		Citrus, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801338182		Iroquois, Illinois, US
Melissodes apicatus	28.83556	-82.33056	C.A. Robertson	1917-04-23		Adult					https://www.gbif.org/occurrence/3801337289		Citrus, Florida, US
Melissodes apicatus	27.47111	-81.54167	H.V. Weems, Jr.	1956-03-31		Adult					https://www.gbif.org/occurrence/3801337281		Highlands, Florida, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801337191		Iroquois, Illinois, US
Melissodes apicatus	40.8159	-87.7392	J.K. Bouseman	1987-06-02	Laura Anchor	Adult					https://www.gbif.org/occurrence/3801337190		Iroquois, Illinois, US
Melissodes apicatus	46.380106	-90.921824	Lana Froemming	2019-07-28	John S. Ascher	Adult				Lana Froemming	https://www.gbif.org/occurrence/3712550963		Wisconsin, US
Melissodes apicatus	39.958993	-78.975209	Barbara Landis	2021-08-22	D. Biddinger	Adult	Female			PSU-LUL	https://www.gbif.org/occurrence/3698917373		Somerset, Pennsylvania, US
Melissodes apicatus	44.534225	-73.278234	Doug G. Burnham	2019-07-25	Spencer Hardy		Female				https://www.gbif.org/occurrence/3698897671		Vermont, US
Melissodes apicatus	43.613232	-73.377262	Spencer P. Hardy		Spencer Hardy		Male				https://www.gbif.org/occurrence/3698895129		Vermont, US
Melissodes apicatus	43.613232	-73.377262	Spencer P. Hardy		Spencer Hardy		Male				https://www.gbif.org/occurrence/3698895105		Vermont, US
Melissodes apicatus	43.613232	-73.377262	Spencer P. Hardy		Spencer Hardy		Male				https://www.gbif.org/occurrence/3698895089		Vermont, US
Melissodes apicatus	42.471251	-71.335001	Max McCarthy	2020-06-27	John S. Ascher		Female			Max McCarthy	https://www.gbif.org/occurrence/3465926164		Massachusetts, US
Melissodes apicatus	29.517172	-82.222425	Joshua Doby	2020-05-20	John S. Ascher		Female			Joshua Doby	https://www.gbif.org/occurrence/3325715343		Florida, US
Melissodes apicatus	43.613064	-73.377147	Spencer Hardy	2020-07-07	Spencer Hardy	Adult	Male			Spencer Hardy	https://www.gbif.org/occurrence/3017990437		Vermont, US
Melissodes apicatus			Weems	1956-04-17	WE.Laberge						https://www.gbif.org/occurrence/287268348		
Melissodes apicatus	27.337222	-82.535278	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804722000		Sarasota Co., Florida, US
Melissodes apicatus	28.868889	-81.266944	E. Daecke				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804720134		Volusia Co., Florida, US
Melissodes apicatus	44.068889	-75.494167	E. Quinter				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804719123		Lewis Co., New York, US
Melissodes apicatus			R. A. Morse				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804583886		Alachua Co., Florida, US
Melissodes apicatus	28.066667	-81.15	F. E. Lutz				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804583885		Osceola Co., Florida, US
Melissodes apicatus	28.868889	-81.266944	E. Daecke				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804580055		Volusia Co., Florida, US
Melissodes apicatus	27.495556	-81.440833	F. E. Lutz				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804579103		Highlands Co., Florida, US
Melissodes apicatus	28.066667	-81.15	F. E. Lutz				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804577088		Osceola Co., Florida, US
Melissodes apicatus	42.390278	-73.781944	J. S. Ascher & C. J. Daley				Male			American Museum of Natural History	https://www.gbif.org/occurrence/2804576023		Columbia Co., New York, US
Melissodes apicatus	29.216667	-82.066667	H. V. Weems Jr.				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804574978		Marion Co., Florida, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male				https://www.gbif.org/occurrence/2577341969		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male				https://www.gbif.org/occurrence/2577341968		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male				https://www.gbif.org/occurrence/2577341960		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male				https://www.gbif.org/occurrence/2577341959		Chittenden, Vermont, US
Melissodes apicatus	44.614	-73.218	Leif L. Richardson	2007-06-29	Spencer P. Hardy		Male				https://www.gbif.org/occurrence/2577341957		Chittenden, Vermont, US
Melissodes apicatus	39.0233	-75.7883	Nicola Seitz		Sam Droege		Male	30 bowl traps; 10 fl blue, 10 fl yellow; 10 white with soapy water			https://www.gbif.org/occurrence/2459056077		Caroline, Maryland, US
Melissodes apicatus	40.36	-75.4374	John Berger	2017-06-26	Sam Droege						https://www.gbif.org/occurrence/2274118572		Montgomery, Pennsylvania, US
Melissodes apicatus	40.36	-75.4374	Hannah Stout	2017-06-26	Sam Droege						https://www.gbif.org/occurrence/2274117528		Montgomery, Pennsylvania, US
Melissodes apicatus	40.36	-75.4374	John Berger	2017-06-26	Sam Droege						https://www.gbif.org/occurrence/2274067854		Montgomery, Pennsylvania, US
Melissodes apicatus	40.36	-75.4374	John Berger	2017-06-26	Sam Droege						https://www.gbif.org/occurrence/2274064279		Montgomery, Pennsylvania, US
Melissodes apicatus			Shinn, Alvin	1955-07-09	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918243		Burlington, New Jersey, US
Melissodes apicatus			Shinn, Alvin	1955-07-09	LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918211		Burlington, New Jersey, US
Melissodes apicatus	27.4711	-81.5417	Eickwort, George	1964-04-13		Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1913918209		Highlands, Florida, US
Melissodes apicatus	27.0419	-82.3175	Mahary, K. J. & Fullerton, S. M. (Stuart M.)	1997-03-17	Russell, P. J. (Phillip J.)	Adult	Indeterminate	lot_id: 1054; preparation: pinned			https://www.gbif.org/occurrence/1800786368		Sarasota, Florida, US
Melissodes apicatus	42.4111	-71.4546	Stephanie Koch	2015-06-30	Sam Droege		Male	10 UV-blue, 10 UV-yellow, 10 white bowls			https://www.gbif.org/occurrence/1456807021		Middlesex, Massachusetts, US
Melissodes apicatus	42.4111	-71.4546	Stephanie Koch	2015-06-30	Sam Droege		Male	10 UV-blue, 10 UV-yellow, 10 white bowls			https://www.gbif.org/occurrence/1456807010		Middlesex, Massachusetts, US
Melissodes apicatus	44.879	-68.6528	Laura Kenefic		Sam Droege		Male	Forest Service Experimental Traps;Glycol traps;12 ounce cups , 3 white, 3 fl blue, 3 fl. yellow;located in their headquarters area			https://www.gbif.org/occurrence/1456603828		Penobscot, Maine, US
Melissodes apicatus	38.2381	-75.3658	Sam Droege	2004-06-12	Sam Droege		Male	collected along the Pocomoke river at various locations			https://www.gbif.org/occurrence/1456513871		Worcester, Maryland, US
Melissodes apicatus	38.2381	-75.3658	Sam Droege	2004-06-12	Sam Droege		Female	collected along the Pocomoke river at various locations			https://www.gbif.org/occurrence/1456513783		Worcester, Maryland, US
Melissodes apicatus	44.0954	-69.3756	J. Lovell	1904-07-21			Female				https://www.gbif.org/occurrence/1320017607		Lincoln, Maine, US
Melissodes apicatus											https://www.gbif.org/occurrence/1318410849		
Melissodes apicatus	42.9665	-76.9468	E. L. Quinter	1990-07-14	J. S. Ascher					Coleção Entomológica Paulo Nogueira-Neto - IB/USP	https://www.gbif.org/occurrence/131346082		New York, US
Melissodes apicatus	43.81483	-79.97683									https://www.gbif.org/occurrence/126198425		Caledon, CA
Melissodes apicatus	43.81483	-79.97683									https://www.gbif.org/occurrence/126198424		Caledon, CA
Melissodes apicatus	43.81483	-79.97683									https://www.gbif.org/occurrence/126198423		Caledon, CA
Melissodes apicatus	43.81483	-79.97683									https://www.gbif.org/occurrence/126198422		Caledon, CA
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785268		Alachua, Florida, US
Melissodes apicatus			Shinn, Alvin	1955-07-09		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785265		Burlington, New Jersey, US
Melissodes apicatus			Shinn, Alvin	1955-07-09		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785250		Burlington, New Jersey, US
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785240		Alachua, Florida, US
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785235		Alachua, Florida, US
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785233		Alachua, Florida, US
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785230		Alachua, Florida, US
Melissodes apicatus	30.1122	-82.0458	Eickwort, George	1966-04-07	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785229		Highlands, Florida, US
Melissodes apicatus			Shinn, Alvin	1955-07-09		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785228		Burlington, New Jersey, US
Melissodes apicatus	30.1122	-82.0458	Mitchell, T	1955-04-07		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785226		Highlands, Florida, US
Melissodes apicatus			Morse, R	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785225		Alachua, Florida, US
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785221		Alachua, Florida, US
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785217		Alachua, Florida, US
Melissodes apicatus			Mitchell, T	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785211		Alachua, Florida, US
Melissodes apicatus			Morse, R	1955-04-12		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785210		Alachua, Florida, US
Melissodes apicatus			Mitchell, T	1934-05-20		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785209		Beaufort, North Carolina, US
Melissodes apicatus	27.4711	-81.5417	Eickwort, George	1964-04-10		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785206		Highlands, Florida, US
Melissodes apicatus	27.4711	-81.5417	Eickwort, George	1964-04-10		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785204		Highlands, Florida, US
Melissodes apicatus	30.1122	-82.0458	Mitchell, T	1955-04-07		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785203		Highlands, Florida, US
Melissodes apicatus	30.1122	-82.0458	Mitchell, T	1955-04-07		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785202		Highlands, Florida, US
Melissodes apicatus	30.1122	-82.0458	Mitchell, T	1955-04-07		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785201		Highlands, Florida, US
Melissodes apicatus	27.4711	-81.5417	Eickwort, George	1964-04-10		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785198		Highlands, Florida, US
Melissodes apicatus	30.1122	-82.0458	Mitchell, T	1955-04-07		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785196		Highlands, Florida, US
Melissodes apicatus	27.4711	-81.5417	Eickwort, George	1964-04-10		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785194		Highlands, Florida, US
Melissodes apicatus	27.4711	-81.5417	Eickwort, George	1964-04-10		Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785191		Highlands, Florida, US
Melissodes apicatus	27.4711	-81.5417	Eickwort, George	1966-04-06	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092785187		Highlands, Florida, US
Melissodes apicatus	28.6044	-81.1939	Fullerton, S. M. (Stuart M.)	1991-04-15	Russell, P. J. (Phillip J.)	Adult	Indeterminate	lot_id: 484; preparation: pinned			https://www.gbif.org/occurrence/1075096881		Orange, Florida, US
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


const landMask = { /* paste here */ };

const map = L.map("map").setView([39, -98], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 14,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

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

    if (p.rights) popupParts.push(`<b>Rights:</b> ${p.rights}`);
    if (p.rightsHolder) popupParts.push(`<b>Rights Holder:</b> ${p.rightsHolder}`);

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
