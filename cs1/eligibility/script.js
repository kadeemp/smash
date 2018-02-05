function init() {
  var submitButton = document.getElementById("form-submit");
  var zipCode;
  var school;
  var grade;
  var message;

  var berkeleyDistance = {
    name:"SMASH UC Berkeley",
    distance: -1,
    text: ""
  },
    davisDistance = {
    name:"SMASH UC Davis",
    distance: -1,
    text: ""
  },
  stanfordDistance = {
    name:"SMASH Stanford",
    distance: -1,
    text: ""
  },
  uclaDistance = {
    name:"SMASH UCLA",
    distance: -1,
    text: ""
  },
  morehouseDistance = {
    name:"SMASH Morehouse",
    distance: -1,
    text: ""
  },
  wayneDistance = {
    name:"SMASH Wayne State",
    distance: -1,
    text: ""
  },
  pennDistance = {
    name:"SMASH Wharton",
    distance: -1,
    text: ""
  };
  var distances = [berkeleyDistance, davisDistance, stanfordDistance,
    uclaDistance, morehouseDistance, wayneDistance, pennDistance];

  var service = new google.maps.DistanceMatrixService();

  function getDistances(response) {
    console.log(response);
    if(response.originAddresses[0].length === 0 || response.rows[0].elements[0].status === "ZERO_RESULTS") {
      message += "<p>Please enter a United States zip code!</p>";
    }
    else {
      for(var i = 0; i < distances.length; i++) {
        distances[i].distance = response.rows[0].elements[i].distance.value;
        distances[i].text = response.rows[0].elements[i].distance.text;
        console.log(distances[i].distance + " " + distances[i].text);
      }
      var count = 0;
      for(var i = 0; i < distances.length; i++) {
        if(distances[i].distance <= 80467.2 || (i === 1 && distances[i].distance <= 120701)) {
          message += "<p>You can apply to <b>" + distances[i].name + " </b>(" + distances[i].text + ")</p>";
          count++;
        }
      }
      if(count === 0) {
        message += "<p>Sorry, your zip code is not within 50 miles of a SMASH site.</p>";
      }
      else if(count === 1) {
        message += "<p>Please be sure to select this site in your application.</p>";
        message += "<p><a href=\"https://app.smarterselect.com/programs/44358-Level-Playing-Field-Institute\">Click here to apply!</a></p>";
      }
      else {
        message += "<p>Please be sure to select <strong>ONE</strong> of the above sites in your application.</p>";
        message += "<p><a href=\"https://app.smarterselect.com/programs/44358-Level-Playing-Field-Institute\">Click here to apply!</a></p>";
      }
    }
    document.getElementById("message-area").innerHTML = message;
    window.scrollTo(0, document.body.scrollHeight);
    submitButton.style.display = none;
  }

  function getFormData() {
    zipCode = document.getElementById("zip").value;
    school = document.getElementById("school").checked;
    grade = document.getElementById("grade").checked;
    message = "";
  }

  function showMessage() {
    getFormData();
    document.getElementById("message-area").innerHTML = "";
    var zipCodeOkay = zipCode.length === 5 && !isNaN(Number(zipCode));
    var message = "";
    if(!school || !grade || zipCode.length != 5) {
      if(!school) {
        message += "<p>Sorry, only students attending public schools, or who receive financial assistance at private schools, are eligible to apply.</p>";
      }
      if(!grade) {
        message += "<p>Sorry, only 9th graders are eligible to apply.</p>";
      }
      if(!zipCodeOkay) {
        message += "<p>Please enter zip code as 5 numbers: #####</p>";
      }
      document.getElementById("message-area").innerHTML = message;
      window.scrollTo(0, document.body.scrollHeight);
    }
    else {
      service.getDistanceMatrix(
      {
        origins: [zipCode],
        travelMode: 'DRIVING',
        destinations: ["94720", "95616", "94305", "90095", "30314", "48202", "19104"],
        unitSystem: google.maps.UnitSystem.IMPERIAL
      }, getDistances);
    }
  }
  submitButton.addEventListener("click", showMessage);
}
