(function() {
  'use strict';

  angular
    .module('app.waitList1')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider,$urlRouterProvider) {
	 var waitlist1 = {
    name: 'waitlist1',
    url: '/waitlist1',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }


    $stateProvider.state(waitlist1);
  }

  resolveUser.$inject = ['authService'];

  function resolveUser(authService) {
    return authService.firebaseAuthObject.$requireSignIn();
  }

})();
