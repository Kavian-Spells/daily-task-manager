var sec = 0;
var min = 0;

const str = document.getElementById('shortTerm');
const mtr = document.getElementById('midTerm');
const ltr = document.getElementById('longTerm');

var secDisplay = document.getElementById('sec');
var minDisplay = document.getElementById('min');

function start_timer() {
  radio_status();
  
  setInterval(() => {
    if (min == 0 && sec == 0) {
      return;
    }if (sec != 0) {
      sec--;
      if (sec < 10) secDisplay.innerHTML = '0' + sec;
      else secDisplay.innerHTML = sec;
    }else {
      min--;
      if (min < 10) minDisplay.innerHTML = '0' + min;
      else minDisplay.innerHTML = min;
      sec = 59;
    }
  }, 1000);
}

//add function for radio button choosen

function radio_status() {
  if (str.checked == true) {
  min = 1;
  }else if (mtr.checked == true) {
    min = 2;
  }else if (ltr.checked == true) {
    min = 3;
  }
}