app.controller("boardsShowCtrl", ["board", "$scope", "$state", "boardService", function(board, $scope, $state, boardService) {

  $scope.editing = { name: false }

  $scope.updateBoardName = function() {
    $scope.board.update({name: $scope.board.name})
    $scope.editing.name = !$scope.editing.name

  }

  $scope.changeEditingName = function() {
    $scope.editing.name = !$scope.editing.name
  }

  $scope.board = board;

  $scope.deleteBoard = function() {
    $scope.board.remove().then(function() {
      boardService.deleteBoard(board.id)
      return $state.go('boards')
    })
  }
}])