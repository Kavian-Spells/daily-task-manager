var sec = 0; 
var min = 10;
var secDisplay = document.getElementById('sec');
var minDisplay = document.getElementById('min');

setInterval(() => {
  if (sec != 0) {
    sec--;
    if (sec < 10) secDisplay.innerHTML = '0' + sec;
    else secDisplay.innerHTML = sec;
  } else {
    min--;
    if (min < 10) minDisplay.innerHTML = '0' + min;
    else minDisplay.innerHTML = min;
    sec = 59;
  }
}, 999);