/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  count = 0

  for(let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case 'A':
      case 'a':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        count++;
        break;
    }
  }

  return count;
}

console.log(countVowels("aaei"));

module.exports = countVowels;