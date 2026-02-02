const btn = document.querySelector("#submit-btn");
const input = document.querySelector("#player-name");
const statusMsg = document.querySelector("#status-msg");

btn.addEventListener("click", async () => {
    
    // 1. Get the player name from the input.
    const name = input.value;
    
    // 2. Create an object called 'scoreData'.
    //    It should have keys: username (set to name) and score (set to 9999).
    const scoreData = {
        username: name,
        score: 9999
    };
    
    statusMsg.innerText = "Sending...";

    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------

    // 3. Start a TRY block.
    try {
        // 4. Use 'await fetch(...)'.
        //    URL: "https://jsonplaceholder.typicode.com/posts"
        //    Options Object needs:
        //      - method: "POST"
        //      - headers: { "Content-Type": "application/json" }
        //      - body: JSON.stringify(scoreData)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(scoreData)
        })
        // 5. Check if response.ok is true.
        //    If yes, update statusMsg to "HIGH SCORE SAVED!".
        if(response.ok) {
            statusMsg.innerText = "HIGH SCORE SAVED!";
        }
        //    If no, update statusMsg to "SERVER ERROR".
        else {
            statusMsg.innerText = "SERVER ERROR";
        }
    } catch (error) {
        // 6. Handle network errors (statusMsg = "OFFLINE").
        statusMsg.innerText = "OFFLINE";
    }
    
});