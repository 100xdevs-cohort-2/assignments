/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sanitizedStr1 = sanitizeString(str1);
  const sanitizedStr2 = sanitizeString(str2);

  const sortedStr1 = sanitizedStr1.split('').sort().join('');
  const sortedStr2 = sanitizedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
function sanitizeString(str) {
  return str.replace(/[^a-z0-9]/gi, ' ').toLowerCase();
}
console.log(sanitizeString('hello!'));
console.log(isAnagram('hello', 'hello!'));
console.log(isAnagram('openai!', 'open'));

module.exports = isAnagram;
