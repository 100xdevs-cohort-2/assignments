## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

Code -> 
const fs = require('fs');

fs.writeFile("a.txt", "Hello My name is Mehul 👋.", (err) => {
   
if (err) {
  console.error('Error writing to the file:', err);
} else {
  console.log("Done Writting in File");
}
});