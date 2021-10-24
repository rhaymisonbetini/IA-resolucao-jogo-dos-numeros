'use strict'
const Matrix = require('./Matrix.js')

class Tom {

    constructor() {
        this.matrix = new Matrix()
    }

    setNewMatrix(matrix) {
        this.matrix = matrix;
    }

    moveObject(keyToMove) {
        let index = this.findIndex(keyToMove);
        let nullPointer = this.findNullPointer();

        this.matrix['matrix'][nullPointer.eixoY][nullPointer.eixoX] = keyToMove;
        this.matrix['matrix'][index.eixoY][index.eixoX] = null;

        console.log(this.matrix)

    }

    findNullPointer() {
        let eixoX;
        let eixoY;
        for (let i = 0; i < 3; i++) {
            let x = this.matrix['matrix'][i];
            let nullPointer = x.indexOf(null)
            if (nullPointer && nullPointer !== -1) {
                eixoX = nullPointer;
                eixoY = i;
            }
        }
        let matrix = this.matrix;
        return { eixoX, eixoY, matrix };
    }

    findIndex(element) {
        let eixoX;
        let eixoY;
        for (let i = 0; i < 3; i++) {
            let x = this.matrix['matrix'][i];
            let elementor = x.indexOf(element)
            if (elementor !== -1) {
                eixoX = elementor;
                eixoY = i;
            }
        }
        return { eixoX, eixoY };
    }

}

module.exports = Tom;