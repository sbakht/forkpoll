'use strict';

describe('Directive: pollInputs', function () {

  // load the directive's module
  beforeEach(module('strawpollApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poll-inputs></poll-inputs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pollInputs directive');
  }));
});
