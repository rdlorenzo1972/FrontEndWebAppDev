(function () {
  "use strict";

  angular.module("common").service("MyInfoService", MyInfoService);

  MyInfoService.$inject = [];
  function MyInfoService() {
    var service = this;

    service.setUserInfo = function (userInfo) {
      service.userInfo = userInfo;
    };

    service.getUserInfo = function () {
      return service.userInfo;
    };
  }
})();
