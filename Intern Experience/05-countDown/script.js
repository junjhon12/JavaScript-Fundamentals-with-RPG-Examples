// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// 1. Create a variable named 'timeLeft' and set it to 10.
// 2. Select the display element (#countdown-display).
// 3. Create a 'setInterval' that runs every 1000 milliseconds.
// 4. Capture the interval ID in a variable (e.g., const timerId = ...).
// 5. Inside the interval function:
//    a. Decrease 'timeLeft' by 1.
//    b. Update the display's innerText to the new 'timeLeft'.
//    c. IF 'timeLeft' equals 0:
//       i. Stop the timer using clearInterval(timerId).
//       ii. Change the display text to "LIFT OFF!".
// ---------------------------------------------------------

// WRITE YOUR CODE BELOW
let timeLeft = 10;
const countdownDisplay = document.querySelector("#countdown-display");
let timer = setInterval(() => {
    timeLeft -= 1
    countdownDisplay.innerText = timeLeft
    if (timeLeft == 0) {
        clearInterval(timer)
        countdownDisplay.innerText = "LIFT OFF!"
    }
}, 1000);
