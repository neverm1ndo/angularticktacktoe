(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .directive('myCell', myCellDrtv);

  function myCellDrtv() {
    return {
      scope: {
        state: '=?'
      },
      restrict: 'E',
      controller: 'myCellCtrl',
      templateUrl: 'myCellTmpl.html'
    };
  }
})();
