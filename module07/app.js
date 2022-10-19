(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("Controller1", Controller1)
    .controller("Controller2", Controller2)
    .service("ShoppingListService", ShoppingListService);

  Controller1.$inject = ["$scope", "$filter", "ShoppingListService"];
  function Controller1($scope, $filter, ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getToBuyItems();

    showList.removeItem = function (itemIndex) {
      ShoppingListService.removeToBuyItem(itemIndex);
    };
  }

  Controller2.$inject = ["$scope", "$filter", "ShoppingListService"];
  function Controller2($scope, $filter, ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getBoughtItems();

    showList.addItem = function (itemIndex) {
      ShoppingListService.addBoughtItem(itemIndex);
    };
  }

  function ShoppingListService() {
    var service = this;
    var boughtItems = [];
    var toBuyItems = [
      {
        name: "Milk",
        quantity: "2",
        pricePerItem: "3.35",
      },
      {
        name: "Protein Bar",
        quantity: "50",
        pricePerItem: "4.50",
      },
      {
        name: "Jerky Sticks",
        quantity: "40",
        pricePerItem: "0.95",
      },
      {
        name: "Dark Chocolate Candy",
        quantity: "5",
        pricePerItem: "3.35",
      },
    ];
    service.addBoughtItem = function (itemName, quantity, pricePerItem) {
      var item = {
        name: itemName,
        quantity: quantity,
        pricePerItem: pricePerItem,
      };
      boughtItems.push(item);
    };

    service.removeToBuyItem = function (itemIndex) {
      toBuyItems[itemIndex]["totalItemCost"] =
        toBuyItems[itemIndex]["quantity"] *
        toBuyItems[itemIndex]["pricePerItem"];
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
})();
