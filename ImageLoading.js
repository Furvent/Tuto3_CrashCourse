/**
 * Created by Furvent on 18/04/2017.
 */
var picsToLoad = 3;

var carPic;
var trackPicRoad;
var trackPicWall;

function countLoadedImageAndLaunchIfReady() {
    picsToLoad--;
    if (picsToLoad <= 0) {
        loadingDoneSoStartGame();
    }
}

function loadImages() {
    carPic.onload = countLoadedImageAndLaunchIfReady;
    carPic.src = "car_red.png";

    trackPicRoad.onload = countLoadedImageAndLaunchIfReady;
    trackPicRoad.src = "road.png";

    trackPicWall.onload = countLoadedImageAndLaunchIfReady;
    trackPicWall.src = "wall.png";
}