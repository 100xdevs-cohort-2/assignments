/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    let strObj1 = {};
    let strObj2 = {};

    for (let i = 0; i < str1.length; i++) {
      if (!strObj1[str1.charAt(i).toLowerCase()]) {
        strObj1[str1.charAt(i).toLowerCase()] = 1;
      } else {
        strObj1[str1.charAt(i).toLowerCase()] =
          strObj1[str1.charAt(i).toLowerCase()] + 1;
      }

      if (!strObj2[str2.charAt(i).toLowerCase()]) {
        strObj2[str2.charAt(i).toLowerCase()] = 1;
      } else {
        strObj2[str2.charAt(i).toLowerCase()] =
          strObj2[str2.charAt(i).toLowerCase()] + 1;
      }
    }

    if (Object.keys(strObj1).length === Object.keys(strObj2).length) {
      for (let key in strObj1) {
        if (strObj1[key] === strObj2[key]) {
          delete strObj1[key];
          delete strObj2[key];
        } else {
          return false;
        }
      }
    } else {
      return false;
    }

    return true;
  }
}

module.exports = isAnagram;
