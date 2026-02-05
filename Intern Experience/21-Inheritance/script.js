const output = document.querySelector("#output");
const btn = document.querySelector("#run-btn");

// BASE CLASS (Parent)
class Player {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        return `I am ${this.name}.`;
    }
}

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

// 1. Create a class 'Warrior' that EXTENDS 'Player'.
//    a. Add a method 'attack()' that returns: "[name] swings a giant sword!"
class Warrior extends Player {
    constructor(name) {
        super(name);
    }

    attack() {
        return `${this.name} swings a giant sword!`;
    }
}

// 2. Create a class 'Healer' that EXTENDS 'Player'.
//    a. Add a method 'heal()' that returns: "[name] casts a holy light!"
class Healer extends Player {
    constructor(name) {
        super(name);
    }
    heal() {
        return `${this.name} casts a holy light!`;
    }
}

btn.addEventListener("click", () => {
    output.innerHTML = "";
    
    // 3. Create a Warrior named "Conan".
    const Conan = new Warrior("Conan");
    // 4. Create a Healer named "Mercy".
    const Mercy = new Healer("Mercy");
    // 5. Log their specific moves to the output.
    //    Example: output.innerHTML += conan.attack() + "<br>";
    //    Example: output.innerHTML += mercy.heal();
    output.innerHTML += Conan.attack() + "<br>";
    output.innerHTML += Mercy.heal();
});