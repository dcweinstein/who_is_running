'use strict';

/**
 * @ngdoc overview
 * @name webdevApp
 * @description
 * # webdevApp
 *
 * Main module of the application.
 */
angular
  .module('webdevApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/candidates.html',
        controller: 'CandidatesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/candidates', {
        templateUrl: 'views/candidates.html',
        controller: 'CandidatesCtrl'
      })
      .when('/candidates/:party', {
        templateUrl: 'views/candidates.html',
        controller: 'CandidatesWithPartyCtrl'
      })
      .when('/candidate_info', {
        templateUrl: 'views/candidate_info.html',
        controller: 'CandidateInfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
