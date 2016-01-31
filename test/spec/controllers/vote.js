'use strict';

describe('Controller: VotectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('strawpollApp'));

  var VotectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VotectrlCtrl = $controller('VotectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VotectrlCtrl.awesomeThings.length).toBe(3);
  });
});
