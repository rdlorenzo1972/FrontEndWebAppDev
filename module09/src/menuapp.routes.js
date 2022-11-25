(function () {
  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    //
    $stateProvider.state("home", {
      url: "/",
      templateUrl: "src/template/home.template.html",
    });

    // Need to create categorie and detail states.
  }
})();
