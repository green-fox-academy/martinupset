const mysql = require('mysql')
require('dotenv').config()
const connection = mysql.createConnection({
  host : process.env.DB_URL,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
})

connection.connect()

// //增
// var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
// var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
// connection.query(addSql,addSqlParams,function (err, result)

function query(sql, params=undefined){
  return new Promise((resolve,reject) =>{
    connection.query(sql, params, (error,results,fields)=>{
      if (error) return reject(error)
      resolve(results,fields)
    })
  })
}

function getProducts(category){
  let sql = 'select * from info;'
  if(category){
//connection.escape的用法：防止SQL注入
    sql += 'where category = '+ connection.escape(category)
  }
  return query(sql)
}

function insertfn(params){
  let sql = `insert into info(username, content) values (?, ?)`
  const {username, content} = params
  return query(sql,[username,content])
  
}

function delfn(params){
  let sql = `delete from info where index = ?`
  return query(sql,params)
}

module.exports = {
  getProducts,
  insertfn,
  delfn
}