var mongoose = require('mongoose');

var urlsSchema = mongoose.Schema({
  url: String,

})

var Link = mongoose.model('Link', urlsSchema)

module.exports = Link;