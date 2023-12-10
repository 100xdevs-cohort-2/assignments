/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

  str = str.replace(/[^\w\s]/gi, '').replace(/\s/g, '').toLowerCase();

  let vowelCount = 0;

  for(let i = 0; i<str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') vowelCount += 1;
  }

  return vowelCount;
  
}

// console.log(countVowels('Hello, world!'))
// console.log(countVowels('Coding is fun!!!'))
// console.log(countVowels('Keep smiling, boo.'))

module.exports = countVowels;