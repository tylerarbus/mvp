var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var handler = require('./lib/request-handler.js');
var path = require('path');

var app = express();


app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
// app.use(cookieParser);

app.post('/story', handler.addStory);
app.get('/story', handler.getStories);
app.delete('/story', handler.deleteStories);

module.exports = app;