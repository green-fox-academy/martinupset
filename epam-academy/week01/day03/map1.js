let map = {}
let empty = {}
if (map = empty){
    console.log("this map is empty!")
}
else{
    console.log("this map is not empty")
}

map[97] = 'a'
map[98] = 'b'
map[99] = 'c'
map[65] = 'A'
map[66] = 'B'
map[67] = 'C'

console.log(Object.keys(map))

console.log(Object.values(map))

map[68] = 'D'

let length = Object.keys(map).length

console.log(length)

console.log(map[99])

delete map[97]

console.log(map)

console.log(map.hasOwnProperty('100'))

for (index in map){
    delete map[index]
}

console.log(map)