## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");
const siva= "Hello world"
fs.writeFile("a.txt",siva,{flag:'a'}(err,data)=>{
  if(err) throw err;
  else console.log("Successfully written the file)
})