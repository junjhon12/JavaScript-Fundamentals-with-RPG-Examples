function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    return result;
}

console.log(rollDice(6));
console.log(rollDice(20));
console.log(rollDice(100));
console.log(rollDice(4));
console.log(rollDice(8));