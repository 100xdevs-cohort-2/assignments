// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const data = "Hello from modified a.txt";

fs.writeFile("a.txt", data, function () {
    console.log("Data has been written to file successfully");
})
console.log("hello");

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
})