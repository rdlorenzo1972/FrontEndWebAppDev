(function () {
  angular
    .module("data")
    .controller("CategoryItemsController", CategoryItemsController);

  CategoryItemsController.$inject = ["catItems"];
  function CategoryItemsController(catItems) {
    var catItemsCtrl = this;
    catItemsCtrl.catItems = catItems;
  }
})();
