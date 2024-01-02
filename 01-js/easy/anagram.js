/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const word1 = str1.replace(/\s/g,'').toLowerCase();
  const word2 = str2.replace(/\s/g,'').toLowerCase();
  if(word1.length != word2.length){
    return false
  }
  const sortedWord1 = word1.split('').sort().join('');
  const sortedWord2 = word2.split('').sort().join('');

  return sortedWord1 === sortedWord2;
}

module.exports = isAnagram;
