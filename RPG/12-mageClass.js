class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    swordAttack(target) {
        target.health -= this.strength;
        console.log(`${this.name} hits ${target.name} for ${this.strength} dmg.`);
        console.log(`${target.name} HP is now ${target.health}`);
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

const Orc = new Character("Orc", 100, 34);
const Merlin = new Mage("Merlin", 50, 2, 120);
Merlin.swordAttack(Orc);
Merlin.castSpell(Orc);
