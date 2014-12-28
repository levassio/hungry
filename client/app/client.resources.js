'use strict';

angular.module('hungryApp')
  .factory('DishRepo', ['$resource', 'Repo', function ($resource, Repo) {

    var res = $resource('/api/dishes/:id', {}, {
      update: {
        method: 'PUT'
      }
    });

    return new Repo(res);
  }])

  .factory('OrderRepo', ['$resource', 'Repo', function ($resource, Repo) {

    var res = $resource('/api/orders/:id', {}, {
      update:{
        method: 'PUT'
      }
    });

    return new Repo(res);
  }]);
