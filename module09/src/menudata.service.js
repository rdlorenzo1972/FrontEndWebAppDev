(function () {
  angular.module("data").service("MenuDataService", MenuDataService);

  // Finish services later, copy examples from previous module
  MenuDataService.$inject = ["$http"]; //var service = this;
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      service.categories = [];
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json",
      }).then(
        function successCallback(response) {
          // Study success and successCallback
          for (var index = 0; response.data.length > index; index++) {
            console.log("Inside category push, number: " + index);
            service.categories.push(response.data[index]);
          }
          console.log("Return array, size: " + service.categories.length);
          return service.categories;
        },
        function errorCallback(response) {
          // Provide info to help understanding error R/C
          console.log("Error retrieving categories: " + response.error);
        }
      );
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url:
          "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
          categoryShortName,
        // The correct categoryShortName is the actual short name, e.g. L instead of Lunch
      }).then(
        function successCallback(response) {
          console.log(
            "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
              categoryShortName
          );
          console.log(response.data);
          // FYI, response.data contains two arrays, need to get value of "menuy_items" key
          return response.data;
        },
        function errorCallback(response) {
          // Provide info to help understanding error R/C
          console.log(
            "Error retrieving categories sub-items: " + response.error
          );
        }
      );
    };

    //service.getItemsForCategory = function (categoryShortName) {};
  }
})();
