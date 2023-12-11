/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  str = str.toLowerCase().replace(/\s/g, '')
  vowels.forEach(vowel => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === vowel){
        counter += 1
      }
    }
  });
  return counter;
}

module.exports = countVowels;