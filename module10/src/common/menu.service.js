(function () {
  "use strict";

  angular.module("common").service("MenuService", MenuService);

  MenuService.$inject = ["$http", "ApiPath"];
  function MenuService($http, ApiPath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + "/categories.json").then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      return $http
        .get(ApiPath + "/menu_items/" + category + ".json")
        .then(function (response) {
          return response.data;
        });
    };

    // Need to research REST structure
    // Confirm with Module 09
    service.getMenuItem = function (shortName) {
      return $http
        .get(ApiPath + "/menu_items/" + shortName + ".json")
        .then(function (response) {
          return response.data;
        });
    };
  }
})();
