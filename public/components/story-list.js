angular.module('newsApp')

.directive('storyList', function() {
  return {
    scope: {
      articles: '<',
      selectedCategory: '<'
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div class="storylist">\
        <story-entry ng-repeat="story in ctrl.articles" story="story" ng-if="story.section==ctrl.selectedCategory || ctrl.selectedCategory==null" ></story-entry>\
      </div>'
  }
})