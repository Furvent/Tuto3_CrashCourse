/**
 * Created by Furvent on 18/04/2017.
 */
function initGraphics() {
    loadImages();
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

            var trackIndex = trackTileToIndex(eachCol, eachRow);
            var trackTypeHere = trackGrid[trackIndex];
            var useImg;

            switch (trackTypeHere) {
                case TRACK_ROAD:
                    useImg = trackPicRoad;
                    break;
                case TRACK_WALL:
                    useImg = trackPicWall;
                    break;
                case TRACK_GOAL:
                    useImg = trackPicGoal;
                    break;
                default:
                    useImg = trackPicRoad;
                    break;
            }
            canvasContext.drawImage(useImg, trackLeftEdgeX, trackTopEdgeY);
        }
    }
}