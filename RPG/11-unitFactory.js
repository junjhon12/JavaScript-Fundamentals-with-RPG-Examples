class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(target) {
        target.takeDamage(this.strength);
        console.log(`${this.name} hits ${target.name} for ${this.strength} dmg.`);
        console.log(`${target.name} HP is now ${target.health}`);
    }

    takeDamage(amount) {
        this.health -= amount;
        // Prevent negative health
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

const Hero = new Character('Hero1', 50, 25);
const Bandit = new Character('Bandit2', 20, 5);

Hero.attack(Bandit);