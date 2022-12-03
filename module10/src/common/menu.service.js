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
    // NOTE: Different structure than Module 09
    // ApiPath / menu_itmes / c(cat short name) / menu_items / (menu number).json
    service.getMenuItem = function (shortName) {
      console.log("Inside MenuService, getmenuItem, looking for: " + shortName);
      return $http
        .get(ApiPath + "/menu_items/" + shortName + ".json")
        .then(function (response) {
          console.log("Retrieved fav item is: " + response);
          return response.data;
        })
        .catch(function (response) {
          console.log("Error retrieving favorite dish");
          return;
        });
    };
  }
})();
