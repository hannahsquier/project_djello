app.factory("boardService", ["Restangular", "$stateParams", "$state", function(Restangular, $stateParams, $state) {
  var _boards = []

  var all = function() {
    return Restangular.all("boards").getList().then(function(response) {
        angular.copy(response, _boards)
    });
  }

  var _createBoard = function(params) {
    return Restangular.all('boards').post({
          board: {
            name: params.name,
            user_id: 2
          }
        }).then(function(response) {
          _boards.push(response)
        })
  }

  var getBoards = function() {
    return _boards;
  }

  var fillBoards = function(boards) {
    angular.copy(boards, _boards)
    return _boards
  }

  var getBoard = function(id) {
    return Restangular.one('boards', Number(id)).get()
  }

  var _updateBoard = function(params) {

    Restangular.one('boards', $stateParams.id).patch({
      board: {
        name: params.name,
        user_id: 2
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

  Restangular.extendCollection('boards', function(collection){
    collection.create = _createBoard;
    return collection;
  });

  Restangular.extendModel('boards', function(board){
    board.update = _updateBoard;
    return board;
  });


  return {
    all: all,
    getBoards: getBoards,
    fillBoards: fillBoards,
    getBoard: getBoard,
    deleteBoard: deleteBoard
  }
}]);