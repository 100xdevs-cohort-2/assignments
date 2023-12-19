// Reading the contents of a file

//Write code to read contents of a file and print it to the console. 
//You can use the fs library to as a black box, the goal is to understand async tasks. 
//Try to do an expensive operation below the file read and see how it affects the output. 
//Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

/*fs.readFile("file.txt", 'utf-8', (err, data) => {
        console.log(data); // Display file content here
    }
);*/

setTimeout(function getFile(){
    setTimeout(function file(){fs.readFile("file.txt", function (err, data) { 
        if (err) { 
          return console.error(err); 
        } 
        console.log("Data read : " + data.toString()); 
          
      });
    },1000);
    
},1000)