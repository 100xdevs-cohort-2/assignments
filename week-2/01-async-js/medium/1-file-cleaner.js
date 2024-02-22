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
//---------------------------------------------------------------------------------------------------------
// following is call back version 

// const fs = require('fs');

// fs.readFile('../easy/test.txt','utf8',(err,data)=>{
//     if(err) console.log("Cannot read data. An error occured !");
//     let new_data = data.replace(/\s+/g, ' ').trim();
//     fs.writeFile('../easy/test.txt',new_data,(err)=>{
//         if(err) console.log("Error in writing back the file");
//         else{
//             console.log("Writing done successfully");
//         }
//     });
// });

//-------------------------------------------------------------------------------------------------

//Promisified version - it will throw error as readfile does not return promise,So first we need to promisify the readfile and writefile function.

// const fs = require('fs');

// fs.readFile('../easy/test.txt','utf8',(err,data)=>{
//     if(err) console.log("Error in reading file");
//     const new_data = data.replace(/\s+/g, ' ').trim();
//     return new_data;
// })
// .then((new_data)=>{
//     fs.writeFile('../easy/test.txt',new_data,(err)=>{
//         if(err) console.log("Error while writing file");
//         else{
//             console.log("Writing successful");
//         }
//     });
// });

//-----------------------------------------------------------------------------------------------
// promisify method make a function promisified.
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

readFileAsync('../easy/test.txt', 'utf8') // reslove reject yaha nahi aata , wo jab new promise banate hao tab aata hai.
    .then((data) => {
        const new_data = data.replace(/\s+/g, ' ').trim();  
        return new_data;   //then ke andr return hota hai resolve nai.           
    })
    .then((new_data)=>{                                   // we can use in next then whtever is returned form previous promise 
        writeFileAsync('../easy/test.txt', new_data);
    })
    .then(() => {
        console.log("Writing successful");
    })
    .catch((err) => {
        console.log("Error:", err);
    });
