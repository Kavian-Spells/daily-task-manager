var sec = 0;
var sec1 = 0;
var sec2 = 0;
var sec3 = 0;
var sec4 = 0;
var sec5 = 0;
var sec6 = 0;
var sec7 = 0;
var sec8 = 0;

var min = 0;
var min1 = 0;
var min2 = 0;
var min3 = 0;
var min4 = 0;
var min5 = 0;
var min6 = 0;
var min7 = 0;
var min8 = 0;

const str = document.getElementById('shortTerm');
const mtr = document.getElementById('midTerm');
const ltr = document.getElementById('longTerm');

var secDisplay = document.getElementById('sec');
var secDisplay1 = document.getElementById('sec1');
var secDisplay2 = document.getElementById('sec2');
var secDisplay3 = document.getElementById('sec3');
var secDisplay4 = document.getElementById('sec4');
var secDisplay5 = document.getElementById('sec5');
var secDisplay6 = document.getElementById('sec6');
var secDisplay7 = document.getElementById('sec7');
var secDisplay8 = document.getElementById('sec8');

var minDisplay = document.getElementById('min');
var minDisplay1 = document.getElementById('min1');
var minDisplay2 = document.getElementById('min2');
var minDisplay3 = document.getElementById('min3');
var minDisplay4 = document.getElementById('min4');
var minDisplay5 = document.getElementById('min5');
var minDisplay6 = document.getElementById('min6');
var minDisplay7 = document.getElementById('min7');
var minDisplay8 = document.getElementById('min8');

document.querySelector("#rouletteButton").addEventListener('click', start_timer);
document.querySelector("#family").addEventListener('click', start_timer1);
document.querySelector("#spiritual").addEventListener('click', start_timer2);
document.querySelector("#financial").addEventListener('click', start_timer3);
document.querySelector("#fitness").addEventListener('click', start_timer4);
document.querySelector("#career").addEventListener('click', start_timer5);
document.querySelector("#education").addEventListener('click', start_timer6);
document.querySelector("#social").addEventListener('click', start_timer7);
document.querySelector("#rouletteButton").addEventListener('click', start_timer8);


function timerPrompt() {
  var text;
  var question = prompt("Did you learn anything traveler?");
  switch(question) {
    case "yes":
      text = "There is always more to learn, well done! Reload and continue your journey!";
      break;
    case "no":
      text = "Unfortunate, but don't give up! Failure is not the end...unless you choose it to be so. Reload and try again!";
      break;
    case "maybe":
      text = "Sometimes it helps to know what you want to accomplish.You can try again or continue in the fog.";
      break;
    default:
      text = "Is this a game to you?...Well it is in the name.";
  }
  alert(text);
}


function start_timer() {
  radio_status();
  
  setInterval(() => {
    if (min == 0 && sec == 0) {
      timerPrompt();
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

function start_timer8() {
  radio_status8();
  sec = 15;
  
  setInterval(() => {
    if (min8 == 0 && sec8 == 0) {
      return;
    }if (sec8 != 0) {
      sec8--;
      if (sec8 < 10) secDisplay8.innerHTML = '0' + sec8;
      else secDisplay7.innerHTML = sec7;
    }else {
      min7--;
      if (min7 < 10) minDisplay8.innerHTML = '0' + min8;
      else minDisplay8.innerHTML = min8;
      sec7 = 59;
    }
  }, 1000);
}

function radio_status8() {
  if (str.checked == true) {
  sec8 = 5;
  }else if (mtr.checked == true) {
    sec8 = 10;
  }else if (ltr.checked == true) {
    sec8 = 15;
  }
}