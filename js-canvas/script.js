var c = document.getElementById("mycan");

var ctx = c.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth=3;
ctx.strokeRect(10,10,380,280);
ctx.fillStyle  = "green";
ctx.fillRect(12,12,376,276); 

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2∗Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();  
ctx.stroke(); 