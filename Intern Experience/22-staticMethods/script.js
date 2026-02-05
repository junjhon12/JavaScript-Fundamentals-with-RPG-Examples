const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const btn = document.querySelector("#calc-btn");
const resultDisplay = document.querySelector("#result");

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

// 1. Create a class 'MathHelper'.
class MathHelper {
    
    // 2. Add a STATIC method called 'power(base, exponent)'.
    //    It should return base to the power of exponent.
    //    Hint: Use base ** exponent
    static power(base, exponent) {
        return base ** exponent;
    }
}


btn.addEventListener("click", () => {
    const n1 = Number(num1Input.value);
    const n2 = Number(num2Input.value);
    
    // 3. Call the static method directly on the class name.
    //    const answer = MathHelper.power(n1, n2);
    const answer = MathHelper.power(n1, n2);
    
    // 4. Update the display.
    //    resultDisplay.innerText = answer;
    resultDisplay.innerText = answer;
});