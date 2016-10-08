app.directive("listNew",  [ "listService", function(listService) {
  return {
    templateUrl:"templates/lists/new.html",
    scope: false,
    restrict: "E",
    link: function(scope) {
      scope.createNewList = function() {
        listService.createList(scope.newList)
        scope.newList = {};
      }
    }
  }
}]);