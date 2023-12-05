/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isLetter(char) {
  const charCode = char.charCodeAt(0);
  return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

function isAnagram(str1, str2) {
  let map1 = new Array(26).fill(0);
  let map2 = new Array(26).fill(0);
  if (str1.length != str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    // console.log(str1[i]);
    // console.log(str2[i]);
    if (isLetter(str1[i])) {
      map1[str1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    }
    if (isLetter(str2[i])) {
      map2[str2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    }
  }
  for (let i = 0; i < map1.length; i++) {
    // console.log(map1[i] + " " + map2[i]);
    if (map1[i] != map2[i]) {
      return false;
    }
  }
  return true;
}
module.exports = isAnagram;
