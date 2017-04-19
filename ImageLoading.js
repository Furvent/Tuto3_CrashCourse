/**
 * Created by Furvent on 18/04/2017.
 */
var picsToLoad = 0;
var carPic = document.createElement("img");
var car2Pic = document.createElement("img");
var trackPics = [];

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
    var imageList = [
        {varName: carPic, theFile: "car_red.png"},
        {varName: car2Pic, theFile: "car_blue.png"},

        {trackType: TRACK_ROAD, theFile: "road.png"},
        {trackType: TRACK_WALL, theFile: "wall.png"},
        {trackType: TRACK_GOAL, theFile: "goal.png"}
    ];

    picsToLoad = imageList.length;
    for (var i = 0; i < imageList.length; i++) {
        if (imageList[i].trackType !== undefined) {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        } else {
            beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        }
    }
 }

 function beginLoadingImage(imgVar, fileName) {
 imgVar.onload = countLoadedImageAndLaunchIfReady();
 imgVar.src ="images/" + fileName;
 }

function countLoadedImageAndLaunchIfReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if (picsToLoad <= 0) {
        loadingDoneSoStartGame();
    }
}