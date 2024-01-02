// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const { log } = require('console');
const fs = require('fs');

function writing(){
    fs.writeFile('file.txt','Just adding new content async task about writing file','utf-8',(err)=>{
        if(err){
            console.log('error writing to file: ',err.message);
        }
        else{
            console.log('writing file succesful');
        }
        let sum = 0;
            for(let i = 0;i<1000000000;i++){
                sum = sum+1;
            }
            console.log(`expensive operation done and dusted,sum is${sum}`);
    })

}
writing();
