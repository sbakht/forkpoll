'use strict';

/**
 * @ngdoc service
 * @name strawpollApp.PollFactory
 * @description
 * # PollFactory
 * Factory in the strawpollApp.
 */
angular.module('strawpollApp')
  .factory('PollFactory', function ($firebaseArray) {

    var ref = new Firebase("https://forkpoll.firebaseio.com");
    var polls = $firebaseArray(ref);
    
    var getPolls = function() {
        return $firebaseArray(ref);
    };

    var addPoll = function(poll) {
        return polls.$add(poll);
    };

    var removePoll = function(poll) {
        var index = polls.indexOf(poll);
        if(index !== -1) {
            polls.splice(index, 1);
        }
    };

    return {
      polls: polls,
      getPolls: getPolls,
      addPoll: addPoll,
      removePoll: removePoll
    };
  });
