let map = {
    "Eggs":200,
    "Milk":200,
    "Fish":400,
    "Apples":150,
    "Bread":50,
    "Chicken":500
}

console.log(map["Fish"])

let name = 0
let sum = 0
let avg = 0
let length = Object.keys(map).length
let below = 0

for(index in map){
    let max = 0
    if(map[index]>max){
        max = map[index]
        name = index
    } 
}

console.log(name)

for(index in map){
    sum += map[index]
}

avg = sum/length
console.log(avg)

for(index in map){
    if(map[index] <= 300){
        below++
    }
}
console.log(below)

let arr = Object.values(map)
let add = arr.map(function(item){
    item = item + 125
    return item
})

for(index in add){
    for(i in arr){
        if(arr[i] == add[index]){
            console.log("we can")
        }
    }
}
console.log(add)
