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
      nytimes.fetch(this.results);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <filters categories=ctrl.categories></filters>\
        <story-list articles=ctrl.articles></story-list>\
      </div>'
  }
})