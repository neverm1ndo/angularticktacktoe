(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('crossnullsCtrl', ['$scope', crossnullsCtrl]);

  function crossnullsCtrl($scope) {
    console.log('Crossnulls controller is working...');
    console.log('Added array with cells...');
    console.log(states);
    console.log('Game is started...');
    console.log('Turns left = ' + turnsLeft);
  };
})();
