'use strict';

/**
 * @ngdoc function
 * @name webdevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webdevApp
 */
angular.module('webdevApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
