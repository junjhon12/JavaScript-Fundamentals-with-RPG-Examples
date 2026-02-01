// 1. Here is the data. Do not touch this array.
const products = [
    { name: "Gaming Mouse", price: 49.99 },
    { name: "Mechanical Keyboard", price: 129.99 },
    { name: "Monitor 24-inch", price: 199.99 },
    { name: "USB-C Cable", price: 19.99 }
];

const listContainer = document.querySelector("#product-list");
const loadBtn = document.querySelector("#load-btn");

// PSEUDOCODE GUIDE:
// 2. Add a 'click' event listener to the 'loadBtn'.
loadBtn.addEventListener('click', () => {

    // 3. Clear the listContainer first! (So we don't add duplicates if we click twice)
    //    Use: listContainer.innerHTML = "";
    listContainer.innerHtml = "";
    // 4. Start the LOOP using products.forEach().
    //    Pass a variable name like 'product' or 'item' into the function.
    products.forEach((product) => {
    
        // 5. INSIDE THE LOOP:
        //    a. Create a new div element (e.g., const card = ...)
        const card = document.createElement('div');
        //    b. Add the class "product-card" to it (card.classList.add("product-card"))
        card.classList.add('product-card');
        //    c. Set the innerText of the card to show the product Name and Price.
        //       (Hint: use product.name and product.price)
        card.innerHTML = product.name + ": $" + product.price;
        //    d. Append the card to the 'listContainer'.
        listContainer.appendChild(card);
    });

});