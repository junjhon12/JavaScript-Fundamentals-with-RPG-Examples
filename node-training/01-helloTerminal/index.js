const fs = require('fs'); // Import the 'File System' module

// 1. Create a message with a timestamp
const logMessage = "Log Entry: User started Node.js at " + new Date() + "\n";

// 2. Write the file (Creates 'server.log' in your G: drive folder)
fs.appendFileSync('server.log', logMessage);

console.log("Log updated.");

// 3. Read the file back to prove it exists
const currentLog = fs.readFileSync('server.log', 'utf8');

console.log("\n--- CONTENT OF SERVER.LOG ---");
console.log(currentLog);