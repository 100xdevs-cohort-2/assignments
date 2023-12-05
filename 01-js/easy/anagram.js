/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else if (str1.length == 0 && str2.length == 0) {
    return true;
  } else {
    let set1 = new Set();
    let set2 = new Set();

    for (let i = 0; i < str1.length; i++) {
      set1.add(str1.charAt(i).toLowerCase());
      set2.add(str2.charAt(i).toLowerCase());
    }

    if (set1.size === set2.size) {
      const arr1 = Array.from(set1);
      const arr2 = Array.from(set2);

      arr1.sort();
      arr2.sort();

      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
        return true;
      }
    } else {
      return false;
    }
  }
}

module.exports = isAnagram;
