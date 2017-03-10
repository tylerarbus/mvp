angular.module('newsApp')

.directive('storyEntry', function() {
  return {
    scope: {
      story: '<'
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
      {{ctrl.story.title}}\
      </div>'
  }
})