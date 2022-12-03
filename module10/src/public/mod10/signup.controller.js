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

    service.submit = function () {
      // Pre-check before submit enabled
      // So, this sets user info in service onject
    };

    service.checkFav = function () {
      // Check Fav legitimacy and return boolean
      MenuService.getMenuItem(signupInfo.userInfo.favDish)
        .then(function () {
          signupInfo.invalidFav = false;
        })
        .catch(function () {
          // Specified favorite dish does NOT exist as writtem
          console.log("Invalid favorite dish entered");
          signupInfo.invalidFav = true;
        });
    };
  }
})();
