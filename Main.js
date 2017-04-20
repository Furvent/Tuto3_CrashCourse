var canvas;
var canvasContext;
var FRAMES_PER_SECOND = 60;

var p1 = new carClass();
var p2 = new carClass();

window.onload = function()
{
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // INIT //
    initTrack();
    p1.carInit(carPic, "Red car");
    p2.carInit(car2Pic, "Blue car");
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
    p1.moveCar();
    p2.moveCar();
}

function drawEverything() {
    drawTrack();
    p1.drawCar();
    p2.drawCar();
}