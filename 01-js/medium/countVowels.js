/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; 
    // Your code here
    const filteredString = str.replace(/\s/g, '').toLowerCase();

    let sum = filteredString.split('').reduce((accumulator, currentValue) => {
      if(vowels.includes(currentValue)){
        accumulator += 1;
      }
      return accumulator;
    }, 0 );

    return sum;
}

module.exports = countVowels;