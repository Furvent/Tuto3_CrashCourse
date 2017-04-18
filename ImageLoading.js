/**
 * Created by Furvent on 18/04/2017.
 */
var picsToLoad = 0;
var trackPics = [];

var carPic;
var trackPicRoad;
var trackPicWall;
var trackPicGoal;

function loadImages() {
    carPic = document.createElement("img");
    trackPicRoad = document.createElement("img");
    trackPicWall = document.createElement("img");
    trackPicGoal = document.createElement("img");

    var imageList = [
        {varName: carPic, theFile: "car_red.png"},
        {varName: trackPicRoad, theFile: "road.png"},
        {varName: trackPicWall, theFile: "wall.png"},
        {varName: trackPicGoal, theFile: "goal.png"}
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

function countLoadedImageAndLaunchIfReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if (picsToLoad <= 0) {
        loadingDoneSoStartGame();
    }
}