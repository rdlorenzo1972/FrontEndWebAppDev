describe("SignUpController", function () {
  "use strict";

  // Add var's here
  var $httpBackend;
  var $controller;
  var MenuService;
  var MyInfoService;
  var signupController;

  var L4 = {
    description:
      "beef sauteed with carrots and celery, in a spicy Szechuan sauce",
    name: "Kung Pao Chicken",
    price_large: 9.75,
    short_name: "L4",
  };

  var L5 = {
    description: "white meat chicken sauteed with string beans and soy sauce",
    name: "Chicken String Bean",
    price_large: 9.75,
    short_name: "L5",
  };

  beforeEach(function () {
    module("restaurant");

    inject(function ($injector) {
      $httpBackend = $injector.get("$httpBackend");
      //$controller = _$controller_;
      $controller = $injector.get("$controller");
      MenuService = $injector.get("MenuService");
      MyInfoService = $injector.get("MyInfoService");

      // Not sure if userInfo service is required
      // Yes, required, based on controller had 2 injects
      signupController = $controller("SignUpController", {
        MenuService: MenuService,
        MyInfoService: MyInfoService,
      });
    });
  });

  it("Requesting L4 item should return Kung Pao Chicken", function () {
    var getURL_L4 =
      "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/3.json";
    $httpBackend.whenGET(getURL_L4).respond(L4);

    $httpBackend.whenGET("src/public/public.html").respond("");
    $httpBackend.whenGET("src/public/home/home.html").respond("");

    MenuService.getMenuItem("L4").then(function (response) {
      console.log("From spec, response from L4: " + response);
      expect(response.name).toEqual("Kung Pao Chicken");
    });

    $httpBackend.flush();
  });

  it("Controller checking L5: Invalid favorite boolean should return false", function () {
    $httpBackend.whenGET("src/public/public.html").respond("");
    $httpBackend.whenGET("src/public/home/home.html").respond("");

    var getURL_L5 =
      "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/4.json";
    $httpBackend.whenGET(getURL_L5).respond(L5);

    signupController.userInfo.favDish = "L5";
    signupController.checkFav();
    $httpBackend.flush();
    expect(signupController.invalidFav).toBe(false);
  });
});
