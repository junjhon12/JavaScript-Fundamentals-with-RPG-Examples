class GameManager {
    static rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    static duel(char1,char2) {
        let char1Roll = this.rollDice(100);
        let char2Roll = this.rollDice(100);

        if (char1Roll > char2Roll) {
            console.log(`${char1.name} rolled ${char1Roll}, ${char2.name} rolled ${char2Roll}. ${char1.name} wins!`);
        } else if (char2Roll > char1Roll) {
            console.log(`${char1.name} rolled ${char1Roll}, ${char2.name} rolled ${char2Roll}. ${char2.name} wins!`);
        } else {
            console.log(`${char1.name} rolled ${char1Roll}, ${char2.name} rolled ${char2Roll}. It's a tie!`);
        }
    }
}

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this._health = health;
        this.strength = strength;
    }

    swordAttack(target) {
        target.health -= this.strength;
        console.log(`${this.name} hits ${target.name} for ${this.strength} dmg.`);
        console.log(`${target.name} HP is now ${target.health}`);
    }

    get health() {
        return this._health;
    }
    set health(newValue) {
        if (newValue < 0) {
            this._health = 0;
            console.log("Death Logic Triggered.")
        } else {
            this._health = newValue;
        }
    }
}

const characterA = new Character("A", 10, 4);
const characterB = new Character("B", 12, 3);

GameManager.duel(characterA, characterB);