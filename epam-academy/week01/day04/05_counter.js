class Counter{
    constructor(inte = 0){
        this.inte = inte
    }

    add(num = 1){
        this.inte = this.inte + num
    }

    get(){
       return console.log(`the num is: ${this.inte}`)
    }

    reset(){
        this.inte = 0
    }
}

obj1 = new Counter(2)
obj1.add(5)
obj1.get()