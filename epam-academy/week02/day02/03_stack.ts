import {Stack} from './01_stack'
import {nod} from './02_link'

class nodestack implements Stack{
    head : nod
    len : number

    constructor(){
        this.head = new nod ('head')
        this.len = 0;
    }

    empty(): boolean{
        if(this.len == 0){
            return true
        }
        else{
            return false
        }

    }

    peek() : string{
        return this.head.data
    }

    push(value: string): void{
        if(this.len > 0){
            let temp = new nod(value)
            temp.next = this.head
            this.head = temp
        }
        else{
            this.head = new nod(value)
        }
        this.len++

    }

    pop(): string{
        let temp = this.head.data
        this.head = this.head.next
        this.len--
        return temp
    }
}

export {nodestack}