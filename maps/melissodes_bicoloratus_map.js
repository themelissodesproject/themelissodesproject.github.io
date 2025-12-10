// =========================
// Melissodes Map Visualization
// =========================

const tsvText = `
speciesname	latitude	longitude	recordedby	datefound	determinedby	lifestage	sex	notes	rights	rightsholder	sourcelink	gbif_link	locality
Melissodes bicoloratus	38	-120	L. Xialoling Zou		H. Ikerd 2007						https://www.gbif.org/occurrence/658946141		Mariposa, California, US
Melissodes bicoloratus	38	-120	L. Xialoling Zou		H. Ikerd 2007						https://www.gbif.org/occurrence/658946140		Mariposa, California, US
Melissodes bicoloratus	40.35552	-108.44843	G. Knowlton	1966-08-14	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946139		Moffat, Colorado, US
Melissodes bicoloratus	38	-111	C. Boyers		H. Ikerd 2005						https://www.gbif.org/occurrence/658946138		Garfield, Utah, US
Melissodes bicoloratus	39	-108	C. Boyers		H. Ikerd 2005						https://www.gbif.org/occurrence/658946137		Garfield, Utah, US
Melissodes bicoloratus	39	-108	A. Johansen		H. Ikerd 2005						https://www.gbif.org/occurrence/658946136		Garfield, Utah, US
Melissodes bicoloratus	38	-111	B. Bradley		H. Ikerd 2005						https://www.gbif.org/occurrence/658946135		Garfield, Utah, US
Melissodes bicoloratus	39	-108	B. Bradley		H. Ikerd 2005						https://www.gbif.org/occurrence/658946134		Garfield, Utah, US
Melissodes bicoloratus	37	-112	L. Wilson								https://www.gbif.org/occurrence/658946133		Kane, Utah, US
Melissodes bicoloratus	39	-108	L. Wilson								https://www.gbif.org/occurrence/658946132		Garfield, Utah, US
Melissodes bicoloratus	39	-108	L. Wilson								https://www.gbif.org/occurrence/658946131		Garfield, Utah, US
Melissodes bicoloratus	39	-108	L. Wilson								https://www.gbif.org/occurrence/658946130		Garfield, Utah, US
Melissodes bicoloratus	39	-108	L. Wilson								https://www.gbif.org/occurrence/658946129		Garfield, Utah, US
Melissodes bicoloratus	39	-108	L. Wilson								https://www.gbif.org/occurrence/658946128		Garfield, Utah, US
Melissodes bicoloratus	39	-108	K. Moredock								https://www.gbif.org/occurrence/658946127		Garfield, Utah, US
Melissodes bicoloratus	38	-111									https://www.gbif.org/occurrence/658946126		Garfield, Utah, US
Melissodes bicoloratus	39	-108	M. Sunseri		T.L. Griswold 2001						https://www.gbif.org/occurrence/658946125		Garfield, Utah, US
Melissodes bicoloratus	39	-108	M. Sunseri		T.L. Griswold 2001						https://www.gbif.org/occurrence/658946124		Garfield, Utah, US
Melissodes bicoloratus	39	-108	M. Sunseri		T.L. Griswold 2001						https://www.gbif.org/occurrence/658946123		Garfield, Utah, US
Melissodes bicoloratus	39	-108	M. Sunseri								https://www.gbif.org/occurrence/658946122		Garfield, Utah, US
Melissodes bicoloratus	38	-119	E. Stephens, R. Maddox		H. Ikerd 2007						https://www.gbif.org/occurrence/658946121		Mariposa, California, US
Melissodes bicoloratus	38	-111	S.M. Higbee		H. Ikerd 2005						https://www.gbif.org/occurrence/658946120		Garfield, Utah, US
Melissodes bicoloratus	39	-108	S.M. Higbee		H. Ikerd 2005						https://www.gbif.org/occurrence/658946119		Garfield, Utah, US
Melissodes bicoloratus	39	-108	S.M. Higbee		H. Ikerd 2005						https://www.gbif.org/occurrence/658946118		Garfield, Utah, US
Melissodes bicoloratus	38	-120	H. Ikerd, E. Stephens		H. Ikerd 2007						https://www.gbif.org/occurrence/658946117		Mariposa, California, US
Melissodes bicoloratus	38	-120	H. Ikerd, E. Stephens								https://www.gbif.org/occurrence/658946116		Mariposa, California, US
Melissodes bicoloratus	38	-120	H. Ikerd, E. Stephens								https://www.gbif.org/occurrence/658946115		Mariposa, California, US
Melissodes bicoloratus	38	-111	H. Ikerd		H. Ikerd 2005						https://www.gbif.org/occurrence/658946114		Garfield, Utah, US
Melissodes bicoloratus	38	-111	H. Ikerd		H. Ikerd 2005						https://www.gbif.org/occurrence/658946113		Garfield, Utah, US
Melissodes bicoloratus	38	-111	H. Ikerd		H. Ikerd 2005						https://www.gbif.org/occurrence/658946112		Garfield, Utah, US
Melissodes bicoloratus	39	-108	H. Ikerd		H. Ikerd 2005						https://www.gbif.org/occurrence/658946111		Garfield, Utah, US
Melissodes bicoloratus	39	-108	H. Ikerd		H. Ikerd 2005						https://www.gbif.org/occurrence/658946110		Garfield, Utah, US
Melissodes bicoloratus	39	-108	H. Ikerd		H. Ikerd 2005						https://www.gbif.org/occurrence/658946109		Garfield, Utah, US
Melissodes bicoloratus	37	-113	H. Ikerd		T.L. Griswold 2009						https://www.gbif.org/occurrence/658946108		Washington, Utah, US
Melissodes bicoloratus	37	-113	H. Ikerd		T.L. Griswold 2009						https://www.gbif.org/occurrence/658946107		Washington, Utah, US
Melissodes bicoloratus	39	-108	C.M. Davidson								https://www.gbif.org/occurrence/658946106		Garfield, Utah, US
Melissodes bicoloratus	39	-108	C.M. Davidson								https://www.gbif.org/occurrence/658946105		Garfield, Utah, US
Melissodes bicoloratus	39	-108	C.M. Davidson								https://www.gbif.org/occurrence/658946104		Garfield, Utah, US
Melissodes bicoloratus	39	-108	C.M. Davidson								https://www.gbif.org/occurrence/658946103		Garfield, Utah, US
Melissodes bicoloratus	39	-108	R. Andrus								https://www.gbif.org/occurrence/658946102		Garfield, Utah, US
Melissodes bicoloratus	39	-108	R. Andrus								https://www.gbif.org/occurrence/658946101		Garfield, Utah, US
Melissodes bicoloratus	40.2328	-109.8069	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946100		Uintah, Utah, US
Melissodes bicoloratus	40.2328	-109.8069	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946099		Uintah, Utah, US
Melissodes bicoloratus	40.3042	-109.7131	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946098		Uintah, Utah, US
Melissodes bicoloratus	40.3042	-109.7131	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946097		Uintah, Utah, US
Melissodes bicoloratus	40.3042	-109.7131	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946096		Uintah, Utah, US
Melissodes bicoloratus	40.3042	-109.7131	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946095		Uintah, Utah, US
Melissodes bicoloratus	40.3042	-109.7131	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946094		Uintah, Utah, US
Melissodes bicoloratus	40.3042	-109.7131	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946093		Uintah, Utah, US
Melissodes bicoloratus	40.3042	-109.7131	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946092		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946091		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946090		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946089		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946088		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946087		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946086		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946085		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946084		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946083		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946082		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946081		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946080		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946079		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946078		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946077		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946076		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946075		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946074		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946073		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946072		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946071		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946070		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946069		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G. Knowlton	1952-07-17	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946068		Uintah, Utah, US
Melissodes bicoloratus	40.1889	-109.6519	G.E. Bohart, G.F. Knowlton	1952-07-17							https://www.gbif.org/occurrence/658946067		Uintah, Utah, US
Melissodes bicoloratus	41.9756	-111.9525	G.E. Bohart	1959-08-06							https://www.gbif.org/occurrence/658946066		Cache, Utah, US
Melissodes bicoloratus	41.9756	-111.9525	G.E. Bohart	1959-08-06							https://www.gbif.org/occurrence/658946065		Cache, Utah, US
Melissodes bicoloratus	41.9756	-111.9525	G.E. Bohart	1959-08-06							https://www.gbif.org/occurrence/658946064		Cache, Utah, US
Melissodes bicoloratus	38.0114	-111.965	V.J. Tepedino, S. Sipes	1995-07-27	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946063		Garfield, Utah, US
Melissodes bicoloratus	38.0114	-111.965	V.J. Tepedino, S. Sipes	1995-07-27	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946062		Garfield, Utah, US
Melissodes bicoloratus	38.086	-118.96915	E.A. Sugden	1981-07-28							https://www.gbif.org/occurrence/658946061		Mono, California, US
Melissodes bicoloratus	38	-111	O.J. Messinger		H. Ikerd 2005						https://www.gbif.org/occurrence/658946060		Garfield, Utah, US
Melissodes bicoloratus	39	-108	O.J. Messinger								https://www.gbif.org/occurrence/658946059		Garfield, Utah, US
Melissodes bicoloratus	39	-108	O.J. Messinger								https://www.gbif.org/occurrence/658946058		Garfield, Utah, US
Melissodes bicoloratus	39	-108	O.J. Messinger								https://www.gbif.org/occurrence/658946057		Garfield, Utah, US
Melissodes bicoloratus	39	-108	O.J. Messinger								https://www.gbif.org/occurrence/658946056		Garfield, Utah, US
Melissodes bicoloratus	38	-111	O.J. Messinger								https://www.gbif.org/occurrence/658946055		Garfield, Utah, US
Melissodes bicoloratus	38.58	-110.59	A.&K. Menke, F.D. Parker	1980-08-19							https://www.gbif.org/occurrence/658946054		Emery, Utah, US
Melissodes bicoloratus	38.58	-110.59	A.&K. Menke, F.D. Parker	1980-08-19							https://www.gbif.org/occurrence/658946053		Emery, Utah, US
Melissodes bicoloratus	38.58	-110.59	A.&K. Menke, F.D. Parker	1980-08-19							https://www.gbif.org/occurrence/658946052		Emery, Utah, US
Melissodes bicoloratus	38.5446	-121.7387	E.R. Jaycox	1951-08-09							https://www.gbif.org/occurrence/658946051		Yolo, California, US
Melissodes bicoloratus	37.18861	-112.65741	R.T. Griswold	1990-08-29	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946050		Kane, Utah, US
Melissodes bicoloratus	37.18861	-112.65741	R.T. Griswold	1990-08-29	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946049		Kane, Utah, US
Melissodes bicoloratus	37.18861	-112.65741	R.T. Griswold	1990-08-29	J.S. Ascher 2006						https://www.gbif.org/occurrence/658946048		Kane, Utah, US
Melissodes bicoloratus			Toft, Catherine	1980-07-29	Brooks, R	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658324613		Mono, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-05-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658319459		Inyo, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-03-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658291445		Inyo, California, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658262021		Lyon, Nevada, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-05-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658186097		Inyo, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-03-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658172809		Inyo, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-03-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/658163904		Inyo, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-03-30	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657827142		Inyo, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-05-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657782211		Inyo, California, US
Melissodes bicoloratus			Toft, Catherine	1980-07-29	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657655568		Mono, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-04-02	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657637018		Inyo, California, US
Melissodes bicoloratus	36.4556	-116.8667	Schoener & Toft	1980-05-31	unknown	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/657591451		Inyo, California, US
Melissodes bicoloratus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854161530		
Melissodes bicoloratus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854160689		
Melissodes bicoloratus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159785		
Melissodes bicoloratus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159536		
Melissodes bicoloratus									http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/4854159525		
Melissodes bicoloratus	31.35	-110.283	R.R. Snelling	1972-08-28		Adult					https://www.gbif.org/occurrence/3801940257		Cochise, Arizona, US
Melissodes bicoloratus	39.23722	-119.59194	C.D. Michener	1950-07-01		Adult	Female				https://www.gbif.org/occurrence/3801940229		Lyon, Nevada, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801937267		Tuolumne, California, US
Melissodes bicoloratus	33.6097	-114.9161	F.D. Parker	1965-10-16		Adult					https://www.gbif.org/occurrence/3801855281		Riverside, California, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801855273		Tuolumne, California, US
Melissodes bicoloratus	39.83194	-119.35694	R.M. Bohart	1973-06-25		Adult					https://www.gbif.org/occurrence/3801390310		Washoe, Nevada, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801390305		Tuolumne, California, US
Melissodes bicoloratus	24.033333	-104.666667	A.E. Michelbacher	1962-08-13		Adult					https://www.gbif.org/occurrence/3801384330		Durango, MX
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801384325		Tuolumne, California, US
Melissodes bicoloratus	39.77556	-120.03833	F. Morishita	1949-07-13		Adult					https://www.gbif.org/occurrence/3801377266		Lassen, California, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801377260		Tuolumne, California, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801376267		Tuolumne, California, US
Melissodes bicoloratus	39.61	-119.25	A.E. Menke	1960-06-17		Adult					https://www.gbif.org/occurrence/3801340271		Lyon, Nevada, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801340265		Tuolumne, California, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801339282		Tuolumne, California, US
Melissodes bicoloratus	37.822	-120.098	A.R. Moldenke	1970-09-10		Adult		Topozone			https://www.gbif.org/occurrence/3801337286		Tuolumne, California, US
Melissodes bicoloratus											https://www.gbif.org/occurrence/3442367228		
Melissodes bicoloratus	46.4589	-119.5397	A. Hall-Mullen	2014-06-02	S.J. Burrows 2015		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421545351		Benton, Washington, US
Melissodes bicoloratus	37.84737	-111.35395	K. Moredock	2001-09-10	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421535098		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	L. Wilson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421534080		Garfield, Utah, US
Melissodes bicoloratus	37.6802	-111.3746	H. Ikerd	2003-06-23	K.W. Wright 2013		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421530812		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	H. Ikerd	2003-08-12	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421528832		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	A. Johansen	2003-09-01	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421521105		Garfield, Utah, US
Melissodes bicoloratus	37.6924	-111.379	H. Ikerd	2003-08-08	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421519798		Garfield, Utah, US
Melissodes bicoloratus	37.6924	-111.379	B. Bradley	2003-08-08	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421519797		Garfield, Utah, US
Melissodes bicoloratus	37.6924	-111.379	S.M. Higbee	2003-08-08	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421519795		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	O.J. Messinger	2001-08-31	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421519010		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	O.J. Messinger	2001-08-31	T.L. Griswold		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421518979		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	O.J. Messinger	2001-08-31	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421518878		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	C.M. Davidson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421513918		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	C.M. Davidson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421513915		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	C.M. Davidson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421513897		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	O.J. Messinger	2001-08-14	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421513878		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	R. Andrus Nelson	2001-07-26	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421513754		Garfield, Utah, US
Melissodes bicoloratus	37.9234	-111.2323		2000-08-17	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421512434		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	R. Andrus Nelson	2001-07-26	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421509201		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	H. Ikerd	2003-08-12	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421506787		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	S.M. Higbee	2003-07-29	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421506058		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	S.M. Higbee	2003-07-29	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421505929		Garfield, Utah, US
Melissodes bicoloratus	37.9138	-111.2507	O.J. Messinger	2003-08-12	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421501121		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	B. Bradley	2003-08-12	K.W. Wright 2013		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421493997		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	C. Boyers	2003-07-29	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421493560		Garfield, Utah, US
Melissodes bicoloratus	37.85062	-111.35437	H. Ikerd	2003-08-12	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421483551		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	M. Sunseri	2000-08-18	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421482987		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	M. Sunseri	2000-08-18	No Entry		Male		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421482981		Garfield, Utah, US
Melissodes bicoloratus	37.2775	-112.3279	L. Wilson	2001-07-09	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421482288		Kane, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	M. Sunseri	2000-08-08	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421481523		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	M. Sunseri	2000-08-18	T.L. Griswold 2001		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421481383		Garfield, Utah, US
Melissodes bicoloratus	37.7189	-111.4341	H. Ikerd	2003-08-08	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421471601		Garfield, Utah, US
Melissodes bicoloratus	37.7645	-111.4046	C. Boyers	2003-07-28	H. Ikerd 2005		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah	https://www.gbif.org/occurrence/3421468295		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	C.M. Davidson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421465032		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	L. Wilson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421462168		Garfield, Utah, US
Melissodes bicoloratus	37.8651	-111.317	O.J. Messinger	2001-07-02	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421453947		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	L. Wilson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421446706		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	L. Wilson	2001-08-28	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421446699		Garfield, Utah, US
Melissodes bicoloratus	37.84737	-111.35395	L. Wilson	2001-07-25	T.L. Griswold		Female		Content licensed under Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States (CC BY-NC-SA 3.0).http://creativecommons.org/licenses/by-nc-sa/3.0/us/ . User must cite: U. S. National Pollinating Insects Database, United States Department of Agriculture, Agriculture Research Service, Bee Biology and Systematics Laboratory, Logan, Utah (Accessed YYYY-DD-MM)	United States Department of Agriculture, Agriculture Research Service, Pollinating Insect-Biology, Management, Systematics Research, Logan, Utah	https://www.gbif.org/occurrence/3421441642		Garfield, Utah, US
Melissodes bicoloratus	40.188889	-109.651944	G. E. Bohart & G. F. Knowlton				Female			American Museum of Natural History	https://www.gbif.org/occurrence/2804704163		Uintah Co., Utah, US
Melissodes bicoloratus	39.7756	-120.0383	Hurd, P	1949-07-13	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931750		Lassen, California, US
Melissodes bicoloratus	39.60797	-119.25184	Menke, A	1960-06-17	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931745		Lyon, Nevada, US
Melissodes bicoloratus	39.7756	-120.0383	Hurd, P	1949-07-13	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931735		Lassen, California, US
Melissodes bicoloratus	39.83185	-119.35795	Horning, D	1968-06-27	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931731		Washoe, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1899931707		Lyon, Nevada, US
Melissodes bicoloratus											https://www.gbif.org/occurrence/1321115062		
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783669		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783656		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783649		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783648		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783646		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783644		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783639		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783638		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783635		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783634		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783632		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783629		Lyon, Nevada, US
Melissodes bicoloratus	39.7756	-120.0383	Hurd, P	1949-07-07	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783627		Lassen, California, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783619		Lyon, Nevada, US
Melissodes bicoloratus			Knowlton & Bohart	1952-07-19	LaBerge, Walley	Adult			http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1092783605		Uintah, Utah, US
Melissodes bicoloratus	39.77546	-120.03937	J. W. MacSwain	1949-08-09		Adult			http://vertnet.org/resources/norms.html		https://www.gbif.org/occurrence/1061041798		Lassen County, California, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	M		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1024623040		Lyon, Nevada, US
Melissodes bicoloratus	39.2372	-119.5919	Michener, Charles	1950-07-01	LaBerge, Walley	Adult	F		http://biodiversity.ku.edu/research/university-kansas-biodiversity-institute-data-publication-and-use-norms		https://www.gbif.org/occurrence/1024622988		Lyon, Nevada, US
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
  map.fitBounds(pointLayer.getBounds(), {
    padding: [50, 50], // space in pixels around points
    maxZoom: 8         // prevent zooming in too much
  });
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
