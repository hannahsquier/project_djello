app.controller("listsIndexCtrl", ["$scope", "listService", function($scope, listService) {
  console.log("hillo")
  $scope.lists = listService.getlists();

  $scope.editing = listService.getEditingObj();

  $scope.updateList = function(id, property) {
    var list = listService.getList(id)
    list.update(property)
    $scope.editing.name = !$scope.editing.name

  }

  $scope.changeEditing = function(property) {
    $scope.editing.property = !$scope.editing.property
  }


  $scope.deleteList = function(id) {
    var list = listService.getList(id)
    list.remove().then(function() {
      listService.deleteList(list.id)
    })
  }

}]);