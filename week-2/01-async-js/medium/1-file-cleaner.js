const fs = require('fs');

const removeExtraSpaces = (data) => {
    let fileData = '';
    let spaceEncountered = false;
    for(let i=0; i<data.length; i++){
        if(data[i] === ' '){
            if(spaceEncountered){
                continue;
            }
            else{
                spaceEncountered = true;
                fileData += data[i];
            }
        }
        else {
            spaceEncountered = false;
            fileData += data[i];
        }
    }
    return fileData;
};


const fileCleaner = (fileName) => {
    fs.readFile(fileName, 'utf-8',(err,data)=>{
        if(err) throw err;
        console.log(`File "${fileName}" read successfully!`);
        let fileData = removeExtraSpaces(data);
    
        fs.writeFile(fileName, fileData, (err) =>{
            if(err) throw err;
            console.log(`File "${fileName}" cleaned successfully!`);
        });
    });
};

fileCleaner('./file.txt');
