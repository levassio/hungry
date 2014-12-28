'use strict';

angular.module('hungryApp')
  .factory('DishRepo', ['$resource', 'Repo', function ($resource, Repo) {

    var res = $resource('/api/dishes/:id', {}, {
      update: {
        method: 'PUT'
      }
    });

    return new Repo(res);li
  }])

  .factory('Order', ['$resource', function ($resource) {
    return $resource('/api/orders/:orderId', { orderID: '@id' });
  }]);
