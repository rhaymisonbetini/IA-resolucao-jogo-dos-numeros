'use strict'

class Adjacents {

    surroundings(matrix, y, x) {
        return {
            up: this.getCell(matrix, y - 1, x),
            right: this.getCell(matrix, y, x + 1),
            down: this.getCell(matrix, y + 1, x),
            left: this.getCell(matrix, y, x - 1),
        }
    }

    getCell(matrix, y, x) {
        var NO_VALUE = null;
        var value, hasValue;

        try {
            hasValue = matrix[y][x] !== undefined;
            value = hasValue ? matrix[y][x] : NO_VALUE;
        } catch (e) {
            value = NO_VALUE;
        }

        return value;
    }

}

module.exports = Adjacents;