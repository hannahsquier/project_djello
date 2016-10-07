var app = angular.module("djello", ["ui.router", 'restangular'])

app.factory('_', ['$window', function($window){
  return $window._;
}]);


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/boards")

  $stateProvider.state("boards", {
    url: "/boards",
    views: {
      "": {
        templateUrl: "templates/boards/index.html",
        controller: "boardsIndexCtrl",
      }
    },
    resolve: { boards: function(boardService){ return boardService.all(); } }
    }

    );

  $stateProvider.state("boards.new", {
    url:"/new",
    views: {
      "new@boards": {
        templateUrl: "templates/boards/new.html",
        controller: "boardsNewCtrl",
      }
    }

  });

  $stateProvider.state("boards.show", {
    url: "/:id",
    views: {
      "@": {
        templateUrl: "templates/boards/show.html",
        controller: "boardsShowCtrl",
      },

      "lists@" : {
        templateUrl: "templates/lists/index.html",
        controller: "listsIndexCtrl", }


    },

    resolve: {
      board: function(boardService, $stateParams) {
        return boardService.getBoard($stateParams.id).$object },
      lists: function(listService, $stateParams){ return listService.all($stateParams.id); }
      }
  });




});

app.config(
  ["$httpProvider",
  function($httpProvider) {
  var token = $('meta[name=csrf-token]')
  .attr('content');
  $httpProvider
  .defaults
  .headers
  .common['X-CSRF-Token'] = token;
}]);

// Restangular config
app.config(
  ['RestangularProvider',
  function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);
