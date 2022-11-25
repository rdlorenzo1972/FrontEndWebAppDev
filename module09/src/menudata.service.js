(function () {
  angular.module("data").service("MenuDataService", MenuDataService);

  // Finish services later, copy examples from previous module
  MenuDataService.$inject = ["$http"];
  function MenuDataService($http) {
    service.getAllCategories = function () {};

    service.getItemsForCategory = function (categoryShortName) {};
  }
})();
