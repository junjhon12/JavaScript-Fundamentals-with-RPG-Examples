const btn = document.querySelector("#load-btn");
const resultsArea = document.querySelector("#results-area");
const log = document.querySelector("#log");

// --- FAKE APIs (Do not touch) ---
const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function getUser() { await delay(2000); return "User: John Doe"; }
async function getPosts() { await delay(2000); return "Posts: [Image1, Image2]"; }
async function getFriends() { await delay(2000); return "Friends: 500"; }
// -------------------------------

btn.addEventListener("click", async () => {
    resultsArea.innerHTML = "";
    log.innerText = "Status: Loading...";
    const startTime = Date.now();

    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------
    
    // 1. Fire off all three functions (getUser, getPosts, getFriends) WITHOUT awaiting them immediately.
    //    Store the promises in variables.
    const userPromise = getUser();
    const postPromise = getPosts();
    const friendPromise = getFriends();
    
    // 2. Use 'await Promise.all([...])' to wait for them to finish.
    //    Store the result in a variable called 'data'.
    const data = await Promise.all([userPromise, postPromise, friendPromise]);
    
    // ---------------------------------------------------------
    
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    
    log.innerText = `Status: Complete in ${duration}s`;
    
    // 3. Display the data (Data is an array: [user, posts, friends])
    //    resultsArea.innerHTML = `
    //       <div class="card">${data[0]}</div>
    //       <div class="card">${data[1]}</div>
    //       <div class="card">${data[2]}</div>
    //    `;

    resultsArea.innerHTML = `
        <div class="card">${data[0]}</div>
        <div class="card">${data[1]}</div>
        <div class="card">${data[2]}</div>
    `;
});