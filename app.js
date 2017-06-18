var express = require('express'), 
	app = express();
var redis = require("redis"),
	db = redis.createClient();
const dice = require('./src/dice.js');

db.on( "error", function( err ) {
	console.error("Error " + err);
});

app.get('/', function( req, res ) {
	res.send(`Rolled ${dice(3,6,2).toString()}`);
});

app.listen(80);
