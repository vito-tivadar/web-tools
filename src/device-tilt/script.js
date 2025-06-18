const cli = document.getElementById('console');

window.addEventListener('deviceorientation', function(e){
  console.log('Device Orientation:', e);
  cli.textContent = `Device Orientation: ${JSON.stringify({
    alpha: e.alpha,
    beta: e.beta,
    gamma: e.gamma
  })} \n${cli.textContent}`;
});