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
    // ApiPath / menu_items / c(cat short name) / menu_items / (menu number).json
    service.getMenuItem = function (shortName) {
      console.log("Inside MenuService, getmenuItem, looking for: " + shortName);
      var catShortname = service.getCategory(shortName);
      var urlString =
        ApiPath +
        "/menu_items/" +
        catShortname +
        "/menu_items/" +
        service.getCategoryItem(shortName, catShortname.length) +
        ".json";
      return (
        $http
          //.get(ApiPath + "/menu_items/" + shortName + ".json")
          // var catShortname = service.getCategory(shortName);
          .get(urlString)
          .then(function (response) {
            console.log("Retrieved fav item is: " + response);
            return response.data;
          })
          .catch(function (response) {
            console.log("Error retrieving favorite dish");
            return;
          })
      );
      // .then(function (response) {
      //   console.log("Retrieved fav item is: " + response);
      //   return response.data;
      // })
    };

    service.getCategory = function (favDish) {
      var favDishTrim = favDish.trim(); // trim(favDish);
      var favDishCat = "";

      // Either CAT short name is 1 or 2 letters, so will check is 2nd char
      // is a ltter. If so, the cat short name has 2 letter short name.
      if (favDishTrim.length > 1 && /[a-zA-Z]/.test(favDishTrim.charAt(1))) {
        favDishCat = favDishTrim.substring(0, 2);
      } else {
        favDishCat = favDishTrim.substring(0, 1);
      }
      favDishCat = favDishCat.toUpperCase();
      console.log("Determined favDish category short-name is: " + favDishCat);
      return favDishCat;
    };

    service.getCategoryItem = function (favDish, catSize) {
      var favDishTrim = favDish.trim(); // trim(favDish);
      var favDishCatItem = "";

      if (
        favDishTrim.length > catSize + 1 &&
        !/[a-zA-Z]/.test(favDishTrim.charAt(3))
      ) {
        favDishCatItem = favDishTrim.substring(catSize, catSize + 2);
      } else {
        favDishCatItem = favDishTrim.substring(catSize, catSize + 1);
      }
      //favDishCatItem = favDishCatItem.toUpperCase();
      console.log("Determined favDish category item is: " + favDishCatItem);
      // Minus 1 from fav number to get actual dish site address
      return favDishCatItem - 1;
    };
  }
})();
