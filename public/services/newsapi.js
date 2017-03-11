angular.module('newsApp')

.service('newsapi', function($http, $window) {
  this.fetch = function(callback) {
    $http.get('https://newsapi.org/v1/articles', {
      params: {
        'source': 'the-new-york-times',
        'apiKey': $window.news_api_key,
      }
    })
    .then(function({data}) {
      callback(data);
    })
    .catch(function(err){
      console.error(err);
    })
  }
});