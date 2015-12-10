<span id="countdown" class="pomodoro"></span>
<script>

//Set default time
var seconds = 1500; //25min default for pomodoro
var tomatoTimes = 0;//Number of times pomodoro and relax have completed
var pomodoroStatus = False; //Is the timer running?

function pomodoroTimer () {
  var message = "It's work time.";
  var seconds = 1500;  // 25 minute pomodoro

  var pomodoroStatus = true;

  if (pomodoroStatus === true)
    secondsPassed()
    //go to secondsPassed to show seconds
  }
  else {
      //relaxTimer
  // Add +1 to tomato times on completion
    tomatoTimes++;

  }
}

function relaxTimer () {

  var message = "Take some time to relax.";
  var seconds = 300;      // 5 minutes relax is the usual time

  var pomodoroStatus = false;

  //on completion
  //go back to pomodoroTimer
  pomodoroMessage();
  //pomodoroMessage
}

function secondsPassed() {
  var minutes = Math.floor((seconds - 30)/60);

  var remainingSeconds = seconds % 60;

  // display a 0 then the seconds remaining when it's under 10 seconds
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  if (seconds === 0) {
    //stop counting down
    if (pomodoroStatus === true) {
      //Does this work?
      relaxTimer();
    }
    else (pomodoroStatus === false) {
      //Does this work?
      pomodoroTimer();
    }
  }
  else {
    seconds--;
  }
}

function clearTimer() {
  message = "Pomodoro reset.";
  var seconds = 1500;
}

function pomodoroMessage () {
    //print message from each function
}

function pomodoroCounter() {
  if (tomatoTimes == 3) {
    seconds = 600 //10 mins or something
  }
}

function timerDone() {
  var bell = 'bell.wav';
  var audio = new Audio(bell);
	audio.play();
}

</script>
