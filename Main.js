var canvas;
var canvasContext;
var FRAMES_PER_SECOND = 60;

window.onload = function()
{
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // INIT //
    initTrack();
    initCar();
    initGraphics();
    initInput();
};

function loadingDoneSoStartGame() {
    setInterval(function() {
        if (!isPause) {
            moveEverything();
            drawEverything();
        }
    }, 1000/FRAMES_PER_SECOND);
}

function moveEverything() {
    moveCar();
}

function drawEverything() {
    drawTrack();
    drawCar();
}