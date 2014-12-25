'use strict';

angular.module('hungryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dishes', {
        url: '/dishes',
        templateUrl: 'app/dishes/dish.html',
        controller: 'DishesCtrl'
      });
  });
