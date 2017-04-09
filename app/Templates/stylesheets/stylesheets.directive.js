(function() {
  'use strict';

  angular
    .module('app.Templates')
    .directive('stylesheets', stylesheets);

  function stylesheets() {
    return {
      templateUrl: 'app/Templates/stylesheets/stylesheets.html',
      restrict: 'E',
      scope: {},
      controller: StylesheetsController,
      controllerAs: 'vm'
    };
  }

  StylesheetsController.$inject = ['$location', 'authService'];

  function StylesheetsController($location, authService) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.logout = logout;

    function logout() {
      authService.logout();
      $location.path('/');
    }
  }

})();
