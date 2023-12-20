/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function hm_number(str) {
  let hm = {};
  for (const i of str) {
    if (hm[i] != undefined) {
      hm[i] = hm[i] + 1;
    } else {
      hm[i] = 1;
    }
  }
  return hm;
}
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1 == str2) {
    return true;
  }
  if (str1.length != str2.length) {
    return false;
  }
  hm1 = hm_number(str1);
  // hm2 = hm_number(str2);
  // console.log("--", hm1);
  // console.log("2", hm2);
  // if (hm1 == hm2) {
  //   return true;
  // } else {
  //   return false;
  // }
  for (const i of str2) {
    // console.log("--", hm1[i], i);
    if (hm1[i] == undefined) {
      return false;
    } else {
      if (hm1[i] <= 0) {
        return false;
      }
      hm1[i] = hm1[i] - 1;
    }
  }
  return true;
}
// console.log(isAnagram("listen", "silent"));
module.exports = isAnagram;
