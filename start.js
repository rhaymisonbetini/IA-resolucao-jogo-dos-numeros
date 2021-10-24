const Tom = require('./Tom.js')
const Adjacents = require('./Adjacents.js')
const Distance = require('./Distance.js')

let tom = new Tom();
let adjacents = new Adjacents();
let distance = new Distance();

let { eixoX, eixoY, matrix } = tom.findNullPointer();
let adjacentes = adjacents.surroundings(matrix['matrix'], eixoY, eixoX);

let objectToMove = distance.calculateCoust(adjacentes.left, adjacentes.right, adjacentes.up, adjacentes.down);
tom.moveObject(objectToMove)



