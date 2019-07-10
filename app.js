const express = require('express');
const mysql = require('mysql');


//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user:   'root',
  password:'123456',
  database: 'nodemyql'

});

//connect
db.connect( (err)=>{
    if(err){
      console.log();
      throw err;
    }
    console.log('mysql connected ...');
});

const app = express();

// create db
app.get('/createdb', (req, res) =>{
    let sql = 'CREATE DATABASE nodemyql';
    db.query(sql, (err,result)=>{
      if(err) throw err;
      console.log(result);
      res.send('database created...');

    })

});





app.listen('3000', () => {
  console.log('server started on port 3000');
});
