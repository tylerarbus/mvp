angular.module('newsApp')

.directive('storyList', function() {
  return {
    scope: {
      articles: '<'
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div class="storylist">\
        <story-entry ng-repeat="story in ctrl.articles" story="story" ></story-entry>\
      </div>'
  }
})