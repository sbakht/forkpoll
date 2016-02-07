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
      var id = $routeParams.id;
      var polls = PollFactory.getPolls();

      polls.$loaded().then(function(result) {
        $scope.poll = result.$getRecord(id);
        calculateTotalVotes();
        polls.$watch(calculateTotalVotes);
      }, function(error) {
        console.log("error: " + error);
      });


      function calculateTotalVotes() {
        var options = $scope.poll.options;
        $scope.totalVotes = 0;
        for(var i = 0; i < options.length; i++) {
             $scope.totalVotes += options[i].votes; 
        } 
      }
  });
