// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// 1. Create an Array named 'lunchSpots' with at least 4 text strings (e.g. "Burger King", "Sushi", etc).
// 2. Select the button (#decide-btn) and the result display (#result-display).
// 3. Add a click event listener to the button.
// 4. Inside the listener:
//    a. Calculate a 'randomIndex' using Math.floor and Math.random().
//    b. Use that index to get the chosen string from your array.
//    c. Update the innerText of the result display with the chosen string.
// ---------------------------------------------------------

// WRITE YOUR CODE BELOW
const lunchSpots = ["Burger King", "Sushi", "McDonald", "Pizza Hut"];
const decideBtn = document.querySelector("#decide-btn");

const result = document.querySelector("#result-display");

decideBtn.addEventListener("click", function() {
    const chosenSpot = lunchSpots[Math.floor(Math.random() * lunchSpots.length)];
    result.innerText = chosenSpot;
})