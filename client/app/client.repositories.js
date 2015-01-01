'use strict';

angular.module('hungryApp')
  .factory('DishRepo', ['$resource', 'Repo', 'OrderRepo', function ($resource, Repo, OrderRepo) {

    var res = $resource('/api/dishes/:id', {}, {
      update: {
        method: 'PUT'
      }
    });

    return new Repo(res, [OrderRepo]);
  }])

  .factory('OrderRepo', ['$resource', 'Repo', function ($resource, Repo) {

    var res = $resource('/api/orders/:id', {}, {
      update: {
        method: 'PUT'
      }
    });

    return new Repo(res);
  }])

  .factory('UserRepo', ['$resource', 'Repo', function ($resource, Repo) {
    var res = $resource('/api/users/:id');
    return new Repo(res);
  }]);
