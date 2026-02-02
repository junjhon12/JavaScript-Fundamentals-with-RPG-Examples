const cityDisplay = document.querySelector("#city");
const tempDisplay = document.querySelector("#temp");
const descDisplay = document.querySelector("#desc");
const btn = document.querySelector("#refresh-btn");

// SIMULATED API (Don't touch this function, just call it!)
function getWeatherAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: "New York",
                sys: { country: "US" },
                main: { temp: 72, feels_like: 70 },
                weather: [{ description: "partly cloudy" }]
            });
        }, 500);
    });
}

btn.addEventListener("click", async () => {
    
    // 1. Call the API and await the data.
    const data = await getWeatherAPI();
    
    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------
    
    // 2. DESTRUCTURE THE DATA.
    //    The object 'data' has a property called 'name'. Extract it.
    //    Const { name } = ...
    const { name } = data;
    
    // 3. DESTRUCTURE NESTED DATA.
    //    The object 'data.main' has a property called 'temp'.
    //    Extract it from data.main.
    const { temp } = data.main;
    
    // 4. DESTRUCTURE ARRAY DATA (Tricky!)
    //    The object 'data.weather' is an array. The first item [0] has 'description'.
    //    (You can just do: const desc = data.weather[0].description)
    const desc = data.weather[0].description;
    
    // 5. Update the UI with your new variables.
    cityDisplay.innerText = name;
    tempDisplay.innerText = temp + "°";
    descDisplay.innerText = desc;
    
    
});