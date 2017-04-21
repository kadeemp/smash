/**
Initialize global variables, attach event handlers, etc
**/
var hyperButton = document.getElementById("hyper");
hyperButton.addEventListener("click", revealDesc);

var shapeSelector = document.getElementById("shape-choice");
shapeSelector.addEventListener("change", processShapeChoices);

var submitButton = document.getElementById("form-submit");
submitButton.addEventListener("click", processDrawing);

var hyperButtonClicked = false;

var canvas = null; //using this later
var pen = null;

function revealDesc(){
    if(!hyperButtonClicked){
        hyperButtonClicked = true;
        document.getElementById("hyper-desc").style.display = "block";
        hyperButton.value = unescape("HYPERSMASH%u2122 technology is cool!");
    }
    else{
        hyperButtonClicked = false;
        document.getElementById("hyper-desc").style.display = "none";
        hyperButton.value = unescape("What is HYPERSMASH%u2122 technology?");
    }
}

function processShapeChoices() {
    var shape = shapeSelector.value;
    if(shape == "rectangle"){
        document.getElementById("rect").style.display = "block";
    }
    else{
        document.getElementById("rect").style.display = "none";
    }
    if(shape == "triangle"){
        document.getElementById("tri").style.display = "block";
    }
    else{
        document.getElementById("tri").style.display = "none";
    }
    if(shape == "circle"){
        document.getElementById("circ").style.display = "block";
    }
    else{
        document.getElementById("circ").style.display = "none";
    }
}

function drawRect(x, y, width, height, color, filled = false){
    pen.beginPath();
    pen.rect(x, y, width, height);
    if(filled){
        pen.fillStyle = color;
        pen.fill();
    }
    else{
        pen.strokeStyle = color;
        pen.stroke();
    }
    pen.closePath();
}

function drawTriangle(x, y, base, height, color, filled = false){
    pen.beginPath();
    pen.moveTo(x, y);
    pen.lineTo(x + (base / 2), y + height);
    pen.lineTo(x - (base / 2), y + height);
    pen.lineTo(x, y);
    if(filled){
        pen.fillStyle = color;
        pen.fill();
    }
    else{
        pen.strokeStyle = color;
        pen.stroke();
    }
    pen.closePath();
}

function drawCircle(x, y, radius, color, filled = false){
    pen.beginPath();
    pen.arc(x, y, radius, 0, Math.PI * 2);
    if(filled){
        pen.fillStyle = color;
        pen.fill();
    }
    else{
        pen.strokeStyle = color;
        pen.stroke();
    }
    pen.closePath();
}

function handleDrawRect(){
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var width = Number(document.getElementById("width").value);
    var height = Number(document.getElementById("rect-height").value);
    var color = document.getElementById("color").value;
    var filled = document.getElementById("filled").checked;
    drawRect(x, y, width, height, color, filled);
}

function handleDrawTriangle(){
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var base = Number(document.getElementById("base").value);
    var height = Number(document.getElementById("tri-height").value);
    var color = document.getElementById("color").value;
    var filled = document.getElementById("filled").checked;
    drawTriangle(x, y, base, height, color, filled);
}

function handleDrawCircle(){
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var radius = Number(document.getElementById("radius").value);
    var color = document.getElementById("color").value;
    var filled = document.getElementById("filled").checked;
    drawCircle(x, y, radius, color, filled);
}

function drawName(name){
    pen.font = "30px Arial";
    pen.fillStyle = "red";
    pen.textAlign = "center";
    pen.fillText(name, canvas.width / 2, 30);
}
    
function eraseCanvas(){
  pen.clearRect(0, 0, canvas.width, canvas.height);
}

function createCanvas(){
    canvas = document.createElement("canvas");
    canvas.width = "400";
    canvas.height = "400";
    pen = canvas.getContext("2d");
    document.getElementById("myCanvas").appendChild(canvas);
}


function processDrawing(){
    var testX = Number(document.getElementById("x").value;
    var testY = Number(document.getElementById("y").value;
    if((textX < 0 || textX > 400) || (testY < 30 || testY > 400)){
        alert("Please enter valid coordinates!");
    }
    else{
        if(canvas == null){
            createCanvas();
            drawName(document.getElementById("user-name").value);
            document.getElementById("user-name").disabled = "disabled";
        }
        var shape = shapeSelector.value;
        if(shape == "rectangle"){
            handleDrawRect();
        }
        else if(shape == "triangle"){
            handleDrawTriangle();
        }
        else if(shape == "circle"){
            handleDrawCircle();
        }

        }
}


