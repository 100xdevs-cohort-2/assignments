const fs = require('fs');

const fileCleaner = () => {
    // Read the file
    fs.readFile('./imput.txt', 'utf-8', (err, data) => {
        if(err){
            console.error(err);
        }
        // Clean the file
        const cleanedString = data.replace(/\s+/g, " ");

        // Write the file
        fs.writeFile('./imput.txt', cleanedString, 'utf-8', (err) => {
            if(err){
                console.error(`File Writing error: ${err}`)
            }
            console.log("File cleaned successfully");
        })

    })
}

fileCleaner();