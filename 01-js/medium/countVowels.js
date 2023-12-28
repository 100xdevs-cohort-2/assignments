/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const cleanStr = str.replace(/\s/g, '').toLowerCase();
  let count =0;
  for (let index = 0; index < str.length; index++) {
    
    if(cleanStr[index]=='a'||cleanStr[index]=='e'||cleanStr[index]=='i'||cleanStr[index]=='o'||cleanStr[index]=='u'){
      count++;
    }
    
  }
  return count;
}

module.exports = countVowels;