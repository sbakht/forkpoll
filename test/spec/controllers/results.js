'use strict';

describe('Controller: ResultsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('strawpollApp'));

  var ResultsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsctrlCtrl = $controller('ResultsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
