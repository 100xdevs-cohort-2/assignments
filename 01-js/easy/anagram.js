/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  }

  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  let frequencyOfNewStr1 = new Map();
  let frequencyOfNewStr2 = new Map();

  for(let i = 0; i < newStr1.length; ++i) {
    // store the frequency of each distinct characters of newStr2
    if(frequencyOfNewStr1.has(newStr1[i]) == false) {
      frequencyOfNewStr1.set(newStr1[i], 1);
    } else {
      frequencyOfNewStr1.set(newStr1[i], frequencyOfNewStr1.get(newStr1[i]) + 1);
    }

    // store the frequency of each distinct characters of newStr2
    if(frequencyOfNewStr2.has(newStr2[i]) == false) {
      frequencyOfNewStr2.set(newStr2[i], 1);
    } else {
      frequencyOfNewStr2.set(newStr2[i], frequencyOfNewStr2.get(newStr2[i]) + 1);
    }
  }
  
  for(const [key, value] of frequencyOfNewStr1) {
    if(frequencyOfNewStr2.has(key) == false) {
      return false;
    } else if(value != frequencyOfNewStr2.get(key)) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
