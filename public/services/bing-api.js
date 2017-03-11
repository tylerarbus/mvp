angular.module('newsApp')

.service('bingapi', function($http, $window) {
  this.fetch = function(callback) {
    $http({
     method: 'GET',
     url: 'https://api.cognitive.microsoft.com/bing/v5.0/news',
     headers: {
       'Ocp-Apim-Subscription-Key': $window.bing_api_key,
     }
    })
    .then(function({data}) {
      callback(data.value);
    })
    .catch(function(err){
      console.error(err);
    })
  }
});