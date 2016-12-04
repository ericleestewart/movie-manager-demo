// *************************************************************************
// * APPLICATION - MOVIE MANAGER
// *************************************************************************

angular.module('MovieManager', ['ngRoute'])

  // *************************************************************************
  // * CONSTANTS
  // *************************************************************************

  .constant('VERSION', "0.0.1")

  // *************************************************************************
  // * INITIALIZER
  // *************************************************************************

  .run(['$rootScope', 'Notifications', 'VERSION', function ($rootScope, Notifications, VERSION) {
      // Initialize the notifications manager.
      $rootScope.notifications = Notifications;

      // Initialize the apps version.
      $rootScope.VERSION = VERSION;
   }]);
