'use strict';

angular.module('hungryApp')
  .controller('LoginCtrl', function (Auth, $location) {
    var vm = this;

    vm.user = {};
    vm.errors = {};

    vm.login = function (form) {
      vm.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: vm.user.email,
          password: vm.user.password
        })
          .then(function () {
            $location.path('/');
          })
          .catch(function (err) {
            vm.errors.other = err.message;
          });
      }
    };

  });
