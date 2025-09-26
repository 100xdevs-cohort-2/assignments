/*
  Implement a function `countVowels` that takes a string as an argument and
  returns the number of vowels in the string. Note: Consider both uppercase and
  lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


function countVowels(str) {
  let countOfVowels = 0;
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('')
  for (let i = 0; i < cleaned.length; i++) {
    if (cleaned[i] == 'a' || cleaned[i] == 'e' || cleaned[i] == 'i' ||
        cleaned[i] == 'o' || cleaned[i] == 'u') {
      
      countOfVowels++
    }
    else continue
  }
  return countOfVowels
}


module.exports = countVowels;