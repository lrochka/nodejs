const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'sql12.freemysqlhosting.net',
    port	: 3306,
    user     : 'sql12269468',
    password : 'wKgefULmLb',
    database : 'sql12269468'
});

connection.connect(function(err) {
    if (err) throw err;
});

