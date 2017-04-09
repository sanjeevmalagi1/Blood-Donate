(function() {
  'use strict';

  angular
    .module('app.Search')
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$scope','NgMap'];

  function SearchController($scope,NgMap) {
      var vm = this;

      $scope.search = function(){
        console.log($scope.BloodGroup);
      }

  }

})();
