'use strict';

angular.module('hungryApp')
  .controller('AdminCtrl', function (Auth, User) {
    var cl = this;

    cl.users = User.query();

    cl.delete = function (user) {
      User.delete({ id: user._id });  //todo: use callback to be sure it's deleted
      angular.forEach(cl.users, function (u, i) {
        if (u === user) {
          cl.users.splice(i, 1);
        }
      });
    };
  });
