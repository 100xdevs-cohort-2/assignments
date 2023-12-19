import fs from 'fs'

fs.writeFile("./write-to-file.txt","this is some example data!!!",'utf-8',(err) => {
  if (err) {
    console.log(err);
  }else{
    console.log("data written into the file successfully");
  }
}
)