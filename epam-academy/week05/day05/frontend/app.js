const express = require('express')
const app = express()
const PORT = 8080
const path = require('path')

app.use(express.static('assets'))
app.use(express.json())

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/doubling',(req,res)=>{
  let input = req.query.input
  if(input){
    res.json({
      received: input,
      result: input*2
    })
  }else{
    res.send({
      error: 'please provide an input'
    })
  }
})

app.get('/greeter', (req,res)=>{
  let {name, title} = req.query

  if(name !== undefined && title !== undefined){
    res.json({'welcome_message': `Oh, hi there ${name}, my dear ${title}`})
  }

  else if(title == undefined){
    res.json({'error': 'please provide a title'})
  }

  else{
    res.json({'error': 'please provide a name'})
  }
})

app.get('/appenda/:appendable', (req,res)=>{
  let appendable = req.params.appendable
  if(appendable){
    res.json({
      appended: appendable + 'a'
    })
  }
  else{
    res.status(404).send('Not found')
  }
})


app.post('/dountil/:action',(req,res)=>{
  let num = req.body.until
  let action = req.params.action
  if(num){
    let result = 0
    if (action === 'sum'){
      for(let i = 1; i<=num; i++){
        result += i
      }
    }
    else{
      for(let i=1; i<=num; i++){
        result *= i
      }
    }

    res.json({
      result: result
    })
  }
  else{
    res.json({error: 'please provide a number'})
  }
})

app.listen((PORT), ()=>{
  console.log(`Running in ${PORT}`)
})