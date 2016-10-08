app.directive("boardNew",  [ "boardService", function(boardService) {
  return {
    templateUrl:"templates/boards/new.html",
    scope: false,
    restrict: "E",
    link: function(scope) {
      scope.createNewBoard = function() {
        boardService.createBoard(scope.newBoard)
      }
    }
  }
}]);