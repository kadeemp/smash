var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");

pen.beginPath();
pen.moveTo(0, 0);
pen.lineTo(canvas.width, canvas.height);
pen.strokeStyle = "red";
pen.stroke();