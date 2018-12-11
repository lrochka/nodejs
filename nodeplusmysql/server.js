const express = require('express')
const app = express()
var mysql = require('mysql');
var pool = mysql.createPool({
  host: "zanner.org.ua",
  user: "user",
  password: "123456789"
});

exports.connection = {
    query: function () {
        var queryArgs = Array.prototype.slice.call(arguments),
            events = [],
            eventNameIndex = {};

        pool.getConnection(function (err, conn) {
            if (err) {
                if (eventNameIndex.error) {
                    eventNameIndex.error();
                }
            }
            if (conn) { 
                var q = conn.query.apply(conn, queryArgs);
                q.on('end', function () {
                    conn.release();
                });

                events.forEach(function (args) {
                    q.on.apply(q, args);
                });
            }
        });

        return {
            on: function (eventName, callback) {
                events.push(Array.prototype.slice.call(arguments));
                eventNameIndex[eventName] = callback;
                return this;
            }
        };
    }
};

app.get('/', function(req, res) {
    exports.connection.query('SELECT * FROM countryinfo;', function(error, results, fields) {
      if (error) throw error

  // results is an array with one element for every statement in the query:
    // console.log(results);
      // console.log(results[0]); // [{1: 1}]
     console.log(results); // [{2: 2}]
    });
  
    res.sendfile('./index.html');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})
