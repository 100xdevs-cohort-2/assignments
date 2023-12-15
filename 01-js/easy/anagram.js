/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Lower = str1.toLowerCase();
  let str2Lower = str2.toLowerCase();

  if (
    str1Lower.replace(/[^\w]/g, "").split("").sort().join() ===
    str2Lower.replace(/[^\w]/g, "").split("").sort().join()
  ) {
    return true;
  }

  return false;
}

module.exports = isAnagram;
