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
          .catch(function () {
            //todo: log error
          });

        //var deferredDishes = $q.defer();
        //var deferredOrders = $q.defer();
        //
        //var dishes = Dish.query(function () {
        //  deferredDishes.resolve(dishes);
        //});
        //
        //var orders = Order.query(function () {
        //  deferredOrders.resolve(orders);
        //});
        //
        //$q.all([deferredDishes.promise, deferredOrders.promise])
        //  .then(function () {
        //    $rootScope.app_ready = true;
        //  })
        //  .catch(function () {
        //    //todo: log error
        //  });
      };

      return {
        start: start
      };
    }]);

