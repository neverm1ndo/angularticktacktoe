(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .directive('crossnulls', crossnullsView);

  function projectShortView() {
    return {
      scope: {
        onClick: '=?',
        project: '=?'
      },
      restrict: 'E',
      controller: 'crossnulsCtrl',
      templateUrl: 'ctossnuls.html'
    };
  }
})();
