'use strict';

angular.module('hungryApp')
  .controller('SignupCtrl', function (Auth, $location) {
    var cl = this;

    cl.user = {};
    cl.errors = {};

    cl.register = function (form) {
      cl.submitted = true;

      if (form.$valid) {
        Auth.createUser({
          name: cl.user.name,
          email: cl.user.email,
          password: cl.user.password
        })
          .then(function () {
            // Account created, redirect to home
            $location.path('/');
          })
          .catch(function (err) {
            err = err.data;
            cl.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function (error, field) {
              form[field].$setValidity('mongoose', false);
              cl.errors[field] = error.message;
            });
          });
      }
    };

  });
