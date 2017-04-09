(function() {
  'use strict';

  angular
    .module('app.Requests')
    .controller('RequestsController', RequestsController);

  RequestsController.$inject = ['$scope','NgMap'];

  function RequestsController($scope,NgMap) {
      var vm = this;
      $scope.requests = [
        {
          "BloodContent":"pl",
          "Status":"active"
        },
        {
          "BloodContent":"RGB",
          "Status":"active"
        }
      ]
  }
})();
