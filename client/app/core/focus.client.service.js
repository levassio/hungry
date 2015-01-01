angular.module('hungryApp')

  .factory('Focus', ['$timeout', function ($timeout) {
    return function (id) {
      $timeout(function () {
        var element = document.getElementById(id);
        if (element) {
          element.focus();
        }
      });
    };
  }]);
