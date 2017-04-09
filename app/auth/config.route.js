(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction)
    .run(runFunction);

  configFunction.$inject = ['$stateProvider','$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login',{
        url: '/login',
    	  views: {
            "stylesheets": {
              templateUrl: 'app/Templates/stylesheets/stylesheets.html'
            },
            "content": {
                templateUrl: 'app/logIn/logIn.html',
                controller : 'AuthController'
            },
            "scripts": {
                templateUrl: 'app/Templates/scripts/scripts.html'
            }
        }
      })
    }


  runFunction.$inject = ['$location', 'authService', 'PROTECTED_PATHS'];

  function runFunction($location, authService, PROTECTED_PATHS) {

    authService.firebaseAuthObject.$onAuthStateChanged(function(authData) {
      if (!authData && pathIsProtected($location.path())) {
        authService.logout();
        $location.path('/login');
      }
    });

    function pathIsProtected(path) {
      return PROTECTED_PATHS.indexOf(path) !== -1;
    }
  }

})();
