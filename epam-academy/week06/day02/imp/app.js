require('dotenv').config
const mysql = require('mysql')
const{
  readFile
} = require('fs')

const connect = mysql.createConnection({
  host: process.env.mysql_host,
  user: process.env.mysql_user_name,
  password: process.env.mysql_password,
  database: process.env.mysql_database,
})

const createQuery = 'create table if not exists user(' +
  'id int primary key auto_increment,' +
  'prefix varchar(20),' +
  'first_name varchar(20),' +
  'last_name varchar(20),' +
  'address text,' +
  'height float,' +
  'bitcoin_address text,' +
  'color_preference varchar(7));'

const insertionQuery = 'inser into user values(?,?,?,?,?,?,?,?,?);'

const promisedQuery = (sqlString, queryInput = '')=>{
  new Promise((resolve, reject) => {
    connect.query(sqlString,queryInput,(error,result)=>{
      if(error){
        reject(error)
      }
      resolve(result)
    })
  })
}

const run = async()=>{
  try{
     promisedQuery(createQuery)
    console.log('user table created')
  }catch(error){
    console.log(error)
  }
}

run()

connect.end()

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
