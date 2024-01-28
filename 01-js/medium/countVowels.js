/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let counter = 0;
    let s = str.replace(/ /g, '').toLowerCase();
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for(let char of s) {
      if(vowel.includes(char)) {
        counter++;
      }
    }
    return counter;
}

module.exports = countVowels;