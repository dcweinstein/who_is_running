'use strict';

/**
 * @ngdoc function
 * @name webdevApp.controller:CandidatesCtrl
 * @description
 * # CandidatesCtrl
 * Controller of the webdevApp
 */
angular.module('webdevApp')
  .controller('CandidatesCtrl', function ($scope) {
    $scope.candidates = [
      {name: 'Hilary Clinton', party: 'Democrat', position: 'Former Secretary of State', img: 'images/HC.png', declaredDate: '04/12/2015'},
      {name: 'Ted Cruz', party: 'Republican', position: 'Texas Senator', img: 'images/TC.jpg', declaredDate: '03/23/2015'},
      {name: 'Rand Paul', party: 'Republican', position: 'Kentucky Senator', img: 'images/RP.jpg', declaredDate: '04/07/2015'},
      {name: 'Marco Rubio', party: 'Republican', position: 'Florida Senator', img: 'images/MR.jpg', declaredDate: '04/13/2015'}
    ];
  });
