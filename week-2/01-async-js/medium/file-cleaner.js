const fs = require('fs').promises;

async function cleanFile(filename) {
    try {
        // Read the file asynchronously
        const data = await fs.readFile(filename, 'utf8');

        // Clean up extra spaces
        const cleanedContent = data.replace(/\s+/g, ' ');

        // Write the cleaned content back to the same file
        await fs.writeFile(filename, cleanedContent, 'utf8');

        console.log('File cleaned successfully.');
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

// Specify the file you want to clean
const filename = 'test.txt'; // Replace with the actual file name

// Call the function to clean the file
cleanFile(filename);
