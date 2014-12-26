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
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
