const cart = [
    { name: "Laptop", price: 999.99 },
    { name: "Mouse", price: 25.50 },
    { name: "Keyboard", price: 75.00 },
    { name: "Monitor", price: 200.00 }
];

const btn = document.querySelector("#calc-btn");
const totalDisplay = document.querySelector("#total-display");
const itemList = document.querySelector("#item-list");

// Helper to show items (I wrote this for you)
cart.forEach(item => {
    itemList.innerHTML += `<div class="item"><span>${item.name}</span><span>$${item.price}</span></div>`;
});

btn.addEventListener("click", () => {
    
    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------
    
    // 1. Use .reduce() on the 'cart' array to calculate the total price.
    //    WARNING: The array contains OBJECTS, not just numbers.
    //    You need to add 'item.price' to the total.
    
    //    Syntax Hint: 
    //    const total = cart.reduce((acc, item) => {
    //        return acc + item.price;
    //    }, 0);
    const total = cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    
    // 2. Update 'totalDisplay' with the result.
    //    (Optional: Use .toFixed(2) to make it look like money)
    totalDisplay.innerText = '$' + total.toFixed(2);
    
});