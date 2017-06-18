var express = require('express'), 
	app = express();
var redis = require("redis"),
	db = redis.createClient();

db.on( "error", function( err ) {
	console.error("Error " + err);
});

app.get('/', function( req, res ) {
	res.send('Hello world!');
});

app.listen(80);
