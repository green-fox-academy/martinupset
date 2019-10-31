require('dotenv').config()
const express = require('express')
const mysql = require('mysql')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

const connect = mysql.createConnection({
  host: process.env.mysql_host,
  user: process.env.mysql_user_name,
  password: process.env.mysql_password,
  database: process.env.mysql_database,
})


// app.get('/api', (req,res)=>{
//   let sqlString = 'select book_name from book_mast'

//   connect.query(sqlString,(err,result)=>{
//     if(err){
//       console.log(err)
//       res.status(500).send('db err')
//       return
//     }
//     res.json(result)
//   })
// })

let promisedQuery = (sqlString) =>
  new Promise((resolve,reject)=>{
    connect.query(sqlString,(error,result) => {
      if(error){
        reject(error)
      }
      resolve(result)
    })
  })

  app.get('/api', async (req, res)=>{
    let sqlString = 'select book_name from book_mast'
    try{
      let data = await promisedQuery(sqlString)
      // res.json(data)
      res.send(data)
    }catch(err){
      res.status(500).send(error)
    }
  })

const detailQuery = 'SELECT book_name AS title, aut_name AS author, ' +
                    'cate_descrip AS category, pub_name AS publisher, book_price AS price ' +
                    'FROM ' + 
                    'book_mast ' +
                    'JOIN author ON book_mast.aut_id=author.aut_id ' +
                    'JOIN category ON book_mast.cate_id=category.cate_id ' + 
                    'JOIN publisher ON publisher.pub_id=book_mast.pub_id';


app.get('/books', (req,res)=>{
  let queryKeys = Object.keys(req.query)
  const queryValue = Object.values(req.query)
  const sqlString = detailQuery + applyFilters(queryKeys) + ';'

  let query = connect.query(sqlString,queryValue,(error, result)=>{
    if(error){
      console.log(error)
      res.status(500).send('db error')
      return
    }
    console.log(result)
    res.render('home',{result})
  })
    console.log(query.sql)
})

function applyFilters(filterKeys){
  let result = ''

  const convertFilter = {
    category: 'cate_descrip',
    publisher: 'pub_name'    
  }

  if(filterKeys.length > 0){
    result += 'where'
    for(let key of filterKeys){
      if(key === 'plt'){
        result += 'book_price< ? AND'
      }

      else if(key === 'pgt'){
        result += `book_price>? AND`
      }

      else{
        result += `${convertFilter[key]} = ? AND`
      }
    }
    result = result.substr(0,result.lastIndexOf('AND'))
  }

  return result
}


app.listen(PORT, ()=>{
  console.log(`listening ${PORT}`)
})