'use strict'
import {Animal} from './02_zoo'

class Mammals extends Animal {
    constructor(name: string , age?: number , gender?: string) {
        super(name, age ,gender)  
    }

    breed(){
        return 'pushing miniature versions out'
    }
}

class Reptile extends Animal {
    constructor(name: string , age?: number , gender?: string) {
        super(name, age ,gender)  
    }

    breed(){
        return 'laying eggs'
    }
}

class Bird extends Animal {
    constructor(name: string , age?: number , gender?: string) {
        super(name, age ,gender)  
    }

    breed(){
        return 'laying eggs'
    }
}

export {Mammals , Reptile, Bird}

