//global variables
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

//functions
function drawLine(startX, startY, endX, endY, color){
    pen.beginPath();
    pen.moveTo(startX, startY);
    pen.lineTo(endX, endY);
    pen.strokeStyle = color;
    pen.stroke();
    pen.closePath();
}

function drawCircle(x, y, radius, color, filled){
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

function drawRect(x, y, width, height, color, filled){
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

function run(){
    drawLine(0, 0, w, h, "red");
    drawLine(w, 0, 0, h, "blue");
    drawLine(0, h / 2, w, h / 2, "green");
    drawLine(w / 2, 0, w / 2, h, "purple");
    drawCircle(w / 2, h / 2, w / 2, "orange", false);
    drawRect(w / 2, h / 2, 40, 40, "blue", true);
    //some extra stuff for fun
    pen.font = "30px Arial";
    pen.fillStyle = "red";
    pen.textAlign = "center";
    pen.fillText("Hello World", canvas.width / 2, canvas.height / 2);
    pen.fillText("I'm a computer.", canvas.width / 2, (canvas.height / 2) + 30);
    for(i = 0; i < canvas.width / 4; i++){
        pen.beginPath();
        pen.moveTo(i * 10, 0);
        pen.lineTo(i * 10, canvas.height);
        pen.strokeStyle = "green";
        pen.stroke();
    }
}

run();


