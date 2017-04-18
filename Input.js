/**
 * Created by Furvent on 18/04/2017.
 */
var keyPressed, keyReleased;
const KEY_UP_Z = 90, KEY_LEFT_Q = 81, KEY_DOWN_S = 83, KEY_RIGHT_D = 68;
var keyHeld_Gas = false; var keyHeld_Reverse = false; var keyHeld_TurnLeft = false; var keyHeld_TurnRight = false;

// Flag
var isPause = false;

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    canvas.addEventListener('click', function(){
        isPause = !isPause;
    });
}

function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, true);
    evt.preventDefault(); // Empêche la page du navigateur de réagir aux input (éviter le scrolling par exemple).
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, false);
}
function setKeyHoldState(thisKey, setTo) {
    if (thisKey === KEY_UP_Z) {
        keyHeld_Gas = setTo;
    }
    if (thisKey === KEY_DOWN_S) {
        keyHeld_Reverse = setTo;
    }
    if (thisKey === KEY_LEFT_Q) {
        keyHeld_TurnLeft = setTo;
    }
    if (thisKey === KEY_RIGHT_D) {
        keyHeld_TurnRight = setTo;
    }
}