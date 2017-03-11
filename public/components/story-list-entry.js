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
      <img ng-src="{{ctrl.story.thumbnail_standard}}"></img>\
      <a class=title ng-href="{{ctrl.story.url}}">{{ctrl.story.title}}</a>\
      <div class=section>{{ctrl.story.section}}</div>\
      <div class=provider>{{ctrl.story.source}}</div>\
      <div class=timestamp>{{ctrl.story.updated_date}}</div>\
      </div>'
  }
})