
window.addEventListener("devicelight", devicelightHandler);

function devicelightHandler(event) {
	var lux = event.value;
  document.getElementById("lux").innerHTML = lux;
}
