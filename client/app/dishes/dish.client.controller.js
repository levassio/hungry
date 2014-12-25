'use strict';

angular.module('hungryApp')
  .controller('DishesCtrl', function ($scope, $http) {
    $scope.newDish = {};

    function reloadDishes() {
      $http.get('/api/dishes').then(function success(results) {
        $scope.dishes = results.data;
      });
    }

    reloadDishes();

    $scope.saveDish = function () {
//      $event.preventDefault();
      $http
        .post('api/dishes',$scope.newDish)
        .then(function success() {
          $scope.newDish = {};
          reloadDishes();
        });
      return false;
    };

  });
