const fs = require("fs").promises;

async function cleanFile(file){
    // Read
    const data = await fs.readFile(file, "utf-8", (err, data) => {
        if(err){
            console.log("Error reading the file: ", err.message);
        }else {
            console.log("Original data: ", data);
        }
    });

    // Process

    let newData = data.replace(/\s+/g, " ");

    //Write

    await fs.writeFile("1-fileCleaner.txt", newData, (err)=> {
        if(err){
            console.log("Error writing the file: ", err.message);
        }
    });

    console.log("Updated the file successfully");

}

cleanFile("1-fileCleaner.txt");