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



const fs=require('fs');


function cleanFile(filename){
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            console.error(`Error reading file: ${err}`);
            return;
        }

        const cleandContent=data.replace(/\s+/g,'');


        fs.writeFile(filename,cleandContent,'utf-8',(err)=>{
            if(err){
                console.error(`Error writting to file: ${err}`);
                return; 
            }
            console.log(`file cleaned and updated: $(filename)`);
        });
    });
}




// Specify the file path you want to clean
const filename='file.txt';


// calling cleanFile Function
cleanFile(filename);