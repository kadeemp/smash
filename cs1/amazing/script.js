/**
Initialize global variables, attach event handlers, etc
**/
var hyperButton = document.getElementById("hyper");
var shapeSelector = document.getElementById("shape-choice");
var submitButton = document.getElementById("form-submit");
var xText = document.getElementById("x-text").firstChild.innerHTML;
var yText = document.getElementById("y-text").firstChild.innerHTML;
var hyperButtonClicked = false;

var canvas = null; //using this later
var pen = null; 

function revealDesc() {
    if (!hyperButtonClicked) {
        hyperButtonClicked = true;
        document.getElementById("hyper-desc").style.display = "block";
        hyperButton.value = decodeURI("HYPERSMASH%u2122 technology is cool!");
    } else {
        hyperButtonClicked = false;
        document.getElementById("hyper-desc").style.display = "none";
        hyperButton.value = decodeURI("What is HYPERSMASH%u2122 technology?");
    }
}

function processShapeChoices() {
    var shape = shapeSelector.value;
    if (shape === "rectangle") {
        document.getElementById("rect").style.display = "block";
    } else {
        document.getElementById("rect").style.display = "none";
    }
    if (shape === "triangle") {
        document.getElementById("tri").style.display = "block";
    } else {
        document.getElementById("tri").style.display = "none";
    }
    if (shape === "circle") {
        document.getElementById("circ").style.display = "block";
    } else {
        document.getElementById("circ").style.display = "none";
    }
}

function drawRect(x, y, width, height, color, filled) {
    pen.beginPath();
    pen.rect(x, y, width, height);
    if (filled) {
        pen.fillStyle = color;
        pen.fill();
    } else {
        pen.strokeStyle = color;
        pen.stroke();
    }
    pen.closePath();
}

function drawTriangle(x, y, base, height, color, filled) {
    pen.beginPath();
    pen.moveTo(x, y);
    pen.lineTo(x + (base / 2), y + height);
    pen.lineTo(x - (base / 2), y + height);
    pen.lineTo(x, y);
    if (filled) {
        pen.fillStyle = color;
        pen.fill();
    } else {
        pen.strokeStyle = color;
        pen.stroke();
    }
    pen.closePath();
}

function drawCircle(x, y, radius, color, filled) {
    pen.beginPath();
    pen.arc(x, y, radius, 0, Math.PI * 2);
    if (filled) {
        pen.fillStyle = color;
        pen.fill();
    } else {
        pen.strokeStyle = color;
        pen.stroke();
    }
    pen.closePath();
}

function handleDrawRect() {
    var x = Number(document.getElementById("x").value),
        y = Number(document.getElementById("y").value),
        width = Number(document.getElementById("width").value),
        height = Number(document.getElementById("rect-height").value),
        color = document.getElementById("color").value,
        filled = document.getElementById("filled").checked;
    drawRect(x, y, width, height, color, filled);
}

function handleDrawTriangle() {
    var x = Number(document.getElementById("x").value),
        y = Number(document.getElementById("y").value),
        base = Number(document.getElementById("base").value),
        height = Number(document.getElementById("tri-height").value),
        color = document.getElementById("color").value,
        filled = document.getElementById("filled").checked;
    drawTriangle(x, y, base, height, color, filled);
}

function handleDrawCircle() {
    var x = Number(document.getElementById("x").value),
        y = Number(document.getElementById("y").value),
        radius = Number(document.getElementById("radius").value),
        color = document.getElementById("color").value,
        filled = document.getElementById("filled").checked;
    drawCircle(x, y, radius, color, filled);
}

function drawName(name) {
    pen.font = "30px Arial";
    pen.fillStyle = "red";
    pen.textAlign = "center";
    pen.fillText(name, canvas.width / 2, 30);
}
    
function eraseCanvas() { "use strict"; pen.clearRect(0, 0, canvas.width, canvas.height); }

function createCanvas() {
    canvas = document.createElement("canvas");
    canvas.width = "400";
    canvas.height = "400";
    pen = canvas.getContext("2d");
    document.getElementById("myCanvas").appendChild(canvas);
}

function processDrawing() {
    var xValid = document.getElementById("x").value,
        yValid = document.getElementById("y").value,
        shape = shapeSelector.value,
        text = "<br>Invalid entry!";
    if (xValid < 0 || xValid > 400) {
      document.getElementById("x-text").firstChild.innerHTML = xText + text;
    } else if (yValid < 30 | yValid > 400) {
      document.getElementById("x-text").firstChild.innerHTML = xText;
      document.getElementById("y-text").firstChild.innerHTML = yText + text;
    } else {
        document.getElementById("x-text").firstChild.innerHTML = xText;
        document.getElementById("y-text").firstChild.innerHTML = yText;
        if (canvas === null) {
            createCanvas();
            drawName(document.getElementById("user-name").value);
            document.getElementById("user-name").disabled = true;
        }
        if (shape === "rectangle") {
            handleDrawRect();
        } else if (shape === "triangle") {
            handleDrawTriangle();
        } else if (shape === "circle") {
            handleDrawCircle();
        }
    }
}

hyperButton.addEventListener("click", revealDesc);
shapeSelector.addEventListener("change", processShapeChoices);
submitButton.addEventListener("click", processDrawing);
