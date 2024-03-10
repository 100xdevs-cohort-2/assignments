/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str=str.toLowerCase();
  for(let element of str)
  {
    for (let i = 0; i < 5; i++) {
      if (element === vowels[i]){
        count++;
        break;
      }
    }
  }

  return count;
}

module.exports = countVowels;
