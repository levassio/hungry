'use strict';

angular.module('hungryApp')
  .controller('OrdersCtrl',['Auth','OrderRepo','DishRepo',
    function (Auth, OrderRepo, DishRepo) {
      var cl = this;

      cl.currentOrder = OrderRepo.createNew();
      cl.orders = OrderRepo.all;
      cl.rollbackOrder = {};
      cl.dishes = DishRepo.all;

      cl.setActiveOrder = function (order){
        angular.copy(order, cl.rollbackOrder);
        cl.currentOrder = order;
      };

      cl.save = function () {
        cl.currentOrder._user = Auth.getCurrentUser();
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
