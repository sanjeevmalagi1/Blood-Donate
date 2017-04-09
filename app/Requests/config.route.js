(function() {
  'use strict';

  angular
    .module('app.Requests')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('MyRequests',{
        url: '/MyRequests',
    	  views: {
            "stylesheets": {
              templateUrl: 'app/Templates/stylesheets/stylesheets.html'
            },
            "content": {
                templateUrl: 'app/Requests/Requests.html',
                controller : 'RequestsController'
            },
            "sidebar@MyRequests":{
              templateUrl: 'app/Templates/sidebar/sidebar.html'
            },
            "header@MyRequests":{
              templateUrl: 'app/Templates/header/header.html'
            },
            "scripts": {
                templateUrl: 'app/Templates/scripts/scripts.html'
            }
        }
      })
    }

})();
