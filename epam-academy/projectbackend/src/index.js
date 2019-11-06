require('dotenv').config()

const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()
app.use(cors())

app.get('/api/post', async(req,res) =>{
  const content = await db.getProducts(req.query.category)
  //这里不用调用json(),这是因为sned()本身自己调用了json()
  res.send({
    content
  })
})

app.get('/api/categories',async(req,res) =>{
  const categories = (await db.getCategories()).map(c=>c.category)
  res.send({
    categories
  })
})

app.listen(process.env.PORT, () => {
  console.log('server started at ' + process.env.PORT)
})