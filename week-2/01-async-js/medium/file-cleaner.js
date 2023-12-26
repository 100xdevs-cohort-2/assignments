const fs = require("fs");

const filePath =
  "D:/100x-Cohort/assignments/week-2/01-async-js/medium/sampleFile.txt";

const formatText = (str) => {
  if (str === undefined) {
    console.log("String is undefined");
    return "";
  }

  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      resultStr.length > 0 &&
      resultStr[resultStr.length - 1] === " " &&
      str[i] === " "
    ) {
      continue;
    }
    resultStr += str[i];
  }
  return resultStr;
};

const readFile = (filePath) => {
  return new Promise(function(resolve , reject){
    fs.readFile(filePath , "utf-8", (err , data) => {
      if(err){
        reject(`File Not Found : ${err}`);
      }else{
        resolve(data);
      }
    })
  })
}

const writeFile = (filePath , content) => {
  console.log(filePath)
  return new Promise(function(resolve,reject){
    fs.writeFile(filePath , content , (err)=>{
      if(err){
        reject(err);
      }else{
        resolve();
      }
    })
  })
}

async function main() {
  const fileContent = await readFile(filePath);
  
  const formattedFileContent = formatText(fileContent);

  try{
    await writeFile(filePath , formattedFileContent);
    console.log("Operation Done Successfully");
  }
  catch(err){
    console.error("Inside Catch: ",err);
  }

  
}

main();