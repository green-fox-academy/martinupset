function Garden(width,length){
    this.width = width
    this.length = length 
}

Garden.prototype.area = function(){
    return this.width * this.length
}

Garden.prototype.circumference = function(){
    return this.width*2 + this.length*2
}

Garden.prototype.effciency = function(){
    return this.area()/this.circumference()
}

let obj = new Garden(2,4)
// console.log(obj.prototype.effciency())
console.log(obj.effciency())

module.exports = Garden