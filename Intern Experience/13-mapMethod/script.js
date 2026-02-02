const rawPrices = [5, 12.99, 9.5, 40, 100];
const container = document.querySelector("#price-container");
const btn = document.querySelector("#format-btn");

btn.addEventListener("click", () => {
    
    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------
    
    // 1. Use .map() on 'rawPrices'.
    //    Inside the map function:
    //    a. Convert the number to a string with 2 decimals using .toFixed(2).
    //    b. Return a string that looks like this:
    //       `<div class="price-tag">$${formattedPrice}</div>`
    const htmlArray = rawPrices.map(price => {
        // Return your HTML string here
        const formattedPrice = price.toFixed(2)
        return `<div class="price-tag">$${formattedPrice}</div>`
    });

    // 2. Use .join("") on your new htmlArray to turn it into a single long string.
    const htmlString = htmlArray.join("");
    
    // 3. Set container.innerHTML equal to that long string.
    container.innerHTML = htmlString;
});