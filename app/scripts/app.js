'use strict';

/**
 * @ngdoc overview
 * @name strawpollApp
 * @description
 * # strawpollApp
 *
 * Main module of the application.
 */
angular
  .module('strawpollApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:id', {
        templateUrl: 'views/vote.html',
        controller: 'VoteCtrl',
        controllerAs: 'vote'
      })
      .when('/:id/r', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
