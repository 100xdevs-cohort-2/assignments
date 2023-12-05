/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowels = 0;
  for(let i=0;i<str.length;i++){
    switch(str[i]){
      case "a":
        vowels++;
        break;
      case "e":
        vowels++;
        break;
      case "i":
        vowels++;
        break;
      case "o":
        vowels++;
        break;
      case "u":
        vowels++;
        break;
      case "A":
        vowels++;
        break;
      case "E":
        vowels++;
        break;
      case "I":
        vowels++;
        break;
      case "O":
        vowels++;
        break;
      case "U":
        vowels++;
        break;
    }
  }
  return vowels
}

module.exports = countVowels;