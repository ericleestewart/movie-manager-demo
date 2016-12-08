// *************************************************************************
// * ROUTES - ADMIN CONSOLE
// *************************************************************************

angular.module('MovieManager')
  .config(['$routeProvider', function ($routeProvider) {

    // *************************************************************************
    // * HOME PAGE
    // *************************************************************************

    $routeProvider.when('/', {
      controller : 'MovieListCtrl',
      controllerAs : 'ctrl',
      templateUrl : '/modules/movie-manager/templates/movie-list.html'
    });

    $routeProvider.when('/movie/create', {
      controller : 'MovieCreateCtrl',
      controllerAs : 'ctrl',
      templateUrl : '/modules/movie-manager/templates/movie-create.html'
    });


  }]);
