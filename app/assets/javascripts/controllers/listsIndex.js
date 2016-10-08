app.controller("listsIndexCtrl", ["$scope", "listService", function($scope, listService) {
  $scope.lists = listService.getlists();

}]);