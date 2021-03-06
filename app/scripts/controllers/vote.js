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
      var polls = PollFactory.getPolls();

      polls.$loaded().then(function(result) {
        $scope.poll = result.$getRecord($scope.id);
      }, function(error) {
        console.log("error: " + error);
      });

      $scope.submitVote = function() {
          if(isOptionSelected()) {
              incrementVote();
              $location.path("/" + $scope.id + "/r"); 
          }
      };

      function isOptionSelected() {
          var options = $scope.poll.options;
          for(var i = 0; i < options.length; i++) {
              if(options[i].selected) {
                  return true;
              }
          }
          return false;
      }

      function incrementVote() {
          var options = $scope.poll.options;
          for(var i = 0; i < options.length; i++) {
              if(options[i].selected) {
                  options[i].votes++;
                  options[i].selected = false;
              }
          }
          polls.$save($scope.poll);
      }

      $scope.selectOption = function(option) {
          deselectAllOptions($scope.poll.options);
          option.selected = true;
      };

      function deselectAllOptions(options) {
          for(var i = 0; i < options.length; i++) {
              options[i].selected = false;
          }
      }
      
  });
