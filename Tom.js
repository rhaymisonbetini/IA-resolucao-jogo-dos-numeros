'use strict'

class Tom {

    constructor() {
    }

    moveObject(keyToMove, matrix) {
        let nullPointer = this.findNullPointer(matrix);
        let index = this.findIndex(keyToMove, matrix);
        matrix[nullPointer.eixoY][nullPointer.eixoX] = keyToMove;
        matrix[index.eixoY][index.eixoX] = null;
        return matrix;
    }

    findNullPointer(matrix) {

        let eixoX;
        let eixoY;
        for (let i = 0; i < 3; i++) {
            let x = matrix[i];
            let nullPointer = x.indexOf(null)
            if (nullPointer !== -1) {
                eixoX = nullPointer;
                eixoY = i;
            } 1
        }
        return { eixoX, eixoY };
    }

    findIndex(element, matrix) {
        let eixoX;
        let eixoY;
        for (let i = 0; i < 3; i++) {
            let x = matrix[i];
            let elementor = x.indexOf(element)
            if (elementor !== -1) {
                eixoX = elementor;
                eixoY = i;
            }
        }
        return { eixoX, eixoY };
    }

    verifiIfGameIsOver(matrix) {
        return JSON.stringify(matrix[0]) == JSON.stringify([1, 2, 3])
    }

}

module.exports = Tom;