//global variables
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = document.getElementById("score").innerHTML;

//Don't ask what this stuff means yet, just copy!
//You'll learn about all this in due time!
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//functions
function drawBall(){
    pen.beginPath();
    pen.arc(x, y, ballRadius, 0, Math.PI * 2);
    pen.fillStyle = "#0095DD";
    pen.fill();
    pen.closePath();
}

function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true;
    }
    else if(e.keyCode == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed = false;
    }
    else if(e.keyCode == 37){
        leftPressed = false;
    }
}

function drawPaddle(){
    pen.beginPath();
    pen.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    pen.fillStyle = "#0095DD";
    pen.fill();
    pen.closePath();
}

//don't touch this!
function updateScore(){
    score++;
    document.getElementById("score").innerHTML = score;
}

function draw(){
    pen.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(x + dx < ballRadius || x + dx > canvas.width - ballRadius){
        dx = -dx;
    }
    if(y + dy < ballRadius){
        dy = -dy;
    }
    else if(y + dy > canvas.height - ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            //game gets harder the better you are at playing!
            dy = -dy * 1.05; 
            dx *= 1.05;
            updateScore();
        }
        else{
            alert("GAME OVER!");
            document.location.reload();
        }
    }
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}

setInterval(draw, 10);