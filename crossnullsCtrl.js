(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('crossnullsCtrl', ['$scope', crossnullsCtrl]);

  function crossnullsCtrl($scope) {
    console.log('Crossnulls controller is working...');
    console.log('Added array with cells...');
    console.log('Game is started...');
    console.log($scope.field[1]);
    console.log($scope.field[2]);
  };
})();
