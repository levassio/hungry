'use strict';

angular.module('hungryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/',
        templateUrl: 'app/orders/orders.html',
        controller: 'OrdersCtrl',
        controllerAs: 'cl'
      })
      .state('dishes', {
        url: '/dishes',
        templateUrl: 'app/dishes/dish.html',
        controller: 'DishesCtrl',
        controllerAs: 'cl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'cl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'cl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'cl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'cl',
        authenticate: true
      });
  });
