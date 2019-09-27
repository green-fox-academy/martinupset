let mineSweepingMap = function(r, c ,num){
    let map = []
    //1 wei array
    let row = function (r){
        for(let i = 0; i < r; i++){
            map[i] = new Array()//difference: cannot define the value inside
        }
    }

    let column = function(col){
        for (let i = 0; i < map.length; i++){
            for(let j = 0; j < col; j++){
                map[i][j] = 0
            }
        }
    }

    let blankMap = function(r, col){
        row (r)
        coolumn(col)
    }

    let writeInMine = function(num) {
        let randomLocation = function () {
            let x = Math.floor(Math.random() * r)
            let y = Math.floor(Math.random() * c)
            console.log(':' , x,y)
            if(map[x][y] !== 9){
                map[x][y] = 9
            }
            else {
                randomLocation()
            }
        }

        

    }
}

mineSweepingMap(9,9,9)