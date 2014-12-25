'use strict';

angular.module('hungryApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.orders = [];

    $http.get('/api/orders').success(function(awesomeThings) {
      $scope.orders = awesomeThings;
    });

    $scope.addOrder = function() {
      if($scope.newOrder === '') {
        return;
      }
      $http.post('/api/orders', { name: $scope.newOrder });
      $scope.newOrder = '';
    };

    $scope.deleteOrder = function(order) {
      $http.delete('/api/orders/' + order._id);
    };
  });
