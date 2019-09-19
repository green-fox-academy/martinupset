const blg = require('./02_BlogPost')

class Blog{
    constructor(){
        this.bo = []
    }

    add(au,ti,te,pu){
        this.bo.push(new blg(au,ti,te,pu))
    }

    del(index){
        delete this.bo[index]
    }

    update(index,bp){
        this.bo[index] = bp
    }
}