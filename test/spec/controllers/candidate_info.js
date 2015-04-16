'use strict';

describe('Controller: CandidateInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('webdevApp'));

  var CandidateInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateInfoCtrl = $controller('CandidateInfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
