'use strict';

angular.module('hungryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/',
        templateUrl: 'app/orders/orders.html',
        controller: 'OrdersCtrl',
        controllerAs: 'vm'
      })
      .state('dishes', {
        url: '/dishes',
        templateUrl: 'app/dishes/dish.html',
        controller: 'DishesCtrl',
        controllerAs: 'vm'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'vm'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'vm',
        authenticate: true
      });
  });
