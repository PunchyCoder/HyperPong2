var canvas; 
var canvasContext;
var ballX = 255;
var ballY = 255;
var ballSize = 10;
var ballSpeedX = 10;
var ballSpeedY = 0;
var paddleX = 30;
var paddleY = 200;
var paddleWidth = 40;
var paddleHeight = 160;
var paddleSpeed = 15;
var paddleColor = 'green';

var keyControls = {
    ArrowUp: false,
    ArrowDown: false

}

function handleEvents() {
    document.addEventListener('keydown',
        function(evt) {
            evt.preventDefault;
            keyControls[evt.key] = true;
            console.log(keyControls[evt.key])
        });
    document.addEventListener('keyup',
        function(evt) {
            evt.preventDefault;
            keyControls[evt.key] = false;
            console.log(keyControls[evt.key])
        })
}

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext =canvas.getContext('2d');

    /*document.addEventListener('keydown',
        function(evt) {
            console.log(evt.key);
        })*/
    handleEvents();
    
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

function movePaddle(){
    if(keyControls['ArrowUp'] === true) {
        paddleY -= paddleSpeed;
    }
    if(keyControls['ArrowDown'] === true) {
        paddleY += paddleSpeed;
    }
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

function ballPaddleCollision(){
    if(ballX < paddleX+paddleWidth+ballSize && 
        ballY > paddleY && 
        ballY < paddleY+paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
}

// BIG MOVERS #######
function moveEverything() {
    moveBall();
    ballPaddleCollision();
    movePaddle();
}

function drawEverything() {
    colorRect(0,0, canvas.width,canvas.height, 'black');
    drawBall(ballX,ballY, ballSize,'white');
    colorRect(paddleX,paddleY, paddleWidth,paddleHeight, paddleColor)
}

