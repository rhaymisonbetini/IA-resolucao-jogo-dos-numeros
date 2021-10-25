'use strict';
var fs = require('fs');

class FileSystem {
    async createLastMatrix(lastMatrix) {

        let file = await this.getLastMatric();
        file.push(lastMatrix);
        fs.writeFileSync(`lastMatrix.txt`, JSON.stringify(file).trim());
        return;
    }

    async getLastMatric() {
        let lastMatrix = fs.readFileSync(`lastMatrix.txt`, { encoding: 'utf8' });
        return lastMatrix ? JSON.parse(lastMatrix.toString().trim()) : [];
    }
}

module.exports = FileSystem;