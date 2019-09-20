'use strict'
class Flower{
    constructor(color,wateramo = 0){
        this.color = color
        this.wateramo = wateramo
        this.type = 'Flower'
    }

    check(){
        if(this.wateramo < 5){
            console.log(`${this.color} flower need water`)
        }
        else{
            console.log(`${this.color} flower dont need water`)
        }
    }

    absorb(num){
        this.wateramo = this.wateramo + num * 0.75
    }

}

class Trees{
    constructor(color,wateramo = 0){
        this.color = color
        this.wateramo = wateramo
        this.type = 'Trees'
    }

    check(){
        if(this.wateramo < 10){
            console.log(`${this.color} tree need water`)
        }
        else{
            console.log(`${this.color} tree dont need water`)
        }
    }

    absorb(num){
        this.wateramo = this.wateramo + num * 0.4
    }

}


class Garden {
    constructor(){
        this.list = []
        this.len = 0
    }

    water(num){
        console.log(`Watering with ${num}`)
        for (let i=0; i < this.list.length; i++){
            this.list[i].check()
            if (this.list[i].type == 'Flower' && this.list[i].wateramo < 5){
                this.len++
            }
            if(this.list[i].type == 'Flower' && this.list[i].wateramo < 10){
                this.len++
            }
        }
        let dig = num/this.len
        
        for (let i=0; i < this.list.length; i++){
            if (this.list[i].type == 'Flower' && this.list[i].wateramo < 5){
                this.list[i].absorb(dig)
            }
            if(this.list[i].type == 'Flower' && this.list[i].wateramo < 10){
                this.list[i].absorb(dig)
            }
            this.list[i].check()
        }
    }

    add(type, color, wateramo = 0){
        if(type == 'tree'){
            this.list.push(new Trees(color, wateramo))
        }
        else{
            this.list.push(new Flower(color,wateramo))
        }
    }

}

const main = () => {
    let mygarden = new Garden
    mygarden.add('flower', 'yellow')
    mygarden.add('flower', 'blue')
    mygarden.add('tree', 'purple')
    mygarden.add('tree', 'orange')
    mygarden.water(20)
    mygarden.water(70)
}

main()


