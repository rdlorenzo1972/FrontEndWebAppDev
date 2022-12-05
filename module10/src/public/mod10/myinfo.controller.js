(function () {
  "use strict";

  angular.module("public").controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ["MenuService", "userInfo"];
  function MyInfoController(MenuService, userInfo) {
    var myInfoCtrl = this;

    // if (userInfo.length > 0)
    // if (userInfo[0] != null)
    if (userInfo) {
      // Below is needed for controller to html page

      //myInfoCtrl.myInfo = userInfo;
      myInfoCtrl.userInfo = userInfo;

      MenuService.getMenuItem(userInfo.favDish)
        .then(function (response) {
          console.log(
            "favDishObject: " + response.name + ", " + response.description
          );
          // I say object, but resembles dictionary
          myInfoCtrl.favDishObject = response;
          // Example: {"description":"","name":"Fountain Soda Large","price_large":2,"short_name":"SO7"}
        })
        .catch(function (response) {
          console.log("Unable to get favDishObject, error info: " + response);
        });

      myInfoCtrl.favDishCategory = MenuService.getCategory(userInfo.favDish);
      // MenuService.getCategory(userInfo.favDish)
      //   .then(function (response) {
      //     console.log("Inside MyInfoCtrl, getting category: " + response);
      //     myInfoCtrl.favDishCategory = response;
      //   })
      //   .catch(function (response) {
      //     console.log(
      //       "Unable to get fav CAT, MyInfoCtrl calling MenuService.getCat..., error info: " +
      //         response
      //     );
      //   });
    }
  }
})();
