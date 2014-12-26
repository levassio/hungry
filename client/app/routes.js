'use strict';

angular.module('hungryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/',
        templateUrl: 'app/orders/orders.html',
        controller: 'OrdersCtrl'
      })
      .state('dishes', {
        url: '/dishes',
        templateUrl: 'app/dishes/dish.html',
        controller: 'DishesCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
