const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"womeniya_parlour",  
})



// client.connect()
connection.connect(function(err){
    if(err){
        console.log(err)
      
    }else{
        console.log('connection success')
    }
});

module.exports = connection;