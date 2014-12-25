'use strict';

describe('Controller: DishesCtrl', function () {

  // load the controller's module
  beforeEach(module('hungryApp'));

  var DishesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DishesCtrl = $controller('DishesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
