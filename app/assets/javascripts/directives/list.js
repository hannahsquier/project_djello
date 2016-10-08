app.directive("list", [ "listService", "$stateParams", "$state", function(listService, $stateParams, $state) {
  return {
    templateUrl:"templates/lists/show.html",
    scope: { list: "=" },
    restrict: "E",
    link: function(scope) {

      scope.editing = listService.getEditingObj();

      scope.updateList = function(property, newVal) {
        scope.list[property] = newVal
        scope.list.update(scope.list, scope.list.id)
        scope.changeEditing(property)
      }

      scope.changeEditing = function(property) {
        scope.editing[scope.list.id][property] = !scope.editing[scope.list.id][property]
      }


      scope.deleteList = function(id) {
        if(confirm("Are you sure you want to delete this list?")) {

          scope.list.remove().then(function() {
            listService.deleteList(scope.list.id)
          })

        }
      }

    }
  }
}]);