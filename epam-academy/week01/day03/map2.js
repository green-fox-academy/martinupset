let map = {"978-1-60309-452-8":"A Letter to Jo",
            "978-1-60309-459-7":"Lupus",
            "978-1-60309-444-3":"Red Panda and Moon Bear",
            "978-1-60309-461-0":"The Lab"}

for(index in map){
    console.log(map[index] + `(ISBN: ${index})`)
}

delete map["978-1-60309-444-3"]

for(index in map){
    if(map[index] == "The Lab"){
        delete map[index]
    }
}

console.log(map)

map['978-1-60309-450-4'] = "They Called Us Enemy"

map["978-1-60309-453-5"] = "Why Did We Trust Him?"

console.log(map.hasOwnProperty('478-0-61159-424-8'))

console.log(map["978-1-60309-453-5"])

