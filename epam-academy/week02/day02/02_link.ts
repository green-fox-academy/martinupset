class nod {
    data : string
    next : nod
    constructor(data : string){
        this.data = data
        this.next = null
    }
}

interface LinkedList {
    add(value: string, index?: number): void;
    get(index: number): string;
    removeItem(value: string): void;
    remove(index: number): string;
    size(): number;
  }

class Link implements LinkedList{
    head : nod
    len : number
    currNode : nod

    constructor(){
        this.len = 0
        this.head = new nod('head')
        this.currNode = this.head
    }
    add(value : string, index? : number) : void{
    //empty linklist
        if(this.head.data == 'head'){
            this.head.next = new nod(value)
            this.currNode = this.head.next
        }

        else if(index == undefined || index >= this.len || index < 0){
            let temp = new nod(value)
            this.currNode.next = temp
            this.currNode = temp
        }

        else{
            let current = this.currNode
            for(let i = 0; i < index; i++){
                current = current.next
            }

        let temp = current.next
        current.next = new nod(value)
        current.next.next = temp
        }


        this.len ++ 

    }

    get(index : number) : string{
        let pointer = this.currNode
        for(let i = 0; i <= index; i++){
            pointer = this.currNode.next
        }
        return pointer.data
    }

    removeItem(value : string) : void{
        let current = this.currNode
        for(let i = 0; i < this.len-1; i++){
            if(current.next.data === value){
            current.next = current.next.next
            }
            current = current.next
        }
        this.len--
    }

    remove(index : number) : string{
        let current = this.currNode

        for(let i = 0; i < index; i++){
            current = current.next
        }

        current.next = current.next.next
        this.len--
        return 'done'
    }

    size() : number{
        return this.len
    }


}

export {nod}