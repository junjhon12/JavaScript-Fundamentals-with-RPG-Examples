const output = document.querySelector("#output");
const btn = document.querySelector("#run-btn");

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

// 1. Define a class named 'Player'.
class Player {
    
    // 2. Add a constructor that takes 'name' and 'type' (e.g. Mage, Warrior).
    //    Inside, save them to 'this.name' and 'this.type'.
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    // 3. Add a method named 'introduce()'.
    //    It should return a string: "I am [name], the [type]!"
    introduce() {
        return `I am ${this.name}, the ${this.type}!`
    }
}

btn.addEventListener("click", () => {
    output.innerHTML = ""; // Clear screen

    // 4. Create two new players using the 'new' keyword.
    //    p1: Name "Aragon", Type "Warrior"
    const Aragon = new Player("Aragon", "Warrior");
    //    p2: Name "Gandalf", Type "Wizard"
    const Gandalf = new Player("Gandalf", "Wizard");
    
    // 5. Call .introduce() on both of them and log it to the output.
    //    Example: output.innerHTML += p1.introduce() + "<br>";
    output.innerHTML += Aragon.introduce() + "<br>" + Gandalf.introduce();
});