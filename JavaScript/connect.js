var mysql = require('mysql');
var SocksConnection = require('socksjs');
var socks_options = {
    host: 'chooser.cloudapp.net',
    port: 22,
    user: 'chooseradmin',
    pass: 'Nsghvnjac1'
};

var mysql_server_options = {
    host: 'chooser.chooser.cloudapp.net',
    port: 3306
};
var socksConn = new SocksConnection(mysql_server_options, socks_options);

var connection =  mysql.createConnection({
    host : 'chooser.cloudapp.net',
    user : 'admin',
    password: 'Nsghvnjac1',
    database : 'chooser',
    stream : socksConn
});
connection.connect();
/*
client.host ='chooser.cloudapp.net';
client.user = 'user';
client.password = 'password';
console.log("connecting...");
client.connect(function(err, results) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
    console.log("connected.");
    clientConnected(client);
});

clientConnected = function(client)
{
    tableHasData(client);
}


tableHasData = function(client) {
    client.query(
        'SELECT * FROM [db].[table] LIMIT 0,10',
        // you can keep this function anonymous
        function (err, results, fields) {
            if (err) {
                console.log("ERROR: " + err.message);
                throw err;
            }
            console.log("Got " + results.length + " Rows:");
            for (var i in results) {
                //console.log(results[i].[columnname]);
                console.log('\n');

                //console.log("The meta data about the columns:");
                //console.log(fields);
            }
            client.end();
        });
}; */