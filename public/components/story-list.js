angular.module('newsApp')

.directive('storyList', function() {
  return {
    scope: {
      articles: '<',
      selectedCategory: '<',
      saveStory: '<',
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div class="storylist">\
        <story-entry ng-repeat="story in ctrl.articles" story="story" save-story="ctrl.saveStory" ng-if="story.category==ctrl.selectedCategory || ctrl.selectedCategory==null" ></story-entry>\
      </div>'
  }
})