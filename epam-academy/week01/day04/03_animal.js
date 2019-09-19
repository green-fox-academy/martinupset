class Animal{
    constructor(hunger = 50,thirst = 50){
        this.hunger = hunger
        this.thirst = thirst
    }
    eat(){
        return this.hunger--
    }

    drink(){
        this.thirst--
    }

    play(){
        this.thirst++
        this.hunger++
    }
}

// obj1 = new Animal
// obj1.drink()
// obj1.drink()
// console.log(obj1.thirst)

module.exports = Animal