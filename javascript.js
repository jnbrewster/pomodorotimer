<span id="countdown" class="pomodoro"></span>
<script>

var extendedRelaxTime = 9000; // every 4th/3rd? time it is extended (TODO: fix meh)

var seconds = 60;
var tomatoTimes = 0;

function secondsPassed() {
  var minutes = Math.round((seconds - 30)/60);

  var remainingSeconds = seconds % 60;

  // display a 0 then the seconds remaining when it's under 10 seconds
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  if (seconds == 0) {
    //stop counting down
    //TODO: add true or false here to decide to go to:
    // pomodoroTimer or relaxTimer
  }
  else {
    seconds--;
  }
}

function pomodoroTimer () {
  // Start pomodoro countdown

  var message = "It's work time."
  var seconds = 1500;  // 25 minutes pomodoro is the usual time

  var pomodoroTimer = true;
  var relaxTimer = false;

  if (var seconds > 0) {
      //go to secondsPassed()
      //then decide to go to relaxTimer
  }
  else {
      //go to relax timer
  }

  // if seconds > 0 loop and countdown
  //Else

  //Update timer on screen to show time remaining.

  // Add +1 to tomato times on completion
  tomatoTimes++;
  //go to relaxTimer

}

function relaxTimer () {

  var message = "Take some time to relax."
  var relaxTime = 300;      // 5 minutes relax is the usual time

  var pomodoroTimer = false;
  var relaxTimer = true;

  //set timer to 300
  var relaxTime = 300;

  //start it counting down

  //on completion
  //go back to pomodoroTimer
}

function clear() {
  message = "Pomodoro reset."
  var seconds = 1500;


  //set timer to pomodoroTimer
}

function pomodorMessage () {
    //print message
}



function pomodoroCounter() {
  if (tomatoTimes == 3) {
    //set a global relax or put it inside the relax timer in an else
    relax = 600 //10 mins or something

  }
}

</script>
