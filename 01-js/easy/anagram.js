/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1obj = createObject(str1.toLowerCase());
  const str2obj = createObject(str2.toLowerCase());

  const isExist = Object.keys(str2obj)?.every((element) => {
    if (str1obj[element] !== str2obj[element]) return false;
    return true;
  });

  if (!isExist) return false;
  return true;
}

function createObject(string) {
  let strObject = {};
  for (let i = 0; i < string.length; i++) {
    if (!strObject[string[i]]) {
      strObject[string[i]] = 0;
    }
    strObject[string[i]] = strObject[string[i]] + 1;
  }
  return strObject;
}

module.exports = isAnagram;
