'use strict';

/**
 * @ngdoc function
 * @name webdevApp.controller:CandidatesCtrl
 * @description
 * # CandidatesCtrl
 * Controller of the webdevApp
 */
angular.module('webdevApp')
  .controller('CandidatesWithPartyCtrl', function ($scope, $routeParams) {
    $scope.candidates = [
      {name: 'Hilary Clinton', party: 'Democrat', position: 'Former Secretary of State', img: 'images/HC.png'},
      {name: 'Ted Cruz', party: 'Republican', position: 'Texas Senator', img: 'images/TC.jpg'},
      {name: 'Rand Paul', party: 'Republican', position: 'Kentucky Senator', img: 'images/RP.jpg'},
      {name: 'Marco Rubio', party: 'Republican', position: 'Florida Senator', img: 'images/MR.jpg'}
    ];
    $scope.paramParty = {party: $routeParams.party};
  });