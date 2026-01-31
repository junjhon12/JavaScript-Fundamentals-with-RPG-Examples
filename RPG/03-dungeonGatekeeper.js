const playerLevel = 15;
const hasPass = true;
const isAdmin = false;

if (isAdmin) {
    console.log('Instant access');
} else if (hasPass && playerLevel >= 10) {
    console.log("Access Granted.");
} else if (hasPass && playerLevel < 10) {
    console.log('Access Denied: Level too low.');
} else {
    console.log('Access Denied: No Pass.');
}