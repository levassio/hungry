'use strict';

angular.module('hungryApp')
  .controller('OrdersCtrl',['Auth', 'OrderRepo', 'DishRepo', 'UserRepo', 'Focus',
    function (Auth, OrderRepo, DishRepo, UserRepo, Focus) {
      var vm = this;

      vm.currentOrder = OrderRepo.createNew();
      vm.orders = OrderRepo.all;
      vm.rollbackOrder = {};
      vm.dishes = DishRepo.all;

      vm.getDish = function (order) {
        return _.find(DishRepo.all, function (dish) {
          return dish._id == order._dish;
        });
      };

      vm.getUser = function(order){
        return _.find(UserRepo.all, function (user) {
          return user._id == order._user;
        });
      };

      vm.setActiveOrder = function (order){
        angular.copy(order, vm.rollbackOrder);
        vm.currentOrder = order;
      };

      vm.hover = function (hovered) {
        angular.forEach(vm.orders, function (order) {
          order.hover = order == hovered;
        });
      };

      vm.save = function () {

        vm.currentOrder._user = Auth.getCurrentUser()._id;
        OrderRepo.validateAndSave(vm.currentOrder)
          .then(handleSuccess)
          .catch(handleError);

      };

      vm.delete = function (order) {
        OrderRepo.delete(order)
          .then(handleSuccess)
          .catch(handleError);
      };

      var handleError = function (reason) {
        alert(JSON.stringify(reason.data));  //todo handle better
        if(vm.rollbackOrder){
          angular.copy(vm.rollbackOrder, vm.currentOrder);
        }
      };

      var handleSuccess = function () {
        vm.currentOrder = OrderRepo.createNew();
        vm.rollbackOrder = {};
        Focus('dishNameSelect');
      };
  }]);
