(function(){
'use strict';

angular
    .module('detail', ['ui.router', 'ngStorage', 'ngFeedHenry', 'ngMaterial'])
    .service('detailService', ['FHCloud',
    function(FHCloud) {

    var service = {};

    return service;
}]);
})();
