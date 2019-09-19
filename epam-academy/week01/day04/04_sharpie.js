class Sharpie{
    constructor(color,width,inkAmount = 100){
        this.color = color
        this.width = width
        this.inkAmount = inkAmount
    }

    use(){
        this.inkAmount--
    }
}

let obj1 = new Sharpie('blue', 254.5)

obj1.use()

console.log(obj1)

module.exports = Sharpie