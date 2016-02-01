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

    var polls = [
        {
            id: 'abc123', 
            title: "Which option is your favorite?",
            options: [
                {text:"option 1", votes: 0}, 
                {text:"option 2", votes: 3}, 
                {text:"option 3", votes: 2}
            ]
        }
    ];
    
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
