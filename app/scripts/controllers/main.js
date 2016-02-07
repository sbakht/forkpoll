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
         var poll = {title: $scope.title, options: [] };
         for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].text && $scope.inputs[i].text !== '') {
                poll.options.push({ text: $scope.inputs[i].text, votes: 0});
            }
         }

         PollFactory.addPoll(poll).then(function(ref) {
           var id = ref.key();
           $location.path("/" + id);
         });
      };

  });
