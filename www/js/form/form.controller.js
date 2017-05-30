(function() {
'use strict';

  angular
  .module('form')
  .controller('formController', ['$q', '$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'formService',
  function ($q, $mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, formService){

    if($sessionStorage.processInstance != null) {
        $scope.processInstance = $sessionStorage.processInstance;
    } else {
        /*
      $mdDialog.show(
        $mdDialog.alert()
        .title('Internal Error')
        .textContent('No event data found!')
        .ariaLabel('No event data found!')
        .ok('OK')
        .targetEvent(event)
      );
      */

      $state.go('view');
    }

    $scope.deviceType;
    $scope.deviceId;
    $scope.payload;
    $scope.timestamp;

    for(var i = 0; i < $scope.processInstance.variables.length; i++) {
      if($scope.processInstance.variables[i].name === "deviceType") {
        $scope.deviceType = $scope.processInstance.variables[i].value.value;
      } else if($scope.processInstance.variables[i].name === "deviceID") {
        $scope.deviceId = $scope.processInstance.variables[i].value.value;
      } else if($scope.processInstance.variables[i].name === "payload") {
        $scope.payload = $scope.processInstance.variables[i].value.value;
      } else if($scope.processInstance.variables[i].name === "timestamp") {
        $scope.timestamp = new Date($scope.processInstance.variables[i].value.value).toLocaleString();
      }

    }


  $scope.doPrimaryAction = function(event, caller) {
    console.log(JSON.stringify(caller));

          $mdDialog.show(
            $mdDialog.alert()
            .title('Not implemented yet!')
            .textContent('Try chat or contacts')
            .ariaLabel('Work in progress')
            .ok('Awesome!')
            .targetEvent(event)
          );
        }

        $scope.back = function() {
          // go back to previous state
          $state.go('view');
        }

        $scope.submit = function() {
            formService.completeTask($scope.processInstance.taskSummaries[0]).then(
                function successCallback(response) {
                      if(response.status != null && response.status != 'SUCCESS') {
                        // Handle FHCloud not calling errorCallback
                        console.log('fail: ' + JSON.stringify(response));
                        //$state.go('error', {error: {"message": JSON.stringify(response), "nextState":'viewDash'}});
                      } else {
                        console.log('response: ' + JSON.stringify(response));

                        $mdToast.show(
                          $mdToast.simple()
                          .textContent('Task ' + $scope.processInstance.taskSummaries[0].id + ' submitted!')
                          .hideDelay(3000)
                        ).then(function(res) {
                          $state.go('view');
                          }
                        );
                      }
                  })
                }

        $scope.cancel = function() {
          $state.go('view');
        }

  }]);
})();
