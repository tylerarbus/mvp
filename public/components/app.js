angular.module('newsApp',[])

.directive('app', function(nytimes, newsapi) {
  return {
    scope: {

    },
    controller: function() {
      this.results = ({results}) => {
        this.articles = results;
        this.categories = window.populateCategories(results);
      };
      this.selectedCategory = null;
      this.filterCategory = (category) => {
        if (category !== 'All Categories') {
          this.selectedCategory = category;
        } else {
          this.selectedCategory = null;
        }
      };
      nytimes.fetch(this.results);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <filters categories=ctrl.categories filter-category=ctrl.filterCategory ></filters>\
        <story-list articles=ctrl.articles selected-category=ctrl.selectedCategory ></story-list>\
      </div>'
  }
})