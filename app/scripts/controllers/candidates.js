'use strict';

/**
 * @ngdoc function
 * @name webdevApp.controller:CandidatesCtrl
 * @description
 * # CandidatesCtrl
 * Controller of the webdevApp
 */
angular.module('webdevApp')
  .controller('CandidatesCtrl', function ($scope, $http) {
    $http.get('http://localhost:8080/api/candidates').
        success(function(data) {
            $scope.candidates = data;
        });
  });
