/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.toLowerCase().replace(/[^a-z0-9@#$%^&*()-_+=!]/g, "");
  let string2 = str2.toLowerCase().replace(/[^a-z0-9@#$%^&*()-_+=!]/g, "");

  if (string1.length !== string2.length) {
    return false;
  }

  let counter = {};

  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let item of string2) {
    if (!counter[item]) {
      return false;
    }

    counter[item] -= 1;
  }

  return true;
}

module.exports = isAnagram;

/* 
1. Convert the string to lowercase.
2. Compare the string length. 
3. Next create a counter variable to count the letters in each string.
4. Next use for of loop to check each letter of string1 if it exists in counter assign 0 if not assign 1.
5. Next check if letter of string2 are present in the counter which currently holds the letters of string1. If it holds subtract by 1 from the counter.
6. Lastly return true.
*/
