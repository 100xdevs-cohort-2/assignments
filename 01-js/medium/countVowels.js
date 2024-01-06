/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const cleanStr = str.toLowerCase().split('');

    let vowel = 0;
    for ( let i=0; i < cleanStr.length; i++){
      if (cleanStr[i] === "a" || cleanStr[i] === "e" || cleanStr[i] === "i" || cleanStr[i] === "o" || cleanStr[i] === "u"){
        vowel ++
      }
    }
    return vowel;
}

module.exports = countVowels;