;(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('myCellCtrl', ['$scope', myCellCtrl]);

  function myCellCtrl($scope) {
    var filled = false;
    var track;
      $scope.clickQueue = function() {
        if( win !== true) {
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
          states[$scope.$index] = $scope.state;
          console.log(states);
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
          states[$scope.$index] = $scope.state;
          console.log(states);
          }
        };
      }
        function checkWin(){
          if (win !== true){
          if ((states[0] == states[1]) && (states[0] == states[2]) == true) {
            console.log(states[0] + ' WIN!');
            winLine = {"top": "54px", "bottom":"auto"};
            win = true;
          }
          if ((states[3] == states[4]) && (states[3] == states[5]) == true) {
            console.log(states[3] + ' WIN!');
            winLine = {"top": "0", "bottom":"0"};
            win = true;
          }
          if ((states[6] == states[7]) && (states[6] == states[8]) == true) {
            console.log(states[6] + ' WIN!');
            winLine = {"top": "auto", "bottom":"54px"};
            win = true;
          }
          if ((states[0] == states[3]) && (states[0] == states[6]) == true) {
            console.log(states[0] + ' WIN!');
            winLine = {"left":"-184px","right":"auto", "transform":"rotate(90deg)"};
            win = true;
          }
          if ((states[1] == states[4]) && (states[1] == states[7]) == true) {
            console.log(states[1] + ' WIN!');
            winLine = {"left":"-80px","right":"0", "transform":"rotate(90deg)"};
            win = true;
          }
          if ((states[2] == states[5]) && (states[2] == states[8]) == true) {
            console.log(states[2] + ' WIN!');
            winLine = {"left":"auto","right":"-184px", "transform":"rotate(90deg)"};
            win = true;
          }
          if ((states[0] == states[4]) && (states[0] == states[8]) == true) {
            console.log(states[0] + ' WIN!');
            winLine = {"transform":"rotate(45deg)"};
            win = true;
          }
          if ((states[2] == states[4]) && (states[4] == states[6]) == true) {
            console.log(states[2] + ' WIN!');
            winLine = {"transform":"rotate(-45deg)"};
            win = true;
          }
        };
        if ((turnsLeft == 0) && (win !== true)) {
          console.log('Nobody wins...Click on "Restart" to try again.')
          win = true;
          winLine = {"opacity":"0"};
        }
        };
        checkWin();
      };
    };
})();
