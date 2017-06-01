(function() {
'use strict';

  angular
  .module('push')
  .controller('pushController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'pushService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, pushService){

    if($sessionStorage.push === undefined) {

      // register with the server to start receiving push notifications
      $fh.push(function(e) {


      if (e.coldstart) {
        // notification started the app
      }

      // show text content of the message
      alert(e.alert);

      // only on iOS
      if (e.badge) {
        push.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
  }, function() {
    console.log("registered for push");
    $sessionStorage.push = true;
  }, function(err) {
    // handle errors
    console.log("register for push failed: " + err);
  });


} else {
  console.log("$sessionStorage.push: " + $sessionStorage.push);
}

  }]);
})();
