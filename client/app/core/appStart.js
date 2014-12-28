"use strict";

angular.module('hungryApp')
  .factory('AppStart', function (Dish, Order, $rootScope, $q) {

      var start = function () {
        var deferredDishes = $q.defer();
        var deferredOrders = $q.defer();

        var dishes = Dish.query(function () {
          deferredDishes.resolve(dishes);
        });

        var orders = Order.query(function () {
          deferredOrders.resolve(orders);
        });

        $q.all([deferredDishes.promise, deferredOrders.promise])
          .then(function () {
            $rootScope.app_ready = true;
          })
          .catch(function () {
            //todo: log error
          });
      };

      return {
        start: start
      };
    });

