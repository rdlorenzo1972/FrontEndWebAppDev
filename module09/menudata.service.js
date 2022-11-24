(function () {
  angular.module("data").service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ["$http"];
  function MenuDataService($http) {
    service.getAllCategories = function () {};

    service.getItemsForCategory = function (categoryShortName) {};
  }
})();
