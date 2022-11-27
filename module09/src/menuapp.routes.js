(function () {
  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$inject = [
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider",
  ];
  function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise("/home");

    // Set up UI states
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "src/template/home.template.html",
      })

      // Category list state
      .state("categories", {
        url: "/categories",
        templateUrl: "src/template/categories.template.html",
        controller: "CategoriesController as catsCtrl",
        resolve: {
          item: [
            "MenuDataService",
            function (MenuDataService) {
              return MenuDataService.getAllCategories();
            },
          ],
        },
      })

      .state("items", {
        url: "/items/{category}",
        templateUrl: "src/template/items.template.html",
        controller: "CategoryItemsController as catItemsCtrl",
        resolve: {
          catItems: [
            "$stateParams",
            "MenuDataService",
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.category);
            },
          ],
        },
      });

    $locationProvider.html5Mode(true);

    // .state("tab2", {
    //   url: "/tab2",
    //   templateUrl: "src/tab2.html",
    // });
  }
})();
