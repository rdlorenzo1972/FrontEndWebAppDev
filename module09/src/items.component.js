(function () {
  angular.module("data").component("itemscomp", {
    //templateUrl: "src/template/categories.template.html";
    templateUrl: "src/template/items.component.html",
    //controller: "CategoriesController",
    bindings: {
      // Used things instead of commom word used to help distinguish
      // The controller uses items
      things: "<",
    }, // Changed from items to categories, then to categoriescomp
  });
})();
