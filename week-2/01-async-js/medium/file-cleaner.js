// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs').promises;

const FILE_PATH = 'file-cleaner.txt';

async function cleanContent(filepath){
    try{
        const data = await fs.readFile(filepath, 'utf-8');
        const replacedContent = data.replace(/\s+/g, ' ').trim();
        await fs.writeFile(filepath, replacedContent);
        
        console.log('File Content Has Been Cleaned !!');

        const newData = await fs.readFile(filepath, 'utf-8');
        console.log('New Content of the File: ');
        console.log(newData);
    }
    catch(err){
        console.error('Error Processing the file: ', err.message);
    }
}

cleanContent(FILE_PATH);