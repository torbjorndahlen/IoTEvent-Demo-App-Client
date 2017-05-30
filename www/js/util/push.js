// register with the server to start receiving push notifications
$fh.push(function(e) {
    // on android we could play a sound, if we add the Media plugin
    if (e.sound && (typeof Media != 'undefined')) {
      var media = new Media("/android_asset/www/" + e.sound);
      media.play();
    }

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
  // successfully registered
}, function(err) {
  // handle errors
});
