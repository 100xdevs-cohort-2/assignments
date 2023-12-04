/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = new Array(26).fill(0);
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    const index1 = str1.charCodeAt(i) - 'a'.charCodeAt(0);
    const index2 = str2.charCodeAt(i) - 'a'.charCodeAt(0);

    charCount[index1]++;
    charCount[index2]--;
  }

  for (let count of charCount) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
