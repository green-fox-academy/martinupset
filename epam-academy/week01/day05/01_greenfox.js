'use strict'
class Person{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    introduce(){
        return (`hi, i am ${this.name}, a ${this.age} years old ${this.gender}`)
    }
    getGoal(){
        console.log('my goal is: live for the moment!')
    }
}

let obj = new Person('Doe', 30, 'female')
console.log(obj.introduce())

class Student extends Person{
    constructor(name,age,gender,previous,skip = 0){
        super(name,age,gender)
        this.previous = previous
        this.skip = skip
    }
    getGoal(){
        console.log('Be a engineer')
    }
    introduce(){
        return super.introduce() + `from ${this.previous} and skip ${this.skip} days already`
    }
    skipDays(num){
        this.skip++
    }

}

let obj1 = new Student('Jane', 30, 'female', 'The School')
console.log(obj1.introduce())

class Mentor extends Person{
    constructor(name, age, gender,level){
        super(name,age,gender)
        this.level = level
    }

    getGoal(){
        console.log('educate developers')
    }

    introduce(){
        return (super.introduce() + `${this.level} mentor`)
    }

}

let obj2 = new Mentor('jan', 30, 'female', 'mediate')
console.log(obj2.introduce())

class Sponsor extends Person{
    constructor(name, age, gender,company,hiredstu){
        super(name,age,gender)
        this.company = company
        this.hiredstu = hiredstu
    }

    introduce(){
        return (super.introduce() + `who represents ${this.company} and hire ${this.hiredstu} so far`)
    }

    hire(){
       return this.hiredstu++
    }

    getGoal(){
        console.log('my goal is hired')
    }


}

let obj3 = new Sponsor('Ja', 30, 'female', 'google', 0)
console.log(obj3.introduce())
obj3.hire()
console.log(obj3.introduce())

class Cohort{
    constructor(name){
        this.name = name
        this.stu = []
        this.mentor = []
    }

    addStudents(stu){
        this.stu.push(stu)
    }

    addMentor(men){
        this.mentor.push(men)
    }

    info(){
        console.log(`the ${this.name} has ${this.stu.length} student and ${this.mentor.length} mentor`)
    }
}





const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
})

const awesome = new Cohort('AWESOME');
awesome.addStudents(student);
awesome.addStudents(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();