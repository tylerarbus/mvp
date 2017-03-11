angular.module('newsApp',[])

.directive('app', function(nytimes, newsapi, bingapi) {
  return {
    scope: {

    },
    controller: function() {
      this.results = (articles) => {
        this.articles = articles;
        this.categories = window.populateCategories(articles);
      };
      this.selectedCategory = null;
      this.filterCategory = (category) => {
        if (category !== 'All Categories') {
          this.selectedCategory = category;
        } else {
          this.selectedCategory = null;
        }
      };
      // nytimes.fetch(this.results);
      bingapi.fetch(this.results);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <filters categories=ctrl.categories filter-category=ctrl.filterCategory ></filters>\
        <story-list articles=ctrl.articles selected-category=ctrl.selectedCategory ></story-list>\
      </div>'
  }
})