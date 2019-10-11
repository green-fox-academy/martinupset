let url ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+by+Apollo+11&api-key=no2jGUrXl86WoHEA9AbjFmV9KwP8xaLv"

let container = document.querySelector('.container')
// let ul = document.createElement('ul')
// container.appendChild(ul)

fetch(url)
.then(reponse => reponse.json())
.then(data => {
    let arr = data.response.docs
    for (i of arr)
    {
        let ul = document.createElement('ul')
        let li1 = document.createElement('a')
        li1.textContent = 'headline:' + i.headline.main
        li1.setAttribute('href', i.web_url)
        ul.appendChild(li1)

        let li2 = document.createElement('li')
        li2.textContent = 'snippet :' + i.snippet
        ul.appendChild(li2)

        let li3 = document.createElement('li')
        li3.textContent = 'Publication date:' + i.pub_date
        ul.appendChild(li3)
        container.appendChild(ul)
    }
})