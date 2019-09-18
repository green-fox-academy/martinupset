'use strict';



const mapWith = (array, callback) => {
   
  let output = [];

  for(let index = 0; index < array.length; index++){
      
      output.push(callback(array[index]))
  }



  // The mapWith() function should iterate over the given array and call the callback function on every element.

  // It stores the callback return values in the output.

  // The mapWith() should return with the output array.



  return output;

}



const addOne = (number) => {

  return number + 1;

}



// Exercise 1:



console.log(mapWith([1, 2, 3], addOne));

//expected result: [2, 3, 4]



// Exercise 2:



// Create a callback function which removes every second character from a string



const words = ['map', 'reduce', 'filter'];


const removeSecondLetter = (x) => {

  return Array.from(x).filter((p,q)=>{return(q%2 != 1)}).join('')

}

console.log(mapWith(words, removeSecondLetter));

// expected result: ['mp','rdc', 'fle']