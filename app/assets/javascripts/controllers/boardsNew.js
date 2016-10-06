app.controller("boardsNewCtrl", ["$scope", "boardService", "boards", function($scope, boardService, boards){

  $scope.makeNewBoard = function() {
    boards.create($scope.newBoard)
  }
}]);