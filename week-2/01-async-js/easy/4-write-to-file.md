## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

let dataToAdd = "\nYoo keep going !!";

fs.appendFile('/media/nayan/Core 1/Javascript/Web_Dev/COHORT/class-2.1/Texting.txt', dataToAdd, (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
    }

    console.log(`File Content: ${data}`);
})
