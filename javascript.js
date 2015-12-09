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
var tomatoTimes = 0;      // How many pommmmmmodoros done

function secondsPassed() {
  var minutes = Math.round((seconds - 30)/60);

  //get minutes and seconds
  var remainingSeconds = seconds % 60;

  // display a 0 then the seconds when it's under 10 seconds
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  if (seconds == 0) {
    //stop counting down
    relaxTimer();
    //then go to the relax timer
  }

  else {
    //minus 1 second
    seconds--;
  }
}

function startPomodoro() {
//Start pomodoroTimer timer.
  //Set the pomodoro running to true.
  //Set the relax running to false.

//If pomodoro timer state is not running?
  // PLAY button, the pomodoro running is true.
  // PAUSE button, does nothing.
  // RESET button, resets pomodoro.
  // Update display.

//If pomodoro timer state is running?
  //  PAUSE button and the pomodoro running is false.
  //  PLAY button, does nothing
  // RESET button, resets pomodoro.
  // Update display.

//Any state?
  // RESET button, resets pomodoro.

//Update timer on screen to show time remaining.

}



function pomodoroTimer () {
  //set seconds to 1500
  //start it counting down

  // Add +1 to tomato times on completion
  tomatoTimes++;

}

function relaxTimer () {
  //set seconds to 300
  //start it counting down

  //on completion set it back to pomodoroTimer
}

function clear() {
  //set timer back to when pomodoroTimer and relaxTimer are done
  //set timer back when user clicks clock
}

function pomodoroCounter() {
  if (tomatoTimes == 3) {
    relax = 600 //10 mins or something
  }
}


//On page load


// When pomodoro = 0
  // Change to relax timer
    // Set the pomodoro running to true.
    // Set the relax running to false.



//Start relax timer.
  //Set the timer relax running to true.
  //Set the timer pomodoro running to false.
    //click the PLAY button and the timer counts down.
    //click the PAUSE button and the timer counts down.
    //click the RESET button again and it resets.


//Reset time

//Reset relax
</script>
