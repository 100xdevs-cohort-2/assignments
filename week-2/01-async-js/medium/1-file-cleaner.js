const fs = require('fs');

//function to remove extra spaces from a string

function removeExtraSpaces(text){
    return text.replace(/\s+/g, ' ').trim();
}


//read a file
fs.readFile('sample.txt', 'utf-8', (err,data) => {
    if(err){
        return console.error('Error reading the file', err);
    }
    
    // Remove extra spaces
    const modifiedtxt = removeExtraSpaces(data);

    //write the file
    fs.writeFile('sample.txt', modifiedtxt, 'utf-8', (err) => {
        if(err) {
            return console.error('Error writing the file', err);
        }

        console.log("Extra spaces is removed");
    });
})