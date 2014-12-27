'use strict';

angular.module('hungryApp')
  .controller('LoginCtrl', function (Auth, $location) {
    var cl = this;

    cl.user = {};
    cl.errors = {};

    cl.login = function (form) {
      cl.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: cl.user.email,
          password: cl.user.password
        })
          .then(function () {
            $location.path('/');
          })
          .catch(function (err) {
            cl.errors.other = err.message;
          });
      }
    };

  });
