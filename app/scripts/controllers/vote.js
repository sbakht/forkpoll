'use strict';

/**
 * @ngdoc function
 * @name strawpollApp.controller:VoteCtrl
 * @description
 * # VoteCtrl
 * Controller of the strawpollApp
 */
angular.module('strawpollApp')
  .controller('VoteCtrl', function ($scope, $routeParams, $location, PollFactory) {
      $scope.poll = {};
      $scope.id = $routeParams.id;
      var polls = PollFactory.polls;
      for(var i = 0; i < polls.length; i++) {
          if(polls[i].id == $scope.id) {
              $scope.poll = polls[i];
              break;
          }
      }

      $scope.submitVote = function() {
          var options = $scope.poll.options;
          for(var i = 0; i < options.length; i++) {
              if(options[i].selected) {
                  options[i].votes++;
              }
          }
          $location.path("/" + $scope.id + "/r"); 
      }

      $scope.select = function(option) {
          deselectAll($scope.poll.options);
          option.selected = true;
      }

      function deselectAll(options) {
          for(var i = 0; i < options.length; i++) {
              options[i].selected = false;
          }
      }
      
  });
