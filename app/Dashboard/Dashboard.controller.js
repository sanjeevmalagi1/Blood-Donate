(function() {
  'use strict';

  angular
    .module('app.Dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope','authService'];

  function DashboardController($scope,authService) {
      var vm = this;
      //console.log(authService.isLoggedIn().providerData[0].displayName);
      
  }
})();
