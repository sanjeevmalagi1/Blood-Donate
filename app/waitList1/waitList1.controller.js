(function() {
  'use strict';

  angular
    .module('app.waitList1')
    .controller('WaitList1Controller', WaitList1Controller);

  WaitList1Controller.$inject = ['partyService', 'user'];

  function WaitList1Controller(partyService, user) {
	console.log(partyService);
	console.log(user);
  }

})();