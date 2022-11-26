(function () {
  angular.module("data").component("categories", {
    templateUrl: "src/template/categories.template.html",
    // templateUrl: "src/template/categories.component.html",
    // Changed as name to same as routes.js
    controller: "CategoriesController as catsCtrl", // <-- is this needed? Video shows adding here and removing from script
    // Can I remove above since it is in routes.js?
    bindings: { categories: "<" }, // Changed from items to categories
  });
})();
