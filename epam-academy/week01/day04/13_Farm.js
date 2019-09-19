const Ani = require('./03_animal')

class Farm{
    constructor(){
        this.arr = [
            new Ani(40,50),
            new Ani(70,80),
            new Ani(20,20)
        ]
        this.slots = 8
    }

    breed(){
        if(this.slots > 0){
            this.arr.push(new Ani(Math.floor(Math.random() * 100 + 1),Math.floor(Math.random() * 100 + 1)))
        }
    }

    slaughter(){
        let a = this.arr.map(
            animal => animal.hunger
        )
        this.arr.splice(a.indexOf(Math.min(...a)),1)
    }

}

let obj = new Farm()
console.log(obj.arr)
obj.breed()
console.log(obj.arr)
obj.slaughter()
console.log(obj.arr)