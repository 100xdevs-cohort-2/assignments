<!-- Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require('fs');


const contentToWrite = "Hello, this is the content to be"; 

<!-- // The file path where you want to write the content -->
const filePath = "a.txt";

<!-- // Using the asynchronous writeFile function -->
fs.writeFile(filePath, contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Content has been written to the file successfully!');
  }
});