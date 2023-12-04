/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function getCounterObj(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str.charAt(i).toLowerCase();

    if (obj[currentChar]) {
      obj[currentChar] += 1;
    } else {
      obj[currentChar] = 1;
    }
  }
  return obj;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counterObjStr1 = getCounterObj(str1),
    counterObjStr2 = getCounterObj(str2);

  console.log(counterObjStr1, counterObjStr2);

  for (let key in counterObjStr1) {
    if (counterObjStr1[key] !== counterObjStr2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
