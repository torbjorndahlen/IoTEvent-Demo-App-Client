(function(){
'use strict';

angular
    .module('view', ['ui.router', 'ngStorage', 'ngFeedHenry', 'ngMaterial'])
    .service('viewService', ['$http', 'FHCloud',
    function($http, FHCloud) {

      /*
      // register with the server to start receiving push notifications
      $fh.push(function(e) {

        // show text content of the message
        alert(e.alert);

        // only on iOS
        if (e.badge) {
          push.setApplicationIconBadgeNumber(function() {}, e.badge);
        }
      },
      function() {
        console.log("Registered for push");
      },
      function(err) {
        console.log("Failed to register for push: " + err);
      });

  });
*/
    var service = {};

    service.startProcess = function (loginName) {
      var dto = {
        "username": loginName
      };

      return FHCloud.post('api/process', dto);
    };


    return service;
}]);
})();
