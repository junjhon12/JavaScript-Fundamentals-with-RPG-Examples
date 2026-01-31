// A fake function that simulates a 2-second delay
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loginUser() {
    console.log("Attempting login...");
    
    // The code pauses HERE for 2 seconds, but the browser stays responsive
    await wait(2000); 
    
    console.log("Login Successful!");
}

loginUser();
console.log("This runs BEFORE the login finishes!");

async function getPlayerProfile() {
    try {
        await wait(2000);

        const profile = { name: "break", rank: "Admin"};

        console.log(`Data Received: ${JSON.stringify(profile)}`);
        throw new Error("Server Down");
    } catch (error) {
        console.log("Error:Could not connect to server.");
    }
}

getPlayerProfile();