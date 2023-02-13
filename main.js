var canvas; 
var canvasContext;


window.onload = function() {
    console.log("Hello World!")
    canvas = document.getElementById('gameCanvas');
    console.log(canvas);
    canvasContext =canvas.getContext();
}