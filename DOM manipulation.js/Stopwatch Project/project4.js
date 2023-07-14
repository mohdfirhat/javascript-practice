const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";


function stopWatch() {
  seconds++
  if(seconds/60 === 1){
    seconds = 0;
    minutes ++;
  
    if(minutes/60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if(seconds < 10) {
    leadingSeconds = seconds.toString();
  } else {
    leadingSeconds = seconds.toString();
  }
  if(minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if(hours < 10) {
    leadingHours = hours.toString();
  } else {
    leadingHours = hours.toString();
  }

  let displayTimer = document.getElementById('timer').innerText =
  leadingHours.padStart(2,'0') + ':' + leadingMinutes + ':' + leadingSeconds.padStart(2,'0');
}


startStopBtn.addEventListener('click', function() {
  if(timerStatus === 'stopped') {
    timerInterval = window.setInterval(stopWatch,1000);
    document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
    timerStatus= 'started'
  } else {
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = 'stopped'
  }
})
resetBtn.addEventListener('click',function() {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  
  document.getElementById('timer').innerHTML= "00:00:00";
})