/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // vowels
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  // split string to array
  const strArr = str.split('');

  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    // if vowel, add to count
    if (vowels.includes(strArr[i])) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;