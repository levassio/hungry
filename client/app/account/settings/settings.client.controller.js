'use strict';

angular.module('hungryApp')
  .controller('SettingsCtrl', function (User, Auth) {
    var vm = this;

    vm.errors = {};

    vm.changePassword = function (form) {
      vm.submitted = true;
      if (form.$valid) {
        Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
          .then(function () {
            vm.message = 'Password successfully changed.';
          })
          .catch(function () {
            form.password.$setValidity('mongoose', false);
            vm.errors.other = 'Incorrect password';
            vm.message = '';
          });
      }
    };
  });
