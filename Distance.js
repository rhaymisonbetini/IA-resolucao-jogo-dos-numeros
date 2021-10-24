'use stric'

const Tom = require('./Tom.js')
const MOVE = 'MOVE';
const DONTMOVE = 'DONTMOVE';

class Distance {

    constructor() {
    }

    setLastState(matrix) {
        lastMatrixState = matrix;
    }

    getLasState() {
        return lastMatrixState;
    }

    calculateCoust(left, right, up, down, matrix, lastState) {

        this.adjacents = new Tom()

        let distanceObjects = Object.create({ left: null, right: null, up: null, down: null })
        let objectsToMove = Object.create({ left: left, right: right, up: up, down: down })

        let leftDistance = left ? this.adjacents.findIndex(left, matrix) : null;
        let rightDistance = right ? this.adjacents.findIndex(right, matrix) : null;
        let upDistance = up ? this.adjacents.findIndex(up, matrix) : null;
        let dowtDistance = down ? this.adjacents.findIndex(down, matrix) : null;


        if (left) {
            let perfectPosition = this.perfectPosition(left);
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, leftDistance)
            if (isPassiveToMove == MOVE) {
                let euclidianDistance = this.distancia2d(leftDistance.eixoX, leftDistance.eixoY, perfectPosition[1], perfectPosition[0])
                distanceObjects.left = euclidianDistance;
            } else {
                distanceObjects.up = DONTMOVE
            }
        }

        if (right) {
            let perfectPosition = this.perfectPosition(right);
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, rightDistance)
            if (isPassiveToMove == MOVE) {
                let euclidianDistance = this.distancia2d(rightDistance.eixoX, rightDistance.eixoY, perfectPosition[1], perfectPosition[0])
                distanceObjects.right = euclidianDistance;
            } else {
                distanceObjects.up = DONTMOVE
            }
        }

        if (up) {
            let perfectPosition = this.perfectPosition(up);
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, upDistance)
            if (isPassiveToMove == MOVE) {
                let euclidianDistance = this.distancia2d(upDistance.eixoX, upDistance.eixoY, perfectPosition[1], perfectPosition[0])
                distanceObjects.up = euclidianDistance;
            } else {
                distanceObjects.up = DONTMOVE
            }

        }
        if (down) {
            let perfectPosition = this.perfectPosition(down);
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, dowtDistance)
            if (isPassiveToMove == MOVE) {
                let euclidianDistance = this.distancia2d(dowtDistance.eixoX, dowtDistance.eixoY, perfectPosition[1], perfectPosition[0])
                distanceObjects.down = euclidianDistance;
            } else {
                distanceObjects.up = DONTMOVE
            }
        }


        let distanceIfMoveObject = this.calculateDistanceIfMoveObjectToNullPointer(left, right, up, down, matrix)


        let heuristic = {
            up: distanceObjects.up !== DONTMOVE ? distanceObjects.up + distanceIfMoveObject.up : DONTMOVE,
            down: distanceObjects.down !== DONTMOVE ? distanceObjects.down + distanceIfMoveObject.down : DONTMOVE,
            right: distanceObjects.right !== DONTMOVE ? distanceObjects.right + distanceIfMoveObject.right : DONTMOVE,
            left: distanceObjects.left !== DONTMOVE ? distanceObjects.left + distanceIfMoveObject.left : DONTMOVE,
        }

        let values = Object.values(heuristic)
        values = values.filter(function (item) {
            return item !== DONTMOVE && item !== 0
        })

        let keyToMove;

        keyToMove = this.keyForValue(heuristic, Math.min(...values));

        return objectsToMove[keyToMove]

    }

    calculateDistanceIfMoveObjectToNullPointer(left, right, up, down, matrix) {

        let distanceObjects = Object.create({ left: null, right: null, up: null, down: null })

        let indexOfNullPointer = this.adjacents.findIndex(null, matrix);

        let leftDistance = left ? this.adjacents.findIndex(left, matrix) : null;
        let rightDistance = right ? this.adjacents.findIndex(right, matrix) : null;
        let upDistance = up ? this.adjacents.findIndex(up, matrix) : null;
        let dowtDistance = down ? this.adjacents.findIndex(down, matrix) : null;


        if (left) {
            let perfectPosition = this.perfectPosition(left);
            let euclidianDistance = this.distancia2d(indexOfNullPointer.eixoX, indexOfNullPointer.eixoY, perfectPosition[1], perfectPosition[0])
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, leftDistance)
            if (isPassiveToMove == MOVE) {
                if (euclidianDistance) {
                    distanceObjects.left = euclidianDistance;
                }
            }
        }

        if (right) {
            let perfectPosition = this.perfectPosition(right);
            let euclidianDistance = this.distancia2d(indexOfNullPointer.eixoX, indexOfNullPointer.eixoY, perfectPosition[1], perfectPosition[0])
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, rightDistance)
            if (isPassiveToMove == MOVE) {
                if (euclidianDistance) {
                    distanceObjects.right = euclidianDistance;
                }
            }
        }

        if (up) {
            let perfectPosition = this.perfectPosition(up);
            let euclidianDistance = this.distancia2d(indexOfNullPointer.eixoX, indexOfNullPointer.eixoY, perfectPosition[1], perfectPosition[0])
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, upDistance)
            if (isPassiveToMove == MOVE) {
                if (euclidianDistance) {
                    distanceObjects.up = euclidianDistance;
                }
            }
        }
        if (down) {
            let perfectPosition = this.perfectPosition(down);
            let euclidianDistance = this.distancia2d(indexOfNullPointer.eixoX, indexOfNullPointer.eixoY, perfectPosition[1], perfectPosition[0])
            let isPassiveToMove = this.verifyIfIsInCorrectPosition(perfectPosition, dowtDistance)
            if (isPassiveToMove == MOVE) {
                if (euclidianDistance) {
                    distanceObjects.down = euclidianDistance;
                }
            }
        }

        return distanceObjects;

    }


    distancia2d(x1, y1, x2, y2) {
        var a = x2 - x1;
        var b = y2 - y1;
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        return c;
    }


    verifyIfIsInCorrectPosition(perfectPosition, actualIndex) {
        if (perfectPosition[0] == actualIndex.eixoY && perfectPosition[1] == actualIndex.eixoX) {
            return DONTMOVE;
        } else {
            return MOVE;
        }
    }


    getLesValue() {

    }

    keyForValue(obj, val) {
        for (var chave in obj) {
            if (obj[chave] === val && obj.hasOwnProperty(chave)) {
                return chave;
            }
        }
    }


    perfectPosition(element) {
        switch (element) {
            case 1:
                return [0, 0]
            case 2:
                return [0, 1]
            case 3:
                return [0, 2]
            case 4:
                return [1, 0]
            case 5:
                return [1, 1]
            case 6:
                return [1, 2]
            case 7:
                return [2, 0]
            case 8:
                return [2, 1]

        }
    }
}

module.exports = Distance