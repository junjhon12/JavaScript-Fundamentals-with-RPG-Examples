const lootValues = [10, 50, 100, 5, 200, 15];
const highValueLoot = lootValues.filter(lootValue => lootValue > 20);
const formattedLoot = highValueLoot.map(lootValue => `${lootValue} Gold`);

console.log(highValueLoot);
console.log(formattedLoot);