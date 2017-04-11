//global variables
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");

//functions
function drawRect(x, y, width, height, color, filled = false){

}

function drawTriangle(x, y, base, height, color, filled = false){

}

function drawCircle(x, y, radius, color, filled = false){

}

function handleDrawRect(){

}

function handleDrawTriangle(){

}

function handleDrawCircle(){

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

/*
 This function runs the whole program! 
 Complete the three "draw" functions above first!
*/
function run(){

}

//Calling the run function here! 
run();