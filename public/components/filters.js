angular.module('newsApp')

.directive('filters', function() {
  return {
    controller: function($scope) {

    },
    template: '<div class="filters">\
      <select class="selectCategory">\
        <option>Select Category</option>\
        <option ng-repeat="category in ctrl.categories">{{category}}</option>\
      </select>\
      </div>'
  }
})