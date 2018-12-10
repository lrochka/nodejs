const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createPool({
	multipleStatements: true,
	connectionLimit: 10,
    host     : 'zanner.org.ua',
    port	: 33321,
    user     : 'root',
    password : '20161212',
    database : 'vira'
});

connection.connect(function(err) {
    if (err) throw err;
});

