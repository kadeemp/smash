//global variables
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

//draw a red line from top-left to bottom-right of canvas
pen.beginPath(); //always start with this
pen.moveTo(0, 0);
pen.lineTo(w, h);
pen.strokeStyle = "red";
pen.stroke();
pen.closePath(); //always end with this

//draw an empty red circle
pen.beginPath();
pen.arc(100, 100, 50, 0, Math.PI * 2);
pen.strokeStyle = "blue";
pen.stroke();
pen.closePath();

//draw a green-filled rectangle
pen.beginPath();
pen.rect(50, 50, 40, 40);
pen.fillStyle = "green";
pen.fill();
pen.closePath();

//functions save you a lot of time! no need to repeat
function drawLine(startX, startY, endX, endY, color){
    
}

function drawCircle(x, y, radius, color, filled){

}

function drawRect(x, y, width, height, color, filled){

}

//call functions here to draw lines and shapes
function run(){

}

run();