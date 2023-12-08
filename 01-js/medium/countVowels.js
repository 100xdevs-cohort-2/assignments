/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ans = 0;

  const isVowel = (char) => {
    const ch = char.toLowerCase();
    return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
  }

  for (let char of str) {
    if (isVowel(char)) ans++;
  }

  return ans;
}

module.exports = countVowels;