'use strict';

describe('Directive: playerInformation', function () {

  // load the directive's module
  beforeEach(module('blackjackApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<player-information></player-information>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('player');
  }));
});
