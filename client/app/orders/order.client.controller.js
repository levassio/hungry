'use strict';

angular.module('hungryApp')
  .controller('OrdersCtrl', function (Auth, Order, Dish) {
    var cl = this;

    cl.newOrder = new Order();
    cl.orders = Order.query();
    cl.dishes = Dish.query();

    cl.save = function () {
      cl.newOrder._user = Auth.getCurrentUser()._id;

      cl.newOrder.$save(function () {
        cl.orders.push(cl.newOrder);
        cl.newOrder = new Order();
      });

      cl.orders = Order.query();
      return false;
    };

  });
