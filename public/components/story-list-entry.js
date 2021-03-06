angular.module('newsApp')

.directive('storyEntry', function() {
  return {
    scope: {
      story: '<',
      saveStory: '<'
    },
    controller: function() {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div class="storyListEntry">\
      <img class="thumbnail" ng-src="{{ctrl.story.image.thumbnail.contentUrl || ctrl.story.thumbnailUrl}}"></img>\
      <a class=title ng-href="{{ctrl.story.url}}">{{ctrl.story.name}}</a>\
      <div class=section>{{ctrl.story.category}}</div>\
      <div class=provider>{{ctrl.story.provider[0].name || ctrl.story.provider}}</div>\
      <div class=timestamp>{{ctrl.story.datePublished}}</div>\
      <button ng-click="ctrl.saveStory(ctrl.story)" >Save Article</button>\
      </div>'
  }
})