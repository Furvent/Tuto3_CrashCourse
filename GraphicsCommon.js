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
    var trackIndex = 0;
    var trackLeftEdgeX = 0;
    var trackTopEdgeY = 0;
    for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) { // Ligne après ligne,
        trackLeftEdgeX = 0; // La position horizontale est réinitialisée pour le bord gauche.
        for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++) { // De gauche à droite à chaque ligne.
            var trackTypeHere = trackGrid[trackIndex]; // Getting track code here
            canvasContext.drawImage(trackPics[trackTypeHere], trackLeftEdgeX, trackTopEdgeY);

            trackIndex++;
            trackLeftEdgeX += TRACK_W;
        }
        trackTopEdgeY += TRACK_H;
    }
}