'use strict';

angular.module('hungryApp')
  .controller('AdminCtrl', function (Auth, User) {
    var vm = this;

    vm.users = User.query();

    vm.delete = function (user) {
      User.delete({ id: user._id });  //todo: use callback to be sure it's deleted
      angular.forEach(vm.users, function (u, i) {
        if (u === user) {
          vm.users.splice(i, 1);
        }
      });
    };
  });
