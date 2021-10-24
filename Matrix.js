'use strict'

class Matrix {
    constructor() {
        this.matrix = [
            [6, 7, 1],
            [3, null, 2],
            [8, 5, 4]
        ];

        this.lastState = []
    }

    getMatrix() {
        return this.matrix;
    }

    getMatrixCopy() {
        return [...this.matrix];
    }

    setMatrix(matrix) {
        console.log('nova matrix')
        console.log(matrix)
        this.matrix = matrix;
    }

    getLastState() {
        return this.lastState; F
    }

    setLastState(matrix) {
        this.lastState = matrix;
    }

}

module.exports = Matrix;