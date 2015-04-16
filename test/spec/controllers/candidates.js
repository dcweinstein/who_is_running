'use strict';

describe('Controller: CandidatesCtrl', function () {

  // load the controller's module
  beforeEach(module('webdevApp'));

  var CandidatesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidatesCtrl = $controller('CandidatesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
