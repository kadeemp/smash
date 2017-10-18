/**
Initialize global variables, attach event handlers, etc
**/

var submitButton = document.getElementById("form-submit");
var zipCode;
var school; 
var grade;

var berkeleyZips = [94720,94704,94709,94701,94712,94705,94703,94708,94702,94707,94618,94706,94609,94710,94611,94662,94608,94563,94530,94615,94610,94516,94612,94604,94614,94620,94622,94623,94624,94649,94659,94660,94661,94666,94617,94607,94602,94805,94606,94804,94803,94802,94808,94850,94601,94501,94130,94570,94575,94820,94619,94613,94807,94549,94806,94564,94556,94553,94801,94547,94111,94105,94133,94502,94605,94104,94621,94595,94108,94603,94158,94597,94107,94109,94572,94103,94102,94523,94123,94119,94120,94125,94126,94137,94139,94140,94141,94142,94143,94144,94145,94146,94147,94151,94159,94160,94161,94163,94164,94172,94177,94188,94920,94546,94115,94596,94525,94577,94124,94110,94569,94966,94117,94129,94114,94118,94578,94134,94131,94974,94964,94518,94579,94522,94524,94527,94529,94925,94598,94507,94526,94121,94122,94112,94127,94520,94580,94901,94965,94590,94976,94116,94939,94583,94005,94977,94942,94519,94016,94528,94132,94014,94904,94912,94913,94914,94915,94592,94541,94510,94591,94941,94540,94543,94557,94083,94017,94957,94080,94521,94979,94589,94015,94545,94903,94128,94506,94552,94542,94960,94978,94544,94565,94582,94066,94030,94949,94517,94011,94401,94568,94497,94044,94587,94010,94404,94930,94970,94503,94973,94588,94403,94065,94998,94402,94948,94945,94555,94924,94963,94002,94534,94933,94509,94063,94585,94536,94947,94531,94070,94938,94559,94038,94037,94946,94537,94064,94560,94566,94551,95476,94018,94513,94061,94512,94025,94019,95487,94538,94954,94581,94026,94586,94027,94303,94301,94539,94302,94309,94950,94533,94956,94305,95433,94062,94999,94953,94975,94955,94535,94306,94304,94043,95416,95002,94514,94035,94089,94548,94023,94571,94561,94028,94039,94042,94041,94040,95134,94505,94022,95431,94085,95036,95696,94511,95391,95054,94024,94088,94086,94951,94952,95442,94599,95687,95625,94087,95131,95051,95035,95052,95055,95056,94931,94562,95688,94926,94927,95132,95050,94937,95015,95053,94020,94928,94074,95133,95641,94940,95014,95452,94573,95110,95129,95101,95117,94550,95112,95103,95106,95108,95109,95115,95150,95151,95152,95153,95154,95155,95156,95157,95158,95159,95160,95161,95164,95170,95172,95173,95190,95191,95193,95194,95196,95113,95128,95126,95192,95116,95127,94021,95620,95130,94971,95009,95011,95122,95071,95008,95070,95125,95409,95407,95219,95404,95405,94558,95234,95680,95690,95148,95376,95378,94929,95406,95124,95402,95121,95206,95377,95140,94060,95686,95111,95030,95118,95136,95031,94574,94972,95473,94576,95615,95242,95032,95304,95401,94922,95006,95472,95123];

var davisZips = [95616,95617,95618,95695,95694,95776,95620,95697,95653,95691,95688,95605,95837,95625,95798,95799,95687,95627,95831,95833,95834,95612,95696,95818,95814,95835,95840,95851,95852,95853,95860,95865,95866,95867,95894,95899,94203,94204,94205,94206,94207,94208,94209,94211,94229,94230,94232,94234,94235,94236,94237,94239,94240,94244,94245,94247,94248,94249,94250,94252,94254,94256,94257,94258,94259,94261,94262,94263,94267,94268,94269,94271,94273,94274,94277,94278,94279,94280,94282,94283,94284,94285,94287,94288,94289,94290,94291,94293,94294,94295,94296,94297,94298,94299,95822,95812,95813,95811,95698,95836,95832,95816,95607,95645,95817,95820,95815,95824,95819,94535,95838,95823,95673,95639,95758,94533,95825,95615,95626,95828,95652,95826,95864,95821,95937,95659,95660,94558,95668,95757,95841,94571,95676,95759,95680,95829,95842,95827,95609,95608,95843,95690,95741,95747,95655,95637,95621,94534,95606,94585,95624,95670,95830,95641,94512,95611,95610,95628,94581,95686,94599,95674,95678,94574,95693,95661,94562,95742,95662,94573,94503,94508,95950,95957,95765,95912,95991,94567,95993,94559,95677,94561,95679,95763,95242,94576,94510,94511,95671,95648,95630,95961,95746,94591,95683,94589,95632,95258,94565,95650,95681,95487,94509,95638,95663,95416,95452,95442,94590,94520,95692,95431,95762,94519,95433,94569,95476,95992,94548,94515,95658,95219,94592,95467,94531,94521,95241,94525,94522,94524,94527,94529,95220,95409,94572,94518,95209,95253,94523,95987,95664,94553,95982,95461,95903,95901,95404,94547,95457,95682,95672,95237,94513,94517,95210,95604,94564,94954,94597,94598,95603,95953,95240,95207,95405,95602,94951,94596,94505,94820,95227,95422,95206,95234,95212,94803,95204,95211,95213,94549,94806,95406,95402,95203,95932,95614,94595,94945,94975,94999,94953,94507];

var morehouseZips = [30314,30313,30369,30310,39901,30303,30304,30318,30301,30302,30325,30343,30348,30353,30355,30357,30358,30364,30368,30370,30371,30374,30375,30377,30380,30384,30385,30388,30392,30394,30396,30398,31106,31107,31126,31131,31139,31150,31156,31192,31193,31195,31196,30332,30361,30334,30311,30312,30363,30308,31141,31145,31146,30309,30315,30306,30307,30333,30305,30324,30344,30316,30322,30317,30359,30354,30327,30336,30378,30326,30126,31119,30329,30320,30337,30031,30036,30037,30030,30339,30080,30321,30331,30082,30168,31136,30342,30032,30033,30288,30081,30272,30298,30002,30319,30079,30349,30345,30297,30034,30021,30366,30069,30122,30106,30067,30328,30346,30341,30287,30060,30008,30294,30072,30035,30260,30362,30083,30111,30296,30085,30086,30340,30274,30291,30084,30338,30068,30088,30061,30063,30065,30090,30006,30007,30356,30273,30360,30213,30064,30350,30237,30074,30062,30127,30236,30087,30093,30091,30133,30038,30238,30071,30003,30010,30135,30092,30077,30066,30048,30214,30058,30134,30076,30047,30281,30152,30156,30160,30141,30075,30290,30022,30009,30144,30268,30096,30095,30098,30099,30026,30029,30250,30039,30023,30094,30044,30101,30187,30012,30097,30188,30228,30078,30253,30005,30157,30215,30270,30269,30189,30004,30102,30146,30169,30277,30180,30013,30265,30017,30024,30046,30142,30042,30049,30132,30043,30252,30284,30045,30115,30052,30289,30137,30185,30179,30016,30054,30070,30264,30275,30223,30271,30276,30248,30015,30205,30515,30040,30114,30212,30518,30019,30041,30263,30116,30121,30014,30519,30259,30018,30229,30184,30234,30120,30178,30153,30011,30112,30119,30028,30224,30620,30233,30118,30107,30183,30110,30542,30123,30266,30109,30292,30117,30655,30220,30656,30104,30251,30025,30151,30055,30150,30113,30548,30502,30218,30140,30517,30566,30206,30680,30171,30257,30295,30145,30177,30504,30216,30182,30173,30170,30143,30148,30056,30139,30176,30663,30641];

var stanfordZips = [94305,94304,94301,94302,94309,94026,94306,94025,94027,94303,94023,94022,94028,94061,94043,94040,94039,94042,94064,94024,94041,94063,94035,94062,94070,94088,94089,94085,94086,94065,94087,94560,94002,95002,95014,94555,95015,94404,94020,94403,95051,95054,94538,94402,95129,95134,95052,95055,95056,94497,95050,94021,94537,94401,95070,95117,95053,95071,94074,94019,94587,94536,95130,95036,94545,95128,95131,94010,95009,95011,95008,95110,94011,95126,94539,94544,95103,95106,95108,95109,95115,95150,95151,95152,95153,95154,95155,95156,95157,95158,95159,95160,95161,95164,95170,95172,95173,95190,95191,95193,95194,95196,95101,95113,95112,95192,95030,95133,95031,94018,95125,94542,94540,94543,94557,94580,94030,95124,94541,94128,95006,94060,95116,94579,94586,95132,95122,95118,95035,95032,94038,94578,94066,94577,95033,94037,94083,95136,95127,95111,95044,95026,94552,94080,95121,94621,94044,94603,94502,95007,95005,94546,95123,95148,94005,94605,94566,94014,94588,94124,94015,95120,95018,94601,95060,94134,94568,94613,95119,94501,94619,94016,94017,95017,94112,94583,94606,95042,95066,95139,94110,94602,95041,94127,95138,95140,94107,94617,94604,94614,94620,94622,94623,94624,94649,94659,94660,94661,94666,94158,95135,94131,94132,94610,95013,94612,94582,94615,94114,94607,94103,94119,94120,94125,94126,94137,94139,94140,94141,94142,94143,94144,94145,94146,94147,94151,94159,94160,94161,94163,94164,94172,94177,94188,94105,94102,94116,94117,94516,94104,94526,94570,94575,94108,94611,95141,95065,94111,94556,94609,94662,94115,94122,94608,94109,94618,94130,94118,94550,95073,95064,94133,94123,94506,94563,94121,94705,94129,94528,94703,94702,94507,94704,94595,94701,94712,94720,94710,94709,95061,95063,95067,94551,94549,95062,94706,95003,94596,95010,94708,94707,94598,95001,94597,95037,94966,95038,94530,94965,94920,94804,94517,94807,94802,94808,94850,94805,94523,94518,94803,94553,95046,94801,95391,94820,94941,94522,94524,94527,94529,94942,94521,94925,94806,94514,94974,94976,94964,95019,94564,94519,94513,94939,94977,94547,94520,95377,95076,94904,95376,94572,94901,95077,94531,94565,94957,94912,94913,94914,94915,94569,95020,94525,94970,94979,94509,95021,94505,94978,94960,94924,95304,94930,95378,94903,95039,94510,94590,94973,94591,94548,94592,95004,95387,94963,94949,94933,94589];

var uclaZips = [90095,90024,90084,90073,90025,90067,90077,90212,90064,90209,90213,90210,90049,90404,90035,90211,90034,90048,90403,90069,90402,90405,90231,90233,90406,90407,90408,90409,90410,90411,90232,90401,90066,90046,91423,90036,91403,90291,91495,91413,91604,90294,90016,90230,90272,90019,90295,90292,91436,90056,90094,90038,90028,91416,91426,91608,91607,91602,90008,90068,91411,91401,90010,90020,91316,90004,90005,90018,91603,91609,91610,91611,91612,91614,91615,91616,91617,91618,91601,91404,91407,91408,91409,91410,91470,91482,91496,91499,91522,91356,90045,90043,90296,90302,91606,91523,90293,90029,90006,90062,91521,91406,90301,91405,90306,90307,90308,90309,90310,90312,91505,90311,91357,90089,90057,90290,90027,90007,90070,91506,91605,90037,90305,90017,90015,90026,91337,91385,90304,91335,91502,91364,91412,91503,91507,91508,91510,91526,90071,91402,90245,91353,91371,90014,91201,90099,91393,90047,91204,90189,90264,90039,91504,90090,90011,90303,91365,90030,90050,90051,90052,90053,90054,90055,90060,90072,90074,90075,90076,90078,90080,90081,90082,90083,90086,90087,90088,90093,90009,90012,91203,90079,90013,91343,91210,91209,91221,91222,91224,91225,91226,90251,90044,91501,90021,91325,91327,91328,91329,91396,91367,90003,91202,91306,90250,91205,91352,91303,90065,91305,91308,91309,91372,90261,90267,90266,91330,90031,91331,91346,91395,90001,91302,91324,91207,91333,90033,90096,90260,90249,91345,91208,90058,90002,91394,90278,90061,90041,90023,91206,90506,90254,91341,90255,90042,90247,90063,91340,90504,91046,90032,90263,91304,91043,90059,91020,91021,91313,90270,91041,91214,91344,91326,90248,90222,91392,91040,91105,91307,91030,91334,90503,91012,90277,91754,90022,91103,90262,91123,91031,90201,91803,90280,91311,90091,90507,90508,90509,90510,90040,90223,90224,91801,91804,90220,90747,91102,91109,91110,91114,91115,91116,91117,91118,91121,91124,91125,91126,91129,91182,91184,91185,91188,91189,90746,90202,91802,91896,91899,91101,90501,91714,91715,91716,91756,90502,91106,91042,90749,91301,91755,91376,91108,90221,90505,93064,91778,91104,91001,91003,91199,90640,90265,90723,90745,90239,91321,91776,91377,90242,90240,91775,90241,90895,90717,90710,91770,93063,90661,90662,91342,90274,90805,91107,90660,91771,91772,90810,91382,90706,93099,90275,91322,90671,91733,93094,90610,90606,91780,90807,91011,90748,90744,91731,91007,90707,91381,90712,91362,90711,90714,91025,91358,91359,90732,91024,90806,90651,90652,91734,91735,91066,91077,90650,91006,91386,91023,93062,90755,90601,90670,90607,90608,90609,90713,90813,93065,91387,91732,90731,91350,90602,90733,90734,91380,90702,91351,90701,90808,90822,91361,90801,90809,90832,90842,90844,90846,90847,90848,90853,90899,90703,91746,90833,90831,90835,91383,91355,90605,90834,91017,90802,90804,90715,90604,91745,90815,91360,90716,90637,90814,90639,90603,91354,91009,91706,90840,91016,90623,90638,91008,91319,90803,90721,91010,91747,91749,91790,93021,90720,91793,90621,90630,93020,90622,90624,91744,90631,90620,91310,90632,90633,90740,92833,91722,91702,91320,92845,93510,93040,90743,91792,91748,91723,91791,92801,90680,93012,92804,92809,91390,90742,92832,92841,92649,92835,93015,92684,92822,91788,92821,91384,91724,92834,92836,92837,92838,91789,92683,93563,92685,92831,91740,92899,92803,92812,92814,92815,92816,92817,92825,92850,92844,92647,92655,92805,91741,92802,92842,92846,93016,93011,92840,93550,92871,92605,91765,91773,92870,92648,93551,92843,92806,91768,93066,92728,92868,92708,92865,92703,93010,92811,92823,92615,93042,92706,93033,92885,92704,92856,92857,92859,92863,92864,91766,92646,92886,91769,92866,93590,93599,91750,92867,92702,92711,92712,92799,93061,92735,92861,92701,92807,91767,93041,92626,93553,93543,93552,92707,91709,91711,92627,92869,92628,92780,91763,92663,92705,92781,93031,93032,93034,92887,92658,92659,92808,93532,93044,93030,92782,93060,93004,93036,93043,92606,92614,92660,91710,91786,92661,92698,92616,92619,92623,93035,93536,92697,91784,92662,91758,92617,92612,91785,92604,92602,91708,92862,91762,92625,92620,93539,93584,93586,93003,90704,92650,93544,92657,92603,92618,92880,93534,91729,91743,91764,91701,91761,93243,91730,91737];

var upennZips = [19104,19103,19130,19019,19092,19093,19099,19101,19102,19105,19108,19110,19121,19131,19139,19146,19155,19160,19161,19162,19170,19171,19172,19173,19175,19177,19178,19179,19181,19182,19183,19184,19185,19187,19188,19191,19192,19193,19194,19196,19197,19244,19255,19107,19109,19132,19143,19190,19195,19106,19122,19123,19145,19147,19151,19004,19050,19066,19082,19129,19133,19142,08102,19096,19125,19140,19148,08103,19023,19072,19127,19144,19176,08101,08104,08105,19018,19026,19079,19112,19134,19141,19003,19083,19119,19120,19128,19153,08030,08063,08110,19032,19036,19041,19124,19137,19138,08059,08093,08107,08109,19035,19043,19074,19098,19118,19126,19150,08106,08108,19012,19027,19029,19064,19070,19076,19113,08031,08065,08086,08099,19008,19010,19033,19095,19135,19149,19444,08002,08033,08035,08066,19038,19078,19081,19085,19111,08076,08078,19022,19031,19094,19428,19429,08007,08029,08052,08096,08097,19037,19046,19065,19075,19086,19091,19152,08020,08027,08034,08045,08061,08077,19136,19462,08049,08090,19001,19016,19034,19080,19088,19089,19115,08051,08056,08083,19015,19025,19063,19073,19087,19114,19405,08003,08084,19013,19333,19404,19407,19408,19409,19415,08014,08057,19006,19009,19028,19090,19401,19406,19424,08075,08080,19014,19039,19052,19116,19154,19312,19422,08012,08021,08032,08043,08054,19484,08026,19002,19017,19044,19437,19477,08010,08071,08085,19040,19301,19342,19403,08046,19020,19060,19061,19397,19398,19399,19436,08053,08062,08074,18991,19319,19455,19481,19482,19486,19493,19494,19495,19496,19703,08073,08091,18936,19021,19053,19331,19339,19340,19373,19454,19456,19490,08025,08028,18966,18974,19355,19446,08036,08067,19395,19423,19810,08039,08081,18976,19345,19426,19432,19453,08009,08016,08048,19048,19049,19381,19443,19460,19809,18929,18954,19056,19430,19474,19803,08055,08060,08312,18915,19007,19047,19380,19383,19451,08069,08343,18914,18956,19057,19317,19382,19802,08004,08018,08518,18932,19055,19353,19366,19440,19442,19732,08098,18901,18922,18925,18943,18980,19058,19341,19438,19450,19801,19850,19880,19884,19885,19886,19890,19891,19892,19893,19894,19895,19896,19897,19898,19899,08023,08554,18940,18964,19030,19054,19441,19468,19710,19806,18927,18946,19357,19473,19735,19807,08011,08094,08322,08505,19425,19478,19805,08089,18912,18958,19067,19421,19475,18918,18923,18957,18962,18969,19457,19492,19736,08022,08041,08328,18902,18916,18928,18979,19480,08070,08095,18911,18917,18931,18934,18960,18977,19335,19804,08042,08068,08344,08608,08611,08625,08628,18084,18938,18971,19348,19375,19707,19721,08001,08064,08318,08650,18949,19808,08313,08560,08601,08602,08603,08604,08605,08606,08607,08610,08618,08645,08646,08647,08666,08695,18054,18074,18913,18933,18944,19354,19372,19464,19465,08609,08629,08638,18963,19720,08072,08515,08640,19343,19374,19435,08530,08620,18910,19311,19470,19525,08562,08619,08641,18076,18950,18970,19358,19472,08037,08079,08088,08326,08341,08346,08347,08534,18073,18947,19711,08648,19320,19706,19713,08015,08310,08352,08511,08556,08690,18935,19318,19376,19520,19548,08362,08559,18942,18951,19316,19350,19545,19714,08353,08360,18041,18968,19390,19712,19715,19716,19717,19718,19725,19726,08557,19518,19702,08217,08350,08501,18955,19344,19347,19367,19369,19503,19504,19505,19731,08302,08550,08691,18070,18920,18981,19346,19371,19512,19519,19701,19733,08038,08342,08361,08525,08533,08551,08561,18036,18953,19360,19523,19708,08526,08825,18056,18092,19352,19365,19508,08514,08541,08542,08543,08544,18921,18972,19330,08019,08803,18060,18068,18930,19351,19543,21920,08320,08323,08340,08504,08540,08558,19310,19535,08520,08536,18081,08733,18034,18049,18077,19547,21922,08215,08330,08528,08553,08555,08822,17527,17555,18039,19709,21916,08512,18011,18062,18098,18099,19363,19606,19730,21921,08502,08510,08848,08867,08868,18055,08311,08317,08535,08759,17509,17528,18015,08213,08332,08887,17535,18046,18103,19539,08527,08834,08852,17519,19540,19562,19602,08348,08844,08853,08885,17507,18025,18087,19511,19607,08224,08810,08823,08824,17506,17536,18016,18101,18102,18105,18195,19522,19536,19603,19604,19611,19612,08240,08319,08804,08821,17557,17581,18018,18031,19560,19734,21915,08315,17562,18042,18106,19362,19538,19601,21901,08329,08831,08870,17503,17529,17534,18001,18002,18003,18104,18109,19610,07726,08005,08087,08241,08316,08349,08801,08875,17549,18017,18020,19510,19609,08345,08731,08809,08828,08889,18032,19501,19605,21911,21912,21914];

var wayneZips = [48202,48211,48206,48208,48201,48212,48233,48204,48243,48203,48222,48231,48232,48244,48255,48260,48264,48265,48266,48267,48268,48269,48272,48275,48277,48278,48279,48288,48226,48238,48216,48210,48234,48207,48213,48214,48221,48209,48227,48030,48121,48123,48215,48205,48126,48091,48220,48235,48228,48120,48224,48069,48090,48397,48218,48015,48217,48230,48089,48237,48122,48225,48067,48068,48070,48223,48071,48229,48021,48219,48092,48236,48128,48124,48075,48086,48037,48072,48101,48093,48146,48239,48127,48088,48080,48073,48125,48076,48017,48066,48240,48192,48081,48033,48083,48026,48310,48312,48195,48141,48136,48084,48012,48009,48034,48025,48151,48153,48135,48180,48082,48311,48035,48150,48336,48154,48185,48152,48301,48318,48193,48085,48313,48186,48314,48098,48099,48007,48138,48332,48333,48334,48304,48303,48038,48036,48335,48242,48184,48174,48302,48046,48183,48043,48317,48331,48322,48045,48307,48309,48044,48375,48323,48315,48320,48341,48325,48187,48343,48308,48321,48134,48342,48376,48188,48324,48316,48042,48173,48377,48326,48340,48167,48164,48170,48328,48168,48374,48112,48179,48390,48111,48306,48051,48387,48327,48094,48175,48047,48382,48393,48359,48330,48329,48360,48198,48363,48028,48096,48095,48386,48165,48048,48117,48004,48361,48362,48166,48346,48178,48381,48383,48197,48023,48347,48191,48001,48366,48190,48348,48050,48065,48356,48367,48370,48105,48380,48109,48104,48159,48005,48064,48357,48106,48107,48113,48371,48039,48162,48350,48108,48062,48116,48160,48189,48462,48114,48353,48139,48161,48442,48054,48003,48110,48143,48063,48428,48002,48103,48455,48041,48176,48145,48131,48130,48438,48140,48157,48079,48440,48430,48027,48843,48169,48115,48411,48014,48133,48844,49270,48177,49229,48855,48022,48074,48480,48439,48444,48040,48412,48451,48182,48118,48446,49236,49238,49286];

var listOfZips = [berkeleyZips, davisZips, morehouseZips, stanfordZips, uclaZips, upennZips, wayneZips];

function getValues() {
    zipCode = document.getElementById("zip").value;
    school = document.getElementById("school").checked;
    grade = document.getElementById("grade").checked;
}

function showMessage() {
    getValues();
    document.getElementById("stuff").innerHTML = "";
    var berkeleyConfirm = "<p>You can apply to <b>Berkeley</b>.";
    var davisConfirm = "<p>You can apply to <b>Davis</b>.";
    var morehouseConfirm = "<p>You can apply to <b>Morehouse</b>.";
    var stanfordConfirm = "<p>You can apply to <b>Stanford</b>.";
    var uclaConfirm = "<p>You can apply to <b>UCLA</b>.";
    var upennConfirm = "<p>You can apply to <b>UPenn</b>.";
    var wayneConfirm = "<p>You can apply to <b>Wayne State</b>.";
    var listOfConfirms = [berkeleyConfirm, davisConfirm, morehouseConfirm, stanfordConfirm, uclaConfirm, upennConfirm, wayneConfirm];
    var confirmedSites = "";
    //check school and grade
    if(!school || !grade) {
        if(!school) {
            confirmedSites += "<p>Sorry, only students attending public schools, or who receive financial assistance at private schools, are eligible to apply.</p>"
        }
        if(!grade) {
            confirmedSites += "<p>Sorry, only 9th graders are elgible to apply.</p>"
        }
    }
    //check zip code
    if( document.getElementById("zip").value.length != 5 || isNaN(Number(document.getElementById("zip").value))) {
        confirmedSites += "<p>Please enter zip code as 5 numbers: #####</p>";
    }
    else{
        if(school && grade) {
            for( var i = 0; i < listOfZips.length; i++) {
                if(listOfZips[i].includes(Number(zipCode))) {
                    confirmedSites += listOfConfirms[i];
                }
            }
        }
        if (confirmedSites.length == 0) {
            confirmedSites += "<p>Your zip code is not within range of a SMASH site!</p>";
        }
    }
    document.getElementById("stuff").innerHTML = confirmedSites;
}

submitButton.addEventListener("click", showMessage);