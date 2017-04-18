/**
 * Created by Furvent on 18/04/2017.
 */
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
    drawBitmapCenteredAtLocationWithRotation(carPic, carX, carY, carAng);
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
            var trackLeftEdgeX = eachCol * TRACK_W;
            var trackTopEdgeY = eachRow * TRACK_H;

            if (isWallAtTileCoord(eachCol, eachRow)) {
                canvasContext.drawImage(trackPicWall, trackLeftEdgeX, trackTopEdgeY)
            } else {
                canvasContext.drawImage(trackPicRoad, trackLeftEdgeX, trackTopEdgeY)
            }
        }
    }
}