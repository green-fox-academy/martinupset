'use strict'
abstract class Instrument {
    protected name : string
    constructor(name: string) {
        this.name = name
    }

    play() : string{
        return `This instrument name: ${this.name}`
    }
}

abstract class StringedInstrument extends Instrument{
    numberOfString : number
    constructor(name : string , numberOfString : number) {
        super(name)
        this.numberOfString = numberOfString
    }
    num(): number{
        return this.numberOfString
    }

    play():string{
        console.log(`${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.sound()}`)
        return 'good'
    }

    abstract sound() : string


}

export default StringedInstrument

