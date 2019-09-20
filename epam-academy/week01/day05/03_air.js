'use strict'
class Aircraft{
    constructor(type,max_ammo, base_damage,ammo_storage = 0){
        this.type = type
        this.max_ammo = max_ammo
        this.base_damage =base_damage
        this.ammo_storage = ammo_storage
    }

    fight(){
        let dmg = this.ammo_storage * this.base_damage
        this.ammo_storage = 0
        return dmg
    }

    refill(num){
        if (num > this.max_ammo){
            num = num - this.max_ammo
        }
        else{
            num = 0
            this.ammo_storage = num
        }
        return num
    }

    getType(){
        return (`${this.type}`)
    }

    getStatus(){
        return (`Type: ${this.type}, Ammo: ${this.ammo_storage}, Base Damage: ${this.base_damage}, All Damage: ${this.fight()}`)
    }

    isPriority(){
        if(this.type = 'F35'){
            return true
        }
        else{
            return false
        }
    }
}

class F16 extends Aircraft{
    constructor(){
        super('F16', 8, 30, 0)
    }
}

class F35 extends Aircraft{
    constructor(){
        super('F35', 12, 50, 0)
    }
}

class Carrier{
    constructor(ammo_store,health){
        this.ammo_store = ammo_store
        this.health = health
        this.air_store = []
        this.need = 0
    }

    add(){
        this.air_store.push(new Aircraft)
    }

    fill(){
        for(i of this.air_store){
            this.need += this.air_store[i].max_ammo - this.air_store[i].ammo_storage
            if(this.ammo_store > this.need){
                this.air_store[i].ammo_storage = this.air_store[i].max_ammo
                this.ammo_store = this.ammo_store - this.need
            }
            else{
                
                if(this.air_store[i].isPriority()){
                    this.ammo_store = this.air_store[i].refill(this.ammo_store)
                    if(this.ammo_store > 0){
                        console.log('for F16')
                    }
                }
            }
        }
    }

    called(){
        console.log('throw expection')
    }

    fight(carrier){
        let fire
        for(i of this.air_store){
            fire += this.air_store[i].ammo_storage * this.air_store[i].base_damage
        }

        carrier.health = carrier.health - fire
    }
}

