'use strict';

angular.module('hungryApp')
  .controller('OrdersCtrl', function ($scope, Auth, $http) {

    $scope.newOrder = {};
    $scope.orders = [];
    $scope.dishes = [];

    function reloadOrders() {
      $http.get('/api/orders').then(function success(results) {
        $scope.orders = results.data;
      });
    }

    function reloadDishes() {
      $http.get('/api/dishes').then(function success(results) {
        $scope.dishes = results.data;
        reloadOrders();
      });
    }

    reloadDishes();

    $scope.addOrder = function () {
      $scope.newOrder._user = Auth.getCurrentUser()._id;

      $http
        .post('api/orders',$scope.newOrder)
        .then(function success() {
          $scope.newOrder = {};
          reloadOrders();
        });
      return false;
    };

  });
