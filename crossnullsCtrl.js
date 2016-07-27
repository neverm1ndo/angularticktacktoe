(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('crossnullsCtrl', ['$scope', crossnullsCtrl]);

  function crossnullsCtrl($scope) {
    console.log('Crossnulls controller is working...');
    $scope.field = [  //Cells Array
      {'cellnum': '1'},
      {cellnum: 2},
      {cellnum: 3},
      {cellnum: 4},
      {cellnum: 5},
      {cellnum: 6},
      {cellnum: 7},
      {cellnum: 8},
      {cellnum: 9}
    ];
    console.log('Added array with cells...');
    console.log('Turn = ' + turn + ' - waiting for x turn');
  };
})();
