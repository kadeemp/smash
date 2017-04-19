var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
var radius = (canvas.height / 2);
pen.translate(radius, radius);
radius *= 0.90;

function drawFace(pen, radus) {
    pen.beginPath();
    pen.arc(0, 0, radius, 0, 2 * Math.PI);
    pen.fillStyle = "white";
    pen.fill();

    grad = pen.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, "#333");
    grad.addColorStop(0.5, "white");
    grad.addColorStop(1, "#333");
    pen.strokeStyle = grad;
    pen.lineWidth = radius * 0.1;
    pen.stroke();

    pen.beginPath();
    pen.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    pen.fillStyle = "#333";
    pen.fill();
}

function drawNumbers(pen, radius) {
    pen.font = radius * 0.15 + "px arial";
    pen.textBaseline = "middle";
    pen.textAlign = "center";
    for(i = 1; i < 13; i++){
        ang = i * Math.PI / 6;
        pen.rotate(ang);
        pen.translate(0, -radius * 0.85);
        pen.rotate(-ang);
        pen.fillText(i.toString(), 0, 0);
        pen.rotate(ang);
        pen.translate(0, radius * 0.85);
        pen.rotate(-ang);
    }
}

function drawHand(pen, pos, length, width, height) {
    pen.beginPath();
    pen.lineWidth = width;
    pen.lineCap = "round";
    pen.moveTo(0, 0);
    pen.rotate(pos);
    pen.lineTo(0, -length);
    pen.stroke();
    pen.rotate(-pos);
}

function drawTime(pen, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI/(360*60));
    drawHand(pen, hour, radius*0.5, radius*0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(pen, minute, radius * 0.8, radius * 0.07);
    //second
    second = (second * Math.PI / 30);
    drawHand(pen, second, radius * 0.9, radius * 0.02);
}

function drawClock() {
    drawFace(pen, radius);
    drawNumbers(pen, radius);
    drawTime(pen, radius);
}

setInterval(drawClock, 1000);