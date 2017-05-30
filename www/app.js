(function(){
  'use strict';
var cmsapp = angular.module('IoTEvent-Demo-App', [
  'ui.router',
  'sidenav',
  'list',
  'card',
  'analytics',
  'toolbar',
  'form',
  'view',
  'detail'
]);

cmsapp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('IoTEvent-Demo-App-theme')
    .primaryPalette('red')
    .accentPalette('indigo')
    .warnPalette('deep-purple')
    .backgroundPalette('grey');

  //$mdThemingProvider.theme('dark-red').dark();

  //$mdThemingProvider.setDefaultTheme('md-boilerplate-theme');

  $mdThemingProvider.disableTheming();
});

cmsapp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/view");

   $stateProvider
     .state('view', {
       url: "/view",
       views: {
         '': {
           templateUrl: "js/view/view.html",
           controller: "viewController"
         },
         'toolbar@view': {
           templateUrl: "js/toolbar/toolbar.html",
           controller: "toolbarController"
         },
         'sidenav@view': {
           templateUrl: "js/sidenav/sidenav.html",
           controller: "sidenavController"
         },
         'list@view': {
           templateUrl: "js/list/list.html",
           controller: "listController"
         },
         'card@view': {
           templateUrl: "js/card/card.html",
           controller: "cardController"
         },
         'analytics@view': {
           templateUrl: "js/analytics/analytics.html",
           controller: "analyticsController"
         },
         'form@view': {
           templateUrl: "js/form/form.html",
           controller: "formController"
         }
       }
     })
     .state('detail', {
       url: "/detail",
       views: {
         '': {
           templateUrl: "js/detail/detail.html",
           controller: "detailController"
         },
         'toolbar@detail': {
           templateUrl: "js/toolbar/toolbar.html",
           controller: "toolbarController"
         },
         'sidenav@detail': {
           templateUrl: "js/sidenav/sidenav.html",
           controller: "sidenavController"
         },
         'list@detail': {
           templateUrl: "js/list/list.html",
           controller: "listController"
         },
         'card@detail': {
           templateUrl: "js/card/card.html",
           controller: "cardController"
         },
         'analytics@detail': {
           templateUrl: "js/analytics/analytics.html",
           controller: "analyticsController"
         },
         'form@detail': {
           templateUrl: "js/form/form.html",
           controller: "formController"
         }
       }
     });
   });


   cmsapp.run(function() {
     // register with the server to start receiving push notifications
     $fh.push(function(e) {

    // show text content of the message
    alert(e.alert);

    // only on iOS
    if (e.badge) {
      push.setApplicationIconBadgeNumber(function() {}, e.badge);
    }
  }, function() {
    console.log("Registered for push");
    alert("Registered for push");
  }, function(err) {
    console.log("Failed to register for push: " + err);
    alert("Failed to register for push: " + err);
  });

});
});


})();
