app.controller("boardsShowCtrl", ["board", "$scope", "$state", "boardService", function(board, $scope, $state, boardService) {
  $scope.board = board;

  $scope.deleteBoard = function() {
    $scope.board.remove().then(function(response) {
      return new Promise (function() { boardService.deleteBoard(response.id)}).then(function() {

        return $state.go('boards')

      })
    })
  }
}])