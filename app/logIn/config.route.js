(function() {
  'use strict';

  angular
    .module('app.logIn')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('logIn',{
        url: '/logIn',
    	  views: {
            "stylesheets": {
              templateUrl: 'app/Templates/stylesheets/stylesheets.html'
            },
            "content": {
                templateUrl: 'app/logIn/logIn.html',
            },
            "scripts": {
                templateUrl: 'app/Templates/scripts/scripts.html'
            }
        }
      })
    }

})();
