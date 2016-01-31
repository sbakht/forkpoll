'use strict';

/**
 * @ngdoc service
 * @name strawpollApp.PollFactory
 * @description
 * # PollFactory
 * Factory in the strawpollApp.
 */
angular.module('strawpollApp')
  .factory('PollFactory', function () {

    var polls = [];
    
    var addPoll = function(poll) {
        polls.push(poll);
    }

    var removePoll = function(poll) {
        var index = polls.indexOf(poll);
        if(index != -1) {
            polls.splice(index, 1);
        }
    }

    return {
      polls: polls,
      addPoll: addPoll,
      removePoll: removePoll
    };
  });
