
Node Mysql Project


BACK-END, CREATING THE SERVER
We create an empty folder, we open the terminal and we run the command npm i --yes.
We create the folder src and we install the dependencies: bcryptjs, connect-flash, express, express-handlebars, express-mysql-session, express-validator, morgan, mysql, passport, passport-local, timeago.js. We also install nodemon as a devDependencie with the command -D nodemon.
We create the index.js file into src. We require the express module const express = require('express'),  we initialize it const app = express(), and make some configurations app.set('port', process.env.PORT || 4000). Then we start the server app.listen(app.get('port'), () => { console.log('Server on port')}.
Now we go with the Routes, we create the routes folder within authentication.js, index.js and links.js files into src folder. We go back to the src folder and we configure the routes in the 'main' index.js (not the one into routes folder):
		- app.use(require('./routes')) 
		- app.use(require('./routes/authentication')) 
		- app.use('links', require('./routes/links')) 
To check that everything is working, we add an empty route on the index.js into routes folder. We require express const express = require('express'), we call to the Router method const router = express.Router(),  we create a get request router.get('/', (req, res) => { res.send('Hello world!')}) and we export the module module.exports = router. 
We start the server with the command npm run dev we go to the browser and we place the url localhost:4000/links. 
	
 MYSQL CONNECTION
We create the database.js file into src folder. We require the mysql module  const mysql = require('mysql') we create the keys.js file and we fill it with the login details to our mysql:	

	module.exports= {
		database:{
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'database_links'
			}
	}				
In to database.js we require the object database from the file keys that we've created on the previous step. const { database } = require('./keys')
We call to the mysql method createPool const pool = mysql.createPool(database). We require the module promisify from util module const { promisify } = require('util').
We do the connection and we check some mistakes:
	
pool.getConnection((err, connection) => {
   if(err){			        						if(err.code==='PROTOCOL_CONECTION_LOST'){
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
We  call to the promisify method pool.query = promisify(pool.query)
We export the module module.exports = pool
			
VIEWS (TEMPLATE ENGINE)
		
INSERTING IN MYSQL
SELECTING FROM MYSQL
DELETING IN MYSQL
UPDATING IN MYSQL
CONNECT-FLASH MESSAGGES AND NAVIGATION
REGISTER USERS IN MYSQL
LOGIN USER IN MYSQL
PROTECTING SERVER ROUTES
PRIVATE DATA
































