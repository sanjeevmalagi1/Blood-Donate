(function() {
  'use strict';

  angular
    .module('app.Templates')
    .directive('sidebar', sidebar);

  function sidebar() {
    return {
      templateUrl: 'app/Templates/sidebar/sidebar.html',
      restrict: 'E',
      scope: {},
      controller: SidebarController,
      controllerAs: 'vm'
    };
  }

  SidebarController.$inject = [];

  function SidebarController() {
    var vm = this;

    
  }

})();
