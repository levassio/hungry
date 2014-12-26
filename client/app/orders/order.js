'use strict';

angular.module('hungryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/',
        templateUrl: 'app/orders/orders.html',
        controller: 'OrdersCtrl'
      });
  });
