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

const cleanFile = async (filePath) => {
   try {
       const data = await readFile(filePath);
       const newData = data.replace(/\s+/g, ' ');
       const fullData =  `oldData : ${data}\nnewData : ${newData}`;

       await writeFile(filePath, fullData);
       console.log("File cleaned successfully");
   } catch (err) {
       console.error(err);
   }
}

cleanFile('./medium/file.txt');