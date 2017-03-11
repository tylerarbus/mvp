angular.module('newsApp',[])

.directive('app', function(nytimes, newsapi, bingapi) {
  return {
    scope: {

    },
    controller: function() {
      this.results = (articles) => {
        this.articles = articles;
        this.categories = window.populateCategories(articles);
        console.log(articles);
      };
      this.selectedCategory = null;
      this.filterCategory = (category) => {
        if (category !== 'All Categories') {
          this.selectedCategory = category;
        } else {
          this.selectedCategory = null;
        }
       }
      this.showSaved = false;
      this.toggleSaved = () => {
        this.showSaved = !this.showSaved;
      };
      this.saveStory = (story) => {
        //add to saved story database
      }
      bingapi.fetch(this.results);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <filters categories=ctrl.categories filter-category=ctrl.filterCategory ></filters>\
        <story-list articles=ctrl.articles save-story="ctrl.saveStory" selected-category=ctrl.selectedCategory ></story-list>\
      </div>'
  }
})