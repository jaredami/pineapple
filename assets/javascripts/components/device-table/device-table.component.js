(function() {
  "use strict";

  angular.module("deviceTable", []).component("deviceTable", {
    templateUrl: "assets/javascripts/components/device-table/device-table.html",
    controller: DeviceTableController
  });

  DeviceTableController.$inject = ["$scope", "deviceFactory"];

  function DeviceTableController($scope, deviceFactory) {
    console.log("Hello");
    var vm = this;

    // Scope Variables
    vm.collection = [];
    $scope.predicate = 0;

    // Scope Functions
    $scope.sorter = function(item) {
      return item[$scope.predicate];
    };

    // Lifecycle Hooks
    vm.$onInit = onInit;

    ////////////////////////

    function onInit() {
      deviceFactory.get().then(function(res) {
        vm.collection = res;
      });
    }
  }
})();
