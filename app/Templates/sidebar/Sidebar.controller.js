(function() {
  'use strict';

  angular
    .module('app.Templates')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$scope','authService'];

  function SidebarController($scope,authService) {
      var vm = this;
      //console.log(authService.isLoggedIn().providerData[0].displayName);
      //console.log("From Sidebar");
      $scope.name=authService.isLoggedIn().providerData[0].displayName;
      $scope.PofilePic=authService.isLoggedIn().providerData[0].photoURL;

  }
})();
