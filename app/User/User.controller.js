(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('UserController', UserController);

  UserController.$inject = ['$scope','NgMap'];

  function UserController($scope,NgMap) {
      var vm = this;

      $scope.User= {
        "name" : "Sanjeev M",
        "BloodGroup" : "AB+",
        "Message" : "only serious cases",
        "lat" : 56.12,
        "lng" : 42.33
      }

  }

})();
