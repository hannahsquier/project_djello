app.factory("boardService", ["Restangular", "$stateParams", "$state", "Auth", function(Restangular, $stateParams, $state, Auth) {
  var _boards = []

  var all = function() {
    console.log(Auth.currentUser())
    return Restangular.all("boards").getList().then(function(response) {
        return angular.copy(response, _boards)
    });
  }

  var getBoards = function() {
    return _boards;
  }

  var getBoard = function(id) {
    return Restangular.one('boards', Number(id)).get()
  }

  var _updateBoard = function(params) {

    Restangular.one('boards', $stateParams.id).patch({
      board: {
        name: params.name,
        user_id: Auth.currentUser()
      }
    }).then(function() {
      $state.go("boards.show", {id: $stateParams.id});
    });
  };

  var deleteBoard = function(id) {
    for(var b in _boards) {
      if(_boards[b].id === id) { _boards.splice(b, 1); break; }
    }
  }

  var createBoard = function(params) {
    return Restangular.all('boards').post({
          board: {
            name: params.name,
            user_id: 2
          }
        }).then(function(response) {
          _boards.push(response)
        })

  }

  Restangular.extendModel('boards', function(board){
    board.update = _updateBoard;
    return board;
  });


  return {
    all: all,
    getBoards: getBoards,
    getBoard: getBoard,
    deleteBoard: deleteBoard,
    createBoard: createBoard
  }
}]);