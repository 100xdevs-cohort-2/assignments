// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fileLib = require('fs');
let dataWrite = "Write File Function Data verification ...please workout more problems"
function fileWrite(WriteFile)
{
  setTimeout(function()
  {
    fileLib.writeFile(WriteFile,dataWrite,function(err)
    {
      if(err)
      {
        console.log("WriteFile Error -->\n",err);
      }
      else{
        console.log("Write Done....\n Please open the file - ",WriteFile);
      }
    })
  },1000);
  console.log("Please Wait...");
}

let writeFile_Path = "C:/100Xdevs/Assignment/Week-1/assignments/week-2/01-async-js/easy/WriteFile.txt";
const callFun = fileWrite(writeFile_Path);