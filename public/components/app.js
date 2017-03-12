angular.module('newsApp',[])

.directive('app', function(bingapi, storyQuery) {
  return {
    scope: {

    },
    controller: function() {
      this.fetch = (articles) => {
        this.allArticles = articles;
        this.articles = this.allArticles;
        this.categories = window.populateCategories(articles);
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
        storyQuery.getStories((stories) => {
          this.showSaved = !this.showSaved;
          if (this.showSaved) {
            this.articles = stories.data;
          } else {
            this.articles = this.allArticles;
          }
        })
      };
      this.saveStory = (story) => {
        storyQuery.sendStory(story, () => {
          console.log('saved!')
        });
      }
      bingapi.fetch(this.fetch);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <filters categories=ctrl.categories filter-category=ctrl.filterCategory ></filters>\
        <story-list articles=ctrl.articles save-story="ctrl.saveStory" selected-category=ctrl.selectedCategory ></story-list>\
      </div>'
  }
})