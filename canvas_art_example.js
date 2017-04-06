var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");

pen.beginPath();
pen.moveTo(0, 0);
pen.lineTo(canvas.width, canvas.height);
pen.strokeStyle = "red";
pen.stroke();

pen.beginPath();
pen.moveTo(canvas.width, 0);
pen.lineTo(0, canvas.height);
pen.strokeStyle = "blue";
pen.stroke();

pen.beginPath();
pen.moveTo(0, canvas.height / 2);
pen.lineTo(canvas.width, canvas.height / 2);
pen.strokeStyle = "green";
pen.stroke();

pen.beginPath();
pen.moveTo(canvas.width / 2, 0);
pen.lineTo(canvas.width / 2, canvas.height);
pen.strokeStyle = "purple";
pen.stroke();

pen.beginPath();
pen.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
pen.strokeStyle = "orange";
pen.stroke();

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
