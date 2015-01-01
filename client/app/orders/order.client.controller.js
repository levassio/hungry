'use strict';

angular.module('hungryApp')
  .controller('OrdersCtrl',['Auth', 'OrderRepo', 'DishRepo', 'UserRepo',
    function (Auth, OrderRepo, DishRepo, UserRepo) {
      var cl = this;

      cl.currentOrder = OrderRepo.createNew();
      cl.orders = OrderRepo.all;
      cl.rollbackOrder = {};
      cl.dishes = DishRepo.all;

      cl.getDish = function (order) {
        return _.find(DishRepo.all, function (dish) {
          return dish._id == order._dish;
        });
      };

      cl.getUser = function(order){
        return _.find(UserRepo.all, function (user) {
          return user._id == order._user;
        });
      };

      cl.setActiveOrder = function (order){
        angular.copy(order, cl.rollbackOrder);
        cl.currentOrder = order;
      };

      cl.save = function () {

        cl.currentOrder._user = Auth.getCurrentUser()._id;
        OrderRepo.validateAndSave(cl.currentOrder)
          .then(handleSuccess)
          .catch(handleError);

      };

      cl.delete = function () {
        OrderRepo.delete(cl.currentOrder)
          .then(handleSuccess)
          .catch(handleError);
      };

      var handleError = function (reason) {
        alert(JSON.stringify(reason.data));  //todo handle better
        if(cl.rollbackOrder){
          angular.copy(cl.rollbackOrder, cl.currentOrder);
        }
      };

      var handleSuccess = function () {
        cl.currentOrder = OrderRepo.createNew();
        cl.rollbackOrder = {};
      };
  }]);
