const input = document.querySelector("#search-input");
const log = document.querySelector("#log");

// 1. Create a variable outside the function to store the timer ID.
//    (Let's call it 'debounceTimer')
let debounceTimer;

// This simulates the heavy API call
function performSearch(query) {
    const entry = document.createElement("div");
    entry.className = "entry";
    entry.innerText = `[API REQUEST SENT]: searching for "${query}"`;
    log.prepend(entry); // Adds to top of list
}

input.addEventListener("input", (e) => {
    const text = e.target.value;

    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------
    
    // 2. CANCEL the previous timer using clearTimeout().
    //    Pass 'debounceTimer' into it.
    clearTimeout(debounceTimer);
    
    // 3. SET a new timer using setTimeout().
    //    a. Assign the result to 'debounceTimer'.
    //    b. Set the delay to 500ms.
    //    c. Inside the timeout function, call performSearch(text).
    debounceTimer = setTimeout( () => {
        performSearch(text);
    }, 500)
});