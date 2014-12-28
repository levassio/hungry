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
      return $q(function (resolve, reject) {
        if (_.contains(repo, dish)) {
          res.update(resolve, reject);
        }
        else {
          dish.$save(function (value) {
              resolve(value);
              repo.push(dish);
            },
            reject);
        }
      });
    };

    var validateAndSave = function (dish) {
      return $q(function (resolve, reject) {
        validate(dish)
          .then(function () {
            resolve(save(dish));
          })
          .catch(function (reason) {
            reject(reason);
          });
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
