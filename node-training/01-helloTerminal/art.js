const figlet = require('figlet'); // Import the library we just downloaded

// The library takes text and a callback function
figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        return;
    }
    console.log(data); // Print the cool art
});