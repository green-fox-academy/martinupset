import {Queue} from './01_queue'
import {Sta} from './01_stack'
import {nodestack} from './03_stack'


class que implements Queue{
    private stack1 : Sta= new Sta()
    private stack2 :nodestack= new nodestack()
    private len = 0

    empty() : boolean{
        return this.len === 0
    }

    peek() : string{
        while(!this.stack1.empty){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.peek()
    }

    add(value : string) : void{
        this.stack1.push(value)
    }

    remove(): string{
        return this.stack2.pop()
    }
}