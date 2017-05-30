var Push = function() {
// register with the server to start receiving push notifications


this.successHandler = function() {
   app.clearMessages();
   if (document.getElementById("messages").childElementCount === 0) {
     document.getElementById("nothing").style.display = 'block';
   }
}

this.errorHandler = function(error) {
   app.clearMessages();
   app.addMessage('error registering ' + error);
}


this.onNotification = function(event) {
  document.getElementById('nothing').style.display = 'none';
  addMessage(event.alert || event.version);
}

this.addMessage = function(message) {
  var messages = document.getElementById("messages"),
   element = document.createElement("li");
   //for ui testing add an id for easy (fast) selecting
   element.setAttribute("id", "message" + (messages.childElementCount + 1));
   messages.appendChild(element);
   element.innerHTML = message;
}

this.clearMessages = function() {
var waiting = document.getElementById("waiting");
waiting.parentElement.removeChild(waiting);
}

this.register = function() {
  $fh.push(onNotification, successHandler, errorHandler);
}

}
