var db = require('../config.js')
var mongoose = require('mongoose');

var urlsSchema = mongoose.Schema({
  name: String,
  url: String,
  category: String,
  datePublished: String,
  provider: String,
  thumbnailUrl: String,
})

var Link = mongoose.model('Link', urlsSchema)

module.exports = Link;