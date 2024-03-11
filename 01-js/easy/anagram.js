/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   if (str1 === undefined || str2 === undefined) return false;
//   const STR1 = str1?.toLowerCase();
//   const STR2 = str2?.toLowerCase();
//   if (STR1.length === 0 && STR2.length === 0) return true;
//   if (STR1.length == STR2.length) {
//     for (let i = 0; i < STR1.length; i++) {
//       if (STR2.includes(STR1[i])) {
//         i++;
//       } else return false;
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

function isAnagram(str1, str2) {
  if (str1 === undefined || str2 === undefined) return false;
  if (str1.length != str2.length) return false;
  let STR1 = str1?.toLowerCase().split("").sort();
  let STR2 = str2?.toLowerCase().split("").sort();
  return STR1.join("") === STR2.join("");
}

module.exports = isAnagram;
