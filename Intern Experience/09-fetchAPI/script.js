const quoteText = document.querySelector("#quote-text");
const authorText = document.querySelector("#author-text");
const btn = document.querySelector("#fetch-btn");

// PSEUDOCODE GUIDE:

// 1. Create an ASYNC function called 'getNewQuote'.
async function getNewQuote() {
//    Inside the function:
//    a. Create a variable 'response' that AWAITS a fetch() to "https://dummyjson.com/quotes/random"
    const response = await fetch("https://dummyjson.com/quotes/random");
//    b. Create a variable 'data' that AWAITS response.json()
    const data = await response.json();
//    c. Log 'data' to the console so you can see what it looks like (optional but recommended).
    console.log(data);
//    d. Update 'quoteText.innerText' using data.quote
    quoteText.innerText = data.quote;
//    e. Update 'authorText.innerText' using data.author
    authorText.innerText = data.author;
}

// 2. Add a 'click' event listener to the button.
btn.addEventListener("click", () => {
//    Inside the listener, just call the 'getNewQuote' function.
    getNewQuote();
})
