let wallet = 50;
const potionPrice = 10;
let numPotions = 2;
let totalCost = potionPrice * numPotions;
const discount = 5;
totalCost -= discount;
wallet -= totalCost;
console.log(`
    Potions brought: ${numPotions}\n
    Total cost: ${totalCost}\n
    Remaining amount: ${wallet}`);