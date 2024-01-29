## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


const fs=require("fs");

fs.writeFile("file.txt","new data that is going to be added in the file",(err)=>{
  if (err) return console.log(err);
  console.log("done");
})