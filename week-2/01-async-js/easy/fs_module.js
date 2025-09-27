const fs = require('fs');
const path= require('path');

// const fileName= "test.txt";
// const filePath= path.join(__dirname, fileName);

// console.log(fileName);
// console.log(filePath);

// const readFile= fs.readFileSync(filePath, "utf-8")

// console.log(readFile);

//Rename 
// syntax fs.renameSync(oldFilePath, newFilePath)

// const newFileName = "updatedTest.txt";

// const newfilePath = path.join(__dirname,newFileName);

// const renamedFile = fs.renameSync(filePath,newfilePath);
// console.log(renamedFile);


// ASYNC fs usage

// fs.writeFile(filePath, "This is the new data, the clean one.", "utf-8", (err)=>{
//  if(err) console.error(err);
//  else console.log(`File has been created.`)


// fs.appendFile(filePath, "\nThis is the updated data.", "utf-8", (err)=>{
//     if(err) console.error(err);
//     else console.log(`File has been updated.`)


//  fs.readFile(filePath,"utf-8", (err,data)=>{
//     if (err) console.error(err);
//     else console.log(data)
// });

// });
// })


// fs with PROMISES



const fileName= "fsPromises.txt";
const filePath= path.join(__dirname, fileName);
//  const file = __dirname
// fs.promises
// .readdir(file)
// .then((data)=> console.log(data))
// .catch((err)=> console.error(err))


fs.promises.writeFile(filePath, "This the new data using promises.","utf-8")
.then(()=> console.log('Data added'))
.catch((err)=> console.error(err) )

fs.promises.appendFile(filePath, "\nThis is the appended file.", "utf-8")
.then(()=> console.log('Appeneded the data.'))
.catch((err)=> console.error(err))