const fs = require("fs");
const prompt = require("prompt-sync")(); // Importing prompt-sync

// Step 1: Take user name as input
let name = prompt("Enter your name: ");

// Step 2: Append the user's name to the user.txt file
fs.appendFileSync("user.txt", name + "\n", (err) => {
    if (err) throw err;
});

// Step 3: Read and display all names from user.txt
const users = fs.readFileSync("user.txt", "utf-8");

console.log("Current users in user.txt:");
console.log(users);
