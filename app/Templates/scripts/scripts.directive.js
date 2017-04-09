(function() {
  'use strict';

  angular
    .module('app.Templates')
    .directive('scripts', scripts);

  function scripts() {
    return {
      templateUrl: 'app/Templates/scripts/scripts.html',
      restrict: 'E',
      scope: {},
      controller: ScriptsController,
      controllerAs: 'vm'
    };
  }

  ScriptsController.$inject = ['$location', 'authService'];

  function ScriptsController($location, authService) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.logout = logout;

    function logout() {
      authService.logout();
      $location.path('/');
    }
  }

})();
