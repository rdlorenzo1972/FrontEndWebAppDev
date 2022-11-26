(function () {
  angular.module("data").service("MenuDataService", MenuDataService);

  // Finish services later, copy examples from previous module
  MenuDataService.$inject = ["$http"];
  //var service = this;

  function MenuDataService($http) {
    var service = this;
    service.getAllCategories = function () {
      service.categories = [];
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json",
      }).then(
        function successCallback(response) {
          for (var index = 0; response.data.length > index; index++) {
            console.log("Inside category push, number: " + index);
            service.categories.push(response.data[index]);
          }
          return service.categories;
        },
        function errorCallback(response) {
          // Provide info to help understanding error R/C
          console.log("Error retrieving categories: " + response.error);
        }
      );
    };

    service.getItemsForCategory = function (categoryShortName) {};
  }
})();
