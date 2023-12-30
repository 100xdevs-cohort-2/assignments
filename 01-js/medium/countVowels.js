/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

  if(str.length === 0)
    return 0;
  
  let count = 0;

  for(let char of str) {
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u') {
      count += 1;
    }

    if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
      count += 1;
    }
  }

  return count;
}

module.exports = countVowels;