/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  const uniqueVowels = new Set();
  const characters = str.replace(/[^\w\s]/g, '').split('');

  characters.forEach(char => {
    if (vowels.includes(char)) {
      uniqueVowels.add(char.toLowerCase()); 
    }
  });

  return uniqueVowels.size>0? uniqueVowels.size:0;
}

module.exports = countVowels;