// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

// const filePath = "2-counter.md";

// // Asynchronous file read
// fs.readFile(filePath, "utf-8", (error, data) => {
//     if (error) {
//         console.error(error);
//         return;
//     }

//     console.log(data);
//     // You can perform additional operations here
// });
// const fs = require('fs');

// Function to read the contents of a file
function readFileAndPerformOperation(filePath) {
    // Read file asynchronously
    const data = fs.readFileSync(filePath, 'utf8')
    

        // Print the file contents
        console.log(`File Contents:\n${data}`);

        // Simulate an expensive operation (delay of 3 seconds)
        console.log('Start of Expensive Operation');
        expensiveOperation(() => {
            console.log('End of Expensive Operation');
        });
    }

// Function to simulate an expensive operation
function expensiveOperation(callback) {
    // Simulate an increasingly expensive operation (delay increases by 1 second each time)
    setTimeout(() => {
        console.log('Expensive operation completed.');
        callback();
    }, 1000); // You can increase the delay as needed
}

// Replace 'path/to/your/file.txt' with the actual file path you want to read
const filePath = "2-counter.md";

// Read the file and perform the operation
readFileAndPerformOperation("2-counter.md");
