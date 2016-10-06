app.factory("boardService", ["Restangular", function(Restangular) {
  var _boards = []

  var all = function() {
    return Restangular.all("boards").getList();
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
    console.log(id)
    console.log( Restangular.one('boards', id).get().$object)

    return Restangular.one('boards', Number(id)).get()
  }


  Restangular.extendCollection('boards', function(collection){
    collection.create = _createBoard;
    return collection;
  });

  return {
    all: all,
    getBoards: getBoards,
    fillBoards: fillBoards,
    getBoard: getBoard
  }
}]);