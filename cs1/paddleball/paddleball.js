//global variables
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
var score = document.getElementById("score").innerHTML;


//Don't ask what this stuff means yet, just copy!
//You'll learn about all this in due time!
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//functions
function drawBall(){

}

function keyDownHandler(e){

}

function keyUpHandler(e){

}

function drawPaddle(){

}

//don't touch this!
function updateScore(){
    score++;
    document.getElementById("score").innerHTML = score;
}

function draw(){
  
}

//runs the game!
setInterval(draw, 10);