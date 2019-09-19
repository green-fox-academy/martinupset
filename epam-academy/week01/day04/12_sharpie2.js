'use strict'

const Sha = require('./04_sharpie')


class SharpieSet{

    constructor(){
        this.Sharpies = [
            new Sha('black', 5, 5),
            new Sha('red', 5, 0)
        ]
        }
   

      countUsable(){
          for(let i = 0; i < this.Sharpies.length; i++){
              if (this.Sharpies[i].inkAmount != 0){
                    console.log(`${this.Sharpies[i].color} is usable`)
              }
          }

        }

        removtrash(){
            for(let i = 0; i< this.Sharpies.length; i++){
                if(this.Sharpies[i].inkAmount == 0){
                    console.log(`remove ${this.Sharpies[i].color}`)
                    delete this.Sharpies[i]
                }
            }
        }

    
}

let obj = new SharpieSet
obj.countUsable()
obj.removtrash()

