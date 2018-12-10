const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'zanner.org.ua',
    port	: 33321,
    user     : 'root',
    password : '20161212',
    database : 'world_x'
});

connection.connect(function(err) {
    if (err) throw err;
});

