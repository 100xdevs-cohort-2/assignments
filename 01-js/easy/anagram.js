/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length){
    return false;
  }
  else{
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  let sortedString1  = sortString(cleanStr1);
  let sortedString2  = sortString(cleanStr2);
  console.log (sortedString1);
console.log(sortedString2)
  if (sortedString1 === sortedString2){
    return true 
  }
  else {
    return false
  }
  }
}

let sortString = (stringg) => {
	return stringg.split("").sort().join("");
};




module.exports = isAnagram;
