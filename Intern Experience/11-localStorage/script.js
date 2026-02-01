const noteArea = document.querySelector("#note-area");
const saveBtn = document.querySelector("#save-btn");

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

// STEP 1: LOAD SAVED DATA (When the page starts)
// 1a. Create a variable 'savedText' and get the item "myMemo" from localStorage.
// 1b. Check IF 'savedText' exists.

//     If it does, set noteArea.value to savedText.
//     (TRY USING YOUR NEW BUFF: savedText && ...)


// STEP 2: SAVE NEW DATA (When button is clicked)
// 2a. Add a click event listener to 'saveBtn'.

//     Inside the function:
//     i. Get the current value from 'noteArea'.
//     ii. Save that value to localStorage using the key "myMemo".
//     iii. (Optional) Alert the user "Saved!".

// WRITE YOUR CODE BELOW

let savedText = localStorage.getItem("myMemo");
savedText && (noteArea.value = savedText);
saveBtn.addEventListener("click", () => {
    const currentValue = noteArea.value;
    localStorage.setItem("myMemo", currentValue);
    alert("Saved!");
})