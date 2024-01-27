const fs = require('fs');


const writeFile =  () => {
    const fileContent = "## Write to a fileUsing the fs library again, try to write to the contents of a file.You can use the fs library to as a black box, the goal is to understand async tasks.";

    fs.writeFile('./output.txt', fileContent, { encoding: 'utf8' }, (err) => {
        if(err){
            console.error(`File writing error: ${err}`);
        }
        console.log("File Successfully written");
    });

    console.log("File Writing started");
}

writeFile();