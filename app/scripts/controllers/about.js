'use strict';

/**
 * @ngdoc function
 * @name webdevApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webdevApp
 */
angular.module('webdevApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
