'use strict';

console.log("apple")
const time = (a,b) => setTimeout(() => {
  
    console.log(a);
  
    }, b);

time('pear', 1000)
time('melon', 3000)
time('grapes', 5000)



// Write a program that prints the following fruits:

// apple -> immediately

// pear -> after 1 seconds

// melon -> after 3 seconds

// grapes -> after 5 seconds