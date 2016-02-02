'use strict';

/**
 * @ngdoc function
 * @name strawpollApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the strawpollApp
 */
angular.module('strawpollApp')
  .controller('ResultsCtrl', function ($scope, $routeParams, PollFactory) {
      $scope.poll = {};
      var id = $routeParams.id;
      var polls = PollFactory.polls;
      for(var i = 0; i < polls.length; i++) {
          if(polls[i].id == id) {
              $scope.poll = polls[i];
              break;
          }
      }

      var options = $scope.poll.options;
      $scope.totalVotes = 0;
      for(var i = 0; i < options.length; i++) {
           $scope.totalVotes += options[i].votes; 
      } 
  });
