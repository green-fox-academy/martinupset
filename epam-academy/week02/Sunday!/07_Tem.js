function log(timestamp, username, action){
    return 'INFO -' + timestamp +'\n'+ username + ':' + action
}

function log1(timestamp, username, action){
    return `INFO- ${timestamp} \n ${username} : ${action}`
}

console.log(log(1,2,3))
console.log(log1(4,5,6))
