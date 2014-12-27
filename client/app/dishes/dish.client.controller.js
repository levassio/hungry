'use strict';

angular.module('hungryApp')
  .controller('DishesCtrl', function (Dish) {
    var cl = this;

    cl.newDish = new Dish();
    cl.dishes = Dish.query();

    cl.save = function () {
      cl.newDish.$save(function () {
        cl.dishes.push(cl.newDish);
        cl.newDish = new Dish();
      });

      return false;
    };

    cl.delete = function (dish) {
      dish.delete(function () {
        _.remove(cl.dishes, dish);
      });
    };

  });
