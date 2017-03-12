angular.module('newsApp')

.service('storyQuery', function($http, $window) {
  this.sendStory = function(story, callback) {
    $http.post('/story', story)
    .then(function(results) {
      callback('Saved!');
    })
    .catch(function(err){
      console.error(err);
    })
  }
  this.getStories = function(callback) {
    $http.get('/story')
    .then(function(results) {
      callback(results);
    })
    .catch(function(err){
      console.error(err);
    })    
  }
})