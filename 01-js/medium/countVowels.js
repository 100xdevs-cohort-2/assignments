/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  // steps
  // create a set of vowels
  // iterate through the string to store the vowel count in var count
  // return count

  // time complexity - O(n)
  // space complexity - O(1) (as we are storing 5 vowels we can consider it to be constant)

    let count = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for(let char of str.toLowerCase())
    {
      if(vowels.has(char))
        count++;
    }

    return count;
}
module.exports = countVowels;
