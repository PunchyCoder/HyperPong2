var canvas; 
var canvasContext;
var ballX = 255;
var ballY = 255;
var ballSize = 5;
var ballSpeed;


window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext =canvas.getContext('2d');
    
    var framesPerSecond = 30;
    setInterval(drawEverything, 1000/framesPerSecond )
}

function drawBall() {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, 10, 0, Math.PI*2, true)
    canvasContext.fill();
}

function colorRect(leftX,topY, width,height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY, width,height);
}

function drawEverything() {
    colorRect(0,0, canvas.width,canvas.height, 'black');
    drawBall();
}