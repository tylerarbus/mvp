angular.module('newsApp')

.directive('filters', function() {
  return {
    controller: function($scope) {

    },
    template: '<div class="filters">\
      <select class="selectCategory" ng-model="selectedCategory" ng-change="ctrl.filterCategory(selectedCategory)">\
        <option>All Categories</option>\
        <option ng-repeat="category in ctrl.categories">{{category}}</option>\
      </select>\
      </div>'
  }
})