require('dotenv').config()

const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/post', async(req,res) =>{
  const content = await db.getProducts(req.query.category)
  //这里不用调用json(),这是因为sned()本身自己调用了json()
  res.send({
    content
  })
})

app.post('/api/post', async(req,res) => {
  await db.insertfn(req.body)
  const {username, content} = req.body
  const data = {
    username: username,
    content: content
  }
  res.send(data)
})

app.delete('/api/post/:postId',async(req,res) =>{
  const data = (await db.delfn(req.params.postId))
  res.send(data)
})

app.listen(process.env.PORT, () => {
  console.log('server started at ' + process.env.PORT)
})