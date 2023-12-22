const fs = require ('fs')

fs.readFile('try.txt','utf-8',(error,data)=>{
    console.log(data);

})

console.log('Starting expensive operation...');
for (let i = 0; i < 1000000000; i++) {
  // Expensive operation
}
console.log('Expensive operation complete.');
