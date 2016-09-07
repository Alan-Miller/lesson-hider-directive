angular.module('lessonApp').controller('lessonCtrl', function($scope) {

  $scope.bagel = 'Two-way data bagel!';
  $scope.sandwich = 'Two-way data sandwich!';

  $scope.Alan = 'Does not understand';

  $scope.chocolate = 'rainbows';

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];


});
