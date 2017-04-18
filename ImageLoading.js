/**
 * Created by Furvent on 18/04/2017.
 */
var picsToLoad = 0;

var carPic;
var trackPicRoad;
var trackPicWall;

function countLoadedImageAndLaunchIfReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if (picsToLoad <= 0) {
        loadingDoneSoStartGame();
    }
}

/*function loadImages() {
    carPic.onload = countLoadedImageAndLaunchIfReady;
    carPic.src = "car_red.png";

    trackPicRoad.onload = countLoadedImageAndLaunchIfReady;
    trackPicRoad.src = "road.png";

    trackPicWall.onload = countLoadedImageAndLaunchIfReady;
    trackPicWall.src = "wall.png";
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImageAndLaunchIfReady();
    imgVar.src = fileName;
}*/

function loadImages() {
    var imageList = [
        {varName: carPic, theFile: "car_red.png"},
        {varName: trackPicRoad, theFile: "road.png"},
        {varName: trackPicWall, theFile: "wall.png"}
    ];

    picsToLoad = imageList.length;
    for (var i = 0; i < imageList.length; i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
 }

 function beginLoadingImage(imgVar, fileName) {
 imgVar.onload = countLoadedImageAndLaunchIfReady();
 imgVar.src ="images/" + fileName;
 }