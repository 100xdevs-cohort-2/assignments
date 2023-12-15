// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fileRead = require('fs');
function ReadFile(readFile_Path)
{
  setTimeout(function()
  {
    fileRead.readFile(readFile_Path,"utf-8", function(err,data)
    {
      if(err)
      {
        console.log("FileRead Error -->\n ",err);
        return;
      }
      console.log("File Read Data -->\n",data);
    });
  },1000);
  console.log("Please Wait....");
}

let path ="C:/100Xdevs/Assignment/Week-1/assignments/week-2/01-async-js/easy/Read.txt";
const data = ReadFile(path);