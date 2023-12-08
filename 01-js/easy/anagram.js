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


  
  let counter = {};
  for (let letters of str1Lower) {
    counter[letters] = counter[letters] ? counter[letters] + 1 : 1;
  }
  for (let items of str2Lower) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

module.exports = isAnagram;
