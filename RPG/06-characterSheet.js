const hero = {
    name: "Bob",
    level: 2,
    stats: {
        strength: 5,
        dexterity: 4,
        intelligence: 5
    },

    attack: function() {
        return `Damage: ${this.level + this.stats.strength}`;
    }
};

console.log(hero.stats.strength);
console.log(hero.attack())
