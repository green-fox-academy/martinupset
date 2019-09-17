'use strict';

let s = [1, 2, 3, 8, 5, 6]

let p = s.map(function(item){
    if (item == 8){
        item = 4
        }
        return item
    })

console.log(p)



// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`

// - Change the 8 to 4 with the `.map` method 

// - Print the fourth element as a test