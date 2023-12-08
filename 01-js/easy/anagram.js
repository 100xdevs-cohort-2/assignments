/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const n = str1.length;
  const freq1 = Array(128).fill(0);
  const freq2 = Array(128).fill(0);

  for (let i = 0; i < n; i++) {
    let idx = str1.charCodeAt (i);
    freq1[idx]++;
  }

  for (let i = 0; i < n; i++) {
    let idx = str2.charCodeAt (i);
    freq2[idx]++;
  }

  for (let i = 0; i < 128; i++) {
    if (freq1[i] != freq2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
