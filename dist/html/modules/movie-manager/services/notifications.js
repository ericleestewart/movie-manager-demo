/**
 * Created by Eric Lee Stewart on 12/03/16.
 *
 * A service for passing notifications between controllers.
 */

angular.module('MovieManager')
  .factory('Notifications', [ function() {

    // *************************************************************************
    // * PUBLIC PROPERTIES
    // *************************************************************************

    // Define the service.
    var notifications = {};

    // Define the messages container.
    notifications.messages = [];

    // *************************************************************************
    // * PUBLIC METHODS
    // *************************************************************************

    // Clear all notifications.
    notifications.clear = function() {
      notifications.messages = [];
    };

    // Get the number of notifications
    notifications.count = function () {
      return notifications.messages.length;
    };

    // Add a message.
    notifications.add = function(type, text) {
      notifications.messages.push({
        type: type,
        text: text
      })
    };

    // Get all the messages.
    notifications.all = function () {
      return notifications.messages;
    };

    return notifications;
  }]);
