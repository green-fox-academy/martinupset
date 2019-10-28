const PORT = 3000
const express = require('express')
const app = express()

app.use(express.json())

const sum = array =>{
  return array.reduce((value,item)=>item + value)
}

const multiply = array =>{
  return array.reduce((value,item) => value*item,1)
}

const double = array =>{
  return array.map(number = number*2)
}

app.post('/arrays', (req,res)=>{
  const {body} = req
  const {what, numbers} = body
  if(what !== 0){
    switch (what){
      case 'sum':
        res.json({result: sum(numbers)})
      case 'multiply':
        res.json({result: multiply(numbers)})
      case 'double':
        res.json({result:double(numbers)})
      default:
        res.json({result:numbers})
    }
  }
  res.json({
    error: 'please provide what to do with the numbers'
  })
})

app.listen(PORT,() => {
  console.log(`Listening ${PORT}`)
})