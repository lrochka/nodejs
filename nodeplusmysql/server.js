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

exports.connection.getConnection(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function(req, res) {
    
    res.sendfile('./index.html');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})
