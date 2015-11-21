var express = require('express');
var db = require('./DBConnector.js');
var app = express();
var SERVER_PORT = 8080;


app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/addShit', function (req, res) {
    db.connect(function(connection) {
        var sql = 'SELECT * from users';

        connection.query(sql, function(err, rows, fields) {
            if (!err) {
                console.log('Request Received');
                res.send(JSON.stringify(rows));
            }
            else {
                console.log('Error while performing Query: %s', sql);
                res.send(err);
            }
        });
    });
});

var server = app.listen(SERVER_PORT, function () {
    var port = server.address().port;

    console.log('Listening on port %s', port);
});
