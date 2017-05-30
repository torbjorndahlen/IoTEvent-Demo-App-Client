(function(){
'use strict';

angular
    .module('card', ['ui.router', 'ngMaterial','ngFeedHenry'])
    .service('cardService', ['FHCloud',
    function(FHCloud) {

    var service = {};

    service.getTasks = function () {
      var dto = {
        "username": "psteiner",
        "password": "change12_me"
      };

      return FHCloud.post('api/task/query', dto);
    };

    return service;
}]);
})();
