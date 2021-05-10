const mysql = require('mysql')
const { database } = require('./keys')
const pool = mysql.createPool(database)
const {promisify}= require('util')

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code==='PROTOCOL_CONECTION_LOST'){
            console.log('DATABASE CONECTION WAS CLOSED')
        }
        if(err.code==='ERR_CON_COUNT_ERROR'){
            console.log('DATABASE HAS TOO MANY CONNECTIONS')
        }
        if(err.code==='ECONREFUSED'){
            console.log('DATABASE CONECTION WAS REFUSED')
        }
    }
    if(connection) connection.release()
    console.log('DB is Connnected')
    return
})

// Promisify Pool Querys
pool.query = promisify(pool.query)

module.exports = pool