(function() {
  'use strict';

  angular
    .module('app.Templates')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$firebaseAuth', '$state', 'authService'];

  function HeaderController($scope, $firebaseAuth, $state, authService) {
      var vm = this;
      $scope.name=authService.isLoggedIn().providerData[0].displayName;
      $scope.PofilePic=authService.isLoggedIn().providerData[0].photoURL;
      $scope.logout=function(){
        authService.logout();
        $state.go('login')
      }

  }
})();
