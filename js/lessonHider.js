angular.module('lessonApp').directive('lessonHider', function() {
    return {
      templateUrl: 'lessonHider.html',
      restrict: 'E',
      scope: {
        lesson: '=',
        name: '=',
        unicorn: '='
      },
      controller: function($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      },
      link: function(skope, elem, attrs) {      // attrs is object of all properties and values of attributes on the directive in DOM
        skope.getSchedule.then(function(response) {
          skope.schedule = response.data;


        for (var i = 0; i < skope.schedule.length; i++) {
          if (skope.schedule[i].lesson === skope.lesson) {
            elem.css('text-decoration', 'line-through');
            return;
          }
        }
});
        // console.log(skope);
        // console.log(elem);
        // console.log(attrs);
      }
    };
});
