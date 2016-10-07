app.factory("listService", ["Restangular", "$stateParams", "$state", function(Restangular, $stateParams, $state) {
  var _lists = []

  var all = function(id) {
    console.log($stateParams)
    return Restangular.one("boards", id).all("lists").getList().then(function(response) {
      angular.copy(response, _lists)
    });
  }

  var _createlist = function(params) {
    return Restangular.all('lists').post({
          list: {
            name: params.name,
            user_id: 2
          }
        }).then(function(response) {
          _lists.push(response)
        })
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

  var filllists = function(lists) {
    angular.copy(lists, _lists)
    return _lists
  }

  var getlist = function(id) {
    return Restangular.one('lists', Number(id)).get()
  }

  var _updatelist = function(params) {

    Restangular.one('lists', $stateParams.id).patch({
      list: {
        name: params.name,
        user_id: 2
      }
    }).then(function() {
      $state.go("lists.show", {id: $stateParams.id});
    });
  };

  var deletelist = function(id) {
    for(var b in _lists) {
      if(_lists[b].id === id) { _lists.splice(b, 1); break; }
    }
  }

  Restangular.extendCollection('lists', function(collection){
    collection.create = _createlist;
    return collection;
  });

  Restangular.extendModel('lists', function(list){
    list.update = _updatelist;
    return list;
  });


  return {
    all: all,
    getlists: getlists,
    filllists: filllists,
    getlist: getlist,
    deletelist: deletelist,
    getEditingObj: getEditingObj
  }
}]);