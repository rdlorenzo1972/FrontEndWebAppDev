describe("SignUpController", function () {
  "use strict";

  // Add var's here
  var $httpBackend;
  var $controller;
  var MenuService;
  var MyInfoService;
  var signupController;
  //var MenuServiceMock = {};

  beforeEach(function () {
    module("restaurant");

    inject(function ($injector) {
      $httpBackend = $injector.get("$httpBackend");
      //$controller = _$controller_;
      $controller = $injector.get("$controller");
      MenuService = $injector.get("MenuService");
      MyInfoService = $injector.get("MyInfoService");

      // MenuServiceMock.getMenuItem = function (found) {
      //   return found;
      // };

      // Not sure if userInfo service is required
      // Yes, required, based on controller had 2 injects
      signupController = $controller("SignUpController", {
        MenuService: MenuService,
        MyInfoService: MyInfoService,
      });
    });
  });

  it("Should return false", function () {
    // Simulate HTTP GET here
    var getURL =
      "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/3.json";
    $httpBackend.whenGET(getURL).respond({ name: "Kung Pao Chicken" });

    MenuService.getMenuItem("L3").then(function (response) {
      expect(response.data.name).toEqual("Kung Pao Chicken");
      console.log(response);
    });

    //expect(signupController.checkFav(false)).toBe(false);
    $httpBackend.flush();
  });
});
