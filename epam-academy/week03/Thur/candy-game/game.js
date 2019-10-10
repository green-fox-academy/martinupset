// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let lollipopemj = '🍭'
let candiescount = 10.000
let lolcount = 3
let up = 1


let candies = document.querySelector('.candies')
let lollipop = document.querySelector('.lollypops')
let speed = document.querySelector('.speed')

let candiesbtn = document.querySelector('.create-candies')
let buybtn = document.querySelector('.buy-lollypops')
let rainbtn = document.querySelector('.candy-machine')

candies.textContent = candiescount

const createCandies = () =>{
    candiescount ++
    candies.textContent = candiescount
}

candiesbtn.addEventListener('click', createCandies)

const createlol = () => {
    lollipop.textContent += lollipopemj
    lolcount++
}

buybtn.addEventListener('click', createlol)

const generatecandy = () =>{
    let rate = Math.floor(lolcount/10) * up
    candiescount += rate
    candies.textContent = candiescount
    speed.textContent = rate
}

window.setInterval(generatecandy, 1000)

const goup = () => {
    up = 10
}

rainbtn.addEventListener('click', goup)