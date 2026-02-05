const display = document.querySelector("#count-display");
const btn = document.querySelector("#vote-btn");

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

// 1. Create a function named 'setupVotingMachine'.
//    Inside it:
//    a. Define a variable 'votes' and set it to 0.
//    b. Return a FUNCTION (Closure).
//       - The inner function should increase 'votes' by 1.
//       - Then return the new 'votes' value.
function setupVotingMachine() {
    let votes = 0;
    return function() {
        votes++;
        return votes;
    }
};


// 2. Create the secure voting instance.
//    Call 'setupVotingMachine' and store the result in a variable named 'castVote'.
//    (Now 'castVote' is the function that has access to the private variable).
const castVote = setupVotingMachine();

btn.addEventListener("click", () => {
    
    // 3. Call your secure function 'castVote()'.
    //    Store the result in a variable.
    const currentVote = castVote();
    
    // 4. Update the display with the result.
    display.innerHTML = currentVote;
});