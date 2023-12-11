const fs =  require('fs')

const fileP = '/media/abhi/Data/BTP/new data/sampdate.txt';
var content;
fs.readFile(fileP,'utf-8',(err,data)=>
{
    if (err) {
        console.error('Error reading the file:', err);
        return;
      }
      content=data;
})
console.log(content);
// console.log("chaal")
// const filePath = 'cohort-assignments/week-2/01-async-js/easy/likho.txt';
// console.log("chutiye")
// console.log(content)

// fs.writeFile(filePath,content,'utf-8',(err)=>
// {
//     if (err) {
//         console.error('Error writing the file:', err);
//         return;
//       }
//       console.log("created the file");
// })