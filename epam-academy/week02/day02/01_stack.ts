interface Stack {
  //先进后出
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}


class Sta implements Stack{
  stack : string[]
  constructor(){
    this.stack = []
  }

  empty(){
    if(this.stack.length == 0){
      return true
    }
    else{
      return false
    }
  }

  peek(){
    return (`${this.stack[this.stack.length-1]}`)
  }

  push(pa : string){

    this.stack.push(pa)
  }

  pop(){
    return (`${this.stack.pop()}`)
  }

}

export {Stack, Sta}