/**
 * Created by Eric Lee Stewart on 12/03/16.
 *
 * A controller for listing movies.
 */

angular.module('MovieManager')
  .controller('MovieListCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
    // Create a reference to the view/model aka this controller.
    var vm = this;

    // Fetch any notifications then clear them.
    var notifications = $rootScope.notifications.all();
    $rootScope.notifications.clear();
    
  }]);