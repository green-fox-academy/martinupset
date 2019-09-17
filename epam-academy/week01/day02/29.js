'use strict';
let i = 4
let _arr = []
for (let k = 0; k < i; k++) {
    _arr[k] = [0,0,0,0]
}
for (let p = 0; p < _arr.length; p++) {
    for (let q = 0; q < _arr[p].length; q++) {
       if(p + q == i - 1){
           _arr[p][q] = 1
       }
       
    }
    console.log(_arr[p]) 
}


// - Create (dynamically*) a two dimensional list

//   with the following matrix**. Use a loop!

//

//   0 0 0 1

//   0 0 1 0

//   0 1 0 0

//   1 0 0 0

//

// - Print this two dimensional list to the console

//

// * size should depend on a variable

// ** Relax, a matrix is just like an array