window.addEventListener("deviceorientation", function (e) {
  var beta = event.beta;
  var gamma = event.gamma;
  var alpha = event.alpha;
  console.log('beta: ', beta);
  console.log('gamma: ', gamma);
  console.log('alpha: ', alpha);
  document.getElementById("beta").innerHTML = beta;
  document.getElementById("gamma").innerHTML = gamma;
  document.getElementById("alpha").innerHTML = alpha;
  document.getElementById("orientation").style.translate3d = '(' + beta + ',' + gamma + ',' + alpha + ')';
});
