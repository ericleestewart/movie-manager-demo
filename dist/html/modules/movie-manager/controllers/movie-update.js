/**
 * Created by Eric Lee Stewart on 12/08/16.
 *
 * A controller for updating movies.
 */

angular.module('MovieManager')
  .controller('MovieUpdateCtrl',
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
    
    // Clear server errors when input is changed.
    vm.changeInput = function(input) {
      // Reset server validity.
      $scope.movieForm[input].$setValidity('server', true);
    };

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

    // Respond to UpdateMovieSuccess events.
    $scope.$on('UpdateMovieSuccess', function(event, data) {
      // Add a notification that the creation was successful.
      $rootScope.notifications.add('success', 'The movie "' + vm.movie.title + '" has been updated.');

      // Go to the movie list page.
      $location.path('/');
    });

    // Respond to UpdateMovieFailed events.
    $scope.$on('UpdateMovieFailed', function(event, data) {
      // Handle validation errors.
      if (data.status == 400 && data.data.hasOwnProperty('errors')) {
        // Inject all errors from the server into the form.
        for (var key in data.data.errors) {
          // Update validation with the error.
          $scope.movieForm[key].$setValidity('server', false);
          $scope.movieForm[key].serverError = data.data.errors[key];
          $scope.movieForm[key].$setTouched();
        }
      }
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

    // Trigger a put to update the movie.
    vm.updateMovie = function (isValid) {
      // Bail if invalid.
      if (!isValid) {
        return;
      }

      // Get and format the data to send.
      data = {
        title: vm.movie.title,
        format: vm.movie.format,
        runtime: parseInt(vm.movie.runtime),
        year: parseInt(vm.movie.year),
        rating: vm.movie.rating
      }
      
      // PUT data to the Movie Collection endpoint.
  	  $http.put('/api/movie/'+vm.movie.id, data).then(
  	    // Successful POST
  	    function (response) {
  	      $scope.$emit('UpdateMovieSuccess', response.data.data);
  	  	},
  	    // Failed POST
  	    function (response) {
    		  $scope.$emit('UpdateMovieFailed', {
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