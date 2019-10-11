let url = "http://api.giphy.com/v1/gifs/search?q=cute+funny&api_key=vZv0bUZu3S1bidOajsp7p7K8BJv8m4UH&limit=16"
fetch(url)
.then(reponse => reponse.json())
.then(data => {
    console.log(data.data)
    let ul = document.createElement('ul')
    let div = document.querySelector('div')
    div.appendChild(ul)
    data.data.forEach((element) => {
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.setAttribute('src',element['images'].fixed_height_still.url)
        img.addEventListener('click', () => {
            img.setAttribute('src',element['images'].fixed_width.url)
        })
        li.appendChild(img)
        ul.appendChild(li)
    })
})