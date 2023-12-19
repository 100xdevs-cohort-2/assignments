/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*function formatString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}*/

/*function hasSpecialCharacters(str) {
  const regex = /[^\w\s]/;
  return regex.test(str);
}


function isAnagram(str1, str2) {
  if(str1.length == str2.length){
      let ans1 = str1.split('').sort().join('');
      let ans2 = str2.split('').sort().join('');
      if(ans1 === ans2){
        return true;
      }
  }
  if(hasSpecialCharacters(str1,str2)){
    return false;
  }
  else{
    return false;
  }
}*/

/*function isAnagram(str1, str2) {
  const formattedStr1 = formatString(str1);
  const formattedStr2 = formatString(str2);

  if (formattedStr1.length !== formattedStr2.length) {
    return false;
  }

  const charCount = {};

  for (let char of formattedStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of formattedStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // Ensure all character counts are zero in both strings
  for (let count in charCount) {
    if (charCount[count] !== 0) {
      return false;
    }
  }

  return true;
}*/


function formatString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function isAnagram(str1, str2) {
  if (str1.length === str2.length) {
    const formattedStr1 = formatString(str1);
    const formattedStr2 = formatString(str2);

    const sortedStr1 = formattedStr1.split('').sort().join('');  //sort only happens in array first array then sort then back to string
    const sortedStr2 = formattedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;   //== -> type corecion , === -> strict equality checker - no type corecion 
  }

  return false;
}

module.exports = isAnagram;
