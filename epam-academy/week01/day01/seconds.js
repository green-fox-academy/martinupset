'use strict';



const currentHours = 14;

const currentMinutes = 34;

const currentSeconds = 42;

let seconds = 60 - currentSeconds;

let minutes = 59 - currentMinutes;

let hour = 23 - currentHours

console.log(hour*60*60 + minutes*60 +seconds)

// Write a program that prints the remaining seconds (as an integer) from a

// day if the current time is represented by these variables