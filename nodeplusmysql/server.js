const express = require('express')
const app = express()
var mysql = require('mysql');

app.get('/', function(req, res) {
    
    res.sendfile('./index.html');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})
