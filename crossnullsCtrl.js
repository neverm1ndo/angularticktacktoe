(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('crossnullsCtrl', ['$scope', crossnullsCtrl]);

  function crossnullsCtrl($scope) {
    console.log('Crossnulls controller is working...');
    $scope.field = [  //Cells Array
      {cell: '1'},
      {cell: '2'},
      {cell: '3'},
      {cell: '4'},
      {cell: '5'},
      {cell: '6'},
      {cell: '7'},
      {cell: '8'},
      {cell: '9'}
    ];
    console.log('Added array with cells...');
    console.log('Turn = ' + turn + ' - waiting for x turn');
/*    while (turn === 0) {
      console.log('Waiting for X-player turn...');
      break;
    }
    while (turn === 1) {
      console.log('Waiting for O-player turn...')
      break;
    }*/
  };
})();
