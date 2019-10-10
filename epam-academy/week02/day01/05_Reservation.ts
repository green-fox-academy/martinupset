interface Reservationy{
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation implements Reservationy{
    getDowBooking():string{
        let  i:number = Math.floor(Math.random() * 7)
        let arr:string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        return arr[i]
    }

    getCodeBooking():string{
        let arr2 = []
        for(let i=65;i<=90;i++){
            arr2.push(String.fromCharCode(i));
            }

        for(let j=97;j<=122;j++){
            arr2.push(String.fromCharCode(j));
            }

        for(let k=0;k<=9;k++){
            arr2.push(k);
            }
        
        let arr3 = []
        for(let m=0; m< 7; m++){
        let index = Math.floor(Math.random()*arr2.length);
        arr3.push(arr2[index])
        }
        return `Bookoing# ${arr3.join("")} for `
    }
}

let obj = new Reservation()
let arr4 = []
for (let p = 0; p < 6; p++){
    arr4.push(obj.getCodeBooking() + obj.getDowBooking())
}
console.log(arr4)
