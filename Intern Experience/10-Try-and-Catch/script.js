const searchBtn = document.querySelector("#search-btn");
const idInput = document.querySelector("#user-id");
const nameDisplay = document.querySelector("#name");
const emailDisplay = document.querySelector("#email");
const card = document.querySelector("#card");
const errorMsg = document.querySelector("#error-msg");

// PSEUDOCODE GUIDE:

// 1. Create an async function called 'findUser'.
async function findUser() {
    
    // 2. Get the value from the input.
    const userId = idInput.value;

    // 3. Reset the UI (Hide error, Hide card) before we start.
    errorMsg.classList.add("hidden");
    card.classList.add("hidden");

    // 4. START THE TRY BLOCK
    try {
        // 5. Fetch from `https://jsonplaceholder.typicode.com/users/${userId}`
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // 6. CHECK: If response.ok is FALSE (checking for 404):
        if (!response.ok) {
        //    Throw a new Error("User does not exist").
            throw new Error("User does not exist");
        }
        // 7. Get the JSON data (await response.json()).
        const data = await response.json();
        // 8. UPDATE UI:
        //    a. Set nameDisplay.innerText to data.name
            nameDisplay.innerText = data.name;
        //    b. Set emailDisplay.innerText to data.email
            emailDisplay.innerText = data.email;
        //    c. Show the card (remove "hidden" class).
            card.classList.remove("hidden");
    } 
    // 9. CATCH BLOCK (This runs if step 6 fails or network fails)
    catch (error) {
        // 10. Show the errorMsg element (remove "hidden").
            errorMsg.classList.remove("hidden");
        // 11. Set errorMsg.innerText to error.message.
            errorMsg.innerText = error.message;
    }
}

// 12. Add click listener to button
searchBtn.addEventListener("click", findUser);