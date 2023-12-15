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

const fileRead = require('fs');
function RemoveSpace(filePath){
  setTimeout(function()
  {
    fileRead.readFile(filePath,"utf-8",function(err,data){
      if(err)
      {
        console.error("Error While Reading File -->\n",err);
      }
      else{
        if(data)
        {
          console.log("Read Completed");
          const removeSpace = data.replace(/\s+/g, ' ').trim();
          fileRead.writeFile(filePath,removeSpace,function(err)
          {
            if(err)
            {
              throw err;
            }
          })
          console.log("Removed extra space and wrote into same File\n Please open the file -",filePath);
        }
      }
    })
  },1000);
  console.log("Please Wait....");
}

const filePath = "C:/100Xdevs/Assignment/Week-1/assignments/week-2/01-async-js/medium/ReadRemoveWrite.txt"
const data = RemoveSpace(filePath);