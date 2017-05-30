(function() {
'use strict';

  angular
  .module('detail')
  .controller('detailController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'detailService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, detailService){

    // Decide which elements to show
    $scope.showToolbar = true;
    $scope.showSidenav = false;
    $scope.showAnalytics = false;
    // The below are mutually exclusive
    $scope.showCard = false;
    $scope.showList = false;
    $scope.showForm = true;

    $scope.toolbarButton = function(event) {

      console.log("toolbarButton(" + event + ")");

      $mdDialog.show(
        $mdDialog.alert()
        .title('Toolbar button')
        .textContent('Toolbar button was clicked')
        .ariaLabel('Work in progress')
        .ok('Awesome!')
        .targetEvent(event)
      );

    }





  }]);
})();
