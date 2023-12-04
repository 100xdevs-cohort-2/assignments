/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
const firstWordArray = str1.toLowerCase().split("");
  const secondWorkArray = str2.toLowerCase().split("");
  const joinArray = firstWordArray.concat(secondWorkArray);
  let hasSpecChar;

  const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (!firstWordArray.length === secondWorkArray.length) return false;

  for (let i = 0; i < joinArray.length; i++) {
    if (specialChar.test(joinArray[i])) hasSpecChar = true;
  }

  hasSpecChar === true ? false : true;

  const sortedStr1 = firstWordArray.sort().join("");
  const sortedStr2 = secondWorkArray.sort().join("");

  return sortedStr1 === sortedStr2 ? true : false;
}

module.exports = isAnagram;
