let date = new Date()
let li1 = document.querySelector('li')
let li2 = document.querySelectorAll('li')[1]
let btn = document.querySelector('button')

li1.textContent += `${date}`

// const calculate = ()=>{
//     let time = new Date()
//     let elapsed = ((time - date)/1000).toFixed(2)
//     li2.textContent += `${elapsed}` + 'seconds' 
// }

//  btn.addEventListener('click', calculate)


//  const solu2 = (button) => new Promise((resolve,reject) => {
//      button.onclick = () => {
//         let time = new Date()
//         let elapsed = ((time - date)/1000).toFixed(2)
//          resolve(elapsed)
//         }
        
//  })
 

//  solu2(btn).then(data => {li2.textContent += `${data}` + 'second'})


const solu3 = async (button) => {
    let res = await new Promise((resolve,reject) => {
        button.addEventListener('click', ()=>{
            let time =new Date()
            let elapsed = ((time - date)/1000).toFixed(2)
            resolve(elapsed)
        })
    })
    li2.textContent += `${res}` + 'second'
}
solu3(btn)