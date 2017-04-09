(function() {
  'use strict';

  angular
    .module('app.landing')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('root',{
        url: '/',
    	  views: {
            "stylesheets": {
              templateUrl: 'app/Templates/stylesheets/stylesheets.html'
            },
            "content": {
                templateUrl: 'app/landing/landing.html',
            },
            "sidebar@root":{
              templateUrl: 'app/Templates/sidebar/sidebar.html'
            },
            "header@root":{
              templateUrl: 'app/Templates/header/header.html'
            },
            "scripts": {
                templateUrl: 'app/Templates/scripts/scripts.html'
            }
        }
      })
    }

})();
