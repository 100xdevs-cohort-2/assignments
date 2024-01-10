/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

  let ArrayString = str.toLowerCase().split("")
  let count = 0

  for(let i=0;i<ArrayString.length;i++){
    if(ArrayString[i] == 'a' || ArrayString[i] == 'e' || ArrayString[i] == 'i' || ArrayString[i] == 'o' || ArrayString[i] == 'u'){
      count = count + 1;
    }
  }
    // Your code here
  return count;
}

module.exports = countVowels;