const fs = require("fs");
let a =0;

function reading(){
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})
}

reading();
let n = 1000000000;
for (i=0;i<n;i++){
    a+=i;
}


console.log(a);

// const fs = require("fs");

// let a = 0;

// function reading(callback) {
//   fs.readFile("a.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }

//     console.log(data);

//     // Perform calculations after reading the file
//     let n = 1000;
//     for (let i = 0; i < n; i++) {
//       a += i;
//     }

//     // Invoke the callback with the result
//     callback(a);
//   });
// }

// // Call the reading function
// reading(result => {
//   // This will be executed after the file is read and calculations are done
//   console.log("Final result:", result);
// });
