angular.module('newsApp')

.service('nytimes', function($http, $window) {
  this.fetch = function(callback) {
    $http.get('http://api.nytimes.com/svc/news/v3/content/all/all.json', {
      params: {
        'api-key': $window.nytimes_api_key,
      }
    })
    .then(function({data}) {
      callback(data);
    })
    .catch(function(err){
      console.error(err);
    })
  }
})