const button = document.querySelector('#increment-btn');
const display = document.querySelector('#counter-display');
let count = 0;
button.addEventListener("click", () => {
    count++;
    display.textContent = count;
    if (count == 10) {
        display.style.color = "red";
    }
})