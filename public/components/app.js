angular.module('newsApp',[])

.directive('app', function(nytimes) {
  return {
    controller: function($scope) {
      $scope.greeting = nytimes.fetch();
    },
    template: '<div>\
      {{greeting}}\
      </div>'
  }
})