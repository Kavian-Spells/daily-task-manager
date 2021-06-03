var sec = 0;
var min = 0;

const str = document.getElementById('shortTerm');
const mtr = document.getElementById('midTerm');
const ltr = document.getElementById('longTerm');

var secDisplay = document.getElementById('sec');
var minDisplay = document.getElementById('min');

document.querySelector("#spiritual").addEventListener('click', start_timer2);
document.querySelector("#financial").addEventListener('click', start_timer3);
document.querySelector("#fitness").addEventListener('click', start_timer4);
document.querySelector("#career").addEventListener('click', start_timer5);
document.querySelector("#education").addEventListener('click', start_timer6);
document.querySelector("#social").addEventListener('click', start_timer7);
document.querySelector("#rouletteButton").addEventListener('click', start_timer);

function start_timer() {
  radio_status();
  
  setInterval(() => {
    if (min == 0 && sec == 0) {
      return;
      var question = "Did you learn anything?";
      var spec = prompt(question);
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
  sec = 5;
  }else if (mtr.checked == true) {
    sec = 10;
  }else if (ltr.checked == true) {
    sec = 15;
  }
}

function start_timer1() {
  radio_status1();
  
  setInterval(() => {
    if (min1 == 0 && sec1 == 0) {
      return;
    }if (sec1 != 0) {
      sec1--;
      if (sec1 < 10) secDisplay1.innerHTML = '0' + sec1;
      else secDisplay1.innerHTML = sec1;
    }else {
      min1--;
      if (min1 < 10) minDisplay1.innerHTML = '0' + min1;
      else minDisplay1.innerHTML = min;
      sec1 = 59;
    }
  }, 1000);
}

function radio_status1() {
  if (str.checked == true) {
  sec1 = 5;
  }else if (mtr.checked == true) {
    sec1 = 10;
  }else if (ltr.checked == true) {
    sec1 = 15;
  }
}

function start_timer2() {
  radio_status2();
  
  setInterval(() => {
    if (min2 == 0 && sec2 == 0) {
      return;
    }if (sec2 != 0) {
      sec2--;
      if (sec2 < 10) secDisplay2.innerHTML = '0' + sec2;
      else secDisplay2.innerHTML = sec2;
    }else {
      min2--;
      if (min2 < 10) minDisplay2.innerHTML = '0' + min2;
      else minDisplay2.innerHTML = min2;
      sec2 = 59;
    }
  }, 1000);
}
function radio_status2() {
  if (str.checked == true) {
  sec2 = 5;
  }else if (mtr.checked == true) {
    sec2 = 10;
  }else if (ltr.checked == true) {
    sec2 = 15;
  }
}

function start_timer3() {
  radio_status3();
  
  setInterval(() => {
    if (min3 == 0 && sec3 == 0) {
      return;
    }if (sec3 != 0) {
      sec3--;
      if (sec3 < 10) secDisplay3.innerHTML = '0' + sec3;
      else secDisplay3.innerHTML = sec3;
    }else {
      min3--;
      if (min3 < 10) minDisplay3.innerHTML = '0' + min3;
      else minDisplay3.innerHTML = min3;
      sec3 = 59;
    }
  }, 1000);
}
function radio_status3() {
  if (str.checked == true) {
  sec3 = 5;
  }else if (mtr.checked == true) {
    sec3 = 10;
  }else if (ltr.checked == true) {
    sec3 = 15;
  }
}

function start_timer4() {
  radio_status4();
  
  setInterval(() => {
    if (min4 == 0 && sec4 == 0) {
      return;
    }if (sec4 != 0) {
      sec4--;
      if (sec4 < 10) secDisplay4.innerHTML = '0' + sec4;
      else secDisplay4.innerHTML = sec4;
    }else {
      min4--;
      if (min4 < 10) minDisplay4.innerHTML = '0' + min4;
      else minDisplay4.innerHTML = min4;
      sec4 = 59;
    }
  }, 1000);
}

function radio_status4() {
  if (str.checked == true) {
  sec4 = 5;
  }else if (mtr.checked == true) {
    sec4 = 10;
  }else if (ltr.checked == true) {
    sec4 = 15;
  }
}

function start_timer5() {
  radio_status5();
  
  setInterval(() => {
    if (min5 == 0 && sec5 == 0) {
      return;
    }if (sec5 != 0) {
      sec5--;
      if (sec5 < 10) secDisplay5.innerHTML = '0' + sec5;
      else secDisplay5.innerHTML = sec5;
    }else {
      min5--;
      if (min5 < 10) minDisplay5.innerHTML = '0' + min5;
      else minDisplay5.innerHTML = min5;
      sec5 = 59;
    }
  }, 1000);
}

function radio_status5() {
  if (str.checked == true) {
  sec5 = 5;
  }else if (mtr.checked == true) {
    sec5 = 10;
  }else if (ltr.checked == true) {
    sec5 = 15;
  }
}

function start_timer6() {
  radio_status6();
  
  setInterval(() => {
    if (min6 == 0 && sec6 == 0) {
      return;
    }if (sec6 != 0) {
      sec6--;
      if (sec6 < 10) secDisplay6.innerHTML = '0' + sec6;
      else secDisplay6.innerHTML = sec6;
    }else {
      min6--;
      if (min6 < 10) minDisplay6.innerHTML = '0' + min6;
      else minDisplay6.innerHTML = min6;
      sec6 = 59;
    }
  }, 1000);
}

function radio_status6() {
  if (str.checked == true) {
  sec6 = 5;
  }else if (mtr.checked == true) {
    sec6 = 10;
  }else if (ltr.checked == true) {
    sec6 = 15;
  }
}

function start_timer7() {
  radio_status7();
  
  setInterval(() => {
    if (min7 == 0 && sec7 == 0) {
      return;
    }if (sec7 != 0) {
      sec7--;
      if (sec7 < 10) secDisplay7.innerHTML = '0' + sec7;
      else secDisplay7.innerHTML = sec7;
    }else {
      min7--;
      if (min7 < 10) minDisplay7.innerHTML = '0' + min7;
      else minDisplay7.innerHTML = min7;
      sec7 = 59;
    }
  }, 1000);
}
function radio_status7() {
  if (str.checked == true) {
  sec7 = 5;
  }else if (mtr.checked == true) {
    sec7 = 10;
  }else if (ltr.checked == true) {
    sec7 = 15;
  }
}