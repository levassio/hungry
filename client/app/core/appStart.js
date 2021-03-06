"use strict";

angular.module('hungryApp')
  .factory('AppStart', ['DishRepo', 'OrderRepo', 'UserRepo', '$rootScope', '$q',
    function (DishRepo, OrderRepo, UserRepo, $rootScope, $q) {

      var start = function () {

        $q.all([
          DishRepo.ready,
          OrderRepo.ready,
          UserRepo.ready
        ])
          .then(function () {
            $rootScope.app_ready = true;
          })
          .catch(function (reason) {
            alert(JSON.stringify(reason));            //todo: log error better
          });
      };

      return {
        start: start
      };
    }]);

