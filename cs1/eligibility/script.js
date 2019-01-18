(function() {
  let submitButton = document.getElementById("form-submit");
  let zipCode;
  let school;
  let grade;
  let message;
  let sites;
  let validSites;

  //loadData();

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
    if(!grade || (!school && !containsIL) || validSites.length === 0) {
        if(!grade) {
          message += "<p>Sorry, only 9th graders are eligible to apply.</p>";
        }
        if(!school && !containsIL) {
          message += "<p>Sorry, only students attending public schools, or who receive financial assistance at private schools, are eligible to apply.</p>";
        }
        if(validSites.length === 0) {
          message += "<p>Sorry, your zip code is not within 50 miles of a SMASH site.</p>";
        }
    } else {
        for(let i = 0; i < validSites.length; i++) {
            message += "<p>You can apply to <b>" + validSites[i].name + " </b>(" + (Math.round(validSites[i].distance * 10) / 10) + " mi)</p>";
        }
        if(validSites.length === 1) {
            message += "<p>Please be sure to select this site in your application.</p>";
        }
        else {
            message += "<p>Please be sure to select <strong>ONE</strong> of the above sites in your application.</p>";
        }
        message += "<p><a href=\"https://app.smarterselect.com/programs/53973-Smash\">Click here to apply!</a></p>";
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
        message += "<p>Please enter zip code as 5 numbers: #####</p>";
      }
      document.getElementById("message-area").innerHTML = message;
    }
    else {
      getDistances();
    }
  }

})();
