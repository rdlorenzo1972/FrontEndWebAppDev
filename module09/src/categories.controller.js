(function () {
  angular
    .module("data")
    .controller("CategoriesController", CategoriesController);

  CategoriesController.$inject = ["item"]; // From routes.js, next change to items since plural
  function CategoriesController(item) {
    var catsCtrl = this;
    catsCtrl.items = item; // item is passed param, but items is array.
    // Might need to change is confusing item versus items
  }
})();
