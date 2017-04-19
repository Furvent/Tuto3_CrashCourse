/**
 * Created by Furvent on 18/04/2017.
 */
const GROUNDSPEED_DECAY_MULT = 0.97, DRIVE_POWER = 0.1, REVERSE_POWER = 0.05, TURN_RATE = 0.03,
      MIN_TURN_SPEED = 0.2;
var carIndex = 0;

function carClass()
{
    this.carX = 0, this.carY = 0;
    this.carSpeed = 0, this.carAng = 0;
    this.keyHeld_Gas = false, this.keyHeld_Reverse = false,
    this.keyHeld_TurnLeft = false, this.keyHeld_TurnRight = false;
    
    this.setupControls = function (forwardKey, backKey, leftKey, rightKey) {
        this.controlKeyForGas = forwardKey;
        this.controlKeyForReverse = backKey;
        this.controlKeyForTurnLeft = leftKey;
        this.controlKeyForTurnRight = rightKey;
    }

    this.carInit = function(whichGraphic) {
        this.myBitmap = whichGraphic;
        carIndex++;
        this.resetCar();
        console.log("Car number : " + carIndex + " was instantiate");
        console.log("Position is : " + this.carX + "/" + this.carY);
        console.log("----------");
    }
    
    this.resetCar = function () {
        for (var i = 0; i < trackGrid.length; i++) {
            if (trackGrid[i] === TRACK_PLAYER) {
                var tileRow = Math.floor(i / TRACK_COLS);
                var tileCol = i%TRACK_COLS;
                this.carX = tileCol * TRACK_W + 0.5 * TRACK_W;
                this.carY = tileRow * TRACK_H + 0.5 * TRACK_H;
                this.carAng = -0.5 * Math.PI; // Pointe vers le Nord.

                trackGrid[i] = TRACK_ROAD;

                document.getElementById('debugText').innerHTML =
                    "Car starting at tile : (" + tileCol + ", " + tileRow +") " +
                    "Pixel coordinate: (" + this.carX + ", " + this.carY + ")";
                console.log("Car number : " + carIndex + " was positionned");
                console.log("Position is : " + this.carX + "/" + this.carY);
                console.log("----------");

                break;
            }
        }
        this.carSpeed = 0;
    }

    this.moveCar = function () {
        if (this.keyHeld_Gas) {
            this.carSpeed += DRIVE_POWER;
        }
        if (this.keyHeld_Reverse) {
            this.carSpeed -= REVERSE_POWER;
        }
        if (Math.abs(this.carSpeed) >= MIN_TURN_SPEED) {
            if (this.keyHeld_TurnLeft) {
                this.carAng += -TURN_RATE * Math.PI;
            }
            if (this.keyHeld_TurnRight) {
                this.carAng += TURN_RATE * Math.PI;
            }
        }

        var nextX = this.carX + Math.cos(this.carAng) * this.carSpeed;
        var nextY = this.carY + Math.sin(this.carAng) * this.carSpeed;
        if (checkForTrackAtPixelCoord(nextX, nextY)) {
            this.carX = nextX;
            this.carY = nextY;
        } else {
            this.carSpeed = -1;
        }
        this.carSpeed *= GROUNDSPEED_DECAY_MULT;
    }

    this.drawCar = function () {
        drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.carX, this.carY, this.carAng);
    }

}
