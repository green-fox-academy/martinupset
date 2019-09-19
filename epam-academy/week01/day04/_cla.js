class Person{

    static planColor = 'blue'
    

    constructor(name = 'unknow', age = -12){
        this.name = name
        this.age = age
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    greet(person){
        console.log(`${this.name} says 'hello my friend,dear ${person.name}'`)
    }
}

let adam = new Person('Adam', 33);
console.log(adam);
let mate = new Person('Mate', 28);
console.log(mate);
mate.greet(adam)


//do not use arrow function in class
//arrow function is alway used in callback