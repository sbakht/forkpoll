'use strict';

/**
 * @ngdoc function
 * @name strawpollApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the strawpollApp
 */
angular.module('strawpollApp')
  .controller('MainCtrl', function ($scope, $location, PollFactory) {
      $scope.newPoll = {};
      $scope.inputs = [{},{},{}];

      $scope.createPoll = function() {
         var poll = { id: makeId(), options: [] };
         for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].text != '') {
                poll.options.push({ text: $scope.inputs[i].text, votes: 0});
            }
         }
         PollFactory.addPoll(poll);
         $location.path("/" + poll.id);
      }

      function makeId()
      {
          var text = "";
          var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

          for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
      }


  });
