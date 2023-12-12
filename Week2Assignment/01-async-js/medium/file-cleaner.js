const fs = require("fs");
// let data = "      hello     world    my    name   is       raman";

console.log("Hello world...");
console.log("Will read data from file now...")

function rem_whitespace(data) {
    data = data.trim().split(" ");
    let new_data = [];

    data.forEach(element => {
    if (element != "") {
        new_data.push(element);
    }
    });
    
    new_data = new_data.join(" ");
    
    return new_data
    
}


fs.readFile("sample-wr.txt", "utf-8", (err, data) => {
    console.log(`Data read from the file is - ${data}`);
    console.log("Removing whitespaces from the above data...");
    new_data = rem_whitespace(data);
    console.log(`Final String - ${new_data}`);
    fs.writeFile("sample-wr.txt", new_data, (err)=>{});
    console.log("Written the updated string to the same file successfully.")
})

console.log("This is a tester log to see if the fs library is async...")