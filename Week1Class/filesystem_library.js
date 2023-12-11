const fs = require("fs");

fs.readFile("sample.txt", "utf-8", function(err, data) {
    console.log(data)
});

console.log("Hi from code!");
let a = 0;
for (i=0; i<1000000000; i++) {
    a++;
}

console.log("Hi there 2 from code!");