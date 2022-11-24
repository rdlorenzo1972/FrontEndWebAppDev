(function () {
  angular.module("MenuApp").config(statesConfig); // Normalized?

  statesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function statesConfig($stateProvider, $urlRouterProvider) {
    //
    $urlRouterProvider.otherwise("/home");

    //
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "not created Yet",
    });

    // Need to create categorie and detail states.
  }
})();
