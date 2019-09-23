class Person{
    name : string;
    age: number;
    skills: string[];

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
        this.skills = [];
    }

    addSkill(input : string): void{
        this.skills.push(input);
    }
}

