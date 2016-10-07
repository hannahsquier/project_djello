app.controller("boardsIndexCtrl", ["$scope","boards", "boardService", function($scope, boards, boardService) {

  $scope.boards = boardService.getBoards();

}]);