// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// 1. Select the textarea (#user-input) and the count span (#char-count).
// 2. Add an 'input' event listener to the textarea.
// 3. Inside the listener:
//    a. Get the length of the current text inside the textarea.
//    b. Update the innerText of the count span with that length.
//    c. IF the length is greater than 200, change the count span's color to 'red'.
//    d. ELSE, change the count span's color back to 'black' (or #555).
// ---------------------------------------------------------

// WRITE YOUR CODE BELOW
const textInput = document.querySelector('#user-input');
let charCount = document.querySelector('#char-count');

textInput.addEventListener ("input", () => {
    // Grabs the size of the texts
    const textLength = textInput.value.length;
    //Update the number from 0 to the textLength
    charCount.innerText = textLength;

    if (textLength > 200) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
})