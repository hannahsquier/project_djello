var app = angular.module("djello", ["ui.router", 'restangular', 'Devise'])

app.factory('_', ['$window', function($window){
  return $window._;
}]);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.error.bind(console));
});

app.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise("/boards")

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


  $stateProvider.state("boards.show", {
    url: "/:id",
    views: {
      "@": {
        templateUrl: "templates/boards/show.html",
        controller: "boardsShowCtrl",
      },

      "lists@" : {
        templateUrl: "templates/lists/index.html",
        controller: "listsIndexCtrl", },

       "cards@" : {
        templateUrl: "templates/cards/index.html",
        controller: "cardsIndexCtrl", }


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
