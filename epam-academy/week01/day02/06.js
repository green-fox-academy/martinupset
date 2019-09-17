'use strict';



const lineCount = 4;

for(let i = 1; i <= lineCount; i++){
    let tri = ""
    for(let j = 0; j < i; j++){
        tri += "*"
    }
    console.log(tri)
}

// Write a program that draws a

// triangle like this:

//

// *

// **

// ***

// ****

//

// The triangle should have as many lines as lineCount is