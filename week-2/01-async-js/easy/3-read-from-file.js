const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
   console.log(data);
});

// Expensive task
function putSomeLoadOnCors() {
   let a = 0;
   for (let i = 0; i < 1000000000; i++) {
      a++;
   }
}

putSomeLoadOnCors();
console.log('After 1000000000 iterations');

// Some more load
putSomeLoadOnCors();
console.log('After +1000000000 iterations');
putSomeLoadOnCors();
console.log('After more iterations');
