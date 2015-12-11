<span id="countdown" class="pomodoro"></span>
<script>

//Set default time
var seconds = 1500; //25min default for pomodoro
var pomodoroTimes = 0;//Number of times pomodoro and relax have completed
var state = 0; //What state are things moving in?
// 0 - off
// 1 - start
// 2 - pomodoro
// 3 - relax

function Pomodoro (pomodoroTime, breakTime) {
  var state = 0;
  var seconds = 1500;  // 25 minute pomodoro
  secondsPassed();

  }
}

function pomodoroStart () {
  //start ticking
}

function pomodoroPause () {

}

function pomodoroReset () {
   //set back to default time
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

      relaxTimer();
    }
    else (state === 2) {

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


function pomodoroCounter() {
  if (pomodoroTimes == 3) {
    seconds = 600 //10 mins or something
  }
}


Pomodoro();
</script>
