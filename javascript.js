<span id="countdown" class="pomodoro"></span>
<script>

//Pomodoro timer

//Displays a count down timer in the middle of the page
//click the clock image to stop/reset the timer

//TODO: get better variable/function names
var pomodoroTime = 1500;  // 25 minutes pomodoro is the usual
var relaxTime = 300;      // 5 minutes relax is the
var extendedRelaxTime = 99999; // every 4th/3rd? time it is extended (TODO: fix meh)

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
    relaxTimer();
    //then go to the relax timer
  }
  else {
    seconds--;
  }
}


function pomodoroTimer () {
  // Start pomodoro countdown

  var pomodoroTimer = true;
  var relaxTimer = false;

  //If pomodoro timer state is false?

  //If pomodoro timer state is true?

  //Else

  //Update timer on screen to show time remaining.

  // Add +1 to tomato times on completion
  tomatoTimes++;
  //go to relaxTimer

}

function relaxTimer () {
  var pomodoroTimer = false;
  var relaxTimer = true;

  //set timer to 300
  var relaxTime = 300;

  //start it counting down

  //on completion
  //go back to pomodoroTimer
}

function clear() {
  //set timer back to when pomodoroTimer and relaxTimer are done
  //set timer back when user clicks clock
}


function pomodoroCounter() {
  if (tomatoTimes == 3) {
    //set a global relax or put it inside the relax timer in an else
    relax = 600 //10 mins or something

  }
}

</script>
