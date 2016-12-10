/**
 * Created by Eric Lee Stewart on 12/03/16.
 *
 * A controller for listing movies.
 */

angular.module('MovieManager')
  .controller('MovieListCtrl', ['$http', '$rootScope', '$scope', function($http, $rootScope, $scope) {
    // Create a reference to the view/model aka this controller.
    var vm = this;

    // Movies model.
    vm.movies = [];

    // Sort list by field.
    vm.listSortBy = 'title';

    // Sort list direction. Can be 'asc' or 'desc'
    vm.listSortDirection = 'asc';

    // Fetch any notifications then clear them.
    var notifications = $rootScope.notifications.all();
    $rootScope.notifications.clear();
    
    // Respond to GetMovieCollectionSuccess events.
    $scope.$on('GetMovieCollectionSuccess', function(event, data) {
      var movies = data;

      // Update the calculated properties.
      for (var i = movies.length - 1; i >= 0; i--) {
          updateCalculatedProperties(movies[i])
      }

      // Set the movies.
      vm.movies = movies;
    });

    // Respond to GetMovieCollectionFailed events.
    $scope.$on('GetMovieCollectionFailed', function(event, data) {
      vm.movies = [];
    });

    // Trigger a fetch of all movies.
    vm.getMoviesList = function () {
      config = {params: {sort: vm.listSortBy, order: vm.listSortDirection}};
  	  $http.get('/api/movie', config).then(
  	    // Successful GET
  	    function (response) {
  	      $scope.$emit('GetMovieCollectionSuccess', response.data.data);
  	  	},
  	    // Failed GET
  	    function (response) {
  		    $scope.$emit('GetMovieCollectionFailed', {
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

    // Show notifications if present.
    var showNotifications = function() {
      if (notifications.length > 0) {
        for (var i = notifications.length - 1; i >= 0; i--) {
          $.notify({
            // options
            message: notifications[i].text
          },{
            // settings
            type: notifications[i].type,
            placement: {
              from: "top",
              align: "center"
            }
          });
        }
      }
    }

    // Sort the list by the field selected.
    vm.toggleListSort = function(field) {
      // Determine the field and direction to sort by.
      if (vm.listSortBy == field && vm.listSortDirection == 'asc') {
        vm.listSortDirection = 'desc';
      } else {
        vm.listSortBy = field;
        vm.listSortDirection = 'asc';
      }

      // Fetch the list
      vm.getMoviesList();
    }

    // Run on controller initialization.
    vm.getMoviesList();

    // Show any notifications.
    showNotifications();
  }]);