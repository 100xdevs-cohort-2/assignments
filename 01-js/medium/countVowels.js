/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let word = str.toLowerCase().split('');
  let count = 0;
  for( let letter of word){
    if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u'){
      count++;
    }
  }
  return count;
}

module.exports = countVowels;

// in gives index
// of gives value