'use strict';

angular.module('hungryApp')
  .controller('DishesCtrl', function (DishRepo) {
    var cl = this;

    cl.currentDish = DishRepo.createNew();
    cl.dishes = DishRepo.all;

    var handleError = function (reason) {
      alert(JSON.stringify(reason.data));  //todo handle better
    };

    cl.save = function () {
      DishRepo.validateAndSave(cl.currentDish)
        .then(function () {
          cl.currentDish = DishRepo.createNew();
        })
        .catch(handleError);
    };

    cl.delete = function () {
      DishRepo.delete(cl.currentDish)
        .catch(handleError);
    };
  });
