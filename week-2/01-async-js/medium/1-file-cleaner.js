const fs = require('fs');

const spaceCounter = (data) => {
   let max = 0;

   for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ') {
         let temp = 0;
         for (let j = i; j < data.length; j++) {
            if (data[j] === ' ') {
               temp++;
            } else if (data[j] !== ' ') {
               break;
            }
         }
         if (max < temp) max = temp;
      }
   }

   return max;
};

fs.readFile('a.txt', 'utf-8', (err, data) => {
   data = data.trim();

   let spaces = spaceCounter(data);

   for (let i = 0; i < spaces / 2 + 1; i++) {
      data = data.replaceAll('  ', ' ');
   }
   console.log(data);
});
