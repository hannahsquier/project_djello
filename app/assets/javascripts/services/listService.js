app.factory("listService", ["Restangular", "$stateParams", "$state", function(Restangular, $stateParams, $state) {
  var _lists = []

  var all = function(id) {

    return Restangular.one("boards", id).all("lists").getList().then(function(response) {
      angular.copy(response, _lists)
      return _lists
    });
  }


  var getlists = function() {
    return _lists;
  }

  var getEditingObj = function() {
    var editingObj = {};
    for(var l in _lists) {
      editingObj[_lists[l].id] = {
        name: false,
        description: false
      }
    }
    return editingObj
  }


  var getlist = function(listId) {
    Restangular.one("boards", $stateParams.id).one('lists', Number(listId)).get()
  }

  var _updatelist = function(params, listId) {
    Restangular.one("boards", $stateParams.id).one('lists', Number(listId))
    .patch({
      list: params
    })
  };


  var deleteList = function(id) {
    for(var b in _lists) {
      if(_lists[b].id === id) { _lists.splice(b, 1); break; }
    }
  }

  var createList = function(params) {
   return Restangular.one("boards", $stateParams.id).all('lists').post({
        list: params
      }).then(function(response) {
        _lists.push(response)
      })
  }


  Restangular.extendModel('lists', function(list){
    list.update = _updatelist;
    return list;
  });


  return {
    all: all,
    getlists: getlists,
    getlist: getlist,
    deleteList: deleteList,
    getEditingObj: getEditingObj,
    createList: createList
  }
}]);