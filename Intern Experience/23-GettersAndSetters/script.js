const display = document.querySelector("#display-balance");
const input = document.querySelector("#amount-input");
const btn = document.querySelector("#update-btn");
const log = document.querySelector("#log");

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

class BankAccount {
    constructor() {
        // 1. Initialize a "private" property '_balance' to 0.
        this._balance = 0;
    }

    // 2. Create a GETTER named 'balance'.
    //    It should simply return 'this._balance'.
    get balance() {
        return this._balance;
    }

    // 3. Create a SETTER named 'balance'.
    //    It accepts one parameter (value).
    set balance(value) {
    //    a. Check IF 'value' is less than 0.
        if (value < 0) {
    //       If yes: Update 'log.innerText' to "Security Alert: Negative Balance!" and return.
            log.innerText = `Security Alert: Negative Balance!`;
        } else {
    //    b. If no: Set 'this._balance' equal to 'value' AND clear the log text.
            this._balance = value;
            log.innerText = '';
        }
    }
}

// Instantiate the account
const myAccount = new BankAccount();

btn.addEventListener("click", () => {
    const amount = Number(input.value);
    
    // 4. Try to set the balance.
    //    Notice we assign it like a variable, but the SETTER will run.
    myAccount.balance = amount;
    
    // 5. Update the display using the GETTER.
    display.innerText = "$" + myAccount.balance;
});