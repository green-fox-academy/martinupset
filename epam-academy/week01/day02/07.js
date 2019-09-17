'use strict';



const lineCount = 4;

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

// Write a program that draws a

// pyramid like this:

//

//

//    *

//   ***

//  *****

// *******

//

// The pyramid should have as many lines as lineCount is