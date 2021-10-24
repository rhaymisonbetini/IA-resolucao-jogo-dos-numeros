const Tom = require('./Tom.js')
const Matrix = require('./Matrix.js')
const Adjacents = require('./Adjacents.js')
const Distance = require('./Distance.js')

let tom = new Tom();
let adjacents = new Adjacents();
var mtx = new Matrix();
let distance = new Distance();
let matrixex = mtx.getMatrixCopy();
mtx.setLastState([...matrixex])
let verificator = 0;

do {
    let { eixoX, eixoY } = tom.findNullPointer(mtx.getMatrixCopy());
    let adjacentes = adjacents.surroundings(mtx.getMatrixCopy(), eixoY, eixoX);

    let objectToMove = distance.calculateCoust(adjacentes.left, adjacentes.right, adjacentes.up, adjacentes.down, mtx.getMatrixCopy(), mtx.getLastState());

    mtx.setLastState(mtx.getMatrixCopy())
    
    let newMatrix = tom.moveObject(objectToMove, mtx.getMatrixCopy());

    mtx.setMatrix(newMatrix);
    
    tom.verifiIfGameIsOver(mtx.getMatrixCopy());
    
    verificator++;
} while (verificator < 10)



