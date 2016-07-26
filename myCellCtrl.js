;(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('myCellCtrl', ['$scope', myCellCtrl]);

  function myCellCtrl($scope) {
    var turn = true;
    console.log('CellCtrl is working...');
    if (turn == true) {
    $scope.clickQueue = function() {
        $scope.state = "x";
        turn != true;
      }
    }
    else {
    $scope.clickQueue = function() {
        $scope.state = "o";
        turn = true;
      }
    }
  };

})();
