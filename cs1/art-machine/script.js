//global variables
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");

//functions
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
    var x = Number(prompt("What is the x coordinate?"));
    var y = Number(prompt("what is the y coordinate?"));
    var width = Number(prompt("What is the width?"));
    var height = Number(prompt("What is the height?"));
    var color = prompt("What is the color?");
    var filled = prompt("Please enter true for filled, false for not filled.");
    alert("Here's your shape!");
    drawRect(x, y, width, height, color, filled);
}

function handleDrawTriangle(){
    var x = Number(prompt("What is the x coordinate?"));
    var y = Number(prompt("what is the y coordinate?"));
    var base = Number(prompt("What is the base length?"));
    var height = Number(prompt("What is the height?"));
    var color = prompt("What is the color?");
    var filled = prompt("Please enter true for filled, false for not filled.");
    alert("Here's your shape!");
    drawTriangle(x, y, base, height, color, filled == "true");
}

function handleDrawCircle(){
    var x = Number(prompt("What is the x coordinate?"));
    var y = Number(prompt("what is the y coordinate?"));
    var radius = Number(prompt("What is the radius?"));
    var color = prompt("What is the color?");
    var filled = prompt("Please enter true for filled, false for not filled.");
    alert("Here's your shape!");
    drawCircle(x, y, radius, color, filled == "true");
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
    alert("Welcome to Canvas Art Machine!");
    var name = prompt("What is your name?");
    alert("Hi " + name + "!");
    var valid = false;
    while(!valid){
        drawName(name);
        var choice = prompt("Enter a number for the shape you'd like me to draw." + 
       "\n1: Rectangle" + 
       "\n2: Triangle" + 
       "\n3: Circle");
        if(choice == 1){
            valid = true;
            handleDrawRect();
        }
        else if(choice == 2){
            valid = true;
            handleDrawTriangle();
        }
        else if(choice == 3){
            valid = true;
            handleDrawCircle();
        }
        else{
            alert("That is not a valid choice!");
        }
    }
    alert("Goodbye!");
}

//Calling the run function here! 
run();
