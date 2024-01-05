/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // convert string to lowerCase
  const lowerCaseStr = str.toLowerCase();

  let vowelCount = 0;

  vowels = ['a','e','i','o','u'];

  for(i=0; i<lowerCaseStr.length; i++){
    if(vowels.includes(lowerCaseStr[i])){
      vowelCount++ ;
    }
  }

return vowelCount;
}

module.exports = countVowels;