/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// strings will be anagram if both contains the same number of letters and count of each alphabet should also be same, so that we can arrange the letters and form different strings
function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  const count = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // strings in JS are iterable
  // for of loop can be used on iterable
  // will be using (for of) to iterate over string

  for(let char of str1) {
    count[char] = (count[char] || 0) + 1; // handling undefined case using ||
  }

  for(let char of str2) {
    if(!count[char]) return false
    count[char]-=1
  }

  return true
}

module.exports = isAnagram;
