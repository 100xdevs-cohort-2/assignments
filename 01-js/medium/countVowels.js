/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let c= 0;
    str = str.toLowerCase()
    for (const i of str) {
      if(i === 'a' || i==='e'||i==='o'||i==='u'|| i==='i') c++;
    }
    return c;
}

module.exports = countVowels;