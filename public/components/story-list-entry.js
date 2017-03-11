angular.module('newsApp')

.directive('storyEntry', function() {
  return {
    scope: {
      story: '<',
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div class="storyListEntry">\
      <img class="thumbnail" ng-src="{{ctrl.story.image.thumbnail.contentUrl}}"></img>\
      <a class=title ng-href="{{ctrl.story.url}}">{{ctrl.story.name}}</a>\
      <div class=section>{{ctrl.story.category}}</div>\
      <div class=provider>{{ctrl.story.provider.name}}</div>\
      <div class=timestamp>{{ctrl.story.datePublished}}</div>\
      </div>'
  }
})