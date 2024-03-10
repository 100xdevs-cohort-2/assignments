const fs = require('fs');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } 

            resolve(data);
        });
    });
}

const writeFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } 
            
            resolve();
        });
    });
}

/**
 * Cleans the file at the specified file path by removing any extra white spaces and writes the updated data back to the file.
 *
 * @param {string} filePath - The path of the file to be cleaned.
 * @return {Promise<void>} - A promise that resolves once the file has been successfully cleaned.
 */
const cleanFile = async (filePath) => {
   try {
       const data = await readFile(filePath);
       const newData = data.replace(/\s+/g, ' ');
       console.log(`oldData : ${data}\nnewData : ${newData}`);

       await writeFile(filePath, newData);
   } catch (err) {
       console.error(err);
   }
}

cleanFile('./medium/file.txt').then(() => console.log("File cleaned successfully"));