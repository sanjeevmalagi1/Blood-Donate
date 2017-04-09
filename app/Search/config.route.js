(function() {
  'use strict';

  angular
    .module('app.Search')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('search',{
        url: '/search',
    	  views: {
            "stylesheets": {
              templateUrl: 'app/Templates/stylesheets/stylesheets.html'
            },
            "content": {
                templateUrl: 'app/Search/Search.html',
                controller : 'SearchController'
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
