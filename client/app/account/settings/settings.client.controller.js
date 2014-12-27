'use strict';

angular.module('hungryApp')
  .controller('SettingsCtrl', function (User, Auth) {
    var cl = this;

    cl.errors = {};

    cl.changePassword = function (form) {
      cl.submitted = true;
      if (form.$valid) {
        Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
          .then(function () {
            cl.message = 'Password successfully changed.';
          })
          .catch(function () {
            form.password.$setValidity('mongoose', false);
            cl.errors.other = 'Incorrect password';
            cl.message = '';
          });
      }
    };
  });
