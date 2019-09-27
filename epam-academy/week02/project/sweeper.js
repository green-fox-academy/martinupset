class Createmap{
    constructor (row, num) {
        this.row = row
        this.num = num
        this.map = []
    }

    createrow(row) {
        for(let i = 0 ; i < row; i++)
        this.map[i] = new Array()
    }

    createcolumn(row){
        for (let i = 0; i < this.map.length; i++){
            for(let j = 0; j < row; j++){
                this.map[i][j] = 0
            }
        }
    }

    randomLocation() {
            let x = Math.floor(Math.random() * this.row)
            let y = Math.floor(Math.random() * this.row)
            if(this.map[x][y] !== 9){
                this.map[x][y] = 9
            }
            else {
                this.randomLocation()
            }
        }

    createmine(num){
        for(let i = 0; i < num; i++){
            this.randomLocation()
        }
    }//类中方法的参数为什么不能直接写类的构造函数内的属性

    plus(array, x, y){
        if(x >= 0 && x < this.row && y >= 0 && y < this.row)
            if(array[x][y] != 9){
                array[x][y] += 1
            }
    }

    writeHint(){
        for(let x = 0; x < this.map.length; x++) {
            for(let y = 0; y < this.map[0].length; y++){
                if(this.map[x][y] === 9){
                    for(let i = -1; i < 2; i++){
                        this.plus(this.map, x - 1, y + i)
                        this.plus(this.map, x + 1, y + i)
                    }

                    this.plus(this.map, x, y + 1)
                    this.plus(this.map, x, y - 1)
                }
            }
        }
    }







    main(){
        this.createrow(this.row)
        this.createcolumn(this.row)
        this.createmine(this.num)
        this.writeHint()
        console.log(this.map)
    }
}

obj = new Createmap(9,9)
obj.main()