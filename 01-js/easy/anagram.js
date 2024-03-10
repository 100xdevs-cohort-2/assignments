/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length)
  return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  chDict = {}
  // console.log(chDict);

  for(let i=0; i<str1.length; i++) {
    ch1 = str1[i];
    ch2 = str2[i];
    // console.log(ch1 + "," +ch2);
    if (ch1 in chDict) {
      chDict[ch1]+=1;
    }
    else {
      chDict[ch1] = 1;
    }
    
    if (ch2 in chDict) {
      chDict[ch2] -= 1;
    }
    else {
      chDict[ch2] = -1;
    }
  }
  // console.log(chDict);

  for(x in chDict) {
    if (chDict[x] != 0)
      return false;
  }

  return true;
}

module.exports = isAnagram;

// console.log(isAnagram('abc!', '!bac')) // *Other chars matched !,_, space
// console.log(isAnagram('Debit Card', 'Bad Credit')) //* case insensitive