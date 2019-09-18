let map = {
    "Eggs":200,
    "Milk":200,
    "Fish":400,
    "Apples":150,
    "Bread":50,
    "Chicken":550
}

for(index in map){
    if (map[index] <201){
        console.log(index)
    }
}

for(index in map){
    if (map[index] >= 150){
        console.log(index + ": " + map[index])
    }
}