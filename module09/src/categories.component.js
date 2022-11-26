(function () {
  angular.module("data").component("categories", {
    templateUrl: "src/template/categories.component.html",
    controller: "CategoriesController as catsCTRL", // <-- is this needed? Video shows adding here and removing from script
    // Can I remove above since it is in routes.js?
    bindings: { item: "<" },
  });
})();
