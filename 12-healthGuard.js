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

class Mage extends Character {
    constructor(name, health, strength, mana) {
        super(name, health, strength);
        this.mana = mana;
    }

    castSpell(target) {
        this.mana -= 5;
        target.health -= 20;
        console.log(`${this.name} casts Fireball on ${target.name}`);
        console.log(`${target.name} HP is now ${target.health}`);
    }
}

const Dummy = new Character("Training Dummy", 50, 0);
Dummy.health = -100;
console.log(`Dummy HP after setting to -100: ${Dummy.health}`);