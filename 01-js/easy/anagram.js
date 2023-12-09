/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1 === "" && str2 === "") {
    return true;
  }
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};

  let obj2 = {};

  for (let ele of str1.toLowerCase()) {
    if (obj1[ele]) {
      obj1[ele] = obj1[ele] + 1;
    } else {
      obj1[ele] = 1;
    }
  }

  for (let ele of str2.toLowerCase()) {
    if (obj2[ele]) {
      obj2[ele] = obj2[ele] + 1;
    } else {
      obj2[ele] = 1;
    }
  }

  for (let ele in obj1) {
    if (obj1[ele] !== obj2[ele]) {
      return false;
    }
    return true;
  }
}

module.exports = isAnagram;
