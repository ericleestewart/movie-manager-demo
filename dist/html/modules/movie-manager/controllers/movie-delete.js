/**
 * Created by Eric Lee Stewart on 12/08/16.
 *
 * A controller for updating movies.
 */

angular.module('MovieManager')
  .controller('MovieDeleteCtrl',
    ['$http', '$location', '$rootScope', '$routeParams', '$scope',
    function($http, $location, $rootScope, $routeParams, $scope)
  {
    // Create a reference to the view/model aka this controller.
    var vm = this;

    // Movie model.
    vm.movie = {};

    // Fetch any notifications then clear them.
    var notifications = $rootScope.notifications.all();
    $rootScope.notifications.clear();
    
    // Respond to GetMovieSuccess events.
    $scope.$on('GetMovieSuccess', function(event, data) {
      // Set the movies.
      vm.movie = data;
      
      // Update the calculated properties.
      updateCalculatedProperties(vm.movie)
    });

    // Respond to GetMovieFailed events.
    $scope.$on('GetMovieFailed', function(event, data) {
      // Go to the movie list page.
      $location.path('/');
    });

    // Respond to DeleteMovieSuccess events.
    $scope.$on('DeleteMovieSuccess', function(event, data) {
      // Add a notification that the creation was successful.
      $rootScope.notifications.add('success', 'The movie "' + vm.movie.title + '" has been removed.');

      // Go to the movie list page.
      $location.path('/');
    });

    // Respond to DeleteMovieFailed events.
    $scope.$on('DeleteMovieFailed', function(event, data) {
      // Add a notification that the creation was successful.
      $rootScope.notifications.add('danger', 'The movie "' + vm.movie.title + '" failed to be removed.');

      // Go to the movie list page.
      $location.path('/');
    });

    // Trigger a get on a movie resource.
    vm.getMovie = function (id) {
      $http.get('/api/movie/'+id).then(
        // Successful GET
        function (response) {
          $scope.$emit('GetMovieSuccess', response.data.data);
        },
        // Failed GET
        function (response) {
        $scope.$emit('GetMovieFailed', {
          data: response.data,
          status: response.status,
          statusText: response.statusText
        });
        }
      );
    }

    // Trigger a delete to remove the movie.
    vm.deleteMovie = function () {
      // DELETE Movie resource endpoint.
  	  $http.delete('/api/movie/'+vm.movie.id).then(
  	    // Successful DELETE
  	    function (response) {
  	      $scope.$emit('DeleteMovieSuccess', response.data.data);
  	  	},
  	    // Failed POST
  	    function (response) {
    		  $scope.$emit('DeleteMovieFailed', {
    		  	data: response.data,
    		  	status: response.status,
    		  	statusText: response.statusText
    		  });
  	    }
  	  );
    };

    // Update calculated properties.
    var updateCalculatedProperties = function(movie) {
      // Calculate the runtime in hours and minutes.
      var runtimeHours = 0;
      var runtimeMinutes = 0;
      
      if (movie.runtime == 0) {
        runtimeHours = 0;
        runtimeMinutes = 0;
      } else {
        runtimeHours = Math.floor(movie.runtime / 60);
        runtimeMinutes = movie.runtime - (runtimeHours * 60);
      }

      movie.runtimeHours = runtimeHours;
      movie.runtimeMinutes = runtimeMinutes;
    }

    // Run on controller initialization.
    vm.getMovie($routeParams.id);
  }]);