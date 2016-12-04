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

    // Fetch any notifications then clear them.
    var notifications = $rootScope.notifications.all();
    $rootScope.notifications.clear();
    
    // Respond to GetMovieCollectionSuccess events.
    $scope.$on('GetMovieCollectionSuccess', function(event, data) {
      vm.movies = data;
    });

    // Respond to GetMovieCollectionFailed events.
    $scope.$on('GetMovieCollectionFailed', function(event, data) {
      vm.movies = [];
    });

    // Trigger a fetch of all movies.
    vm.getMoviesList = function () {
	  $http.get('/api/movie').then(
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

    // Run on controller initialization.
    vm.getMoviesList();
  }]);