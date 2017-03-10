var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use(cookieParser);

module.exports = app;