;(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('myCellCtrl', ['$scope', myCellCtrl]);

  function myCellCtrl($scope) {
    var filled = false;
    var track;
      $scope.clickQueue = function() {
        switch (turn) {
          case 0:
          if (filled == false) {
          $scope.state = "o";
          turn = 1;
          turnsLeft--;
          filled = true;
          console.log('Turn = ' + turn);
          console.log('Turns left = ' + turnsLeft);
          console.log($scope.state + ' on ' + ($scope.cell));
        }
      case 1 :
        if (filled == false) {
          $scope.state = "x";
          turn = 0;
          turnsLeft--;
          filled = true;
          console.log('Turn = ' + turn);
          console.log('Turns left = ' + turnsLeft);
          console.log($scope.state + ' on ' + ($scope.cell));
    //      console.log('Cell is filled = ' + filled);
          }
        };
      };
    };
})();
