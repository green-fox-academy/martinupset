abstract class Animal {
    name : string
    age : number
    gender : string
    constructor(name: string, age?: number , gender?: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    abstract breed() : string

    getName() : string{
        return `${this.name}`
    }

    eat() : string{
        return 'i am eating'
    }
}

        export { Animal }