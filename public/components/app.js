angular.module('newsApp',[])

.directive('app', function(nytimes) {
  return {
    scope: {

    },
    controller: function() {
      this.results = ({results}) => {
        this.nytimesStories = results;
      };
      nytimes.fetch(this.results);
      this.hello = 'hello';
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <story-list></story-list>\
      </div>'
  }
})