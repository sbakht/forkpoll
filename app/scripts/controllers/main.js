'use strict';

/**
 * @ngdoc function
 * @name strawpollApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the strawpollApp
 */
angular.module('strawpollApp')
  .controller('MainCtrl', function ($scope, PollFactory) {
      $scope.newPoll = {};
      $scope.inputs = [{},{},{}];

      $scope.createPoll = function() {
         var poll = { options: []};
         for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].text.length) {
                poll.options.push({ text: $scope.inputs[i].text, votes: 0});
            }
         }
         PollFactory.addPoll(poll);
      }
  });
