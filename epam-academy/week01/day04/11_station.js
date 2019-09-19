class station{
    constructor(gasamount){
        this.gasamount = gasamount
    }

    refill(car){
        this.gasamount = this.gasamount - car.capacity
        car.gasamount = car.capacity
    }

}

class car{
    constructor(gasamount=0 ,capacity = 100){
        this.capacity = capacity
        this.gasamount = gasamount
    }

}

obs = new station
obc = new car

obs.refill(obc)

console.log(obc)