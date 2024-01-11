/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const charInStr1 = {};
  str1
    .toLowerCase()
    .split("")
    .map((val) => {
      if (!charInStr1[val]) charInStr1[val] = 1;
      else charInStr1[val]++;
    });

  str2
    .toLowerCase()
    .split("")
    .map((val) => {
      if (!(val in charInStr1)) {
        charInStr1[val] = 1;
      } else {
        charInStr1[val]--;
        if (charInStr1[val] == 0) delete charInStr1[val];
      }
    });


  if (JSON.stringify(charInStr1) === "{}") return true;
  else return false;
}


module.exports = isAnagram;
