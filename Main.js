var canvas;
var canvasContext;

window.onload = function()
{
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // INIT //
    initGraphics();
    initInput();
    initTrack();
    initCar();

    var framesPerSecond = 60;
    setInterval(function() {
        if (!isPause) {
            moveEverything();
            drawEverything();
        }
    }, 1000/framesPerSecond);
};

function moveEverything() {
    moveCar();
}

function drawEverything() {
    drawBgd();
    drawTrack();
    drawCar();
}