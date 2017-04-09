(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$scope', '$location', '$state','authService'];

  function AuthController($scope, $location, $state, authService) {
    var vm = this;
    console.log(authService.isLoggedIn());
    var provider = new firebase.auth.GoogleAuthProvider();
    $scope.LogInGoogle= function(){
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        $state.go('Dashboard')
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }

    vm.error = null;

    vm.register = register;
    vm.login = login;

    function register(user) {
      return authService.register(user)
        .then(function() {
          return vm.login(user);
        })
        .then(function() {
          return authService.sendWelcomeEmail(user.email);
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function login(user) {
      console.log(user);
      return authService.login(user)
        .then(function() {
          $location.path('/waitlist');
        })
        .catch(function(error) {
          vm.error = error;
        });
    }
  }

})();
