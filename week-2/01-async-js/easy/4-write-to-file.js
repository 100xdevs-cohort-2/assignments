// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let text = "Writing into the file a.txt";

fs.writeFile("a.txt", text, function (data) {
	console.log("successfully written in the file");
	console.log(fs.readFileSync("a.txt", "utf-8"));
});
console.log("end");
