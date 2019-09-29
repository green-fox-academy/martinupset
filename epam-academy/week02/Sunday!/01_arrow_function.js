function multiPurposeFunction(action){
    if (action){
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}

function frameFunction(){
    // this function call shows an example,
    // but it is not using anonym functions
    multiPurposeFunction(exampleNonAnonymFunction);
    // write your code here

   let square = function(p){
        return p*p
   }


   let square1 = (q) =>{
       return q*q
   }

   multiPurposeFunction(square)

   multiPurposeFunction(square1)



}

frameFunction();
