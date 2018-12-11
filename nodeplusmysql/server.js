const express = require('express')
const app = express()
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "zanner.org.ua",
  user: "user",
  password: "123456789"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function(req, res) {
    
    res.sendfile('./index.html');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})
