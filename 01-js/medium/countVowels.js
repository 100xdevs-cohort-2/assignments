/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  for(let s of str){
    if(['a', 'A', 'E', 'e', 'I', 'i', 'O',  'o', 'U', 'u'].includes(s)){
      count = count + 1;
    }
  }
  return count;
}

module.exports = countVowels;