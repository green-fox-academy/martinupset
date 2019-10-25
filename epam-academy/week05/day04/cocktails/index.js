const PORT = 3000
const express = require('express')
const app = express()

const{alcohoList, cocktails} = require('./data')

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

const myFilter = (type) =>{
  return cocktails.filter(cocktail => {
    return cocktail.contains.includes(type);
  })
}

app.get('/',(req,res)=>{
  res.render('home', {
    cocktailList: req.query.alcohol? myFilter(req.query.alcohol): cocktail,
    alcohoList
  })
})

app.listen(PORT)