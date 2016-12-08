/**
 * Created by Eric Lee Stewart on 12/04/16.
 *
 * A controller for creating movies.
 */

angular.module('MovieManager')
  .controller('MovieCreateCtrl', ['$http', '$location', '$rootScope', '$scope', function($http, $location, $rootScope, $scope) {
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
      $scope.createMovieForm[input].$setValidity('server', true);
    };

    // Respond to CreateMovieSuccess events.
    $scope.$on('CreateMovieSuccess', function(event, data) {
      // Add a notification that the creation was successful.
      $rootScope.notifications.add('success', 'The movie "' + vm.movie.title + '" has been added.');

      // Go to the movie list page.
      $location.path('/');
    });

    // Respond to CreateMovieFailed events.
    $scope.$on('CreateMovieFailed', function(event, data) {
      // Handle validation errors.
      if (data.status == 400 && data.data.hasOwnProperty('errors')) {
        // Inject all errors from the server into the form.
        for (var key in data.data.errors) {
          // Update validation with the error.
          $scope.createMovieForm[key].$setValidity('server', false);
          $scope.createMovieForm[key].serverError = data.data.errors[key];
          $scope.createMovieForm[key].$setTouched();
        }
      }
    });

    // Trigger a post to create a new movie.
    vm.createMovie = function (isValid) {
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
      
      // POST data to the Movie Collection endpoint.
	  $http.post('/api/movie', data).then(
	    // Successful POST
	    function (response) {
	      $scope.$emit('CreateMovieSuccess', response.data.data);
	  	},
	    // Failed POST
	    function (response) {
		  $scope.$emit('CreateMovieFailed', {
		  	data: response.data,
		  	status: response.status,
		  	statusText: response.statusText
		  });
	    }
	  );
    };

    // Run on controller initialization.
    
  }]);