const form = document.querySelector("#email-form");
const emailInput = document.querySelector("#email-input");
const messageDisplay = document.querySelector("#message-display");

// PSEUDOCODE GUIDE:
// 1. Listen for the 'submit' event on the 'form' variable.
//    (Pass 'event' or 'e' into the function so we can control it)
form.addEventListener('submit', (e) => {

    // 2. STOP the browser from reloading the page using preventDefault().
    e.preventDefault();
    
    // 3. Get the value currently inside the 'emailInput'.
    const email = emailInput.value;
    
    // 4. CHECK: Is the value an empty string ""?
        // 4a. IF EMPTY:
        //     Change 'messageDisplay' text to "Please enter an email!".
        //     Change 'messageDisplay' color to "red".
        
        // 4b. ELSE (If not empty):
        //     Change 'messageDisplay' text to "Subscribed successfully!".
        //     Change 'messageDisplay' color to "green".
        //     Clear the email input value (set it to "").
    if (email === "") {
        messageDisplay.innerHTML = "Please enter an email!";
        messageDisplay.style.color = "red";
    } else if (email !== "") {
        messageDisplay.innerHTML = "Subscribed successfully!";
        messageDisplay.style.color = "green";
        emailInput.value = "";
    }
        

});