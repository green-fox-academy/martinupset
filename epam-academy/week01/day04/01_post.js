class PostIt{
    constructor(backgroundColor = 'undefined', text = 'undefined', textColor = 'undefined'){
        this.backgroundColor = backgroundColor
        this.text = text
        this.textColor = textColor
    }
}

let orange = new PostIt('orange', 'Idea 1', 'blue')
let pink = new PostIt('pink', 'Awesome', 'black')
let yellow = new PostIt('yellow', 'Superb', 'green')

console.log(orange);
console.log(pink);
console.log(yellow)
