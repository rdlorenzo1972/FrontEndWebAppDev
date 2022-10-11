(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope", "$filter"];
  function LunchCheckController($scope, $filter) {
    $scope.lunchMessage = "";
    //$scope.lunchMessage2 = "";
    $scope.lunchItems;
    document.querySelector(".message").style.color = "red";

    $scope.lunchButton = function () {
      if ($scope.lunchItems.length === 0) {
        $scope.lunchMessage = "Please enter data first";
        document.querySelector(".message").style.color = "red";
        document.getElementById("lunch-menu").style.borderColor = "red";
        document.getElementById("lunch-menu").style.borderWidth = "3px";
      } else {
        var lunchItemsArray = $scope.lunchItems.split(",");
        var filterItems = lunchItemsArray.filter(function (value, index, arr) {
          return value.trim() !== "";
        });
        var numberItems = filterItems.length;

        if (numberItems > 3) {
          $scope.lunchMessage = "Too much!";
          document.querySelector(".message").style.color = "green";
          document.getElementById("lunch-menu").style.borderColor = "green";
          document.getElementById("lunch-menu").style.borderWidth = "3px";
          //$scope.lunchMessage2 = filterItems;
        } else {
          $scope.lunchMessage = "Enjoy!";
          document.querySelector(".message").style.color = "green";
          document.getElementById("lunch-menu").style.borderColor = "green";
          document.getElementById("lunch-menu").style.borderWidth = "3px";
        }
      }
    };
  }
})();
