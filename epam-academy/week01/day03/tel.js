let map = {"William A. Lathan":"405-709-1865",
            "John K. Miller":"402-247-8568",
            "Hortensia E. Foster":"606-481-6467",
            "Amanda D. Newland":"319-243-5613",
            "Brooke P. Askew":"307-687-2982"}

console.log(map["John K. Miller"])
for(index in map){
    if(map[index] == "307-687-2982"){
        console.log(index)
    }
}
console.log(map.hasOwnProperty("Chris E. Myers"))
