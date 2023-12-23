/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const arr = str.split('');
  let ans = 0;
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  arr.forEach(element => {
    if(vowels.includes(element)) ans++;
  });
  return ans;
}

module.exports = countVowels;