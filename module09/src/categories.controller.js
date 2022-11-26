(function () {
  angular
    .module("data")
    .controller("CategoriesController", CategoriesController);

  CategoriesController.$inject = ["item"];
  function CategoriesController(item) {
    var catCTRL = this;
    catCTRL.items = item;
  }
})();
