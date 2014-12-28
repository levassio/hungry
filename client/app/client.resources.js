'use strict';

angular.module('hungryApp')
  .factory('DishRepo', ['$resource', '$q', function ($resource, $q) {

    var res = $resource('/api/dishes/:id', {}, {
      update: {
        method: 'PUT'
      }
    });

    var repo = res.query();

    var create = function () {
      return new res();
    };

    var validate = function (dish) {
      return $q(function (resolve, reject) {
        if (dish) {
          resolve(); //todo: implement validation
        } else {
          reject("dish is null or undefined");
        }
      });
    };

    var save = function (dish) {
      return _.contains(repo, dish)
        ? dish.$update({ id: dish._id })
        : dish.$save(function () {
        repo.push(dish);
      });
    };

    var validateAndSave = function (dish) {
      return $q(function (resolve, reject) {
        validate(dish)
          .then(function () {
            resolve(save(dish));
          })
          .catch(reject);
      });
    };

    var remove = function (dish) {
      var deferred = $q.defer();

      return deferred.promise;
    };

    return {
      all: repo,
      ready: repo.$promise,
      createNew: create,
      validateAndSave: validateAndSave,
      delete: remove
    };

  }])
  .factory('Order', ['$resource', function ($resource) {
    return $resource('/api/orders/:orderId', { orderID: '@id' });
  }]);
