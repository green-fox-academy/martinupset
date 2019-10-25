const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  if (req.query == '') {
    res.render('home', {
      content: 'Guest',
    })
  }

  else
  {res.render('home', {
    content: req.query.name
  })}
  
})


app.get('/users/:id', (req, res) =>{
  res.render('home', {
    content: req.params.id
  })
  console.log(req.params)
})

app.get('/user', (req,res) => {
  res.render('home', {
    content: req.query.name
  })
})

app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`)
})