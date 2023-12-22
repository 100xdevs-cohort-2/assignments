// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs=require('fs');
fs.writeFile('testWrite.txt',"kuch bhi likho mujhe kya!",(error)=>{
    // if(err) throw err;
   console.log("Jay jagannath!");
})