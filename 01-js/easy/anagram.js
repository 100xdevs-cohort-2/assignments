/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //filtering only alphabets
  const clean_str = (str) => str.toLowerCase().replace(/[^a-z]/g, "");
  //filtering special charecter
  const clean_str_sc = (str_sc) => str_sc.toLowerCase().replace(/[a-z]/g, "");

  let sc1 = clean_str_sc(str1);
  let sc2 = clean_str_sc(str2);

  let clean_str1 = clean_str(str1);
  let clean_str2 = clean_str(str2);

  const a = clean_str1.split("").sort().join("");
  const b = clean_str2.split("").sort().join("");

  if (sc1 != sc2) {
    return false;
  } else {
    return (
      clean_str1.split("").sort().join("") ===
      clean_str2.split("").sort().join("")
    );
  }
}


module.exports = isAnagram;
