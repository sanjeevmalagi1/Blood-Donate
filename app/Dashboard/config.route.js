(function() {
  'use strict';

  angular
    .module('app.Dashboard')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('Dashboard',{
        url: '/Dashboard',
    	  views: {
            "stylesheets": {
              templateUrl: 'app/Templates/stylesheets/stylesheets.html'
            },
            "content": {
                templateUrl: 'app/Dashboard/Dashboard.html',
                controller : 'DashboardController'
            },
            "sidebar@Dashboard":{
                templateUrl: 'app/Templates/sidebar/sidebar.html',
                controller : 'SidebarController'
            },
            "header@Dashboard":{
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
