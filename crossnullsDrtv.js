(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .directive('crossnulls', crossnullsDrtv);

  function crossnullsDrtv() {
    return {
      scope: {
      },
      restrict: 'E',
      controller: 'crossnullsCtrl',
      templateUrl: 'crossnulls.html'
    };
  }
})();
