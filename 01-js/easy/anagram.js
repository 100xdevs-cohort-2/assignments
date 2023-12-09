/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var seen1 = {};

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

for (let i = 0; i < str1.length; i++) {
  if (seen1[str1[i]]) {
    seen1[str1[i]]++;
  } else {
    seen1[str1[i]] = 1;
  }
}

for (let j = 0; j < str2.length; j++) {
  if (seen1[str2[j]]) {
    seen1[str2[j]]--;
  } else {
    return false;
  }
}

  return true;
}

module.exports = isAnagram;
