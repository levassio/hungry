"use strict";

angular.module('hungryApp')
  .factory('AppStart', ['DishRepo', 'Order', '$rootScope', '$q',
    function (DishRepo, Order, $rootScope, $q) {

      var start = function () {
        var p2 = $q(Order.query);

        $q.all([DishRepo.ready, p2])
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

