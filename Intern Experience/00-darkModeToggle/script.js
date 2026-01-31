// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// 1. Select the button with id 'theme-btn' and store it in a variable.
// 2. Select the 'body' element and store it in a variable.
// 3. Add a 'click' event listener to the button.
// 4. Inside the function, toggle the class 'dark-mode' on the body.
// ---------------------------------------------------------

// WRITE YOUR CODE BELOW THIS LINE

const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

/**
AI solution -
    const themeBtn = document.querySelector("#theme-btn");
    // Arrow functions '() => {}' are just a shorter way to write 'function() {}'
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
*/