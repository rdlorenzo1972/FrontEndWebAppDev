(function () {
  "use strict";

  angular
    .modular("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunchItems = ["fish", "soda", "ice cream", "burger"];
    $scope.lunchMessage = "I'm very hungry";
    $scope.lunchButton = function ($scope) {
      $scope.lunchMessage = "Then eat";
    };
  }
})();
