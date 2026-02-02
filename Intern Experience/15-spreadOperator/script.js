const morningJams = ["Happy", "Walking on Sunshine"];
const eveningChill = ["Midnight City", "Comfortably Numb"];
const newSong = "Uptown Funk";

const btn = document.querySelector("#mix-btn");
const display = document.querySelector("#result-display");

btn.addEventListener("click", () => {
    
    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------
    
    // 1. Create a variable 'megaPlaylist'.
    // 2. Use the Spread Operator (...) to:
    //    a. Include all items from 'morningJams'.
    //    b. Include all items from 'eveningChill'.
    //    c. Add the 'newSong' string at the very end.
    // Example format: const all = [...arr1, ...arr2, item];
    const megaPlaylist = [...morningJams, ...eveningChill, newSong];
    
    // 3. Update the display. (I'll help with the formatting)
    display.innerHTML = megaPlaylist.join("<br>");

});