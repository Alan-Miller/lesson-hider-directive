angular.module('lessonApp').controller('lessonCtrl', function($scope, lessonService) {


  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.bagel = 'bagel';

});
