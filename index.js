var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var cors = require('cors');
var path = require('path');

var app = express();

var route = require('./routes');

//Adding middleware - cors
app.use(cors());

//static files
app.use(express.static(path.join(__dirname, 'dist')));

//routes
app.use('/api/', route);

app.listen(3000, function() {
	console.log("Serving on port 3000");
});