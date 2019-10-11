let btn = document.querySelector('button')
let input = document.querySelector('input')
let userinput
let url
let name = document.querySelector('ul')
let film = document.getElementById('film')

btn.addEventListener('click', ()=>{
    userinput = input.value
    url = `https://swapi.co/api/people/?search=${userinput}`
    fetch(url)
    .then(reponse => {if (reponse.status == 200){
        return reponse.json()
    }
    else{
        console.log('sry, the page not found')
    }
    })
    .then(data => data.results)
    .then(arr => { for (i of arr){
       let li = document.createElement('li')
       li.textContent = i.name
       name.appendChild(li)
       li.addEventListener('click',() => {
        let filmarr = i.films
            for (x of filmarr){
                fetch(x)
                .then(response => response.json())
                .then(data => {
                    let li2 = document.createElement('li')
                    li2.textContent = data.title
                    film.appendChild(li2)
                })
            }
       })
    }
    })
})

// const show = (par) => {
//     let filmarr = par.films
//     for (i of filmarr){
//         fetch(i)
//         .then(response => response.json())
//         .then(data => {
//             let li = document.createElement('li')
//             li.textContent = data.title
//             film.appendChild(li)
//         })
//     }
// }
