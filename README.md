# Code Quest: JavaScript Adventures

A beginner-friendly JavaScript learning project that teaches core programming concepts through RPG and gaming-themed exercises. Each lesson builds upon fundamental JavaScript skills while creating fun, interactive game mechanics.

## 🎮 Project Overview

This project contains 10 progressive exercises designed to teach JavaScript fundamentals through practical, game-development scenarios. From character creation to combat simulation, each lesson introduces new concepts in an engaging, relatable context.

## 📚 What You'll Learn

- **Variables & Data Types** - Character stats, health points, and inventory
- **Operators** - Calculations for damage, costs, and item management
- **Arrays** - Inventory systems and loot management
- **Conditional Logic** - Access control and game state management
- **Loops** - Combat simulation and turn-based mechanics
- **Functions** - Reusable game mechanics like dice rolling
- **Objects** - Complex character data structures
- **Array Methods** - Filtering and transforming loot data
- **Async/Await** - Simulating server requests and delays
- **DOM Manipulation** - Interactive counter application

## 🗂️ Project Structure

```
javascript-rpg-learning/
│
├── .gitattributes
├── 00-rpgCharCard.js          # Variables & string interpolation
├── 01-merchantShop.js         # Math operators & variable updates
├── 02-inventoryManager.js     # Arrays & array methods
├── 03-dungeonGatekeeper.js    # Conditional statements (if/else)
├── 04-combatSimulator.js      # While loops & game logic
├── 05-diceRoller.js           # Functions & random numbers
├── 06-characterSheet.js       # Objects & methods
├── 07-lootFilter.js           # Array methods (filter, map)
├── 08-dataFetcher.js          # Async/await & error handling
└── 09-counterApp.js           # DOM manipulation & events
```

## 📖 Lesson Breakdown

### 00 - RPG Character Card
**Concepts**: Variables (const, let), template literals, data types
```javascript
// Learn to create and modify character stats
const charName = "Brook";
let healthPoints = 100;
```

### 01 - Merchant Shop
**Concepts**: Arithmetic operators, variable reassignment
```javascript
// Calculate purchase costs and wallet balance
let wallet = 50;
const potionPrice = 10;
```

### 02 - Inventory Manager
**Concepts**: Arrays, array indexing, push(), join()
```javascript
// Manage a character's backpack inventory
const backpack = ["Sword", "Shield", "Food"];
```

### 03 - Dungeon Gatekeeper
**Concepts**: Conditional statements, logical operators, boolean logic
```javascript
// Control access based on level and permissions
if (isAdmin) { /* grant access */ }
```

### 04 - Combat Simulator
**Concepts**: While loops, game state management
```javascript
// Simulate turn-based combat until victory or defeat
while(heroHP > 0 && monsterHP > 0) { /* fight */ }
```

### 05 - Dice Roller
**Concepts**: Functions, parameters, return values, Math.random()
```javascript
// Create a reusable dice rolling function
function rollDice(sides) { /* roll dice */ }
```

### 06 - Character Sheet
**Concepts**: Objects, nested objects, methods, `this` keyword
```javascript
// Build complex character data with stats and abilities
const hero = { name: "Bob", stats: { strength: 5 } };
```

### 07 - Loot Filter
**Concepts**: Array methods (filter, map), arrow functions
```javascript
// Filter valuable loot and format output
const highValueLoot = lootValues.filter(value => value > 20);
```

### 08 - Data Fetcher
**Concepts**: Async/await, Promises, try/catch, error handling
```javascript
// Simulate asynchronous login and data fetching
async function loginUser() { await wait(2000); }
```

### 09 - Counter App
**Concepts**: DOM manipulation, event listeners, dynamic styling
```javascript
// Create an interactive button counter with visual feedback
button.addEventListener("click", () => { count++; });
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, Atom)
- Basic understanding of HTML (for lesson 09)

### Running the Exercises

#### Option 1: Browser Console
1. Open your browser's Developer Tools (F12 or Ctrl+Shift+I)
2. Navigate to the Console tab
3. Copy and paste code from any `.js` file
4. Press Enter to run

#### Option 2: Node.js
1. Install [Node.js](https://nodejs.org/)
2. Open terminal/command prompt
3. Navigate to project directory
4. Run any file:
   ```bash
   node 00-rpgCharCard.js
   ```

#### Option 3: HTML Integration
For lesson 09 (Counter App), create an HTML file:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Counter App</title>
</head>
<body>
    <h1 id="counter-display">0</h1>
    <button id="increment-btn">Increment</button>
    <script src="09-counterApp.js"></script>
</body>
</html>
```

## 💡 Learning Tips

1. **Start from the beginning** - Lessons build upon each other
2. **Experiment** - Modify values and see what happens
3. **Add console.logs** - Debug and understand code flow
4. **Create variations** - Try creating your own character, shop, or combat system
5. **Take notes** - Document what each concept does in your own words

## 🎯 Practice Challenges

After completing the lessons, try these challenges:

- **Easy**: Create a character with 3 different stats and a special ability
- **Medium**: Build a shop system that tracks multiple items and inventory
- **Hard**: Create a turn-based battle system with multiple enemies
- **Expert**: Combine everything into a mini text-based RPG game

## 🛠️ Extension Ideas

- Add experience points and leveling system
- Create different character classes with unique abilities
- Implement a skill tree system
- Build a quest tracking system
- Add equipment and armor mechanics
- Create a party system with multiple characters
- Implement save/load functionality using localStorage

## 📝 Notes

- The `.gitattributes` file ensures consistent line endings across different operating systems
- All exercises use ES6+ JavaScript syntax
- Code is intentionally kept simple for learning purposes
- Comments and console.logs are used extensively for clarity

## 🤝 Contributing

Feel free to:
- Add new gaming-themed exercises
- Improve existing code examples
- Fix bugs or typos
- Suggest new learning concepts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Created as a fun, engaging way to learn JavaScript fundamentals
- Inspired by RPG mechanics and game development concepts
- Designed for absolute beginners with no prior coding experience

## 📬 Contact

Questions or feedback? Feel free to open an issue or reach out!

---

**Happy Coding, Adventurer!** 🗡️✨

*Remember: Every expert programmer was once a beginner. Keep practicing, stay curious, and level up your skills one lesson at a time!*
