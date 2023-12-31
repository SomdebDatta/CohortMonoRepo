/*Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/
const fs = require("fs");
console.log("Hello World!");

let data = "What jhumka?!\nJhumka gira re bareilly ke bazaar mein";

console.log("Writing data to sample2.txt now...")

fs.writeFile("sample2.txt", data, (err) => {
    console.log("Writing data to sample2.txt completed successfully.");
})

console.log("But since fs is an async library, the following loop will run before the file reading statement.");

for(let i=0; i<10000000000; i++);
console.log("Loop ran successfully.");