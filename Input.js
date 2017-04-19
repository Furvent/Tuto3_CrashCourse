/**
 * Created by Furvent on 18/04/2017.
 */
var keyPressed, keyReleased;
const KEY_UP_Z = 90, KEY_LEFT_Q = 81, KEY_DOWN_S = 83, KEY_RIGHT_D = 68; // p1
const KEY_UP_ARROW = 38, KEY_LEFT_ARROW = 37, KEY_DOWN_ARROW = 40, KEY_RIGHT_ARROW = 39; // p2

// Flag
var isPause = false;

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    canvas.addEventListener('click', function(){
        isPause = !isPause;
    });

    p1.setupControls(KEY_UP_Z, KEY_DOWN_S, KEY_LEFT_Q, KEY_RIGHT_D);
    p2.setupControls(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW);
}

function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, p1, true);
    setKeyHoldState(evt.keyCode, p2, true);
    //evt.preventDefault(); // Empêche la page du navigateur de réagir aux input (éviter le scrolling par exemple).
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, p1, false);
    setKeyHoldState(evt.keyCode, p2, false);
    //document.getElementById("debugText").innerHTML = "KeyCode Released : " + evt.keyCode;
}
function setKeyHoldState(thisKey, thiscar, setTo) {
    if (thisKey === thiscar.controlKeyForGas) {
        thiscar.keyHeld_Gas = setTo;
    }
    if (thisKey === thiscar.controlKeyForReverse) {
        thiscar.keyHeld_Reverse = setTo;
    }
    if (thisKey === thiscar.controlKeyForTurnLeft) {
        thiscar.keyHeld_TurnLeft = setTo;
    }
    if (thisKey === thiscar.controlKeyForTurnRight) {
        thiscar.keyHeld_TurnRight = setTo;
    }
}