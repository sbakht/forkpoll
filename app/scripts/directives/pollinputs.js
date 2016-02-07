'use strict';

/**
 * @ngdoc directive
 * @name strawpollApp.directive:pollInputs
 * @description
 * # pollInputs
 */
angular.module('strawpollApp')
  .directive('pollInputs', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
          $(element).keydown(function(e) {
            if($(this).hasClass("last") && (e.which === 13 || e.which === 9)) {
                scope.inputs.push({});
                scope.$apply();
            }
          });
      }
    };
  });
