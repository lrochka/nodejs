const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : '10.35.2.26',
    port	: 33321,
    user     : 'vira',
    password : 'qweqwe123123',
    database : 'vira'
});

connection.connect(function(err) {
    if (err) throw err;
});

