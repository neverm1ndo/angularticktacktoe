;(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .directive('myCell', myCellDrtv);

  function myCellDrtv() {
    return {
      scope: {
        state: '=?',
        cell: '='
      },
      controller: 'myCellCtrl',
      templateUrl: 'myCellTmpl.html'
    };
  }
})();
