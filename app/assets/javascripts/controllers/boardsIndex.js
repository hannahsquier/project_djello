app.controller("boardsIndexCtrl", ["$scope","boards", "boardService", function($scope, boards, boardService) {

  boardService.fillBoards(boards)
  $scope.boards = boardService.getBoards();

}]);