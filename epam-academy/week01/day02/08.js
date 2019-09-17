'use strict';



const lineCount = 7;

for(let i = 1; i <= lineCount; i++){
    let tri = ""
    for(let space = i; space < lineCount; space++){
        tri += " "
    }
    for(let star = 1; star <= 2*i-1; star++){
        tri += "*"
    }

    console.log(tri)
}
for(let i = lineCount; i >0; i--){
    let tri = ""
    for(let space = i; space < lineCount; space++){
        tri += " "
    }
    for(let star = 1; star <= 2*i-1; star++){
        tri += "*"
    }

    console.log(tri)
}





// Write a program that draws a

// diamond like this:

//

//

//    *

//   ***

//  *****

// *******

//  *****

//   ***

//    *

//

// The diamond should have as many lines as lineCount is