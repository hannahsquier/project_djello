app.directive("card", [ "cardService", "$stateParams", "$state", function(cardService, $stateParams, $state) {
  return {
    templateUrl:"templates/cards/show.html",
    scope: { card: "=",
              list: "=" },
    restrict: "E",
    link: function(scope) {

      scope.editing = cardService.getEditingObj();

      scope.updateCard = function(property, newVal) {
        scope.card[property] = newVal;
        cardService.update(scope.card, scope.list.id, scope.card.id);
        scope.changeEditing(property);
      }

      scope.changeEditing = function(property) {
        console.log(scope.editing)
        scope.editing[property] = !scope.editing[property];
      }


      scope.deleteCard = function(id) {
        if(confirm("Are you sure you want to delete this card?")) {

          scope.card.remove().then(function() {
            cardService.deleteCard(scope.card.id);
          })

        }
      }

    }
  }
}]);