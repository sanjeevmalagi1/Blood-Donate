(function() {
  'use strict';

  angular
    .module('app.Templates')
    .directive('header', header);

  function header() {
    return {
      templateUrl: 'app/Templates/header/header.html',
      restrict: 'E',
      scope: {},
      controller: HeaderController,
      controllerAs: 'vm'
    };
  }

  HeaderController.$inject = [];

  function HeaderController() {
    var vm = this;

    
  }

})();
