var canvas; 
var canvasContext;
var ballX = 255;
var ballY = 255;
var ballSize = 10;
var ballSpeedX = 10;
var ballSpeedY = 8;


window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext =canvas.getContext('2d');
    
    var framesPerSecond = 30;
    setInterval(function() {
            moveEverything();
            drawEverything();
    }, 1000/framesPerSecond )
}

function drawBall(centerX,centerY, radius,color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY, radius, 0, Math.PI*2, true)
    canvasContext.fill();
}

function colorRect(leftX,topY, width,height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY, width,height);
}

function moveBall(){
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX > canvas.width-ballSize || ballX < ballSize) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballY > canvas.height-ballSize || ballY < ballSize) {
        ballSpeedY = -ballSpeedY;
    }
}

// BIG MOVERS #######
function moveEverything() {
    moveBall();
}

function drawEverything() {
    colorRect(0,0, canvas.width,canvas.height, 'black');
    drawBall(ballX,ballY, ballSize,'white');
}

