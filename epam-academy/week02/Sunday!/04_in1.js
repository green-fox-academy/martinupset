let Garden = require('./03_prototype.js')

function Playground(width, length){
    Garden.call(this, width, length)
    this.toys = []
}

Playground.prototype = Object.create(Garden.prototype)

Playground.prototype.constructor = Playground

Playground.prototype.add = function(toy){
    this.toys.push(toy)
}

let obj = new Playground(2,2)

obj.effciency()

console.log(obj.toys)
console.log(obj.effciency())