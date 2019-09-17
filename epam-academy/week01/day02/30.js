'use strict';
let aj = [3,4,5,6,7]

function rebuild(p){
    let temp = []
    for (let i = p.length - 1; i >= 0; i--) {
        temp.push(p[i])
    }
    console.log(temp)


}

rebuild(aj)


// - Create a variable named `aj`

//   with the following content: `[3, 4, 5, 6, 7]`

// - Reverse the order of the elements in `aj`

// 		- do it with the built in method

//		- do it with creating a new temp array and a loop

// - Print the elements of the reversed `aj`