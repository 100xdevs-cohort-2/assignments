/*
  Implement a function `countVowels` that takes a string as an argument 
  and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const temp = str.toLowerCase().split(' ').join("");
  const noSpecialChars_spaces = temp.replace(/[^a-zA-Z0-9 ]/g, '');
    const vowels =['a', 'e', 'i', 'o', 'u'];
    let count =0
    vowels.forEach(vowel => {
      for (let i = 0; i < noSpecialChars_spaces.length; i++) {
        if (noSpecialChars_spaces[i] === vowel) {
          count++
        }
        
      }
    });

    return count;
}
module.exports = countVowels;