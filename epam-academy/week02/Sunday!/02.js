function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction(){
    let func1 = function(a,b){
        if (a === ''){
            return b
        }
        else {
            return (`${a} ${b}`)
        }
    }

    let func2 = (a,b) => {
        if (a === ''){
            return b
        }
        else {
            return (`${a} ${b}`)
        }
    }

    multiPurposeFunction(func1)
    multiPurposeFunction(func2)
}

frameFunction();