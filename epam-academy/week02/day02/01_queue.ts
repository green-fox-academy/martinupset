interface Queue {
    //先进先出
    empty(): boolean;
    peek(): string;
    add(value: string): void;
    remove(): string;
  }

class que implements Queue{
    queue : string[] 
    constructor(){
        this.queue = []
    }

    empty(){
        if(this.queue.length == 0){
            return true
        }
        else{
            return false
        }
    }

    peek(){
        return (`${this.queue[0]}`)
    }

    add(pa : string){
        this.queue.push(pa)
    }

    remove(){
        return (`${this.queue.shift}`)
        
    }
}

export {Queue}

