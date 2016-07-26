(function() {
  'use strict';
  angular
  .module('Crossnulls')
  .controller('crossnullsCtrl', ['$scope', '$state', crossnullsCtrl]);

 function crossnullsCtrl($scope) {
      if (turn == true) {
        $scope.clickturn = function() {
          $scope.turn = function() {
          turn = false;
          return "x";
        };
      };
    }
    else {
      $scope.clickturn = function() {
        $scope.turn = function() {
          turn = true;
          return "o";
        };
      };
    };
    });

})();
