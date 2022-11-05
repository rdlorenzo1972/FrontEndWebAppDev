(function () {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItems);

  NarrowItDownController.$inject = ["$scope", "$filter", "MenuSearchService"];
  function NarrowItDownController($scope, $filter, MenuSearchService) {
    var narCtrl = this;
    narCtrl.found = [];
    narCtrl.searchTerm = "";

    narCtrl.getMatches = function () {
      console.log("Inside CONTROLLER");
      if (narCtrl.searchTerm !== "") {
        console.log("searchTerm not blank " + narCtrl.searchTerm);
        var promise = MenuSearchService.getMatchedMenuItems(
          narCtrl.searchTerm.toLowerCase()
        ); // Need to add parameter

        promise
          .then(function (response) {
            narCtrl.found = response; // JSON converted into array of object literals
            console.log(
              "Inside promise then, found size is : " + narCtrl.found.length
            );
          })
          .catch(function (error) {
            console.log("Error trying to match menu items.");
          });
      } else {
        // i.e. narCtrl.searchItem === ""
        narCtrl.found = [];
      }
    };

    narCtrl.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };
  }

  MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http) {
    var service = this;
    var boughtItems = [];

    service.getMatchedMenuItems = function (searchTerm) {
      service.found = [];
      console.log("Inside service getMatchedMenuItems method");

      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      }).then(
        function success(response) {
          console.log("Data size: " + response.data.menu_items.length);
          for (
            var index = 0;
            response.data.menu_items.length > index;
            index++
          ) {
            // Pending
            if (
              response.data.menu_items[index].description.indexOf(
                searchTerm
              ) !== -1
            ) {
              // Current descr has search item in description
              // Adding entire row for now, but assignment only wants
              // Name of menu item, short name, and, description
              service.found.push(response.data.menu_items[index]);
              console.log("Result size: " + service.found.length);
            }
          }
          return service.found;
        },
        function error(response) {
          // Error occurred
          console.log("Error encountered: " + response.error);
        }
      );
    };

    service.removeItem = function (itemIndex) {
      service.found.splice(itemIndex, 1);
    };
  }

  function FoundItems() {
    var ddo = {
      templateUrl: "loader/itemsloaderindicator.html",
      scope: {
        foundItem: "<",
        onRemove: "&",
      },
    };
    return ddo;
  }
})();
