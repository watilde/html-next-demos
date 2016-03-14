window.addEventListener("deviceproximity", deviceproximityHandler);
function deviceproximityHandler (event) {
  var direction = event.value;
  document.getElementById("direction").innerHTML = direction;
}
