const fs = require('fs');

const expensiveOperation = () => {
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.random();
  }
  return result;
};

const moreExpensiveOperation = () => {
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += Math.sqrt(Math.log(Math.exp(Math.random())));
  }
  return result;
};

fs.readFile('../../02-nodejs/files/a.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
const result = expensiveOperation();
console.log('Result of expensive operation:', result);
const result2 = moreExpensiveOperation();
console.log('Result of more expensive operation:', result2);
