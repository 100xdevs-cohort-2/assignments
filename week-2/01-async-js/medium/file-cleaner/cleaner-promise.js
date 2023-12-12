const { resolve } = require('path');

const fs = require('fs').promises;

async function readAndCleanFile(){
    try{
        const fileContent = await fs.readFile('/Users/akshay.thakur/Documents/personal/assignments/week-2/01-async-js/medium/file-cleaner/file.txt', 'utf-8');

        const processedContent = await cleanFile(fileContent);

        const isWritten = await writeFile(processedContent);
    }catch(err){
        console.log(err);
    }
}


function cleanFile(fileContent){
    return new Promise((resolve, reject) => {
        const lines = fileContent.split('\n').map((item) => {
            return item.replace(/\s+/g, ' ').trim();
        });

        let processedContent = lines.join('\n');

        resolve(processedContent.trim());
    });
}


function writeFile(processedContent){
    return new Promise((resolve, reject) => {
        fs.writeFile('/Users/akshay.thakur/Documents/personal/assignments/week-2/01-async-js/medium/file-cleaner/file.txt', processedContent, (err) =>{
            if(err) reject(err);
            resolve('File Cleaned Successfully');
        });
    });
}

readAndCleanFile();