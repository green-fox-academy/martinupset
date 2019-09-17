'use strict';
function printer(){
    if(arguments){
        for(let i = 0; i <= arguments.length; i++){
            console.log(arguments[i])
        }
    }

}

printer(6,5,44,15)


// - Create a function called `printer`

//   which logs to the console the input parameters

//   (can have multiple number of arguments)