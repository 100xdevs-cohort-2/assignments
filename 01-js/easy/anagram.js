/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {


  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if(str1 === str2)
      return true;

  if(str1.length !== str2.length)
      return false;

  let counter = new Map();

  for(let i=0; i<str1.length; i++) {
    if(counter.has(str1[i])) {
      let currCnt = counter.get(str1[i]) + 1;
      counter.set(str1[i], currCnt);
    } else {
      counter.set(str1[i], 1);
    }

    if(counter.has(str2[i])) {
      let currCnt = counter.get(str2[i]) - 1;
      counter.set(str2[i], currCnt);
    } else {
      counter.set(str2[i], -1);
    }
  }


  for (let value of counter.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
