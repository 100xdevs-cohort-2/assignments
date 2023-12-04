/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const Str1 = str1.toLowerCase().split(''); //spliting words separately
  const join1 = Str1.sort() //arranging all alphabetes in A-Z order and then joining all letters together

  const Str2 = str2.split('');
  const join2 = Str2.sort().join('');

  return join1 === join2; //comparing both the parameters
}
module.exports = isAnagram;
