angular.module('newsApp')

.directive('story', function() {
  return {
    scope: {
      story: '<'
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
      Inside of story\
      </div>'
  }
})