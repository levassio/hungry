'use strict';

angular.module('hungryApp')
  .controller('DishesCtrl', function (DishRepo) {
    var cl = this;

    cl.currentDish = DishRepo.createNew();
    cl.dishes = DishRepo.all;
    cl.rollbackDish = {};

    cl.setActiveDish = function (dish){
      angular.copy(dish, cl.rollbackDish);
      cl.currentDish = dish;
    };

    cl.save = function () {
      DishRepo.validateAndSave(cl.currentDish)
        .then(handleSuccess)
        .catch(handleError);
    };

    cl.delete = function () {
      DishRepo.delete(cl.currentDish)
        .then(handleSuccess)
        .catch(handleError);
    };

    var handleError = function (reason) {
      alert(JSON.stringify(reason.data));  //todo handle better
      if(cl.rollbackDish){
        angular.copy(cl.rollbackDish, cl.currentDish);
      }
    };

    var handleSuccess = function () {
      cl.currentDish = DishRepo.createNew();
      cl.rollbackDish = {};
    };
  });
