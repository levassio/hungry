'use strict';

angular.module('hungryApp')
  .controller('OrdersCtrl',['Auth','OrderRepo','DishRepo',
    function (Auth, OrderRepo, DishRepo) {
      var cl = this;

      cl.currentOrder = createNewOrder();
      cl.orders = OrderRepo.all;
      cl.rollbackOrder = {};
      cl.dishes = DishRepo.all;

      cl.setActiveOrder = function (order){
        angular.copy(order, cl.rollbackOrder);
        cl.currentOrder = order;
      };

      cl.save = function () {
        OrderRepo.validateAndSave(cl.currentOrder)
          .then(handleSuccess)
          .catch(handleError);
      };

      cl.delete = function () {
        OrderRepo.delete(cl.currentOrder)
          .then(handleSuccess)
          .catch(handleError);
      };

      function createNewOrder() {
        var result = OrderRepo.createNew();
        result._user = Auth.getCurrentUser()._id;
        return result;
      };

      var handleError = function (reason) {
        alert(JSON.stringify(reason.data));  //todo handle better
        if(cl.rollbackOrder){
          angular.copy(cl.rollbackOrder, cl.currentOrder);
        }
      };

      var handleSuccess = function () {
        cl.currentOrder = createNewOrder();
        cl.rollbackOrder = {};
      };
  }]);
