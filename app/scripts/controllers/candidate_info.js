'use strict';

/**
 * @ngdoc function
 * @name webdevApp.controller:CandidateInfoCtrl
 * @description
 * # CandidateInfoCtrl
 * Controller of the webdevApp
 */
angular.module('webdevApp')
  .controller('CandidateInfoCtrl', function ($scope) {
    $scope.issues = [
      {name: 'Net Neutrality', stance: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat, nunc eu malesuada convallis, ante risus congue sapien, ut pellentesque mi ante sit amet odio. Nullam vitae metus at augue pellentesque pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui quam, commodo ut justo sit amet, vestibulum scelerisque ipsum. Curabitur et arcu aliquam purus tempus varius ac a libero. Pellentesque neque ex, egestas quis sollicitudin eget, convallis non sapien. Aliquam ultrices, ligula a gravida bibendum, lacus ex consequat dolor, at consectetur dolor dui non leo. Morbi turpis sem, interdum id metus eu, varius lobortis tortor. Vivamus sed lobortis orci. Fusce at faucibus magna, sed iaculis velit. Donec imperdiet tristique massa non lobortis. Morbi arcu ipsum, varius vitae metus nec, fermentum rhoncus enim. Sed et ante eget elit pharetra dictum. Duis congue eu est a lobortis.', votingRecord: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non orci aliquam, aliquam metus et.'},
      {name: 'U.S. Iran Relations', stance: 'ue pharetra. Interdum. Nullam dui quam, commodo ut justo sit amet, vestibulum scelerisque ipsum. Curabitur et arcu aliquam purus tempus varius ac a libero. Pellentesque neque ex, egestas quis sollicitudin eget, convallis non sapien. Aliquam ultrices, ligula a gravida bibendum, lacus ex consequat dolor, at consectetur dolor dui non leo. Morbi turpis sem, interdum id metus eu, varius lobortis tortor. Vivamus sed lobortis orci. Fusce at faucibus magna, sed iaculis velit. Donec imperdiet tristique massa non lobortis. Morbi arcu ipsum, varius vitae metus nec, fermentum rhoncus enim. Sed et ante eget elit pharetra dictum. Duis congue eu est a lobortis.', votingRecord: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non orci aliquam, aliquam metus et.'},
      {name: 'Affordable Care Act', stance: 'sus congue sapien, ut pellentesque mi ante sit amet odio. Nullam vitae metus at augue pellentesque pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui quam, commodo ut justo sit amet, vestibulum scelerisque ipsum. Curabitur et arcu aliquam purus tempus varius ac a libero. Pellentesque neque ex, egestas quis sollicitudin eget, convallis non sapien. Aliquam ultrices, ligula a gravida bibendum, lacus ex consequat dolor, at consectetur dolor dui non leo. Morbi turpis sem, interdum id metus eu, varius lobortis tortor. Vivamus sed lobortis orci. Fusce at faucibus magna, sed iaculis velit. Donec imperdiet tristique massa non lobortis. Morbi arcu ipsum, varius vitae metus nec, fermentum rhoncus enim. Sed et ante eget elit pharetra dictum. Duis congue eu est a lobortis.', votingRecord: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non orci aliquam, aliquam metus et.'}
    ];
  });
