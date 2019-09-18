const doSomething = function(callback){
    callback('here')
    callback('call u back')
}

function callback(input){
    console.log(input)
}

doSomething(callback)

const timer = () => {
    setInterval(() =>{
        console.log("hello")
    },1000)
}