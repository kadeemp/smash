//global variables
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
var mouse = {x: 0, y: 0};
var erase = document.getElementById("erase");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

//functions
function penDown(e){
    pen.beginPath();
    pen.moveTo(mouse.x, mouse.y);
    canvas.addEventListener("mousemove", paint);
}

function paint() {
    pen.lineTo(mouse.x, mouse.y);
    pen.stroke();
}

function penUp(){
    canvas.removeEventListener("mousemove", paint);
}

function setMouseCoordinates(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}

function eraseCanvas(){
  pen.clearRect(0, 0, canvas.width, canvas.height);
}

function setColor(color){
  pen.strokeStyle = color;
}

function init() {
    pen.lineWidth = 5;
    pen.lineJoin = "round";
    pen.lineCap = "round";
    pen.strokeStyle = "red";
    canvas.addEventListener("mousemove", setMouseCoordinates);
    canvas.addEventListener("mousedown", penDown);
    canvas.addEventListener("mouseup", penUp);
    canvas.addEventListener("mouseout", penUp);
    erase.addEventListener("click", eraseCanvas);
    red.addEventListener("click", function(){setColor("red")});
    green.addEventListener("click", function(){setColor("green")});
    blue.addEventListener("click", function(){setColor("blue")});
}

//Run the program!
init();