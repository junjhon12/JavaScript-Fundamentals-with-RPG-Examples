const backpack = ["Sword", "Shield", "Food"];
backpack[2] = "Empty Bottle";
backpack.push("stone");

console.log(`
    First Item: ${backpack[0]}
    Total Items: ${backpack.length}
    Inventory: ${backpack.join(', ')}`);
