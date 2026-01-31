// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// 1. Select the input (#task-input), the button (#add-btn), and the list (#task-list).
// 2. Add a 'click' event listener to the "Add" button.
// 3. Inside the function:
//    a. Get the text value from the input.
//    b. IF the input is NOT empty (simple check: if (inputValue !== "")):
//       i. Create a new 'li' element.
//       ii. Set the innerText of the 'li' to the input value.
//       iii. Append the 'li' to the list (#task-list).
//       iv. Clear the input field (set value to "").
// ---------------------------------------------------------

// WRITE YOUR CODE BELOW
const input = document.querySelector("#task-input");
const button = document.querySelector('#add-btn');
const list = document.querySelector('#task-list');

button.addEventListener('click', () => {
    const textValue = input.value;
    if (textValue !== "") {
        const newLi = document.createElement('li');
        newLi.innerText = input.value;
        list.appendChild(newLi);
        input.value = "";
    }
})