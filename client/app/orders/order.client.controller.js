'use strict';

angular.module('hungryApp')
  .controller('OrdersCtrl', function (Auth, $http) {
    var cl = this;

    cl.newOrder = {};
    cl.orders = [];
    cl.dishes = [];

    function reloadOrders() {
      $http.get('/api/orders').then(function success(results) {
        cl.orders = results.data;
      });
    }

    function reloadDishes() {
      $http.get('/api/dishes').then(function success(results) {
        cl.dishes = results.data;
        reloadOrders();
      });
    }

    reloadDishes();

    cl.save = function () {
      cl.newOrder._user = Auth.getCurrentUser()._id;

      $http
        .post('api/orders',cl.newOrder)
        .then(function success() {
          cl.newOrder = {};
          reloadOrders();
        });
      return false;
    };

  });
