'use strict';

let abc = ['Arthur', 'Boe', 'Chloe']

let swp = abc[0]

abc[0] = abc[2]

abc[2] = swp

console.log(abc)


// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`

// - Swap the first and the third element of `abc`