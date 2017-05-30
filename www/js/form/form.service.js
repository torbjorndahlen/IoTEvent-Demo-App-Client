(function(){
'use strict';

angular
    .module('form', ['ui.router', 'ngMaterial', 'ngFeedHenry'])
    .service('formService', ['FHCloud',
    function(FHCloud) {

    var service = {};

    service.completeTask = function (task) {
      var dto = {
        "username": "psteiner",
        "password": "change12_me",
        "taskId":task.id
      };

        return FHCloud.post('api/task/complete', dto);
      };



    return service;
}]);
})();
