const fs = require("fs");
console.log("Hello World");

console.log("Reading from a file will start now...")

fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log("The following is text is from the file - ")
    console.log(data);
    console.log("Reading from file completed successfully.")
});

console.log("But since fs is an async library, the following loop will run before the file reading statement.");

for(let i=0; i<10000000000; i++);
console.log("Loop ran successfully.");