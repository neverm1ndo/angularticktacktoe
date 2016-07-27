;(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('myCellCtrl', ['$scope', myCellCtrl]);

  function myCellCtrl($scope) {
  /*  if (turn == true) {
    $scope.clickQueue = function() {
        $scope.state = "x";
        turn = false;
        console.log('turn=' + turn);
      }
    };
    if (turn == false) {
    $scope.clickQueue = function() {
        $scope.state = "o";
        turn = true;
        console.log('turn=' + turn);
      }
    };*/
    var filled = false;
      $scope.clickQueue = function() {
        if (turn === 0) {
          if (filled == false) {
          $scope.state = "o";
          turn = 1;
          filled = true;
          console.log('Turn = ' + turn);
          console.log('Cell is filled = ' + filled);
          }
        }
      else {
        if (filled == false) {
          $scope.state = "x";
          turn = 0;
          filled = true;
          console.log('Turn = ' + turn);
          console.log('Cell is filled = ' + filled);
          }
        };
      };
    };
})();
