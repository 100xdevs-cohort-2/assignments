/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  const map1 = new Map();
  for (let i = 0; i < str1.length; i++) {
    let current = str1.charAt(i).toLowerCase();
    if (map1.has(current)) {
      let count = map1.get(current)
      map1.set(current, count + 1)
    }
    else {
      map1.set(current, 1)
    }
  }
  for (let i = 0; i < str2.length; i++) {
    let current = str2.charAt(i).toLowerCase();
    if (map1.has(current)) {
      let count = map1.get(current)
      map1.set(current, count - 1)
      if (count - 1 < 0) return false;
    }
    else {
      return false;
    }
  }
  return true;
}


console.log(isAnagram("Hello", "hello"));
module.exports = isAnagram;
