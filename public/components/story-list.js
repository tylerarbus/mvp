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
    template: '<div class="storylist">\
        <story-entry ng-repeat="story in ctrl.nytimesStories" story="story" ></story-entry>\
      </div>'
  }
})