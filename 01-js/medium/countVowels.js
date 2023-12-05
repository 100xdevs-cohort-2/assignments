/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  return [...str.toLowerCase()].reduce((a, p) => {
    vowels[p] && ++a;
    return a;
  }, 0);
}

module.exports = countVowels;

console.log(countVowels(""));
