/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (sort(str1) == sort(str2)) {
    return true;
  } else {
    return false;
  }
}

function sort(a) {
  a = a.toLowerCase();
  var arr = a.split("");
  arr.sort();
  return arr.join("");
}

console.log(isAnagram("hello world", "hello qorld"));

module.exports = isAnagram;
