angular.module('newsApp')

.directive('storyList', function() {
  return {
    scope: {
      nytimesStories: '<'
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <story></story>\
      </div>'
  }
})