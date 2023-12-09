/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const vowels = {
  'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
  'A': true, 'E': true, 'I': true, 'O': true, 'U': true
};

const countVowels = (str) => {
  let ans = 0;
  for (let char of str) {
    if (char in vowels) {
      ans++;
    }
  }

  return ans;
};

module.exports = countVowels;
