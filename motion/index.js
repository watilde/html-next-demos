window.addEventListener("devicemotion", devicemotionHandler);

function devicemotionHandler(event) {
  var x = event.acceleration.x;
  var y = event.acceleration.y;
  var z = event.acceleration.z;
  document.getElementById('x').innerHTML = 'x: ' + x;
  document.getElementById('y').innerHTML = 'y: ' + y;
  document.getElementById('z').innerHTML = 'z: ' + z;
}
