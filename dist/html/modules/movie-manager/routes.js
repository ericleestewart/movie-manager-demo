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
      templateUrl : '/modules/movie-manager/templates/movie-list.html'
    });


  }]);
