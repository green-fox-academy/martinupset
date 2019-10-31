require('dotenv').config
const mysql = require('mysql')
// const{
//   readFile
// } = require('fs')

const connect = mysql.createConnection({
  host: process.env.mysql_host,
  user: process.env.mysql_user_name,
  password: process.env.mysql_password,
  database: process.env.mysql_database,
})



const createQuery = 'CREATE TABLE IF NOT EXISTS aaa( \
  id INT PRIMARY KEY AUTO_INCREMENT, \
  prefix VARCHAR(20), \
  first_name VARCHAR(20), \
  last_name VARCHAR(20), \
  address TEXT, \
  height FLOAT, \
  bitcoin_address TEXT, \
  color_preference VARCHAR(7) \
  );';

  connect.query(createQuery)

// const insertionQuery = 'inser into user values(?,?,?,?,?,?,?,?,?);'

// const promisedQuery = (sqlString, queryInput = '')=>{
//   new Promise((resolve, reject) => {
//     connect.query(sqlString,queryInput,(error,result)=>{
//       if(error){
//         reject(error)
//       }
//       resolve(result)
//     })
//   })
// }

// const run = async()=>{
//   try{
//      promisedQuery(createQuery)
//     console.log('user table created')
//   }catch(error){
//     console.log(error)
//   }
// }

// run()

// connect.end()

// readFile('./a.csv', 'utf8', async(err,data) => {
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)

//   const row = data.split('\n')
//   for(let i = 1; i < row.length; i++){
//     let detail = row[i].split(',')
//     try{
//       await promisedQuery(insertionQuery, detail)
//     }catch(error){
//       console.log(error)
//     }
//   }

// })
