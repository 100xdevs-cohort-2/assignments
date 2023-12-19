const fs = require('fs');

function cleaner(filename) {
    try {
        // Synchronously read the file
        let readdata = fs.readFileSync(filename, 'utf8');

        // Perform the cleaning operation
        let cleaneddata = readdata.replace(/\s+/g, ' ');

        // Synchronously write the cleaned data back to the file
        fs.writeFileSync(filename, cleaneddata, 'utf8');
        
        console.log('File cleaned and written successfully.');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// Example usage:
cleaner('a.txt');
