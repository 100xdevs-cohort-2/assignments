// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const content = "My Name is Sharma"

console.log("Before reading file")
const fs = require("fs");

fs.readFile("a.txt", 'utf-8', (err, data) => {

    if (err) {
        console.error("Error reading the file:", err);
        return;
      }

  console.log(data);
});

fs.writeFile("a.txt", content, (err, data) => {

    if (err) {
        console.error("Error reading the file:", err);
        return;
      }

});

setTimeout(() => {
  console.log("This message will appear after 3 seconds")
}, 3000);

console.log("after setTimeout");

var sum = 0;

for(let i = 0; i<10000000; i++)
{
  sum = sum + i
}

console.log("Total Sum : ", sum);


console.log("Program is over");