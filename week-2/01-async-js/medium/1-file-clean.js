const fs=require("fs");
let d;
fs.readFile("./a.txt", "utf8", (err, data) => {
  if (err) {
    console.log("File can not opened" + err);
  }

  console.log("Initial data :- "+data);

   removeExtraSpaces(data);
});

function removeExtraSpaces(sentence) {
  // Replace multiple spaces with a single space
  const ans= sentence.replace(/\s+/g, " ").trim();

  fs.writeFile("./a.txt",ans,"utf-8",(err)=>{
    if (err) {
      console.log("File can not opened" + err);
    }

    console.log("File Data Changed to :- "+ ans);
  })
}