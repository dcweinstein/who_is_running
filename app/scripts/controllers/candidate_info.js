'use strict';

/**
 * @ngdoc function
 * @name webdevApp.controller:CandidateInfoCtrl
 * @description
 * # CandidateInfoCtrl
 * Controller of the webdevApp
 */
angular.module('webdevApp')
  .controller('CandidateInfoCtrl', function ($scope, $routeParams, $http) {
 		$http.get('http://localhost:8080/api/candidates/' + $routeParams.id).
    success(function(data) {
        $scope.issues = data.positions;
        $scope.candidate = data.name;
    });
  });
