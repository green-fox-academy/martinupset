import {Animal} from './02_zoo'
interface Flyable{
    land() : string
    fly() : boolean
    takeOff() : string

}

abstract class Vehicle {
    color : string
    speed : number
    doors : number
    constructor(color : string, speed : number, doors : number) {
        this.color = color
        this.speed = speed
        this.doors = doors
    }
}

class Helicopter extends Vehicle implements Flyable{
    constructor(color : string, speed : number = 500, doors : number = 2) {
        super(color, speed, doors)
    }
    land(){
        return 'i am land'
    }

    fly(){
        return true
    }

    takeOff(){
        return ' i am takeoff'
    }
}

class bird extends Animal implements Flyable{
    constructor(name: string, age?: number , gender?: string) {
        super(name, age, gender)
    }
    land(){
        return 'i am bird'
    }
    fly(){
        return true
    }
    takeOff(){
        return 'i am angry bird'
    }

    breed(){
        return 'i am angry'
    }
}

const a = new bird('aaa')
const b = new Helicopter('bbb')

console.log(a.breed())
console.log(b.color)