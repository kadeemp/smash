(function() {
  let submitButton = document.getElementById("form-submit");
  let zipCode;
  let zipCodeArea = document.getElementById("zip");
  let gradeCheck = document.getElementById("school");
  let schoolCheck = document.getElementById("grade");
  let gpaCheck = document.getElementById("gpa");
  let selectedSchool = document.getElementById("selectedSchool");
  let school;
  let grade;
  let message;

  let sites = {
  "SMASH UC Davis": [
      {
          "zip_code": "94505",
          "distance": 48.4,
          "city": "Discovery Bay",
          "state": "CA"
      },
      {
          "zip_code": "94596",
          "distance": 47.753,
          "city": "Walnut Creek",
          "state": "CA"
      },
      {
          "zip_code": "94517",
          "distance": 46.08,
          "city": "Clayton",
          "state": "CA"
      },
      {
          "zip_code": "94549",
          "distance": 48.54,
          "city": "Lafayette",
          "state": "CA"
      },
      {
          "zip_code": "94598",
          "distance": 46.5,
          "city": "Walnut Creek",
          "state": "CA"
      },
      {
          "zip_code": "94597",
          "distance": 46.378,
          "city": "Walnut Creek",
          "state": "CA"
      },
      {
          "zip_code": "95206",
          "distance": 48.521,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94513",
          "distance": 44.228,
          "city": "Brentwood",
          "state": "CA"
      },
      {
          "zip_code": "95234",
          "distance": 45.833,
          "city": "Holt",
          "state": "CA"
      },
      {
          "zip_code": "95208",
          "distance": 46.284,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "95213",
          "distance": 46.284,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94518",
          "distance": 43.452,
          "city": "Concord",
          "state": "CA"
      },
      {
          "zip_code": "95203",
          "distance": 48.735,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94523",
          "distance": 44.113,
          "city": "Pleasant Hill",
          "state": "CA"
      },
      {
          "zip_code": "94521",
          "distance": 42.21,
          "city": "Concord",
          "state": "CA"
      },
      {
          "zip_code": "94803",
          "distance": 48.796,
          "city": "El Sobrante",
          "state": "CA"
      },
      {
          "zip_code": "94531",
          "distance": 40.67,
          "city": "Antioch",
          "state": "CA"
      },
      {
          "zip_code": "94820",
          "distance": 48.378,
          "city": "El Sobrante",
          "state": "CA"
      },
      {
          "zip_code": "94524",
          "distance": 42.608,
          "city": "Concord",
          "state": "CA"
      },
      {
          "zip_code": "94527",
          "distance": 42.608,
          "city": "Concord",
          "state": "CA"
      },
      {
          "zip_code": "95204",
          "distance": 47.785,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94548",
          "distance": 40.849,
          "city": "Knightsen",
          "state": "CA"
      },
      {
          "zip_code": "95211",
          "distance": 47.637,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94519",
          "distance": 40.785,
          "city": "Concord",
          "state": "CA"
      },
      {
          "zip_code": "94553",
          "distance": 42.835,
          "city": "Martinez",
          "state": "CA"
      },
      {
          "zip_code": "94561",
          "distance": 39.142,
          "city": "Oakley",
          "state": "CA"
      },
      {
          "zip_code": "94564",
          "distance": 46.769,
          "city": "Pinole",
          "state": "CA"
      },
      {
          "zip_code": "94520",
          "distance": 40.79,
          "city": "Concord",
          "state": "CA"
      },
      {
          "zip_code": "94509",
          "distance": 38.538,
          "city": "Antioch",
          "state": "CA"
      },
      {
          "zip_code": "95267",
          "distance": 46.552,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "95207",
          "distance": 45.976,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94522",
          "distance": 39.473,
          "city": "Concord",
          "state": "CA"
      },
      {
          "zip_code": "95269",
          "distance": 45.681,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94547",
          "distance": 45.217,
          "city": "Hercules",
          "state": "CA"
      },
      {
          "zip_code": "94565",
          "distance": 37.739,
          "city": "Pittsburg",
          "state": "CA"
      },
      {
          "zip_code": "95296",
          "distance": 45.749,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94511",
          "distance": 37.282,
          "city": "Bethel Island",
          "state": "CA"
      },
      {
          "zip_code": "95210",
          "distance": 45.237,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94572",
          "distance": 43.626,
          "city": "Rodeo",
          "state": "CA"
      },
      {
          "zip_code": "94569",
          "distance": 41.384,
          "city": "Port Costa",
          "state": "CA"
      },
      {
          "zip_code": "95209",
          "distance": 42.559,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "95212",
          "distance": 46.409,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "95219",
          "distance": 38.691,
          "city": "Stockton",
          "state": "CA"
      },
      {
          "zip_code": "94525",
          "distance": 41.861,
          "city": "Crockett",
          "state": "CA"
      },
      {
          "zip_code": "94592",
          "distance": 41.278,
          "city": "Vallejo",
          "state": "CA"
      },
      {
          "zip_code": "94510",
          "distance": 36.436,
          "city": "Benicia",
          "state": "CA"
      },
      {
          "zip_code": "94590",
          "distance": 39.598,
          "city": "Vallejo",
          "state": "CA"
      },
      {
          "zip_code": "94570",
          "distance": 35.567,
          "city": "Moraga",
          "state": "CA"
      },
      {
          "zip_code": "95240",
          "distance": 46.674,
          "city": "Lodi",
          "state": "CA"
      },
      {
          "zip_code": "94591",
          "distance": 36.809,
          "city": "Vallejo",
          "state": "CA"
      },
      {
          "zip_code": "94512",
          "distance": 29.036,
          "city": "Birds Landing",
          "state": "CA"
      },
      {
          "zip_code": "95242",
          "distance": 36.511,
          "city": "Lodi",
          "state": "CA"
      },
      {
          "zip_code": "95253",
          "distance": 43.236,
          "city": "Victor",
          "state": "CA"
      },
      {
          "zip_code": "95641",
          "distance": 30.743,
          "city": "Isleton",
          "state": "CA"
      },
      {
          "zip_code": "94571",
          "distance": 28.197,
          "city": "Rio Vista",
          "state": "CA"
      },
      {
          "zip_code": "95241",
          "distance": 38.85,
          "city": "Lodi",
          "state": "CA"
      },
      {
          "zip_code": "95686",
          "distance": 31.252,
          "city": "Thornton",
          "state": "CA"
      },
      {
          "zip_code": "95237",
          "distance": 44.379,
          "city": "Lockeford",
          "state": "CA"
      },
      {
          "zip_code": "94589",
          "distance": 35.813,
          "city": "Vallejo",
          "state": "CA"
      },
      {
          "zip_code": "95258",
          "distance": 37.208,
          "city": "Woodbridge",
          "state": "CA"
      },
      {
          "zip_code": "94503",
          "distance": 35.792,
          "city": "American Canyon",
          "state": "CA"
      },
      {
          "zip_code": "94585",
          "distance": 25.953,
          "city": "Suisun City",
          "state": "CA"
      },
      {
          "zip_code": "95690",
          "distance": 26.368,
          "city": "Walnut Grove",
          "state": "CA"
      },
      {
          "zip_code": "95220",
          "distance": 39.097,
          "city": "Acampo",
          "state": "CA"
      },
      {
          "zip_code": "95227",
          "distance": 46.924,
          "city": "Clements",
          "state": "CA"
      },
      {
          "zip_code": "94955",
          "distance": 46.802,
          "city": "Petaluma",
          "state": "CA"
      },
      {
          "zip_code": "94559",
          "distance": 35.492,
          "city": "Napa",
          "state": "CA"
      },
      {
          "zip_code": "94954",
          "distance": 46.65,
          "city": "Petaluma",
          "state": "CA"
      },
      {
          "zip_code": "95680",
          "distance": 24.501,
          "city": "Ryde",
          "state": "CA"
      },
      {
          "zip_code": "94534",
          "distance": 28.12,
          "city": "Fairfield",
          "state": "CA"
      },
      {
          "zip_code": "95476",
          "distance": 41.882,
          "city": "Sonoma",
          "state": "CA"
      },
      {
          "zip_code": "95487",
          "distance": 41.087,
          "city": "Vineburg",
          "state": "CA"
      },
      {
          "zip_code": "95632",
          "distance": 35.007,
          "city": "Galt",
          "state": "CA"
      },
      {
          "zip_code": "94533",
          "distance": 21.992,
          "city": "Fairfield",
          "state": "CA"
      },
      {
          "zip_code": "94535",
          "distance": 19.999,
          "city": "Travis Afb",
          "state": "CA"
      },
      {
          "zip_code": "95433",
          "distance": 41.173,
          "city": "El Verano",
          "state": "CA"
      },
      {
          "zip_code": "94581",
          "distance": 31.834,
          "city": "Napa",
          "state": "CA"
      },
      {
          "zip_code": "95416",
          "distance": 40.575,
          "city": "Boyes Hot Springs",
          "state": "CA"
      },
      {
          "zip_code": "95696",
          "distance": 18.115,
          "city": "Vacaville",
          "state": "CA"
      },
      {
          "zip_code": "95638",
          "distance": 40.109,
          "city": "Herald",
          "state": "CA"
      },
      {
          "zip_code": "95615",
          "distance": 20.941,
          "city": "Courtland",
          "state": "CA"
      },
      {
          "zip_code": "94975",
          "distance": 48.339,
          "city": "Petaluma",
          "state": "CA"
      },
      {
          "zip_code": "94999",
          "distance": 48.339,
          "city": "Petaluma",
          "state": "CA"
      },
      {
          "zip_code": "94951",
          "distance": 48.641,
          "city": "Penngrove",
          "state": "CA"
      },
      {
          "zip_code": "95640",
          "distance": 48.247,
          "city": "Ione",
          "state": "CA"
      },
      {
          "zip_code": "95687",
          "distance": 16.639,
          "city": "Vacaville",
          "state": "CA"
      },
      {
          "zip_code": "95757",
          "distance": 24.576,
          "city": "Elk Grove",
          "state": "CA"
      },
      {
          "zip_code": "95431",
          "distance": 41.425,
          "city": "Eldridge",
          "state": "CA"
      },
      {
          "zip_code": "95625",
          "distance": 14.872,
          "city": "Elmira",
          "state": "CA"
      },
      {
          "zip_code": "95442",
          "distance": 39.366,
          "city": "Glen Ellen",
          "state": "CA"
      },
      {
          "zip_code": "95612",
          "distance": 16.672,
          "city": "Clarksburg",
          "state": "CA"
      },
      {
          "zip_code": "95639",
          "distance": 19.781,
          "city": "Hood",
          "state": "CA"
      },
      {
          "zip_code": "95693",
          "distance": 33.55,
          "city": "Wilton",
          "state": "CA"
      },
      {
          "zip_code": "95759",
          "distance": 25.484,
          "city": "Elk Grove",
          "state": "CA"
      },
      {
          "zip_code": "95688",
          "distance": 15.772,
          "city": "Vacaville",
          "state": "CA"
      },
      {
          "zip_code": "94599",
          "distance": 32.052,
          "city": "Yountville",
          "state": "CA"
      },
      {
          "zip_code": "95620",
          "distance": 10.036,
          "city": "Dixon",
          "state": "CA"
      },
      {
          "zip_code": "94562",
          "distance": 33.831,
          "city": "Oakville",
          "state": "CA"
      },
      {
          "zip_code": "95452",
          "distance": 40.826,
          "city": "Kenwood",
          "state": "CA"
      },
      {
          "zip_code": "95624",
          "distance": 27.576,
          "city": "Elk Grove",
          "state": "CA"
      },
      {
          "zip_code": "95758",
          "distance": 21.017,
          "city": "Elk Grove",
          "state": "CA"
      },
      {
          "zip_code": "95405",
          "distance": 47.631,
          "city": "Santa Rosa",
          "state": "CA"
      },
      {
          "zip_code": "94558",
          "distance": 25.025,
          "city": "Napa",
          "state": "CA"
      },
      {
          "zip_code": "95832",
          "distance": 17.925,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94573",
          "distance": 34.737,
          "city": "Rutherford",
          "state": "CA"
      },
      {
          "zip_code": "95409",
          "distance": 42.722,
          "city": "Santa Rosa",
          "state": "CA"
      },
      {
          "zip_code": "95402",
          "distance": 43.724,
          "city": "Santa Rosa",
          "state": "CA"
      },
      {
          "zip_code": "94205",
          "distance": 20.215,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94230",
          "distance": 20.215,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94283",
          "distance": 20.215,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95823",
          "distance": 19.956,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95669",
          "distance": 48.849,
          "city": "Plymouth",
          "state": "CA"
      },
      {
          "zip_code": "95828",
          "distance": 22.207,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95829",
          "distance": 26.061,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94206",
          "distance": 19.346,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95830",
          "distance": 28.128,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95831",
          "distance": 15.14,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95813",
          "distance": 21.329,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95683",
          "distance": 38.047,
          "city": "Sloughhouse",
          "state": "CA"
      },
      {
          "zip_code": "95822",
          "distance": 16.721,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95824",
          "distance": 19.488,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95404",
          "distance": 48.251,
          "city": "Santa Rosa",
          "state": "CA"
      },
      {
          "zip_code": "95799",
          "distance": 13.511,
          "city": "West Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95820",
          "distance": 19.181,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95617",
          "distance": 4.354,
          "city": "Davis",
          "state": "CA"
      },
      {
          "zip_code": "94574",
          "distance": 33.602,
          "city": "Saint Helena",
          "state": "CA"
      },
      {
          "zip_code": "95618",
          "distance": 6.361,
          "city": "Davis",
          "state": "CA"
      },
      {
          "zip_code": "95826",
          "distance": 22.737,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95655",
          "distance": 28.083,
          "city": "Mather",
          "state": "CA"
      },
      {
          "zip_code": "94576",
          "distance": 36.657,
          "city": "Deer Park",
          "state": "CA"
      },
      {
          "zip_code": "94232",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94239",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94259",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94269",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94284",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94285",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94286",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94290",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94291",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94293",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94294",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94297",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95894",
          "distance": 16.659,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95817",
          "distance": 18.484,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95616",
          "distance": 0,
          "city": "Davis",
          "state": "CA"
      },
      {
          "zip_code": "95818",
          "distance": 16.284,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95827",
          "distance": 25.603,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94299",
          "distance": 18.27,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95694",
          "distance": 15.233,
          "city": "Winters",
          "state": "CA"
      },
      {
          "zip_code": "95819",
          "distance": 19.378,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95798",
          "distance": 12.924,
          "city": "West Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95899",
          "distance": 15.084,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94296",
          "distance": 16.165,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94249",
          "distance": 18.296,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94278",
          "distance": 18.296,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95816",
          "distance": 17.963,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94508",
          "distance": 34.949,
          "city": "Angwin",
          "state": "CA"
      },
      {
          "zip_code": "95742",
          "distance": 32.264,
          "city": "Rancho Cordova",
          "state": "CA"
      },
      {
          "zip_code": "94203",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94207",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94208",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94209",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94211",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94229",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94234",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94235",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94236",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94237",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94240",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94244",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94245",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94246",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94247",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94248",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94250",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94252",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94254",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94256",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94257",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94258",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94261",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94262",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94263",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94267",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94268",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94271",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94273",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94274",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94277",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94279",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94280",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94282",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94287",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94288",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94289",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94295",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94298",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95812",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95840",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95867",
          "distance": 16.748,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95741",
          "distance": 26.988,
          "city": "Rancho Cordova",
          "state": "CA"
      },
      {
          "zip_code": "95814",
          "distance": 16.445,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95811",
          "distance": 17.419,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95864",
          "distance": 22.905,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95865",
          "distance": 21.653,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95866",
          "distance": 21.653,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95825",
          "distance": 21.208,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95605",
          "distance": 14.221,
          "city": "West Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94204",
          "distance": 19.601,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95851",
          "distance": 19.601,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95852",
          "distance": 19.601,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95853",
          "distance": 19.601,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95670",
          "distance": 28.19,
          "city": "Rancho Cordova",
          "state": "CA"
      },
      {
          "zip_code": "95815",
          "distance": 19.268,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95860",
          "distance": 22.918,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95887",
          "distance": 23.987,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95682",
          "distance": 45.204,
          "city": "Shingle Springs",
          "state": "CA"
      },
      {
          "zip_code": "95833",
          "distance": 15.813,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95609",
          "distance": 26.236,
          "city": "Carmichael",
          "state": "CA"
      },
      {
          "zip_code": "95608",
          "distance": 26.013,
          "city": "Carmichael",
          "state": "CA"
      },
      {
          "zip_code": "95821",
          "distance": 22.851,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95691",
          "distance": 12.195,
          "city": "West Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "94515",
          "distance": 44.472,
          "city": "Calistoga",
          "state": "CA"
      },
      {
          "zip_code": "95834",
          "distance": 16.105,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95838",
          "distance": 20.081,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95628",
          "distance": 30.129,
          "city": "Fair Oaks",
          "state": "CA"
      },
      {
          "zip_code": "95841",
          "distance": 25.429,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95652",
          "distance": 22.718,
          "city": "Mcclellan",
          "state": "CA"
      },
      {
          "zip_code": "95630",
          "distance": 36.291,
          "city": "Folsom",
          "state": "CA"
      },
      {
          "zip_code": "95763",
          "distance": 34.835,
          "city": "Folsom",
          "state": "CA"
      },
      {
          "zip_code": "95671",
          "distance": 36.433,
          "city": "Represa",
          "state": "CA"
      },
      {
          "zip_code": "95835",
          "distance": 16.753,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95660",
          "distance": 24.161,
          "city": "North Highlands",
          "state": "CA"
      },
      {
          "zip_code": "95762",
          "distance": 40.671,
          "city": "El Dorado Hills",
          "state": "CA"
      },
      {
          "zip_code": "95842",
          "distance": 25.923,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95695",
          "distance": 9.718,
          "city": "Woodland",
          "state": "CA"
      },
      {
          "zip_code": "95662",
          "distance": 32.661,
          "city": "Orangevale",
          "state": "CA"
      },
      {
          "zip_code": "95673",
          "distance": 20.553,
          "city": "Rio Linda",
          "state": "CA"
      },
      {
          "zip_code": "95837",
          "distance": 14.454,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95610",
          "distance": 30.041,
          "city": "Citrus Heights",
          "state": "CA"
      },
      {
          "zip_code": "95621",
          "distance": 28.194,
          "city": "Citrus Heights",
          "state": "CA"
      },
      {
          "zip_code": "95653",
          "distance": 13.855,
          "city": "Madison",
          "state": "CA"
      },
      {
          "zip_code": "95776",
          "distance": 11.316,
          "city": "Woodland",
          "state": "CA"
      },
      {
          "zip_code": "95611",
          "distance": 29.718,
          "city": "Citrus Heights",
          "state": "CA"
      },
      {
          "zip_code": "94567",
          "distance": 33.849,
          "city": "Pope Valley",
          "state": "CA"
      },
      {
          "zip_code": "95836",
          "distance": 17.62,
          "city": "Sacramento",
          "state": "CA"
      },
      {
          "zip_code": "95843",
          "distance": 25.982,
          "city": "Antelope",
          "state": "CA"
      },
      {
          "zip_code": "95672",
          "distance": 45.721,
          "city": "Rescue",
          "state": "CA"
      },
      {
          "zip_code": "95697",
          "distance": 12.329,
          "city": "Yolo",
          "state": "CA"
      },
      {
          "zip_code": "95626",
          "distance": 21.676,
          "city": "Elverta",
          "state": "CA"
      },
      {
          "zip_code": "95627",
          "distance": 17.47,
          "city": "Esparto",
          "state": "CA"
      },
      {
          "zip_code": "95661",
          "distance": 32.398,
          "city": "Roseville",
          "state": "CA"
      },
      {
          "zip_code": "95746",
          "distance": 35.935,
          "city": "Granite Bay",
          "state": "CA"
      },
      {
          "zip_code": "95461",
          "distance": 43.201,
          "city": "Middletown",
          "state": "CA"
      },
      {
          "zip_code": "95606",
          "distance": 25.565,
          "city": "Brooks",
          "state": "CA"
      },
      {
          "zip_code": "95678",
          "distance": 31.128,
          "city": "Roseville",
          "state": "CA"
      },
      {
          "zip_code": "95747",
          "distance": 27.821,
          "city": "Roseville",
          "state": "CA"
      },
      {
          "zip_code": "95677",
          "distance": 34.511,
          "city": "Rocklin",
          "state": "CA"
      },
      {
          "zip_code": "95664",
          "distance": 44.423,
          "city": "Pilot Hill",
          "state": "CA"
      },
      {
          "zip_code": "95467",
          "distance": 43.701,
          "city": "Hidden Valley Lake",
          "state": "CA"
      },
      {
          "zip_code": "95650",
          "distance": 38.125,
          "city": "Loomis",
          "state": "CA"
      },
      {
          "zip_code": "95765",
          "distance": 33.265,
          "city": "Rocklin",
          "state": "CA"
      },
      {
          "zip_code": "95698",
          "distance": 19.101,
          "city": "Zamora",
          "state": "CA"
      },
      {
          "zip_code": "95607",
          "distance": 26.057,
          "city": "Capay",
          "state": "CA"
      },
      {
          "zip_code": "95668",
          "distance": 25.194,
          "city": "Pleasant Grove",
          "state": "CA"
      },
      {
          "zip_code": "95637",
          "distance": 30.566,
          "city": "Guinda",
          "state": "CA"
      },
      {
          "zip_code": "95659",
          "distance": 23.348,
          "city": "Nicolaus",
          "state": "CA"
      },
      {
          "zip_code": "95663",
          "distance": 39.209,
          "city": "Penryn",
          "state": "CA"
      },
      {
          "zip_code": "95658",
          "distance": 40.753,
          "city": "Newcastle",
          "state": "CA"
      },
      {
          "zip_code": "95457",
          "distance": 45.652,
          "city": "Lower Lake",
          "state": "CA"
      },
      {
          "zip_code": "95645",
          "distance": 22.874,
          "city": "Knights Landing",
          "state": "CA"
      },
      {
          "zip_code": "95937",
          "distance": 25.303,
          "city": "Dunnigan",
          "state": "CA"
      },
      {
          "zip_code": "95679",
          "distance": 37.95,
          "city": "Rumsey",
          "state": "CA"
      },
      {
          "zip_code": "95604",
          "distance": 46.403,
          "city": "Auburn",
          "state": "CA"
      },
      {
          "zip_code": "95603",
          "distance": 46.062,
          "city": "Auburn",
          "state": "CA"
      },
      {
          "zip_code": "95648",
          "distance": 36.552,
          "city": "Lincoln",
          "state": "CA"
      },
      {
          "zip_code": "95676",
          "distance": 26.844,
          "city": "Robbins",
          "state": "CA"
      },
      {
          "zip_code": "95674",
          "distance": 32.468,
          "city": "Rio Oso",
          "state": "CA"
      },
      {
          "zip_code": "95602",
          "distance": 47.567,
          "city": "Auburn",
          "state": "CA"
      },
      {
          "zip_code": "95991",
          "distance": 32.314,
          "city": "Yuba City",
          "state": "CA"
      },
      {
          "zip_code": "95681",
          "distance": 38.778,
          "city": "Sheridan",
          "state": "CA"
      },
      {
          "zip_code": "95912",
          "distance": 34.982,
          "city": "Arbuckle",
          "state": "CA"
      },
      {
          "zip_code": "95992",
          "distance": 33.748,
          "city": "Yuba City",
          "state": "CA"
      },
      {
          "zip_code": "95961",
          "distance": 35.948,
          "city": "Olivehurst",
          "state": "CA"
      },
      {
          "zip_code": "95692",
          "distance": 39.732,
          "city": "Wheatland",
          "state": "CA"
      },
      {
          "zip_code": "95950",
          "distance": 34.417,
          "city": "Grimes",
          "state": "CA"
      },
      {
          "zip_code": "95957",
          "distance": 35.051,
          "city": "Meridian",
          "state": "CA"
      },
      {
          "zip_code": "95993",
          "distance": 37.053,
          "city": "Yuba City",
          "state": "CA"
      },
      {
          "zip_code": "95987",
          "distance": 46.149,
          "city": "Williams",
          "state": "CA"
      },
      {
          "zip_code": "95903",
          "distance": 44.617,
          "city": "Beale Afb",
          "state": "CA"
      },
      {
          "zip_code": "95982",
          "distance": 42.741,
          "city": "Sutter",
          "state": "CA"
      },
      {
          "zip_code": "95953",
          "distance": 48.714,
          "city": "Live Oak",
          "state": "CA"
      }
  ],
  "SMASH UC Berkeley": [
        {
            "zip_code": "95006",
            "distance": 48.885,
            "city": "Boulder Creek",
            "state": "CA"
        },
        {
            "zip_code": "95032",
            "distance": 48.821,
            "city": "Los Gatos",
            "state": "CA"
        },
        {
            "zip_code": "95030",
            "distance": 47.38,
            "city": "Los Gatos",
            "state": "CA"
        },
        {
            "zip_code": "95036",
            "distance": 46.487,
            "city": "Milpitas",
            "state": "CA"
        },
        {
            "zip_code": "95153",
            "distance": 49.335,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95193",
            "distance": 49.598,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95123",
            "distance": 49.295,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94060",
            "distance": 43.313,
            "city": "Pescadero",
            "state": "CA"
        },
        {
            "zip_code": "95071",
            "distance": 44.824,
            "city": "Saratoga",
            "state": "CA"
        },
        {
            "zip_code": "95118",
            "distance": 47.168,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95124",
            "distance": 46.358,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95154",
            "distance": 46.427,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95158",
            "distance": 47.363,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95070",
            "distance": 43.891,
            "city": "Saratoga",
            "state": "CA"
        },
        {
            "zip_code": "95136",
            "distance": 47.275,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94021",
            "distance": 41.686,
            "city": "Loma Mar",
            "state": "CA"
        },
        {
            "zip_code": "94020",
            "distance": 41.419,
            "city": "La Honda",
            "state": "CA"
        },
        {
            "zip_code": "95130",
            "distance": 43.778,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95008",
            "distance": 44.243,
            "city": "Campbell",
            "state": "CA"
        },
        {
            "zip_code": "95009",
            "distance": 44.51,
            "city": "Campbell",
            "state": "CA"
        },
        {
            "zip_code": "95111",
            "distance": 47.08,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95011",
            "distance": 43.656,
            "city": "Campbell",
            "state": "CA"
        },
        {
            "zip_code": "95150",
            "distance": 44.542,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95151",
            "distance": 47.997,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95125",
            "distance": 44.661,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95157",
            "distance": 42.602,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95115",
            "distance": 44.398,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95121",
            "distance": 46.297,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95129",
            "distance": 41.638,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95014",
            "distance": 40.343,
            "city": "Cupertino",
            "state": "CA"
        },
        {
            "zip_code": "95170",
            "distance": 41.383,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95159",
            "distance": 42.826,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95155",
            "distance": 43.529,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95117",
            "distance": 42.05,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95128",
            "distance": 42.304,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95015",
            "distance": 39.879,
            "city": "Cupertino",
            "state": "CA"
        },
        {
            "zip_code": "95191",
            "distance": 42.671,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95126",
            "distance": 42.085,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95122",
            "distance": 44.113,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95108",
            "distance": 38.775,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95055",
            "distance": 40.48,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95103",
            "distance": 42.558,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95106",
            "distance": 42.558,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95109",
            "distance": 42.558,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95173",
            "distance": 42.558,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95196",
            "distance": 42.558,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95172",
            "distance": 42.811,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94074",
            "distance": 37.756,
            "city": "San Gregorio",
            "state": "CA"
        },
        {
            "zip_code": "95113",
            "distance": 42.301,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95148",
            "distance": 45.425,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95192",
            "distance": 41.947,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95194",
            "distance": 42.203,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95112",
            "distance": 41.841,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95110",
            "distance": 41.033,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95051",
            "distance": 39.189,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95053",
            "distance": 40.227,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95052",
            "distance": 39.851,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95156",
            "distance": 42.723,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95116",
            "distance": 42.337,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95050",
            "distance": 39.727,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "94087",
            "distance": 38.004,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "94024",
            "distance": 37.095,
            "city": "Los Altos",
            "state": "CA"
        },
        {
            "zip_code": "94022",
            "distance": 36.186,
            "city": "Los Altos",
            "state": "CA"
        },
        {
            "zip_code": "94023",
            "distance": 35.702,
            "city": "Los Altos",
            "state": "CA"
        },
        {
            "zip_code": "95190",
            "distance": 39.855,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95127",
            "distance": 42.717,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94086",
            "distance": 36.939,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "95133",
            "distance": 40.858,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94304",
            "distance": 34.718,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94028",
            "distance": 34.428,
            "city": "Portola Valley",
            "state": "CA"
        },
        {
            "zip_code": "95101",
            "distance": 39.536,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95161",
            "distance": 39.536,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94040",
            "distance": 35.322,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "95131",
            "distance": 38.906,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94041",
            "distance": 34.937,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "94085",
            "distance": 35.955,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "94039",
            "distance": 34.928,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "94088",
            "distance": 35.615,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "95164",
            "distance": 38.114,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95054",
            "distance": 36.796,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95140",
            "distance": 48.041,
            "city": "Mount Hamilton",
            "state": "CA"
        },
        {
            "zip_code": "94042",
            "distance": 34.107,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "95056",
            "distance": 36.503,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "94309",
            "distance": 32.466,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94035",
            "distance": 33.954,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "95152",
            "distance": 39.913,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94089",
            "distance": 34.467,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "94062",
            "distance": 31.871,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94043",
            "distance": 33.325,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "94306",
            "distance": 32.373,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94305",
            "distance": 31.812,
            "city": "Stanford",
            "state": "CA"
        },
        {
            "zip_code": "95132",
            "distance": 41.608,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95134",
            "distance": 35.095,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95002",
            "distance": 32.885,
            "city": "Alviso",
            "state": "CA"
        },
        {
            "zip_code": "94302",
            "distance": 30.519,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94301",
            "distance": 30.239,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "95035",
            "distance": 36.425,
            "city": "Milpitas",
            "state": "CA"
        },
        {
            "zip_code": "94027",
            "distance": 29.169,
            "city": "Atherton",
            "state": "CA"
        },
        {
            "zip_code": "94025",
            "distance": 29.083,
            "city": "Menlo Park",
            "state": "CA"
        },
        {
            "zip_code": "94303",
            "distance": 29.74,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94064",
            "distance": 28.595,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94061",
            "distance": 28.532,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94019",
            "distance": 29.23,
            "city": "Half Moon Bay",
            "state": "CA"
        },
        {
            "zip_code": "94026",
            "distance": 28.202,
            "city": "Menlo Park",
            "state": "CA"
        },
        {
            "zip_code": "94063",
            "distance": 26.495,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94070",
            "distance": 26.09,
            "city": "San Carlos",
            "state": "CA"
        },
        {
            "zip_code": "94018",
            "distance": 28.377,
            "city": "El Granada",
            "state": "CA"
        },
        {
            "zip_code": "94538",
            "distance": 30.458,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94560",
            "distance": 28.252,
            "city": "Newark",
            "state": "CA"
        },
        {
            "zip_code": "94002",
            "distance": 24.954,
            "city": "Belmont",
            "state": "CA"
        },
        {
            "zip_code": "94539",
            "distance": 30.986,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94550",
            "distance": 44.473,
            "city": "Livermore",
            "state": "CA"
        },
        {
            "zip_code": "94402",
            "distance": 24.694,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94038",
            "distance": 27.792,
            "city": "Moss Beach",
            "state": "CA"
        },
        {
            "zip_code": "94065",
            "distance": 23.475,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94403",
            "distance": 23.334,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94555",
            "distance": 24.067,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94537",
            "distance": 26.067,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94037",
            "distance": 25.731,
            "city": "Montara",
            "state": "CA"
        },
        {
            "zip_code": "94404",
            "distance": 21.97,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94497",
            "distance": 21.974,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94011",
            "distance": 21.506,
            "city": "Burlingame",
            "state": "CA"
        },
        {
            "zip_code": "94010",
            "distance": 21.836,
            "city": "Burlingame",
            "state": "CA"
        },
        {
            "zip_code": "94536",
            "distance": 25.754,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94586",
            "distance": 30.159,
            "city": "Sunol",
            "state": "CA"
        },
        {
            "zip_code": "94401",
            "distance": 20.791,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94030",
            "distance": 20.625,
            "city": "Millbrae",
            "state": "CA"
        },
        {
            "zip_code": "94587",
            "distance": 22.718,
            "city": "Union City",
            "state": "CA"
        },
        {
            "zip_code": "94545",
            "distance": 19.784,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94044",
            "distance": 22.101,
            "city": "Pacifica",
            "state": "CA"
        },
        {
            "zip_code": "94557",
            "distance": 19.467,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94066",
            "distance": 19.766,
            "city": "San Bruno",
            "state": "CA"
        },
        {
            "zip_code": "94128",
            "distance": 18.524,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94544",
            "distance": 19.789,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94083",
            "distance": 18.247,
            "city": "South San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94566",
            "distance": 27.072,
            "city": "Pleasanton",
            "state": "CA"
        },
        {
            "zip_code": "94540",
            "distance": 17.901,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94080",
            "distance": 17.639,
            "city": "South San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94542",
            "distance": 18.971,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94543",
            "distance": 17.011,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "95304",
            "distance": 48.413,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94541",
            "distance": 16.648,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "95377",
            "distance": 42.575,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94580",
            "distance": 15.222,
            "city": "San Lorenzo",
            "state": "CA"
        },
        {
            "zip_code": "94015",
            "distance": 18.139,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94579",
            "distance": 13.995,
            "city": "San Leandro",
            "state": "CA"
        },
        {
            "zip_code": "94005",
            "distance": 15.305,
            "city": "Brisbane",
            "state": "CA"
        },
        {
            "zip_code": "94017",
            "distance": 17.29,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94014",
            "distance": 16.441,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94013",
            "distance": 16.065,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94016",
            "distance": 16.065,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94578",
            "distance": 13.557,
            "city": "San Leandro",
            "state": "CA"
        },
        {
            "zip_code": "94160",
            "distance": 13.811,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94577",
            "distance": 12.081,
            "city": "San Leandro",
            "state": "CA"
        },
        {
            "zip_code": "94568",
            "distance": 21.572,
            "city": "Dublin",
            "state": "CA"
        },
        {
            "zip_code": "94546",
            "distance": 14.361,
            "city": "Castro Valley",
            "state": "CA"
        },
        {
            "zip_code": "94614",
            "distance": 11.045,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94112",
            "distance": 14.753,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94134",
            "distance": 13.655,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94132",
            "distance": 16.318,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94552",
            "distance": 16.464,
            "city": "Castro Valley",
            "state": "CA"
        },
        {
            "zip_code": "94124",
            "distance": 12.205,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94125",
            "distance": 12.051,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94127",
            "distance": 14.667,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94603",
            "distance": 10.345,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "95376",
            "distance": 45.835,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94502",
            "distance": 9.427,
            "city": "Alameda",
            "state": "CA"
        },
        {
            "zip_code": "94188",
            "distance": 11.49,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94622",
            "distance": 9.9,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94624",
            "distance": 10.341,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94116",
            "distance": 15.441,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94131",
            "distance": 13.492,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94621",
            "distance": 8.916,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94146",
            "distance": 12.837,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94110",
            "distance": 12.242,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94140",
            "distance": 12.043,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94617",
            "distance": 10.598,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94551",
            "distance": 28.902,
            "city": "Livermore",
            "state": "CA"
        },
        {
            "zip_code": "94583",
            "distance": 17.437,
            "city": "San Ramon",
            "state": "CA"
        },
        {
            "zip_code": "94114",
            "distance": 12.691,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94122",
            "distance": 14.874,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94172",
            "distance": 14.592,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94143",
            "distance": 13.252,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94141",
            "distance": 11.563,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94107",
            "distance": 11.135,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94605",
            "distance": 9.648,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94582",
            "distance": 20.057,
            "city": "San Ramon",
            "state": "CA"
        },
        {
            "zip_code": "94158",
            "distance": 10.251,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "95391",
            "distance": 35.96,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94117",
            "distance": 12.745,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94101",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94106",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94135",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94136",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94150",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94152",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94153",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94154",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94155",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94171",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94175",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94199",
            "distance": 11.103,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94620",
            "distance": 7.577,
            "city": "Piedmont",
            "state": "CA"
        },
        {
            "zip_code": "94103",
            "distance": 11.012,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94501",
            "distance": 7.03,
            "city": "Alameda",
            "state": "CA"
        },
        {
            "zip_code": "94601",
            "distance": 7.069,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94121",
            "distance": 14.718,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94102",
            "distance": 11.088,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94144",
            "distance": 12.937,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94119",
            "distance": 12.48,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94159",
            "distance": 12.48,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94164",
            "distance": 11.097,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94142",
            "distance": 10.671,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94156",
            "distance": 10.229,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94162",
            "distance": 10.229,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94163",
            "distance": 10.229,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94118",
            "distance": 13.068,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94613",
            "distance": 7.537,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94115",
            "distance": 11.649,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94105",
            "distance": 9.533,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94120",
            "distance": 9.804,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94137",
            "distance": 9.804,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94138",
            "distance": 9.804,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94139",
            "distance": 9.804,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94145",
            "distance": 9.804,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94161",
            "distance": 9.804,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94126",
            "distance": 9.381,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94151",
            "distance": 9.381,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94177",
            "distance": 9.381,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94660",
            "distance": 5.848,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94619",
            "distance": 8.479,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94104",
            "distance": 9.848,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94606",
            "distance": 5.686,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94108",
            "distance": 10.108,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94588",
            "distance": 22.23,
            "city": "Pleasanton",
            "state": "CA"
        },
        {
            "zip_code": "94109",
            "distance": 10.617,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94129",
            "distance": 12.604,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94111",
            "distance": 9.385,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94147",
            "distance": 10.843,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94625",
            "distance": 5.92,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94615",
            "distance": 5.448,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94623",
            "distance": 5.448,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94604",
            "distance": 5.111,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94649",
            "distance": 5.111,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94666",
            "distance": 5.111,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "95378",
            "distance": 38.793,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94123",
            "distance": 11.201,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94602",
            "distance": 5.458,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94133",
            "distance": 9.758,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94607",
            "distance": 5.255,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94612",
            "distance": 4.561,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94506",
            "distance": 19.153,
            "city": "Danville",
            "state": "CA"
        },
        {
            "zip_code": "94659",
            "distance": 4.419,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94610",
            "distance": 4.366,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94526",
            "distance": 14.982,
            "city": "Danville",
            "state": "CA"
        },
        {
            "zip_code": "94661",
            "distance": 4.777,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94130",
            "distance": 7.252,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94514",
            "distance": 34.665,
            "city": "Byron",
            "state": "CA"
        },
        {
            "zip_code": "94611",
            "distance": 4.166,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94516",
            "distance": 5.63,
            "city": "Canyon",
            "state": "CA"
        },
        {
            "zip_code": "94609",
            "distance": 2.775,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94608",
            "distance": 3.168,
            "city": "Emeryville",
            "state": "CA"
        },
        {
            "zip_code": "94662",
            "distance": 3.015,
            "city": "Emeryville",
            "state": "CA"
        },
        {
            "zip_code": "94556",
            "distance": 7.963,
            "city": "Moraga",
            "state": "CA"
        },
        {
            "zip_code": "94575",
            "distance": 8.257,
            "city": "Moraga",
            "state": "CA"
        },
        {
            "zip_code": "94618",
            "distance": 2.209,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94528",
            "distance": 16.711,
            "city": "Diablo",
            "state": "CA"
        },
        {
            "zip_code": "94507",
            "distance": 12.854,
            "city": "Alamo",
            "state": "CA"
        },
        {
            "zip_code": "94965",
            "distance": 16.005,
            "city": "Sausalito",
            "state": "CA"
        },
        {
            "zip_code": "94966",
            "distance": 12.849,
            "city": "Sausalito",
            "state": "CA"
        },
        {
            "zip_code": "94701",
            "distance": 1.254,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94712",
            "distance": 0.995,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94710",
            "distance": 2.895,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94703",
            "distance": 1.317,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94705",
            "distance": 1.086,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94702",
            "distance": 1.807,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94704",
            "distance": 0.537,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94529",
            "distance": 11.721,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94505",
            "distance": 35.874,
            "city": "Discovery Bay",
            "state": "CA"
        },
        {
            "zip_code": "94595",
            "distance": 10.125,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "94720",
            "distance": 0,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94709",
            "distance": 0.754,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94563",
            "distance": 3.866,
            "city": "Orinda",
            "state": "CA"
        },
        {
            "zip_code": "94920",
            "distance": 11.684,
            "city": "Belvedere Tiburon",
            "state": "CA"
        },
        {
            "zip_code": "94596",
            "distance": 11.889,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "94706",
            "distance": 2.475,
            "city": "Albany",
            "state": "CA"
        },
        {
            "zip_code": "94517",
            "distance": 20.559,
            "city": "Clayton",
            "state": "CA"
        },
        {
            "zip_code": "94549",
            "distance": 7.821,
            "city": "Lafayette",
            "state": "CA"
        },
        {
            "zip_code": "94941",
            "distance": 16.89,
            "city": "Mill Valley",
            "state": "CA"
        },
        {
            "zip_code": "94707",
            "distance": 2.134,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94598",
            "distance": 14.051,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "94942",
            "distance": 14.579,
            "city": "Mill Valley",
            "state": "CA"
        },
        {
            "zip_code": "94850",
            "distance": 3.931,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94708",
            "distance": 2.045,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94970",
            "distance": 21.552,
            "city": "Stinson Beach",
            "state": "CA"
        },
        {
            "zip_code": "94804",
            "distance": 5.566,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94597",
            "distance": 10.456,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "95206",
            "distance": 45.778,
            "city": "Stockton",
            "state": "CA"
        },
        {
            "zip_code": "94976",
            "distance": 14.812,
            "city": "Corte Madera",
            "state": "CA"
        },
        {
            "zip_code": "94807",
            "distance": 6.089,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94530",
            "distance": 4.063,
            "city": "El Cerrito",
            "state": "CA"
        },
        {
            "zip_code": "94513",
            "distance": 32.163,
            "city": "Brentwood",
            "state": "CA"
        },
        {
            "zip_code": "95234",
            "distance": 39.803,
            "city": "Holt",
            "state": "CA"
        },
        {
            "zip_code": "94977",
            "distance": 15.488,
            "city": "Larkspur",
            "state": "CA"
        },
        {
            "zip_code": "94802",
            "distance": 6.476,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94808",
            "distance": 6.059,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94925",
            "distance": 14.347,
            "city": "Corte Madera",
            "state": "CA"
        },
        {
            "zip_code": "94939",
            "distance": 15.737,
            "city": "Larkspur",
            "state": "CA"
        },
        {
            "zip_code": "94914",
            "distance": 15.675,
            "city": "Kentfield",
            "state": "CA"
        },
        {
            "zip_code": "94805",
            "distance": 6.044,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94924",
            "distance": 25.994,
            "city": "Bolinas",
            "state": "CA"
        },
        {
            "zip_code": "94964",
            "distance": 13.793,
            "city": "San Quentin",
            "state": "CA"
        },
        {
            "zip_code": "94930",
            "distance": 20.296,
            "city": "Fairfax",
            "state": "CA"
        },
        {
            "zip_code": "94904",
            "distance": 17.369,
            "city": "Greenbrae",
            "state": "CA"
        },
        {
            "zip_code": "94974",
            "distance": 16.42,
            "city": "San Quentin",
            "state": "CA"
        },
        {
            "zip_code": "94915",
            "distance": 14.366,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "95208",
            "distance": 45.282,
            "city": "Stockton",
            "state": "CA"
        },
        {
            "zip_code": "95213",
            "distance": 45.282,
            "city": "Stockton",
            "state": "CA"
        },
        {
            "zip_code": "94518",
            "distance": 13.739,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94801",
            "distance": 8.825,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94523",
            "distance": 11.214,
            "city": "Pleasant Hill",
            "state": "CA"
        },
        {
            "zip_code": "94521",
            "distance": 17.233,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94803",
            "distance": 6.125,
            "city": "El Sobrante",
            "state": "CA"
        },
        {
            "zip_code": "94957",
            "distance": 17.927,
            "city": "Ross",
            "state": "CA"
        },
        {
            "zip_code": "94531",
            "distance": 26.87,
            "city": "Antioch",
            "state": "CA"
        },
        {
            "zip_code": "94979",
            "distance": 17.922,
            "city": "San Anselmo",
            "state": "CA"
        },
        {
            "zip_code": "94912",
            "distance": 14.926,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94820",
            "distance": 6.911,
            "city": "El Sobrante",
            "state": "CA"
        },
        {
            "zip_code": "94524",
            "distance": 13.004,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94527",
            "distance": 13.004,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94548",
            "distance": 33.607,
            "city": "Knightsen",
            "state": "CA"
        },
        {
            "zip_code": "94901",
            "distance": 15.076,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94978",
            "distance": 19.165,
            "city": "Fairfax",
            "state": "CA"
        },
        {
            "zip_code": "94806",
            "distance": 8.651,
            "city": "San Pablo",
            "state": "CA"
        },
        {
            "zip_code": "94519",
            "distance": 15.375,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94553",
            "distance": 10.514,
            "city": "Martinez",
            "state": "CA"
        },
        {
            "zip_code": "94561",
            "distance": 31.825,
            "city": "Oakley",
            "state": "CA"
        },
        {
            "zip_code": "94564",
            "distance": 8.439,
            "city": "Pinole",
            "state": "CA"
        },
        {
            "zip_code": "94520",
            "distance": 14.381,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94960",
            "distance": 19.525,
            "city": "San Anselmo",
            "state": "CA"
        },
        {
            "zip_code": "94509",
            "distance": 25.551,
            "city": "Antioch",
            "state": "CA"
        },
        {
            "zip_code": "94522",
            "distance": 15.886,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94547",
            "distance": 9.429,
            "city": "Hercules",
            "state": "CA"
        },
        {
            "zip_code": "94933",
            "distance": 25.446,
            "city": "Forest Knolls",
            "state": "CA"
        },
        {
            "zip_code": "94973",
            "distance": 23.042,
            "city": "Woodacre",
            "state": "CA"
        },
        {
            "zip_code": "94963",
            "distance": 24.612,
            "city": "San Geronimo",
            "state": "CA"
        },
        {
            "zip_code": "94565",
            "distance": 21.328,
            "city": "Pittsburg",
            "state": "CA"
        },
        {
            "zip_code": "94913",
            "distance": 18.539,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94903",
            "distance": 19.336,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94950",
            "distance": 29.445,
            "city": "Olema",
            "state": "CA"
        },
        {
            "zip_code": "94511",
            "distance": 35.138,
            "city": "Bethel Island",
            "state": "CA"
        },
        {
            "zip_code": "94938",
            "distance": 27.839,
            "city": "Lagunitas",
            "state": "CA"
        },
        {
            "zip_code": "94572",
            "distance": 10.983,
            "city": "Rodeo",
            "state": "CA"
        },
        {
            "zip_code": "94569",
            "distance": 12.168,
            "city": "Port Costa",
            "state": "CA"
        },
        {
            "zip_code": "94956",
            "distance": 35.096,
            "city": "Point Reyes Station",
            "state": "CA"
        },
        {
            "zip_code": "95219",
            "distance": 43.801,
            "city": "Stockton",
            "state": "CA"
        },
        {
            "zip_code": "94525",
            "distance": 12.438,
            "city": "Crockett",
            "state": "CA"
        },
        {
            "zip_code": "94949",
            "distance": 18.908,
            "city": "Novato",
            "state": "CA"
        },
        {
            "zip_code": "94946",
            "distance": 26.893,
            "city": "Nicasio",
            "state": "CA"
        },
        {
            "zip_code": "94592",
            "distance": 14.966,
            "city": "Vallejo",
            "state": "CA"
        },
        {
            "zip_code": "94510",
            "distance": 16.799,
            "city": "Benicia",
            "state": "CA"
        },
        {
            "zip_code": "94998",
            "distance": 23.208,
            "city": "Novato",
            "state": "CA"
        },
        {
            "zip_code": "94590",
            "distance": 15.854,
            "city": "Vallejo",
            "state": "CA"
        },
        {
            "zip_code": "94570",
            "distance": 17.678,
            "city": "Moraga",
            "state": "CA"
        },
        {
            "zip_code": "94947",
            "distance": 26.415,
            "city": "Novato",
            "state": "CA"
        },
        {
            "zip_code": "94937",
            "distance": 40.422,
            "city": "Inverness",
            "state": "CA"
        },
        {
            "zip_code": "94591",
            "distance": 17.495,
            "city": "Vallejo",
            "state": "CA"
        },
        {
            "zip_code": "94948",
            "distance": 24.284,
            "city": "Novato",
            "state": "CA"
        },
        {
            "zip_code": "94945",
            "distance": 23.299,
            "city": "Novato",
            "state": "CA"
        },
        {
            "zip_code": "94512",
            "distance": 29.147,
            "city": "Birds Landing",
            "state": "CA"
        },
        {
            "zip_code": "95641",
            "distance": 40.628,
            "city": "Isleton",
            "state": "CA"
        },
        {
            "zip_code": "94571",
            "distance": 33.975,
            "city": "Rio Vista",
            "state": "CA"
        },
        {
            "zip_code": "95686",
            "distance": 44.538,
            "city": "Thornton",
            "state": "CA"
        },
        {
            "zip_code": "94589",
            "distance": 20.222,
            "city": "Vallejo",
            "state": "CA"
        },
        {
            "zip_code": "94940",
            "distance": 40.17,
            "city": "Marshall",
            "state": "CA"
        },
        {
            "zip_code": "94503",
            "distance": 21.596,
            "city": "American Canyon",
            "state": "CA"
        },
        {
            "zip_code": "94585",
            "distance": 28.316,
            "city": "Suisun City",
            "state": "CA"
        },
        {
            "zip_code": "95690",
            "distance": 41.31,
            "city": "Walnut Grove",
            "state": "CA"
        },
        {
            "zip_code": "94955",
            "distance": 28.808,
            "city": "Petaluma",
            "state": "CA"
        },
        {
            "zip_code": "94971",
            "distance": 44.186,
            "city": "Tomales",
            "state": "CA"
        },
        {
            "zip_code": "94559",
            "distance": 25.005,
            "city": "Napa",
            "state": "CA"
        },
        {
            "zip_code": "94952",
            "distance": 37.11,
            "city": "Petaluma",
            "state": "CA"
        },
        {
            "zip_code": "94954",
            "distance": 29.895,
            "city": "Petaluma",
            "state": "CA"
        },
        {
            "zip_code": "95680",
            "distance": 44.274,
            "city": "Ryde",
            "state": "CA"
        },
        {
            "zip_code": "94534",
            "distance": 26.44,
            "city": "Fairfield",
            "state": "CA"
        },
        {
            "zip_code": "95476",
            "distance": 28.397,
            "city": "Sonoma",
            "state": "CA"
        },
        {
            "zip_code": "95487",
            "distance": 28.079,
            "city": "Vineburg",
            "state": "CA"
        },
        {
            "zip_code": "94929",
            "distance": 46.541,
            "city": "Dillon Beach",
            "state": "CA"
        },
        {
            "zip_code": "94953",
            "distance": 33.596,
            "city": "Petaluma",
            "state": "CA"
        },
        {
            "zip_code": "94533",
            "distance": 31.199,
            "city": "Fairfield",
            "state": "CA"
        },
        {
            "zip_code": "94535",
            "distance": 33.443,
            "city": "Travis Afb",
            "state": "CA"
        },
        {
            "zip_code": "94972",
            "distance": 48.205,
            "city": "Valley Ford",
            "state": "CA"
        },
        {
            "zip_code": "95433",
            "distance": 31.255,
            "city": "El Verano",
            "state": "CA"
        },
        {
            "zip_code": "94581",
            "distance": 28.789,
            "city": "Napa",
            "state": "CA"
        },
        {
            "zip_code": "95416",
            "distance": 32.53,
            "city": "Boyes Hot Springs",
            "state": "CA"
        },
        {
            "zip_code": "95696",
            "distance": 35.205,
            "city": "Vacaville",
            "state": "CA"
        },
        {
            "zip_code": "95615",
            "distance": 48.926,
            "city": "Courtland",
            "state": "CA"
        },
        {
            "zip_code": "94926",
            "distance": 39.195,
            "city": "Rohnert Park",
            "state": "CA"
        },
        {
            "zip_code": "94975",
            "distance": 37.264,
            "city": "Petaluma",
            "state": "CA"
        },
        {
            "zip_code": "94999",
            "distance": 37.264,
            "city": "Petaluma",
            "state": "CA"
        },
        {
            "zip_code": "94951",
            "distance": 37.506,
            "city": "Penngrove",
            "state": "CA"
        },
        {
            "zip_code": "94931",
            "distance": 39.902,
            "city": "Cotati",
            "state": "CA"
        },
        {
            "zip_code": "95687",
            "distance": 36.578,
            "city": "Vacaville",
            "state": "CA"
        },
        {
            "zip_code": "94927",
            "distance": 39.954,
            "city": "Rohnert Park",
            "state": "CA"
        },
        {
            "zip_code": "94922",
            "distance": 49.825,
            "city": "Bodega",
            "state": "CA"
        },
        {
            "zip_code": "94928",
            "distance": 40.458,
            "city": "Rohnert Park",
            "state": "CA"
        },
        {
            "zip_code": "95431",
            "distance": 35.756,
            "city": "Eldridge",
            "state": "CA"
        },
        {
            "zip_code": "95625",
            "distance": 38.309,
            "city": "Elmira",
            "state": "CA"
        },
        {
            "zip_code": "95442",
            "distance": 36.64,
            "city": "Glen Ellen",
            "state": "CA"
        },
        {
            "zip_code": "95407",
            "distance": 44.705,
            "city": "Santa Rosa",
            "state": "CA"
        },
        {
            "zip_code": "95472",
            "distance": 49.042,
            "city": "Sebastopol",
            "state": "CA"
        },
        {
            "zip_code": "95473",
            "distance": 47.583,
            "city": "Sebastopol",
            "state": "CA"
        },
        {
            "zip_code": "95688",
            "distance": 39.039,
            "city": "Vacaville",
            "state": "CA"
        },
        {
            "zip_code": "94599",
            "distance": 37.488,
            "city": "Yountville",
            "state": "CA"
        },
        {
            "zip_code": "95620",
            "distance": 46.039,
            "city": "Dixon",
            "state": "CA"
        },
        {
            "zip_code": "94562",
            "distance": 38.548,
            "city": "Oakville",
            "state": "CA"
        },
        {
            "zip_code": "95452",
            "distance": 41.046,
            "city": "Kenwood",
            "state": "CA"
        },
        {
            "zip_code": "95405",
            "distance": 44.88,
            "city": "Santa Rosa",
            "state": "CA"
        },
        {
            "zip_code": "94558",
            "distance": 39.265,
            "city": "Napa",
            "state": "CA"
        },
        {
            "zip_code": "95401",
            "distance": 49.376,
            "city": "Santa Rosa",
            "state": "CA"
        },
        {
            "zip_code": "95406",
            "distance": 47.155,
            "city": "Santa Rosa",
            "state": "CA"
        },
        {
            "zip_code": "94573",
            "distance": 41.515,
            "city": "Rutherford",
            "state": "CA"
        },
        {
            "zip_code": "95409",
            "distance": 44.763,
            "city": "Santa Rosa",
            "state": "CA"
        },
        {
            "zip_code": "95402",
            "distance": 45.252,
            "city": "Santa Rosa",
            "state": "CA"
        },
        {
            "zip_code": "94574",
            "distance": 47.059,
            "city": "Saint Helena",
            "state": "CA"
        },
        {
            "zip_code": "94576",
            "distance": 48.205,
            "city": "Deer Park",
            "state": "CA"
        },
        {
            "zip_code": "95694",
            "distance": 48.957,
            "city": "Winters",
            "state": "CA"
        },
        {
            "zip_code": "94508",
            "distance": 49.637,
            "city": "Angwin",
            "state": "CA"
        }
    ],
  "SMASH Stanford": [
        {
            "zip_code": "95012",
            "distance": 49.312,
            "city": "Castroville",
            "state": "CA"
        },
        {
            "zip_code": "95039",
            "distance": 46.198,
            "city": "Moss Landing",
            "state": "CA"
        },
        {
            "zip_code": "95004",
            "distance": 47.894,
            "city": "Aromas",
            "state": "CA"
        },
        {
            "zip_code": "95077",
            "distance": 42.065,
            "city": "Watsonville",
            "state": "CA"
        },
        {
            "zip_code": "95019",
            "distance": 39.586,
            "city": "Freedom",
            "state": "CA"
        },
        {
            "zip_code": "95076",
            "distance": 39.794,
            "city": "Watsonville",
            "state": "CA"
        },
        {
            "zip_code": "95067",
            "distance": 31.923,
            "city": "Scotts Valley",
            "state": "CA"
        },
        {
            "zip_code": "95061",
            "distance": 32.064,
            "city": "Santa Cruz",
            "state": "CA"
        },
        {
            "zip_code": "95063",
            "distance": 32.368,
            "city": "Santa Cruz",
            "state": "CA"
        },
        {
            "zip_code": "95001",
            "distance": 34.614,
            "city": "Aptos",
            "state": "CA"
        },
        {
            "zip_code": "95062",
            "distance": 32.542,
            "city": "Santa Cruz",
            "state": "CA"
        },
        {
            "zip_code": "95010",
            "distance": 32.812,
            "city": "Capitola",
            "state": "CA"
        },
        {
            "zip_code": "95064",
            "distance": 30.146,
            "city": "Santa Cruz",
            "state": "CA"
        },
        {
            "zip_code": "95003",
            "distance": 32.667,
            "city": "Aptos",
            "state": "CA"
        },
        {
            "zip_code": "95021",
            "distance": 44.29,
            "city": "Gilroy",
            "state": "CA"
        },
        {
            "zip_code": "95020",
            "distance": 43.749,
            "city": "Gilroy",
            "state": "CA"
        },
        {
            "zip_code": "95065",
            "distance": 28.645,
            "city": "Santa Cruz",
            "state": "CA"
        },
        {
            "zip_code": "95060",
            "distance": 26.517,
            "city": "Santa Cruz",
            "state": "CA"
        },
        {
            "zip_code": "95073",
            "distance": 29.16,
            "city": "Soquel",
            "state": "CA"
        },
        {
            "zip_code": "95041",
            "distance": 26.163,
            "city": "Mount Hermon",
            "state": "CA"
        },
        {
            "zip_code": "95066",
            "distance": 25.691,
            "city": "Scotts Valley",
            "state": "CA"
        },
        {
            "zip_code": "95018",
            "distance": 24.554,
            "city": "Felton",
            "state": "CA"
        },
        {
            "zip_code": "95038",
            "distance": 38.705,
            "city": "Morgan Hill",
            "state": "CA"
        },
        {
            "zip_code": "95005",
            "distance": 22.498,
            "city": "Ben Lomond",
            "state": "CA"
        },
        {
            "zip_code": "95046",
            "distance": 38.374,
            "city": "San Martin",
            "state": "CA"
        },
        {
            "zip_code": "95007",
            "distance": 21.927,
            "city": "Brookdale",
            "state": "CA"
        },
        {
            "zip_code": "95017",
            "distance": 21.317,
            "city": "Davenport",
            "state": "CA"
        },
        {
            "zip_code": "95031",
            "distance": 24.491,
            "city": "Los Gatos",
            "state": "CA"
        },
        {
            "zip_code": "95026",
            "distance": 21.297,
            "city": "Holy City",
            "state": "CA"
        },
        {
            "zip_code": "95044",
            "distance": 21.297,
            "city": "Redwood Estates",
            "state": "CA"
        },
        {
            "zip_code": "95033",
            "distance": 20.538,
            "city": "Los Gatos",
            "state": "CA"
        },
        {
            "zip_code": "95042",
            "distance": 25.802,
            "city": "New Almaden",
            "state": "CA"
        },
        {
            "zip_code": "95141",
            "distance": 28.786,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95006",
            "distance": 17.106,
            "city": "Boulder Creek",
            "state": "CA"
        },
        {
            "zip_code": "95037",
            "distance": 35.672,
            "city": "Morgan Hill",
            "state": "CA"
        },
        {
            "zip_code": "95120",
            "distance": 24.094,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95160",
            "distance": 22.323,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95013",
            "distance": 27.434,
            "city": "Coyote",
            "state": "CA"
        },
        {
            "zip_code": "95032",
            "distance": 19.324,
            "city": "Los Gatos",
            "state": "CA"
        },
        {
            "zip_code": "95030",
            "distance": 16.983,
            "city": "Los Gatos",
            "state": "CA"
        },
        {
            "zip_code": "95139",
            "distance": 26.041,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95119",
            "distance": 24.849,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95036",
            "distance": 16.525,
            "city": "Milpitas",
            "state": "CA"
        },
        {
            "zip_code": "95153",
            "distance": 21.945,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95193",
            "distance": 22.417,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95123",
            "distance": 22.177,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95138",
            "distance": 26.758,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94060",
            "distance": 13.098,
            "city": "Pescadero",
            "state": "CA"
        },
        {
            "zip_code": "95071",
            "distance": 13.952,
            "city": "Saratoga",
            "state": "CA"
        },
        {
            "zip_code": "95118",
            "distance": 19.089,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95124",
            "distance": 17.615,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95154",
            "distance": 18.018,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95158",
            "distance": 19.815,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95070",
            "distance": 12.865,
            "city": "Saratoga",
            "state": "CA"
        },
        {
            "zip_code": "95136",
            "distance": 20.362,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94021",
            "distance": 11.843,
            "city": "Loma Mar",
            "state": "CA"
        },
        {
            "zip_code": "94020",
            "distance": 10.49,
            "city": "La Honda",
            "state": "CA"
        },
        {
            "zip_code": "95130",
            "distance": 14.066,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95008",
            "distance": 15.245,
            "city": "Campbell",
            "state": "CA"
        },
        {
            "zip_code": "95009",
            "distance": 15.878,
            "city": "Campbell",
            "state": "CA"
        },
        {
            "zip_code": "95111",
            "distance": 21.093,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95135",
            "distance": 29.613,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95011",
            "distance": 15.012,
            "city": "Campbell",
            "state": "CA"
        },
        {
            "zip_code": "95150",
            "distance": 16.84,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95151",
            "distance": 23.22,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95125",
            "distance": 17.53,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95157",
            "distance": 13.714,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95115",
            "distance": 17.45,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95121",
            "distance": 21.335,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95129",
            "distance": 12.133,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95014",
            "distance": 9.169,
            "city": "Cupertino",
            "state": "CA"
        },
        {
            "zip_code": "95170",
            "distance": 11.996,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95159",
            "distance": 15.187,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95155",
            "distance": 16.63,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95117",
            "distance": 13.635,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95128",
            "distance": 14.681,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95015",
            "distance": 9.495,
            "city": "Cupertino",
            "state": "CA"
        },
        {
            "zip_code": "95191",
            "distance": 15.844,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95126",
            "distance": 15.304,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95122",
            "distance": 19.418,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95108",
            "distance": 7.869,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95055",
            "distance": 12.123,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95103",
            "distance": 16.579,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95106",
            "distance": 16.579,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95109",
            "distance": 16.579,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95173",
            "distance": 16.579,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95196",
            "distance": 16.579,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95172",
            "distance": 17.078,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94074",
            "distance": 11.121,
            "city": "San Gregorio",
            "state": "CA"
        },
        {
            "zip_code": "95113",
            "distance": 16.427,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95148",
            "distance": 22.317,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95192",
            "distance": 16.336,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95194",
            "distance": 16.842,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95112",
            "distance": 16.565,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95110",
            "distance": 15.147,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95051",
            "distance": 11.298,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95053",
            "distance": 13.675,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95052",
            "distance": 12.997,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95156",
            "distance": 18.753,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95116",
            "distance": 18.076,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95050",
            "distance": 12.85,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "94087",
            "distance": 8.66,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "94024",
            "distance": 6.192,
            "city": "Los Altos",
            "state": "CA"
        },
        {
            "zip_code": "94022",
            "distance": 4.443,
            "city": "Los Altos",
            "state": "CA"
        },
        {
            "zip_code": "94023",
            "distance": 4.714,
            "city": "Los Altos",
            "state": "CA"
        },
        {
            "zip_code": "95190",
            "distance": 15.215,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95127",
            "distance": 20.578,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94086",
            "distance": 8.702,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "95133",
            "distance": 17.318,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94304",
            "distance": 3.067,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94028",
            "distance": 3.573,
            "city": "Portola Valley",
            "state": "CA"
        },
        {
            "zip_code": "95101",
            "distance": 15.636,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95161",
            "distance": 15.636,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94040",
            "distance": 5.362,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "95131",
            "distance": 15.155,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94041",
            "distance": 5.61,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "94085",
            "distance": 8.644,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "94039",
            "distance": 5.869,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "94088",
            "distance": 7.949,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "95164",
            "distance": 13.881,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95054",
            "distance": 11.45,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "95140",
            "distance": 30.269,
            "city": "Mount Hamilton",
            "state": "CA"
        },
        {
            "zip_code": "94042",
            "distance": 5.126,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "95056",
            "distance": 11.641,
            "city": "Santa Clara",
            "state": "CA"
        },
        {
            "zip_code": "94309",
            "distance": 0.826,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94035",
            "distance": 6.659,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "95152",
            "distance": 19.252,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "94089",
            "distance": 8.531,
            "city": "Sunnyvale",
            "state": "CA"
        },
        {
            "zip_code": "94062",
            "distance": 6.861,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94043",
            "distance": 5.479,
            "city": "Mountain View",
            "state": "CA"
        },
        {
            "zip_code": "94306",
            "distance": 2.208,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94305",
            "distance": 0,
            "city": "Stanford",
            "state": "CA"
        },
        {
            "zip_code": "95132",
            "distance": 23.175,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95134",
            "distance": 12.055,
            "city": "San Jose",
            "state": "CA"
        },
        {
            "zip_code": "95002",
            "distance": 8.853,
            "city": "Alviso",
            "state": "CA"
        },
        {
            "zip_code": "94302",
            "distance": 1.879,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94301",
            "distance": 2.114,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "95035",
            "distance": 16.664,
            "city": "Milpitas",
            "state": "CA"
        },
        {
            "zip_code": "94027",
            "distance": 3.079,
            "city": "Atherton",
            "state": "CA"
        },
        {
            "zip_code": "94025",
            "distance": 2.73,
            "city": "Menlo Park",
            "state": "CA"
        },
        {
            "zip_code": "94303",
            "distance": 4.097,
            "city": "Palo Alto",
            "state": "CA"
        },
        {
            "zip_code": "94064",
            "distance": 5.234,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94061",
            "distance": 4.697,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94019",
            "distance": 13.696,
            "city": "Half Moon Bay",
            "state": "CA"
        },
        {
            "zip_code": "94026",
            "distance": 3.61,
            "city": "Menlo Park",
            "state": "CA"
        },
        {
            "zip_code": "94063",
            "distance": 5.355,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94070",
            "distance": 7.777,
            "city": "San Carlos",
            "state": "CA"
        },
        {
            "zip_code": "94018",
            "distance": 17.347,
            "city": "El Granada",
            "state": "CA"
        },
        {
            "zip_code": "94538",
            "distance": 13.051,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94560",
            "distance": 9.611,
            "city": "Newark",
            "state": "CA"
        },
        {
            "zip_code": "94002",
            "distance": 9.675,
            "city": "Belmont",
            "state": "CA"
        },
        {
            "zip_code": "94539",
            "distance": 15.754,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "95387",
            "distance": 48.453,
            "city": "Westley",
            "state": "CA"
        },
        {
            "zip_code": "94550",
            "distance": 33.393,
            "city": "Livermore",
            "state": "CA"
        },
        {
            "zip_code": "94402",
            "distance": 12.007,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94038",
            "distance": 20.174,
            "city": "Moss Beach",
            "state": "CA"
        },
        {
            "zip_code": "94065",
            "distance": 9.044,
            "city": "Redwood City",
            "state": "CA"
        },
        {
            "zip_code": "94403",
            "distance": 11.112,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94555",
            "distance": 9.812,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94537",
            "distance": 12.657,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94037",
            "distance": 20.194,
            "city": "Montara",
            "state": "CA"
        },
        {
            "zip_code": "94404",
            "distance": 10.897,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94497",
            "distance": 12.772,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94011",
            "distance": 14.012,
            "city": "Burlingame",
            "state": "CA"
        },
        {
            "zip_code": "94010",
            "distance": 15,
            "city": "Burlingame",
            "state": "CA"
        },
        {
            "zip_code": "94536",
            "distance": 14.79,
            "city": "Fremont",
            "state": "CA"
        },
        {
            "zip_code": "94586",
            "distance": 20.432,
            "city": "Sunol",
            "state": "CA"
        },
        {
            "zip_code": "94401",
            "distance": 13.576,
            "city": "San Mateo",
            "state": "CA"
        },
        {
            "zip_code": "94030",
            "distance": 17.8,
            "city": "Millbrae",
            "state": "CA"
        },
        {
            "zip_code": "94587",
            "distance": 15.246,
            "city": "Union City",
            "state": "CA"
        },
        {
            "zip_code": "94545",
            "distance": 13.183,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94044",
            "distance": 21.25,
            "city": "Pacifica",
            "state": "CA"
        },
        {
            "zip_code": "94557",
            "distance": 14.464,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94066",
            "distance": 20.296,
            "city": "San Bruno",
            "state": "CA"
        },
        {
            "zip_code": "94128",
            "distance": 18.587,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94544",
            "distance": 16.138,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94083",
            "distance": 20.172,
            "city": "South San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94566",
            "distance": 23.69,
            "city": "Pleasanton",
            "state": "CA"
        },
        {
            "zip_code": "94540",
            "distance": 16.61,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94080",
            "distance": 21.413,
            "city": "South San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94542",
            "distance": 18.226,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "94543",
            "distance": 18.088,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "95304",
            "distance": 45.37,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94541",
            "distance": 18.281,
            "city": "Hayward",
            "state": "CA"
        },
        {
            "zip_code": "95377",
            "distance": 39.905,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94580",
            "distance": 17.911,
            "city": "San Lorenzo",
            "state": "CA"
        },
        {
            "zip_code": "94015",
            "distance": 24.869,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94579",
            "distance": 18.545,
            "city": "San Leandro",
            "state": "CA"
        },
        {
            "zip_code": "94005",
            "distance": 22.801,
            "city": "Brisbane",
            "state": "CA"
        },
        {
            "zip_code": "94017",
            "distance": 24.918,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94014",
            "distance": 24.178,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94013",
            "distance": 24.767,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94016",
            "distance": 24.767,
            "city": "Daly City",
            "state": "CA"
        },
        {
            "zip_code": "94578",
            "distance": 20.062,
            "city": "San Leandro",
            "state": "CA"
        },
        {
            "zip_code": "94160",
            "distance": 23.746,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94577",
            "distance": 20.385,
            "city": "San Leandro",
            "state": "CA"
        },
        {
            "zip_code": "94568",
            "distance": 24.854,
            "city": "Dublin",
            "state": "CA"
        },
        {
            "zip_code": "94546",
            "distance": 21.226,
            "city": "Castro Valley",
            "state": "CA"
        },
        {
            "zip_code": "94614",
            "distance": 20.908,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94112",
            "distance": 25.649,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94134",
            "distance": 24.793,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94132",
            "distance": 27.122,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94552",
            "distance": 22.563,
            "city": "Castro Valley",
            "state": "CA"
        },
        {
            "zip_code": "94124",
            "distance": 24.399,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94125",
            "distance": 24.395,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94127",
            "distance": 27.066,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94603",
            "distance": 21.996,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "95376",
            "distance": 45.999,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94502",
            "distance": 22.442,
            "city": "Alameda",
            "state": "CA"
        },
        {
            "zip_code": "94188",
            "distance": 25.005,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94622",
            "distance": 22.254,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94624",
            "distance": 22.228,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94116",
            "distance": 28.453,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94131",
            "distance": 27.07,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94621",
            "distance": 22.944,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94146",
            "distance": 26.969,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94110",
            "distance": 26.548,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94140",
            "distance": 26.407,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94617",
            "distance": 22.981,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94551",
            "distance": 32.557,
            "city": "Livermore",
            "state": "CA"
        },
        {
            "zip_code": "94583",
            "distance": 25.667,
            "city": "San Ramon",
            "state": "CA"
        },
        {
            "zip_code": "94114",
            "distance": 27.588,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94122",
            "distance": 29.156,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94172",
            "distance": 29.058,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94143",
            "distance": 28.138,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94141",
            "distance": 27.007,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94107",
            "distance": 26.765,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94605",
            "distance": 23.736,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94582",
            "distance": 27.558,
            "city": "San Ramon",
            "state": "CA"
        },
        {
            "zip_code": "94158",
            "distance": 26.91,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "95391",
            "distance": 39.086,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94117",
            "distance": 28.605,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94101",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94106",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94135",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94136",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94150",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94152",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94153",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94154",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94155",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94171",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94175",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94199",
            "distance": 27.614,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94620",
            "distance": 24.399,
            "city": "Piedmont",
            "state": "CA"
        },
        {
            "zip_code": "94103",
            "distance": 27.835,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94501",
            "distance": 25.262,
            "city": "Alameda",
            "state": "CA"
        },
        {
            "zip_code": "94601",
            "distance": 24.827,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94121",
            "distance": 30.475,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94102",
            "distance": 28.434,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94144",
            "distance": 29.588,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94119",
            "distance": 29.306,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94159",
            "distance": 29.306,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94164",
            "distance": 28.473,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94142",
            "distance": 28.222,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94156",
            "distance": 27.964,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94162",
            "distance": 27.964,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94163",
            "distance": 27.964,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94118",
            "distance": 29.679,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94613",
            "distance": 25.06,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94115",
            "distance": 29.295,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94105",
            "distance": 28.427,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94120",
            "distance": 28.584,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94137",
            "distance": 28.584,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94138",
            "distance": 28.584,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94139",
            "distance": 28.584,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94145",
            "distance": 28.584,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94161",
            "distance": 28.584,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94126",
            "distance": 28.355,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94151",
            "distance": 28.355,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94177",
            "distance": 28.355,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94660",
            "distance": 26.251,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94619",
            "distance": 25.768,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94104",
            "distance": 28.728,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94606",
            "distance": 26.135,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94108",
            "distance": 28.918,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94588",
            "distance": 30.938,
            "city": "Pleasanton",
            "state": "CA"
        },
        {
            "zip_code": "94109",
            "distance": 29.47,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94129",
            "distance": 30.737,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94111",
            "distance": 29.138,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94147",
            "distance": 29.956,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94625",
            "distance": 27.452,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94615",
            "distance": 27.168,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94623",
            "distance": 27.168,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94604",
            "distance": 26.823,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94649",
            "distance": 26.823,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94666",
            "distance": 26.823,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "95378",
            "distance": 43.001,
            "city": "Tracy",
            "state": "CA"
        },
        {
            "zip_code": "94123",
            "distance": 30.225,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94602",
            "distance": 26.749,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94133",
            "distance": 29.749,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94607",
            "distance": 27.807,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94612",
            "distance": 27.517,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94506",
            "distance": 30.488,
            "city": "Danville",
            "state": "CA"
        },
        {
            "zip_code": "94659",
            "distance": 27.505,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94610",
            "distance": 27.446,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94526",
            "distance": 29.099,
            "city": "Danville",
            "state": "CA"
        },
        {
            "zip_code": "94661",
            "distance": 27.805,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94130",
            "distance": 29.855,
            "city": "San Francisco",
            "state": "CA"
        },
        {
            "zip_code": "94514",
            "distance": 41.177,
            "city": "Byron",
            "state": "CA"
        },
        {
            "zip_code": "94611",
            "distance": 28.46,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94516",
            "distance": 28.719,
            "city": "Canyon",
            "state": "CA"
        },
        {
            "zip_code": "94609",
            "distance": 29.209,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94608",
            "distance": 29.642,
            "city": "Emeryville",
            "state": "CA"
        },
        {
            "zip_code": "94662",
            "distance": 29.861,
            "city": "Emeryville",
            "state": "CA"
        },
        {
            "zip_code": "94556",
            "distance": 29.342,
            "city": "Moraga",
            "state": "CA"
        },
        {
            "zip_code": "94575",
            "distance": 29.396,
            "city": "Moraga",
            "state": "CA"
        },
        {
            "zip_code": "94618",
            "distance": 29.692,
            "city": "Oakland",
            "state": "CA"
        },
        {
            "zip_code": "94528",
            "distance": 31.885,
            "city": "Diablo",
            "state": "CA"
        },
        {
            "zip_code": "94507",
            "distance": 30.958,
            "city": "Alamo",
            "state": "CA"
        },
        {
            "zip_code": "94965",
            "distance": 36.415,
            "city": "Sausalito",
            "state": "CA"
        },
        {
            "zip_code": "94966",
            "distance": 35.163,
            "city": "Sausalito",
            "state": "CA"
        },
        {
            "zip_code": "94701",
            "distance": 31,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94712",
            "distance": 30.911,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94710",
            "distance": 31.675,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94703",
            "distance": 31.321,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94705",
            "distance": 31.099,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94702",
            "distance": 31.56,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94704",
            "distance": 31.342,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94529",
            "distance": 32.019,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94505",
            "distance": 44.34,
            "city": "Discovery Bay",
            "state": "CA"
        },
        {
            "zip_code": "94595",
            "distance": 31.833,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "94720",
            "distance": 31.812,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94709",
            "distance": 32.281,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94563",
            "distance": 31.905,
            "city": "Orinda",
            "state": "CA"
        },
        {
            "zip_code": "94920",
            "distance": 36.171,
            "city": "Belvedere Tiburon",
            "state": "CA"
        },
        {
            "zip_code": "94596",
            "distance": 33.336,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "94706",
            "distance": 33.281,
            "city": "Albany",
            "state": "CA"
        },
        {
            "zip_code": "94517",
            "distance": 36.315,
            "city": "Clayton",
            "state": "CA"
        },
        {
            "zip_code": "94549",
            "distance": 33.222,
            "city": "Lafayette",
            "state": "CA"
        },
        {
            "zip_code": "94941",
            "distance": 39.472,
            "city": "Mill Valley",
            "state": "CA"
        },
        {
            "zip_code": "94707",
            "distance": 33.683,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94598",
            "distance": 34.575,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "94942",
            "distance": 38.384,
            "city": "Mill Valley",
            "state": "CA"
        },
        {
            "zip_code": "94850",
            "distance": 34.388,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94708",
            "distance": 33.856,
            "city": "Berkeley",
            "state": "CA"
        },
        {
            "zip_code": "94970",
            "distance": 43.054,
            "city": "Stinson Beach",
            "state": "CA"
        },
        {
            "zip_code": "94804",
            "distance": 35.673,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94597",
            "distance": 34.963,
            "city": "Walnut Creek",
            "state": "CA"
        },
        {
            "zip_code": "94976",
            "distance": 39.587,
            "city": "Corte Madera",
            "state": "CA"
        },
        {
            "zip_code": "94807",
            "distance": 36.027,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94530",
            "distance": 35.469,
            "city": "El Cerrito",
            "state": "CA"
        },
        {
            "zip_code": "94513",
            "distance": 44.359,
            "city": "Brentwood",
            "state": "CA"
        },
        {
            "zip_code": "95234",
            "distance": 49.653,
            "city": "Holt",
            "state": "CA"
        },
        {
            "zip_code": "94977",
            "distance": 40.447,
            "city": "Larkspur",
            "state": "CA"
        },
        {
            "zip_code": "94802",
            "distance": 36.691,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94808",
            "distance": 36.552,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94925",
            "distance": 39.984,
            "city": "Corte Madera",
            "state": "CA"
        },
        {
            "zip_code": "94939",
            "distance": 40.937,
            "city": "Larkspur",
            "state": "CA"
        },
        {
            "zip_code": "94914",
            "distance": 41.053,
            "city": "Kentfield",
            "state": "CA"
        },
        {
            "zip_code": "94805",
            "distance": 37.188,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94924",
            "distance": 47.213,
            "city": "Bolinas",
            "state": "CA"
        },
        {
            "zip_code": "94964",
            "distance": 40.308,
            "city": "San Quentin",
            "state": "CA"
        },
        {
            "zip_code": "94930",
            "distance": 43.742,
            "city": "Fairfax",
            "state": "CA"
        },
        {
            "zip_code": "94904",
            "distance": 42.201,
            "city": "Greenbrae",
            "state": "CA"
        },
        {
            "zip_code": "94974",
            "distance": 41.928,
            "city": "San Quentin",
            "state": "CA"
        },
        {
            "zip_code": "94915",
            "distance": 40.916,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94518",
            "distance": 37.65,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94801",
            "distance": 38.702,
            "city": "Richmond",
            "state": "CA"
        },
        {
            "zip_code": "94523",
            "distance": 37.385,
            "city": "Pleasant Hill",
            "state": "CA"
        },
        {
            "zip_code": "94521",
            "distance": 38.957,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94803",
            "distance": 37.904,
            "city": "El Sobrante",
            "state": "CA"
        },
        {
            "zip_code": "94957",
            "distance": 43.346,
            "city": "Ross",
            "state": "CA"
        },
        {
            "zip_code": "94531",
            "distance": 43.554,
            "city": "Antioch",
            "state": "CA"
        },
        {
            "zip_code": "94979",
            "distance": 43.667,
            "city": "San Anselmo",
            "state": "CA"
        },
        {
            "zip_code": "94912",
            "distance": 42.16,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94820",
            "distance": 38.672,
            "city": "El Sobrante",
            "state": "CA"
        },
        {
            "zip_code": "94524",
            "distance": 38.688,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94527",
            "distance": 38.688,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94548",
            "distance": 47.762,
            "city": "Knightsen",
            "state": "CA"
        },
        {
            "zip_code": "94901",
            "distance": 42.619,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94978",
            "distance": 44.794,
            "city": "Fairfax",
            "state": "CA"
        },
        {
            "zip_code": "94806",
            "distance": 39.922,
            "city": "San Pablo",
            "state": "CA"
        },
        {
            "zip_code": "94519",
            "distance": 40.328,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94553",
            "distance": 39.814,
            "city": "Martinez",
            "state": "CA"
        },
        {
            "zip_code": "94561",
            "distance": 47.636,
            "city": "Oakley",
            "state": "CA"
        },
        {
            "zip_code": "94564",
            "distance": 40.247,
            "city": "Pinole",
            "state": "CA"
        },
        {
            "zip_code": "94520",
            "distance": 40.498,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94960",
            "distance": 45.7,
            "city": "San Anselmo",
            "state": "CA"
        },
        {
            "zip_code": "94509",
            "distance": 44.49,
            "city": "Antioch",
            "state": "CA"
        },
        {
            "zip_code": "94522",
            "distance": 41.707,
            "city": "Concord",
            "state": "CA"
        },
        {
            "zip_code": "94547",
            "distance": 41.2,
            "city": "Hercules",
            "state": "CA"
        },
        {
            "zip_code": "94933",
            "distance": 49.841,
            "city": "Forest Knolls",
            "state": "CA"
        },
        {
            "zip_code": "94973",
            "distance": 48.406,
            "city": "Woodacre",
            "state": "CA"
        },
        {
            "zip_code": "94963",
            "distance": 49.381,
            "city": "San Geronimo",
            "state": "CA"
        },
        {
            "zip_code": "94565",
            "distance": 43.659,
            "city": "Pittsburg",
            "state": "CA"
        },
        {
            "zip_code": "94913",
            "distance": 46.221,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94903",
            "distance": 46.741,
            "city": "San Rafael",
            "state": "CA"
        },
        {
            "zip_code": "94572",
            "distance": 42.69,
            "city": "Rodeo",
            "state": "CA"
        },
        {
            "zip_code": "94569",
            "distance": 43.281,
            "city": "Port Costa",
            "state": "CA"
        },
        {
            "zip_code": "94525",
            "distance": 43.979,
            "city": "Crockett",
            "state": "CA"
        },
        {
            "zip_code": "94949",
            "distance": 48.064,
            "city": "Novato",
            "state": "CA"
        },
        {
            "zip_code": "94592",
            "distance": 46.756,
            "city": "Vallejo",
            "state": "CA"
        },
        {
            "zip_code": "94510",
            "distance": 47.009,
            "city": "Benicia",
            "state": "CA"
        },
        {
            "zip_code": "94590",
            "distance": 47.521,
            "city": "Vallejo",
            "state": "CA"
        },
        {
            "zip_code": "94570",
            "distance": 47.846,
            "city": "Moraga",
            "state": "CA"
        },
        {
            "zip_code": "94591",
            "distance": 48.706,
            "city": "Vallejo",
            "state": "CA"
        }
    ],
  "SMASH UCLA": [
        {
            "zip_code": "90704",
            "distance": 46.431,
            "city": "Avalon",
            "state": "CA"
        },
        {
            "zip_code": "92657",
            "distance": 48.241,
            "city": "Newport Coast",
            "state": "CA"
        },
        {
            "zip_code": "92661",
            "distance": 44.478,
            "city": "Newport Beach",
            "state": "CA"
        },
        {
            "zip_code": "92625",
            "distance": 46.436,
            "city": "Corona Del Mar",
            "state": "CA"
        },
        {
            "zip_code": "92662",
            "distance": 45.144,
            "city": "Newport Beach",
            "state": "CA"
        },
        {
            "zip_code": "92659",
            "distance": 43.301,
            "city": "Newport Beach",
            "state": "CA"
        },
        {
            "zip_code": "92663",
            "distance": 42.595,
            "city": "Newport Beach",
            "state": "CA"
        },
        {
            "zip_code": "92603",
            "distance": 48.964,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92658",
            "distance": 45.297,
            "city": "Newport Beach",
            "state": "CA"
        },
        {
            "zip_code": "92660",
            "distance": 44.449,
            "city": "Newport Beach",
            "state": "CA"
        },
        {
            "zip_code": "92628",
            "distance": 42.713,
            "city": "Costa Mesa",
            "state": "CA"
        },
        {
            "zip_code": "92697",
            "distance": 45.673,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92616",
            "distance": 46.123,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92617",
            "distance": 45.484,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92627",
            "distance": 41.939,
            "city": "Costa Mesa",
            "state": "CA"
        },
        {
            "zip_code": "92615",
            "distance": 40.21,
            "city": "Huntington Beach",
            "state": "CA"
        },
        {
            "zip_code": "92612",
            "distance": 45.486,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92619",
            "distance": 48.426,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92646",
            "distance": 39.265,
            "city": "Huntington Beach",
            "state": "CA"
        },
        {
            "zip_code": "92618",
            "distance": 49.466,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92698",
            "distance": 44.809,
            "city": "Aliso Viejo",
            "state": "CA"
        },
        {
            "zip_code": "92650",
            "distance": 48.48,
            "city": "East Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92709",
            "distance": 49.429,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92648",
            "distance": 36.61,
            "city": "Huntington Beach",
            "state": "CA"
        },
        {
            "zip_code": "92626",
            "distance": 40.921,
            "city": "Costa Mesa",
            "state": "CA"
        },
        {
            "zip_code": "92614",
            "distance": 44.213,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92623",
            "distance": 44.89,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92604",
            "distance": 45.824,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "90733",
            "distance": 27.119,
            "city": "San Pedro",
            "state": "CA"
        },
        {
            "zip_code": "92710",
            "distance": 44.485,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92606",
            "distance": 43.623,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "92707",
            "distance": 41.268,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92605",
            "distance": 35.636,
            "city": "Huntington Beach",
            "state": "CA"
        },
        {
            "zip_code": "92728",
            "distance": 39.053,
            "city": "Fountain Valley",
            "state": "CA"
        },
        {
            "zip_code": "92799",
            "distance": 39.944,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92735",
            "distance": 42.214,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92708",
            "distance": 37.652,
            "city": "Fountain Valley",
            "state": "CA"
        },
        {
            "zip_code": "92620",
            "distance": 46.826,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "90742",
            "distance": 32.286,
            "city": "Sunset Beach",
            "state": "CA"
        },
        {
            "zip_code": "92704",
            "distance": 39.231,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92647",
            "distance": 34.644,
            "city": "Huntington Beach",
            "state": "CA"
        },
        {
            "zip_code": "92649",
            "distance": 32.813,
            "city": "Huntington Beach",
            "state": "CA"
        },
        {
            "zip_code": "90743",
            "distance": 31.276,
            "city": "Surfside",
            "state": "CA"
        },
        {
            "zip_code": "92702",
            "distance": 40.467,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92781",
            "distance": 43.317,
            "city": "Tustin",
            "state": "CA"
        },
        {
            "zip_code": "90731",
            "distance": 25.299,
            "city": "San Pedro",
            "state": "CA"
        },
        {
            "zip_code": "92780",
            "distance": 42.727,
            "city": "Tustin",
            "state": "CA"
        },
        {
            "zip_code": "92782",
            "distance": 44.185,
            "city": "Tustin",
            "state": "CA"
        },
        {
            "zip_code": "90732",
            "distance": 23.941,
            "city": "San Pedro",
            "state": "CA"
        },
        {
            "zip_code": "92655",
            "distance": 34.643,
            "city": "Midway City",
            "state": "CA"
        },
        {
            "zip_code": "90802",
            "distance": 26.229,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92703",
            "distance": 38.04,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92701",
            "distance": 40.289,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "90734",
            "distance": 23.675,
            "city": "San Pedro",
            "state": "CA"
        },
        {
            "zip_code": "90853",
            "distance": 28.557,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92685",
            "distance": 34.199,
            "city": "Westminster",
            "state": "CA"
        },
        {
            "zip_code": "92712",
            "distance": 39.674,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92725",
            "distance": 40.166,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92683",
            "distance": 33.913,
            "city": "Westminster",
            "state": "CA"
        },
        {
            "zip_code": "90275",
            "distance": 22.399,
            "city": "Rancho Palos Verdes",
            "state": "CA"
        },
        {
            "zip_code": "92602",
            "distance": 45.307,
            "city": "Irvine",
            "state": "CA"
        },
        {
            "zip_code": "90803",
            "distance": 28.201,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90740",
            "distance": 30.223,
            "city": "Seal Beach",
            "state": "CA"
        },
        {
            "zip_code": "90833",
            "distance": 25.639,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90834",
            "distance": 25.639,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90835",
            "distance": 25.639,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90832",
            "distance": 25.966,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90809",
            "distance": 28.407,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92684",
            "distance": 33.301,
            "city": "Westminster",
            "state": "CA"
        },
        {
            "zip_code": "92711",
            "distance": 42.702,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92843",
            "distance": 36.239,
            "city": "Garden Grove",
            "state": "CA"
        },
        {
            "zip_code": "92706",
            "distance": 38.512,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "92844",
            "distance": 34.414,
            "city": "Garden Grove",
            "state": "CA"
        },
        {
            "zip_code": "92705",
            "distance": 43.02,
            "city": "Santa Ana",
            "state": "CA"
        },
        {
            "zip_code": "90831",
            "distance": 25.101,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90844",
            "distance": 25.394,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90899",
            "distance": 25.394,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90801",
            "distance": 25.719,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90845",
            "distance": 25.719,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90888",
            "distance": 25.719,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92842",
            "distance": 35.593,
            "city": "Garden Grove",
            "state": "CA"
        },
        {
            "zip_code": "90814",
            "distance": 26.901,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90822",
            "distance": 27.498,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90744",
            "distance": 22.699,
            "city": "Wilmington",
            "state": "CA"
        },
        {
            "zip_code": "90748",
            "distance": 22.702,
            "city": "Wilmington",
            "state": "CA"
        },
        {
            "zip_code": "90840",
            "distance": 27.374,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92846",
            "distance": 31.103,
            "city": "Garden Grove",
            "state": "CA"
        },
        {
            "zip_code": "92856",
            "distance": 40.016,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "90274",
            "distance": 20.526,
            "city": "Palos Verdes Peninsula",
            "state": "CA"
        },
        {
            "zip_code": "90804",
            "distance": 26.198,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90813",
            "distance": 24.474,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92845",
            "distance": 31.115,
            "city": "Garden Grove",
            "state": "CA"
        },
        {
            "zip_code": "92866",
            "distance": 39.627,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "92841",
            "distance": 32.968,
            "city": "Garden Grove",
            "state": "CA"
        },
        {
            "zip_code": "92840",
            "distance": 35.293,
            "city": "Garden Grove",
            "state": "CA"
        },
        {
            "zip_code": "92868",
            "distance": 37.948,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "92862",
            "distance": 46.315,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "90717",
            "distance": 20.497,
            "city": "Lomita",
            "state": "CA"
        },
        {
            "zip_code": "90815",
            "distance": 26.789,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90720",
            "distance": 29.005,
            "city": "Los Alamitos",
            "state": "CA"
        },
        {
            "zip_code": "90710",
            "distance": 20.504,
            "city": "Harbor City",
            "state": "CA"
        },
        {
            "zip_code": "90721",
            "distance": 28.457,
            "city": "Los Alamitos",
            "state": "CA"
        },
        {
            "zip_code": "92859",
            "distance": 42.4,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "92867",
            "distance": 39.131,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "90680",
            "distance": 31.772,
            "city": "Stanton",
            "state": "CA"
        },
        {
            "zip_code": "90755",
            "distance": 24.266,
            "city": "Signal Hill",
            "state": "CA"
        },
        {
            "zip_code": "90806",
            "distance": 23.511,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90505",
            "distance": 19.003,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "92802",
            "distance": 34.891,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92869",
            "distance": 41.551,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "90842",
            "distance": 24.29,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92814",
            "distance": 33.077,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92812",
            "distance": 35.026,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92863",
            "distance": 40.032,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "92864",
            "distance": 40.032,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "92861",
            "distance": 40.327,
            "city": "Villa Park",
            "state": "CA"
        },
        {
            "zip_code": "92804",
            "distance": 32.049,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90630",
            "distance": 29.052,
            "city": "Cypress",
            "state": "CA"
        },
        {
            "zip_code": "90810",
            "distance": 21.504,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90510",
            "distance": 18.753,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "90749",
            "distance": 20.292,
            "city": "Carson",
            "state": "CA"
        },
        {
            "zip_code": "90846",
            "distance": 25.82,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90745",
            "distance": 20.011,
            "city": "Carson",
            "state": "CA"
        },
        {
            "zip_code": "90808",
            "distance": 25.587,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92865",
            "distance": 37.936,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "90807",
            "distance": 22.809,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90277",
            "distance": 16.974,
            "city": "Redondo Beach",
            "state": "CA"
        },
        {
            "zip_code": "90507",
            "distance": 18.339,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "90508",
            "distance": 18.339,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "90895",
            "distance": 21.384,
            "city": "Carson",
            "state": "CA"
        },
        {
            "zip_code": "90847",
            "distance": 22.122,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90848",
            "distance": 22.493,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "92815",
            "distance": 34.82,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92825",
            "distance": 34.82,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92816",
            "distance": 36.358,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92899",
            "distance": 36.855,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92857",
            "distance": 38.386,
            "city": "Orange",
            "state": "CA"
        },
        {
            "zip_code": "90716",
            "distance": 26.958,
            "city": "Hawaiian Gardens",
            "state": "CA"
        },
        {
            "zip_code": "92805",
            "distance": 35.007,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90502",
            "distance": 18.593,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "90501",
            "distance": 18.009,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "92806",
            "distance": 36.579,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90509",
            "distance": 17.481,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "90711",
            "distance": 23.625,
            "city": "Lakewood",
            "state": "CA"
        },
        {
            "zip_code": "90622",
            "distance": 30.02,
            "city": "Buena Park",
            "state": "CA"
        },
        {
            "zip_code": "92850",
            "distance": 32.475,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "92803",
            "distance": 33.48,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90503",
            "distance": 16.762,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "90715",
            "distance": 26.252,
            "city": "Lakewood",
            "state": "CA"
        },
        {
            "zip_code": "92801",
            "distance": 32.22,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90620",
            "distance": 29.076,
            "city": "Buena Park",
            "state": "CA"
        },
        {
            "zip_code": "90713",
            "distance": 24.455,
            "city": "Lakewood",
            "state": "CA"
        },
        {
            "zip_code": "92807",
            "distance": 40.587,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90712",
            "distance": 22.864,
            "city": "Lakewood",
            "state": "CA"
        },
        {
            "zip_code": "90714",
            "distance": 23.584,
            "city": "Lakewood",
            "state": "CA"
        },
        {
            "zip_code": "90624",
            "distance": 29.656,
            "city": "Buena Park",
            "state": "CA"
        },
        {
            "zip_code": "92817",
            "distance": 40.462,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90623",
            "distance": 27.715,
            "city": "La Palma",
            "state": "CA"
        },
        {
            "zip_code": "92808",
            "distance": 42.963,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90746",
            "distance": 18.301,
            "city": "Carson",
            "state": "CA"
        },
        {
            "zip_code": "90702",
            "distance": 25.45,
            "city": "Artesia",
            "state": "CA"
        },
        {
            "zip_code": "92811",
            "distance": 38.073,
            "city": "Atwood",
            "state": "CA"
        },
        {
            "zip_code": "92809",
            "distance": 42.879,
            "city": "Anaheim",
            "state": "CA"
        },
        {
            "zip_code": "90747",
            "distance": 18.135,
            "city": "Carson",
            "state": "CA"
        },
        {
            "zip_code": "90254",
            "distance": 14.521,
            "city": "Hermosa Beach",
            "state": "CA"
        },
        {
            "zip_code": "90805",
            "distance": 20.758,
            "city": "Long Beach",
            "state": "CA"
        },
        {
            "zip_code": "90504",
            "distance": 15.507,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "90701",
            "distance": 25.097,
            "city": "Artesia",
            "state": "CA"
        },
        {
            "zip_code": "90703",
            "distance": 25.637,
            "city": "Cerritos",
            "state": "CA"
        },
        {
            "zip_code": "92832",
            "distance": 32.637,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "90267",
            "distance": 14.234,
            "city": "Manhattan Beach",
            "state": "CA"
        },
        {
            "zip_code": "90224",
            "distance": 17.426,
            "city": "Compton",
            "state": "CA"
        },
        {
            "zip_code": "92837",
            "distance": 31.002,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "92836",
            "distance": 34.118,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "92834",
            "distance": 34.628,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "90278",
            "distance": 14.312,
            "city": "Redondo Beach",
            "state": "CA"
        },
        {
            "zip_code": "90621",
            "distance": 29.174,
            "city": "Buena Park",
            "state": "CA"
        },
        {
            "zip_code": "90248",
            "distance": 16.148,
            "city": "Gardena",
            "state": "CA"
        },
        {
            "zip_code": "92833",
            "distance": 30.627,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "92831",
            "distance": 34.029,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "90707",
            "distance": 22.772,
            "city": "Bellflower",
            "state": "CA"
        },
        {
            "zip_code": "92871",
            "distance": 36.486,
            "city": "Placentia",
            "state": "CA"
        },
        {
            "zip_code": "92870",
            "distance": 36.212,
            "city": "Placentia",
            "state": "CA"
        },
        {
            "zip_code": "90220",
            "distance": 17.759,
            "city": "Compton",
            "state": "CA"
        },
        {
            "zip_code": "90506",
            "distance": 14.436,
            "city": "Torrance",
            "state": "CA"
        },
        {
            "zip_code": "92887",
            "distance": 42.837,
            "city": "Yorba Linda",
            "state": "CA"
        },
        {
            "zip_code": "90221",
            "distance": 18.708,
            "city": "Compton",
            "state": "CA"
        },
        {
            "zip_code": "90706",
            "distance": 22.112,
            "city": "Bellflower",
            "state": "CA"
        },
        {
            "zip_code": "90260",
            "distance": 13.67,
            "city": "Lawndale",
            "state": "CA"
        },
        {
            "zip_code": "90266",
            "distance": 12.801,
            "city": "Manhattan Beach",
            "state": "CA"
        },
        {
            "zip_code": "90261",
            "distance": 13.208,
            "city": "Lawndale",
            "state": "CA"
        },
        {
            "zip_code": "90223",
            "distance": 17.908,
            "city": "Compton",
            "state": "CA"
        },
        {
            "zip_code": "90637",
            "distance": 28.326,
            "city": "La Mirada",
            "state": "CA"
        },
        {
            "zip_code": "92838",
            "distance": 31.967,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "92885",
            "distance": 37.847,
            "city": "Yorba Linda",
            "state": "CA"
        },
        {
            "zip_code": "90247",
            "distance": 14.994,
            "city": "Gardena",
            "state": "CA"
        },
        {
            "zip_code": "92886",
            "distance": 38.98,
            "city": "Yorba Linda",
            "state": "CA"
        },
        {
            "zip_code": "90723",
            "distance": 19.828,
            "city": "Paramount",
            "state": "CA"
        },
        {
            "zip_code": "90651",
            "distance": 24.453,
            "city": "Norwalk",
            "state": "CA"
        },
        {
            "zip_code": "90659",
            "distance": 24.453,
            "city": "Norwalk",
            "state": "CA"
        },
        {
            "zip_code": "90639",
            "distance": 27.52,
            "city": "La Mirada",
            "state": "CA"
        },
        {
            "zip_code": "90249",
            "distance": 13.83,
            "city": "Gardena",
            "state": "CA"
        },
        {
            "zip_code": "92835",
            "distance": 32.386,
            "city": "Fullerton",
            "state": "CA"
        },
        {
            "zip_code": "90638",
            "distance": 27.52,
            "city": "La Mirada",
            "state": "CA"
        },
        {
            "zip_code": "90650",
            "distance": 23.589,
            "city": "Norwalk",
            "state": "CA"
        },
        {
            "zip_code": "90251",
            "distance": 12.127,
            "city": "Hawthorne",
            "state": "CA"
        },
        {
            "zip_code": "90652",
            "distance": 24.127,
            "city": "Norwalk",
            "state": "CA"
        },
        {
            "zip_code": "90632",
            "distance": 30.377,
            "city": "La Habra",
            "state": "CA"
        },
        {
            "zip_code": "92822",
            "distance": 33.607,
            "city": "Brea",
            "state": "CA"
        },
        {
            "zip_code": "90222",
            "distance": 16.158,
            "city": "Compton",
            "state": "CA"
        },
        {
            "zip_code": "90250",
            "distance": 12.121,
            "city": "Hawthorne",
            "state": "CA"
        },
        {
            "zip_code": "90245",
            "distance": 10.883,
            "city": "El Segundo",
            "state": "CA"
        },
        {
            "zip_code": "90061",
            "distance": 14.202,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90242",
            "distance": 20.2,
            "city": "Downey",
            "state": "CA"
        },
        {
            "zip_code": "90262",
            "distance": 17.257,
            "city": "Lynwood",
            "state": "CA"
        },
        {
            "zip_code": "92880",
            "distance": 48.967,
            "city": "Corona",
            "state": "CA"
        },
        {
            "zip_code": "90059",
            "distance": 14.946,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "92821",
            "distance": 33.378,
            "city": "Brea",
            "state": "CA"
        },
        {
            "zip_code": "90604",
            "distance": 26.537,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "92823",
            "distance": 37.652,
            "city": "Brea",
            "state": "CA"
        },
        {
            "zip_code": "90310",
            "distance": 12.061,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90239",
            "distance": 21.449,
            "city": "Downey",
            "state": "CA"
        },
        {
            "zip_code": "90671",
            "distance": 24.027,
            "city": "Santa Fe Springs",
            "state": "CA"
        },
        {
            "zip_code": "90633",
            "distance": 30.454,
            "city": "La Habra",
            "state": "CA"
        },
        {
            "zip_code": "90670",
            "distance": 23.807,
            "city": "Santa Fe Springs",
            "state": "CA"
        },
        {
            "zip_code": "90304",
            "distance": 10.414,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90303",
            "distance": 11.129,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90009",
            "distance": 9.77,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90241",
            "distance": 20.155,
            "city": "Downey",
            "state": "CA"
        },
        {
            "zip_code": "90045",
            "distance": 9.04,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90631",
            "distance": 29.492,
            "city": "La Habra",
            "state": "CA"
        },
        {
            "zip_code": "90280",
            "distance": 16.843,
            "city": "South Gate",
            "state": "CA"
        },
        {
            "zip_code": "90603",
            "distance": 27.34,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90293",
            "distance": 8.565,
            "city": "Playa Del Rey",
            "state": "CA"
        },
        {
            "zip_code": "90002",
            "distance": 14.092,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90296",
            "distance": 8.379,
            "city": "Playa Del Rey",
            "state": "CA"
        },
        {
            "zip_code": "90080",
            "distance": 8.915,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90083",
            "distance": 8.915,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90307",
            "distance": 9.371,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90306",
            "distance": 9.939,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90308",
            "distance": 9.939,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90311",
            "distance": 9.939,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90605",
            "distance": 25.433,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90044",
            "distance": 11.943,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91708",
            "distance": 46.792,
            "city": "Chino",
            "state": "CA"
        },
        {
            "zip_code": "90047",
            "distance": 11.226,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90240",
            "distance": 20.276,
            "city": "Downey",
            "state": "CA"
        },
        {
            "zip_code": "90301",
            "distance": 9.295,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90305",
            "distance": 10.102,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90312",
            "distance": 9.362,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90313",
            "distance": 9.362,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90397",
            "distance": 9.362,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90398",
            "distance": 9.362,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90096",
            "distance": 17.436,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90202",
            "distance": 18.474,
            "city": "Bell",
            "state": "CA"
        },
        {
            "zip_code": "90662",
            "distance": 21.655,
            "city": "Pico Rivera",
            "state": "CA"
        },
        {
            "zip_code": "90610",
            "distance": 22.732,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90607",
            "distance": 25.438,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90612",
            "distance": 25.438,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "91709",
            "distance": 41.037,
            "city": "Chino Hills",
            "state": "CA"
        },
        {
            "zip_code": "90003",
            "distance": 12.262,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90295",
            "distance": 7.039,
            "city": "Marina Del Rey",
            "state": "CA"
        },
        {
            "zip_code": "90309",
            "distance": 8.806,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90052",
            "distance": 13.112,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90609",
            "distance": 24.701,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90608",
            "distance": 25.237,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90201",
            "distance": 17.074,
            "city": "Bell Gardens",
            "state": "CA"
        },
        {
            "zip_code": "90602",
            "distance": 25.088,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90001",
            "distance": 12.992,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91748",
            "distance": 31.808,
            "city": "Rowland Heights",
            "state": "CA"
        },
        {
            "zip_code": "90302",
            "distance": 8.333,
            "city": "Inglewood",
            "state": "CA"
        },
        {
            "zip_code": "90094",
            "distance": 6.789,
            "city": "Playa Vista",
            "state": "CA"
        },
        {
            "zip_code": "90292",
            "distance": 6.573,
            "city": "Marina Del Rey",
            "state": "CA"
        },
        {
            "zip_code": "90606",
            "distance": 22.544,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90255",
            "distance": 14.433,
            "city": "Huntington Park",
            "state": "CA"
        },
        {
            "zip_code": "90294",
            "distance": 6.48,
            "city": "Venice",
            "state": "CA"
        },
        {
            "zip_code": "90233",
            "distance": 7.279,
            "city": "Culver City",
            "state": "CA"
        },
        {
            "zip_code": "91765",
            "distance": 36.11,
            "city": "Diamond Bar",
            "state": "CA"
        },
        {
            "zip_code": "90270",
            "distance": 15.789,
            "city": "Maywood",
            "state": "CA"
        },
        {
            "zip_code": "90056",
            "distance": 7.119,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90043",
            "distance": 8.385,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90660",
            "distance": 21.047,
            "city": "Pico Rivera",
            "state": "CA"
        },
        {
            "zip_code": "90060",
            "distance": 5.772,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90231",
            "distance": 6.389,
            "city": "Culver City",
            "state": "CA"
        },
        {
            "zip_code": "90101",
            "distance": 17.183,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90103",
            "distance": 17.183,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90091",
            "distance": 17.711,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90291",
            "distance": 5.519,
            "city": "Venice",
            "state": "CA"
        },
        {
            "zip_code": "90040",
            "distance": 17.614,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90230",
            "distance": 5.816,
            "city": "Culver City",
            "state": "CA"
        },
        {
            "zip_code": "91745",
            "distance": 27.456,
            "city": "Hacienda Heights",
            "state": "CA"
        },
        {
            "zip_code": "90409",
            "distance": 5.35,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90082",
            "distance": 11.092,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90661",
            "distance": 21.405,
            "city": "Pico Rivera",
            "state": "CA"
        },
        {
            "zip_code": "91716",
            "distance": 27.573,
            "city": "City Of Industry",
            "state": "CA"
        },
        {
            "zip_code": "90066",
            "distance": 4.841,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90037",
            "distance": 10.101,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90058",
            "distance": 13.822,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90062",
            "distance": 9.014,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91710",
            "distance": 43.678,
            "city": "Chino",
            "state": "CA"
        },
        {
            "zip_code": "90011",
            "distance": 11.485,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90601",
            "distance": 24.054,
            "city": "Whittier",
            "state": "CA"
        },
        {
            "zip_code": "90008",
            "distance": 6.991,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90406",
            "distance": 4.993,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90407",
            "distance": 4.993,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90410",
            "distance": 4.334,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90411",
            "distance": 4.334,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90102",
            "distance": 15.135,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91715",
            "distance": 27.456,
            "city": "City Of Industry",
            "state": "CA"
        },
        {
            "zip_code": "91714",
            "distance": 28.559,
            "city": "City Of Industry",
            "state": "CA"
        },
        {
            "zip_code": "91788",
            "distance": 33.693,
            "city": "Walnut",
            "state": "CA"
        },
        {
            "zip_code": "90405",
            "distance": 4.407,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90401",
            "distance": 4.915,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90640",
            "distance": 19.412,
            "city": "Montebello",
            "state": "CA"
        },
        {
            "zip_code": "91789",
            "distance": 33.919,
            "city": "Walnut",
            "state": "CA"
        },
        {
            "zip_code": "90232",
            "distance": 4.645,
            "city": "Culver City",
            "state": "CA"
        },
        {
            "zip_code": "90408",
            "distance": 4.115,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "91747",
            "distance": 29.049,
            "city": "La Puente",
            "state": "CA"
        },
        {
            "zip_code": "91795",
            "distance": 34.167,
            "city": "Walnut",
            "state": "CA"
        },
        {
            "zip_code": "90089",
            "distance": 9.684,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90023",
            "distance": 14.373,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91792",
            "distance": 31.179,
            "city": "West Covina",
            "state": "CA"
        },
        {
            "zip_code": "90022",
            "distance": 16.758,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90404",
            "distance": 3.54,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "90007",
            "distance": 9.561,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90016",
            "distance": 5.914,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90018",
            "distance": 7.817,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90021",
            "distance": 12.13,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91749",
            "distance": 28.384,
            "city": "La Puente",
            "state": "CA"
        },
        {
            "zip_code": "90034",
            "distance": 3.776,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90403",
            "distance": 3.947,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "91744",
            "distance": 29.158,
            "city": "La Puente",
            "state": "CA"
        },
        {
            "zip_code": "90402",
            "distance": 4.297,
            "city": "Santa Monica",
            "state": "CA"
        },
        {
            "zip_code": "91761",
            "distance": 48.834,
            "city": "Ontario",
            "state": "CA"
        },
        {
            "zip_code": "90064",
            "distance": 2.613,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90263",
            "distance": 15.315,
            "city": "Malibu",
            "state": "CA"
        },
        {
            "zip_code": "90015",
            "distance": 10.371,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90264",
            "distance": 18.819,
            "city": "Malibu",
            "state": "CA"
        },
        {
            "zip_code": "90055",
            "distance": 11.294,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91756",
            "distance": 18.07,
            "city": "Monterey Park",
            "state": "CA"
        },
        {
            "zip_code": "90079",
            "distance": 10.964,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91766",
            "distance": 39.408,
            "city": "Pomona",
            "state": "CA"
        },
        {
            "zip_code": "90014",
            "distance": 11.157,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91746",
            "distance": 26.303,
            "city": "La Puente",
            "state": "CA"
        },
        {
            "zip_code": "90063",
            "distance": 14.868,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90013",
            "distance": 11.747,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90025",
            "distance": 1.786,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91733",
            "distance": 22.368,
            "city": "South El Monte",
            "state": "CA"
        },
        {
            "zip_code": "90006",
            "distance": 8.709,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90019",
            "distance": 6.181,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90213",
            "distance": 2.891,
            "city": "Beverly Hills",
            "state": "CA"
        },
        {
            "zip_code": "90074",
            "distance": 10.597,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90081",
            "distance": 10.597,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90084",
            "distance": 10.597,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90088",
            "distance": 10.597,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90053",
            "distance": 12.321,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91799",
            "distance": 39.71,
            "city": "Pomona",
            "state": "CA"
        },
        {
            "zip_code": "91758",
            "distance": 48.298,
            "city": "Ontario",
            "state": "CA"
        },
        {
            "zip_code": "90033",
            "distance": 13.328,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91755",
            "distance": 18.877,
            "city": "Monterey Park",
            "state": "CA"
        },
        {
            "zip_code": "90035",
            "distance": 3.696,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90017",
            "distance": 10.343,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90071",
            "distance": 10.864,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91754",
            "distance": 17.231,
            "city": "Monterey Park",
            "state": "CA"
        },
        {
            "zip_code": "90073",
            "distance": 1.395,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90067",
            "distance": 1.948,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90005",
            "distance": 7.882,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91762",
            "distance": 44.05,
            "city": "Ontario",
            "state": "CA"
        },
        {
            "zip_code": "90070",
            "distance": 7.681,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90075",
            "distance": 7.681,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90076",
            "distance": 7.681,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90189",
            "distance": 11.112,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90051",
            "distance": 11.668,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90030",
            "distance": 12.257,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90054",
            "distance": 12.257,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90086",
            "distance": 12.257,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90087",
            "distance": 12.257,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90099",
            "distance": 12.257,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91771",
            "distance": 20.839,
            "city": "Rosemead",
            "state": "CA"
        },
        {
            "zip_code": "91772",
            "distance": 20.839,
            "city": "Rosemead",
            "state": "CA"
        },
        {
            "zip_code": "91793",
            "distance": 29.984,
            "city": "West Covina",
            "state": "CA"
        },
        {
            "zip_code": "91769",
            "distance": 39.688,
            "city": "Pomona",
            "state": "CA"
        },
        {
            "zip_code": "91798",
            "distance": 47.722,
            "city": "Ontario",
            "state": "CA"
        },
        {
            "zip_code": "91743",
            "distance": 49.427,
            "city": "Guasti",
            "state": "CA"
        },
        {
            "zip_code": "91791",
            "distance": 31.555,
            "city": "West Covina",
            "state": "CA"
        },
        {
            "zip_code": "90057",
            "distance": 9.565,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90010",
            "distance": 7.339,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90212",
            "distance": 2.473,
            "city": "Beverly Hills",
            "state": "CA"
        },
        {
            "zip_code": "91768",
            "distance": 37.388,
            "city": "Pomona",
            "state": "CA"
        },
        {
            "zip_code": "90211",
            "distance": 3.503,
            "city": "Beverly Hills",
            "state": "CA"
        },
        {
            "zip_code": "91770",
            "distance": 20.565,
            "city": "Rosemead",
            "state": "CA"
        },
        {
            "zip_code": "90024",
            "distance": 0.621,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90012",
            "distance": 11.746,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90265",
            "distance": 23.056,
            "city": "Malibu",
            "state": "CA"
        },
        {
            "zip_code": "90020",
            "distance": 7.648,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91790",
            "distance": 28.991,
            "city": "West Covina",
            "state": "CA"
        },
        {
            "zip_code": "90209",
            "distance": 3.051,
            "city": "Beverly Hills",
            "state": "CA"
        },
        {
            "zip_code": "91734",
            "distance": 23.676,
            "city": "El Monte",
            "state": "CA"
        },
        {
            "zip_code": "91735",
            "distance": 24.234,
            "city": "El Monte",
            "state": "CA"
        },
        {
            "zip_code": "90036",
            "distance": 5.346,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90095",
            "distance": 0,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91763",
            "distance": 42.662,
            "city": "Montclair",
            "state": "CA"
        },
        {
            "zip_code": "90090",
            "distance": 11.609,
            "city": "Dodgertown",
            "state": "CA"
        },
        {
            "zip_code": "90048",
            "distance": 4.068,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91732",
            "distance": 24.495,
            "city": "El Monte",
            "state": "CA"
        },
        {
            "zip_code": "91764",
            "distance": 47.942,
            "city": "Ontario",
            "state": "CA"
        },
        {
            "zip_code": "91803",
            "distance": 17.02,
            "city": "Alhambra",
            "state": "CA"
        },
        {
            "zip_code": "90004",
            "distance": 7.615,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90032",
            "distance": 14.763,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91731",
            "distance": 22.893,
            "city": "El Monte",
            "state": "CA"
        },
        {
            "zip_code": "91899",
            "distance": 17.947,
            "city": "Alhambra",
            "state": "CA"
        },
        {
            "zip_code": "91797",
            "distance": 27.682,
            "city": "Pomona",
            "state": "CA"
        },
        {
            "zip_code": "90026",
            "distance": 10.38,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91724",
            "distance": 33.714,
            "city": "Covina",
            "state": "CA"
        },
        {
            "zip_code": "91767",
            "distance": 40.372,
            "city": "Pomona",
            "state": "CA"
        },
        {
            "zip_code": "91723",
            "distance": 31.885,
            "city": "Covina",
            "state": "CA"
        },
        {
            "zip_code": "90031",
            "distance": 13.579,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90272",
            "distance": 5.879,
            "city": "Pacific Palisades",
            "state": "CA"
        },
        {
            "zip_code": "90038",
            "distance": 6.859,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90029",
            "distance": 8.621,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90093",
            "distance": 6.621,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90072",
            "distance": 8.332,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91802",
            "distance": 18.571,
            "city": "Alhambra",
            "state": "CA"
        },
        {
            "zip_code": "91804",
            "distance": 18.571,
            "city": "Alhambra",
            "state": "CA"
        },
        {
            "zip_code": "91841",
            "distance": 18.571,
            "city": "Alhambra",
            "state": "CA"
        },
        {
            "zip_code": "91896",
            "distance": 18.571,
            "city": "Alhambra",
            "state": "CA"
        },
        {
            "zip_code": "91785",
            "distance": 45.987,
            "city": "Upland",
            "state": "CA"
        },
        {
            "zip_code": "91801",
            "distance": 18.149,
            "city": "Alhambra",
            "state": "CA"
        },
        {
            "zip_code": "91776",
            "distance": 19.981,
            "city": "San Gabriel",
            "state": "CA"
        },
        {
            "zip_code": "90049",
            "distance": 3.094,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90069",
            "distance": 3.871,
            "city": "West Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91722",
            "distance": 30.775,
            "city": "Covina",
            "state": "CA"
        },
        {
            "zip_code": "91706",
            "distance": 27.273,
            "city": "Baldwin Park",
            "state": "CA"
        },
        {
            "zip_code": "90028",
            "distance": 6.976,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90078",
            "distance": 7.356,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91778",
            "distance": 19.772,
            "city": "San Gabriel",
            "state": "CA"
        },
        {
            "zip_code": "90210",
            "distance": 2.604,
            "city": "Beverly Hills",
            "state": "CA"
        },
        {
            "zip_code": "91730",
            "distance": 49.517,
            "city": "Rancho Cucamonga",
            "state": "CA"
        },
        {
            "zip_code": "91780",
            "distance": 22.168,
            "city": "Temple City",
            "state": "CA"
        },
        {
            "zip_code": "91786",
            "distance": 44.781,
            "city": "Upland",
            "state": "CA"
        },
        {
            "zip_code": "93041",
            "distance": 37.62,
            "city": "Port Hueneme",
            "state": "CA"
        },
        {
            "zip_code": "90290",
            "distance": 10.186,
            "city": "Topanga",
            "state": "CA"
        },
        {
            "zip_code": "90046",
            "distance": 5.298,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90077",
            "distance": 2.651,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91030",
            "distance": 16.631,
            "city": "South Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91618",
            "distance": 5.486,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91031",
            "distance": 16.998,
            "city": "South Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91773",
            "distance": 36.327,
            "city": "San Dimas",
            "state": "CA"
        },
        {
            "zip_code": "90039",
            "distance": 10.829,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90065",
            "distance": 12.808,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "90042",
            "distance": 14.702,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91775",
            "distance": 20.553,
            "city": "San Gabriel",
            "state": "CA"
        },
        {
            "zip_code": "91740",
            "distance": 33.831,
            "city": "Glendora",
            "state": "CA"
        },
        {
            "zip_code": "91225",
            "distance": 11.582,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "90050",
            "distance": 14.334,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91189",
            "distance": 16.574,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91118",
            "distance": 20.506,
            "city": "San Marino",
            "state": "CA"
        },
        {
            "zip_code": "91077",
            "distance": 22.772,
            "city": "Arcadia",
            "state": "CA"
        },
        {
            "zip_code": "91108",
            "distance": 19.246,
            "city": "San Marino",
            "state": "CA"
        },
        {
            "zip_code": "91301",
            "distance": 18.386,
            "city": "Agoura Hills",
            "state": "CA"
        },
        {
            "zip_code": "91302",
            "distance": 13.503,
            "city": "Calabasas",
            "state": "CA"
        },
        {
            "zip_code": "90027",
            "distance": 9.3,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91711",
            "distance": 41.881,
            "city": "Claremont",
            "state": "CA"
        },
        {
            "zip_code": "91007",
            "distance": 22.993,
            "city": "Arcadia",
            "state": "CA"
        },
        {
            "zip_code": "90068",
            "distance": 7.593,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91184",
            "distance": 16.727,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91115",
            "distance": 17.268,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91125",
            "distance": 18.961,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91126",
            "distance": 18.961,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91017",
            "distance": 26.829,
            "city": "Monrovia",
            "state": "CA"
        },
        {
            "zip_code": "91009",
            "distance": 27.963,
            "city": "Duarte",
            "state": "CA"
        },
        {
            "zip_code": "91361",
            "distance": 25.861,
            "city": "Westlake Village",
            "state": "CA"
        },
        {
            "zip_code": "91204",
            "distance": 11.38,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91006",
            "distance": 24.282,
            "city": "Arcadia",
            "state": "CA"
        },
        {
            "zip_code": "91205",
            "distance": 12.177,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "90041",
            "distance": 14.258,
            "city": "Los Angeles",
            "state": "CA"
        },
        {
            "zip_code": "91701",
            "distance": 48.468,
            "city": "Rancho Cucamonga",
            "state": "CA"
        },
        {
            "zip_code": "91608",
            "distance": 7.07,
            "city": "Universal City",
            "state": "CA"
        },
        {
            "zip_code": "91106",
            "distance": 18.634,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91105",
            "distance": 16.519,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91363",
            "distance": 20.935,
            "city": "Thousand Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91376",
            "distance": 18.169,
            "city": "Agoura Hills",
            "state": "CA"
        },
        {
            "zip_code": "91614",
            "distance": 5.645,
            "city": "Studio City",
            "state": "CA"
        },
        {
            "zip_code": "91522",
            "distance": 8.043,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91209",
            "distance": 12.055,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91123",
            "distance": 17.442,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91124",
            "distance": 17.442,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91129",
            "distance": 17.442,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91102",
            "distance": 18.011,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91182",
            "distance": 18.011,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91188",
            "distance": 18.011,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91116",
            "distance": 18.549,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91117",
            "distance": 20.775,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91066",
            "distance": 24.685,
            "city": "Arcadia",
            "state": "CA"
        },
        {
            "zip_code": "91604",
            "distance": 5.609,
            "city": "Studio City",
            "state": "CA"
        },
        {
            "zip_code": "91784",
            "distance": 45.329,
            "city": "Upland",
            "state": "CA"
        },
        {
            "zip_code": "91010",
            "distance": 28.218,
            "city": "Duarte",
            "state": "CA"
        },
        {
            "zip_code": "91210",
            "distance": 11.826,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91101",
            "distance": 18.169,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91403",
            "distance": 5.369,
            "city": "Sherman Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91423",
            "distance": 5.381,
            "city": "Sherman Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91436",
            "distance": 6.031,
            "city": "Encino",
            "state": "CA"
        },
        {
            "zip_code": "93044",
            "distance": 43.054,
            "city": "Port Hueneme",
            "state": "CA"
        },
        {
            "zip_code": "91372",
            "distance": 12.491,
            "city": "Calabasas",
            "state": "CA"
        },
        {
            "zip_code": "91426",
            "distance": 6.64,
            "city": "Encino",
            "state": "CA"
        },
        {
            "zip_code": "91495",
            "distance": 5.447,
            "city": "Sherman Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91610",
            "distance": 6.873,
            "city": "Toluca Lake",
            "state": "CA"
        },
        {
            "zip_code": "91521",
            "distance": 8.931,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91110",
            "distance": 17.643,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91131",
            "distance": 17.643,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91191",
            "distance": 17.643,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91121",
            "distance": 20.943,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "93033",
            "distance": 39.514,
            "city": "Oxnard",
            "state": "CA"
        },
        {
            "zip_code": "91602",
            "distance": 6.997,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91737",
            "distance": 49.843,
            "city": "Rancho Cucamonga",
            "state": "CA"
        },
        {
            "zip_code": "91016",
            "distance": 25.956,
            "city": "Monrovia",
            "state": "CA"
        },
        {
            "zip_code": "91008",
            "distance": 27.755,
            "city": "Duarte",
            "state": "CA"
        },
        {
            "zip_code": "91203",
            "distance": 11.78,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91364",
            "distance": 10.291,
            "city": "Woodland Hills",
            "state": "CA"
        },
        {
            "zip_code": "91356",
            "distance": 8.317,
            "city": "Tarzana",
            "state": "CA"
        },
        {
            "zip_code": "91107",
            "distance": 21.265,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91741",
            "distance": 34.948,
            "city": "Glendora",
            "state": "CA"
        },
        {
            "zip_code": "91365",
            "distance": 10.848,
            "city": "Woodland Hills",
            "state": "CA"
        },
        {
            "zip_code": "91399",
            "distance": 10.848,
            "city": "Woodland Hills",
            "state": "CA"
        },
        {
            "zip_code": "91413",
            "distance": 6.143,
            "city": "Sherman Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91496",
            "distance": 6.143,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91617",
            "distance": 6.619,
            "city": "Valley Village",
            "state": "CA"
        },
        {
            "zip_code": "91603",
            "distance": 7.43,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91507",
            "distance": 8.532,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91523",
            "distance": 8.929,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91221",
            "distance": 11.174,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91222",
            "distance": 12.149,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91226",
            "distance": 14.711,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91109",
            "distance": 17.344,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91114",
            "distance": 18.948,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91025",
            "distance": 23.336,
            "city": "Sierra Madre",
            "state": "CA"
        },
        {
            "zip_code": "91185",
            "distance": 27.215,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91316",
            "distance": 7.41,
            "city": "Encino",
            "state": "CA"
        },
        {
            "zip_code": "91206",
            "distance": 14.515,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91104",
            "distance": 19.41,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91607",
            "distance": 6.991,
            "city": "Valley Village",
            "state": "CA"
        },
        {
            "zip_code": "91202",
            "distance": 12.093,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91024",
            "distance": 23.503,
            "city": "Sierra Madre",
            "state": "CA"
        },
        {
            "zip_code": "91601",
            "distance": 7.896,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91103",
            "distance": 17.316,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91506",
            "distance": 9.655,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "93034",
            "distance": 42.113,
            "city": "Oxnard",
            "state": "CA"
        },
        {
            "zip_code": "91470",
            "distance": 11.727,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91357",
            "distance": 8.769,
            "city": "Tarzana",
            "state": "CA"
        },
        {
            "zip_code": "91416",
            "distance": 7.812,
            "city": "Encino",
            "state": "CA"
        },
        {
            "zip_code": "91404",
            "distance": 6.87,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91408",
            "distance": 6.87,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91510",
            "distance": 9.043,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91199",
            "distance": 19.735,
            "city": "Pasadena",
            "state": "CA"
        },
        {
            "zip_code": "91201",
            "distance": 11.171,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "93043",
            "distance": 43.934,
            "city": "Port Hueneme Cbc Base",
            "state": "CA"
        },
        {
            "zip_code": "91505",
            "distance": 9,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91320",
            "distance": 29.574,
            "city": "Newbury Park",
            "state": "CA"
        },
        {
            "zip_code": "91502",
            "distance": 10.585,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91367",
            "distance": 12.264,
            "city": "Woodland Hills",
            "state": "CA"
        },
        {
            "zip_code": "91401",
            "distance": 7.443,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91411",
            "distance": 7.467,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91319",
            "distance": 27.715,
            "city": "Newbury Park",
            "state": "CA"
        },
        {
            "zip_code": "91358",
            "distance": 25.515,
            "city": "Thousand Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91611",
            "distance": 8.112,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91612",
            "distance": 8.112,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91616",
            "distance": 8.112,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91609",
            "distance": 8.352,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91503",
            "distance": 11.144,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91003",
            "distance": 19.438,
            "city": "Altadena",
            "state": "CA"
        },
        {
            "zip_code": "91750",
            "distance": 39.039,
            "city": "La Verne",
            "state": "CA"
        },
        {
            "zip_code": "91207",
            "distance": 12.954,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "93035",
            "distance": 45.349,
            "city": "Oxnard",
            "state": "CA"
        },
        {
            "zip_code": "91371",
            "distance": 10.894,
            "city": "Woodland Hills",
            "state": "CA"
        },
        {
            "zip_code": "91377",
            "distance": 20.084,
            "city": "Oak Park",
            "state": "CA"
        },
        {
            "zip_code": "91208",
            "distance": 14.093,
            "city": "Glendale",
            "state": "CA"
        },
        {
            "zip_code": "91606",
            "distance": 8.516,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91359",
            "distance": 23.041,
            "city": "Westlake Village",
            "state": "CA"
        },
        {
            "zip_code": "91407",
            "distance": 8.209,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91615",
            "distance": 8.754,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91508",
            "distance": 10.838,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91526",
            "distance": 10.838,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91362",
            "distance": 23.062,
            "city": "Thousand Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91001",
            "distance": 19.431,
            "city": "Altadena",
            "state": "CA"
        },
        {
            "zip_code": "91406",
            "distance": 9.008,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "93012",
            "distance": 32.554,
            "city": "Camarillo",
            "state": "CA"
        },
        {
            "zip_code": "91303",
            "distance": 12.581,
            "city": "Canoga Park",
            "state": "CA"
        },
        {
            "zip_code": "91405",
            "distance": 8.89,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "93032",
            "distance": 42.491,
            "city": "Oxnard",
            "state": "CA"
        },
        {
            "zip_code": "91305",
            "distance": 12.619,
            "city": "Canoga Park",
            "state": "CA"
        },
        {
            "zip_code": "91308",
            "distance": 12.229,
            "city": "West Hills",
            "state": "CA"
        },
        {
            "zip_code": "91396",
            "distance": 11.473,
            "city": "Winnetka",
            "state": "CA"
        },
        {
            "zip_code": "91337",
            "distance": 10.182,
            "city": "Reseda",
            "state": "CA"
        },
        {
            "zip_code": "91409",
            "distance": 9.287,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91410",
            "distance": 9.287,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91388",
            "distance": 9.026,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91482",
            "distance": 9.026,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91497",
            "distance": 9.026,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91499",
            "distance": 8.907,
            "city": "Van Nuys",
            "state": "CA"
        },
        {
            "zip_code": "91021",
            "distance": 15.573,
            "city": "Montrose",
            "state": "CA"
        },
        {
            "zip_code": "91012",
            "distance": 17.027,
            "city": "La Canada Flintridge",
            "state": "CA"
        },
        {
            "zip_code": "91335",
            "distance": 10.509,
            "city": "Reseda",
            "state": "CA"
        },
        {
            "zip_code": "91307",
            "distance": 15.497,
            "city": "West Hills",
            "state": "CA"
        },
        {
            "zip_code": "91501",
            "distance": 12.809,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "91504",
            "distance": 11.401,
            "city": "Burbank",
            "state": "CA"
        },
        {
            "zip_code": "93030",
            "distance": 42.79,
            "city": "Oxnard",
            "state": "CA"
        },
        {
            "zip_code": "91605",
            "distance": 9.714,
            "city": "North Hollywood",
            "state": "CA"
        },
        {
            "zip_code": "91306",
            "distance": 12.252,
            "city": "Winnetka",
            "state": "CA"
        },
        {
            "zip_code": "93031",
            "distance": 43.181,
            "city": "Oxnard",
            "state": "CA"
        },
        {
            "zip_code": "93011",
            "distance": 34.895,
            "city": "Camarillo",
            "state": "CA"
        },
        {
            "zip_code": "91309",
            "distance": 12.739,
            "city": "Canoga Park",
            "state": "CA"
        },
        {
            "zip_code": "91353",
            "distance": 10.715,
            "city": "Sun Valley",
            "state": "CA"
        },
        {
            "zip_code": "91020",
            "distance": 15.567,
            "city": "Montrose",
            "state": "CA"
        },
        {
            "zip_code": "91046",
            "distance": 15.087,
            "city": "Verdugo City",
            "state": "CA"
        },
        {
            "zip_code": "91360",
            "distance": 26.904,
            "city": "Thousand Oaks",
            "state": "CA"
        },
        {
            "zip_code": "91328",
            "distance": 11.409,
            "city": "Northridge",
            "state": "CA"
        },
        {
            "zip_code": "91393",
            "distance": 10.325,
            "city": "North Hills",
            "state": "CA"
        },
        {
            "zip_code": "91412",
            "distance": 10.283,
            "city": "Panorama City",
            "state": "CA"
        },
        {
            "zip_code": "91023",
            "distance": 22.679,
            "city": "Mount Wilson",
            "state": "CA"
        },
        {
            "zip_code": "91011",
            "distance": 17.161,
            "city": "La Canada Flintridge",
            "state": "CA"
        },
        {
            "zip_code": "91402",
            "distance": 10.451,
            "city": "Panorama City",
            "state": "CA"
        },
        {
            "zip_code": "91304",
            "distance": 15.12,
            "city": "Canoga Park",
            "state": "CA"
        },
        {
            "zip_code": "93010",
            "distance": 37.942,
            "city": "Camarillo",
            "state": "CA"
        },
        {
            "zip_code": "91313",
            "distance": 13.459,
            "city": "Chatsworth",
            "state": "CA"
        },
        {
            "zip_code": "91224",
            "distance": 15.587,
            "city": "La Crescenta",
            "state": "CA"
        },
        {
            "zip_code": "91352",
            "distance": 11.895,
            "city": "Sun Valley",
            "state": "CA"
        },
        {
            "zip_code": "91214",
            "distance": 15.919,
            "city": "La Crescenta",
            "state": "CA"
        },
        {
            "zip_code": "91325",
            "distance": 12.241,
            "city": "Northridge",
            "state": "CA"
        },
        {
            "zip_code": "91343",
            "distance": 11.729,
            "city": "North Hills",
            "state": "CA"
        },
        {
            "zip_code": "91324",
            "distance": 13.046,
            "city": "Northridge",
            "state": "CA"
        },
        {
            "zip_code": "93036",
            "distance": 44.039,
            "city": "Oxnard",
            "state": "CA"
        },
        {
            "zip_code": "91329",
            "distance": 12.668,
            "city": "Northridge",
            "state": "CA"
        },
        {
            "zip_code": "91334",
            "distance": 11.74,
            "city": "Pacoima",
            "state": "CA"
        },
        {
            "zip_code": "91330",
            "distance": 13.063,
            "city": "Northridge",
            "state": "CA"
        },
        {
            "zip_code": "93064",
            "distance": 19.1,
            "city": "Brandeis",
            "state": "CA"
        },
        {
            "zip_code": "93005",
            "distance": 44.969,
            "city": "Ventura",
            "state": "CA"
        },
        {
            "zip_code": "91395",
            "distance": 12.388,
            "city": "Mission Hills",
            "state": "CA"
        },
        {
            "zip_code": "91043",
            "distance": 15.154,
            "city": "Tujunga",
            "state": "CA"
        },
        {
            "zip_code": "91331",
            "distance": 12.791,
            "city": "Pacoima",
            "state": "CA"
        },
        {
            "zip_code": "93065",
            "distance": 22.956,
            "city": "Simi Valley",
            "state": "CA"
        },
        {
            "zip_code": "93009",
            "distance": 45.727,
            "city": "Ventura",
            "state": "CA"
        },
        {
            "zip_code": "93099",
            "distance": 21.846,
            "city": "Simi Valley",
            "state": "CA"
        },
        {
            "zip_code": "91394",
            "distance": 13.752,
            "city": "Granada Hills",
            "state": "CA"
        },
        {
            "zip_code": "91346",
            "distance": 13.079,
            "city": "Mission Hills",
            "state": "CA"
        },
        {
            "zip_code": "91333",
            "distance": 13.113,
            "city": "Pacoima",
            "state": "CA"
        },
        {
            "zip_code": "91041",
            "distance": 15.113,
            "city": "Sunland",
            "state": "CA"
        },
        {
            "zip_code": "91040",
            "distance": 14.546,
            "city": "Sunland",
            "state": "CA"
        },
        {
            "zip_code": "91759",
            "distance": 44.577,
            "city": "Mt Baldy",
            "state": "CA"
        },
        {
            "zip_code": "91345",
            "distance": 13.469,
            "city": "Mission Hills",
            "state": "CA"
        },
        {
            "zip_code": "93002",
            "distance": 49.753,
            "city": "Ventura",
            "state": "CA"
        },
        {
            "zip_code": "93094",
            "distance": 24.11,
            "city": "Simi Valley",
            "state": "CA"
        },
        {
            "zip_code": "93093",
            "distance": 20.508,
            "city": "Simi Valley",
            "state": "CA"
        },
        {
            "zip_code": "91327",
            "distance": 15.024,
            "city": "Northridge",
            "state": "CA"
        },
        {
            "zip_code": "93004",
            "distance": 43.686,
            "city": "Ventura",
            "state": "CA"
        },
        {
            "zip_code": "93020",
            "distance": 28.826,
            "city": "Moorpark",
            "state": "CA"
        },
        {
            "zip_code": "93062",
            "distance": 22.245,
            "city": "Simi Valley",
            "state": "CA"
        },
        {
            "zip_code": "91341",
            "distance": 14.427,
            "city": "San Fernando",
            "state": "CA"
        },
        {
            "zip_code": "91702",
            "distance": 36.037,
            "city": "Azusa",
            "state": "CA"
        },
        {
            "zip_code": "91326",
            "distance": 15.884,
            "city": "Porter Ranch",
            "state": "CA"
        },
        {
            "zip_code": "93003",
            "distance": 46.929,
            "city": "Ventura",
            "state": "CA"
        },
        {
            "zip_code": "91340",
            "distance": 14.897,
            "city": "San Fernando",
            "state": "CA"
        },
        {
            "zip_code": "93007",
            "distance": 43.116,
            "city": "Ventura",
            "state": "CA"
        },
        {
            "zip_code": "91311",
            "distance": 17.845,
            "city": "Chatsworth",
            "state": "CA"
        },
        {
            "zip_code": "91344",
            "distance": 15.858,
            "city": "Granada Hills",
            "state": "CA"
        },
        {
            "zip_code": "93021",
            "distance": 30.247,
            "city": "Moorpark",
            "state": "CA"
        },
        {
            "zip_code": "93066",
            "distance": 36.206,
            "city": "Somis",
            "state": "CA"
        },
        {
            "zip_code": "91392",
            "distance": 15.827,
            "city": "Sylmar",
            "state": "CA"
        },
        {
            "zip_code": "93063",
            "distance": 21.516,
            "city": "Simi Valley",
            "state": "CA"
        },
        {
            "zip_code": "91042",
            "distance": 20.993,
            "city": "Tujunga",
            "state": "CA"
        },
        {
            "zip_code": "91342",
            "distance": 17.989,
            "city": "Sylmar",
            "state": "CA"
        },
        {
            "zip_code": "93061",
            "distance": 39.633,
            "city": "Santa Paula",
            "state": "CA"
        },
        {
            "zip_code": "91383",
            "distance": 19.956,
            "city": "Santa Clarita",
            "state": "CA"
        },
        {
            "zip_code": "91321",
            "distance": 20.677,
            "city": "Newhall",
            "state": "CA"
        },
        {
            "zip_code": "91385",
            "distance": 22.345,
            "city": "Valencia",
            "state": "CA"
        },
        {
            "zip_code": "91322",
            "distance": 21.899,
            "city": "Newhall",
            "state": "CA"
        },
        {
            "zip_code": "91381",
            "distance": 24.594,
            "city": "Stevenson Ranch",
            "state": "CA"
        },
        {
            "zip_code": "93016",
            "distance": 34.569,
            "city": "Fillmore",
            "state": "CA"
        },
        {
            "zip_code": "93060",
            "distance": 43.681,
            "city": "Santa Paula",
            "state": "CA"
        },
        {
            "zip_code": "91387",
            "distance": 23.344,
            "city": "Canyon Country",
            "state": "CA"
        },
        {
            "zip_code": "93563",
            "distance": 44.949,
            "city": "Valyermo",
            "state": "CA"
        },
        {
            "zip_code": "93015",
            "distance": 34.678,
            "city": "Fillmore",
            "state": "CA"
        },
        {
            "zip_code": "93553",
            "distance": 38.231,
            "city": "Pearblossom",
            "state": "CA"
        },
        {
            "zip_code": "93550",
            "distance": 29.608,
            "city": "Palmdale",
            "state": "CA"
        },
        {
            "zip_code": "91382",
            "distance": 23.714,
            "city": "Santa Clarita",
            "state": "CA"
        },
        {
            "zip_code": "91386",
            "distance": 23.411,
            "city": "Canyon Country",
            "state": "CA"
        },
        {
            "zip_code": "91355",
            "distance": 27.952,
            "city": "Valencia",
            "state": "CA"
        },
        {
            "zip_code": "91350",
            "distance": 25.759,
            "city": "Santa Clarita",
            "state": "CA"
        },
        {
            "zip_code": "91351",
            "distance": 25.591,
            "city": "Canyon Country",
            "state": "CA"
        },
        {
            "zip_code": "93510",
            "distance": 28.99,
            "city": "Acton",
            "state": "CA"
        },
        {
            "zip_code": "91354",
            "distance": 27.974,
            "city": "Valencia",
            "state": "CA"
        },
        {
            "zip_code": "93040",
            "distance": 34.373,
            "city": "Piru",
            "state": "CA"
        },
        {
            "zip_code": "93543",
            "distance": 38.694,
            "city": "Littlerock",
            "state": "CA"
        },
        {
            "zip_code": "91310",
            "distance": 30.46,
            "city": "Castaic",
            "state": "CA"
        },
        {
            "zip_code": "91380",
            "distance": 29.094,
            "city": "Santa Clarita",
            "state": "CA"
        },
        {
            "zip_code": "93544",
            "distance": 48.966,
            "city": "Llano",
            "state": "CA"
        },
        {
            "zip_code": "91384",
            "distance": 33.433,
            "city": "Castaic",
            "state": "CA"
        },
        {
            "zip_code": "91390",
            "distance": 32.802,
            "city": "Santa Clarita",
            "state": "CA"
        },
        {
            "zip_code": "93599",
            "distance": 39.366,
            "city": "Palmdale",
            "state": "CA"
        },
        {
            "zip_code": "93590",
            "distance": 40.232,
            "city": "Palmdale",
            "state": "CA"
        },
        {
            "zip_code": "93552",
            "distance": 42.024,
            "city": "Palmdale",
            "state": "CA"
        },
        {
            "zip_code": "93551",
            "distance": 38.626,
            "city": "Palmdale",
            "state": "CA"
        },
        {
            "zip_code": "93586",
            "distance": 41.499,
            "city": "Lancaster",
            "state": "CA"
        },
        {
            "zip_code": "93539",
            "distance": 45.935,
            "city": "Lancaster",
            "state": "CA"
        },
        {
            "zip_code": "93532",
            "distance": 43.049,
            "city": "Lake Hughes",
            "state": "CA"
        },
        {
            "zip_code": "93584",
            "distance": 46.339,
            "city": "Lancaster",
            "state": "CA"
        },
        {
            "zip_code": "93534",
            "distance": 47.356,
            "city": "Lancaster",
            "state": "CA"
        },
        {
            "zip_code": "93536",
            "distance": 46.91,
            "city": "Lancaster",
            "state": "CA"
        }
    ],
  "SMASH Morehouse": [
        {
            "zip_code": "30295",
            "distance": 46.642,
            "city": "Zebulon",
            "state": "GA"
        },
        {
            "zip_code": "30206",
            "distance": 45.732,
            "city": "Concord",
            "state": "GA"
        },
        {
            "zip_code": "30218",
            "distance": 44.314,
            "city": "Gay",
            "state": "GA"
        },
        {
            "zip_code": "30257",
            "distance": 44.737,
            "city": "Milner",
            "state": "GA"
        },
        {
            "zip_code": "30230",
            "distance": 49.708,
            "city": "Hogansville",
            "state": "GA"
        },
        {
            "zip_code": "30292",
            "distance": 40.766,
            "city": "Williamson",
            "state": "GA"
        },
        {
            "zip_code": "30266",
            "distance": 41.915,
            "city": "Orchard Hill",
            "state": "GA"
        },
        {
            "zip_code": "30251",
            "distance": 41.579,
            "city": "Luthersville",
            "state": "GA"
        },
        {
            "zip_code": "30224",
            "distance": 39.792,
            "city": "Griffin",
            "state": "GA"
        },
        {
            "zip_code": "30229",
            "distance": 37.981,
            "city": "Haralson",
            "state": "GA"
        },
        {
            "zip_code": "30220",
            "distance": 43.129,
            "city": "Grantville",
            "state": "GA"
        },
        {
            "zip_code": "30216",
            "distance": 48.255,
            "city": "Flovilla",
            "state": "GA"
        },
        {
            "zip_code": "30276",
            "distance": 35.047,
            "city": "Senoia",
            "state": "GA"
        },
        {
            "zip_code": "30259",
            "distance": 38.238,
            "city": "Moreland",
            "state": "GA"
        },
        {
            "zip_code": "30205",
            "distance": 33.957,
            "city": "Brooks",
            "state": "GA"
        },
        {
            "zip_code": "30212",
            "distance": 34.96,
            "city": "Experiment",
            "state": "GA"
        },
        {
            "zip_code": "30223",
            "distance": 33.559,
            "city": "Griffin",
            "state": "GA"
        },
        {
            "zip_code": "30233",
            "distance": 41.754,
            "city": "Jackson",
            "state": "GA"
        },
        {
            "zip_code": "30289",
            "distance": 32.202,
            "city": "Turin",
            "state": "GA"
        },
        {
            "zip_code": "30234",
            "distance": 37.833,
            "city": "Jenkinsburg",
            "state": "GA"
        },
        {
            "zip_code": "30284",
            "distance": 29.817,
            "city": "Sunny Side",
            "state": "GA"
        },
        {
            "zip_code": "30248",
            "distance": 33.753,
            "city": "Locust Grove",
            "state": "GA"
        },
        {
            "zip_code": "30264",
            "distance": 33.439,
            "city": "Newnan",
            "state": "GA"
        },
        {
            "zip_code": "30271",
            "distance": 33.439,
            "city": "Newnan",
            "state": "GA"
        },
        {
            "zip_code": "30277",
            "distance": 29.222,
            "city": "Sharpsburg",
            "state": "GA"
        },
        {
            "zip_code": "31169",
            "distance": 33.23,
            "city": "Peachtree City",
            "state": "GA"
        },
        {
            "zip_code": "30263",
            "distance": 35.417,
            "city": "Newnan",
            "state": "GA"
        },
        {
            "zip_code": "30215",
            "distance": 25.322,
            "city": "Fayetteville",
            "state": "GA"
        },
        {
            "zip_code": "30269",
            "distance": 26.496,
            "city": "Peachtree City",
            "state": "GA"
        },
        {
            "zip_code": "30270",
            "distance": 26.529,
            "city": "Peachtree City",
            "state": "GA"
        },
        {
            "zip_code": "30228",
            "distance": 25.458,
            "city": "Hampton",
            "state": "GA"
        },
        {
            "zip_code": "30265",
            "distance": 28.45,
            "city": "Newnan",
            "state": "GA"
        },
        {
            "zip_code": "30170",
            "distance": 48.123,
            "city": "Roopville",
            "state": "GA"
        },
        {
            "zip_code": "30250",
            "distance": 23.198,
            "city": "Lovejoy",
            "state": "GA"
        },
        {
            "zip_code": "30275",
            "distance": 33.713,
            "city": "Sargent",
            "state": "GA"
        },
        {
            "zip_code": "30253",
            "distance": 25.682,
            "city": "Mcdonough",
            "state": "GA"
        },
        {
            "zip_code": "30252",
            "distance": 29.181,
            "city": "Mcdonough",
            "state": "GA"
        },
        {
            "zip_code": "30290",
            "distance": 21.437,
            "city": "Tyrone",
            "state": "GA"
        },
        {
            "zip_code": "30214",
            "distance": 18.714,
            "city": "Fayetteville",
            "state": "GA"
        },
        {
            "zip_code": "30238",
            "distance": 18.517,
            "city": "Jonesboro",
            "state": "GA"
        },
        {
            "zip_code": "30055",
            "distance": 43.179,
            "city": "Mansfield",
            "state": "GA"
        },
        {
            "zip_code": "30056",
            "distance": 47.858,
            "city": "Newborn",
            "state": "GA"
        },
        {
            "zip_code": "30016",
            "distance": 33.385,
            "city": "Covington",
            "state": "GA"
        },
        {
            "zip_code": "30185",
            "distance": 32.42,
            "city": "Whitesburg",
            "state": "GA"
        },
        {
            "zip_code": "30237",
            "distance": 17.08,
            "city": "Jonesboro",
            "state": "GA"
        },
        {
            "zip_code": "30236",
            "distance": 17.232,
            "city": "Jonesboro",
            "state": "GA"
        },
        {
            "zip_code": "30116",
            "distance": 36.084,
            "city": "Carrollton",
            "state": "GA"
        },
        {
            "zip_code": "30268",
            "distance": 22.18,
            "city": "Palmetto",
            "state": "GA"
        },
        {
            "zip_code": "30274",
            "distance": 14.151,
            "city": "Riverdale",
            "state": "GA"
        },
        {
            "zip_code": "30296",
            "distance": 13.442,
            "city": "Riverdale",
            "state": "GA"
        },
        {
            "zip_code": "30281",
            "distance": 18.989,
            "city": "Stockbridge",
            "state": "GA"
        },
        {
            "zip_code": "30374",
            "distance": 13.188,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30287",
            "distance": 14.005,
            "city": "Morrow",
            "state": "GA"
        },
        {
            "zip_code": "30118",
            "distance": 40.68,
            "city": "Carrollton",
            "state": "GA"
        },
        {
            "zip_code": "30070",
            "distance": 33.397,
            "city": "Porterdale",
            "state": "GA"
        },
        {
            "zip_code": "30291",
            "distance": 14.102,
            "city": "Union City",
            "state": "GA"
        },
        {
            "zip_code": "30112",
            "distance": 39.231,
            "city": "Carrollton",
            "state": "GA"
        },
        {
            "zip_code": "30119",
            "distance": 38.668,
            "city": "Carrollton",
            "state": "GA"
        },
        {
            "zip_code": "30014",
            "distance": 37.108,
            "city": "Covington",
            "state": "GA"
        },
        {
            "zip_code": "30117",
            "distance": 42.051,
            "city": "Carrollton",
            "state": "GA"
        },
        {
            "zip_code": "30273",
            "distance": 15.162,
            "city": "Rex",
            "state": "GA"
        },
        {
            "zip_code": "30260",
            "distance": 13.383,
            "city": "Morrow",
            "state": "GA"
        },
        {
            "zip_code": "30213",
            "distance": 16.538,
            "city": "Fairburn",
            "state": "GA"
        },
        {
            "zip_code": "30015",
            "distance": 35.196,
            "city": "Covington",
            "state": "GA"
        },
        {
            "zip_code": "30298",
            "distance": 11.233,
            "city": "Forest Park",
            "state": "GA"
        },
        {
            "zip_code": "30094",
            "distance": 24.06,
            "city": "Conyers",
            "state": "GA"
        },
        {
            "zip_code": "30297",
            "distance": 10.365,
            "city": "Forest Park",
            "state": "GA"
        },
        {
            "zip_code": "30663",
            "distance": 48.789,
            "city": "Rutledge",
            "state": "GA"
        },
        {
            "zip_code": "30272",
            "distance": 11.048,
            "city": "Red Oak",
            "state": "GA"
        },
        {
            "zip_code": "30349",
            "distance": 10.72,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30150",
            "distance": 43.878,
            "city": "Mount Zion",
            "state": "GA"
        },
        {
            "zip_code": "30320",
            "distance": 8.817,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30294",
            "distance": 12.496,
            "city": "Ellenwood",
            "state": "GA"
        },
        {
            "zip_code": "30304",
            "distance": 8.481,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30380",
            "distance": 8.481,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30386",
            "distance": 8.481,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30396",
            "distance": 8.481,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30398",
            "distance": 8.481,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30049",
            "distance": 12.817,
            "city": "Lawrenceville",
            "state": "GA"
        },
        {
            "zip_code": "30337",
            "distance": 8.179,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30013",
            "distance": 27.564,
            "city": "Conyers",
            "state": "GA"
        },
        {
            "zip_code": "30109",
            "distance": 40.796,
            "city": "Bowdon Junction",
            "state": "GA"
        },
        {
            "zip_code": "30288",
            "distance": 9.418,
            "city": "Conley",
            "state": "GA"
        },
        {
            "zip_code": "30182",
            "distance": 47.452,
            "city": "Waco",
            "state": "GA"
        },
        {
            "zip_code": "30025",
            "distance": 42.865,
            "city": "Social Circle",
            "state": "GA"
        },
        {
            "zip_code": "30354",
            "distance": 7.13,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30187",
            "distance": 24.73,
            "city": "Winston",
            "state": "GA"
        },
        {
            "zip_code": "30038",
            "distance": 17.935,
            "city": "Lithonia",
            "state": "GA"
        },
        {
            "zip_code": "30364",
            "distance": 6.264,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30135",
            "distance": 18.367,
            "city": "Douglasville",
            "state": "GA"
        },
        {
            "zip_code": "30054",
            "distance": 32.728,
            "city": "Oxford",
            "state": "GA"
        },
        {
            "zip_code": "30344",
            "distance": 5.85,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30034",
            "distance": 11.5,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30330",
            "distance": 3.981,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30073",
            "distance": 11.2,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30315",
            "distance": 4.747,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30331",
            "distance": 7.294,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30018",
            "distance": 36.462,
            "city": "Jersey",
            "state": "GA"
        },
        {
            "zip_code": "30316",
            "distance": 6.582,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30180",
            "distance": 28.057,
            "city": "Villa Rica",
            "state": "GA"
        },
        {
            "zip_code": "30012",
            "distance": 24.843,
            "city": "Conyers",
            "state": "GA"
        },
        {
            "zip_code": "31136",
            "distance": 8.881,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30311",
            "distance": 3.447,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30035",
            "distance": 13.3,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30310",
            "distance": 2.172,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30074",
            "distance": 16.34,
            "city": "Redan",
            "state": "GA"
        },
        {
            "zip_code": "30336",
            "distance": 7.881,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30133",
            "distance": 17.717,
            "city": "Douglasville",
            "state": "GA"
        },
        {
            "zip_code": "30154",
            "distance": 17.717,
            "city": "Douglasville",
            "state": "GA"
        },
        {
            "zip_code": "30379",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30387",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30389",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30390",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30399",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31120",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31197",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31198",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31199",
            "distance": 3.233,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30058",
            "distance": 18.603,
            "city": "Lithonia",
            "state": "GA"
        },
        {
            "zip_code": "30032",
            "distance": 9.715,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30110",
            "distance": 40.43,
            "city": "Bremen",
            "state": "GA"
        },
        {
            "zip_code": "30312",
            "distance": 3.377,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30317",
            "distance": 6.747,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30334",
            "distance": 2.637,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30302",
            "distance": 3.041,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30321",
            "distance": 3.041,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30343",
            "distance": 3.041,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30353",
            "distance": 3.041,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30370",
            "distance": 3.041,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30392",
            "distance": 3.041,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30394",
            "distance": 3.041,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30303",
            "distance": 2.454,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30088",
            "distance": 14.351,
            "city": "Stone Mountain",
            "state": "GA"
        },
        {
            "zip_code": "30314",
            "distance": 0,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30358",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30362",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30368",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30371",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30377",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30378",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30385",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30388",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31106",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31107",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31119",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31126",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31131",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31139",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31141",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31145",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31146",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31150",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31156",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31192",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31193",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31195",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31196",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "39901",
            "distance": 0.711,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30313",
            "distance": 2.064,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30176",
            "distance": 49.897,
            "city": "Tallapoosa",
            "state": "GA"
        },
        {
            "zip_code": "30122",
            "distance": 12.03,
            "city": "Lithia Springs",
            "state": "GA"
        },
        {
            "zip_code": "30375",
            "distance": 3.116,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30031",
            "distance": 8.207,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30036",
            "distance": 8.207,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30037",
            "distance": 8.207,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30308",
            "distance": 3.232,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30307",
            "distance": 5.737,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30030",
            "distance": 8.222,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30002",
            "distance": 9.868,
            "city": "Avondale Estates",
            "state": "GA"
        },
        {
            "zip_code": "30134",
            "distance": 20.089,
            "city": "Douglasville",
            "state": "GA"
        },
        {
            "zip_code": "30332",
            "distance": 2.13,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30641",
            "distance": 49.319,
            "city": "Good Hope",
            "state": "GA"
        },
        {
            "zip_code": "30179",
            "distance": 33.436,
            "city": "Temple",
            "state": "GA"
        },
        {
            "zip_code": "30361",
            "distance": 3.371,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30655",
            "distance": 42.32,
            "city": "Monroe",
            "state": "GA"
        },
        {
            "zip_code": "30168",
            "distance": 9.129,
            "city": "Austell",
            "state": "GA"
        },
        {
            "zip_code": "30306",
            "distance": 5.132,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30325",
            "distance": 2.288,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "31191",
            "distance": 2.288,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30357",
            "distance": 3.74,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30333",
            "distance": 6.828,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30363",
            "distance": 2.995,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30079",
            "distance": 10.316,
            "city": "Scottdale",
            "state": "GA"
        },
        {
            "zip_code": "30072",
            "distance": 13.183,
            "city": "Pine Lake",
            "state": "GA"
        },
        {
            "zip_code": "30318",
            "distance": 2.558,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30322",
            "distance": 6.577,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30083",
            "distance": 13.737,
            "city": "Stone Mountain",
            "state": "GA"
        },
        {
            "zip_code": "30309",
            "distance": 3.955,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30039",
            "distance": 22.957,
            "city": "Snellville",
            "state": "GA"
        },
        {
            "zip_code": "30369",
            "distance": 3.647,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30086",
            "distance": 15.353,
            "city": "Stone Mountain",
            "state": "GA"
        },
        {
            "zip_code": "30087",
            "distance": 17.853,
            "city": "Stone Mountain",
            "state": "GA"
        },
        {
            "zip_code": "30021",
            "distance": 11.695,
            "city": "Clarkston",
            "state": "GA"
        },
        {
            "zip_code": "30376",
            "distance": 5.938,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30033",
            "distance": 9.336,
            "city": "Decatur",
            "state": "GA"
        },
        {
            "zip_code": "30126",
            "distance": 8.024,
            "city": "Mableton",
            "state": "GA"
        },
        {
            "zip_code": "30052",
            "distance": 31.183,
            "city": "Loganville",
            "state": "GA"
        },
        {
            "zip_code": "30324",
            "distance": 5.974,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30111",
            "distance": 13.224,
            "city": "Clarkdale",
            "state": "GA"
        },
        {
            "zip_code": "30347",
            "distance": 7.272,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30359",
            "distance": 7.757,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30329",
            "distance": 7.926,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30348",
            "distance": 5.831,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30355",
            "distance": 6.498,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30305",
            "distance": 5.933,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30106",
            "distance": 12.579,
            "city": "Austell",
            "state": "GA"
        },
        {
            "zip_code": "30326",
            "distance": 7.463,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30301",
            "distance": 6.834,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30085",
            "distance": 13.745,
            "city": "Tucker",
            "state": "GA"
        },
        {
            "zip_code": "30113",
            "distance": 44.84,
            "city": "Buchanan",
            "state": "GA"
        },
        {
            "zip_code": "30345",
            "distance": 10.719,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30084",
            "distance": 14.08,
            "city": "Tucker",
            "state": "GA"
        },
        {
            "zip_code": "30082",
            "distance": 8.99,
            "city": "Smyrna",
            "state": "GA"
        },
        {
            "zip_code": "30081",
            "distance": 8.37,
            "city": "Smyrna",
            "state": "GA"
        },
        {
            "zip_code": "30141",
            "distance": 20.636,
            "city": "Hiram",
            "state": "GA"
        },
        {
            "zip_code": "30078",
            "distance": 24.832,
            "city": "Snellville",
            "state": "GA"
        },
        {
            "zip_code": "30656",
            "distance": 41.746,
            "city": "Monroe",
            "state": "GA"
        },
        {
            "zip_code": "30327",
            "distance": 7.794,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30080",
            "distance": 8.635,
            "city": "Smyrna",
            "state": "GA"
        },
        {
            "zip_code": "30047",
            "distance": 19.98,
            "city": "Lilburn",
            "state": "GA"
        },
        {
            "zip_code": "30127",
            "distance": 17.095,
            "city": "Powder Springs",
            "state": "GA"
        },
        {
            "zip_code": "30319",
            "distance": 9.907,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30339",
            "distance": 8.378,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30140",
            "distance": 45.458,
            "city": "Felton",
            "state": "GA"
        },
        {
            "zip_code": "30366",
            "distance": 11.752,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30048",
            "distance": 19.287,
            "city": "Lilburn",
            "state": "GA"
        },
        {
            "zip_code": "30342",
            "distance": 9.205,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30157",
            "distance": 26.711,
            "city": "Dallas",
            "state": "GA"
        },
        {
            "zip_code": "30341",
            "distance": 12.202,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30384",
            "distance": 9.205,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30017",
            "distance": 28.52,
            "city": "Grayson",
            "state": "GA"
        },
        {
            "zip_code": "30008",
            "distance": 13.243,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30340",
            "distance": 14.14,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30093",
            "distance": 17.971,
            "city": "Norcross",
            "state": "GA"
        },
        {
            "zip_code": "30044",
            "distance": 23.916,
            "city": "Lawrenceville",
            "state": "GA"
        },
        {
            "zip_code": "30346",
            "distance": 12.702,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30060",
            "distance": 13.249,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30620",
            "distance": 40.45,
            "city": "Bethlehem",
            "state": "GA"
        },
        {
            "zip_code": "30328",
            "distance": 12.376,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30360",
            "distance": 15.246,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30067",
            "distance": 12.328,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30045",
            "distance": 31.494,
            "city": "Lawrenceville",
            "state": "GA"
        },
        {
            "zip_code": "30356",
            "distance": 13.897,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30003",
            "distance": 18.335,
            "city": "Norcross",
            "state": "GA"
        },
        {
            "zip_code": "30010",
            "distance": 18.335,
            "city": "Norcross",
            "state": "GA"
        },
        {
            "zip_code": "30091",
            "distance": 18.335,
            "city": "Norcross",
            "state": "GA"
        },
        {
            "zip_code": "30042",
            "distance": 28.34,
            "city": "Lawrenceville",
            "state": "GA"
        },
        {
            "zip_code": "30064",
            "distance": 16.234,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30071",
            "distance": 18.105,
            "city": "Norcross",
            "state": "GA"
        },
        {
            "zip_code": "30338",
            "distance": 14.582,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30046",
            "distance": 28.316,
            "city": "Lawrenceville",
            "state": "GA"
        },
        {
            "zip_code": "30006",
            "distance": 14.66,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30007",
            "distance": 14.66,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30061",
            "distance": 14.66,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30063",
            "distance": 14.66,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30065",
            "distance": 14.66,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30069",
            "distance": 14.66,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30090",
            "distance": 14.66,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30153",
            "distance": 38.34,
            "city": "Rockmart",
            "state": "GA"
        },
        {
            "zip_code": "30068",
            "distance": 14.544,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30092",
            "distance": 18.759,
            "city": "Norcross",
            "state": "GA"
        },
        {
            "zip_code": "30096",
            "distance": 22.257,
            "city": "Duluth",
            "state": "GA"
        },
        {
            "zip_code": "30019",
            "distance": 34.878,
            "city": "Dacula",
            "state": "GA"
        },
        {
            "zip_code": "30350",
            "distance": 16.459,
            "city": "Atlanta",
            "state": "GA"
        },
        {
            "zip_code": "30132",
            "distance": 29.239,
            "city": "Dallas",
            "state": "GA"
        },
        {
            "zip_code": "30152",
            "distance": 20.161,
            "city": "Kennesaw",
            "state": "GA"
        },
        {
            "zip_code": "30156",
            "distance": 20.342,
            "city": "Kennesaw",
            "state": "GA"
        },
        {
            "zip_code": "30160",
            "distance": 20.342,
            "city": "Kennesaw",
            "state": "GA"
        },
        {
            "zip_code": "30680",
            "distance": 45.121,
            "city": "Winder",
            "state": "GA"
        },
        {
            "zip_code": "30043",
            "distance": 29.447,
            "city": "Lawrenceville",
            "state": "GA"
        },
        {
            "zip_code": "30026",
            "distance": 23.304,
            "city": "North Metro",
            "state": "GA"
        },
        {
            "zip_code": "30029",
            "distance": 23.304,
            "city": "North Metro",
            "state": "GA"
        },
        {
            "zip_code": "30095",
            "distance": 23.304,
            "city": "Duluth",
            "state": "GA"
        },
        {
            "zip_code": "30098",
            "distance": 23.304,
            "city": "Duluth",
            "state": "GA"
        },
        {
            "zip_code": "30099",
            "distance": 23.304,
            "city": "Duluth",
            "state": "GA"
        },
        {
            "zip_code": "30062",
            "distance": 17.262,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30011",
            "distance": 38.656,
            "city": "Auburn",
            "state": "GA"
        },
        {
            "zip_code": "31144",
            "distance": 20.797,
            "city": "Kennesaw",
            "state": "GA"
        },
        {
            "zip_code": "30097",
            "distance": 24.784,
            "city": "Duluth",
            "state": "GA"
        },
        {
            "zip_code": "30076",
            "distance": 19.96,
            "city": "Roswell",
            "state": "GA"
        },
        {
            "zip_code": "30022",
            "distance": 21.813,
            "city": "Alpharetta",
            "state": "GA"
        },
        {
            "zip_code": "30077",
            "distance": 19.402,
            "city": "Roswell",
            "state": "GA"
        },
        {
            "zip_code": "30066",
            "distance": 19.439,
            "city": "Marietta",
            "state": "GA"
        },
        {
            "zip_code": "30101",
            "distance": 24.796,
            "city": "Acworth",
            "state": "GA"
        },
        {
            "zip_code": "30144",
            "distance": 21.334,
            "city": "Kennesaw",
            "state": "GA"
        },
        {
            "zip_code": "30075",
            "distance": 20.693,
            "city": "Roswell",
            "state": "GA"
        },
        {
            "zip_code": "30023",
            "distance": 22.87,
            "city": "Alpharetta",
            "state": "GA"
        },
        {
            "zip_code": "30024",
            "distance": 28.786,
            "city": "Suwanee",
            "state": "GA"
        },
        {
            "zip_code": "30009",
            "distance": 23.379,
            "city": "Alpharetta",
            "state": "GA"
        },
        {
            "zip_code": "30104",
            "distance": 42.433,
            "city": "Aragon",
            "state": "GA"
        },
        {
            "zip_code": "30519",
            "distance": 36.042,
            "city": "Buford",
            "state": "GA"
        },
        {
            "zip_code": "30005",
            "distance": 26.004,
            "city": "Alpharetta",
            "state": "GA"
        },
        {
            "zip_code": "30548",
            "distance": 44.536,
            "city": "Hoschton",
            "state": "GA"
        },
        {
            "zip_code": "30178",
            "distance": 38.708,
            "city": "Taylorsville",
            "state": "GA"
        },
        {
            "zip_code": "30515",
            "distance": 35.155,
            "city": "Buford",
            "state": "GA"
        },
        {
            "zip_code": "30102",
            "distance": 26.91,
            "city": "Acworth",
            "state": "GA"
        },
        {
            "zip_code": "30188",
            "distance": 25.326,
            "city": "Woodstock",
            "state": "GA"
        },
        {
            "zip_code": "30189",
            "distance": 26.549,
            "city": "Woodstock",
            "state": "GA"
        },
        {
            "zip_code": "30137",
            "distance": 31.685,
            "city": "Emerson",
            "state": "GA"
        },
        {
            "zip_code": "30517",
            "distance": 44.581,
            "city": "Braselton",
            "state": "GA"
        },
        {
            "zip_code": "30518",
            "distance": 34.703,
            "city": "Buford",
            "state": "GA"
        },
        {
            "zip_code": "30173",
            "distance": 48.813,
            "city": "Silver Creek",
            "state": "GA"
        },
        {
            "zip_code": "30169",
            "distance": 27.488,
            "city": "Canton",
            "state": "GA"
        },
        {
            "zip_code": "30004",
            "distance": 27.99,
            "city": "Alpharetta",
            "state": "GA"
        },
        {
            "zip_code": "30120",
            "distance": 37.187,
            "city": "Cartersville",
            "state": "GA"
        },
        {
            "zip_code": "30142",
            "distance": 28.687,
            "city": "Holly Springs",
            "state": "GA"
        },
        {
            "zip_code": "30542",
            "distance": 41.745,
            "city": "Flowery Branch",
            "state": "GA"
        },
        {
            "zip_code": "30502",
            "distance": 44.779,
            "city": "Chestnut Mountain",
            "state": "GA"
        },
        {
            "zip_code": "30115",
            "distance": 30.903,
            "city": "Canton",
            "state": "GA"
        },
        {
            "zip_code": "30041",
            "distance": 36.266,
            "city": "Cumming",
            "state": "GA"
        },
        {
            "zip_code": "30121",
            "distance": 36.973,
            "city": "Cartersville",
            "state": "GA"
        },
        {
            "zip_code": "30146",
            "distance": 31.262,
            "city": "Lebanon",
            "state": "GA"
        },
        {
            "zip_code": "30040",
            "distance": 34.279,
            "city": "Cumming",
            "state": "GA"
        },
        {
            "zip_code": "30123",
            "distance": 40.143,
            "city": "Cassville",
            "state": "GA"
        },
        {
            "zip_code": "30566",
            "distance": 45.161,
            "city": "Oakwood",
            "state": "GA"
        },
        {
            "zip_code": "30145",
            "distance": 46.286,
            "city": "Kingston",
            "state": "GA"
        },
        {
            "zip_code": "30114",
            "distance": 34.285,
            "city": "Canton",
            "state": "GA"
        },
        {
            "zip_code": "30184",
            "distance": 38.471,
            "city": "White",
            "state": "GA"
        },
        {
            "zip_code": "30504",
            "distance": 47.168,
            "city": "Gainesville",
            "state": "GA"
        },
        {
            "zip_code": "30028",
            "distance": 39.799,
            "city": "Cumming",
            "state": "GA"
        },
        {
            "zip_code": "30107",
            "distance": 40.289,
            "city": "Ball Ground",
            "state": "GA"
        },
        {
            "zip_code": "30183",
            "distance": 41.322,
            "city": "Waleska",
            "state": "GA"
        },
        {
            "zip_code": "30171",
            "distance": 43.832,
            "city": "Rydal",
            "state": "GA"
        },
        {
            "zip_code": "30151",
            "distance": 43.152,
            "city": "Nelson",
            "state": "GA"
        },
        {
            "zip_code": "30177",
            "distance": 45.277,
            "city": "Tate",
            "state": "GA"
        },
        {
            "zip_code": "30534",
            "distance": 49.359,
            "city": "Dawsonville",
            "state": "GA"
        },
        {
            "zip_code": "30139",
            "distance": 49.175,
            "city": "Fairmount",
            "state": "GA"
        },
        {
            "zip_code": "30148",
            "distance": 49.455,
            "city": "Marble Hill",
            "state": "GA"
        },
        {
            "zip_code": "30143",
            "distance": 48.53,
            "city": "Jasper",
            "state": "GA"
        }
    ],
  "SMASH Wharton": [
        {
            "zip_code": "08316",
            "distance": 49.418,
            "city": "Dorchester",
            "state": "NJ"
        },
        {
            "zip_code": "08349",
            "distance": 47.793,
            "city": "Port Norris",
            "state": "NJ"
        },
        {
            "zip_code": "08329",
            "distance": 48.248,
            "city": "Mauricetown",
            "state": "NJ"
        },
        {
            "zip_code": "08345",
            "distance": 46.758,
            "city": "Newport",
            "state": "NJ"
        },
        {
            "zip_code": "19977",
            "distance": 49.176,
            "city": "Smyrna",
            "state": "DE"
        },
        {
            "zip_code": "08348",
            "distance": 46.419,
            "city": "Port Elizabeth",
            "state": "NJ"
        },
        {
            "zip_code": "08311",
            "distance": 43.575,
            "city": "Cedarville",
            "state": "NJ"
        },
        {
            "zip_code": "08319",
            "distance": 45.574,
            "city": "Estell Manor",
            "state": "NJ"
        },
        {
            "zip_code": "08332",
            "distance": 41.252,
            "city": "Millville",
            "state": "NJ"
        },
        {
            "zip_code": "19734",
            "distance": 46.613,
            "city": "Townsend",
            "state": "DE"
        },
        {
            "zip_code": "08320",
            "distance": 39.676,
            "city": "Fairton",
            "state": "NJ"
        },
        {
            "zip_code": "08234",
            "distance": 49.971,
            "city": "Egg Harbor Township",
            "state": "NJ"
        },
        {
            "zip_code": "08323",
            "distance": 39.867,
            "city": "Greenwich",
            "state": "NJ"
        },
        {
            "zip_code": "08317",
            "distance": 43.263,
            "city": "Dorothy",
            "state": "NJ"
        },
        {
            "zip_code": "21912",
            "distance": 49.718,
            "city": "Warwick",
            "state": "MD"
        },
        {
            "zip_code": "08340",
            "distance": 39.891,
            "city": "Milmay",
            "state": "NJ"
        },
        {
            "zip_code": "08302",
            "distance": 36.072,
            "city": "Bridgeton",
            "state": "NJ"
        },
        {
            "zip_code": "08361",
            "distance": 37.424,
            "city": "Vineland",
            "state": "NJ"
        },
        {
            "zip_code": "08362",
            "distance": 36.194,
            "city": "Vineland",
            "state": "NJ"
        },
        {
            "zip_code": "08342",
            "distance": 42.833,
            "city": "Mizpah",
            "state": "NJ"
        },
        {
            "zip_code": "08353",
            "distance": 34.644,
            "city": "Shiloh",
            "state": "NJ"
        },
        {
            "zip_code": "19730",
            "distance": 41.658,
            "city": "Odessa",
            "state": "DE"
        },
        {
            "zip_code": "08038",
            "distance": 37.129,
            "city": "Hancocks Bridge",
            "state": "NJ"
        },
        {
            "zip_code": "08352",
            "distance": 33.574,
            "city": "Rosenhayn",
            "state": "NJ"
        },
        {
            "zip_code": "08330",
            "distance": 41.088,
            "city": "Mays Landing",
            "state": "NJ"
        },
        {
            "zip_code": "08350",
            "distance": 36.608,
            "city": "Richland",
            "state": "NJ"
        },
        {
            "zip_code": "08240",
            "distance": 48.023,
            "city": "Pomona",
            "state": "NJ"
        },
        {
            "zip_code": "08313",
            "distance": 32.376,
            "city": "Deerfield Street",
            "state": "NJ"
        },
        {
            "zip_code": "19709",
            "distance": 40.84,
            "city": "Middletown",
            "state": "DE"
        },
        {
            "zip_code": "08360",
            "distance": 33.55,
            "city": "Vineland",
            "state": "NJ"
        },
        {
            "zip_code": "21915",
            "distance": 47.017,
            "city": "Chesapeake City",
            "state": "MD"
        },
        {
            "zip_code": "08213",
            "distance": 45.962,
            "city": "Cologne",
            "state": "NJ"
        },
        {
            "zip_code": "19731",
            "distance": 36.456,
            "city": "Port Penn",
            "state": "DE"
        },
        {
            "zip_code": "08341",
            "distance": 32.649,
            "city": "Minotola",
            "state": "NJ"
        },
        {
            "zip_code": "08310",
            "distance": 33.587,
            "city": "Buena",
            "state": "NJ"
        },
        {
            "zip_code": "08241",
            "distance": 48.299,
            "city": "Port Republic",
            "state": "NJ"
        },
        {
            "zip_code": "08326",
            "distance": 32.433,
            "city": "Landisville",
            "state": "NJ"
        },
        {
            "zip_code": "08347",
            "distance": 29.149,
            "city": "Norma",
            "state": "NJ"
        },
        {
            "zip_code": "08079",
            "distance": 31.295,
            "city": "Salem",
            "state": "NJ"
        },
        {
            "zip_code": "08072",
            "distance": 30.905,
            "city": "Quinton",
            "state": "NJ"
        },
        {
            "zip_code": "08001",
            "distance": 29.431,
            "city": "Alloway",
            "state": "NJ"
        },
        {
            "zip_code": "19733",
            "distance": 36.754,
            "city": "Saint Georges",
            "state": "DE"
        },
        {
            "zip_code": "08318",
            "distance": 27.714,
            "city": "Elmer",
            "state": "NJ"
        },
        {
            "zip_code": "08344",
            "distance": 29.66,
            "city": "Newfield",
            "state": "NJ"
        },
        {
            "zip_code": "08346",
            "distance": 32.966,
            "city": "Newtonville",
            "state": "NJ"
        },
        {
            "zip_code": "19708",
            "distance": 35.274,
            "city": "Kirkwood",
            "state": "DE"
        },
        {
            "zip_code": "21914",
            "distance": 49.24,
            "city": "Charlestown",
            "state": "MD"
        },
        {
            "zip_code": "19706",
            "distance": 33.962,
            "city": "Delaware City",
            "state": "DE"
        },
        {
            "zip_code": "08217",
            "distance": 36.774,
            "city": "Elwood",
            "state": "NJ"
        },
        {
            "zip_code": "08328",
            "distance": 27.304,
            "city": "Malaga",
            "state": "NJ"
        },
        {
            "zip_code": "19701",
            "distance": 37.189,
            "city": "Bear",
            "state": "DE"
        },
        {
            "zip_code": "21901",
            "distance": 47.879,
            "city": "North East",
            "state": "MD"
        },
        {
            "zip_code": "08215",
            "distance": 42.418,
            "city": "Egg Harbor City",
            "state": "NJ"
        },
        {
            "zip_code": "21922",
            "distance": 41.248,
            "city": "Elkton",
            "state": "MD"
        },
        {
            "zip_code": "08224",
            "distance": 45.867,
            "city": "New Gretna",
            "state": "NJ"
        },
        {
            "zip_code": "08322",
            "distance": 25.294,
            "city": "Franklinville",
            "state": "NJ"
        },
        {
            "zip_code": "19702",
            "distance": 36.694,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "08070",
            "distance": 28.861,
            "city": "Pennsville",
            "state": "NJ"
        },
        {
            "zip_code": "21921",
            "distance": 41.884,
            "city": "Elkton",
            "state": "MD"
        },
        {
            "zip_code": "08343",
            "distance": 22.327,
            "city": "Monroeville",
            "state": "NJ"
        },
        {
            "zip_code": "08098",
            "distance": 23.108,
            "city": "Woodstown",
            "state": "NJ"
        },
        {
            "zip_code": "08037",
            "distance": 32.073,
            "city": "Hammonton",
            "state": "NJ"
        },
        {
            "zip_code": "21916",
            "distance": 41.432,
            "city": "Childs",
            "state": "MD"
        },
        {
            "zip_code": "19720",
            "distance": 30.451,
            "city": "New Castle",
            "state": "DE"
        },
        {
            "zip_code": "08095",
            "distance": 27.999,
            "city": "Winslow",
            "state": "NJ"
        },
        {
            "zip_code": "08094",
            "distance": 24.787,
            "city": "Williamstown",
            "state": "NJ"
        },
        {
            "zip_code": "21920",
            "distance": 39.339,
            "city": "Elk Mills",
            "state": "MD"
        },
        {
            "zip_code": "19721",
            "distance": 28.526,
            "city": "New Castle",
            "state": "DE"
        },
        {
            "zip_code": "08312",
            "distance": 21.364,
            "city": "Clayton",
            "state": "NJ"
        },
        {
            "zip_code": "19712",
            "distance": 35.4,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "19714",
            "distance": 35.4,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "19715",
            "distance": 35.4,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "19718",
            "distance": 35.4,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "19725",
            "distance": 35.4,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "19726",
            "distance": 35.4,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "19713",
            "distance": 33.728,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "19717",
            "distance": 35.173,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "08039",
            "distance": 19.31,
            "city": "Harrisonville",
            "state": "NJ"
        },
        {
            "zip_code": "08023",
            "distance": 24.53,
            "city": "Deepwater",
            "state": "NJ"
        },
        {
            "zip_code": "19716",
            "distance": 35.014,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "21911",
            "distance": 47.83,
            "city": "Rising Sun",
            "state": "MD"
        },
        {
            "zip_code": "08028",
            "distance": 18.605,
            "city": "Glassboro",
            "state": "NJ"
        },
        {
            "zip_code": "08069",
            "distance": 22.176,
            "city": "Penns Grove",
            "state": "NJ"
        },
        {
            "zip_code": "08025",
            "distance": 17.251,
            "city": "Ewan",
            "state": "NJ"
        },
        {
            "zip_code": "19711",
            "distance": 33.367,
            "city": "Newark",
            "state": "DE"
        },
        {
            "zip_code": "08062",
            "distance": 16.787,
            "city": "Mullica Hill",
            "state": "NJ"
        },
        {
            "zip_code": "08074",
            "distance": 16.851,
            "city": "Richwood",
            "state": "NJ"
        },
        {
            "zip_code": "19804",
            "distance": 27.796,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "08089",
            "distance": 25.828,
            "city": "Waterford Works",
            "state": "NJ"
        },
        {
            "zip_code": "19351",
            "distance": 38.757,
            "city": "Lewisville",
            "state": "PA"
        },
        {
            "zip_code": "08018",
            "distance": 22.877,
            "city": "Cedar Brook",
            "state": "NJ"
        },
        {
            "zip_code": "19801",
            "distance": 24.159,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19850",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19880",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19884",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19885",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19886",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19890",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19891",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19892",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19893",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19894",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19895",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19896",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19897",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19898",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19899",
            "distance": 23.622,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "08071",
            "distance": 16.04,
            "city": "Pitman",
            "state": "NJ"
        },
        {
            "zip_code": "08081",
            "distance": 19.544,
            "city": "Sicklerville",
            "state": "NJ"
        },
        {
            "zip_code": "19808",
            "distance": 29.148,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "08067",
            "distance": 18.889,
            "city": "Pedricktown",
            "state": "NJ"
        },
        {
            "zip_code": "19889",
            "distance": 23.558,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19805",
            "distance": 25.664,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19362",
            "distance": 48.402,
            "city": "Nottingham",
            "state": "PA"
        },
        {
            "zip_code": "19802",
            "distance": 22.383,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "08080",
            "distance": 14.488,
            "city": "Sewell",
            "state": "NJ"
        },
        {
            "zip_code": "19809",
            "distance": 21.187,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19347",
            "distance": 34.229,
            "city": "Kemblesville",
            "state": "PA"
        },
        {
            "zip_code": "19350",
            "distance": 34.528,
            "city": "Landenberg",
            "state": "PA"
        },
        {
            "zip_code": "08009",
            "distance": 19.641,
            "city": "Berlin",
            "state": "NJ"
        },
        {
            "zip_code": "08085",
            "distance": 15.162,
            "city": "Swedesboro",
            "state": "NJ"
        },
        {
            "zip_code": "19806",
            "distance": 23.592,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "08004",
            "distance": 21.964,
            "city": "Atco",
            "state": "NJ"
        },
        {
            "zip_code": "08005",
            "distance": 48.821,
            "city": "Barnegat",
            "state": "NJ"
        },
        {
            "zip_code": "19360",
            "distance": 38.406,
            "city": "New London",
            "state": "PA"
        },
        {
            "zip_code": "08032",
            "distance": 15.236,
            "city": "Grenloch",
            "state": "NJ"
        },
        {
            "zip_code": "19352",
            "distance": 38.726,
            "city": "Lincoln University",
            "state": "PA"
        },
        {
            "zip_code": "08019",
            "distance": 37.404,
            "city": "Chatsworth",
            "state": "NJ"
        },
        {
            "zip_code": "08056",
            "distance": 12.444,
            "city": "Mickleton",
            "state": "NJ"
        },
        {
            "zip_code": "08012",
            "distance": 14.245,
            "city": "Blackwood",
            "state": "NJ"
        },
        {
            "zip_code": "19732",
            "distance": 23.092,
            "city": "Rockland",
            "state": "DE"
        },
        {
            "zip_code": "08051",
            "distance": 12.127,
            "city": "Mantua",
            "state": "NJ"
        },
        {
            "zip_code": "19707",
            "distance": 28.343,
            "city": "Hockessin",
            "state": "DE"
        },
        {
            "zip_code": "19346",
            "distance": 37.433,
            "city": "Kelton",
            "state": "PA"
        },
        {
            "zip_code": "19363",
            "distance": 42.421,
            "city": "Oxford",
            "state": "PA"
        },
        {
            "zip_code": "08020",
            "distance": 11.613,
            "city": "Clarksboro",
            "state": "NJ"
        },
        {
            "zip_code": "19710",
            "distance": 23.514,
            "city": "Montchanin",
            "state": "DE"
        },
        {
            "zip_code": "19807",
            "distance": 24.643,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "08061",
            "distance": 11.038,
            "city": "Mount Royal",
            "state": "NJ"
        },
        {
            "zip_code": "08090",
            "distance": 11.309,
            "city": "Wenonah",
            "state": "NJ"
        },
        {
            "zip_code": "19803",
            "distance": 21.215,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19703",
            "distance": 17.335,
            "city": "Claymont",
            "state": "DE"
        },
        {
            "zip_code": "19736",
            "distance": 27.48,
            "city": "Yorklyn",
            "state": "DE"
        },
        {
            "zip_code": "19735",
            "distance": 23.795,
            "city": "Winterthur",
            "state": "DE"
        },
        {
            "zip_code": "08021",
            "distance": 14.897,
            "city": "Clementon",
            "state": "NJ"
        },
        {
            "zip_code": "08091",
            "distance": 17.947,
            "city": "West Berlin",
            "state": "NJ"
        },
        {
            "zip_code": "19887",
            "distance": 18.964,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "08097",
            "distance": 10.347,
            "city": "Woodbury Heights",
            "state": "NJ"
        },
        {
            "zip_code": "08014",
            "distance": 12.647,
            "city": "Bridgeport",
            "state": "NJ"
        },
        {
            "zip_code": "19810",
            "distance": 18.955,
            "city": "Wilmington",
            "state": "DE"
        },
        {
            "zip_code": "19311",
            "distance": 31.796,
            "city": "Avondale",
            "state": "PA"
        },
        {
            "zip_code": "19374",
            "distance": 31.14,
            "city": "Toughkenamon",
            "state": "PA"
        },
        {
            "zip_code": "08096",
            "distance": 9.869,
            "city": "West Deptford",
            "state": "NJ"
        },
        {
            "zip_code": "19061",
            "distance": 15.392,
            "city": "Marcus Hook",
            "state": "PA"
        },
        {
            "zip_code": "08084",
            "distance": 13.215,
            "city": "Stratford",
            "state": "NJ"
        },
        {
            "zip_code": "19318",
            "distance": 34.599,
            "city": "Chatham",
            "state": "PA"
        },
        {
            "zip_code": "08026",
            "distance": 15.056,
            "city": "Gibbsboro",
            "state": "NJ"
        },
        {
            "zip_code": "08066",
            "distance": 8.721,
            "city": "Paulsboro",
            "state": "NJ"
        },
        {
            "zip_code": "08027",
            "distance": 9.801,
            "city": "Gibbstown",
            "state": "NJ"
        },
        {
            "zip_code": "19390",
            "distance": 35.14,
            "city": "West Grove",
            "state": "PA"
        },
        {
            "zip_code": "19016",
            "distance": 12.206,
            "city": "Chester",
            "state": "PA"
        },
        {
            "zip_code": "08029",
            "distance": 10.713,
            "city": "Glendora",
            "state": "NJ"
        },
        {
            "zip_code": "08083",
            "distance": 12.125,
            "city": "Somerdale",
            "state": "NJ"
        },
        {
            "zip_code": "17536",
            "distance": 46.997,
            "city": "Kirkwood",
            "state": "PA"
        },
        {
            "zip_code": "19013",
            "distance": 12.157,
            "city": "Chester",
            "state": "PA"
        },
        {
            "zip_code": "08043",
            "distance": 15.057,
            "city": "Voorhees",
            "state": "NJ"
        },
        {
            "zip_code": "19060",
            "distance": 17.317,
            "city": "Garnet Valley",
            "state": "PA"
        },
        {
            "zip_code": "08088",
            "distance": 27.787,
            "city": "Vincentown",
            "state": "NJ"
        },
        {
            "zip_code": "08078",
            "distance": 9.788,
            "city": "Runnemede",
            "state": "NJ"
        },
        {
            "zip_code": "08049",
            "distance": 11.14,
            "city": "Magnolia",
            "state": "NJ"
        },
        {
            "zip_code": "08086",
            "distance": 7.173,
            "city": "Thorofare",
            "state": "NJ"
        },
        {
            "zip_code": "08053",
            "distance": 17.288,
            "city": "Marlton",
            "state": "NJ"
        },
        {
            "zip_code": "19357",
            "distance": 27.929,
            "city": "Mendenhall",
            "state": "PA"
        },
        {
            "zip_code": "08099",
            "distance": 8.925,
            "city": "Bellmawr",
            "state": "NJ"
        },
        {
            "zip_code": "19317",
            "distance": 22.275,
            "city": "Chadds Ford",
            "state": "PA"
        },
        {
            "zip_code": "19022",
            "distance": 9.929,
            "city": "Crum Lynne",
            "state": "PA"
        },
        {
            "zip_code": "08055",
            "distance": 21.021,
            "city": "Medford",
            "state": "NJ"
        },
        {
            "zip_code": "08093",
            "distance": 7.256,
            "city": "Westville",
            "state": "NJ"
        },
        {
            "zip_code": "19014",
            "distance": 13.976,
            "city": "Aston",
            "state": "PA"
        },
        {
            "zip_code": "08007",
            "distance": 10.002,
            "city": "Barrington",
            "state": "NJ"
        },
        {
            "zip_code": "08031",
            "distance": 8.433,
            "city": "Bellmawr",
            "state": "NJ"
        },
        {
            "zip_code": "08045",
            "distance": 10.962,
            "city": "Lawnside",
            "state": "NJ"
        },
        {
            "zip_code": "08063",
            "distance": 6.341,
            "city": "National Park",
            "state": "NJ"
        },
        {
            "zip_code": "19330",
            "distance": 38.404,
            "city": "Cochranville",
            "state": "PA"
        },
        {
            "zip_code": "19029",
            "distance": 7.958,
            "city": "Essington",
            "state": "PA"
        },
        {
            "zip_code": "19015",
            "distance": 12.023,
            "city": "Brookhaven",
            "state": "PA"
        },
        {
            "zip_code": "19348",
            "distance": 27.91,
            "city": "Kennett Square",
            "state": "PA"
        },
        {
            "zip_code": "19113",
            "distance": 6.583,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19078",
            "distance": 8.743,
            "city": "Ridley Park",
            "state": "PA"
        },
        {
            "zip_code": "19094",
            "distance": 9.735,
            "city": "Woodlyn",
            "state": "PA"
        },
        {
            "zip_code": "08035",
            "distance": 8.929,
            "city": "Haddon Heights",
            "state": "NJ"
        },
        {
            "zip_code": "19331",
            "distance": 17.848,
            "city": "Concordville",
            "state": "PA"
        },
        {
            "zip_code": "19339",
            "distance": 17.848,
            "city": "Concordville",
            "state": "PA"
        },
        {
            "zip_code": "19340",
            "distance": 17.848,
            "city": "Concordville",
            "state": "PA"
        },
        {
            "zip_code": "08003",
            "distance": 13.116,
            "city": "Cherry Hill",
            "state": "NJ"
        },
        {
            "zip_code": "08059",
            "distance": 7.603,
            "city": "Mount Ephraim",
            "state": "NJ"
        },
        {
            "zip_code": "19074",
            "distance": 7.173,
            "city": "Norwood",
            "state": "PA"
        },
        {
            "zip_code": "19076",
            "distance": 7.614,
            "city": "Prospect Park",
            "state": "PA"
        },
        {
            "zip_code": "08030",
            "distance": 6.439,
            "city": "Gloucester City",
            "state": "NJ"
        },
        {
            "zip_code": "19112",
            "distance": 4.998,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19086",
            "distance": 10.218,
            "city": "Wallingford",
            "state": "PA"
        },
        {
            "zip_code": "19033",
            "distance": 8.303,
            "city": "Folsom",
            "state": "PA"
        },
        {
            "zip_code": "08106",
            "distance": 8.123,
            "city": "Audubon",
            "state": "NJ"
        },
        {
            "zip_code": "19032",
            "distance": 6.278,
            "city": "Folcroft",
            "state": "PA"
        },
        {
            "zip_code": "19017",
            "distance": 14.579,
            "city": "Chester Heights",
            "state": "PA"
        },
        {
            "zip_code": "08033",
            "distance": 9.73,
            "city": "Haddonfield",
            "state": "NJ"
        },
        {
            "zip_code": "19153",
            "distance": 4.787,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19081",
            "distance": 8.905,
            "city": "Swarthmore",
            "state": "PA"
        },
        {
            "zip_code": "19079",
            "distance": 5.486,
            "city": "Sharon Hill",
            "state": "PA"
        },
        {
            "zip_code": "19366",
            "distance": 22.677,
            "city": "Pocopson",
            "state": "PA"
        },
        {
            "zip_code": "19028",
            "distance": 16.443,
            "city": "Edgemont",
            "state": "PA"
        },
        {
            "zip_code": "19039",
            "distance": 16.443,
            "city": "Gradyville",
            "state": "PA"
        },
        {
            "zip_code": "19098",
            "distance": 6.702,
            "city": "Holmes",
            "state": "PA"
        },
        {
            "zip_code": "19176",
            "distance": 4.366,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19043",
            "distance": 7.084,
            "city": "Holmes",
            "state": "PA"
        },
        {
            "zip_code": "19375",
            "distance": 28.967,
            "city": "Unionville",
            "state": "PA"
        },
        {
            "zip_code": "19373",
            "distance": 18.167,
            "city": "Thornton",
            "state": "PA"
        },
        {
            "zip_code": "19036",
            "distance": 6.285,
            "city": "Glenolden",
            "state": "PA"
        },
        {
            "zip_code": "19342",
            "distance": 16.346,
            "city": "Glen Mills",
            "state": "PA"
        },
        {
            "zip_code": "08034",
            "distance": 11.139,
            "city": "Cherry Hill",
            "state": "NJ"
        },
        {
            "zip_code": "19070",
            "distance": 7.567,
            "city": "Morton",
            "state": "PA"
        },
        {
            "zip_code": "08107",
            "distance": 7.036,
            "city": "Oaklyn",
            "state": "NJ"
        },
        {
            "zip_code": "19145",
            "distance": 3.365,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19065",
            "distance": 10.161,
            "city": "Media",
            "state": "PA"
        },
        {
            "zip_code": "19091",
            "distance": 10.161,
            "city": "Media",
            "state": "PA"
        },
        {
            "zip_code": "19148",
            "distance": 4.106,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "17509",
            "distance": 44.494,
            "city": "Christiana",
            "state": "PA"
        },
        {
            "zip_code": "08108",
            "distance": 7.919,
            "city": "Collingswood",
            "state": "NJ"
        },
        {
            "zip_code": "08104",
            "distance": 5.403,
            "city": "Camden",
            "state": "NJ"
        },
        {
            "zip_code": "19023",
            "distance": 4.609,
            "city": "Darby",
            "state": "PA"
        },
        {
            "zip_code": "17503",
            "distance": 46.213,
            "city": "Bart",
            "state": "PA"
        },
        {
            "zip_code": "19037",
            "distance": 11.483,
            "city": "Glen Riddle Lima",
            "state": "PA"
        },
        {
            "zip_code": "19052",
            "distance": 11.483,
            "city": "Lenni",
            "state": "PA"
        },
        {
            "zip_code": "19063",
            "distance": 11.801,
            "city": "Media",
            "state": "PA"
        },
        {
            "zip_code": "19142",
            "distance": 3.127,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19018",
            "distance": 5.822,
            "city": "Clifton Heights",
            "state": "PA"
        },
        {
            "zip_code": "19319",
            "distance": 17.218,
            "city": "Cheyney",
            "state": "PA"
        },
        {
            "zip_code": "19382",
            "distance": 22.047,
            "city": "West Chester",
            "state": "PA"
        },
        {
            "zip_code": "19395",
            "distance": 18.709,
            "city": "Westtown",
            "state": "PA"
        },
        {
            "zip_code": "08101",
            "distance": 5.608,
            "city": "Camden",
            "state": "NJ"
        },
        {
            "zip_code": "08015",
            "distance": 34.77,
            "city": "Browns Mills",
            "state": "NJ"
        },
        {
            "zip_code": "08002",
            "distance": 9.259,
            "city": "Cherry Hill",
            "state": "NJ"
        },
        {
            "zip_code": "19064",
            "distance": 7.728,
            "city": "Springfield",
            "state": "PA"
        },
        {
            "zip_code": "19310",
            "distance": 41.034,
            "city": "Atglen",
            "state": "PA"
        },
        {
            "zip_code": "19147",
            "distance": 2.935,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08103",
            "distance": 4.757,
            "city": "Camden",
            "state": "NJ"
        },
        {
            "zip_code": "19050",
            "distance": 3.723,
            "city": "Lansdowne",
            "state": "PA"
        },
        {
            "zip_code": "19146",
            "distance": 1.533,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19143",
            "distance": 1.804,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19106",
            "distance": 3.052,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08054",
            "distance": 15.824,
            "city": "Mount Laurel",
            "state": "NJ"
        },
        {
            "zip_code": "19109",
            "distance": 1.979,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19381",
            "distance": 21.251,
            "city": "West Chester",
            "state": "PA"
        },
        {
            "zip_code": "19194",
            "distance": 1.162,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19019",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19092",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19093",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19099",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19101",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19105",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19108",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19110",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19155",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19160",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19161",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19162",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19170",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19171",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19172",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19173",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19175",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19177",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19178",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19179",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19181",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19182",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19183",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19184",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19185",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19187",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19188",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19190",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19191",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19192",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19193",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19195",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19196",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19197",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19244",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19255",
            "distance": 2.146,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19026",
            "distance": 5.582,
            "city": "Drexel Hill",
            "state": "PA"
        },
        {
            "zip_code": "08105",
            "distance": 5.461,
            "city": "Camden",
            "state": "NJ"
        },
        {
            "zip_code": "08109",
            "distance": 7.906,
            "city": "Merchantville",
            "state": "NJ"
        },
        {
            "zip_code": "19383",
            "distance": 21.338,
            "city": "West Chester",
            "state": "PA"
        },
        {
            "zip_code": "19107",
            "distance": 2.176,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08052",
            "distance": 10.811,
            "city": "Maple Shade",
            "state": "NJ"
        },
        {
            "zip_code": "08102",
            "distance": 4.147,
            "city": "Camden",
            "state": "NJ"
        },
        {
            "zip_code": "19102",
            "distance": 1.804,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19103",
            "distance": 1.361,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19104",
            "distance": 0,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08048",
            "distance": 20.998,
            "city": "Lumberton",
            "state": "NJ"
        },
        {
            "zip_code": "19369",
            "distance": 38.173,
            "city": "Sadsburyville",
            "state": "PA"
        },
        {
            "zip_code": "19376",
            "distance": 32.893,
            "city": "Wagontown",
            "state": "PA"
        },
        {
            "zip_code": "19388",
            "distance": 21.757,
            "city": "West Chester",
            "state": "PA"
        },
        {
            "zip_code": "19082",
            "distance": 3.795,
            "city": "Upper Darby",
            "state": "PA"
        },
        {
            "zip_code": "19139",
            "distance": 1.62,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08068",
            "distance": 28.22,
            "city": "Pemberton",
            "state": "NJ"
        },
        {
            "zip_code": "08064",
            "distance": 29.556,
            "city": "New Lisbon",
            "state": "NJ"
        },
        {
            "zip_code": "19367",
            "distance": 36.292,
            "city": "Pomeroy",
            "state": "PA"
        },
        {
            "zip_code": "19320",
            "distance": 33.531,
            "city": "Coatesville",
            "state": "PA"
        },
        {
            "zip_code": "19358",
            "distance": 32.105,
            "city": "Modena",
            "state": "PA"
        },
        {
            "zip_code": "19123",
            "distance": 2.852,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19365",
            "distance": 38.448,
            "city": "Parkesburg",
            "state": "PA"
        },
        {
            "zip_code": "19130",
            "distance": 1.376,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "17562",
            "distance": 47.31,
            "city": "Paradise",
            "state": "PA"
        },
        {
            "zip_code": "08036",
            "distance": 19.436,
            "city": "Hainesport",
            "state": "NJ"
        },
        {
            "zip_code": "08110",
            "distance": 7.521,
            "city": "Pennsauken",
            "state": "NJ"
        },
        {
            "zip_code": "19008",
            "distance": 8.581,
            "city": "Broomall",
            "state": "PA"
        },
        {
            "zip_code": "08011",
            "distance": 25.748,
            "city": "Birmingham",
            "state": "NJ"
        },
        {
            "zip_code": "17572",
            "distance": 48.739,
            "city": "Ronks",
            "state": "PA"
        },
        {
            "zip_code": "08759",
            "distance": 45.252,
            "city": "Manchester Township",
            "state": "NJ"
        },
        {
            "zip_code": "19125",
            "distance": 4.1,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19083",
            "distance": 6.112,
            "city": "Havertown",
            "state": "PA"
        },
        {
            "zip_code": "19122",
            "distance": 3.118,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19151",
            "distance": 3.391,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08057",
            "distance": 13.73,
            "city": "Moorestown",
            "state": "NJ"
        },
        {
            "zip_code": "19121",
            "distance": 1.936,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "17535",
            "distance": 43.658,
            "city": "Kinzers",
            "state": "PA"
        },
        {
            "zip_code": "19073",
            "distance": 12.315,
            "city": "Newtown Square",
            "state": "PA"
        },
        {
            "zip_code": "19380",
            "distance": 21.48,
            "city": "West Chester",
            "state": "PA"
        },
        {
            "zip_code": "19134",
            "distance": 5.224,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19131",
            "distance": 2.404,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19133",
            "distance": 3.86,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19137",
            "distance": 7.145,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19132",
            "distance": 2.999,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19096",
            "distance": 4.815,
            "city": "Wynnewood",
            "state": "PA"
        },
        {
            "zip_code": "19372",
            "distance": 29.735,
            "city": "Thorndale",
            "state": "PA"
        },
        {
            "zip_code": "08077",
            "distance": 11.352,
            "city": "Riverton",
            "state": "NJ"
        },
        {
            "zip_code": "19003",
            "distance": 6.058,
            "city": "Ardmore",
            "state": "PA"
        },
        {
            "zip_code": "19066",
            "distance": 4.029,
            "city": "Merion Station",
            "state": "PA"
        },
        {
            "zip_code": "08065",
            "distance": 9.194,
            "city": "Palmyra",
            "state": "NJ"
        },
        {
            "zip_code": "08640",
            "distance": 32.34,
            "city": "Fort Dix",
            "state": "NJ"
        },
        {
            "zip_code": "19041",
            "distance": 7.05,
            "city": "Haverford",
            "state": "PA"
        },
        {
            "zip_code": "08060",
            "distance": 21.923,
            "city": "Mount Holly",
            "state": "NJ"
        },
        {
            "zip_code": "17527",
            "distance": 42.095,
            "city": "Gap",
            "state": "PA"
        },
        {
            "zip_code": "08073",
            "distance": 17.942,
            "city": "Rancocas",
            "state": "NJ"
        },
        {
            "zip_code": "19004",
            "distance": 3.939,
            "city": "Bala Cynwyd",
            "state": "PA"
        },
        {
            "zip_code": "08076",
            "distance": 10.622,
            "city": "Riverton",
            "state": "NJ"
        },
        {
            "zip_code": "19140",
            "distance": 4.657,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19129",
            "distance": 3.834,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08042",
            "distance": 28.691,
            "city": "Juliustown",
            "state": "NJ"
        },
        {
            "zip_code": "19124",
            "distance": 6.918,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19354",
            "distance": 27.386,
            "city": "Lyndell",
            "state": "PA"
        },
        {
            "zip_code": "08641",
            "distance": 32.522,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19135",
            "distance": 9.107,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19335",
            "distance": 27.983,
            "city": "Downingtown",
            "state": "PA"
        },
        {
            "zip_code": "19010",
            "distance": 8.249,
            "city": "Bryn Mawr",
            "state": "PA"
        },
        {
            "zip_code": "08733",
            "distance": 46.713,
            "city": "Lakehurst",
            "state": "NJ"
        },
        {
            "zip_code": "19072",
            "distance": 5.492,
            "city": "Narberth",
            "state": "PA"
        },
        {
            "zip_code": "08046",
            "distance": 17.212,
            "city": "Willingboro",
            "state": "NJ"
        },
        {
            "zip_code": "19127",
            "distance": 5.043,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19345",
            "distance": 19.989,
            "city": "Immaculata",
            "state": "PA"
        },
        {
            "zip_code": "08075",
            "distance": 14.105,
            "city": "Riverside",
            "state": "NJ"
        },
        {
            "zip_code": "19312",
            "distance": 14.459,
            "city": "Berwyn",
            "state": "PA"
        },
        {
            "zip_code": "19144",
            "distance": 5.367,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19120",
            "distance": 6.714,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19085",
            "distance": 9.643,
            "city": "Villanova",
            "state": "PA"
        },
        {
            "zip_code": "19141",
            "distance": 6.148,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19149",
            "distance": 8.936,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08041",
            "distance": 28.093,
            "city": "Jobstown",
            "state": "NJ"
        },
        {
            "zip_code": "19136",
            "distance": 11.066,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19341",
            "distance": 24.049,
            "city": "Exton",
            "state": "PA"
        },
        {
            "zip_code": "19353",
            "distance": 22.99,
            "city": "Lionville",
            "state": "PA"
        },
        {
            "zip_code": "19301",
            "distance": 15.926,
            "city": "Paoli",
            "state": "PA"
        },
        {
            "zip_code": "19333",
            "distance": 13.208,
            "city": "Devon",
            "state": "PA"
        },
        {
            "zip_code": "17529",
            "distance": 47.899,
            "city": "Gordonville",
            "state": "PA"
        },
        {
            "zip_code": "08511",
            "distance": 34.455,
            "city": "Cookstown",
            "state": "NJ"
        },
        {
            "zip_code": "19355",
            "distance": 18.693,
            "city": "Malvern",
            "state": "PA"
        },
        {
            "zip_code": "19128",
            "distance": 6.405,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19397",
            "distance": 12.824,
            "city": "Southeastern",
            "state": "PA"
        },
        {
            "zip_code": "19398",
            "distance": 12.824,
            "city": "Southeastern",
            "state": "PA"
        },
        {
            "zip_code": "19399",
            "distance": 12.824,
            "city": "Southeastern",
            "state": "PA"
        },
        {
            "zip_code": "19035",
            "distance": 7.641,
            "city": "Gladwyne",
            "state": "PA"
        },
        {
            "zip_code": "19119",
            "distance": 6.565,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19316",
            "distance": 34.241,
            "city": "Brandamore",
            "state": "PA"
        },
        {
            "zip_code": "08010",
            "distance": 16.345,
            "city": "Beverly",
            "state": "NJ"
        },
        {
            "zip_code": "19126",
            "distance": 7.435,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19138",
            "distance": 7.06,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19012",
            "distance": 8.565,
            "city": "Cheltenham",
            "state": "PA"
        },
        {
            "zip_code": "19480",
            "distance": 24.872,
            "city": "Uwchland",
            "state": "PA"
        },
        {
            "zip_code": "19080",
            "distance": 12.745,
            "city": "Wayne",
            "state": "PA"
        },
        {
            "zip_code": "19088",
            "distance": 12.745,
            "city": "Wayne",
            "state": "PA"
        },
        {
            "zip_code": "19089",
            "distance": 12.745,
            "city": "Wayne",
            "state": "PA"
        },
        {
            "zip_code": "19111",
            "distance": 9.442,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19152",
            "distance": 10.705,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19087",
            "distance": 12.918,
            "city": "Wayne",
            "state": "PA"
        },
        {
            "zip_code": "08562",
            "distance": 32.925,
            "city": "Wrightstown",
            "state": "NJ"
        },
        {
            "zip_code": "08022",
            "distance": 27.171,
            "city": "Columbus",
            "state": "NJ"
        },
        {
            "zip_code": "19114",
            "distance": 13.014,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08016",
            "distance": 21.26,
            "city": "Burlington",
            "state": "NJ"
        },
        {
            "zip_code": "19371",
            "distance": 36.863,
            "city": "Suplee",
            "state": "PA"
        },
        {
            "zip_code": "19429",
            "distance": 9.368,
            "city": "Conshohocken",
            "state": "PA"
        },
        {
            "zip_code": "08533",
            "distance": 37.797,
            "city": "New Egypt",
            "state": "NJ"
        },
        {
            "zip_code": "19150",
            "distance": 8.002,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19027",
            "distance": 8.844,
            "city": "Elkins Park",
            "state": "PA"
        },
        {
            "zip_code": "19118",
            "distance": 7.994,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19483",
            "distance": 13.961,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19428",
            "distance": 9.981,
            "city": "Conshohocken",
            "state": "PA"
        },
        {
            "zip_code": "19344",
            "distance": 37.126,
            "city": "Honey Brook",
            "state": "PA"
        },
        {
            "zip_code": "19095",
            "distance": 9.16,
            "city": "Wyncote",
            "state": "PA"
        },
        {
            "zip_code": "19444",
            "distance": 9.38,
            "city": "Lafayette Hill",
            "state": "PA"
        },
        {
            "zip_code": "19021",
            "distance": 18.576,
            "city": "Croydon",
            "state": "PA"
        },
        {
            "zip_code": "19481",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19482",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19484",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19485",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19493",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19494",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19495",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19496",
            "distance": 16.975,
            "city": "Valley Forge",
            "state": "PA"
        },
        {
            "zip_code": "19488",
            "distance": 12.812,
            "city": "Norristown",
            "state": "PA"
        },
        {
            "zip_code": "19115",
            "distance": 12.304,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "19406",
            "distance": 13.49,
            "city": "King Of Prussia",
            "state": "PA"
        },
        {
            "zip_code": "19154",
            "distance": 14.882,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "17557",
            "distance": 47.247,
            "city": "New Holland",
            "state": "PA"
        },
        {
            "zip_code": "19487",
            "distance": 17.353,
            "city": "King Of Prussia",
            "state": "PA"
        },
        {
            "zip_code": "19489",
            "distance": 17.353,
            "city": "Norristown",
            "state": "PA"
        },
        {
            "zip_code": "19038",
            "distance": 9.909,
            "city": "Glenside",
            "state": "PA"
        },
        {
            "zip_code": "19020",
            "distance": 16.903,
            "city": "Bensalem",
            "state": "PA"
        },
        {
            "zip_code": "19343",
            "distance": 31.002,
            "city": "Glenmoore",
            "state": "PA"
        },
        {
            "zip_code": "19046",
            "distance": 11.04,
            "city": "Jenkintown",
            "state": "PA"
        },
        {
            "zip_code": "19425",
            "distance": 25.883,
            "city": "Chester Springs",
            "state": "PA"
        },
        {
            "zip_code": "08505",
            "distance": 26.563,
            "city": "Bordentown",
            "state": "NJ"
        },
        {
            "zip_code": "19405",
            "distance": 12.526,
            "city": "Bridgeport",
            "state": "PA"
        },
        {
            "zip_code": "08527",
            "distance": 45.66,
            "city": "Jackson",
            "state": "NJ"
        },
        {
            "zip_code": "19031",
            "distance": 10.45,
            "city": "Flourtown",
            "state": "PA"
        },
        {
            "zip_code": "19007",
            "distance": 20.988,
            "city": "Bristol",
            "state": "PA"
        },
        {
            "zip_code": "19075",
            "distance": 10.757,
            "city": "Oreland",
            "state": "PA"
        },
        {
            "zip_code": "19462",
            "distance": 11.693,
            "city": "Plymouth Meeting",
            "state": "PA"
        },
        {
            "zip_code": "08518",
            "distance": 23.636,
            "city": "Florence",
            "state": "NJ"
        },
        {
            "zip_code": "19116",
            "distance": 14.635,
            "city": "Philadelphia",
            "state": "PA"
        },
        {
            "zip_code": "08554",
            "distance": 24.83,
            "city": "Roebling",
            "state": "NJ"
        },
        {
            "zip_code": "08515",
            "distance": 30.463,
            "city": "Chesterfield",
            "state": "NJ"
        },
        {
            "zip_code": "17506",
            "distance": 45.341,
            "city": "Blue Ball",
            "state": "PA"
        },
        {
            "zip_code": "19432",
            "distance": 20.769,
            "city": "Devault",
            "state": "PA"
        },
        {
            "zip_code": "19407",
            "distance": 16.165,
            "city": "Audubon",
            "state": "PA"
        },
        {
            "zip_code": "19415",
            "distance": 13.418,
            "city": "Eagleville",
            "state": "PA"
        },
        {
            "zip_code": "19404",
            "distance": 13.139,
            "city": "Norristown",
            "state": "PA"
        },
        {
            "zip_code": "17555",
            "distance": 41.782,
            "city": "Narvon",
            "state": "PA"
        },
        {
            "zip_code": "19001",
            "distance": 12.197,
            "city": "Abington",
            "state": "PA"
        },
        {
            "zip_code": "19460",
            "distance": 21.025,
            "city": "Phoenixville",
            "state": "PA"
        },
        {
            "zip_code": "19442",
            "distance": 23.491,
            "city": "Kimberton",
            "state": "PA"
        },
        {
            "zip_code": "19421",
            "distance": 25.686,
            "city": "Birchrunville",
            "state": "PA"
        },
        {
            "zip_code": "19401",
            "distance": 13.788,
            "city": "Norristown",
            "state": "PA"
        },
        {
            "zip_code": "19456",
            "distance": 18.448,
            "city": "Oaks",
            "state": "PA"
        },
        {
            "zip_code": "19034",
            "distance": 12.145,
            "city": "Fort Washington",
            "state": "PA"
        },
        {
            "zip_code": "08514",
            "distance": 39.318,
            "city": "Cream Ridge",
            "state": "NJ"
        },
        {
            "zip_code": "19009",
            "distance": 14.288,
            "city": "Bryn Athyn",
            "state": "PA"
        },
        {
            "zip_code": "19470",
            "distance": 34.172,
            "city": "Saint Peters",
            "state": "PA"
        },
        {
            "zip_code": "19409",
            "distance": 15.156,
            "city": "Fairview Village",
            "state": "PA"
        },
        {
            "zip_code": "19424",
            "distance": 12.942,
            "city": "Blue Bell",
            "state": "PA"
        },
        {
            "zip_code": "19453",
            "distance": 20.209,
            "city": "Mont Clare",
            "state": "PA"
        },
        {
            "zip_code": "19057",
            "distance": 22.167,
            "city": "Levittown",
            "state": "PA"
        },
        {
            "zip_code": "17519",
            "distance": 45.401,
            "city": "East Earl",
            "state": "PA"
        },
        {
            "zip_code": "19025",
            "distance": 13.133,
            "city": "Dresher",
            "state": "PA"
        },
        {
            "zip_code": "19403",
            "distance": 16.116,
            "city": "Norristown",
            "state": "PA"
        },
        {
            "zip_code": "19056",
            "distance": 21.178,
            "city": "Levittown",
            "state": "PA"
        },
        {
            "zip_code": "19408",
            "distance": 16.975,
            "city": "Eagleville",
            "state": "PA"
        },
        {
            "zip_code": "19058",
            "distance": 22.706,
            "city": "Levittown",
            "state": "PA"
        },
        {
            "zip_code": "19055",
            "distance": 23.188,
            "city": "Levittown",
            "state": "PA"
        },
        {
            "zip_code": "19006",
            "distance": 15.872,
            "city": "Huntingdon Valley",
            "state": "PA"
        },
        {
            "zip_code": "19053",
            "distance": 17.961,
            "city": "Feasterville Trevose",
            "state": "PA"
        },
        {
            "zip_code": "19422",
            "distance": 14.343,
            "city": "Blue Bell",
            "state": "PA"
        },
        {
            "zip_code": "19090",
            "distance": 14.298,
            "city": "Willow Grove",
            "state": "PA"
        },
        {
            "zip_code": "08526",
            "distance": 39.981,
            "city": "Imlaystown",
            "state": "NJ"
        },
        {
            "zip_code": "17581",
            "distance": 47.109,
            "city": "Terre Hill",
            "state": "PA"
        },
        {
            "zip_code": "19520",
            "distance": 34.491,
            "city": "Elverson",
            "state": "PA"
        },
        {
            "zip_code": "08501",
            "distance": 36.36,
            "city": "Allentown",
            "state": "NJ"
        },
        {
            "zip_code": "19048",
            "distance": 21.134,
            "city": "Fort Washington",
            "state": "PA"
        },
        {
            "zip_code": "19049",
            "distance": 21.134,
            "city": "Fort Washington",
            "state": "PA"
        },
        {
            "zip_code": "08620",
            "distance": 32.443,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19475",
            "distance": 25.842,
            "city": "Spring City",
            "state": "PA"
        },
        {
            "zip_code": "19054",
            "distance": 24.987,
            "city": "Levittown",
            "state": "PA"
        },
        {
            "zip_code": "19543",
            "distance": 39.695,
            "city": "Morgantown",
            "state": "PA"
        },
        {
            "zip_code": "19040",
            "distance": 15.874,
            "city": "Hatboro",
            "state": "PA"
        },
        {
            "zip_code": "19420",
            "distance": 19.919,
            "city": "Arcola",
            "state": "PA"
        },
        {
            "zip_code": "19047",
            "distance": 21.557,
            "city": "Langhorne",
            "state": "PA"
        },
        {
            "zip_code": "19030",
            "distance": 24.505,
            "city": "Fairless Hills",
            "state": "PA"
        },
        {
            "zip_code": "19437",
            "distance": 15.788,
            "city": "Gwynedd Valley",
            "state": "PA"
        },
        {
            "zip_code": "19477",
            "distance": 15.626,
            "city": "Spring House",
            "state": "PA"
        },
        {
            "zip_code": "08611",
            "distance": 28.82,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19044",
            "distance": 15.91,
            "city": "Horsham",
            "state": "PA"
        },
        {
            "zip_code": "19002",
            "distance": 15.805,
            "city": "Ambler",
            "state": "PA"
        },
        {
            "zip_code": "18966",
            "distance": 18.77,
            "city": "Southampton",
            "state": "PA"
        },
        {
            "zip_code": "19490",
            "distance": 17.881,
            "city": "Worcester",
            "state": "PA"
        },
        {
            "zip_code": "19465",
            "distance": 30.249,
            "city": "Pottstown",
            "state": "PA"
        },
        {
            "zip_code": "08610",
            "distance": 30.148,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19426",
            "distance": 20.411,
            "city": "Collegeville",
            "state": "PA"
        },
        {
            "zip_code": "08510",
            "distance": 44.371,
            "city": "Millstone Township",
            "state": "NJ"
        },
        {
            "zip_code": "17507",
            "distance": 46.256,
            "city": "Bowmansville",
            "state": "PA"
        },
        {
            "zip_code": "19523",
            "distance": 38.277,
            "city": "Geigertown",
            "state": "PA"
        },
        {
            "zip_code": "19436",
            "distance": 16.981,
            "city": "Gwynedd",
            "state": "PA"
        },
        {
            "zip_code": "19067",
            "distance": 26.408,
            "city": "Morrisville",
            "state": "PA"
        },
        {
            "zip_code": "19457",
            "distance": 26.856,
            "city": "Parker Ford",
            "state": "PA"
        },
        {
            "zip_code": "19468",
            "distance": 24.616,
            "city": "Royersford",
            "state": "PA"
        },
        {
            "zip_code": "08691",
            "distance": 36.438,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19423",
            "distance": 19.347,
            "city": "Cedars",
            "state": "PA"
        },
        {
            "zip_code": "19486",
            "distance": 18.03,
            "city": "West Point",
            "state": "PA"
        },
        {
            "zip_code": "19455",
            "distance": 17.776,
            "city": "North Wales",
            "state": "PA"
        },
        {
            "zip_code": "18991",
            "distance": 18.664,
            "city": "Warminster",
            "state": "PA"
        },
        {
            "zip_code": "18974",
            "distance": 19.064,
            "city": "Warminster",
            "state": "PA"
        },
        {
            "zip_code": "08555",
            "distance": 42.471,
            "city": "Roosevelt",
            "state": "NJ"
        },
        {
            "zip_code": "08608",
            "distance": 29.063,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19430",
            "distance": 20.96,
            "city": "Creamery",
            "state": "PA"
        },
        {
            "zip_code": "08601",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08602",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08603",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08604",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08605",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08606",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08607",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08625",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08645",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08646",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08647",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08650",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08666",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08695",
            "distance": 29.402,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08629",
            "distance": 30.639,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19454",
            "distance": 18.445,
            "city": "North Wales",
            "state": "PA"
        },
        {
            "zip_code": "19474",
            "distance": 21.279,
            "city": "Skippack",
            "state": "PA"
        },
        {
            "zip_code": "18936",
            "distance": 18.423,
            "city": "Montgomeryville",
            "state": "PA"
        },
        {
            "zip_code": "08690",
            "distance": 33.884,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "18954",
            "distance": 21.422,
            "city": "Richboro",
            "state": "PA"
        },
        {
            "zip_code": "08609",
            "distance": 30.461,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19446",
            "distance": 19.714,
            "city": "Lansdale",
            "state": "PA"
        },
        {
            "zip_code": "19540",
            "distance": 44.887,
            "city": "Mohnton",
            "state": "PA"
        },
        {
            "zip_code": "19443",
            "distance": 20.827,
            "city": "Kulpsville",
            "state": "PA"
        },
        {
            "zip_code": "08619",
            "distance": 33.011,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08535",
            "distance": 45.102,
            "city": "Millstone Township",
            "state": "NJ"
        },
        {
            "zip_code": "19501",
            "distance": 49.838,
            "city": "Adamstown",
            "state": "PA"
        },
        {
            "zip_code": "18976",
            "distance": 20.269,
            "city": "Warrington",
            "state": "PA"
        },
        {
            "zip_code": "08618",
            "distance": 29.516,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19450",
            "distance": 22.77,
            "city": "Lederach",
            "state": "PA"
        },
        {
            "zip_code": "19451",
            "distance": 21.862,
            "city": "Mainland",
            "state": "PA"
        },
        {
            "zip_code": "18956",
            "distance": 22.481,
            "city": "Rushland",
            "state": "PA"
        },
        {
            "zip_code": "08561",
            "distance": 38.418,
            "city": "Windsor",
            "state": "NJ"
        },
        {
            "zip_code": "08638",
            "distance": 30.762,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "08520",
            "distance": 40.852,
            "city": "Hightstown",
            "state": "NJ"
        },
        {
            "zip_code": "18929",
            "distance": 21.454,
            "city": "Jamison",
            "state": "PA"
        },
        {
            "zip_code": "19473",
            "distance": 25.447,
            "city": "Schwenksville",
            "state": "PA"
        },
        {
            "zip_code": "19464",
            "distance": 30.276,
            "city": "Pottstown",
            "state": "PA"
        },
        {
            "zip_code": "18943",
            "distance": 23.826,
            "city": "Penns Park",
            "state": "PA"
        },
        {
            "zip_code": "19542",
            "distance": 36.599,
            "city": "Monocacy Station",
            "state": "PA"
        },
        {
            "zip_code": "18940",
            "distance": 25.067,
            "city": "Newtown",
            "state": "PA"
        },
        {
            "zip_code": "19508",
            "distance": 39.557,
            "city": "Birdsboro",
            "state": "PA"
        },
        {
            "zip_code": "08628",
            "distance": 28.858,
            "city": "Trenton",
            "state": "NJ"
        },
        {
            "zip_code": "19438",
            "distance": 23.722,
            "city": "Harleysville",
            "state": "PA"
        },
        {
            "zip_code": "18980",
            "distance": 23.559,
            "city": "Wycombe",
            "state": "PA"
        },
        {
            "zip_code": "19478",
            "distance": 25.567,
            "city": "Spring Mount",
            "state": "PA"
        },
        {
            "zip_code": "19441",
            "distance": 23.551,
            "city": "Harleysville",
            "state": "PA"
        },
        {
            "zip_code": "19518",
            "distance": 36.319,
            "city": "Douglassville",
            "state": "PA"
        },
        {
            "zip_code": "18915",
            "distance": 21.881,
            "city": "Colmar",
            "state": "PA"
        },
        {
            "zip_code": "19548",
            "distance": 35.364,
            "city": "Pine Forge",
            "state": "PA"
        },
        {
            "zip_code": "08550",
            "distance": 38.042,
            "city": "Princeton Junction",
            "state": "NJ"
        },
        {
            "zip_code": "08648",
            "distance": 33.96,
            "city": "Lawrence Township",
            "state": "NJ"
        },
        {
            "zip_code": "19492",
            "distance": 27.377,
            "city": "Zieglerville",
            "state": "PA"
        },
        {
            "zip_code": "19440",
            "distance": 23.143,
            "city": "Hatfield",
            "state": "PA"
        },
        {
            "zip_code": "18977",
            "distance": 28.192,
            "city": "Washington Crossing",
            "state": "PA"
        },
        {
            "zip_code": "18925",
            "distance": 24.003,
            "city": "Furlong",
            "state": "PA"
        },
        {
            "zip_code": "18914",
            "distance": 22.837,
            "city": "Chalfont",
            "state": "PA"
        },
        {
            "zip_code": "18957",
            "distance": 26.462,
            "city": "Salford",
            "state": "PA"
        },
        {
            "zip_code": "18958",
            "distance": 25.948,
            "city": "Salfordville",
            "state": "PA"
        },
        {
            "zip_code": "18924",
            "distance": 23.927,
            "city": "Franconia",
            "state": "PA"
        },
        {
            "zip_code": "18922",
            "distance": 24.216,
            "city": "Forest Grove",
            "state": "PA"
        },
        {
            "zip_code": "18946",
            "distance": 25.195,
            "city": "Pineville",
            "state": "PA"
        },
        {
            "zip_code": "07763",
            "distance": 49.883,
            "city": "Tennent",
            "state": "NJ"
        },
        {
            "zip_code": "19607",
            "distance": 45.634,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "18932",
            "distance": 23.173,
            "city": "Line Lexington",
            "state": "PA"
        },
        {
            "zip_code": "18979",
            "distance": 26.815,
            "city": "Woxall",
            "state": "PA"
        },
        {
            "zip_code": "18964",
            "distance": 24.932,
            "city": "Souderton",
            "state": "PA"
        },
        {
            "zip_code": "19525",
            "distance": 31.485,
            "city": "Gilbertsville",
            "state": "PA"
        },
        {
            "zip_code": "18901",
            "distance": 24.18,
            "city": "Doylestown",
            "state": "PA"
        },
        {
            "zip_code": "18084",
            "distance": 29.02,
            "city": "Sumneytown",
            "state": "PA"
        },
        {
            "zip_code": "08560",
            "distance": 30.568,
            "city": "Titusville",
            "state": "NJ"
        },
        {
            "zip_code": "18074",
            "distance": 29.878,
            "city": "Perkiomenville",
            "state": "PA"
        },
        {
            "zip_code": "08831",
            "distance": 47.712,
            "city": "Monroe Township",
            "state": "NJ"
        },
        {
            "zip_code": "18918",
            "distance": 26.554,
            "city": "Earlington",
            "state": "PA"
        },
        {
            "zip_code": "18927",
            "distance": 25.029,
            "city": "Hilltown",
            "state": "PA"
        },
        {
            "zip_code": "19519",
            "distance": 37.769,
            "city": "Earlville",
            "state": "PA"
        },
        {
            "zip_code": "18912",
            "distance": 26.349,
            "city": "Buckingham",
            "state": "PA"
        },
        {
            "zip_code": "08512",
            "distance": 43.627,
            "city": "Cranbury",
            "state": "NJ"
        },
        {
            "zip_code": "19611",
            "distance": 46.721,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "18969",
            "distance": 26.944,
            "city": "Telford",
            "state": "PA"
        },
        {
            "zip_code": "19435",
            "distance": 32.124,
            "city": "Frederick",
            "state": "PA"
        },
        {
            "zip_code": "19609",
            "distance": 49.293,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "19602",
            "distance": 45.663,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "08534",
            "distance": 33.421,
            "city": "Pennington",
            "state": "NJ"
        },
        {
            "zip_code": "19603",
            "distance": 45.912,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "19612",
            "distance": 45.912,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "18916",
            "distance": 26.002,
            "city": "Danboro",
            "state": "PA"
        },
        {
            "zip_code": "18928",
            "distance": 26.002,
            "city": "Holicong",
            "state": "PA"
        },
        {
            "zip_code": "08536",
            "distance": 41.605,
            "city": "Plainsboro",
            "state": "NJ"
        },
        {
            "zip_code": "19472",
            "distance": 32.789,
            "city": "Sassamansville",
            "state": "PA"
        },
        {
            "zip_code": "19606",
            "distance": 43.596,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "19535",
            "distance": 41.419,
            "city": "Limekiln",
            "state": "PA"
        },
        {
            "zip_code": "18971",
            "distance": 28.038,
            "city": "Tylersport",
            "state": "PA"
        },
        {
            "zip_code": "18934",
            "distance": 27.222,
            "city": "Mechanicsville",
            "state": "PA"
        },
        {
            "zip_code": "18931",
            "distance": 27.828,
            "city": "Lahaska",
            "state": "PA"
        },
        {
            "zip_code": "19610",
            "distance": 48.768,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "19545",
            "distance": 34.702,
            "city": "New Berlinville",
            "state": "PA"
        },
        {
            "zip_code": "18962",
            "distance": 27.09,
            "city": "Silverdale",
            "state": "PA"
        },
        {
            "zip_code": "19512",
            "distance": 37.031,
            "city": "Boyertown",
            "state": "PA"
        },
        {
            "zip_code": "08541",
            "distance": 39.645,
            "city": "Princeton",
            "state": "NJ"
        },
        {
            "zip_code": "08543",
            "distance": 39.645,
            "city": "Princeton",
            "state": "NJ"
        },
        {
            "zip_code": "08544",
            "distance": 39.645,
            "city": "Princeton",
            "state": "NJ"
        },
        {
            "zip_code": "18938",
            "distance": 29.126,
            "city": "New Hope",
            "state": "PA"
        },
        {
            "zip_code": "18902",
            "distance": 27.736,
            "city": "Doylestown",
            "state": "PA"
        },
        {
            "zip_code": "18054",
            "distance": 30.008,
            "city": "Green Lane",
            "state": "PA"
        },
        {
            "zip_code": "08542",
            "distance": 39.387,
            "city": "Princeton",
            "state": "NJ"
        },
        {
            "zip_code": "19601",
            "distance": 47.77,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "19604",
            "distance": 46.551,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "18923",
            "distance": 27.723,
            "city": "Fountainville",
            "state": "PA"
        },
        {
            "zip_code": "19640",
            "distance": 46.682,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "08540",
            "distance": 40.065,
            "city": "Princeton",
            "state": "NJ"
        },
        {
            "zip_code": "18960",
            "distance": 28.953,
            "city": "Sellersville",
            "state": "PA"
        },
        {
            "zip_code": "08810",
            "distance": 46.902,
            "city": "Dayton",
            "state": "NJ"
        },
        {
            "zip_code": "18926",
            "distance": 28.906,
            "city": "Gardenville",
            "state": "PA"
        },
        {
            "zip_code": "08530",
            "distance": 32.262,
            "city": "Lambertville",
            "state": "NJ"
        },
        {
            "zip_code": "18076",
            "distance": 32.383,
            "city": "Red Hill",
            "state": "PA"
        },
        {
            "zip_code": "18917",
            "distance": 28.909,
            "city": "Dublin",
            "state": "PA"
        },
        {
            "zip_code": "19505",
            "distance": 36.609,
            "city": "Bechtelsville",
            "state": "PA"
        },
        {
            "zip_code": "18913",
            "distance": 29.992,
            "city": "Carversville",
            "state": "PA"
        },
        {
            "zip_code": "18911",
            "distance": 29.431,
            "city": "Blooming Glen",
            "state": "PA"
        },
        {
            "zip_code": "18963",
            "distance": 30.955,
            "city": "Solebury",
            "state": "PA"
        },
        {
            "zip_code": "19547",
            "distance": 41.861,
            "city": "Oley",
            "state": "PA"
        },
        {
            "zip_code": "18073",
            "distance": 32.954,
            "city": "Pennsburg",
            "state": "PA"
        },
        {
            "zip_code": "08528",
            "distance": 42.59,
            "city": "Kingston",
            "state": "NJ"
        },
        {
            "zip_code": "08852",
            "distance": 45.344,
            "city": "Monmouth Junction",
            "state": "NJ"
        },
        {
            "zip_code": "18944",
            "distance": 29.821,
            "city": "Perkasie",
            "state": "PA"
        },
        {
            "zip_code": "18933",
            "distance": 30.829,
            "city": "Lumberville",
            "state": "PA"
        },
        {
            "zip_code": "08525",
            "distance": 37.559,
            "city": "Hopewell",
            "state": "NJ"
        },
        {
            "zip_code": "19605",
            "distance": 49.653,
            "city": "Reading",
            "state": "PA"
        },
        {
            "zip_code": "08504",
            "distance": 40.304,
            "city": "Blawenburg",
            "state": "NJ"
        },
        {
            "zip_code": "08553",
            "distance": 42.507,
            "city": "Rocky Hill",
            "state": "NJ"
        },
        {
            "zip_code": "19560",
            "distance": 47.985,
            "city": "Temple",
            "state": "PA"
        },
        {
            "zip_code": "19503",
            "distance": 36.685,
            "city": "Bally",
            "state": "PA"
        },
        {
            "zip_code": "18970",
            "distance": 32.776,
            "city": "Trumbauersville",
            "state": "PA"
        },
        {
            "zip_code": "08558",
            "distance": 40.872,
            "city": "Skillman",
            "state": "NJ"
        },
        {
            "zip_code": "19504",
            "distance": 37.721,
            "city": "Barto",
            "state": "PA"
        },
        {
            "zip_code": "18910",
            "distance": 31.921,
            "city": "Bedminster",
            "state": "PA"
        },
        {
            "zip_code": "18949",
            "distance": 32.226,
            "city": "Plumsteadville",
            "state": "PA"
        },
        {
            "zip_code": "08556",
            "distance": 33.74,
            "city": "Rosemont",
            "state": "NJ"
        },
        {
            "zip_code": "18041",
            "distance": 35.892,
            "city": "East Greenville",
            "state": "PA"
        },
        {
            "zip_code": "08824",
            "distance": 46.77,
            "city": "Kendall Park",
            "state": "NJ"
        },
        {
            "zip_code": "18947",
            "distance": 32.372,
            "city": "Pipersville",
            "state": "PA"
        },
        {
            "zip_code": "08559",
            "distance": 34.532,
            "city": "Stockton",
            "state": "NJ"
        },
        {
            "zip_code": "18968",
            "distance": 34.781,
            "city": "Spinnerstown",
            "state": "PA"
        },
        {
            "zip_code": "18070",
            "distance": 37.408,
            "city": "Palm",
            "state": "PA"
        },
        {
            "zip_code": "18935",
            "distance": 34.777,
            "city": "Milford Square",
            "state": "PA"
        },
        {
            "zip_code": "08823",
            "distance": 46.94,
            "city": "Franklin Park",
            "state": "NJ"
        },
        {
            "zip_code": "18950",
            "distance": 34.26,
            "city": "Point Pleasant",
            "state": "PA"
        },
        {
            "zip_code": "08551",
            "distance": 38.775,
            "city": "Ringoes",
            "state": "NJ"
        },
        {
            "zip_code": "19522",
            "distance": 47.085,
            "city": "Fleetwood",
            "state": "PA"
        },
        {
            "zip_code": "19510",
            "distance": 49.225,
            "city": "Blandon",
            "state": "PA"
        },
        {
            "zip_code": "08502",
            "distance": 44.442,
            "city": "Belle Mead",
            "state": "NJ"
        },
        {
            "zip_code": "18981",
            "distance": 34.657,
            "city": "Zionhill",
            "state": "PA"
        },
        {
            "zip_code": "08557",
            "distance": 36.605,
            "city": "Sergeantsville",
            "state": "NJ"
        },
        {
            "zip_code": "18056",
            "distance": 38.742,
            "city": "Hereford",
            "state": "PA"
        },
        {
            "zip_code": "18951",
            "distance": 35.066,
            "city": "Quakertown",
            "state": "PA"
        },
        {
            "zip_code": "18092",
            "distance": 39.008,
            "city": "Zionsville",
            "state": "PA"
        },
        {
            "zip_code": "18942",
            "distance": 35.477,
            "city": "Ottsville",
            "state": "PA"
        },
        {
            "zip_code": "18955",
            "distance": 36.306,
            "city": "Richlandtown",
            "state": "PA"
        },
        {
            "zip_code": "18011",
            "distance": 42.942,
            "city": "Alburtis",
            "state": "PA"
        },
        {
            "zip_code": "19536",
            "distance": 46.616,
            "city": "Lyon Station",
            "state": "PA"
        },
        {
            "zip_code": "18068",
            "distance": 40.112,
            "city": "Old Zionsville",
            "state": "PA"
        },
        {
            "zip_code": "19511",
            "distance": 46.395,
            "city": "Bowers",
            "state": "PA"
        },
        {
            "zip_code": "08803",
            "distance": 38.19,
            "city": "Baptistown",
            "state": "NJ"
        },
        {
            "zip_code": "19539",
            "distance": 45.105,
            "city": "Mertztown",
            "state": "PA"
        },
        {
            "zip_code": "08844",
            "distance": 46.521,
            "city": "Hillsborough",
            "state": "NJ"
        },
        {
            "zip_code": "18920",
            "distance": 37.748,
            "city": "Erwinna",
            "state": "PA"
        },
        {
            "zip_code": "18060",
            "distance": 39.515,
            "city": "Limeport",
            "state": "PA"
        },
        {
            "zip_code": "18062",
            "distance": 42.837,
            "city": "Macungie",
            "state": "PA"
        },
        {
            "zip_code": "19562",
            "distance": 46.187,
            "city": "Topton",
            "state": "PA"
        },
        {
            "zip_code": "18036",
            "distance": 39.299,
            "city": "Coopersburg",
            "state": "PA"
        },
        {
            "zip_code": "08825",
            "distance": 39.448,
            "city": "Frenchtown",
            "state": "NJ"
        },
        {
            "zip_code": "18049",
            "distance": 41.436,
            "city": "Emmaus",
            "state": "PA"
        },
        {
            "zip_code": "08821",
            "distance": 47.31,
            "city": "Flagtown",
            "state": "NJ"
        },
        {
            "zip_code": "18930",
            "distance": 38.88,
            "city": "Kintnersville",
            "state": "PA"
        },
        {
            "zip_code": "08887",
            "distance": 44.336,
            "city": "Three Bridges",
            "state": "NJ"
        },
        {
            "zip_code": "08822",
            "distance": 42.913,
            "city": "Flemington",
            "state": "NJ"
        },
        {
            "zip_code": "18972",
            "distance": 39.494,
            "city": "Upper Black Eddy",
            "state": "PA"
        },
        {
            "zip_code": "08853",
            "distance": 46.246,
            "city": "Neshanic Station",
            "state": "NJ"
        },
        {
            "zip_code": "18098",
            "distance": 42.363,
            "city": "Emmaus",
            "state": "PA"
        },
        {
            "zip_code": "18099",
            "distance": 42.363,
            "city": "Emmaus",
            "state": "PA"
        },
        {
            "zip_code": "18953",
            "distance": 39.488,
            "city": "Revere",
            "state": "PA"
        },
        {
            "zip_code": "18921",
            "distance": 39.515,
            "city": "Ferndale",
            "state": "PA"
        },
        {
            "zip_code": "18034",
            "distance": 42.18,
            "city": "Center Valley",
            "state": "PA"
        },
        {
            "zip_code": "19538",
            "distance": 48.594,
            "city": "Maxatawny",
            "state": "PA"
        },
        {
            "zip_code": "18046",
            "distance": 44.969,
            "city": "East Texas",
            "state": "PA"
        },
        {
            "zip_code": "18039",
            "distance": 40.924,
            "city": "Durham",
            "state": "PA"
        },
        {
            "zip_code": "08868",
            "distance": 43.087,
            "city": "Quakertown",
            "state": "NJ"
        },
        {
            "zip_code": "18031",
            "distance": 47.373,
            "city": "Breinigsville",
            "state": "PA"
        },
        {
            "zip_code": "18087",
            "distance": 46.282,
            "city": "Trexlertown",
            "state": "PA"
        },
        {
            "zip_code": "18081",
            "distance": 42.038,
            "city": "Springtown",
            "state": "PA"
        },
        {
            "zip_code": "18106",
            "distance": 46.194,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "08870",
            "distance": 48.958,
            "city": "Readington",
            "state": "NJ"
        },
        {
            "zip_code": "18077",
            "distance": 42.3,
            "city": "Riegelsville",
            "state": "PA"
        },
        {
            "zip_code": "18103",
            "distance": 44.946,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "08867",
            "distance": 44.273,
            "city": "Pittstown",
            "state": "NJ"
        },
        {
            "zip_code": "08885",
            "distance": 47.587,
            "city": "Stanton",
            "state": "NJ"
        },
        {
            "zip_code": "18195",
            "distance": 48.711,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "18015",
            "distance": 44.245,
            "city": "Bethlehem",
            "state": "PA"
        },
        {
            "zip_code": "18055",
            "distance": 44.092,
            "city": "Hellertown",
            "state": "PA"
        },
        {
            "zip_code": "08848",
            "distance": 44.258,
            "city": "Milford",
            "state": "NJ"
        },
        {
            "zip_code": "18175",
            "distance": 46.412,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "08834",
            "distance": 45.012,
            "city": "Little York",
            "state": "NJ"
        },
        {
            "zip_code": "18105",
            "distance": 47.062,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "18101",
            "distance": 46.731,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "18102",
            "distance": 47.227,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "18104",
            "distance": 48.707,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "18025",
            "distance": 46.485,
            "city": "Bethlehem",
            "state": "PA"
        },
        {
            "zip_code": "08801",
            "distance": 48.765,
            "city": "Annandale",
            "state": "NJ"
        },
        {
            "zip_code": "18018",
            "distance": 47.372,
            "city": "Bethlehem",
            "state": "PA"
        },
        {
            "zip_code": "18016",
            "distance": 47.645,
            "city": "Bethlehem",
            "state": "PA"
        },
        {
            "zip_code": "18109",
            "distance": 48.557,
            "city": "Allentown",
            "state": "PA"
        },
        {
            "zip_code": "08804",
            "distance": 47.854,
            "city": "Bloomsbury",
            "state": "NJ"
        },
        {
            "zip_code": "08809",
            "distance": 49.89,
            "city": "Clinton",
            "state": "NJ"
        },
        {
            "zip_code": "18042",
            "distance": 48.08,
            "city": "Easton",
            "state": "PA"
        },
        {
            "zip_code": "18017",
            "distance": 49.47,
            "city": "Bethlehem",
            "state": "PA"
        },
        {
            "zip_code": "18020",
            "distance": 49.783,
            "city": "Bethlehem",
            "state": "PA"
        },
        {
            "zip_code": "18043",
            "distance": 49.861,
            "city": "Easton",
            "state": "PA"
        },
        {
            "zip_code": "18044",
            "distance": 49.861,
            "city": "Easton",
            "state": "PA"
        }
    ],
  "SMASH Illinois Tech": [
        {
            "zip_code": "63036",
            "distance": 47.395,
            "city": "French Village",
            "state": "MO"
        },
        {
            "zip_code": "62261",
            "distance": 45.325,
            "city": "Modoc",
            "state": "IL"
        },
        {
            "zip_code": "62241",
            "distance": 45.741,
            "city": "Ellis Grove",
            "state": "IL"
        },
        {
            "zip_code": "63087",
            "distance": 46.76,
            "city": "Valles Mines",
            "state": "MO"
        },
        {
            "zip_code": "62297",
            "distance": 44.73,
            "city": "Walsh",
            "state": "IL"
        },
        {
            "zip_code": "63627",
            "distance": 41.443,
            "city": "Bloomsdale",
            "state": "MO"
        },
        {
            "zip_code": "63626",
            "distance": 49.515,
            "city": "Blackwell",
            "state": "MO"
        },
        {
            "zip_code": "62277",
            "distance": 37.84,
            "city": "Prairie Du Rocher",
            "state": "IL"
        },
        {
            "zip_code": "63020",
            "distance": 44.061,
            "city": "De Soto",
            "state": "MO"
        },
        {
            "zip_code": "62242",
            "distance": 38.149,
            "city": "Evansville",
            "state": "IL"
        },
        {
            "zip_code": "63030",
            "distance": 48.526,
            "city": "Fletcher",
            "state": "MO"
        },
        {
            "zip_code": "62286",
            "distance": 42.975,
            "city": "Sparta",
            "state": "IL"
        },
        {
            "zip_code": "63028",
            "distance": 37.56,
            "city": "Festus",
            "state": "MO"
        },
        {
            "zip_code": "62279",
            "distance": 34.094,
            "city": "Renault",
            "state": "IL"
        },
        {
            "zip_code": "62217",
            "distance": 35.947,
            "city": "Baldwin",
            "state": "IL"
        },
        {
            "zip_code": "62237",
            "distance": 44.249,
            "city": "Coulterville",
            "state": "IL"
        },
        {
            "zip_code": "63047",
            "distance": 36.264,
            "city": "Hematite",
            "state": "MO"
        },
        {
            "zip_code": "62244",
            "distance": 31.161,
            "city": "Fults",
            "state": "IL"
        },
        {
            "zip_code": "62278",
            "distance": 31.216,
            "city": "Red Bud",
            "state": "IL"
        },
        {
            "zip_code": "62292",
            "distance": 39.018,
            "city": "Tilden",
            "state": "IL"
        },
        {
            "zip_code": "62256",
            "distance": 29.72,
            "city": "Maeystown",
            "state": "IL"
        },
        {
            "zip_code": "63019",
            "distance": 31.604,
            "city": "Crystal City",
            "state": "MO"
        },
        {
            "zip_code": "63065",
            "distance": 33.445,
            "city": "Mapaville",
            "state": "MO"
        },
        {
            "zip_code": "63048",
            "distance": 30.034,
            "city": "Herculaneum",
            "state": "MO"
        },
        {
            "zip_code": "63050",
            "distance": 35.767,
            "city": "Hillsboro",
            "state": "MO"
        },
        {
            "zip_code": "63041",
            "distance": 43.955,
            "city": "Grubville",
            "state": "MO"
        },
        {
            "zip_code": "63060",
            "distance": 47.855,
            "city": "Lonedell",
            "state": "MO"
        },
        {
            "zip_code": "63023",
            "distance": 39.842,
            "city": "Dittmer",
            "state": "MO"
        },
        {
            "zip_code": "63066",
            "distance": 37.816,
            "city": "Morse Mill",
            "state": "MO"
        },
        {
            "zip_code": "63061",
            "distance": 44.507,
            "city": "Luebbering",
            "state": "MO"
        },
        {
            "zip_code": "62268",
            "distance": 41.257,
            "city": "Oakdale",
            "state": "IL"
        },
        {
            "zip_code": "62295",
            "distance": 26.819,
            "city": "Valmeyer",
            "state": "IL"
        },
        {
            "zip_code": "62257",
            "distance": 33.35,
            "city": "Marissa",
            "state": "IL"
        },
        {
            "zip_code": "63070",
            "distance": 29.161,
            "city": "Pevely",
            "state": "MO"
        },
        {
            "zip_code": "62248",
            "distance": 24.832,
            "city": "Hecker",
            "state": "IL"
        },
        {
            "zip_code": "62298",
            "distance": 23.072,
            "city": "Waterloo",
            "state": "IL"
        },
        {
            "zip_code": "62255",
            "distance": 29.936,
            "city": "Lenzburg",
            "state": "IL"
        },
        {
            "zip_code": "62264",
            "distance": 26.155,
            "city": "New Athens",
            "state": "IL"
        },
        {
            "zip_code": "62263",
            "distance": 45.149,
            "city": "Nashville",
            "state": "IL"
        },
        {
            "zip_code": "63057",
            "distance": 25.267,
            "city": "Liguori",
            "state": "MO"
        },
        {
            "zip_code": "63012",
            "distance": 26.612,
            "city": "Barnhart",
            "state": "MO"
        },
        {
            "zip_code": "63016",
            "distance": 33.514,
            "city": "Cedar Hill",
            "state": "MO"
        },
        {
            "zip_code": "62282",
            "distance": 29.96,
            "city": "Saint Libory",
            "state": "IL"
        },
        {
            "zip_code": "63053",
            "distance": 22.695,
            "city": "Kimmswick",
            "state": "MO"
        },
        {
            "zip_code": "63072",
            "distance": 41.052,
            "city": "Robertsville",
            "state": "MO"
        },
        {
            "zip_code": "62214",
            "distance": 34.4,
            "city": "Addieville",
            "state": "IL"
        },
        {
            "zip_code": "63051",
            "distance": 29.938,
            "city": "House Springs",
            "state": "MO"
        },
        {
            "zip_code": "63052",
            "distance": 23.851,
            "city": "Imperial",
            "state": "MO"
        },
        {
            "zip_code": "62285",
            "distance": 18.946,
            "city": "Smithton",
            "state": "IL"
        },
        {
            "zip_code": "63015",
            "distance": 37.318,
            "city": "Catawissa",
            "state": "MO"
        },
        {
            "zip_code": "62243",
            "distance": 20.626,
            "city": "Freeburg",
            "state": "IL"
        },
        {
            "zip_code": "63084",
            "distance": 49.957,
            "city": "Union",
            "state": "MO"
        },
        {
            "zip_code": "63010",
            "distance": 20.106,
            "city": "Arnold",
            "state": "MO"
        },
        {
            "zip_code": "62236",
            "distance": 14.934,
            "city": "Columbia",
            "state": "IL"
        },
        {
            "zip_code": "62271",
            "distance": 36.146,
            "city": "Okawville",
            "state": "IL"
        },
        {
            "zip_code": "62803",
            "distance": 47.536,
            "city": "Hoyleton",
            "state": "IL"
        },
        {
            "zip_code": "63089",
            "distance": 42.486,
            "city": "Villa Ridge",
            "state": "MO"
        },
        {
            "zip_code": "63129",
            "distance": 15.986,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62260",
            "distance": 12.87,
            "city": "Millstadt",
            "state": "IL"
        },
        {
            "zip_code": "62258",
            "distance": 23.132,
            "city": "Mascoutah",
            "state": "IL"
        },
        {
            "zip_code": "62220",
            "distance": 13.804,
            "city": "Belleville",
            "state": "IL"
        },
        {
            "zip_code": "63049",
            "distance": 23.964,
            "city": "High Ridge",
            "state": "MO"
        },
        {
            "zip_code": "62266",
            "distance": 27.28,
            "city": "New Memphis",
            "state": "IL"
        },
        {
            "zip_code": "63025",
            "distance": 28.111,
            "city": "Eureka",
            "state": "MO"
        },
        {
            "zip_code": "62224",
            "distance": 21.712,
            "city": "Mascoutah",
            "state": "IL"
        },
        {
            "zip_code": "63069",
            "distance": 33.687,
            "city": "Pacific",
            "state": "MO"
        },
        {
            "zip_code": "63128",
            "distance": 16.966,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63039",
            "distance": 39.154,
            "city": "Gray Summit",
            "state": "MO"
        },
        {
            "zip_code": "62265",
            "distance": 27.102,
            "city": "New Baden",
            "state": "IL"
        },
        {
            "zip_code": "63001",
            "distance": 30.316,
            "city": "Allenton",
            "state": "MO"
        },
        {
            "zip_code": "62240",
            "distance": 10.043,
            "city": "East Carondelet",
            "state": "IL"
        },
        {
            "zip_code": "63026",
            "distance": 19.882,
            "city": "Fenton",
            "state": "MO"
        },
        {
            "zip_code": "62215",
            "distance": 30.19,
            "city": "Albers",
            "state": "IL"
        },
        {
            "zip_code": "62221",
            "distance": 15.634,
            "city": "Belleville",
            "state": "IL"
        },
        {
            "zip_code": "63125",
            "distance": 12.018,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62218",
            "distance": 36.966,
            "city": "Bartelso",
            "state": "IL"
        },
        {
            "zip_code": "63055",
            "distance": 38.362,
            "city": "Labadie",
            "state": "MO"
        },
        {
            "zip_code": "63099",
            "distance": 18.512,
            "city": "Fenton",
            "state": "MO"
        },
        {
            "zip_code": "62222",
            "distance": 10.929,
            "city": "Belleville",
            "state": "IL"
        },
        {
            "zip_code": "63127",
            "distance": 16.789,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62226",
            "distance": 10.696,
            "city": "Belleville",
            "state": "IL"
        },
        {
            "zip_code": "62239",
            "distance": 7.628,
            "city": "Dupo",
            "state": "IL"
        },
        {
            "zip_code": "63090",
            "distance": 49.651,
            "city": "Washington",
            "state": "MO"
        },
        {
            "zip_code": "62223",
            "distance": 8.668,
            "city": "Belleville",
            "state": "IL"
        },
        {
            "zip_code": "62250",
            "distance": 47.725,
            "city": "Hoffman",
            "state": "IL"
        },
        {
            "zip_code": "62225",
            "distance": 17.038,
            "city": "Scott Air Force Base",
            "state": "IL"
        },
        {
            "zip_code": "62245",
            "distance": 31.9,
            "city": "Germantown",
            "state": "IL"
        },
        {
            "zip_code": "63123",
            "distance": 12.157,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63088",
            "distance": 20.502,
            "city": "Valley Park",
            "state": "MO"
        },
        {
            "zip_code": "63126",
            "distance": 14.439,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63111",
            "distance": 8.413,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63021",
            "distance": 22.499,
            "city": "Ballwin",
            "state": "MO"
        },
        {
            "zip_code": "62206",
            "distance": 5.192,
            "city": "East Saint Louis",
            "state": "IL"
        },
        {
            "zip_code": "63040",
            "distance": 27.179,
            "city": "Grover",
            "state": "MO"
        },
        {
            "zip_code": "63038",
            "distance": 28.867,
            "city": "Glencoe",
            "state": "MO"
        },
        {
            "zip_code": "63116",
            "distance": 8.021,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63122",
            "distance": 15.624,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62207",
            "distance": 4.369,
            "city": "East Saint Louis",
            "state": "IL"
        },
        {
            "zip_code": "63109",
            "distance": 9.317,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63119",
            "distance": 12.05,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63073",
            "distance": 34.916,
            "city": "Saint Albans",
            "state": "MO"
        },
        {
            "zip_code": "63022",
            "distance": 22.462,
            "city": "Ballwin",
            "state": "MO"
        },
        {
            "zip_code": "63024",
            "distance": 22.462,
            "city": "Ballwin",
            "state": "MO"
        },
        {
            "zip_code": "63118",
            "distance": 5.864,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62208",
            "distance": 8.046,
            "city": "Fairview Heights",
            "state": "IL"
        },
        {
            "zip_code": "63332",
            "distance": 40.835,
            "city": "Augusta",
            "state": "MO"
        },
        {
            "zip_code": "62289",
            "distance": 21.225,
            "city": "Summerfield",
            "state": "IL"
        },
        {
            "zip_code": "62203",
            "distance": 4.559,
            "city": "East Saint Louis",
            "state": "IL"
        },
        {
            "zip_code": "63342",
            "distance": 46.001,
            "city": "Dutzow",
            "state": "MO"
        },
        {
            "zip_code": "62269",
            "distance": 12.506,
            "city": "O Fallon",
            "state": "IL"
        },
        {
            "zip_code": "62252",
            "distance": 46.001,
            "city": "Huey",
            "state": "IL"
        },
        {
            "zip_code": "63011",
            "distance": 22.813,
            "city": "Ballwin",
            "state": "MO"
        },
        {
            "zip_code": "62219",
            "distance": 38.32,
            "city": "Beckemeyer",
            "state": "IL"
        },
        {
            "zip_code": "62254",
            "distance": 17.273,
            "city": "Lebanon",
            "state": "IL"
        },
        {
            "zip_code": "62205",
            "distance": 2.565,
            "city": "East Saint Louis",
            "state": "IL"
        },
        {
            "zip_code": "62202",
            "distance": 2.429,
            "city": "East Saint Louis",
            "state": "IL"
        },
        {
            "zip_code": "63139",
            "distance": 8.524,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63104",
            "distance": 4.603,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63143",
            "distance": 10.059,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62231",
            "distance": 44.342,
            "city": "Carlyle",
            "state": "IL"
        },
        {
            "zip_code": "63131",
            "distance": 16.526,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62216",
            "distance": 29.093,
            "city": "Aviston",
            "state": "IL"
        },
        {
            "zip_code": "63144",
            "distance": 11.33,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62293",
            "distance": 23.967,
            "city": "Trenton",
            "state": "IL"
        },
        {
            "zip_code": "63196",
            "distance": 3.657,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63190",
            "distance": 3.173,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63110",
            "distance": 6.984,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63155",
            "distance": 3.704,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63103",
            "distance": 4.265,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63145",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63150",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63151",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63156",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63157",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63158",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63160",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63163",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63164",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63166",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63167",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63169",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63171",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63177",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63178",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63179",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63180",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63182",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63188",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63195",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63197",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63199",
            "distance": 5.501,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62071",
            "distance": 1.121,
            "city": "National Stock Yards",
            "state": "IL"
        },
        {
            "zip_code": "63117",
            "distance": 10.34,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62232",
            "distance": 7.628,
            "city": "Caseyville",
            "state": "IL"
        },
        {
            "zip_code": "63101",
            "distance": 2.979,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62204",
            "distance": 2.788,
            "city": "East Saint Louis",
            "state": "IL"
        },
        {
            "zip_code": "62230",
            "distance": 32.876,
            "city": "Breese",
            "state": "IL"
        },
        {
            "zip_code": "63102",
            "distance": 2.613,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63124",
            "distance": 12.963,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63005",
            "distance": 27.611,
            "city": "Chesterfield",
            "state": "MO"
        },
        {
            "zip_code": "63105",
            "distance": 10.141,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62201",
            "distance": 0,
            "city": "East Saint Louis",
            "state": "IL"
        },
        {
            "zip_code": "63106",
            "distance": 3.679,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63108",
            "distance": 6.122,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63006",
            "distance": 23.748,
            "city": "Chesterfield",
            "state": "MO"
        },
        {
            "zip_code": "63198",
            "distance": 22.666,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63017",
            "distance": 21.122,
            "city": "Chesterfield",
            "state": "MO"
        },
        {
            "zip_code": "62059",
            "distance": 1.598,
            "city": "Lovejoy",
            "state": "IL"
        },
        {
            "zip_code": "63113",
            "distance": 5.888,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63141",
            "distance": 17.185,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63112",
            "distance": 7.764,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63341",
            "distance": 36.003,
            "city": "Defiance",
            "state": "MO"
        },
        {
            "zip_code": "63107",
            "distance": 4.124,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63130",
            "distance": 10.088,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62090",
            "distance": 2.411,
            "city": "Venice",
            "state": "IL"
        },
        {
            "zip_code": "63132",
            "distance": 13.014,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63133",
            "distance": 9.313,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62060",
            "distance": 2.6,
            "city": "Madison",
            "state": "IL"
        },
        {
            "zip_code": "63115",
            "distance": 5.981,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62234",
            "distance": 8.944,
            "city": "Collinsville",
            "state": "IL"
        },
        {
            "zip_code": "63120",
            "distance": 7.318,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63147",
            "distance": 5.355,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63146",
            "distance": 18.422,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63114",
            "distance": 12.701,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62294",
            "distance": 15.252,
            "city": "Troy",
            "state": "IL"
        },
        {
            "zip_code": "63304",
            "distance": 28.757,
            "city": "Saint Charles",
            "state": "MO"
        },
        {
            "zip_code": "62281",
            "distance": 19.915,
            "city": "Saint Jacob",
            "state": "IL"
        },
        {
            "zip_code": "63121",
            "distance": 9.737,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63365",
            "distance": 40.186,
            "city": "New Melle",
            "state": "MO"
        },
        {
            "zip_code": "62040",
            "distance": 5.829,
            "city": "Granite City",
            "state": "IL"
        },
        {
            "zip_code": "62062",
            "distance": 11.169,
            "city": "Maryville",
            "state": "IL"
        },
        {
            "zip_code": "63074",
            "distance": 14.563,
            "city": "Saint Ann",
            "state": "MO"
        },
        {
            "zip_code": "63043",
            "distance": 18.311,
            "city": "Maryland Heights",
            "state": "MO"
        },
        {
            "zip_code": "63140",
            "distance": 11.805,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63303",
            "distance": 22.762,
            "city": "Saint Charles",
            "state": "MO"
        },
        {
            "zip_code": "63134",
            "distance": 12.927,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63136",
            "distance": 9.404,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63135",
            "distance": 11.236,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63338",
            "distance": 28.45,
            "city": "Cottleville",
            "state": "MO"
        },
        {
            "zip_code": "63137",
            "distance": 8.293,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "63368",
            "distance": 32.64,
            "city": "O Fallon",
            "state": "MO"
        },
        {
            "zip_code": "62034",
            "distance": 11.843,
            "city": "Glen Carbon",
            "state": "IL"
        },
        {
            "zip_code": "62249",
            "distance": 26.617,
            "city": "Highland",
            "state": "IL"
        },
        {
            "zip_code": "63045",
            "distance": 19.469,
            "city": "Earth City",
            "state": "MO"
        },
        {
            "zip_code": "63044",
            "distance": 17.975,
            "city": "Bridgeton",
            "state": "MO"
        },
        {
            "zip_code": "63367",
            "distance": 36.433,
            "city": "Lake Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62253",
            "distance": 46.214,
            "city": "Keyesport",
            "state": "IL"
        },
        {
            "zip_code": "63042",
            "distance": 16.298,
            "city": "Hazelwood",
            "state": "MO"
        },
        {
            "zip_code": "63348",
            "distance": 44.481,
            "city": "Foristell",
            "state": "MO"
        },
        {
            "zip_code": "62273",
            "distance": 31.566,
            "city": "Pierron",
            "state": "IL"
        },
        {
            "zip_code": "62061",
            "distance": 21.895,
            "city": "Marine",
            "state": "IL"
        },
        {
            "zip_code": "63302",
            "distance": 22.347,
            "city": "Saint Charles",
            "state": "MO"
        },
        {
            "zip_code": "63032",
            "distance": 13.976,
            "city": "Florissant",
            "state": "MO"
        },
        {
            "zip_code": "63385",
            "distance": 40.082,
            "city": "Wentzville",
            "state": "MO"
        },
        {
            "zip_code": "63376",
            "distance": 27.316,
            "city": "Saint Peters",
            "state": "MO"
        },
        {
            "zip_code": "63346",
            "distance": 38.206,
            "city": "Flinthill",
            "state": "MO"
        },
        {
            "zip_code": "62026",
            "distance": 14.483,
            "city": "Edwardsville",
            "state": "IL"
        },
        {
            "zip_code": "63033",
            "distance": 12.982,
            "city": "Florissant",
            "state": "MO"
        },
        {
            "zip_code": "63138",
            "distance": 11.186,
            "city": "Saint Louis",
            "state": "MO"
        },
        {
            "zip_code": "62048",
            "distance": 11.153,
            "city": "Hartford",
            "state": "IL"
        },
        {
            "zip_code": "63390",
            "distance": 49.749,
            "city": "Wright City",
            "state": "MO"
        },
        {
            "zip_code": "62275",
            "distance": 33.745,
            "city": "Pocahontas",
            "state": "IL"
        },
        {
            "zip_code": "63031",
            "distance": 16.339,
            "city": "Florissant",
            "state": "MO"
        },
        {
            "zip_code": "62087",
            "distance": 12.589,
            "city": "South Roxana",
            "state": "IL"
        },
        {
            "zip_code": "62025",
            "distance": 17.088,
            "city": "Edwardsville",
            "state": "IL"
        },
        {
            "zip_code": "62084",
            "distance": 14.019,
            "city": "Roxana",
            "state": "IL"
        },
        {
            "zip_code": "63034",
            "distance": 16.204,
            "city": "Florissant",
            "state": "MO"
        },
        {
            "zip_code": "63366",
            "distance": 34.818,
            "city": "O Fallon",
            "state": "MO"
        },
        {
            "zip_code": "63301",
            "distance": 22.83,
            "city": "Saint Charles",
            "state": "MO"
        },
        {
            "zip_code": "62095",
            "distance": 15.473,
            "city": "Wood River",
            "state": "IL"
        },
        {
            "zip_code": "63386",
            "distance": 16.184,
            "city": "West Alton",
            "state": "MO"
        },
        {
            "zip_code": "62024",
            "distance": 16.374,
            "city": "East Alton",
            "state": "IL"
        },
        {
            "zip_code": "62284",
            "distance": 47.426,
            "city": "Smithboro",
            "state": "IL"
        },
        {
            "zip_code": "62001",
            "distance": 26.846,
            "city": "Alhambra",
            "state": "IL"
        },
        {
            "zip_code": "62046",
            "distance": 23.205,
            "city": "Hamel",
            "state": "IL"
        },
        {
            "zip_code": "62246",
            "distance": 41.964,
            "city": "Greenville",
            "state": "IL"
        },
        {
            "zip_code": "62018",
            "distance": 18.472,
            "city": "Cottage Hills",
            "state": "IL"
        },
        {
            "zip_code": "62036",
            "distance": 30.744,
            "city": "Golden Eagle",
            "state": "IL"
        },
        {
            "zip_code": "62010",
            "distance": 19.791,
            "city": "Bethalto",
            "state": "IL"
        },
        {
            "zip_code": "63362",
            "distance": 43.768,
            "city": "Moscow Mills",
            "state": "MO"
        },
        {
            "zip_code": "62067",
            "distance": 21.411,
            "city": "Moro",
            "state": "IL"
        },
        {
            "zip_code": "63373",
            "distance": 23.723,
            "city": "Portage Des Sioux",
            "state": "MO"
        },
        {
            "zip_code": "63369",
            "distance": 39.124,
            "city": "Old Monroe",
            "state": "MO"
        },
        {
            "zip_code": "62097",
            "distance": 25.453,
            "city": "Worden",
            "state": "IL"
        },
        {
            "zip_code": "62002",
            "distance": 20.344,
            "city": "Alton",
            "state": "IL"
        },
        {
            "zip_code": "62262",
            "distance": 49.965,
            "city": "Mulberry Grove",
            "state": "IL"
        },
        {
            "zip_code": "62074",
            "distance": 32.385,
            "city": "New Douglas",
            "state": "IL"
        },
        {
            "zip_code": "62013",
            "distance": 31.787,
            "city": "Brussels",
            "state": "IL"
        },
        {
            "zip_code": "62028",
            "distance": 24.579,
            "city": "Elsah",
            "state": "IL"
        },
        {
            "zip_code": "62035",
            "distance": 22.689,
            "city": "Godfrey",
            "state": "IL"
        },
        {
            "zip_code": "62058",
            "distance": 30.134,
            "city": "Livingston",
            "state": "IL"
        },
        {
            "zip_code": "62086",
            "distance": 38.085,
            "city": "Sorento",
            "state": "IL"
        },
        {
            "zip_code": "62021",
            "distance": 25.038,
            "city": "Dorsey",
            "state": "IL"
        },
        {
            "zip_code": "62022",
            "distance": 26.743,
            "city": "Dow",
            "state": "IL"
        },
        {
            "zip_code": "63389",
            "distance": 42.495,
            "city": "Winfield",
            "state": "MO"
        },
        {
            "zip_code": "62037",
            "distance": 30.778,
            "city": "Grafton",
            "state": "IL"
        },
        {
            "zip_code": "62088",
            "distance": 31.342,
            "city": "Staunton",
            "state": "IL"
        },
        {
            "zip_code": "62019",
            "distance": 45.629,
            "city": "Donnellson",
            "state": "IL"
        },
        {
            "zip_code": "62077",
            "distance": 42.647,
            "city": "Panama",
            "state": "IL"
        },
        {
            "zip_code": "62014",
            "distance": 29.386,
            "city": "Bunker Hill",
            "state": "IL"
        },
        {
            "zip_code": "62012",
            "distance": 27.667,
            "city": "Brighton",
            "state": "IL"
        },
        {
            "zip_code": "62006",
            "distance": 40.133,
            "city": "Batchtown",
            "state": "IL"
        },
        {
            "zip_code": "62091",
            "distance": 40.267,
            "city": "Walshville",
            "state": "IL"
        },
        {
            "zip_code": "62093",
            "distance": 32.969,
            "city": "Wilsonville",
            "state": "IL"
        },
        {
            "zip_code": "63347",
            "distance": 44.742,
            "city": "Foley",
            "state": "MO"
        },
        {
            "zip_code": "62085",
            "distance": 35.218,
            "city": "Sawyerville",
            "state": "IL"
        },
        {
            "zip_code": "62069",
            "distance": 37.532,
            "city": "Mount Olive",
            "state": "IL"
        },
        {
            "zip_code": "62009",
            "distance": 35.962,
            "city": "Benld",
            "state": "IL"
        },
        {
            "zip_code": "62079",
            "distance": 32.209,
            "city": "Piasa",
            "state": "IL"
        },
        {
            "zip_code": "62052",
            "distance": 33.652,
            "city": "Jerseyville",
            "state": "IL"
        },
        {
            "zip_code": "62031",
            "distance": 38.702,
            "city": "Fieldon",
            "state": "IL"
        },
        {
            "zip_code": "62023",
            "distance": 37.492,
            "city": "Eagarville",
            "state": "IL"
        },
        {
            "zip_code": "62047",
            "distance": 42.178,
            "city": "Hardin",
            "state": "IL"
        },
        {
            "zip_code": "62089",
            "distance": 48.248,
            "city": "Taylor Springs",
            "state": "IL"
        },
        {
            "zip_code": "62049",
            "distance": 48.883,
            "city": "Hillsboro",
            "state": "IL"
        },
        {
            "zip_code": "62033",
            "distance": 37.648,
            "city": "Gillespie",
            "state": "IL"
        },
        {
            "zip_code": "62685",
            "distance": 35.029,
            "city": "Shipman",
            "state": "IL"
        },
        {
            "zip_code": "62030",
            "distance": 35.28,
            "city": "Fidelity",
            "state": "IL"
        },
        {
            "zip_code": "62056",
            "distance": 44.727,
            "city": "Litchfield",
            "state": "IL"
        },
        {
            "zip_code": "62063",
            "distance": 38.289,
            "city": "Medora",
            "state": "IL"
        },
        {
            "zip_code": "62054",
            "distance": 40.15,
            "city": "Kane",
            "state": "IL"
        },
        {
            "zip_code": "62065",
            "distance": 48.133,
            "city": "Michael",
            "state": "IL"
        },
        {
            "zip_code": "62027",
            "distance": 47.594,
            "city": "Eldred",
            "state": "IL"
        },
        {
            "zip_code": "62630",
            "distance": 42.264,
            "city": "Chesterfield",
            "state": "IL"
        },
        {
            "zip_code": "62081",
            "distance": 43.119,
            "city": "Rockbridge",
            "state": "IL"
        },
        {
            "zip_code": "62626",
            "distance": 46.208,
            "city": "Carlinville",
            "state": "IL"
        },
        {
            "zip_code": "62016",
            "distance": 47.611,
            "city": "Carrollton",
            "state": "IL"
        },
        {
            "zip_code": "62649",
            "distance": 49.417,
            "city": "Hettick",
            "state": "IL"
        },
        {
            "zip_code": "62044",
            "distance": 49.85,
            "city": "Greenfield",
            "state": "IL"
        },
        {
            "zip_code": "62952",
            "distance": 23.408,
            "city": "Jonesboro",
            "state": "IL"
        },
        {
            "zip_code": "62906",
            "distance": 19.238,
            "city": "Anna",
            "state": "IL"
        },
        {
            "zip_code": "62912",
            "distance": 20.568,
            "city": "Buncombe",
            "state": "IL"
        },
        {
            "zip_code": "62998",
            "distance": 20.782,
            "city": "Wolf Lake",
            "state": "IL"
        },
        {
            "zip_code": "62920",
            "distance": 13.15,
            "city": "Cobden",
            "state": "IL"
        },
        {
            "zip_code": "62939",
            "distance": 17.982,
            "city": "Goreville",
            "state": "IL"
        },
        {
            "zip_code": "62905",
            "distance": 15.222,
            "city": "Alto Pass",
            "state": "IL"
        },
        {
            "zip_code": "63732",
            "distance": 22.416,
            "city": "Altenburg",
            "state": "MO"
        },
        {
            "zip_code": "62922",
            "distance": 23.053,
            "city": "Creal Springs",
            "state": "IL"
        },
        {
            "zip_code": "62958",
            "distance": 7.557,
            "city": "Makanda",
            "state": "IL"
        },
        {
            "zip_code": "62975",
            "distance": 12.183,
            "city": "Pomona",
            "state": "IL"
        },
        {
            "zip_code": "62942",
            "distance": 15.714,
            "city": "Grand Tower",
            "state": "IL"
        },
        {
            "zip_code": "62902",
            "distance": 7.281,
            "city": "Carbondale",
            "state": "IL"
        },
        {
            "zip_code": "63748",
            "distance": 23.31,
            "city": "Frohna",
            "state": "MO"
        },
        {
            "zip_code": "62903",
            "distance": 5.792,
            "city": "Carbondale",
            "state": "IL"
        },
        {
            "zip_code": "62959",
            "distance": 16.376,
            "city": "Marion",
            "state": "IL"
        },
        {
            "zip_code": "62940",
            "distance": 14.369,
            "city": "Gorham",
            "state": "IL"
        },
        {
            "zip_code": "62901",
            "distance": 0,
            "city": "Carbondale",
            "state": "IL"
        },
        {
            "zip_code": "62950",
            "distance": 19.228,
            "city": "Jacob",
            "state": "IL"
        },
        {
            "zip_code": "62933",
            "distance": 10.277,
            "city": "Energy",
            "state": "IL"
        },
        {
            "zip_code": "62966",
            "distance": 8.154,
            "city": "Murphysboro",
            "state": "IL"
        },
        {
            "zip_code": "62974",
            "distance": 23.436,
            "city": "Pittsburg",
            "state": "IL"
        },
        {
            "zip_code": "62915",
            "distance": 5.773,
            "city": "Cambria",
            "state": "IL"
        },
        {
            "zip_code": "62918",
            "distance": 7.451,
            "city": "Carterville",
            "state": "IL"
        },
        {
            "zip_code": "62921",
            "distance": 8.089,
            "city": "Colp",
            "state": "IL"
        },
        {
            "zip_code": "62948",
            "distance": 11.129,
            "city": "Herrin",
            "state": "IL"
        },
        {
            "zip_code": "62924",
            "distance": 5.834,
            "city": "De Soto",
            "state": "IL"
        },
        {
            "zip_code": "62951",
            "distance": 16.359,
            "city": "Johnston City",
            "state": "IL"
        },
        {
            "zip_code": "62949",
            "distance": 7.073,
            "city": "Hurst",
            "state": "IL"
        },
        {
            "zip_code": "62841",
            "distance": 14.096,
            "city": "Freeman Spur",
            "state": "IL"
        },
        {
            "zip_code": "62999",
            "distance": 12.27,
            "city": "Zeigler",
            "state": "IL"
        },
        {
            "zip_code": "62907",
            "distance": 18.262,
            "city": "Ava",
            "state": "IL"
        },
        {
            "zip_code": "62896",
            "distance": 19.104,
            "city": "West Frankfort",
            "state": "IL"
        },
        {
            "zip_code": "62932",
            "distance": 10.632,
            "city": "Elkville",
            "state": "IL"
        },
        {
            "zip_code": "62971",
            "distance": 16.415,
            "city": "Oraville",
            "state": "IL"
        },
        {
            "zip_code": "62840",
            "distance": 23.007,
            "city": "Frankfort Heights",
            "state": "IL"
        },
        {
            "zip_code": "62983",
            "distance": 12.299,
            "city": "Royalton",
            "state": "IL"
        },
        {
            "zip_code": "62994",
            "distance": 13.688,
            "city": "Vergennes",
            "state": "IL"
        },
        {
            "zip_code": "62874",
            "distance": 17.779,
            "city": "Orient",
            "state": "IL"
        },
        {
            "zip_code": "62916",
            "distance": 23.683,
            "city": "Campbell Hill",
            "state": "IL"
        },
        {
            "zip_code": "62927",
            "distance": 13.64,
            "city": "Dowell",
            "state": "IL"
        },
        {
            "zip_code": "62865",
            "distance": 17.573,
            "city": "Mulkeytown",
            "state": "IL"
        },
        {
            "zip_code": "62819",
            "distance": 19.529,
            "city": "Buckner",
            "state": "IL"
        },
        {
            "zip_code": "62822",
            "distance": 18.459,
            "city": "Christopher",
            "state": "IL"
        },
        {
            "zip_code": "62812",
            "distance": 23.93,
            "city": "Benton",
            "state": "IL"
        },
        {
            "zip_code": "62825",
            "distance": 19.521,
            "city": "Coello",
            "state": "IL"
        },
        {
            "zip_code": "62832",
            "distance": 18.974,
            "city": "Du Quoin",
            "state": "IL"
        },
        {
            "zip_code": "62891",
            "distance": 21.126,
            "city": "Valier",
            "state": "IL"
        },
        {
            "zip_code": "60412",
            "distance": 23.83,
            "city": "Chicago Heights",
            "state": "IL"
        },
        {
            "zip_code": "60443",
            "distance": 24.524,
            "city": "Matteson",
            "state": "IL"
        },
        {
            "zip_code": "60411",
            "distance": 23.287,
            "city": "Chicago Heights",
            "state": "IL"
        },
        {
            "zip_code": "60461",
            "distance": 22.649,
            "city": "Olympia Fields",
            "state": "IL"
        },
        {
            "zip_code": "46319",
            "distance": 24.401,
            "city": "Griffith",
            "state": "IN"
        },
        {
            "zip_code": "60422",
            "distance": 21.5,
            "city": "Flossmoor",
            "state": "IL"
        },
        {
            "zip_code": "60425",
            "distance": 20.691,
            "city": "Glenwood",
            "state": "IL"
        },
        {
            "zip_code": "46408",
            "distance": 24.505,
            "city": "Gary",
            "state": "IN"
        },
        {
            "zip_code": "46322",
            "distance": 22.332,
            "city": "Highland",
            "state": "IN"
        },
        {
            "zip_code": "46321",
            "distance": 21.472,
            "city": "Munster",
            "state": "IN"
        },
        {
            "zip_code": "60430",
            "distance": 19.87,
            "city": "Homewood",
            "state": "IL"
        },
        {
            "zip_code": "60487",
            "distance": 22.311,
            "city": "Tinley Park",
            "state": "IL"
        },
        {
            "zip_code": "60478",
            "distance": 20.137,
            "city": "Country Club Hills",
            "state": "IL"
        },
        {
            "zip_code": "60438",
            "distance": 19.625,
            "city": "Lansing",
            "state": "IL"
        },
        {
            "zip_code": "60476",
            "distance": 19.065,
            "city": "Thornton",
            "state": "IL"
        },
        {
            "zip_code": "60477",
            "distance": 20.677,
            "city": "Tinley Park",
            "state": "IL"
        },
        {
            "zip_code": "60429",
            "distance": 18.964,
            "city": "Hazel Crest",
            "state": "IL"
        },
        {
            "zip_code": "46407",
            "distance": 23.847,
            "city": "Gary",
            "state": "IN"
        },
        {
            "zip_code": "46324",
            "distance": 19.161,
            "city": "Hammond",
            "state": "IN"
        },
        {
            "zip_code": "46404",
            "distance": 22.17,
            "city": "Gary",
            "state": "IN"
        },
        {
            "zip_code": "46323",
            "distance": 19.71,
            "city": "Hammond",
            "state": "IN"
        },
        {
            "zip_code": "46401",
            "distance": 22.913,
            "city": "Gary",
            "state": "IN"
        },
        {
            "zip_code": "60473",
            "distance": 17.151,
            "city": "South Holland",
            "state": "IL"
        },
        {
            "zip_code": "46402",
            "distance": 22.732,
            "city": "Gary",
            "state": "IN"
        },
        {
            "zip_code": "60428",
            "distance": 17.279,
            "city": "Markham",
            "state": "IL"
        },
        {
            "zip_code": "60467",
            "distance": 21.586,
            "city": "Orland Park",
            "state": "IL"
        },
        {
            "zip_code": "60491",
            "distance": 24.194,
            "city": "Homer Glen",
            "state": "IL"
        },
        {
            "zip_code": "46406",
            "distance": 20.086,
            "city": "Gary",
            "state": "IN"
        },
        {
            "zip_code": "60452",
            "distance": 17.741,
            "city": "Oak Forest",
            "state": "IL"
        },
        {
            "zip_code": "46403",
            "distance": 24.827,
            "city": "Gary",
            "state": "IN"
        },
        {
            "zip_code": "60426",
            "distance": 16.277,
            "city": "Harvey",
            "state": "IL"
        },
        {
            "zip_code": "60409",
            "distance": 16.406,
            "city": "Calumet City",
            "state": "IL"
        },
        {
            "zip_code": "46325",
            "distance": 17.007,
            "city": "Hammond",
            "state": "IN"
        },
        {
            "zip_code": "60462",
            "distance": 18.594,
            "city": "Orland Park",
            "state": "IL"
        },
        {
            "zip_code": "46327",
            "distance": 16.332,
            "city": "Hammond",
            "state": "IN"
        },
        {
            "zip_code": "60469",
            "distance": 15.309,
            "city": "Posen",
            "state": "IL"
        },
        {
            "zip_code": "60419",
            "distance": 14.961,
            "city": "Dolton",
            "state": "IL"
        },
        {
            "zip_code": "60445",
            "distance": 15.655,
            "city": "Midlothian",
            "state": "IL"
        },
        {
            "zip_code": "60472",
            "distance": 14.594,
            "city": "Robbins",
            "state": "IL"
        },
        {
            "zip_code": "46312",
            "distance": 16.249,
            "city": "East Chicago",
            "state": "IN"
        },
        {
            "zip_code": "60827",
            "distance": 13.512,
            "city": "Riverdale",
            "state": "IL"
        },
        {
            "zip_code": "60406",
            "distance": 13.458,
            "city": "Blue Island",
            "state": "IL"
        },
        {
            "zip_code": "60463",
            "distance": 15.223,
            "city": "Palos Heights",
            "state": "IL"
        },
        {
            "zip_code": "60464",
            "distance": 17.52,
            "city": "Palos Park",
            "state": "IL"
        },
        {
            "zip_code": "60633",
            "distance": 12.917,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60803",
            "distance": 13.148,
            "city": "Alsip",
            "state": "IL"
        },
        {
            "zip_code": "60439",
            "distance": 21.578,
            "city": "Lemont",
            "state": "IL"
        },
        {
            "zip_code": "46394",
            "distance": 13.476,
            "city": "Whiting",
            "state": "IN"
        },
        {
            "zip_code": "60482",
            "distance": 13.804,
            "city": "Worth",
            "state": "IL"
        },
        {
            "zip_code": "60628",
            "distance": 10.65,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "46320",
            "distance": 12.086,
            "city": "Hammond",
            "state": "IN"
        },
        {
            "zip_code": "60655",
            "distance": 11.154,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60465",
            "distance": 14.652,
            "city": "Palos Hills",
            "state": "IL"
        },
        {
            "zip_code": "60643",
            "distance": 10.192,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60415",
            "distance": 12.637,
            "city": "Chicago Ridge",
            "state": "IL"
        },
        {
            "zip_code": "60454",
            "distance": 11.359,
            "city": "Oak Lawn",
            "state": "IL"
        },
        {
            "zip_code": "60453",
            "distance": 11.234,
            "city": "Oak Lawn",
            "state": "IL"
        },
        {
            "zip_code": "60617",
            "distance": 9.499,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60805",
            "distance": 9.405,
            "city": "Evergreen Park",
            "state": "IL"
        },
        {
            "zip_code": "60457",
            "distance": 13.394,
            "city": "Hickory Hills",
            "state": "IL"
        },
        {
            "zip_code": "60480",
            "distance": 15.477,
            "city": "Willow Springs",
            "state": "IL"
        },
        {
            "zip_code": "60456",
            "distance": 9.597,
            "city": "Hometown",
            "state": "IL"
        },
        {
            "zip_code": "60517",
            "distance": 22.725,
            "city": "Woodridge",
            "state": "IL"
        },
        {
            "zip_code": "60620",
            "distance": 7.362,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60455",
            "distance": 11.864,
            "city": "Bridgeview",
            "state": "IL"
        },
        {
            "zip_code": "60527",
            "distance": 17.205,
            "city": "Willowbrook",
            "state": "IL"
        },
        {
            "zip_code": "60619",
            "distance": 7.059,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60459",
            "distance": 10.172,
            "city": "Burbank",
            "state": "IL"
        },
        {
            "zip_code": "60561",
            "distance": 19.652,
            "city": "Darien",
            "state": "IL"
        },
        {
            "zip_code": "60652",
            "distance": 8.162,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60458",
            "distance": 12.211,
            "city": "Justice",
            "state": "IL"
        },
        {
            "zip_code": "60499",
            "distance": 10.352,
            "city": "Bedford Park",
            "state": "IL"
        },
        {
            "zip_code": "60516",
            "distance": 20.853,
            "city": "Downers Grove",
            "state": "IL"
        },
        {
            "zip_code": "60649",
            "distance": 6.384,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60636",
            "distance": 5.304,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60629",
            "distance": 6.548,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60621",
            "distance": 4.801,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60501",
            "distance": 11.171,
            "city": "Summit Argo",
            "state": "IL"
        },
        {
            "zip_code": "60638",
            "distance": 8.707,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60637",
            "distance": 4.543,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60525",
            "distance": 13.427,
            "city": "La Grange",
            "state": "IL"
        },
        {
            "zip_code": "60532",
            "distance": 23.999,
            "city": "Lisle",
            "state": "IL"
        },
        {
            "zip_code": "60559",
            "distance": 18.303,
            "city": "Westmont",
            "state": "IL"
        },
        {
            "zip_code": "60514",
            "distance": 17.735,
            "city": "Clarendon Hills",
            "state": "IL"
        },
        {
            "zip_code": "60522",
            "distance": 15.535,
            "city": "Hinsdale",
            "state": "IL"
        },
        {
            "zip_code": "60521",
            "distance": 15.959,
            "city": "Hinsdale",
            "state": "IL"
        },
        {
            "zip_code": "60615",
            "distance": 3.32,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60558",
            "distance": 14.505,
            "city": "Western Springs",
            "state": "IL"
        },
        {
            "zip_code": "60632",
            "distance": 5.19,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60515",
            "distance": 20.668,
            "city": "Downers Grove",
            "state": "IL"
        },
        {
            "zip_code": "60609",
            "distance": 2.789,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60534",
            "distance": 10.492,
            "city": "Lyons",
            "state": "IL"
        },
        {
            "zip_code": "60653",
            "distance": 1.964,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60513",
            "distance": 11.584,
            "city": "Brookfield",
            "state": "IL"
        },
        {
            "zip_code": "60664",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60668",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60669",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60670",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60673",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60674",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60675",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60677",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60678",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60680",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60681",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60684",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60685",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60687",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60690",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60691",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60693",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60694",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60697",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60699",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60701",
            "distance": 3.04,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60526",
            "distance": 12.891,
            "city": "La Grange Park",
            "state": "IL"
        },
        {
            "zip_code": "60402",
            "distance": 8.638,
            "city": "Berwyn",
            "state": "IL"
        },
        {
            "zip_code": "60523",
            "distance": 16.938,
            "city": "Oak Brook",
            "state": "IL"
        },
        {
            "zip_code": "60546",
            "distance": 10.186,
            "city": "Riverside",
            "state": "IL"
        },
        {
            "zip_code": "60804",
            "distance": 7.006,
            "city": "Cicero",
            "state": "IL"
        },
        {
            "zip_code": "60570",
            "distance": 14.19,
            "city": "Hinsdale",
            "state": "IL"
        },
        {
            "zip_code": "60616",
            "distance": 0,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60608",
            "distance": 2.393,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60154",
            "distance": 13.773,
            "city": "Westchester",
            "state": "IL"
        },
        {
            "zip_code": "60623",
            "distance": 4.815,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60290",
            "distance": 1.373,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60686",
            "distance": 1.373,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60688",
            "distance": 1.373,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60695",
            "distance": 1.373,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60696",
            "distance": 1.373,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60155",
            "distance": 11.976,
            "city": "Broadview",
            "state": "IL"
        },
        {
            "zip_code": "60141",
            "distance": 11.035,
            "city": "Hines",
            "state": "IL"
        },
        {
            "zip_code": "60138",
            "distance": 22.464,
            "city": "Glen Ellyn",
            "state": "IL"
        },
        {
            "zip_code": "60682",
            "distance": 9.611,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60137",
            "distance": 22.542,
            "city": "Glen Ellyn",
            "state": "IL"
        },
        {
            "zip_code": "60130",
            "distance": 10.047,
            "city": "Forest Park",
            "state": "IL"
        },
        {
            "zip_code": "60162",
            "distance": 14.386,
            "city": "Hillside",
            "state": "IL"
        },
        {
            "zip_code": "60605",
            "distance": 1.607,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60663",
            "distance": 1.759,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60679",
            "distance": 1.759,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60689",
            "distance": 1.759,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60304",
            "distance": 8.73,
            "city": "Oak Park",
            "state": "IL"
        },
        {
            "zip_code": "60148",
            "distance": 20.499,
            "city": "Lombard",
            "state": "IL"
        },
        {
            "zip_code": "60607",
            "distance": 2.511,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60181",
            "distance": 18.267,
            "city": "Villa Park",
            "state": "IL"
        },
        {
            "zip_code": "60604",
            "distance": 2.308,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60153",
            "distance": 11.51,
            "city": "Maywood",
            "state": "IL"
        },
        {
            "zip_code": "60303",
            "distance": 8.378,
            "city": "Oak Park",
            "state": "IL"
        },
        {
            "zip_code": "60644",
            "distance": 7.231,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60603",
            "distance": 2.439,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60612",
            "distance": 4.086,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60624",
            "distance": 5.717,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60606",
            "distance": 2.657,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60104",
            "distance": 13.235,
            "city": "Bellwood",
            "state": "IL"
        },
        {
            "zip_code": "60661",
            "distance": 2.831,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60602",
            "distance": 2.654,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60601",
            "distance": 2.797,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60301",
            "distance": 9.484,
            "city": "Oak Park",
            "state": "IL"
        },
        {
            "zip_code": "60163",
            "distance": 14.963,
            "city": "Berkeley",
            "state": "IL"
        },
        {
            "zip_code": "60654",
            "distance": 3.343,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60302",
            "distance": 9.186,
            "city": "Oak Park",
            "state": "IL"
        },
        {
            "zip_code": "60305",
            "distance": 10.601,
            "city": "River Forest",
            "state": "IL"
        },
        {
            "zip_code": "60611",
            "distance": 3.551,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60126",
            "distance": 16.693,
            "city": "Elmhurst",
            "state": "IL"
        },
        {
            "zip_code": "60161",
            "distance": 12.728,
            "city": "Melrose Park",
            "state": "IL"
        },
        {
            "zip_code": "60642",
            "distance": 4.329,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60651",
            "distance": 7.197,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60622",
            "distance": 4.989,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60165",
            "distance": 13.807,
            "city": "Stone Park",
            "state": "IL"
        },
        {
            "zip_code": "60160",
            "distance": 12.844,
            "city": "Melrose Park",
            "state": "IL"
        },
        {
            "zip_code": "60610",
            "distance": 4.295,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60164",
            "distance": 15.095,
            "city": "Melrose Park",
            "state": "IL"
        },
        {
            "zip_code": "60139",
            "distance": 23.896,
            "city": "Glendale Heights",
            "state": "IL"
        },
        {
            "zip_code": "60639",
            "distance": 8.562,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60647",
            "distance": 6.588,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60707",
            "distance": 10.827,
            "city": "Elmwood Park",
            "state": "IL"
        },
        {
            "zip_code": "60614",
            "distance": 5.53,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60171",
            "distance": 12.336,
            "city": "River Grove",
            "state": "IL"
        },
        {
            "zip_code": "60101",
            "distance": 21.066,
            "city": "Addison",
            "state": "IL"
        },
        {
            "zip_code": "60131",
            "distance": 14.868,
            "city": "Franklin Park",
            "state": "IL"
        },
        {
            "zip_code": "60117",
            "distance": 24.36,
            "city": "Bloomingdale",
            "state": "IL"
        },
        {
            "zip_code": "60657",
            "distance": 6.696,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60634",
            "distance": 11.696,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60641",
            "distance": 9.441,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60618",
            "distance": 8.128,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60105",
            "distance": 17.787,
            "city": "Bensenville",
            "state": "IL"
        },
        {
            "zip_code": "60613",
            "distance": 7.899,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60176",
            "distance": 14.815,
            "city": "Schiller Park",
            "state": "IL"
        },
        {
            "zip_code": "60106",
            "distance": 18.149,
            "city": "Bensenville",
            "state": "IL"
        },
        {
            "zip_code": "60399",
            "distance": 18.078,
            "city": "Wood Dale",
            "state": "IL"
        },
        {
            "zip_code": "60706",
            "distance": 12.862,
            "city": "Harwood Heights",
            "state": "IL"
        },
        {
            "zip_code": "60191",
            "distance": 20.181,
            "city": "Wood Dale",
            "state": "IL"
        },
        {
            "zip_code": "60630",
            "distance": 11.115,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60640",
            "distance": 9.061,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60625",
            "distance": 9.698,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60656",
            "distance": 13.736,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60157",
            "distance": 23.97,
            "city": "Medinah",
            "state": "IL"
        },
        {
            "zip_code": "60143",
            "distance": 22.372,
            "city": "Itasca",
            "state": "IL"
        },
        {
            "zip_code": "60018",
            "distance": 16.726,
            "city": "Des Plaines",
            "state": "IL"
        },
        {
            "zip_code": "60666",
            "distance": 16.968,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60660",
            "distance": 10.299,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60659",
            "distance": 10.927,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60646",
            "distance": 12.371,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60631",
            "distance": 14.206,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60009",
            "distance": 21.659,
            "city": "Elk Grove Village",
            "state": "IL"
        },
        {
            "zip_code": "60712",
            "distance": 12.424,
            "city": "Lincolnwood",
            "state": "IL"
        },
        {
            "zip_code": "60007",
            "distance": 22.261,
            "city": "Elk Grove Village",
            "state": "IL"
        },
        {
            "zip_code": "60645",
            "distance": 11.876,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60626",
            "distance": 11.621,
            "city": "Chicago",
            "state": "IL"
        },
        {
            "zip_code": "60068",
            "distance": 16.131,
            "city": "Park Ridge",
            "state": "IL"
        },
        {
            "zip_code": "60714",
            "distance": 15.885,
            "city": "Niles",
            "state": "IL"
        },
        {
            "zip_code": "60017",
            "distance": 19.085,
            "city": "Des Plaines",
            "state": "IL"
        },
        {
            "zip_code": "60019",
            "distance": 19.085,
            "city": "Des Plaines",
            "state": "IL"
        },
        {
            "zip_code": "60202",
            "distance": 13.196,
            "city": "Evanston",
            "state": "IL"
        },
        {
            "zip_code": "60077",
            "distance": 14.791,
            "city": "Skokie",
            "state": "IL"
        },
        {
            "zip_code": "60076",
            "distance": 14.238,
            "city": "Skokie",
            "state": "IL"
        },
        {
            "zip_code": "60204",
            "distance": 13.779,
            "city": "Evanston",
            "state": "IL"
        },
        {
            "zip_code": "60208",
            "distance": 13.779,
            "city": "Evanston",
            "state": "IL"
        },
        {
            "zip_code": "60209",
            "distance": 13.779,
            "city": "Evanston",
            "state": "IL"
        },
        {
            "zip_code": "60053",
            "distance": 16.063,
            "city": "Morton Grove",
            "state": "IL"
        },
        {
            "zip_code": "60203",
            "distance": 14.899,
            "city": "Evanston",
            "state": "IL"
        },
        {
            "zip_code": "60016",
            "distance": 19.85,
            "city": "Des Plaines",
            "state": "IL"
        },
        {
            "zip_code": "60201",
            "distance": 15.014,
            "city": "Evanston",
            "state": "IL"
        },
        {
            "zip_code": "60029",
            "distance": 16.794,
            "city": "Golf",
            "state": "IL"
        },
        {
            "zip_code": "60005",
            "distance": 23.986,
            "city": "Arlington Heights",
            "state": "IL"
        },
        {
            "zip_code": "60056",
            "distance": 22.148,
            "city": "Mount Prospect",
            "state": "IL"
        },
        {
            "zip_code": "60025",
            "distance": 18.863,
            "city": "Glenview",
            "state": "IL"
        },
        {
            "zip_code": "60091",
            "distance": 16.835,
            "city": "Wilmette",
            "state": "IL"
        },
        {
            "zip_code": "60043",
            "distance": 17.486,
            "city": "Kenilworth",
            "state": "IL"
        },
        {
            "zip_code": "60006",
            "distance": 24.918,
            "city": "Arlington Heights",
            "state": "IL"
        },
        {
            "zip_code": "60026",
            "distance": 20.296,
            "city": "Glenview",
            "state": "IL"
        },
        {
            "zip_code": "60070",
            "distance": 23.768,
            "city": "Prospect Heights",
            "state": "IL"
        },
        {
            "zip_code": "60093",
            "distance": 19.327,
            "city": "Winnetka",
            "state": "IL"
        },
        {
            "zip_code": "60082",
            "distance": 20.424,
            "city": "Techny",
            "state": "IL"
        },
        {
            "zip_code": "60065",
            "distance": 21.748,
            "city": "Northbrook",
            "state": "IL"
        },
        {
            "zip_code": "60062",
            "distance": 22.516,
            "city": "Northbrook",
            "state": "IL"
        },
        {
            "zip_code": "60090",
            "distance": 24.903,
            "city": "Wheeling",
            "state": "IL"
        },
        {
            "zip_code": "60022",
            "distance": 21.281,
            "city": "Glencoe",
            "state": "IL"
        }
  ]
      , "SMASH Northeastern University": [
        {
                "zip_code": "02740",
                "distance": 49.098,
                "city": "New Bedford",
                "state": "MA"
            },
            {
                "zip_code": "02741",
                "distance": 47.648,
                "city": "New Bedford",
                "state": "MA"
            },
            {
                "zip_code": "02742",
                "distance": 47.648,
                "city": "New Bedford",
                "state": "MA"
            },
            {
                "zip_code": "02746",
                "distance": 47.481,
                "city": "New Bedford",
                "state": "MA"
            },
            {
                "zip_code": "02747",
                "distance": 46.689,
                "city": "North Dartmouth",
                "state": "MA"
            },
            {
                "zip_code": "02739",
                "distance": 48.733,
                "city": "Mattapoisett",
                "state": "MA"
            },
            {
                "zip_code": "02721",
                "distance": 45.791,
                "city": "Fall River",
                "state": "MA"
            },
            {
                "zip_code": "02809",
                "distance": 46.496,
                "city": "Bristol",
                "state": "RI"
            },
            {
                "zip_code": "02724",
                "distance": 45.279,
                "city": "Fall River",
                "state": "MA"
            },
            {
                "zip_code": "02723",
                "distance": 44.541,
                "city": "Fall River",
                "state": "MA"
            },
            {
                "zip_code": "02887",
                "distance": 46.879,
                "city": "Warwick",
                "state": "RI"
            },
            {
                "zip_code": "02889",
                "distance": 46.125,
                "city": "Warwick",
                "state": "RI"
            },
            {
                "zip_code": "02745",
                "distance": 44.686,
                "city": "New Bedford",
                "state": "MA"
            },
            {
                "zip_code": "02886",
                "distance": 47.291,
                "city": "Warwick",
                "state": "RI"
            },
            {
                "zip_code": "02738",
                "distance": 47.347,
                "city": "Marion",
                "state": "MA"
            },
            {
                "zip_code": "02722",
                "distance": 43.33,
                "city": "Fall River",
                "state": "MA"
            },
            {
                "zip_code": "02553",
                "distance": 49.827,
                "city": "Monument Beach",
                "state": "MA"
            },
            {
                "zip_code": "02743",
                "distance": 44.032,
                "city": "Acushnet",
                "state": "MA"
            },
            {
                "zip_code": "02725",
                "distance": 42.846,
                "city": "Somerset",
                "state": "MA"
            },
            {
                "zip_code": "02720",
                "distance": 42.299,
                "city": "Fall River",
                "state": "MA"
            },
            {
                "zip_code": "02885",
                "distance": 43.006,
                "city": "Warren",
                "state": "RI"
            },
            {
                "zip_code": "02823",
                "distance": 47.5,
                "city": "Fiskeville",
                "state": "RI"
            },
            {
                "zip_code": "02806",
                "distance": 43.039,
                "city": "Barrington",
                "state": "RI"
            },
            {
                "zip_code": "02558",
                "distance": 47.029,
                "city": "Onset",
                "state": "MA"
            },
            {
                "zip_code": "02888",
                "distance": 43.544,
                "city": "Warwick",
                "state": "RI"
            },
            {
                "zip_code": "02532",
                "distance": 48.12,
                "city": "Buzzards Bay",
                "state": "MA"
            },
            {
                "zip_code": "02777",
                "distance": 40.387,
                "city": "Swansea",
                "state": "MA"
            },
            {
                "zip_code": "02726",
                "distance": 39.946,
                "city": "Somerset",
                "state": "MA"
            },
            {
                "zip_code": "02770",
                "distance": 42.181,
                "city": "Rochester",
                "state": "MA"
            },
            {
                "zip_code": "02717",
                "distance": 40.448,
                "city": "East Freetown",
                "state": "MA"
            },
            {
                "zip_code": "02571",
                "distance": 45.003,
                "city": "Wareham",
                "state": "MA"
            },
            {
                "zip_code": "02561",
                "distance": 48.919,
                "city": "Sagamore",
                "state": "MA"
            },
            {
                "zip_code": "02920",
                "distance": 43.479,
                "city": "Cranston",
                "state": "RI"
            },
            {
                "zip_code": "02921",
                "distance": 44.573,
                "city": "Cranston",
                "state": "RI"
            },
            {
                "zip_code": "02576",
                "distance": 42.805,
                "city": "West Wareham",
                "state": "MA"
            },
            {
                "zip_code": "02915",
                "distance": 41.029,
                "city": "Riverside",
                "state": "RI"
            },
            {
                "zip_code": "02815",
                "distance": 47.786,
                "city": "Clayville",
                "state": "RI"
            },
            {
                "zip_code": "02831",
                "distance": 46.972,
                "city": "Hope",
                "state": "RI"
            },
            {
                "zip_code": "02910",
                "distance": 42.369,
                "city": "Cranston",
                "state": "RI"
            },
            {
                "zip_code": "02538",
                "distance": 45.392,
                "city": "East Wareham",
                "state": "MA"
            },
            {
                "zip_code": "02825",
                "distance": 49.857,
                "city": "Foster",
                "state": "RI"
            },
            {
                "zip_code": "02905",
                "distance": 40.972,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02702",
                "distance": 38.215,
                "city": "Assonet",
                "state": "MA"
            },
            {
                "zip_code": "02562",
                "distance": 48.235,
                "city": "Sagamore Beach",
                "state": "MA"
            },
            {
                "zip_code": "02907",
                "distance": 40.638,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02715",
                "distance": 36.941,
                "city": "Dighton",
                "state": "MA"
            },
            {
                "zip_code": "02914",
                "distance": 38.461,
                "city": "East Providence",
                "state": "RI"
            },
            {
                "zip_code": "02903",
                "distance": 39.075,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02901",
                "distance": 38.986,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02902",
                "distance": 38.986,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02918",
                "distance": 38.986,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02940",
                "distance": 38.986,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02909",
                "distance": 39.834,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02857",
                "distance": 44.668,
                "city": "North Scituate",
                "state": "RI"
            },
            {
                "zip_code": "02912",
                "distance": 38.47,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02919",
                "distance": 41.124,
                "city": "Johnston",
                "state": "RI"
            },
            {
                "zip_code": "02347",
                "distance": 35.558,
                "city": "Lakeville",
                "state": "MA"
            },
            {
                "zip_code": "02779",
                "distance": 34.511,
                "city": "Berkley",
                "state": "MA"
            },
            {
                "zip_code": "02908",
                "distance": 38.325,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02906",
                "distance": 37.31,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02771",
                "distance": 35.957,
                "city": "Seekonk",
                "state": "MA"
            },
            {
                "zip_code": "02916",
                "distance": 36.425,
                "city": "Rumford",
                "state": "RI"
            },
            {
                "zip_code": "06243",
                "distance": 49.408,
                "city": "East Killingly",
                "state": "CT"
            },
            {
                "zip_code": "02769",
                "distance": 34.615,
                "city": "Rehoboth",
                "state": "MA"
            },
            {
                "zip_code": "02366",
                "distance": 40.777,
                "city": "South Carver",
                "state": "MA"
            },
            {
                "zip_code": "02764",
                "distance": 33.611,
                "city": "North Dighton",
                "state": "MA"
            },
            {
                "zip_code": "02911",
                "distance": 38.269,
                "city": "North Providence",
                "state": "RI"
            },
            {
                "zip_code": "02904",
                "distance": 37.168,
                "city": "Providence",
                "state": "RI"
            },
            {
                "zip_code": "02344",
                "distance": 34.61,
                "city": "Middleboro",
                "state": "MA"
            },
            {
                "zip_code": "02348",
                "distance": 34.61,
                "city": "Lakeville",
                "state": "MA"
            },
            {
                "zip_code": "02349",
                "distance": 34.61,
                "city": "Middleboro",
                "state": "MA"
            },
            {
                "zip_code": "02718",
                "distance": 33.146,
                "city": "East Taunton",
                "state": "MA"
            },
            {
                "zip_code": "02862",
                "distance": 35.001,
                "city": "Pawtucket",
                "state": "RI"
            },
            {
                "zip_code": "02860",
                "distance": 35.351,
                "city": "Pawtucket",
                "state": "RI"
            },
            {
                "zip_code": "02346",
                "distance": 33.961,
                "city": "Middleboro",
                "state": "MA"
            },
            {
                "zip_code": "02861",
                "distance": 34.128,
                "city": "Pawtucket",
                "state": "RI"
            },
            {
                "zip_code": "02330",
                "distance": 36.73,
                "city": "Carver",
                "state": "MA"
            },
            {
                "zip_code": "02828",
                "distance": 39.367,
                "city": "Greenville",
                "state": "RI"
            },
            {
                "zip_code": "02829",
                "distance": 40.81,
                "city": "Harmony",
                "state": "RI"
            },
            {
                "zip_code": "02360",
                "distance": 39.747,
                "city": "Plymouth",
                "state": "MA"
            },
            {
                "zip_code": "02863",
                "distance": 34.224,
                "city": "Central Falls",
                "state": "RI"
            },
            {
                "zip_code": "02814",
                "distance": 43.108,
                "city": "Chepachet",
                "state": "RI"
            },
            {
                "zip_code": "02783",
                "distance": 30.212,
                "city": "Taunton",
                "state": "MA"
            },
            {
                "zip_code": "02917",
                "distance": 36.692,
                "city": "Smithfield",
                "state": "RI"
            },
            {
                "zip_code": "06260",
                "distance": 49.148,
                "city": "Putnam",
                "state": "CT"
            },
            {
                "zip_code": "02780",
                "distance": 29.579,
                "city": "Taunton",
                "state": "MA"
            },
            {
                "zip_code": "02355",
                "distance": 33.656,
                "city": "North Carver",
                "state": "MA"
            },
            {
                "zip_code": "02865",
                "distance": 34.045,
                "city": "Lincoln",
                "state": "RI"
            },
            {
                "zip_code": "02345",
                "distance": 40.167,
                "city": "Manomet",
                "state": "MA"
            },
            {
                "zip_code": "02768",
                "distance": 28.329,
                "city": "Raynham Center",
                "state": "MA"
            },
            {
                "zip_code": "02381",
                "distance": 38.59,
                "city": "White Horse Beach",
                "state": "MA"
            },
            {
                "zip_code": "02703",
                "distance": 29.634,
                "city": "Attleboro",
                "state": "MA"
            },
            {
                "zip_code": "02839",
                "distance": 38.773,
                "city": "Mapleville",
                "state": "RI"
            },
            {
                "zip_code": "02767",
                "distance": 27.528,
                "city": "Raynham",
                "state": "MA"
            },
            {
                "zip_code": "02361",
                "distance": 35.168,
                "city": "Plymouth",
                "state": "MA"
            },
            {
                "zip_code": "02362",
                "distance": 35.168,
                "city": "Plymouth",
                "state": "MA"
            },
            {
                "zip_code": "02802",
                "distance": 32.096,
                "city": "Albion",
                "state": "RI"
            },
            {
                "zip_code": "06277",
                "distance": 45.976,
                "city": "Thompson",
                "state": "CT"
            },
            {
                "zip_code": "02859",
                "distance": 42.378,
                "city": "Pascoag",
                "state": "RI"
            },
            {
                "zip_code": "02367",
                "distance": 30.386,
                "city": "Plympton",
                "state": "MA"
            },
            {
                "zip_code": "06246",
                "distance": 47.89,
                "city": "Grosvenor Dale",
                "state": "CT"
            },
            {
                "zip_code": "02858",
                "distance": 37.995,
                "city": "Oakland",
                "state": "RI"
            },
            {
                "zip_code": "02838",
                "distance": 31.948,
                "city": "Manville",
                "state": "RI"
            },
            {
                "zip_code": "02766",
                "distance": 25.983,
                "city": "Norton",
                "state": "MA"
            },
            {
                "zip_code": "02763",
                "distance": 27.611,
                "city": "Attleboro Falls",
                "state": "MA"
            },
            {
                "zip_code": "02864",
                "distance": 30.467,
                "city": "Cumberland",
                "state": "RI"
            },
            {
                "zip_code": "02824",
                "distance": 34.068,
                "city": "Forestdale",
                "state": "RI"
            },
            {
                "zip_code": "02761",
                "distance": 27.839,
                "city": "North Attleboro",
                "state": "MA"
            },
            {
                "zip_code": "02712",
                "distance": 25.649,
                "city": "Chartley",
                "state": "MA"
            },
            {
                "zip_code": "02324",
                "distance": 26.03,
                "city": "Bridgewater",
                "state": "MA"
            },
            {
                "zip_code": "02760",
                "distance": 27.782,
                "city": "North Attleboro",
                "state": "MA"
            },
            {
                "zip_code": "02830",
                "distance": 37.506,
                "city": "Harrisville",
                "state": "RI"
            },
            {
                "zip_code": "02896",
                "distance": 33.606,
                "city": "North Smithfield",
                "state": "RI"
            },
            {
                "zip_code": "02325",
                "distance": 25.636,
                "city": "Bridgewater",
                "state": "MA"
            },
            {
                "zip_code": "02826",
                "distance": 37.214,
                "city": "Glendale",
                "state": "RI"
            },
            {
                "zip_code": "02364",
                "distance": 30.523,
                "city": "Kingston",
                "state": "MA"
            },
            {
                "zip_code": "06255",
                "distance": 47.277,
                "city": "North Grosvenordale",
                "state": "CT"
            },
            {
                "zip_code": "02876",
                "distance": 34.123,
                "city": "Slatersville",
                "state": "RI"
            },
            {
                "zip_code": "02895",
                "distance": 30.734,
                "city": "Woonsocket",
                "state": "RI"
            },
            {
                "zip_code": "02338",
                "distance": 26.222,
                "city": "Halifax",
                "state": "MA"
            },
            {
                "zip_code": "02375",
                "distance": 23.13,
                "city": "South Easton",
                "state": "MA"
            },
            {
                "zip_code": "06245",
                "distance": 48.327,
                "city": "Fabyan",
                "state": "CT"
            },
            {
                "zip_code": "02337",
                "distance": 23.797,
                "city": "Elmwood",
                "state": "MA"
            },
            {
                "zip_code": "02762",
                "distance": 25.335,
                "city": "Plainville",
                "state": "MA"
            },
            {
                "zip_code": "02048",
                "distance": 22.812,
                "city": "Mansfield",
                "state": "MA"
            },
            {
                "zip_code": "06262",
                "distance": 48.42,
                "city": "Quinebaug",
                "state": "CT"
            },
            {
                "zip_code": "02031",
                "distance": 22.157,
                "city": "East Mansfield",
                "state": "MA"
            },
            {
                "zip_code": "02350",
                "distance": 25.796,
                "city": "Monponsett",
                "state": "MA"
            },
            {
                "zip_code": "02379",
                "distance": 22.17,
                "city": "West Bridgewater",
                "state": "MA"
            },
            {
                "zip_code": "02334",
                "distance": 21.221,
                "city": "Easton",
                "state": "MA"
            },
            {
                "zip_code": "01529",
                "distance": 31.906,
                "city": "Millville",
                "state": "MA"
            },
            {
                "zip_code": "02333",
                "distance": 22.383,
                "city": "East Bridgewater",
                "state": "MA"
            },
            {
                "zip_code": "01504",
                "distance": 29.983,
                "city": "Blackstone",
                "state": "MA"
            },
            {
                "zip_code": "02331",
                "distance": 30.327,
                "city": "Duxbury",
                "state": "MA"
            },
            {
                "zip_code": "02332",
                "distance": 28.781,
                "city": "Duxbury",
                "state": "MA"
            },
            {
                "zip_code": "01570",
                "distance": 42.904,
                "city": "Webster",
                "state": "MA"
            },
            {
                "zip_code": "01538",
                "distance": 33.775,
                "city": "North Uxbridge",
                "state": "MA"
            },
            {
                "zip_code": "02070",
                "distance": 23.444,
                "city": "Sheldonville",
                "state": "MA"
            },
            {
                "zip_code": "02341",
                "distance": 23.262,
                "city": "Hanson",
                "state": "MA"
            },
            {
                "zip_code": "02093",
                "distance": 23.477,
                "city": "Wrentham",
                "state": "MA"
            },
            {
                "zip_code": "01516",
                "distance": 38.465,
                "city": "Douglas",
                "state": "MA"
            },
            {
                "zip_code": "01571",
                "distance": 46.736,
                "city": "Dudley",
                "state": "MA"
            },
            {
                "zip_code": "02357",
                "distance": 19.536,
                "city": "North Easton",
                "state": "MA"
            },
            {
                "zip_code": "01569",
                "distance": 33.178,
                "city": "Uxbridge",
                "state": "MA"
            },
            {
                "zip_code": "02327",
                "distance": 24.734,
                "city": "Bryantville",
                "state": "MA"
            },
            {
                "zip_code": "02356",
                "distance": 19.122,
                "city": "North Easton",
                "state": "MA"
            },
            {
                "zip_code": "02035",
                "distance": 20.353,
                "city": "Foxboro",
                "state": "MA"
            },
            {
                "zip_code": "02359",
                "distance": 24.131,
                "city": "Pembroke",
                "state": "MA"
            },
            {
                "zip_code": "02019",
                "distance": 26.083,
                "city": "Bellingham",
                "state": "MA"
            },
            {
                "zip_code": "02301",
                "distance": 18.172,
                "city": "Brockton",
                "state": "MA"
            },
            {
                "zip_code": "02382",
                "distance": 19.758,
                "city": "Whitman",
                "state": "MA"
            },
            {
                "zip_code": "02303",
                "distance": 18.299,
                "city": "Brockton",
                "state": "MA"
            },
            {
                "zip_code": "02304",
                "distance": 18.299,
                "city": "Brockton",
                "state": "MA"
            },
            {
                "zip_code": "02305",
                "distance": 18.299,
                "city": "Brockton",
                "state": "MA"
            },
            {
                "zip_code": "02020",
                "distance": 29.729,
                "city": "Brant Rock",
                "state": "MA"
            },
            {
                "zip_code": "02038",
                "distance": 23.391,
                "city": "Franklin",
                "state": "MA"
            },
            {
                "zip_code": "02302",
                "distance": 18.005,
                "city": "Brockton",
                "state": "MA"
            },
            {
                "zip_code": "02358",
                "distance": 23.872,
                "city": "North Pembroke",
                "state": "MA"
            },
            {
                "zip_code": "01756",
                "distance": 28.05,
                "city": "Mendon",
                "state": "MA"
            },
            {
                "zip_code": "02041",
                "distance": 26.053,
                "city": "Green Harbor",
                "state": "MA"
            },
            {
                "zip_code": "02059",
                "distance": 26.053,
                "city": "North Marshfield",
                "state": "MA"
            },
            {
                "zip_code": "02065",
                "distance": 26.053,
                "city": "Ocean Bluff",
                "state": "MA"
            },
            {
                "zip_code": "02071",
                "distance": 18.29,
                "city": "South Walpole",
                "state": "MA"
            },
            {
                "zip_code": "01525",
                "distance": 31.215,
                "city": "Linwood",
                "state": "MA"
            },
            {
                "zip_code": "02067",
                "distance": 16.331,
                "city": "Sharon",
                "state": "MA"
            },
            {
                "zip_code": "02340",
                "distance": 21.796,
                "city": "Hanover",
                "state": "MA"
            },
            {
                "zip_code": "02056",
                "distance": 19.476,
                "city": "Norfolk",
                "state": "MA"
            },
            {
                "zip_code": "02050",
                "distance": 25.384,
                "city": "Marshfield",
                "state": "MA"
            },
            {
                "zip_code": "01540",
                "distance": 41.377,
                "city": "Oxford",
                "state": "MA"
            },
            {
                "zip_code": "01588",
                "distance": 32.68,
                "city": "Whitinsville",
                "state": "MA"
            },
            {
                "zip_code": "02072",
                "distance": 15.071,
                "city": "Stoughton",
                "state": "MA"
            },
            {
                "zip_code": "02351",
                "distance": 16.815,
                "city": "Abington",
                "state": "MA"
            },
            {
                "zip_code": "01526",
                "distance": 36.683,
                "city": "Manchaug",
                "state": "MA"
            },
            {
                "zip_code": "02339",
                "distance": 19.534,
                "city": "Hanover",
                "state": "MA"
            },
            {
                "zip_code": "01747",
                "distance": 26.329,
                "city": "Hopedale",
                "state": "MA"
            },
            {
                "zip_code": "01508",
                "distance": 45.986,
                "city": "Charlton City",
                "state": "MA"
            },
            {
                "zip_code": "01509",
                "distance": 45.986,
                "city": "Charlton Depot",
                "state": "MA"
            },
            {
                "zip_code": "02370",
                "distance": 17.433,
                "city": "Rockland",
                "state": "MA"
            },
            {
                "zip_code": "01590",
                "distance": 35.889,
                "city": "Sutton",
                "state": "MA"
            },
            {
                "zip_code": "02322",
                "distance": 14.385,
                "city": "Avon",
                "state": "MA"
            },
            {
                "zip_code": "01507",
                "distance": 46.291,
                "city": "Charlton",
                "state": "MA"
            },
            {
                "zip_code": "02047",
                "distance": 25.664,
                "city": "Humarock",
                "state": "MA"
            },
            {
                "zip_code": "02343",
                "distance": 14.687,
                "city": "Holbrook",
                "state": "MA"
            },
            {
                "zip_code": "01534",
                "distance": 30.616,
                "city": "Northbridge",
                "state": "MA"
            },
            {
                "zip_code": "02081",
                "distance": 15.63,
                "city": "Walpole",
                "state": "MA"
            },
            {
                "zip_code": "02051",
                "distance": 23.168,
                "city": "Marshfield Hills",
                "state": "MA"
            },
            {
                "zip_code": "02053",
                "distance": 20.768,
                "city": "Medway",
                "state": "MA"
            },
            {
                "zip_code": "02032",
                "distance": 13.678,
                "city": "East Walpole",
                "state": "MA"
            },
            {
                "zip_code": "01757",
                "distance": 24.563,
                "city": "Milford",
                "state": "MA"
            },
            {
                "zip_code": "01537",
                "distance": 42.299,
                "city": "North Oxford",
                "state": "MA"
            },
            {
                "zip_code": "02061",
                "distance": 18.911,
                "city": "Norwell",
                "state": "MA"
            },
            {
                "zip_code": "02190",
                "distance": 14.152,
                "city": "South Weymouth",
                "state": "MA"
            },
            {
                "zip_code": "02018",
                "distance": 16.329,
                "city": "Accord",
                "state": "MA"
            },
            {
                "zip_code": "02054",
                "distance": 17.387,
                "city": "Millis",
                "state": "MA"
            },
            {
                "zip_code": "01560",
                "distance": 31.14,
                "city": "South Grafton",
                "state": "MA"
            },
            {
                "zip_code": "02021",
                "distance": 11.192,
                "city": "Canton",
                "state": "MA"
            },
            {
                "zip_code": "02368",
                "distance": 11.444,
                "city": "Randolph",
                "state": "MA"
            },
            {
                "zip_code": "01568",
                "distance": 27.775,
                "city": "Upton",
                "state": "MA"
            },
            {
                "zip_code": "02052",
                "distance": 14.663,
                "city": "Medfield",
                "state": "MA"
            },
            {
                "zip_code": "02062",
                "distance": 11.324,
                "city": "Norwood",
                "state": "MA"
            },
            {
                "zip_code": "01586",
                "distance": 34.968,
                "city": "West Millbury",
                "state": "MA"
            },
            {
                "zip_code": "02040",
                "distance": 20.382,
                "city": "Greenbush",
                "state": "MA"
            },
            {
                "zip_code": "02055",
                "distance": 20.382,
                "city": "Minot",
                "state": "MA"
            },
            {
                "zip_code": "01527",
                "distance": 35.793,
                "city": "Millbury",
                "state": "MA"
            },
            {
                "zip_code": "01746",
                "distance": 20.282,
                "city": "Holliston",
                "state": "MA"
            },
            {
                "zip_code": "01501",
                "distance": 39.039,
                "city": "Auburn",
                "state": "MA"
            },
            {
                "zip_code": "02185",
                "distance": 10.914,
                "city": "Braintree",
                "state": "MA"
            },
            {
                "zip_code": "02066",
                "distance": 20.074,
                "city": "Scituate",
                "state": "MA"
            },
            {
                "zip_code": "01519",
                "distance": 30.772,
                "city": "Grafton",
                "state": "MA"
            },
            {
                "zip_code": "01542",
                "distance": 42.083,
                "city": "Rochdale",
                "state": "MA"
            },
            {
                "zip_code": "02188",
                "distance": 11.873,
                "city": "Weymouth",
                "state": "MA"
            },
            {
                "zip_code": "02184",
                "distance": 10.485,
                "city": "Braintree",
                "state": "MA"
            },
            {
                "zip_code": "01515",
                "distance": 48.58,
                "city": "East Brookfield",
                "state": "MA"
            },
            {
                "zip_code": "02189",
                "distance": 12.642,
                "city": "East Weymouth",
                "state": "MA"
            },
            {
                "zip_code": "02060",
                "distance": 19.727,
                "city": "North Scituate",
                "state": "MA"
            },
            {
                "zip_code": "02043",
                "distance": 14.203,
                "city": "Hingham",
                "state": "MA"
            },
            {
                "zip_code": "02090",
                "distance": 9.907,
                "city": "Westwood",
                "state": "MA"
            },
            {
                "zip_code": "01748",
                "distance": 23.562,
                "city": "Hopkinton",
                "state": "MA"
            },
            {
                "zip_code": "01607",
                "distance": 35.747,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01784",
                "distance": 23.874,
                "city": "Woodville",
                "state": "MA"
            },
            {
                "zip_code": "02044",
                "distance": 13.708,
                "city": "Hingham",
                "state": "MA"
            },
            {
                "zip_code": "01536",
                "distance": 30.869,
                "city": "North Grafton",
                "state": "MA"
            },
            {
                "zip_code": "01770",
                "distance": 15.461,
                "city": "Sherborn",
                "state": "MA"
            },
            {
                "zip_code": "02030",
                "distance": 11.86,
                "city": "Dover",
                "state": "MA"
            },
            {
                "zip_code": "02025",
                "distance": 16.423,
                "city": "Cohasset",
                "state": "MA"
            },
            {
                "zip_code": "01611",
                "distance": 39.956,
                "city": "Cherry Valley",
                "state": "MA"
            },
            {
                "zip_code": "02027",
                "distance": 7.469,
                "city": "Dedham",
                "state": "MA"
            },
            {
                "zip_code": "02186",
                "distance": 6.711,
                "city": "Milton",
                "state": "MA"
            },
            {
                "zip_code": "02191",
                "distance": 10.585,
                "city": "North Weymouth",
                "state": "MA"
            },
            {
                "zip_code": "01603",
                "distance": 38.265,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "02026",
                "distance": 7.29,
                "city": "Dedham",
                "state": "MA"
            },
            {
                "zip_code": "01610",
                "distance": 36.438,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01562",
                "distance": 45.726,
                "city": "Spencer",
                "state": "MA"
            },
            {
                "zip_code": "02169",
                "distance": 8.105,
                "city": "Quincy",
                "state": "MA"
            },
            {
                "zip_code": "01524",
                "distance": 42.019,
                "city": "Leicester",
                "state": "MA"
            },
            {
                "zip_code": "02137",
                "distance": 6.062,
                "city": "Readville",
                "state": "MA"
            },
            {
                "zip_code": "01604",
                "distance": 34.343,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "02136",
                "distance": 5.795,
                "city": "Hyde Park",
                "state": "MA"
            },
            {
                "zip_code": "01721",
                "distance": 19.582,
                "city": "Ashland",
                "state": "MA"
            },
            {
                "zip_code": "01601",
                "distance": 35.886,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01613",
                "distance": 35.886,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01614",
                "distance": 35.886,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01615",
                "distance": 35.886,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01653",
                "distance": 35.886,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01654",
                "distance": 35.886,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01655",
                "distance": 35.886,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "01580",
                "distance": 26.312,
                "city": "Westborough",
                "state": "MA"
            },
            {
                "zip_code": "01582",
                "distance": 26.312,
                "city": "Westborough",
                "state": "MA"
            },
            {
                "zip_code": "02187",
                "distance": 5.489,
                "city": "Milton Village",
                "state": "MA"
            },
            {
                "zip_code": "02269",
                "distance": 7.598,
                "city": "Quincy",
                "state": "MA"
            },
            {
                "zip_code": "01608",
                "distance": 35.923,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "02170",
                "distance": 6.708,
                "city": "Quincy",
                "state": "MA"
            },
            {
                "zip_code": "01535",
                "distance": 49.335,
                "city": "North Brookfield",
                "state": "MA"
            },
            {
                "zip_code": "01581",
                "distance": 26.372,
                "city": "Westborough",
                "state": "MA"
            },
            {
                "zip_code": "01602",
                "distance": 38.35,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "02126",
                "distance": 4.369,
                "city": "Mattapan",
                "state": "MA"
            },
            {
                "zip_code": "02492",
                "distance": 8.247,
                "city": "Needham",
                "state": "MA"
            },
            {
                "zip_code": "02132",
                "distance": 4.854,
                "city": "West Roxbury",
                "state": "MA"
            },
            {
                "zip_code": "01702",
                "distance": 17.31,
                "city": "Framingham",
                "state": "MA"
            },
            {
                "zip_code": "02131",
                "distance": 3.795,
                "city": "Roslindale",
                "state": "MA"
            },
            {
                "zip_code": "01545",
                "distance": 31.3,
                "city": "Shrewsbury",
                "state": "MA"
            },
            {
                "zip_code": "01760",
                "distance": 12.928,
                "city": "Natick",
                "state": "MA"
            },
            {
                "zip_code": "01609",
                "distance": 37.178,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "02124",
                "distance": 3.971,
                "city": "Dorchester Center",
                "state": "MA"
            },
            {
                "zip_code": "01605",
                "distance": 34.99,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "02122",
                "distance": 4.532,
                "city": "Dorchester",
                "state": "MA"
            },
            {
                "zip_code": "01745",
                "distance": 20.35,
                "city": "Fayville",
                "state": "MA"
            },
            {
                "zip_code": "02045",
                "distance": 9.784,
                "city": "Hull",
                "state": "MA"
            },
            {
                "zip_code": "02482",
                "distance": 10.295,
                "city": "Wellesley",
                "state": "MA"
            },
            {
                "zip_code": "02171",
                "distance": 5.404,
                "city": "Quincy",
                "state": "MA"
            },
            {
                "zip_code": "01612",
                "distance": 42.156,
                "city": "Paxton",
                "state": "MA"
            },
            {
                "zip_code": "02457",
                "distance": 8.992,
                "city": "Babson Park",
                "state": "MA"
            },
            {
                "zip_code": "02494",
                "distance": 6.972,
                "city": "Needham Heights",
                "state": "MA"
            },
            {
                "zip_code": "01546",
                "distance": 30.988,
                "city": "Shrewsbury",
                "state": "MA"
            },
            {
                "zip_code": "01703",
                "distance": 16.765,
                "city": "Framingham",
                "state": "MA"
            },
            {
                "zip_code": "01704",
                "distance": 16.765,
                "city": "Framingham",
                "state": "MA"
            },
            {
                "zip_code": "01705",
                "distance": 16.765,
                "city": "Framingham",
                "state": "MA"
            },
            {
                "zip_code": "01772",
                "distance": 21.848,
                "city": "Southborough",
                "state": "MA"
            },
            {
                "zip_code": "02121",
                "distance": 2.363,
                "city": "Dorchester",
                "state": "MA"
            },
            {
                "zip_code": "02130",
                "distance": 1.975,
                "city": "Jamaica Plain",
                "state": "MA"
            },
            {
                "zip_code": "02481",
                "distance": 8.836,
                "city": "Wellesley Hills",
                "state": "MA"
            },
            {
                "zip_code": "02464",
                "distance": 6.002,
                "city": "Newton Upper Falls",
                "state": "MA"
            },
            {
                "zip_code": "02467",
                "distance": 2.871,
                "city": "Chestnut Hill",
                "state": "MA"
            },
            {
                "zip_code": "02459",
                "distance": 4.681,
                "city": "Newton Center",
                "state": "MA"
            },
            {
                "zip_code": "01606",
                "distance": 35.271,
                "city": "Worcester",
                "state": "MA"
            },
            {
                "zip_code": "02125",
                "distance": 2.971,
                "city": "Dorchester",
                "state": "MA"
            },
            {
                "zip_code": "02461",
                "distance": 5.329,
                "city": "Newton Highlands",
                "state": "MA"
            },
            {
                "zip_code": "01701",
                "distance": 17.252,
                "city": "Framingham",
                "state": "MA"
            },
            {
                "zip_code": "01532",
                "distance": 27.614,
                "city": "Northborough",
                "state": "MA"
            },
            {
                "zip_code": "02119",
                "distance": 1.387,
                "city": "Roxbury",
                "state": "MA"
            },
            {
                "zip_code": "02445",
                "distance": 1.695,
                "city": "Brookline",
                "state": "MA"
            },
            {
                "zip_code": "02468",
                "distance": 6.349,
                "city": "Waban",
                "state": "MA"
            },
            {
                "zip_code": "02462",
                "distance": 7.689,
                "city": "Newton Lower Falls",
                "state": "MA"
            },
            {
                "zip_code": "02456",
                "distance": 4.825,
                "city": "New Town",
                "state": "MA"
            },
            {
                "zip_code": "02495",
                "distance": 4.825,
                "city": "Nonantum",
                "state": "MA"
            },
            {
                "zip_code": "02447",
                "distance": 1.323,
                "city": "Brookline Village",
                "state": "MA"
            },
            {
                "zip_code": "02120",
                "distance": 0.584,
                "city": "Roxbury Crossing",
                "state": "MA"
            },
            {
                "zip_code": "02127",
                "distance": 3.398,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "01520",
                "distance": 38.042,
                "city": "Holden",
                "state": "MA"
            },
            {
                "zip_code": "02115",
                "distance": 0,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02118",
                "distance": 1.815,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02216",
                "distance": 1.825,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02298",
                "distance": 2.845,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02446",
                "distance": 0.956,
                "city": "Brookline",
                "state": "MA"
            },
            {
                "zip_code": "01778",
                "distance": 14.082,
                "city": "Wayland",
                "state": "MA"
            },
            {
                "zip_code": "02466",
                "distance": 7.304,
                "city": "Auburndale",
                "state": "MA"
            },
            {
                "zip_code": "02199",
                "distance": 1.397,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02210",
                "distance": 3.469,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02215",
                "distance": 0.743,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02465",
                "distance": 6.198,
                "city": "West Newton",
                "state": "MA"
            },
            {
                "zip_code": "01752",
                "distance": 22.547,
                "city": "Marlborough",
                "state": "MA"
            },
            {
                "zip_code": "02135",
                "distance": 2.606,
                "city": "Brighton",
                "state": "MA"
            },
            {
                "zip_code": "02112",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02117",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02123",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02133",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02196",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02201",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02204",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02205",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02206",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02211",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02212",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02217",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02222",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02228",
                "distance": 2.505,
                "city": "East Boston",
                "state": "MA"
            },
            {
                "zip_code": "02241",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02266",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02283",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02284",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02293",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02295",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02297",
                "distance": 2.505,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02207",
                "distance": 2.975,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02111",
                "distance": 2.572,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02116",
                "distance": 1.758,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "01068",
                "distance": 47.937,
                "city": "Oakham",
                "state": "MA"
            },
            {
                "zip_code": "02460",
                "distance": 5.335,
                "city": "Newtonville",
                "state": "MA"
            },
            {
                "zip_code": "02458",
                "distance": 4.365,
                "city": "Newton",
                "state": "MA"
            },
            {
                "zip_code": "01505",
                "distance": 31.185,
                "city": "Boylston",
                "state": "MA"
            },
            {
                "zip_code": "02108",
                "distance": 2.519,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02134",
                "distance": 1.86,
                "city": "Allston",
                "state": "MA"
            },
            {
                "zip_code": "02471",
                "distance": 3.638,
                "city": "Watertown",
                "state": "MA"
            },
            {
                "zip_code": "02477",
                "distance": 3.638,
                "city": "Watertown",
                "state": "MA"
            },
            {
                "zip_code": "02239",
                "distance": 1.606,
                "city": "Cambridge",
                "state": "MA"
            },
            {
                "zip_code": "02493",
                "distance": 10.222,
                "city": "Weston",
                "state": "MA"
            },
            {
                "zip_code": "02203",
                "distance": 2.896,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02128",
                "distance": 5.298,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02142",
                "distance": 2.083,
                "city": "Cambridge",
                "state": "MA"
            },
            {
                "zip_code": "02110",
                "distance": 3.418,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02139",
                "distance": 1.793,
                "city": "Cambridge",
                "state": "MA"
            },
            {
                "zip_code": "02114",
                "distance": 2.619,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02113",
                "distance": 3.231,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02163",
                "distance": 2.191,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "02109",
                "distance": 3.511,
                "city": "Boston",
                "state": "MA"
            },
            {
                "zip_code": "01583",
                "distance": 34.769,
                "city": "West Boylston",
                "state": "MA"
            },
            {
                "zip_code": "02472",
                "distance": 4.31,
                "city": "Watertown",
                "state": "MA"
            },
            {
                "zip_code": "02453",
                "distance": 7.231,
                "city": "Waltham",
                "state": "MA"
            },
            {
                "zip_code": "02238",
                "distance": 2.281,
                "city": "Cambridge",
                "state": "MA"
            },
            {
                "zip_code": "02141",
                "distance": 2.587,
                "city": "Cambridge",
                "state": "MA"
            },
            {
                "zip_code": "02152",
                "distance": 7.144,
                "city": "Winthrop",
                "state": "MA"
            },
            {
                "zip_code": "01522",
                "distance": 38.969,
                "city": "Jefferson",
                "state": "MA"
            },
            {
                "zip_code": "02138",
                "distance": 3.295,
                "city": "Cambridge",
                "state": "MA"
            },
            {
                "zip_code": "02129",
                "distance": 3.705,
                "city": "Charlestown",
                "state": "MA"
            },
            {
                "zip_code": "02454",
                "distance": 7.46,
                "city": "Waltham",
                "state": "MA"
            },
            {
                "zip_code": "02143",
                "distance": 3.096,
                "city": "Somerville",
                "state": "MA"
            },
            {
                "zip_code": "01776",
                "distance": 16.403,
                "city": "Sudbury",
                "state": "MA"
            },
            {
                "zip_code": "01503",
                "distance": 27.172,
                "city": "Berlin",
                "state": "MA"
            },
            {
                "zip_code": "01543",
                "distance": 44.252,
                "city": "Rutland",
                "state": "MA"
            },
            {
                "zip_code": "01749",
                "distance": 22.75,
                "city": "Hudson",
                "state": "MA"
            },
            {
                "zip_code": "02455",
                "distance": 6.873,
                "city": "North Waltham",
                "state": "MA"
            },
            {
                "zip_code": "02479",
                "distance": 4.907,
                "city": "Waverley",
                "state": "MA"
            },
            {
                "zip_code": "02145",
                "distance": 3.853,
                "city": "Somerville",
                "state": "MA"
            },
            {
                "zip_code": "02140",
                "distance": 4.065,
                "city": "Cambridge",
                "state": "MA"
            },
            {
                "zip_code": "02452",
                "distance": 6.709,
                "city": "Waltham",
                "state": "MA"
            },
            {
                "zip_code": "02478",
                "distance": 5.535,
                "city": "Belmont",
                "state": "MA"
            },
            {
                "zip_code": "02150",
                "distance": 5.61,
                "city": "Chelsea",
                "state": "MA"
            },
            {
                "zip_code": "02451",
                "distance": 8.737,
                "city": "Waltham",
                "state": "MA"
            },
            {
                "zip_code": "02144",
                "distance": 4.405,
                "city": "Somerville",
                "state": "MA"
            },
            {
                "zip_code": "02149",
                "distance": 5.42,
                "city": "Everett",
                "state": "MA"
            },
            {
                "zip_code": "02475",
                "distance": 6.31,
                "city": "Arlington Heights",
                "state": "MA"
            },
            {
                "zip_code": "01510",
                "distance": 30.274,
                "city": "Clinton",
                "state": "MA"
            },
            {
                "zip_code": "02476",
                "distance": 6.495,
                "city": "Arlington",
                "state": "MA"
            },
            {
                "zip_code": "02151",
                "distance": 7.733,
                "city": "Revere",
                "state": "MA"
            },
            {
                "zip_code": "02156",
                "distance": 5.859,
                "city": "West Medford",
                "state": "MA"
            },
            {
                "zip_code": "02153",
                "distance": 5.736,
                "city": "Medford",
                "state": "MA"
            },
            {
                "zip_code": "02474",
                "distance": 6.338,
                "city": "Arlington",
                "state": "MA"
            },
            {
                "zip_code": "02155",
                "distance": 5.994,
                "city": "Medford",
                "state": "MA"
            },
            {
                "zip_code": "01773",
                "distance": 12.12,
                "city": "Lincoln",
                "state": "MA"
            },
            {
                "zip_code": "01754",
                "distance": 18.92,
                "city": "Maynard",
                "state": "MA"
            },
            {
                "zip_code": "01908",
                "distance": 11.134,
                "city": "Nahant",
                "state": "MA"
            },
            {
                "zip_code": "02148",
                "distance": 6.81,
                "city": "Malden",
                "state": "MA"
            },
            {
                "zip_code": "01775",
                "distance": 21.725,
                "city": "Stow",
                "state": "MA"
            },
            {
                "zip_code": "02421",
                "distance": 9.794,
                "city": "Lexington",
                "state": "MA"
            },
            {
                "zip_code": "01740",
                "distance": 26.299,
                "city": "Bolton",
                "state": "MA"
            },
            {
                "zip_code": "01561",
                "distance": 30.496,
                "city": "South Lancaster",
                "state": "MA"
            },
            {
                "zip_code": "01564",
                "distance": 35.054,
                "city": "Sterling",
                "state": "MA"
            },
            {
                "zip_code": "01890",
                "distance": 8.225,
                "city": "Winchester",
                "state": "MA"
            },
            {
                "zip_code": "01541",
                "distance": 40.202,
                "city": "Princeton",
                "state": "MA"
            },
            {
                "zip_code": "02176",
                "distance": 8.538,
                "city": "Melrose",
                "state": "MA"
            },
            {
                "zip_code": "01731",
                "distance": 12.116,
                "city": "Hanscom Afb",
                "state": "MA"
            },
            {
                "zip_code": "02420",
                "distance": 9.992,
                "city": "Lexington",
                "state": "MA"
            },
            {
                "zip_code": "01517",
                "distance": 40.912,
                "city": "East Princeton",
                "state": "MA"
            },
            {
                "zip_code": "01901",
                "distance": 11.774,
                "city": "Lynn",
                "state": "MA"
            },
            {
                "zip_code": "01742",
                "distance": 15.817,
                "city": "Concord",
                "state": "MA"
            },
            {
                "zip_code": "01905",
                "distance": 11.104,
                "city": "Lynn",
                "state": "MA"
            },
            {
                "zip_code": "01906",
                "distance": 10.208,
                "city": "Saugus",
                "state": "MA"
            },
            {
                "zip_code": "01806",
                "distance": 9.452,
                "city": "Woburn",
                "state": "MA"
            },
            {
                "zip_code": "01903",
                "distance": 11.807,
                "city": "Lynn",
                "state": "MA"
            },
            {
                "zip_code": "01910",
                "distance": 11.807,
                "city": "Lynn",
                "state": "MA"
            },
            {
                "zip_code": "01902",
                "distance": 12.489,
                "city": "Lynn",
                "state": "MA"
            },
            {
                "zip_code": "01907",
                "distance": 13.898,
                "city": "Swampscott",
                "state": "MA"
            },
            {
                "zip_code": "02180",
                "distance": 9.482,
                "city": "Stoneham",
                "state": "MA"
            },
            {
                "zip_code": "01807",
                "distance": 10.126,
                "city": "Woburn",
                "state": "MA"
            },
            {
                "zip_code": "01813",
                "distance": 10.126,
                "city": "Woburn",
                "state": "MA"
            },
            {
                "zip_code": "01815",
                "distance": 10.126,
                "city": "Woburn",
                "state": "MA"
            },
            {
                "zip_code": "01888",
                "distance": 10.126,
                "city": "Woburn",
                "state": "MA"
            },
            {
                "zip_code": "01523",
                "distance": 30.765,
                "city": "Lancaster",
                "state": "MA"
            },
            {
                "zip_code": "01720",
                "distance": 19.782,
                "city": "Acton",
                "state": "MA"
            },
            {
                "zip_code": "01719",
                "distance": 23.555,
                "city": "Boxborough",
                "state": "MA"
            },
            {
                "zip_code": "01801",
                "distance": 10.769,
                "city": "Woburn",
                "state": "MA"
            },
            {
                "zip_code": "01452",
                "distance": 46.967,
                "city": "Hubbardston",
                "state": "MA"
            },
            {
                "zip_code": "01467",
                "distance": 27.768,
                "city": "Still River",
                "state": "MA"
            },
            {
                "zip_code": "01904",
                "distance": 12.664,
                "city": "Lynn",
                "state": "MA"
            },
            {
                "zip_code": "01730",
                "distance": 14.356,
                "city": "Bedford",
                "state": "MA"
            },
            {
                "zip_code": "01805",
                "distance": 12.233,
                "city": "Burlington",
                "state": "MA"
            },
            {
                "zip_code": "01808",
                "distance": 11.279,
                "city": "Woburn",
                "state": "MA"
            },
            {
                "zip_code": "01880",
                "distance": 11.529,
                "city": "Wakefield",
                "state": "MA"
            },
            {
                "zip_code": "01945",
                "distance": 16.954,
                "city": "Marblehead",
                "state": "MA"
            },
            {
                "zip_code": "01451",
                "distance": 26.188,
                "city": "Harvard",
                "state": "MA"
            },
            {
                "zip_code": "01803",
                "distance": 12.471,
                "city": "Burlington",
                "state": "MA"
            },
            {
                "zip_code": "01971",
                "distance": 16.249,
                "city": "Salem",
                "state": "MA"
            },
            {
                "zip_code": "01718",
                "distance": 20.783,
                "city": "Village Of Nagog Woods",
                "state": "MA"
            },
            {
                "zip_code": "01453",
                "distance": 35.819,
                "city": "Leominster",
                "state": "MA"
            },
            {
                "zip_code": "01970",
                "distance": 17.635,
                "city": "Salem",
                "state": "MA"
            },
            {
                "zip_code": "01866",
                "distance": 14.76,
                "city": "Pinehurst",
                "state": "MA"
            },
            {
                "zip_code": "01961",
                "distance": 15.021,
                "city": "Peabody",
                "state": "MA"
            },
            {
                "zip_code": "01940",
                "distance": 14.044,
                "city": "Lynnfield",
                "state": "MA"
            },
            {
                "zip_code": "01960",
                "distance": 15.281,
                "city": "Peabody",
                "state": "MA"
            },
            {
                "zip_code": "01867",
                "distance": 13.685,
                "city": "Reading",
                "state": "MA"
            },
            {
                "zip_code": "01460",
                "distance": 23.962,
                "city": "Littleton",
                "state": "MA"
            },
            {
                "zip_code": "01741",
                "distance": 18.989,
                "city": "Carlisle",
                "state": "MA"
            },
            {
                "zip_code": "01434",
                "distance": 29.35,
                "city": "Devens",
                "state": "MA"
            },
            {
                "zip_code": "01865",
                "distance": 15.834,
                "city": "Nutting Lake",
                "state": "MA"
            },
            {
                "zip_code": "01821",
                "distance": 16.447,
                "city": "Billerica",
                "state": "MA"
            },
            {
                "zip_code": "01822",
                "distance": 16.678,
                "city": "Billerica",
                "state": "MA"
            },
            {
                "zip_code": "01473",
                "distance": 43.461,
                "city": "Westminster",
                "state": "MA"
            },
            {
                "zip_code": "01889",
                "distance": 15.576,
                "city": "North Reading",
                "state": "MA"
            },
            {
                "zip_code": "01965",
                "distance": 19.854,
                "city": "Prides Crossing",
                "state": "MA"
            },
            {
                "zip_code": "01438",
                "distance": 49.7,
                "city": "East Templeton",
                "state": "MA"
            },
            {
                "zip_code": "01887",
                "distance": 16.005,
                "city": "Wilmington",
                "state": "MA"
            },
            {
                "zip_code": "01432",
                "distance": 28.7,
                "city": "Ayer",
                "state": "MA"
            },
            {
                "zip_code": "01915",
                "distance": 20.199,
                "city": "Beverly",
                "state": "MA"
            },
            {
                "zip_code": "01464",
                "distance": 31.8,
                "city": "Shirley",
                "state": "MA"
            },
            {
                "zip_code": "01923",
                "distance": 18.193,
                "city": "Danvers",
                "state": "MA"
            },
            {
                "zip_code": "01944",
                "distance": 23.912,
                "city": "Manchester",
                "state": "MA"
            },
            {
                "zip_code": "01864",
                "distance": 16.694,
                "city": "North Reading",
                "state": "MA"
            },
            {
                "zip_code": "01862",
                "distance": 19.281,
                "city": "North Billerica",
                "state": "MA"
            },
            {
                "zip_code": "01441",
                "distance": 47.623,
                "city": "Westminster",
                "state": "MA"
            },
            {
                "zip_code": "01462",
                "distance": 35.634,
                "city": "Lunenburg",
                "state": "MA"
            },
            {
                "zip_code": "01440",
                "distance": 48.135,
                "city": "Gardner",
                "state": "MA"
            },
            {
                "zip_code": "01420",
                "distance": 40.084,
                "city": "Fitchburg",
                "state": "MA"
            },
            {
                "zip_code": "01886",
                "distance": 24.198,
                "city": "Westford",
                "state": "MA"
            },
            {
                "zip_code": "01937",
                "distance": 18.259,
                "city": "Hathorne",
                "state": "MA"
            },
            {
                "zip_code": "01824",
                "distance": 21.646,
                "city": "Chelmsford",
                "state": "MA"
            },
            {
                "zip_code": "01470",
                "distance": 29.822,
                "city": "Groton",
                "state": "MA"
            },
            {
                "zip_code": "01471",
                "distance": 29.822,
                "city": "Groton",
                "state": "MA"
            },
            {
                "zip_code": "01984",
                "distance": 21.444,
                "city": "Wenham",
                "state": "MA"
            },
            {
                "zip_code": "01949",
                "distance": 19.254,
                "city": "Middleton",
                "state": "MA"
            },
            {
                "zip_code": "01472",
                "distance": 32.273,
                "city": "West Groton",
                "state": "MA"
            },
            {
                "zip_code": "01936",
                "distance": 22.637,
                "city": "Hamilton",
                "state": "MA"
            },
            {
                "zip_code": "01450",
                "distance": 30.142,
                "city": "Groton",
                "state": "MA"
            },
            {
                "zip_code": "01876",
                "distance": 19.971,
                "city": "Tewksbury",
                "state": "MA"
            },
            {
                "zip_code": "01930",
                "distance": 29.131,
                "city": "Gloucester",
                "state": "MA"
            },
            {
                "zip_code": "01931",
                "distance": 29.966,
                "city": "Gloucester",
                "state": "MA"
            },
            {
                "zip_code": "01982",
                "distance": 23.655,
                "city": "South Hamilton",
                "state": "MA"
            },
            {
                "zip_code": "01851",
                "distance": 23.25,
                "city": "Lowell",
                "state": "MA"
            },
            {
                "zip_code": "01853",
                "distance": 22.995,
                "city": "Lowell",
                "state": "MA"
            },
            {
                "zip_code": "01852",
                "distance": 22.556,
                "city": "Lowell",
                "state": "MA"
            },
            {
                "zip_code": "01863",
                "distance": 25.08,
                "city": "North Chelmsford",
                "state": "MA"
            },
            {
                "zip_code": "01929",
                "distance": 27.016,
                "city": "Essex",
                "state": "MA"
            },
            {
                "zip_code": "01966",
                "distance": 32.425,
                "city": "Rockport",
                "state": "MA"
            },
            {
                "zip_code": "01983",
                "distance": 22.586,
                "city": "Topsfield",
                "state": "MA"
            },
            {
                "zip_code": "01810",
                "distance": 21.674,
                "city": "Andover",
                "state": "MA"
            },
            {
                "zip_code": "01854",
                "distance": 24.865,
                "city": "Lowell",
                "state": "MA"
            },
            {
                "zip_code": "01812",
                "distance": 21.689,
                "city": "Andover",
                "state": "MA"
            },
            {
                "zip_code": "01899",
                "distance": 21.689,
                "city": "Andover",
                "state": "MA"
            },
            {
                "zip_code": "05501",
                "distance": 21.689,
                "city": "Andover",
                "state": "MA"
            },
            {
                "zip_code": "05544",
                "distance": 21.689,
                "city": "Andover",
                "state": "MA"
            },
            {
                "zip_code": "01850",
                "distance": 24.227,
                "city": "Lowell",
                "state": "MA"
            },
            {
                "zip_code": "01430",
                "distance": 47.152,
                "city": "Ashburnham",
                "state": "MA"
            },
            {
                "zip_code": "01469",
                "distance": 37.613,
                "city": "Townsend",
                "state": "MA"
            },
            {
                "zip_code": "01879",
                "distance": 28.158,
                "city": "Tyngsboro",
                "state": "MA"
            },
            {
                "zip_code": "01474",
                "distance": 40.17,
                "city": "West Townsend",
                "state": "MA"
            },
            {
                "zip_code": "01885",
                "distance": 23.321,
                "city": "West Boxford",
                "state": "MA"
            },
            {
                "zip_code": "01463",
                "distance": 34.246,
                "city": "Pepperell",
                "state": "MA"
            },
            {
                "zip_code": "01845",
                "distance": 23.281,
                "city": "North Andover",
                "state": "MA"
            },
            {
                "zip_code": "01827",
                "distance": 30.852,
                "city": "Dunstable",
                "state": "MA"
            },
            {
                "zip_code": "01431",
                "distance": 43.802,
                "city": "Ashby",
                "state": "MA"
            },
            {
                "zip_code": "01826",
                "distance": 25.669,
                "city": "Dracut",
                "state": "MA"
            },
            {
                "zip_code": "01921",
                "distance": 24.32,
                "city": "Boxford",
                "state": "MA"
            },
            {
                "zip_code": "01938",
                "distance": 27.449,
                "city": "Ipswich",
                "state": "MA"
            },
            {
                "zip_code": "01843",
                "distance": 24.539,
                "city": "Lawrence",
                "state": "MA"
            },
            {
                "zip_code": "01842",
                "distance": 25.228,
                "city": "Lawrence",
                "state": "MA"
            },
            {
                "zip_code": "01840",
                "distance": 25.692,
                "city": "Lawrence",
                "state": "MA"
            },
            {
                "zip_code": "01841",
                "distance": 26.076,
                "city": "Lawrence",
                "state": "MA"
            },
            {
                "zip_code": "01969",
                "distance": 28.673,
                "city": "Rowley",
                "state": "MA"
            },
            {
                "zip_code": "03062",
                "distance": 33.37,
                "city": "Nashua",
                "state": "NH"
            },
            {
                "zip_code": "01833",
                "distance": 27.724,
                "city": "Georgetown",
                "state": "MA"
            },
            {
                "zip_code": "03076",
                "distance": 29.658,
                "city": "Pelham",
                "state": "NH"
            },
            {
                "zip_code": "03061",
                "distance": 34.03,
                "city": "Nashua",
                "state": "NH"
            },
            {
                "zip_code": "03060",
                "distance": 33.18,
                "city": "Nashua",
                "state": "NH"
            },
            {
                "zip_code": "01844",
                "distance": 28.256,
                "city": "Methuen",
                "state": "MA"
            },
            {
                "zip_code": "03048",
                "distance": 43.605,
                "city": "Greenville",
                "state": "NH"
            },
            {
                "zip_code": "03071",
                "distance": 48.283,
                "city": "New Ipswich",
                "state": "NH"
            },
            {
                "zip_code": "03033",
                "distance": 40.658,
                "city": "Brookline",
                "state": "NH"
            },
            {
                "zip_code": "03049",
                "distance": 37.529,
                "city": "Hollis",
                "state": "NH"
            },
            {
                "zip_code": "01835",
                "distance": 28.62,
                "city": "Haverhill",
                "state": "MA"
            },
            {
                "zip_code": "01834",
                "distance": 29.158,
                "city": "Groveland",
                "state": "MA"
            },
            {
                "zip_code": "01922",
                "distance": 30.624,
                "city": "Byfield",
                "state": "MA"
            },
            {
                "zip_code": "03051",
                "distance": 33.088,
                "city": "Hudson",
                "state": "NH"
            },
            {
                "zip_code": "01951",
                "distance": 32.828,
                "city": "Newbury",
                "state": "MA"
            },
            {
                "zip_code": "03064",
                "distance": 35.867,
                "city": "Nashua",
                "state": "NH"
            },
            {
                "zip_code": "01831",
                "distance": 30.629,
                "city": "Haverhill",
                "state": "MA"
            },
            {
                "zip_code": "03063",
                "distance": 37.228,
                "city": "Nashua",
                "state": "NH"
            },
            {
                "zip_code": "03079",
                "distance": 31.723,
                "city": "Salem",
                "state": "NH"
            },
            {
                "zip_code": "01832",
                "distance": 31.399,
                "city": "Haverhill",
                "state": "MA"
            },
            {
                "zip_code": "01830",
                "distance": 31.84,
                "city": "Haverhill",
                "state": "MA"
            },
            {
                "zip_code": "01985",
                "distance": 32.753,
                "city": "West Newbury",
                "state": "MA"
            },
            {
                "zip_code": "03087",
                "distance": 34.252,
                "city": "Windham",
                "state": "NH"
            },
            {
                "zip_code": "01950",
                "distance": 34.61,
                "city": "Newburyport",
                "state": "MA"
            },
            {
                "zip_code": "03055",
                "distance": 44.061,
                "city": "Milford",
                "state": "NH"
            },
            {
                "zip_code": "03073",
                "distance": 34.544,
                "city": "North Salem",
                "state": "NH"
            },
            {
                "zip_code": "03086",
                "distance": 47.712,
                "city": "Wilton",
                "state": "NH"
            },
            {
                "zip_code": "01860",
                "distance": 34.979,
                "city": "Merrimac",
                "state": "MA"
            },
            {
                "zip_code": "03811",
                "distance": 34.823,
                "city": "Atkinson",
                "state": "NH"
            },
            {
                "zip_code": "01952",
                "distance": 37.563,
                "city": "Salisbury",
                "state": "MA"
            },
            {
                "zip_code": "03865",
                "distance": 35.14,
                "city": "Plaistow",
                "state": "NH"
            },
            {
                "zip_code": "03052",
                "distance": 39.711,
                "city": "Litchfield",
                "state": "NH"
            },
            {
                "zip_code": "01913",
                "distance": 36.337,
                "city": "Amesbury",
                "state": "MA"
            },
            {
                "zip_code": "03054",
                "distance": 41.349,
                "city": "Merrimack",
                "state": "NH"
            },
            {
                "zip_code": "03859",
                "distance": 36.283,
                "city": "Newton Junction",
                "state": "NH"
            },
            {
                "zip_code": "03053",
                "distance": 39.502,
                "city": "Londonderry",
                "state": "NH"
            },
            {
                "zip_code": "03858",
                "distance": 36.969,
                "city": "Newton",
                "state": "NH"
            },
            {
                "zip_code": "03031",
                "distance": 44.866,
                "city": "Amherst",
                "state": "NH"
            },
            {
                "zip_code": "03041",
                "distance": 38.43,
                "city": "East Derry",
                "state": "NH"
            },
            {
                "zip_code": "03841",
                "distance": 37.842,
                "city": "Hampstead",
                "state": "NH"
            },
            {
                "zip_code": "03874",
                "distance": 39.734,
                "city": "Seabrook",
                "state": "NH"
            },
            {
                "zip_code": "03826",
                "distance": 38.222,
                "city": "East Hampstead",
                "state": "NH"
            },
            {
                "zip_code": "03038",
                "distance": 39.361,
                "city": "Derry",
                "state": "NH"
            },
            {
                "zip_code": "03827",
                "distance": 39.546,
                "city": "East Kingston",
                "state": "NH"
            },
            {
                "zip_code": "03057",
                "distance": 49.553,
                "city": "Mont Vernon",
                "state": "NH"
            },
            {
                "zip_code": "03848",
                "distance": 39.874,
                "city": "Kingston",
                "state": "NH"
            },
            {
                "zip_code": "03844",
                "distance": 42.109,
                "city": "Hampton Falls",
                "state": "NH"
            },
            {
                "zip_code": "03819",
                "distance": 40.825,
                "city": "Danville",
                "state": "NH"
            },
            {
                "zip_code": "03873",
                "distance": 41.432,
                "city": "Sandown",
                "state": "NH"
            },
            {
                "zip_code": "03110",
                "distance": 46.791,
                "city": "Bedford",
                "state": "NH"
            },
            {
                "zip_code": "03842",
                "distance": 43.819,
                "city": "Hampton",
                "state": "NH"
            },
            {
                "zip_code": "03843",
                "distance": 44.116,
                "city": "Hampton",
                "state": "NH"
            },
            {
                "zip_code": "03103",
                "distance": 45.787,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03109",
                "distance": 45.81,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03833",
                "distance": 44.714,
                "city": "Exeter",
                "state": "NH"
            },
            {
                "zip_code": "03862",
                "distance": 46.577,
                "city": "North Hampton",
                "state": "NH"
            },
            {
                "zip_code": "03871",
                "distance": 47.509,
                "city": "Rye Beach",
                "state": "NH"
            },
            {
                "zip_code": "03036",
                "distance": 45.375,
                "city": "Chester",
                "state": "NH"
            },
            {
                "zip_code": "03101",
                "distance": 48.622,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03105",
                "distance": 48.384,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03107",
                "distance": 48.384,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03108",
                "distance": 48.384,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03111",
                "distance": 48.384,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03032",
                "distance": 47.456,
                "city": "Auburn",
                "state": "NH"
            },
            {
                "zip_code": "03044",
                "distance": 45.831,
                "city": "Fremont",
                "state": "NH"
            },
            {
                "zip_code": "03870",
                "distance": 49.64,
                "city": "Rye",
                "state": "NH"
            },
            {
                "zip_code": "03104",
                "distance": 49.462,
                "city": "Manchester",
                "state": "NH"
            },
            {
                "zip_code": "03885",
                "distance": 47.962,
                "city": "Stratham",
                "state": "NH"
            },
            {
                "zip_code": "03077",
                "distance": 48.688,
                "city": "Raymond",
                "state": "NH"
            },
            {
                "zip_code": "03856",
                "distance": 48.968,
                "city": "Newfields",
                "state": "NH"
            },
            {
                "zip_code": "03040",
                "distance": 49.958,
                "city": "East Candia",
                "state": "NH"
            },
            {
                "zip_code": "03042",
                "distance": 49.556,
                "city": "Epping",
                "state": "NH"
            }

    ]
};
  let validSites;
  document.getElementsByName("form")[0].onsubmit = function() { return false;};

  submitButton.addEventListener("click", showMessage);

  function checkKey(e) {
    var key = e.which || e.keyCode;
    if(key == 13) {
      showMessage();
    }
    isChecked()
  }
  //loadData();
/*
  let http = new XMLHttpRequest();
  let url = "https://ahob85.github.io/smash/cs1/eligibility/smashzips.json";
  http.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        sites = JSON.parse(this.responseText);
        submitButton.addEventListener("click", showMessage);
        submitButton.style.display = "block";
    }
  };

  http.open("GET", url, true);
  http.send();
*/
  /* IE 11 doesn't understand "fetch" of course...
  function loadData() {
    fetch("https://ahob85.github.io/smash/cs1/eligibility/smashzips.json")
    .then(function(response) {
      response.json()
      .then(function(jsonObj) {
        sites = jsonObj;
      }).then(function() {
        submitButton.addEventListener("click", showMessage);
        submitButton.style.display = "block";
      })
    });
  }
  */
  function getDistances() {
    selectedSchool = document.getElementById("selectedSchool");
    let containsIL = false;
    for(let site in sites) {
      let found = false;
      for(let i = 0; i < sites[site].length && !found; i++) {
        if(sites[site][i].zip_code == zipCode) {
          let valid = {name: site, distance: sites[site][i].distance};
          if(valid.name === "SMASH Illinois Tech") {
              containsIL = true;
          }
          if(validSites.length === 0) {
            validSites.push(valid);
          }
          else {
            let placed = false;
            for(let j = 0; j < validSites.length && !placed; j++) {
              if(validSites[j].distance > valid.distance) {
                validSites.splice(j, 0, valid);
                placed = true;
              }
            }
            if(!placed) {
              validSites.push(valid);
            }
          }
          found = true;
        }
      }
    }

    // rewrote this part to account for students applying to SMASH Illinois Tech
  if(!grade || !gpaCheck.checked ||(!school && !containsIL) ||selectedSchool.value == undefined) {
      if(!gpaCheck.checked) {
          message += "<p>Sorry, only students with a GPA of 3.0 or above are eligible to apply.</p>"
      }
      if(!grade) {
        message += "<p>Sorry, only 9th graders are eligible to apply.</p>";
      }
      if(!school && !containsIL) {
        message += "<p>Sorry, only students attending public schools, or who receive financial assistance at private schools, are eligible to apply.</p>";
      }
      if(validSites.length === 0) {
        message += "<p>Sorry, your zip code is not within 50 miles of a SMASH site, or in the case of SMASH Illinois, 25 miles from all eligible areas.</p>";
      }
    } else {
         if ((selectedSchool.value == "My school is not on this list") || (selectedSchool.value == "") || (selectedSchool.value == null)) {
          for(let i = 0; i < validSites.length; i++) {
          message += "<p>You can apply to <b>" + validSites[i].name + " </b>(" + (Math.round(validSites[i].distance * 10) / 10) + " mi)</p>";
            }
         }
         if (containsWayneState(selectedSchool.value)) {
               console.log("Wayne State School")
                message += "<p>You can apply to <b>SMASH Wayne State</b>";

         } else if (containsMichigan(selectedSchool.value)) {
               console.log("Michigan state school")
               message += "<p>You can apply to <b>SMASH Michigan</b></p>";
      } else {
          console.log("could not find school \n")
          console.log(selectedSchool.value)
          console.log("\n")
          
      }
      if(validSites.length === 1) {
          message += "<p>Please be sure to select this site in your application.</p>";
      }
      else {
          message += "<p>Please be sure to select <strong>ONE</strong> of the above sites in your application.</p>";
      }
      message += "<p><a href=\"https://app.smarterselect.com/programs/61809-Smash\">Click here to apply!</a></p>";
    }

window.scrollTo(0, 0);
document.getElementById("message-area").innerHTML = message;
  }

  function getFormData() {
    zipCode = document.getElementById("zip").value;
    school = document.getElementById("school").checked;
    grade = document.getElementById("grade").checked;
    message = "";
    validSites = [];
  }

  function showMessage() {
    getFormData();
    document.getElementById("message-area").innerHTML = "Loading...";
    let zipCodeOkay = zipCode.length === 5 && !isNaN(Number(zipCode));
    if(!zipCodeOkay) {
      document.getElementById("message-area").innerHTML = "<p>Please enter zip code as 5 numbers: #####</p>";
    }
    else {
      getDistances();
    }
  }

})();

function containsWayneState(selectedSchool) {
    var schools = ["Academy of the Americas","Benjamin Carson School for Science and Medicine", "Cass Technical High School", "Central High School", "Cesar Chavez Academy High School", "Cody High School", "Communication and Media Arts High School", "Davis Aerospace Technical High School at Golightly", "Denby High School", "Detroit College Preparatory High School at Northwestern", "Detroit Edison Public School Academy High School", "Detroit International Academy", "Detroit Leadership Academy", "Detroit School of Arts", "East English Village Preparatory Academy", "Frederick Douglass Academy", "Hamtramck High School", "Henry Ford Academy: School for Creative Studies", "Henry Ford High School", "Jalen Rose Leadership Academy", "Martin Luther King Jr. Senior High School", "Mumford High School", "Osborn High School", "Pershing High School", "Renaissance High School", "Southeastern High School", "University Preparatory Academy High School", "University Preparatory Science and Math High School"]
    var i;

    for (i = 0;i< schools.length;i++) {
       if (selectedSchool === schools[i]) {
           return true
       }
    }
    return false
}
function containsMichigan(selectedSchool) {
    var schools = ["Advanced Technology High School", "Belleville High School", "Carman-Ainsworth High School", "Chandler Park Academy High School", "Ecorse Community High School", "Fordson High School", "Henry Ford Academy Dearborn", "International Academy of Flint", "John Glenn High School", "Melvindale High School", "Oak Park High School", "Pontiac High School", "River Rouge High School", "Robichaud High School", "Romulus Senior High School", "Southfield A&T", "Southwestern Classical Academy", "The School at Marygrove", "Truman High School", "University High School Academy","Western International High School", "Ypsilanti Community High School"]

        for (i = 0;i< schools.length;i++) {
       if (selectedSchool === schools[i]) {
           return true
       }
    }
     return false
}
