'use strict';

describe('Service: PollFactory', function () {

  // load the service's module
  beforeEach(module('strawpollApp'));

  // instantiate service
  var PollFactory;
  beforeEach(inject(function (_PollFactory_) {
    PollFactory = _PollFactory_;
  }));

  it('should do something', function () {
    expect(!!PollFactory).toBe(true);
  });

});
