const computerDisplay = document.querySelector("#comp-choice");
const winnerDisplay = document.querySelector("#winner-display");
const weapons = ["Rock", "Paper", "Scissors"];

// This function is called by the HTML buttons directly.
// 'playerSelection' will be "Rock", "Paper", or "Scissors" depending on what you clicked.
function playRound(playerSelection) {

    // 1. Generate a random computer choice.
    //    (Hint: Use Math.random(), Math.floor(), and the 'weapons' array length)
    const randomIndex = Math.floor(Math.random() * weapons.length);
    const computerSelection = weapons[randomIndex];

    // 2. Update the 'computerDisplay' text to show what the computer picked.
    computerDisplay.innerHTML = computerSelection;    
    // 3. COMPARE THE CHOICES (The Combat Logic):
    
    //    3a. IF playerSelection is equal to computerSelection:
    if (playerSelection === computerSelection) {
    //        Set 'winnerDisplay' text to "It's a Tie!".
    winnerDisplay.innerHTML = "It's a Tie!";
    //        Set 'winnerDisplay' color to "white".
    winnerDisplay.style.color = "White";
    }
    //    3b. ELSE IF:
    else if (
    //        (Player is Rock AND Computer is Scissors) OR    
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    //        (Player is Paper AND Computer is Rock) OR
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    //        (Player is Scissors AND Computer is Paper):
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
    //        Set 'winnerDisplay' text to "You Win!".
    winnerDisplay.innerHTML = "You Win!";
    //        Set 'winnerDisplay' color to "#00cec9" (Green-ish).
    winnerDisplay.style.color = "#00cec9";
    }
    //    3c. ELSE (If it's not a tie and you didn't win, you must have lost):
    else {
    //        Set 'winnerDisplay' text to "You Lose!".
    winnerDisplay.innerHTML = "You Lose!";
    //        Set 'winnerDisplay' color to "#d63031" (Red).
    winnerDisplay.style.color = "#d63031";
    }
}