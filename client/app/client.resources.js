'use strict';

angular.module('hungryApp')
  .factory('Dish', ['$resource', function ($resource) {
    return $resource('/api/dishes/:dishId', { dishID: '@id' });
  }]);
