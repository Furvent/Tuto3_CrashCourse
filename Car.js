/**
 * Created by Furvent on 18/04/2017.
 */
var carX = 0, carY = 0;
var carSpeed;
var carAng = 0;
const GROUNDSPEED_DECAY_MULT = 0.97, DRIVE_POWER = 0.1, REVERSE_POWER = 0.05, TURN_RATE = 0.03,
    MIN_TURN_SPEED = 0.2;

function initCar() {
    resetCar();
}

function moveCar() {
    if (keyHeld_Gas) {
        carSpeed += DRIVE_POWER;
    }
    if (keyHeld_Reverse) {
        carSpeed -= REVERSE_POWER;
    }
    if (Math.abs(carSpeed) >= MIN_TURN_SPEED) {
        if (keyHeld_TurnLeft) {
            carAng += -TURN_RATE * Math.PI;
        }
        if (keyHeld_TurnRight) {
            carAng += TURN_RATE * Math.PI;
        }
    }

    var nextX = carX + Math.cos(carAng) * carSpeed;
    var nextY = carY + Math.sin(carAng) * carSpeed;
    if (checkForTrackAtPixelCoord(nextX, nextY)) {
        carX = nextX;
        carY = nextY;
    } else {
        carSpeed = -1;
    }
    carSpeed *= GROUNDSPEED_DECAY_MULT;
}

function resetCar() {
    for (var i = 0; i < trackGrid.length; i++) {
        if (trackGrid[i] === TRACK_PLAYER) {
            var tileRow = Math.floor(i / TRACK_COLS);
            var tileCol = i%TRACK_COLS;
            carX = tileCol * TRACK_W + 0.5 * TRACK_W;
            carY = tileRow * TRACK_H + 0.5 * TRACK_H;
            carAng = -0.5 * Math.PI; // Pointe vers le Nord.

            trackGrid[i] = TRACK_ROAD;

            document.getElementById('debugText').innerHTML =
                "Car starting at tile : (" + tileCol + ", " + tileRow +") " +
                "Pixel coordinate: (" + carX + ", " + carY + ")";
            break;
        }
    }
    carSpeed = 0;
}