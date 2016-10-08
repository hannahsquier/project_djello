app.factory("cardService", ["Restangular", "$stateParams", "$state", function(Restangular, $stateParams, $state) {
  var _cards = []

  var all = function(boardId, listId) {
    return Restangular.one("boards", boardId).one("lists", listId).all("cards").getList().then(function(response) {
      angular.copy(response, _cards)
      console.log(_cards)
      return _cards
    });
  }


  // var getCards = function() {
  //   return _cards;
  // }

  var getEditingObj = function() {
    var editingObj = {};
    editingObj.name = false;
    editingObj.description = false;
    return editingObj
  }


  // var getCard = function(listId) {
  //   Restangular.one("boards", $stateParams.id).one('lists', Number(listId)).get()
  // }

  var update = function(card, listId, cardId) {
    console.log(Restangular.one("boards", $stateParams.id).one("lists", listId).one("cards", cardId))
    Restangular.one("boards", $stateParams.id).one("lists", Number(listId)).one("cards", Number(cardId))
    .patch({
      card: card
    })
  };


  // var deleteList = function(id) {
  //   for(var b in _lists) {
  //     if(_lists[b].id === id) { _lists.splice(b, 1); break; }
  //   }
  // }

  // var createList = function(params) {
  //  return Restangular.one("boards", $stateParams.id).all('lists').post({
  //       list: params
  //     }).then(function(response) {
  //       _lists.push(response)
  //     })
  // }


  // Restangular.extendModel('cards', function(card){
  //   card.update = _updateCard;
  //   return card;
  // });


  return {
    all: all,
    // getlists: getlists,
    // getlist: getlist,
    // deleteList: deleteList,
     getEditingObj: getEditingObj,
     update: update
    // createList: createList
  }
}]);