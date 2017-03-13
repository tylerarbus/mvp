var Link = require('../database/models/links.js')


module.exports.addStory = function(req, res) {
  var story = req.body;
  console.log('inside addStory')
  Link.create({
    name: story.name,
    url: story.url,
    category: story.category,
    datePublished: story.datePublished,
    provider: story.provider[0].name,
    thumbnailUrl: story.image.thumbnail.contentUrl,
  }, function(err, results) {
    if (err) {
      console.log('error adding story to db')
      res.end();
    } else {
      console.log('success adding story to db')
      res.end();
    }
  })
}

module.exports.getStories = function(req, res) {

  Link.find({}, function(err, results) {
    if (err) {
      console.log('error finding saved links');
      res.end();
    } else {
      res.end(JSON.stringify(results));
    }
  })
}


module.exports.deleteStories = function(req, res) {

  Link.remove({}, function(err, results) {
    if (err) {
      console.log('error deleting saved links');
      res.end();
    } else {
      console.log('success deleting saved links')
      res.end();
    }
  })
}