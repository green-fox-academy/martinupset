class Garden{
    constructor(width, length){
        this.width = width
        this.length = length
    }

    area(){
        return this.width * this.length
    }

    circumference(){
        return this.width*2 + this.length*2
    }

    efficiency(){
        return this.area()/this.circumference()
    }
}

obj = new Garden(1,2)
console.log(obj.efficiency())