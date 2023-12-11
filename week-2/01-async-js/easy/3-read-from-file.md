## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

fs.readFile('/media/nayan/Core 1/Javascript/Web_Dev/COHORT/class-2.1/Texting.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
    }

    // console.log(`File Content: ${data}`);
});
