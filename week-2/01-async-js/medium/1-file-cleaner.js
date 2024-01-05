// Load the fs module
const fs = require('fs').promises;

var data1;

async function readFileContent() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        data1 = data;
        console.log('File content:', data);
    } catch (err) {
        console.error('An error occurred while reading the file:', err);
    }
}

readFileContent();

const sentence = data1.replace(/\s+/g, ' ').trim();

// Load the fs module
const fs = require('fs').promises;

async function writeFileContent() {
    try {
        await fs.writeFile('example.txt', sentence);
        console.log('File content was written successfully.');
    } catch (err) {
        console.error('An error occurred while writing to the file:', err);
    }
}

writeFileContent();

