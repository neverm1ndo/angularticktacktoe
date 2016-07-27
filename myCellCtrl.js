;(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('myCellCtrl', ['$scope', myCellCtrl]);

  function myCellCtrl($scope) {
    var filled = false;
      $scope.clickQueue = function() {
        switch (turn) {
          case 0:
          if (filled == false) {
          $scope.state = "o";
          turn = 1;
          filled = true;
          console.log('Turn = ' + turn);
    //      console.log('Turned on ' + $scope.cellnum[0]);
          console.log('Cell is filled = ' + filled);
        }
      case 1 :
        if (filled == false) {
          $scope.state = "x";
          turn = 0;
          filled = true;
          console.log('Turn = ' + turn);
  //        console.log('Turned on ' + $scope.cellnum[0]);
          console.log('Cell is filled = ' + filled);
          }
        };
      };
    };
})();
