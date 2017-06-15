(function() {
'use strict';

  angular
  .module('card')
  .controller('cardController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'cardService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, cardService){


    $scope.processInstances = [];
    $scope.tasks = [];

    function handleTasks() {

      for(var i = 0; i < $scope.processInstances.length; i++) {
        for(var j = 0; j < $scope.processInstances[i].taskSummaries.length; j++) {

          if($scope.processInstances[i].taskSummaries[j]["activation-time"] != null) {
            $scope.processInstances[i].taskSummaries[j]["activation-time"] = new Date($scope.processInstances[i].taskSummaries[j]["activation-time"]).toLocaleString();
          }

          if($scope.processInstances[i].taskSummaries[j]["expiration-time"] != null) {
            $scope.processInstances[i].taskSummaries[j]["expiration-time"] = new Date($scope.processInstances[i].taskSummaries[j]["expiration-time"]).toLocaleString();
          }

          if($scope.processInstances[i].taskSummaries[j].priority == 0) {
            $scope.processInstances[i].taskSummaries[j].priority = "High";
          } else if($scope.processInstances[i].taskSummaries[j].priority > 0 && $scope.processInstances[i].taskSummaries[j].priority <= 5) {
            $scope.processInstances[i].taskSummaries[j].priority = "Medium";
          } else {
            $scope.processInstances[i].taskSummaries[j].priority = "Low";
          }

          $scope.tasks.push($scope.processInstances[i].taskSummaries[j]);
        }
      }

    }


    cardService.getTasks().then(
      function successCallback(response) {

        if(response.status != null && response.status != 'SUCCESS') {
          // Handle FHCloud not calling errorCallback
          console.log('fail: ' + JSON.stringify(response));
          //$state.go('error', {error: {"message": JSON.stringify(response), "nextState":'viewDash'}});
        } else {
          //console.log('response: ' + JSON.stringify(response));

          $scope.processInstances = response.taskInfoList;

          handleTasks();
/*
          for(var i = 0; i < $scope.processInstances.length; i++) {
            for(var j = 0; j < $scope.processInstances[i].taskSummaries.length; j++) {

              if($scope.processInstances[i].taskSummaries[j]["activation-time"] != null) {
                $scope.processInstances[i].taskSummaries[j]["activation-time"] = new Date($scope.processInstances[i].taskSummaries[j]["activation-time"]).toLocaleString();
              }

              if($scope.processInstances[i].taskSummaries[j]["expiration-time"] != null) {
                $scope.processInstances[i].taskSummaries[j]["expiration-time"] = new Date($scope.processInstances[i].taskSummaries[j]["expiration-time"]).toLocaleString();
              }

              if($scope.processInstances[i].taskSummaries[j].priority == 0) {
                $scope.processInstances[i].taskSummaries[j].priority = "High";
              } else if($scope.processInstances[i].taskSummaries[j].priority > 0 && $scope.processInstances[i].taskSummaries[j].priority <= 5) {
                $scope.processInstances[i].taskSummaries[j].priority = "Medium";
              } else {
                $scope.processInstances[i].taskSummaries[j].priority = "Low";
              }

              $scope.tasks.push($scope.processInstances[i].taskSummaries[j]);
            }
          }
*/
        }
      }
    );

  $scope.viewVariables = function(event, task) {
    for(var i = 0; i < $scope.processInstances.length; i++) {
      if($scope.processInstances[i].processInstanceId === task["process-instance-id"]) {
        $sessionStorage.processInstance = $scope.processInstances[i];
        $state.go('detail');
        break;
      }
    }
  }

  $scope.doPrimaryAction = function(event, caller) {
    console.log(JSON.stringify(caller));

          $mdDialog.show(
            $mdDialog.alert()
            .title('Not implemented yet!')
            .textContent('Try something else')
            .ariaLabel('Work in progress')
            .ok('Awesome!')
            .targetEvent(event)
          );
        }


  $scope.onSwipeDown = function(e) {
    console.log("Swipe down");

    cardService.getTasks().then(
      function successCallback(response) {

        if(response.status != null && response.status != 'SUCCESS') {
          // Handle FHCloud not calling errorCallback
          console.log('fail: ' + JSON.stringify(response));
          //$state.go('error', {error: {"message": JSON.stringify(response), "nextState":'viewDash'}});
        } else {
          //console.log('response: ' + JSON.stringify(response));

          $scope.processInstances = [];
          $scope.tasks = [];

          $scope.processInstances = response.taskInfoList;

          handleTasks();
          $scope.$apply();
        }
      }
    );
  }


  }]);
})();
