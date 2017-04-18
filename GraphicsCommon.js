/**
 * Created by Furvent on 18/04/2017.
 */
var carPic;
var carPicLoaded = false;

function initGraphics() {
    carPic = document.createElement("img");
    carPic.onload = function() {
        carPicLoaded = true;
    };
    carPic.src = 'car_red.png';
}

function drawBgd() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}
function drawCar() {
    if (carPicLoaded) {
        drawBitmapCenteredAtLocationWithRotation(carPic, carX, carY, carAng);
    }
}
function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY, withAngle) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAngle);
    canvasContext.drawImage(graphic, -graphic.width/2, -graphic.height/2);
    canvasContext.restore();
}
function drawTrack() {
    for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
        for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
            if (isWallAtTileCoord(eachCol, eachRow)) {
                var brickLeftEdgeX = eachCol * TRACK_W;
                var brickTopEdgeY = eachRow * TRACK_H;
                drawBrick(brickLeftEdgeX, brickTopEdgeY);
            }
        }
    }
}
function drawBrick(x, y) {
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(x, y, TRACK_W - TRACK_GAP, TRACK_H - TRACK_GAP);
}