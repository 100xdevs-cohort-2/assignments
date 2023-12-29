/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  if (str1.length !== str2.length) return false;

  let myMap = new Map();

  for (let char of str1) {
    myMap.set(char, (myMap.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!myMap.has(char)) {
      return false;
    }

    myMap.set(char, myMap.get(char) - 1);
  }

  myMap.forEach((value, key) => {
    if (value != 0) return false;
  });

  return true;
}

module.exports = isAnagram;
