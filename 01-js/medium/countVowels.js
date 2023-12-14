/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  // Your code here
  const vowels = ['a','e','i','o','u']; 
  let c=0; 
  for(let i=0;i<str.length;i++)
  {
    if(vowels.includes(str[i].toLowerCase()))
    c++;
  }
  return c; 
}

module.exports = countVowels;