// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const { log } = require('console');
const fs = require('fs');


function readingFile(){
    fs.readFile('file.txt','utf-8',(err,data)=>{
        if(err){
            console.log('Error happend reading your file:',err.message);
        }
        else{
            console.log(data);
        }

        let sum = 0;
        for(let i = 0;i<1000000000;i++){
            sum = sum+1;
        }
        console.log(`expensive operation done and dusted,sum is${sum}`);
    
    })

   
    

}

readingFile()
