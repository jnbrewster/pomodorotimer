<span id="countdown" class="pomodoro"></span>
<script>

//Set default time
var seconds = 1500; //25min default for pomodoro
var pomodoroTimes = 0;//Number of times pomodoro and relax have completed
var state = 0; //What state are things moving in?
//0 default start
//maybe put functions first? -pause / restart

//1 start pomodoro
//2 start relax break


function pomodoroTimer () {
  var message = "It's work time.";
  var seconds = 1500;  // 25 minute pomodoro

  var state = 1;
  secondsPassed();

  }
}

function relaxTimer () {

  var message = "Take some time to relax.";
  var seconds = 300;      // 5 minutes relax is the usual time

  var state = 2;
  pomodoroMessage();
  secondsPassed();
}

function secondsPassed() {
  var minutes = Math.floor((seconds - 30)/60);
  var remainingSeconds = seconds % 60;
  //Get minutes:seconds going

  // display a 0 then the seconds remaining when it's under 10 seconds
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  if (seconds === 0) {
    if (state === 1) {

      pomodoroMessage();
      relaxTimer();
    }
    else (state === 2) {

      pomodoroMessage();
      pomodoroCounter();
      pomodoroTimer();
      //finish it
      //set back to default but increment pomodoroTimes++;
    }
  // Add +1 to tomato times on completion
  //pomodoroTimes++;

  }
  else {
    seconds--;
    //display minutes:remainingSeconds counter
  }
}

function clearTimer() {
  message = "Pomodoro reset.";
  var seconds = 1500;
}

function pomodoroMessage () {
  window.alert(message);
}

function pomodoroCounter() {
  if (pomodoroTimes == 3) {
    seconds = 600 //10 mins or something
  }
}

function timerDone() {
  var bell = 'bell.wav';
  var audio = new Audio(bell);
	audio.play();
}

pomodoroTimer();
</script>
