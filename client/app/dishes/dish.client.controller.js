'use strict';

angular.module('hungryApp')
  .controller('DishesCtrl', ['DishRepo', 'Focus', function (DishRepo, Focus) {
    var vm = this;

    vm.hh = "init";

    vm.currentDish = DishRepo.createNew();
    vm.dishes = DishRepo.all;
    vm.rollbackDish = {};

    vm.setActiveDish = function (dish) {
      angular.copy(dish, vm.rollbackDish);
      vm.currentDish = dish;
    };

    vm.hover = function (hovered) {
      angular.forEach(vm.dishes, function (dish) {
        dish.hover = dish == hovered;
      });
    };

    vm.save = function () {
      DishRepo.validateAndSave(vm.currentDish)
        .then(handleSuccess)
        .catch(handleError);
    };

    vm.delete = function (dish) {
      DishRepo.delete(dish)
        .then(handleSuccess)
        .catch(handleError);
    };

    var handleError = function (reason) {
      alert(JSON.stringify(reason.data));  //todo handle better
      if (vm.rollbackDish) {
        angular.copy(vm.rollbackDish, vm.currentDish);
      }
    };

    var handleSuccess = function () {
      vm.currentDish = DishRepo.createNew();
      vm.rollbackDish = {};
      Focus('dishNameInput');
    };
  }]);
