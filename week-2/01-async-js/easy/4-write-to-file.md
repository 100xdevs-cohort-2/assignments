## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

let sum =0;
for(i=0;i<1000000000;i++){
  sum+=1;
}
let data = "Jai Shri Ram";

fs.writeFile("a.txt",data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});
