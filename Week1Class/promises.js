const fs = require("fs");

function FSWrapper() {
    console.log("You have entered FSWrapper function!")
    return new Promise(function(resolve) {
        fs.readFile("sample.txt", "utf-8", function(err, data) {
            resolve(data);
        });
        console.log("Sample file read successfully!")
    });
}

function onDone(data) {
    console.log(data);
}

FSWrapper().then(onDone);