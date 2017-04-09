(function() {
  'use strict';

  angular
    .module('app.User')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('User',{
        url: '/User',
    	  views: {
            "stylesheets": {
              templateUrl: 'app/Templates/stylesheets/stylesheets.html'
            },
            "content": {
                templateUrl: 'app/User/User.html',
                controller : 'UserController'
            },
            "sidebar@search":{
                templateUrl: 'app/Templates/sidebar/sidebar.html',
                controller : 'SidebarController'
            },
            "header@search":{
                templateUrl: 'app/Templates/header/header.html',
                controller : 'HeaderController'
            },
            "scripts": {
                templateUrl: 'app/Templates/scripts/scripts.html'
            }
        }


      })
    }

})();
