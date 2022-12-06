(function () {
  "use strict";

  angular.module("public").controller("SignUpController", SignUpController);

  SignUpController.$inject = ["MenuService", "MyInfoService"];
  // MyInfoService: Create, method getUserInfo() returns user info if exists
  // MenuService: create getMenuItem (check REST API for structure)
  function SignUpController(MenuService, MyInfoService) {
    var signupInfo = this;

    signupInfo.userInfo = {}; // Concept from previous assignment, need to confirm
    // No need to create key:value pairs with empty values?

    signupInfo.submit = function () {
      // Pre-check before submit enabled
      // So, this sets user info in service onject
      MenuService.getMenuItem(signupInfo.userInfo.favDish)
        .then(function (response) {
          signupInfo.invalidFav = false; // Needed to hide error MSG

          console.log("Favorite dish is: " + signupInfo.userInfo.favDish);
          // Arrived here is FAV DISH is valid, so ok to set form submitted boolean.
          signupInfo.formSubmitted = true; // To set boolean RE: req submitted MSG

          // Save info to service, to be pulled under MyInfo page
          MyInfoService.setUserInfo(signupInfo.userInfo);
          console.log("User info: " + signupInfo.userInfo);
        })
        .catch(function () {
          // Error getting favDish
          console.log("Error getting FAV Dish after form submission");
          signupInfo.invalidFav = true; // Will display erro MSG
        });
    };

    signupInfo.checkFav = function () {
      // Check Fav legitimacy and return boolean
      console.log("FAV DISH - ng-blur triggered");
      MenuService.getMenuItem(signupInfo.userInfo.favDish)
        .then(function (response) {
          console.log("Response returned to getMenuItem: " + response);
          if (!response) {
            console.log("Response returned equates to zero");
            signupInfo.invalidFav = true;
          } else {
            console.log("Response returned: signupInfo.invalidFav = false");
            signupInfo.invalidFav = false;
          }
        })
        .catch(function () {
          // Specified favorite dish does NOT exist as writtem
          console.log("Invalid favorite dish entered");
          signupInfo.invalidFav = true;
        });
    };
  }
})();
